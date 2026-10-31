import * as THREE from 'three';
import { createWorld } from './world/World.js';
import { Player } from './entities/Player.js';
import { Bot } from './entities/Bot.js';
import { Effects } from './systems/Effects.js';
import { Hazards } from './systems/Hazards.js';
import { HUD } from './ui/HUD.js';
import { Input } from './core/Input.js';
import { WEAPONS, randomWeapon, RARITY } from './data/weapons.js';
import { BOT_NAMES, CHAT_LINES } from './data/maps.js';

const $ = (id) => document.getElementById(id);
const rand = (a, b) => a + Math.random() * (b - a);
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

function raySphere(origin, dir, center, radius) {
  const oc = center.clone().sub(origin);
  const t = oc.dot(dir);
  if (t < 0) return -1;
  const d2 = oc.lengthSq() - t * t;
  const r2 = radius * radius;
  if (d2 > r2) return -1;
  return t - Math.sqrt(r2 - d2);
}

export class Game {
  constructor({ renderer, map, skin, quality, onRestart, onExit }) {
    this.renderer = renderer;
    this.map = map;
    this.skin = skin;
    this.quality = quality;
    this.opts = { onRestart, onExit };
    this.canvas = renderer.domElement;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(70, innerWidth / innerHeight, 0.08, 460);
    this.time = 0;
    this.state = 'drop';
    this.aliveCount = 30;
    this.kills = 0;
    this.damageDealt = 0;
    this.shake = 0;
    this.aimWobble = 0;
    this.tmpMuzzle = new THREE.Vector3();
    this.projectiles = [];
    this.boomerangs = [];
    this.burnZones = [];
    this.ambientTimer = 14;
    this.lastFrame = 0;
    this.fpsAcc = 0; this.fpsFrames = 0; this.fpsCheck = 0; this.downgraded = false;
    this.pausedFrom = 'drop';
    this.disposed = false;
    this.ac = new AbortController();

    this.playerName = skin.gloves ? 'Miguel Furioso' : 'Miguel';

    // Calidad / render
    const dpr = Math.min(devicePixelRatio || 1, 2);
    let pr = dpr;
    if (quality === 'baja') pr = 1;
    else if (quality === 'auto') pr = Math.min(dpr, matchMedia('(pointer: coarse)').matches ? 1.4 : 2);
    renderer.setPixelRatio(pr);
    renderer.setSize(innerWidth, innerHeight, false);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.NoToneMapping;

    this.world = createWorld(this.scene, map, { quality });
    this.effects = new Effects(this.scene);
    this.hud = new HUD({ map, skin, world: this.world });

    // Spawn del jugador: cerca de un punto de interés para que el mapa se vea
    const landmarks = [
      { x: 95, z: -40 }, { x: -95, z: 35 }, { x: 0, z: 0 }, { x: 45, z: -85 },
    ];
    const lm = landmarks[Math.floor(Math.random() * landmarks.length)];
    const pSpawn = this.findSpawn(38, 58, null, 0, lm);
    this.player = new Player(this, skin);
    this.player.pos.set(pSpawn.x, 92, pSpawn.z);
    this.player.yaw = Math.atan2(lm.x - pSpawn.x, lm.z - pSpawn.z);
    this.player.character.root.position.copy(this.player.pos);

    this.hazards = new Hazards(this.scene, this.world, map, this);

    // Bots
    this.bots = [];
    const names = [...BOT_NAMES].sort(() => Math.random() - 0.5);
    for (let i = 0; i < 29; i++) {
      const sp = this.findSpawn(20, 178, pSpawn, 22);
      const bot = new Bot(this, names[i % names.length], i + 1, { x: sp.x, y: 60, z: sp.z, drop: true });
      this.bots.push(bot);
    }

    this.createPickups();
    this.createBotShadows();

    this.input = new Input(this.canvas, {
      onPause: () => this.pause(),
      onFirstLock: () => this.hud.toast('Clic para bloquear el ratón · Esc para pausar'),
    });

    // Eventos UI
    $('pause-btn').onclick = () => this.pause();
    $('resume-btn').onclick = () => this.resume();
    $('quit-btn').onclick = () => this.quit();
    $('again-btn').onclick = () => this.opts.onRestart?.();
    $('menu-btn').onclick = () => this.quit();
    $('special-btn').onclick = () => this.useSpecial();
    $('reload-btn').onclick = () => this.player.startReload();

    addEventListener('resize', () => this.resize(), { signal: this.ac.signal });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && (this.state === 'playing' || this.state === 'drop')) this.pause();
    }, { signal: this.ac.signal });

    this.updateCamera(0.016, true);
    this.hud.show();
    this.hud.setDrop(92);
    this.hud.banner('SALTO EN PARACAÍDAS', 'Elige dónde aterrizar · WASD / joystick para planear', 4, '#35f0ff');
    this.hud.chat('💬 <b>Cheems:</b> que empiece el caos', '');
    this.hud.chat('🐔 <b>Sistema:</b> 12 pollos jueces vigilan el mapa', 'chicken');

    this.input.setEnabled(true);
    this.input.requestLock();
    this.loop = this.loop.bind(this);
    this.raf = requestAnimationFrame(this.loop);
  }

  /* ───────── spawns ───────── */
  findSpawn(minR, maxR, avoid, avoidDist = 0, center = null) {
    const world = this.world;
    for (let i = 0; i < 120; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = rand(minR, maxR);
      const cx = center ? center.x : 0, cz = center ? center.z : 0;
      const x = cx + Math.cos(a) * r, z = cz + Math.sin(a) * r;
      if (Math.hypot(x, z) > 190) continue;
      if (Math.hypot(x - 10, z - 105) < 50) continue;
      if (world.heightAt(x, z) < 1.2) continue;
      let inside = false;
      for (const c of world.colliders) {
        if (x > c.minX - 2 && x < c.maxX + 2 && z > c.minZ - 2 && z < c.maxZ + 2) { inside = true; break; }
      }
      if (inside) continue;
      if (avoid && Math.hypot(x - avoid.x, z - avoid.z) < avoidDist) continue;
      return { x, z };
    }
    return { x: rand(-50, 50), z: rand(-50, 50) };
  }

  /* ───────── pickups ───────── */
  createPickups() {
    const cap = 170;
    this.pickupCap = cap;
    this.pickups = [];
    const geo = new THREE.OctahedronGeometry(0.34, 0);
    const mat = new THREE.MeshBasicMaterial({ toneMapped: false });
    this.pickupMesh = new THREE.InstancedMesh(geo, mat, cap);
    this.pickupMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.pickupMesh.frustumCulled = false;
    this.scene.add(this.pickupMesh);

    const bgeo = new THREE.BoxGeometry(0.07, 1.7, 0.07);
    const bmat = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.3, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false });
    this.beamMesh = new THREE.InstancedMesh(bgeo, bmat, cap);
    this.beamMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.beamMesh.frustumCulled = false;
    this.scene.add(this.beamMesh);

    // Armas
    for (const spot of this.world.lootSpots) {
      this.addPickup('weapon', spot.x, spot.z, spot.y, randomWeapon());
    }
    // Salud y munición
    for (let i = 0; i < 14; i++) {
      const s = this.world.lootSpots[(i * 7 + 3) % this.world.lootSpots.length];
      this.addPickup('health', s.x + rand(-7, 7), s.z + rand(-7, 7));
    }
    for (let i = 0; i < 14; i++) {
      const s = this.world.lootSpots[(i * 5 + 1) % this.world.lootSpots.length];
      this.addPickup('ammo', s.x + rand(-7, 7), s.z + rand(-7, 7));
    }
    // Máscaras de gas
    if (this.map.toxic) {
      for (const s of this.world.gasMaskSpots) this.addPickup('mask', s.x, s.z, s.y);
    } else {
      for (let i = 0; i < 3; i++) {
        const s = this.world.lootSpots[(i * 13 + 5) % this.world.lootSpots.length];
        this.addPickup('mask', s.x + rand(-5, 5), s.z + rand(-5, 5));
      }
    }
    // Inicializar colores
    for (let i = 0; i < this.pickups.length; i++) {
      const p = this.pickups[i];
      const col = this.pickupColor(p);
      this.pickupMesh.setColorAt(i, col);
      this.beamMesh.setColorAt(i, col);
    }
    if (this.pickupMesh.instanceColor) this.pickupMesh.instanceColor.needsUpdate = true;
    if (this.beamMesh.instanceColor) this.beamMesh.instanceColor.needsUpdate = true;
    this.updatePickupInstances(0);
  }

  pickupColor(p) {
    if (p.type === 'health') return new THREE.Color(0x7dffb0);
    if (p.type === 'ammo') return new THREE.Color(0xffd166);
    if (p.type === 'mask') return new THREE.Color(0x35f0ff);
    const w = WEAPONS[p.weaponId];
    return new THREE.Color(RARITY[w?.rarity || 'common'].glow);
  }

  addPickup(type, x, z, y, weaponId) {
    if (this.pickups.length >= this.pickupCap) return null;
    const yy = y != null ? y : this.world.heightAt(x, z);
    const p = {
      type, x, z, y: yy, weaponId, taken: false,
      phase: Math.random() * Math.PI * 2, idx: this.pickups.length,
    };
    this.pickups.push(p);
    return p;
  }

  updatePickupInstances(t) {
    const dummy = this._dummy || (this._dummy = new THREE.Object3D());
    const beamDummy = this._beamDummy || (this._beamDummy = new THREE.Object3D());
    for (let i = 0; i < this.pickupCap; i++) {
      const p = this.pickups[i];
      if (!p || p.taken) {
        dummy.position.set(0, -999, 0); dummy.scale.setScalar(0.0001); dummy.updateMatrix();
        this.pickupMesh.setMatrixAt(i, dummy.matrix);
        this.beamMesh.setMatrixAt(i, dummy.matrix);
        continue;
      }
      const bob = Math.sin(t * 2.2 + p.phase) * 0.12;
      dummy.position.set(p.x, p.y + 0.55 + bob, p.z);
      dummy.rotation.set(0.25, t * 1.2 + p.phase, 0.1);
      dummy.scale.setScalar(1);
      dummy.updateMatrix();
      this.pickupMesh.setMatrixAt(i, dummy.matrix);
      beamDummy.position.set(p.x, p.y + 1.45 + bob, p.z);
      beamDummy.rotation.set(0, 0, 0);
      beamDummy.scale.set(1, 1, 1);
      beamDummy.updateMatrix();
      this.beamMesh.setMatrixAt(i, beamDummy.matrix);
    }
    this.pickupMesh.instanceMatrix.needsUpdate = true;
    this.beamMesh.instanceMatrix.needsUpdate = true;
  }

  takePickup(p) {
    if (!p || p.taken) return;
    if (p.type === 'weapon') {
      const w = WEAPONS[p.weaponId];
      if (!w) return;
      this.player.addWeapon(p.weaponId);
      p.taken = true;
      this.effects.ring(new THREE.Vector3(p.x, p.y, p.z), 1.6, RARITY[w.rarity].glow);
      this.effects.sparksAt(new THREE.Vector3(p.x, p.y + 0.5, p.z), RARITY[w.rarity].glow, 10, 4, 1);
      this.hud.chat(`🎁 <b>${this.playerName}</b> recogió ${w.emoji} ${w.name}`, '');
    } else if (p.type === 'health') {
      this.player.heal(250);
      p.taken = true;
      this.hud.toast('❤️ +250 HP');
      this.effects.sparksAt(new THREE.Vector3(p.x, p.y + 0.5, p.z), 0x7dffb0, 10, 3, 1);
    } else if (p.type === 'ammo') {
      for (const it of this.player.slots) {
        const w = WEAPONS[it.id];
        if (w.reserve !== Infinity) it.reserve = Math.min(w.reserve * 2, it.reserve + Math.ceil(w.reserve * 0.6));
      }
      p.taken = true;
      this.hud.toast('📦 Munición recargada');
    } else if (p.type === 'mask') {
      this.player.maskTime = 60;
      p.taken = true;
      this.hud.toast('😷 Máscara de gas · 60s de inmunidad tóxica');
      this.hud.chat('😷 <b>Máscara de gas antigua</b> equipada · 60s', '');
      this.effects.ring(new THREE.Vector3(p.x, p.y, p.z), 1.4, 0x35f0ff);
    }
  }

  nearestPickup(maxDist = 3) {
    let best = null, bestD = maxDist;
    const pp = this.player.pos;
    for (const p of this.pickups) {
      if (p.taken || p.type !== 'weapon') continue;
      const d = Math.hypot(p.x - pp.x, p.z - pp.z);
      if (d < bestD && Math.abs(p.y - pp.y) < 3) { best = p; bestD = d; }
    }
    return best;
  }

  updatePickups(dt) {
    this.updatePickupInstances(this.time);
    if (!this.player.alive || this.player.dropping) { this.hud.setPrompt(null); return; }

    // Auto-recogida
    this._autoT = (this._autoT || 0) - dt;
    if (this._autoT <= 0) {
      this._autoT = 0.18;
      for (const p of this.pickups) {
        if (p.taken || p.type === 'weapon') continue;
        if (Math.hypot(p.x - this.player.pos.x, p.z - this.player.pos.z) < 1.9 && Math.abs(p.y - this.player.pos.y) < 2.2) {
          this.takePickup(p);
        }
      }
    }
    const near = this.nearestPickup(3.2);
    this.nearPickup = near;
    if (near) {
      const w = WEAPONS[near.weaponId];
      this.hud.setPrompt(`Recoger ${w.emoji} ${w.name} · ${RARITY[w.rarity].label}`);
    } else {
      this.hud.setPrompt(null);
    }
  }

  /* ───────── sombras de bots ───────── */
  createBotShadows() {
    const geo = new THREE.CircleGeometry(0.4, 10);
    const mat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.28, depthWrite: false });
    this.botShadows = new THREE.InstancedMesh(geo, mat, this.bots.length);
    this.botShadows.frustumCulled = false;
    this.scene.add(this.botShadows);
  }

  updateBotShadows() {
    const d = this._shadowDummy || (this._shadowDummy = new THREE.Object3D());
    for (let i = 0; i < this.bots.length; i++) {
      const b = this.bots[i];
      d.position.set(b.pos.x, b.pos.y + 0.03, b.pos.z);
      d.rotation.x = -Math.PI / 2;
      d.scale.setScalar(b.alive ? 1 : 0.0001);
      d.updateMatrix();
      this.botShadows.setMatrixAt(i, d.matrix);
    }
    this.botShadows.instanceMatrix.needsUpdate = true;
  }

  /* ───────── combate ───────── */
  getAimDir(spread = 0) {
    const dir = new THREE.Vector3();
    this.camera.getWorldDirection(dir);
    if (spread > 0) {
      dir.x += (Math.random() - 0.5) * spread * 2;
      dir.y += (Math.random() - 0.5) * spread * 2;
      dir.z += (Math.random() - 0.5) * spread * 2;
      dir.normalize();
    }
    return dir;
  }

  playerShoot() {
    const p = this.player;
    if (!p.alive || p.dropping) return;
    const w = p.weapon;
    const item = p.item;
    if (!item) return;
    if (!w.melee && item.mag <= 0) {
      p.startReload();
      return;
    }
    p.fireCooldown = w.fireRate;
    p.attacking = 0.18;
    p.character.muzzle.getWorldPosition(this.tmpMuzzle);

    if (w.melee) {
      if (w.rangedMelee) this.chanclaThrow(w);
      else this.meleeAttack(w);
      return;
    }

    if (item.mag !== Infinity) item.mag--;
    const spread = w.spread + (p.grounded ? 0 : 0.025) + (p.aiming ? -w.spread * 0.45 : 0);
    this.effects.muzzle(this.tmpMuzzle);
    this.effects.sparksAt(this.tmpMuzzle, 0xffd166, 2, 2, 0.4);
    this.shake = Math.max(this.shake, (w.recoil || 0.02) * 1.2);

    if (w.flame) {
      this.flameAttack(w);
    } else if (w.projectileSpeed) {
      this.spawnProjectile(w);
    } else {
      const pellets = w.pellets || 1;
      const per = w.pellets ? w.damage / w.pellets : w.damage;
      for (let i = 0; i < pellets; i++) {
        this.hitscan(w, Math.max(0.002, spread), per, i === 0);
      }
    }

    // Recoil de cámara
    p.pitch = clamp(p.pitch + (w.recoil || 0.012) * 0.5, -0.52, 0.95);
    p.yaw += (Math.random() - 0.5) * (w.recoil || 0.01) * 0.5;

    if (item.mag === 0 && item.reserve > 0) p.startReload();
  }

  hitscan(w, spread, damage, showTracer = true) {
    const origin = this.camera.position.clone();
    const dir = this.getAimDir(spread);
    const range = w.range || 100;
    const end = origin.clone().addScaledVector(dir, range);
    const wall = this.world.segmentHit(origin, end);
    let bestT = wall.hit ? wall.t * range : range;
    let hitBot = null, hitHead = false;

    for (const b of this.bots) {
      if (!b.alive || b.dropping) continue;
      const tBody = raySphere(origin, dir, b.chest, 0.42);
      const tHead = raySphere(origin, dir, b.head, 0.24);
      let t = -1, head = false;
      if (tHead > 0 && (tBody < 0 || tHead < tBody)) { t = tHead; head = true; }
      else if (tBody > 0) { t = tBody; }
      if (t > 0 && t < bestT) { bestT = t; hitBot = b; hitHead = head; }
    }

    // Pollos
    let hitChicken = null;
    const ch = this.hazards.hitChicken(origin, dir, Math.min(range, bestT));
    if (ch) { hitChicken = ch.chicken; bestT = ch.t; hitBot = null; }

    const point = origin.clone().addScaledVector(dir, bestT);
    if (showTracer) this.effects.tracer(this.tmpMuzzle.clone(), point, RARITY[w.rarity]?.glow || 0xffd166);

    if (hitBot) {
      let dmg = damage;
      let crit = false;
      if (hitHead && w.headshot) { dmg = w.headshot; crit = true; }
      if (w.melee && this.skin.meleeBonus) dmg *= 1 + this.skin.meleeBonus;
      this.applyHit(hitBot, dmg, w, point, crit);
    } else if (hitChicken) {
      this.hazards.killChicken(hitChicken, true);
      this.hud.hitmarker();
      this.effects.sparksAt(point, 0xffd166, 8, 4, 1);
    } else if (wall.hit) {
      this.effects.sparksAt(point, 0xffd166, 4, 3, 0.8);
    }
  }

  applyHit(bot, damage, w, point, crit) {
    if (!bot.alive) return;
    this.damageDealt += damage;
    bot.takeDamage(damage, this.player, w.name);
    this.hud.hitmarker(crit);
    this.effects.sparksAt(point, crit ? 0xffd166 : 0xff5a5a, crit ? 14 : 7, 5, 1);
    if (w.stun) bot.stun = Math.max(bot.stun, w.stun);
    if (w.knockback) {
      const dir = new THREE.Vector3(bot.pos.x - this.player.pos.x, 0, bot.pos.z - this.player.pos.z).normalize();
      bot.applyKnockback(dir, w.knockback);
    }
  }

  meleeAttack(w) {
    const p = this.player;
    const origin = p.chest.clone();
    const dir = this.getAimDir(0);
    let hitAny = false;
    let best = null, bestD = w.range + 0.5;
    for (const b of this.bots) {
      if (!b.alive || b.dropping) continue;
      const to = b.chest.clone().sub(origin);
      const d = to.length();
      if (d > bestD) continue;
      to.normalize();
      if (to.dot(dir) < 0.3) continue;
      best = b; bestD = d;
    }
    this.effects.ring(p.pos.clone().addScaledVector(new THREE.Vector3(Math.sin(p.yaw), 0, Math.cos(p.yaw)), 1.2), 1.8, 0xffd166);
    this.shake = Math.max(this.shake, 0.12);
    if (best) {
      let dmg = w.damage * (1 + (this.skin.meleeBonus || 0));
      this.damageDealt += dmg;
      best.takeDamage(dmg, p, w.name);
      best.applyKnockback(new THREE.Vector3(Math.sin(p.yaw), 0, Math.cos(p.yaw)), w.knockback || 3);
      if (w.stun) best.stun = Math.max(best.stun, w.stun);
      this.hud.hitmarker();
      this.effects.sparksAt(best.chest, 0xff5a5a, 10, 5, 1);
      hitAny = true;
    }
    if (!hitAny) this.effects.sparksAt(origin.clone().addScaledVector(dir, 1.5), 0xffffff, 4, 2, 0.6);
  }

  chanclaThrow(w) {
    const p = this.player;
    const dir = this.getAimDir(0.005);
    const origin = p.chest.clone();
    const range = 50;
    let bestT = range, hitBot = null, hitChicken = null;
    const wall = this.world.segmentHit(origin, origin.clone().addScaledVector(dir, range));
    if (wall.hit) bestT = wall.t * range;
    for (const b of this.bots) {
      if (!b.alive || b.dropping) continue;
      const t = raySphere(origin, dir, b.chest, 0.45);
      if (t > 0 && t < bestT) { bestT = t; hitBot = b; }
    }
    const ch = this.hazards.hitChicken(origin, dir, bestT);
    if (ch) { hitChicken = ch.chicken; bestT = ch.t; hitBot = null; }
    const end = origin.clone().addScaledVector(dir, bestT);

    // Visual del búmeran
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(0.18, 0.05, 0.5),
      new THREE.MeshBasicMaterial({ color: 0xff4d9a, toneMapped: false })
    );
    mesh.position.copy(p.chest);
    this.scene.add(mesh);
    this.boomerangs.push({ mesh, from: p.chest.clone(), to: end.clone(), t: 0, phase: 'out', target: hitBot, chicken: hitChicken });

    if (hitBot) {
      const dmg = w.damage * (1 + (this.skin.meleeBonus || 0));
      this.damageDealt += dmg;
      hitBot.takeDamage(dmg, p, w.name);
      hitBot.applyKnockback(dir.clone().setY(0).normalize(), 4);
      this.hud.hitmarker();
      this.effects.sparksAt(end, 0xff4d9a, 12, 5, 1);
    } else if (hitChicken) {
      this.hazards.killChicken(hitChicken, true);
    }
    this.shake = Math.max(this.shake, 0.14);
  }

  flameAttack(w) {
    const p = this.player;
    const origin = p.chest.clone();
    const dir = this.getAimDir(0.03);
    const muzzle = this.tmpMuzzle.clone();
    const end = origin.clone().addScaledVector(dir, 16);
    this.effects.smokeAt(muzzle, 0xff7a2f, 2, 1);
    this.effects.sparksAt(muzzle.clone().addScaledVector(dir, 3), 0xff7a2f, 4, 3, 1.4);
    for (const b of this.bots) {
      if (!b.alive || b.dropping) continue;
      const to = b.chest.clone().sub(origin);
      const d = to.length();
      if (d > 18) continue;
      to.normalize();
      if (to.dot(dir) < 0.82) continue;
      const wall = this.world.segmentHit(muzzle, b.chest);
      if (wall.hit) continue;
      this.damageDealt += w.damage;
      b.takeDamage(w.damage, p, w.name);
      this.hud.hitmarker();
      this.effects.sparksAt(b.chest, 0xff7a2f, 3, 2, 0.8);
    }
  }

  spawnProjectile(w) {
    const dir = this.getAimDir(w.spread || 0.01);
    const origin = this.tmpMuzzle.clone();
    const color = w.id === 'memes' ? 0xb06bff : 0xff7a2f;
    const mesh = new THREE.Mesh(
      new THREE.IcosahedronGeometry(w.id === 'memes' ? 0.18 : 0.28, 0),
      new THREE.MeshBasicMaterial({ color, toneMapped: false })
    );
    mesh.position.copy(origin);
    this.scene.add(mesh);
    this.projectiles.push({
      mesh, pos: origin.clone(), vel: dir.multiplyScalar(w.projectileSpeed),
      damage: w.damage, aoe: w.aoe || 1.5, weapon: w, life: 4,
      color, gravity: w.id === 'm79' ? 9 : 0,
    });
  }

  updateProjectiles(dt) {
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const pr = this.projectiles[i];
      pr.life -= dt;
      pr.vel.y -= pr.gravity * dt;
      pr.pos.addScaledVector(pr.vel, dt);
      pr.mesh.position.copy(pr.pos);
      pr.mesh.rotation.x += dt * 10;
      if (Math.random() < 0.7) this.effects.smokeAt(pr.pos, pr.color, 1, 0.3);

      let explode = pr.life <= 0;
      if (pr.pos.y <= this.world.heightAt(pr.pos.x, pr.pos.z)) explode = true;
      for (const b of this.bots) {
        if (!b.alive || b.dropping) continue;
        if (b.chest.distanceTo(pr.pos) < 0.8) { explode = true; break; }
      }
      if (!explode) {
        const wall = this.world.segmentHit(pr.pos.clone().addScaledVector(pr.vel, -dt), pr.pos);
        if (wall.hit) explode = true;
      }
      if (explode) {
        this.explode(pr.pos.clone(), pr.aoe, pr.damage, pr.weapon, pr.color);
        this.scene.remove(pr.mesh);
        pr.mesh.geometry.dispose();
        pr.mesh.material.dispose();
        this.projectiles.splice(i, 1);
      }
    }
  }

  explode(pos, radius, damage, w, color = 0xff7a2f) {
    this.effects.explosion(pos, radius, color);
    this.shake = Math.max(this.shake, 0.35);
    for (const b of this.bots) {
      if (!b.alive || b.dropping) continue;
      const d = b.chest.distanceTo(pos);
      if (d < radius) {
        const falloff = Math.max(0.35, 1 - d / radius);
        const dmg = damage * falloff;
        this.damageDealt += dmg;
        b.takeDamage(dmg, this.player, w.name);
        b.applyKnockback(b.pos.clone().sub(pos).setY(0).normalize(), 8 * falloff);
        this.hud.hitmarker(dmg >= 100);
      }
    }
    // El jugador también puede recibir su propia explosión si está muy cerca
    if (this.player.pos.distanceTo(pos) < radius * 0.7 && this.player.alive) {
      this.player.takeDamage(damage * 0.25, 'Tu propia explosión', w.name);
    }
  }

  /* ───────── especiales ───────── */
  useSpecial() {
    const p = this.player;
    if (!p.alive || p.dropping) return;
    const w = p.weapon;
    if (!w.special || p.specialCooldown > 0) return;
    p.specialCooldown = w.special.cooldown;
    this.hud.banner(w.special.name.toUpperCase(), w.special.desc, 2.2, '#ff4d6d');
    this.shake = Math.max(this.shake, 0.3);
    p.attacking = 0.3;

    if (w.special.type === 'smash') {
      const dir = this.getAimDir(0);
      let best = null, bestD = 5;
      for (const b of this.bots) {
        if (!b.alive || b.dropping) continue;
        const d = b.chest.distanceTo(p.chest);
        if (d < bestD) { best = b; bestD = d; }
      }
      this.effects.ring(p.pos, 4, 0xff4d6d);
      this.effects.sparksAt(p.pos.clone().add(new THREE.Vector3(0, 0.8, 0)), 0xff4d6d, 22, 9, 1.5);
      if (best) {
        this.damageDealt += w.special.damage;
        best.takeDamage(w.special.damage, p, w.special.name);
        best.applyKnockback(dir.clone().setY(0).normalize(), w.special.knockback || 10);
        best.stun = Math.max(best.stun, 1.2);
        this.effects.explosion(best.chest, 2, 0xff4d6d);
      }
    } else if (w.special.type === 'flurry') {
      const fwd = new THREE.Vector3(Math.sin(p.yaw), 0, Math.cos(p.yaw));
      p.pos.addScaledVector(fwd, 4.5);
      p.pos.y = this.world.heightAt(p.pos.x, p.pos.z);
      this.effects.ring(p.pos, 3, 0xffd166);
      this.effects.beam(p.chest, p.chest.clone().addScaledVector(fwd, 6), 0xffd166, 2);
      for (const b of this.bots) {
        if (!b.alive || b.dropping) continue;
        if (b.chest.distanceTo(p.chest) < 6) {
          for (let k = 0; k < w.special.hits; k++) {
            const dmg = w.special.damage;
            this.damageDealt += dmg;
            b.takeDamage(dmg, p, w.special.name);
          }
          b.applyKnockback(fwd, 8);
          this.effects.sparksAt(b.chest, 0xffd166, 14, 6, 1.2);
          this.hud.hitmarker(true);
        }
      }
    } else if (w.special.type === 'laser') {
      const dir = this.getAimDir(0);
      const origin = this.camera.position.clone();
      const end = origin.clone().addScaledVector(dir, 120);
      const wall = this.world.segmentHit(origin, end);
      let bestT = wall.hit ? wall.t * 120 : 120;
      let hitBot = null;
      for (const b of this.bots) {
        if (!b.alive || b.dropping) continue;
        const t = raySphere(origin, dir, b.chest, 0.5);
        if (t > 0 && t < bestT) { bestT = t; hitBot = b; }
      }
      const point = origin.clone().addScaledVector(dir, bestT);
      this.effects.beam(this.tmpMuzzle, point, 0xff3ea5, 2.5);
      this.effects.beam(this.tmpMuzzle, point, 0x35f0ff, 1.2);
      this.effects.explosion(point, 2, 0xb06bff);
      if (hitBot) {
        this.damageDealt += w.special.damage;
        hitBot.takeDamage(w.special.damage, p, w.special.name);
        this.hud.hitmarker(true);
      }
      this.addBurnZone(point, 4, w.special.burn, w.special.duration, 0xff3ea5);
    } else if (w.special.type === 'aoe') {
      const dir = this.getAimDir(0);
      const origin = this.camera.position.clone();
      const wall = this.world.segmentHit(origin, origin.clone().addScaledVector(dir, 60));
      const point = origin.clone().addScaledVector(dir, wall.hit ? wall.t * 60 : 60);
      point.y = Math.max(point.y, this.world.heightAt(point.x, point.z));
      this.explode(point, w.special.radius, w.special.damage, w.special, 0xff7a2f);
      this.effects.smokeAt(point, 0x2a2a2a, 16, 4);
    }
  }

  addBurnZone(pos, radius, dps, duration, color) {
    const mesh = new THREE.Mesh(
      new THREE.CylinderGeometry(radius, radius, 0.08, 28, 1, true),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.35, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending })
    );
    mesh.position.set(pos.x, Math.max(0.4, pos.y), pos.z);
    this.scene.add(mesh);
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(radius * 0.92, radius, 32),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.8, side: THREE.DoubleSide, depthWrite: false })
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(pos.x, Math.max(0.42, pos.y + 0.05), pos.z);
    this.scene.add(ring);
    this.burnZones.push({ mesh, ring, pos: pos.clone(), radius, dps, until: this.time + duration, tick: 0 });
    this.hud.toast(`🔥 Zona láser activa · ${dps} daño/s durante ${duration}s`);
  }

  updateBurnZones(dt) {
    for (let i = this.burnZones.length - 1; i >= 0; i--) {
      const z = this.burnZones[i];
      if (this.time > z.until) {
        this.scene.remove(z.mesh, z.ring);
        z.mesh.geometry.dispose(); z.mesh.material.dispose();
        z.ring.geometry.dispose(); z.ring.material.dispose();
        this.burnZones.splice(i, 1);
        continue;
      }
      z.mesh.material.opacity = 0.25 + Math.sin(this.time * 6) * 0.1;
      z.ring.material.opacity = 0.5 + Math.sin(this.time * 4) * 0.25;
      z.tick -= dt;
      if (z.tick <= 0) {
        z.tick = 0.5;
        for (const b of this.bots) {
          if (!b.alive) continue;
          if (b.chest.distanceTo(z.pos) < z.radius) {
            const dmg = z.dps * 0.5;
            this.damageDealt += dmg;
            b.takeDamage(dmg, this.player, 'Láser Nostálgico');
          }
        }
      }
    }
  }

  updateBoomerangs(dt) {
    for (let i = this.boomerangs.length - 1; i >= 0; i--) {
      const b = this.boomerangs[i];
      b.t += dt;
      if (b.phase === 'out') {
        const k = Math.min(1, b.t / 0.35);
        b.mesh.position.lerpVectors(b.from, b.to, k);
        if (k >= 1) { b.phase = 'back'; b.t = 0; }
      } else {
        const k = Math.min(1, b.t / 0.4);
        b.mesh.position.lerpVectors(b.to, this.player.chest, k);
        if (k >= 1) {
          this.scene.remove(b.mesh);
          b.mesh.geometry.dispose(); b.mesh.material.dispose();
          this.boomerangs.splice(i, 1);
          continue;
        }
      }
      b.mesh.rotation.x += dt * 22;
      b.mesh.rotation.y += dt * 12;
    }
  }

  /* ───────── daño / muertes ───────── */
  aliveEntities() {
    return [this.player, ...this.bots];
  }

  damageEntity(e, amount, source, weaponName) {
    if (!e || !e.alive) return;
    if (e === this.player) e.takeDamage(amount, source, weaponName);
    else e.takeDamage(amount, source, weaponName);
  }

  botShoot(bot, target, w) {
    if (!target || !target.alive) return;
    const from = bot.chest.clone().add(new THREE.Vector3(0, 0.25, 0));
    const to = target === this.player ? target.chest : target.chest;
    const los = this.world.segmentHit(from, to);
    if (los.hit && los.t < 0.98) return;

    const dist = from.distanceTo(to);
    let chance = bot.accuracy;
    if (target === this.player) {
      const speed = Math.hypot(this.player.vel.x, this.player.vel.z);
      chance *= clamp(1 - speed / 22, 0.45, 1);
      if (this.player.dropping) return;
    } else {
      chance *= 1.0;
    }
    chance *= clamp(1.25 - dist / (w.range * 1.4), 0.25, 1);
    if (w.melee) chance = dist < w.range ? 0.85 : 0;
    if (w.pellets) chance *= 0.55;

    const muzzle = bot.pos.clone().add(new THREE.Vector3(Math.sin(bot.yaw) * 0.35, 0.55, Math.cos(bot.yaw) * 0.35));
    this.effects.muzzle(muzzle);
    const hit = Math.random() < chance;
    const point = hit ? to.clone() : to.clone().add(new THREE.Vector3(rand(-2, 2), rand(-1, 2), rand(-2, 2)));
    this.effects.tracer(muzzle, point, 0xff5a5a);

    if (hit) {
      let dmg = w.damage;
      if (w.pellets) dmg *= 0.5;
      if (target === this.player) {
        this.player.takeDamage(dmg, bot.name, w.name);
      } else {
        target.takeDamage(dmg * 0.85, bot, w.name);
      }
      this.effects.sparksAt(to, 0xff5a5a, 4, 3, 0.7);
    } else {
      this.effects.sparksAt(point, 0xffd166, 2, 2, 0.6);
    }
  }

  killBot(bot, source, weaponName = '') {
    if (!bot.alive) return;
    bot.alive = false;
    bot.mesh.visible = false;
    this.aliveCount = Math.max(1, this.aliveCount - 1);
    this.effects.explosion(bot.pos.clone().add(new THREE.Vector3(0, 0.5, 0)), 1.4, 0xff5a5a);
    this.effects.smokeAt(bot.pos, 0x6a5a5a, 6, 1.5);
    this.dropLoot(bot);

    if (source === this.player) {
      this.kills++;
      this.hud.kill(this.playerName, bot.name, weaponName || 'el caos', true);
      this.hud.chat(`💀 <b>${this.playerName}</b> eliminó a <b>${bot.name}</b> con ${weaponName}`, '');
      this.hud.toast(`💀 Eliminaste a ${bot.name}`);
    } else if (source && source.name) {
      this.hud.kill(source.name, bot.name, weaponName || 'el caos');
    } else {
      this.hud.kill(source || '☠️ El caos', bot.name, weaponName || '');
    }

    if (this.aliveCount === 1 && this.player.alive && this.state !== 'over') {
      setTimeout(() => this.win(), 700);
    }
  }

  dropLoot(bot) {
    const r = Math.random();
    const pos = bot.pos;
    if (r < 0.62) {
      const id = randomWeapon(Math.random, 0.12);
      this.addPickup('weapon', pos.x + rand(-0.5, 0.5), pos.z + rand(-0.5, 0.5), pos.y, id);
    } else if (r < 0.84) {
      this.addPickup('health', pos.x + rand(-0.5, 0.5), pos.z + rand(-0.5, 0.5), pos.y);
    } else {
      this.addPickup('ammo', pos.x + rand(-0.5, 0.5), pos.z + rand(-0.5, 0.5), pos.y);
    }
    // color de la nueva instancia
    const idx = this.pickups.length - 1;
    if (idx >= 0 && idx < this.pickupCap) {
      const p = this.pickups[idx];
      const col = this.pickupColor(p);
      this.pickupMesh.setColorAt(idx, col);
      this.beamMesh.setColorAt(idx, col);
      if (this.pickupMesh.instanceColor) this.pickupMesh.instanceColor.needsUpdate = true;
      if (this.beamMesh.instanceColor) this.beamMesh.instanceColor.needsUpdate = true;
    }
  }

  killPlayer(source, weaponName = '') {
    if (!this.player.alive) return;
    const placement = this.aliveCount;
    this.player.alive = false;
    this.player.hp = 0;
    this.aliveCount = Math.max(1, this.aliveCount - 1);
    this.state = 'over';
    this.input.setEnabled(false);
    document.exitPointerLock?.();
    this.player.character.rig.rotation.z = 1.45;
    this.player.character.rig.rotation.x = -0.3;
    this.player.character.rig.position.y = -0.15;
    this.effects.explosion(this.player.pos.clone().add(new THREE.Vector3(0, 0.6, 0)), 1.6, 0xff3b4e);
    this.hud.kill(source, this.playerName, weaponName || 'el caos', true);
    this.hud.chat(`☠️ <b>${this.playerName}</b> fue eliminado por ${source}`, 'event');
    this.hud.hide();
    this.showEnd({
      win: false,
      placement,
      reason: weaponName ? `${source} te eliminó con ${weaponName}` : `${source} te eliminó`,
    });
  }

  win() {
    if (this.state === 'over') return;
    this.state = 'over';
    this.input.setEnabled(false);
    document.exitPointerLock?.();
    this.hud.hide();
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        const p = this.player.pos.clone().add(new THREE.Vector3(rand(-6, 6), rand(1, 5), rand(-6, 6)));
        this.effects.explosion(p, 2.5, [0xffd166, 0xff3ea5, 0x35f0ff][i % 3]);
      }, i * 180);
    }
    this.showEnd({ win: true, placement: 1, reason: 'El último meme en pie' });
  }

  showEnd({ win, placement, reason }) {
    const end = $('end-screen');
    $('end-kicker').textContent = win ? 'ÚLTIMO EN PIE' : 'PARTIDA TERMINADA';
    $('end-title').textContent = win ? '¡VICTORIA!' : 'ELIMINADO';
    $('end-title').classList.toggle('win', win);
    $('end-sub').textContent = win
      ? 'Miguel sobrevivió al caos, a los pollos y al meteorito.'
      : 'Los memes te recordarán. O no.';
    $('end-place').textContent = `#${placement}`;
    $('stat-kills').textContent = this.kills;
    $('stat-damage').textContent = Math.round(this.damageDealt);
    $('stat-chickens').textContent = this.hazards?.chickenKills || 0;
    $('stat-time').textContent = `${String(Math.floor(this.time / 60)).padStart(2, '0')}:${String(Math.floor(this.time % 60)).padStart(2, '0')}`;
    $('end-reason').textContent = reason;
    end.classList.remove('hidden');
  }

  /* ───────── pausa ───────── */
  pause() {
    if (this.state !== 'playing' && this.state !== 'drop') return;
    this.pausedFrom = this.state;
    this.state = 'paused';
    this.input.setEnabled(false);
    $('pause').classList.remove('hidden');
    document.exitPointerLock?.();
  }

  resume() {
    if (this.state !== 'paused') return;
    this.state = this.pausedFrom;
    $('pause').classList.add('hidden');
    this.input.setEnabled(true);
    this.input.requestLock();
  }

  quit() {
    this.dispose();
    this.opts.onExit?.();
  }

  /* ───────── cámara / HUD ───────── */
  resize() {
    this.camera.aspect = innerWidth / innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(innerWidth, innerHeight, false);
  }

  updateCamera(dt, snap = false) {
    const p = this.player;
    if (!p) return;
    const target = p.pos.clone().add(new THREE.Vector3(0, 0.9, 0));
    const aiming = p.aiming && !p.dropping;
    const w = p.weapon;
    const dist = p.dropping ? 5.8 : aiming ? (w.scope ? 1.4 : 1.9) : 3.0;
    const fovTarget = p.dropping ? 72 : aiming ? (w.scope ? 38 : 54) : 68;
    this.camera.fov += (fovTarget - this.camera.fov) * Math.min(1, dt * 9);
    this.camera.updateProjectionMatrix();

    const wobble = this.aimWobble;
    this.aimWobble = Math.max(0, this.aimWobble - dt * 1.5);
    const wx = (Math.random() - 0.5) * wobble * 0.05;
    const wy = (Math.random() - 0.5) * wobble * 0.05;
    const yaw = p.yaw + wx;
    const pitch = clamp(p.pitch + wy, -0.52, 0.95);
    const fwd = new THREE.Vector3(Math.sin(yaw) * Math.cos(pitch), Math.sin(pitch), Math.cos(yaw) * Math.cos(pitch));
    const horiz = new THREE.Vector3(Math.sin(yaw), 0, Math.cos(yaw));
    const desired = target.clone()
      .addScaledVector(horiz, -dist * Math.cos(pitch * 0.55))
      .add(new THREE.Vector3(0, 0.55 + Math.max(0, pitch) * 1.5 + (p.dropping ? 2.4 : 0), 0));

    const hit = this.world.segmentHit(target, desired);
    if (hit.hit) desired.copy(hit.point).lerp(target, 0.18);
    const gy = this.world.heightAt(desired.x, desired.z) + 0.35;
    if (desired.y < gy) desired.y = gy;

    if (snap) this.camera.position.copy(desired);
    else this.camera.position.lerp(desired, Math.min(1, dt * 16));

    this.shake = Math.max(0, this.shake - dt * 3.5);
    if (this.shake > 0.01) {
      this.camera.position.x += (Math.random() - 0.5) * this.shake * 0.35;
      this.camera.position.y += (Math.random() - 0.5) * this.shake * 0.35;
      this.camera.position.z += (Math.random() - 0.5) * this.shake * 0.35;
    }

    const look = target.clone().addScaledVector(fwd, 14);
    this.camera.lookAt(look);
  }

  updateHUD(dt = 1 / 60) {
    const p = this.player;
    const w = p.weapon;
    const item = p.item;
    const zone = this.hazards.safe;
    const outside = Math.hypot(p.pos.x - zone.x, p.pos.z - zone.z) > zone.r;
    const inLava = this.hazards.lavaAt(p.pos.x, p.pos.z);
    const zoneDanger = (outside || inLava) && this.time > 80;
    let zoneTime = this.hazards.zoneLabel(this.time);
    if (this.map.lava && this.time < 120) zoneTime = `🌋 ${Math.ceil(120 - this.time)}s`;
    else if (this.hazards.erupted) zoneTime = 'LAVA';

    const enemies = this.bots.filter((b) => b.alive).map((b) => ({ x: b.pos.x, z: b.pos.z }));
    const loot = [];
    for (let i = 0; i < this.pickups.length; i += 2) {
      const pk = this.pickups[i];
      if (!pk.taken && pk.type === 'weapon') loot.push({ x: pk.x, z: pk.z });
    }

    this.hud.update(dt, {
      hp: p.hp,
      ammo: item ? item.mag : 0,
      reserve: item ? item.reserve : 0,
      weapon: w,
      slots: p.slots.map((s) => WEAPONS[s.id]),
      slotIndex: p.slotIndex,
      alive: this.aliveCount,
      timer: this.time,
      specialRemaining: p.specialCooldown,
      specialTotal: w.special?.cooldown || 1,
      reloading: p.reloading,
      zoneDanger,
      maskTime: p.maskTime,
      spawnGuard: p.spawnGuard,
      funado: p.funado,
      zoneTime,
      minimap: {
        safe: zone,
        hazardRadius: this.hazards.erupted ? this.hazards.lavaRadius : 0,
        player: { x: p.pos.x, z: p.pos.z, yaw: Math.PI - p.yaw },
        enemies,
        loot,
      },
    });
  }

  /* ───────── loop ───────── */
  loop(now) {
    if (this.disposed) return;
    this.raf = requestAnimationFrame(this.loop);
    const dt = this.lastFrame ? Math.min(0.05, (now - this.lastFrame) / 1000) : 0.016;
    this.lastFrame = now;

    if (this.state === 'playing' || this.state === 'drop') {
      this.time += dt;
      const input = this.input.sample();
      if (input.pause) this.pause();

      this.player.update(dt, input);
      if (this.state === 'drop' && !this.player.dropping) this.state = 'playing';
      if (this.player.alive) {
        if (input.interact && this.nearPickup) this.takePickup(this.nearPickup);
        if (input.special) this.useSpecial();
      }
      for (const b of this.bots) b.update(dt);
      this.hazards.update(dt, this.time);
      this.updateProjectiles(dt);
      this.updateBurnZones(dt);
      this.updateBoomerangs(dt);
      this.updatePickups(dt);
      this.updateBotShadows();
      this.effects.update(dt);

      // Chat ambiental
      this.ambientTimer -= dt;
      if (this.ambientTimer <= 0) {
        this.ambientTimer = 18 + Math.random() * 16;
        const name = this.bots.find((b) => b.alive)?.name || 'Cheems';
        this.hud.chat(`💬 <b>${name}:</b> ${CHAT_LINES[Math.floor(Math.random() * CHAT_LINES.length)]}`, '');
      }

      // Si el jugador muere, el estado cambia dentro de la actualización
      if (this.state === 'over') {
        this.updateHUD(dt);
        this.updateCamera(dt);
        this.renderer.render(this.scene, this.camera);
        return;
      }

      this.updateCamera(dt);
      this.updateHUD(dt);
      this.hud.updateFloats(dt, this.camera);
    } else {
      // En pausa / fin: no avanzar el mundo
      this.updateCamera(dt);
    }

    this.renderer.render(this.scene, this.camera);

    // Monitor de FPS y bajada automática de resolución
    this.fpsAcc += dt; this.fpsFrames++; this.fpsCheck += dt;
    if (this.fpsCheck > 2.5) {
      const fps = this.fpsFrames / this.fpsAcc;
      this.fpsAcc = 0; this.fpsFrames = 0; this.fpsCheck = 0;
      if (fps < 47 && this.renderer.getPixelRatio() > 0.85 && !this.downgraded) {
        const pr = Math.max(0.85, this.renderer.getPixelRatio() - 0.2);
        this.renderer.setPixelRatio(pr);
        this.renderer.setSize(innerWidth, innerHeight, false);
        this.downgraded = pr <= 0.86;
        this.hud.toast('⚙️ Calidad ajustada para mantener 60 FPS');
      }
    }
  }

  dispose() {
    if (this.disposed) return;
    this.disposed = true;
    cancelAnimationFrame(this.raf);
    this.input?.setEnabled(false);
    this.input?.dispose?.();
    this.ac.abort();
    this.hud?.destroy();
    this.hazards?.dispose();
    this.effects?.dispose();
    for (const b of this.bots) b.dispose();
    this.player?.dispose();
    this.world?.dispose();
    this.scene.clear();
    $('end-screen').classList.add('hidden');
    $('pause').classList.add('hidden');
    this.hud?.hide();
  }
}
