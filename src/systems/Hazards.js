import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

/* ── helpers de geometría ── */
function paint(geo, color) {
  const c = new THREE.Color(color);
  const n = geo.attributes.position.count;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b; }
  geo.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return geo;
}
function bx(w, h, d, x, y, z, color) {
  const g = new THREE.BoxGeometry(w, h, d); paint(g, color); g.translate(x, y, z); return g;
}
function sp(r, x, y, z, color, sx = 1, sy = 1, sz = 1) {
  const g = new THREE.IcosahedronGeometry(r, 1); paint(g, color); g.scale(sx, sy, sz); g.translate(x, y, z); return g;
}
function co(r, h, x, y, z, color, rx = 0, ry = 0, rz = 0) {
  const g = new THREE.ConeGeometry(r, h, 6); paint(g, color);
  if (rx) g.rotateX(rx); if (ry) g.rotateY(ry); if (rz) g.rotateZ(rz);
  g.translate(x, y, z); return g;
}
function cy(r1, r2, h, x, y, z, color, rx = 0) {
  const g = new THREE.CylinderGeometry(r1, r2, h, 5); paint(g, color);
  if (rx) g.rotateX(rx);
  g.translate(x, y, z); return g;
}

function chickenGeo(immortal = false) {
  const body = immortal ? '#f4e8d0' : '#f7f1e3';
  const comb = immortal ? '#ff3b4e' : '#e04545';
  const g = [];
  g.push(sp(0.24, 0, 0.34, 0, body, 1, 0.9, 1.25));
  g.push(sp(0.15, 0, 0.55, 0.2, body, 1, 0.95, 1));
  g.push(co(0.045, 0.13, 0, 0.68, 0.19, comb, 0, 0, 0));
  g.push(co(0.035, 0.1, -0.04, 0.67, 0.18, comb, 0, 0, 0.3));
  g.push(co(0.035, 0.1, 0.04, 0.67, 0.18, comb, 0, 0, -0.3));
  g.push(co(0.055, 0.14, 0, 0.55, 0.37, '#f2a33a', Math.PI / 2, 0, 0));
  g.push(sp(0.035, -0.055, 0.59, 0.29, '#1a1a1a'));
  g.push(sp(0.035, 0.055, 0.59, 0.29, '#1a1a1a'));
  if (immortal) {
    g.push(sp(0.022, -0.055, 0.61, 0.32, '#ff2a3a'));
    g.push(sp(0.022, 0.055, 0.61, 0.32, '#ff2a3a'));
  }
  // alas
  g.push(bx(0.08, 0.18, 0.28, -0.22, 0.36, 0.02, immortal ? '#d8c8a8' : '#e8e0cc'));
  g.push(bx(0.08, 0.18, 0.28, 0.22, 0.36, 0.02, immortal ? '#d8c8a8' : '#e8e0cc'));
  // cola
  g.push(co(0.08, 0.24, 0, 0.42, -0.24, '#e8e0cc', -0.9, 0, 0));
  // patas
  g.push(cy(0.018, 0.018, 0.16, -0.08, 0.12, 0, '#d99a3a'));
  g.push(cy(0.018, 0.018, 0.16, 0.08, 0.12, 0, '#d99a3a'));
  if (immortal) {
    g.push(bx(0.34, 0.02, 0.34, 0, 0.05, 0, '#ff3b4e'));
  }
  return mergeGeometries(g.map((x) => (x.index ? x.toNonIndexed() : x)), false);
}

function pigeonGeo() {
  const g = [];
  const body = '#b9c4d0', dark = '#7d8a99', white = '#e8eef4';
  g.push(sp(0.5, 0, 0.5, 0, body, 1, 0.9, 1.4));
  g.push(sp(0.26, 0, 0.86, 0.5, body, 1, 1, 1));
  g.push(co(0.12, 0.32, 0, 0.86, 0.82, '#f2a33a', Math.PI / 2, 0, 0));
  g.push(sp(0.06, -0.12, 0.94, 0.68, '#1a1a1a'));
  g.push(sp(0.06, 0.12, 0.94, 0.68, '#1a1a1a'));
  g.push(sp(0.09, 0, 0.9, 0.6, '#ff6b8a'));
  g.push(bx(0.9, 0.1, 0.55, -0.6, 0.62, -0.05, dark));
  g.push(bx(0.9, 0.1, 0.55, 0.6, 0.62, -0.05, dark));
  g.push(bx(0.5, 0.08, 0.3, -0.6, 0.55, -0.1, white));
  g.push(bx(0.5, 0.08, 0.3, 0.6, 0.55, -0.1, white));
  g.push(co(0.18, 0.6, 0, 0.42, -0.55, dark, -1.1, 0, 0));
  return mergeGeometries(g.map((x) => (x.index ? x.toNonIndexed() : x)), false);
}

function wallTexture(color) {
  const c = document.createElement('canvas');
  c.width = 128; c.height = 256;
  const ctx = c.getContext('2d');
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 128, 256);
  for (let i = 0; i < 90; i++) {
    ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.12})`;
    const x = Math.random() * 128;
    ctx.fillRect(x, Math.random() * 256, 1 + Math.random() * 2, 10 + Math.random() * 70);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(10, 1);
  return tex;
}

export class Hazards {
  constructor(scene, world, map, game) {
    this.scene = scene;
    this.world = world;
    this.map = map;
    this.game = game;
    this.safe = { x: (Math.random() - 0.5) * 40, z: (Math.random() - 0.5) * 40, r: 190 };
    this.zonePhase = 0;
    this.erupted = false;
    this.lavaRadius = 0;
    this.chickenKills = 0;
    this.funado = false;
    this.meteorTimer = 16 + Math.random() * 8;
    this.meteors = [];
    this.rockTimer = 0;
    this.rocks = [];
    this.pigeonTimer = 0;
    this.pigeons = [];
    this.chickens = [];
    this.immortalChickens = [];
    this.zoneTick = 0;
    this.peckTick = 0;
    this._pigeonWarned = false;
    this._lastZoneLabel = '';

    this.createChickens();
    this.createZoneWall();
  }

  /* ───────── pollos jueces ───────── */
  createChickens() {
    const mat = new THREE.MeshLambertMaterial({ vertexColors: true });
    const geo = chickenGeo(false);
    this.world.chickenSpots.slice(0, 12).forEach((spot, i) => {
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(spot.x, spot.y, spot.z);
      mesh.rotation.y = Math.random() * Math.PI * 2;
      this.scene.add(mesh);
      this.chickens.push({
        mesh, pos: new THREE.Vector3(spot.x, spot.y, spot.z),
        alive: true, phase: Math.random() * 10, target: this.randomChickenTarget(spot),
        speed: 0.5 + Math.random() * 0.7, immortal: false, id: i,
      });
    });
  }

  randomChickenTarget(spot) {
    const a = Math.random() * Math.PI * 2;
    const r = 2 + Math.random() * 8;
    return new THREE.Vector3(spot.x + Math.cos(a) * r, 0, spot.z + Math.sin(a) * r);
  }

  hitChicken(origin, dir, maxDist) {
    let best = null, bestT = maxDist;
    const check = (list) => {
      for (const c of list) {
        if (!c.alive) continue;
        const center = c.pos.clone().add(new THREE.Vector3(0, 0.38, 0));
        const toC = center.clone().sub(origin);
        const t = toC.dot(dir);
        if (t < 0 || t > bestT) continue;
        const closest = origin.clone().addScaledVector(dir, t);
        if (closest.distanceTo(center) < 0.42) { best = c; bestT = t; }
      }
    };
    check(this.chickens);
    check(this.immortalChickens);
    return best ? { chicken: best, t: bestT } : null;
  }

  killChicken(chicken, byPlayer = false) {
    if (!chicken.alive) return;
    if (chicken.immortal) {
      // No se pueden matar: se teletransportan
      this.teleportImmortal(chicken);
      if (byPlayer) this.game.hud.toast('Los pollos inmortales no mueren. Solo se enfadan.');
      return;
    }
    chicken.alive = false;
    chicken.mesh.visible = false;
    this.game.effects.sparksAt(chicken.pos.clone().add(new THREE.Vector3(0, 0.4, 0)), 0xffffff, 12, 5, 1.2);
    this.game.effects.smokeAt(chicken.pos, 0xe8e0cc, 5, 1.5);
    this.game.effects.ring(chicken.pos, 1.1, 0xffd166);
    if (byPlayer) {
      this.chickenKills = Math.min(10, this.chickenKills + 1);
      this.game.player.chickenKills = this.chickenKills;
      this.game.hud.chat(`🐔 <b>Pollo juez</b> eliminado · ${this.chickenKills}/10`, 'chicken');
      this.game.hud.toast(`Pollos jueces: ${this.chickenKills}/10`);
      if (this.chickenKills === 10 && !this.funado) this.triggerApocalypse();
    }
  }

  triggerApocalypse() {
    if (this.funado) return;
    this.funado = true;
    const name = this.game.playerName;
    this.game.hud.chat(`🐔 <b>A ${name} lo funaron los pollos por hate</b>`, 'chicken');
    this.game.hud.banner('APOCALIPSIS AVÍCOLA', 'La justicia de los pollos no descansa', 5, '#ffd166');
    this.game.hud.toast('🐔 ¡Los pollos inmortales te persiguen!');
    this.game.player.funado = true;

    const mat = new THREE.MeshLambertMaterial({ vertexColors: true });
    const geo = chickenGeo(true);
    for (let i = 0; i < 6; i++) {
      const mesh = new THREE.Mesh(geo, mat);
      const pos = this.game.player.pos.clone().add(new THREE.Vector3((Math.random() - 0.5) * 8, 0, (Math.random() - 0.5) * 8));
      pos.y = this.world.heightAt(pos.x, pos.z);
      mesh.position.copy(pos);
      this.scene.add(mesh);
      this.immortalChickens.push({
        mesh, pos, alive: true, immortal: true, phase: Math.random() * 10,
        teleportTimer: 1 + Math.random() * 2, peckTimer: 0, id: i,
      });
    }
  }

  teleportImmortal(c) {
    const p = this.game.player;
    const fwd = new THREE.Vector3(Math.sin(p.yaw), 0, Math.cos(p.yaw));
    const right = new THREE.Vector3(Math.cos(p.yaw), 0, -Math.sin(p.yaw));
    const back = fwd.clone().multiplyScalar(-(3.5 + Math.random() * 3)).addScaledVector(right, (Math.random() - 0.5) * 5);
    const x = p.pos.x + back.x, z = p.pos.z + back.z;
    const y = this.world.heightAt(x, z);
    this.game.effects.smokeAt(c.pos.clone().add(new THREE.Vector3(0, 0.3, 0)), 0xffd166, 6, 1.5);
    c.pos.set(x, y, z);
    c.mesh.position.copy(c.pos);
    c.teleportTimer = 2.5 + Math.random() * 2;
    this.game.effects.sparksAt(c.pos.clone().add(new THREE.Vector3(0, 0.4, 0)), 0xffd166, 8, 4, 1);
  }

  updateChickens(dt) {
    // Pollos normales: deambulan
    for (const c of this.chickens) {
      if (!c.alive) continue;
      c.phase += dt * 2;
      const d = c.target.clone().sub(c.pos);
      d.y = 0;
      if (d.length() < 1.2) {
        c.target = this.randomChickenTarget(c.pos);
      } else {
        d.normalize();
        c.pos.x += d.x * c.speed * dt;
        c.pos.z += d.z * c.speed * dt;
        c.pos.y = this.world.heightAt(c.pos.x, c.pos.z);
        c.mesh.rotation.y = Math.atan2(d.x, d.z);
      }
      c.mesh.position.set(c.pos.x, c.pos.y + Math.abs(Math.sin(c.phase)) * 0.035, c.pos.z);
    }

    // Pollos inmortales: teletransporte + acoso
    if (!this.funado) return;
    const p = this.game.player;
    for (const c of this.immortalChickens) {
      if (!c.alive) continue;
      c.phase += dt * 5;
      c.teleportTimer -= dt;
      c.peckTimer -= dt;
      const d = new THREE.Vector3(p.pos.x - c.pos.x, 0, p.pos.z - c.pos.z);
      const dist = d.length();
      if (c.teleportTimer <= 0) {
        // Si está a la vista, se teletransporta fuera de ella
        const toChicken = new THREE.Vector3(c.pos.x - p.pos.x, 0, c.pos.z - p.pos.z).normalize();
        const fwd = new THREE.Vector3(Math.sin(p.yaw), 0, Math.cos(p.yaw));
        if (toChicken.dot(fwd) > 0.2 || dist > 18) this.teleportImmortal(c);
        else c.teleportTimer = 1.2;
      }
      if (dist > 1.2) {
        d.normalize();
        c.pos.x += d.x * 4.6 * dt;
        c.pos.z += d.z * 4.6 * dt;
        c.pos.y = this.world.heightAt(c.pos.x, c.pos.z);
        c.mesh.rotation.y = Math.atan2(d.x, d.z);
      } else if (c.peckTimer <= 0) {
        c.peckTimer = 0.65 + Math.random() * 0.35;
        if (p.alive && !p.dropping) {
          p.takeDamage(2, 'Los Pollos Justicieros', 'picotazo');
          this.game.aimWobble = Math.max(this.game.aimWobble, 0.9);
          this.game.shake = Math.max(this.game.shake, 0.18);
          this.game.hud.chat('🐔 <b>PICOTAZO</b> · -2 HP · los pollos te están funando', 'chicken');
        }
      }
      c.mesh.position.set(c.pos.x, c.pos.y + Math.abs(Math.sin(c.phase)) * 0.08, c.pos.z);
      c.mesh.rotation.z = Math.sin(c.phase * 2) * 0.12;
    }
  }

  /* ───────── zona / muro ───────── */
  createZoneWall() {
    const color = this.map.toxic ? '#5affb0' : this.map.storm ? '#d8d0be' : '#ff8a3d';
    const tex = wallTexture(color);
    const mat = new THREE.MeshBasicMaterial({
      map: tex, color: new THREE.Color(color), transparent: true, opacity: 0.16,
      side: THREE.DoubleSide, depthWrite: false,
    });
    const geo = new THREE.CylinderGeometry(1, 1, 1, 48, 1, true);
    this.wall = new THREE.Mesh(geo, mat);
    this.wall.position.y = 35;
    this.wall.renderOrder = 2;
    this.scene.add(this.wall);

    const ringMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(color), transparent: true, opacity: 0.55,
      side: THREE.DoubleSide, depthWrite: false,
    });
    this.zoneRing = new THREE.Mesh(new THREE.RingGeometry(0.985, 1, 64), ringMat);
    this.zoneRing.rotation.x = -Math.PI / 2;
    this.zoneRing.position.y = 0.5;
    this.scene.add(this.zoneRing);
  }

  zoneRadiusAt(t) {
    if (t < 80) return 190;
    if (t < 140) return 190 + (120 - 190) * ((t - 80) / 60);
    if (t < 160) return 120;
    if (t < 205) return 120 + (75 - 120) * ((t - 160) / 45);
    if (t < 220) return 75;
    if (t < 260) return 75 + (40 - 75) * ((t - 220) / 40);
    if (t < 270) return 40;
    if (t < 300) return 40 + (18 - 40) * ((t - 270) / 30);
    return 18;
  }

  zoneLabel(t) {
    if (t < 80) return `${Math.ceil(80 - t)}s`;
    if (t < 140) return 'CERRANDO';
    if (t < 160) return `${Math.ceil(160 - t)}s`;
    if (t < 205) return 'CERRANDO';
    if (t < 220) return `${Math.ceil(220 - t)}s`;
    if (t < 260) return 'CERRANDO';
    if (t < 270) return `${Math.ceil(270 - t)}s`;
    if (t < 300) return 'FINAL';
    return 'FINAL';
  }

  lavaAt(x, z) {
    if (!this.erupted) return false;
    return Math.hypot(x - 10, z - 105) < this.lavaRadius;
  }

  updateZone(dt, t) {
    this.safe.r = this.zoneRadiusAt(t);
    const s = this.safe;
    this.wall.position.set(s.x, 35, s.z);
    this.wall.scale.set(s.r, 80, s.r);
    this.zoneRing.position.set(s.x, 0.5, s.z);
    this.zoneRing.scale.setScalar(s.r);
    this.zoneRing.material.opacity = 0.35 + Math.sin(t * 3) * 0.12;

    // Erupción volcánica
    if (this.map.lava && t >= 120 && !this.erupted) {
      this.erupted = true;
      this.lavaRadius = 26;
      this.world.setEruption(true);
      this.game.hud.banner('🌋 ERUPCIÓN MASIVA', 'Rocas ardientes y lava se extienden por el mapa', 5.5, '#ff7a2f');
      this.game.hud.chat('🌋 <b>El volcán entró en erupción</b> · la lava avanza', 'meteor');
      this.game.scene.fog.color.setHex(0x4a1c12);
      this.game.scene.fog.density = 0.006;
      this.game.hud.toast('🌋 ¡Corre! La lava avanza desde el volcán');
    }
    if (this.erupted) {
      this.lavaRadius = Math.min(175, 26 + (t - 120) * 1.15);
      this.rockTimer -= dt;
      if (this.rockTimer <= 0) {
        this.rockTimer = 1.6 + Math.random() * 2;
        this.spawnBurningRock();
      }
    }

    // Daño de zona cada 0.5s
    this.zoneTick -= dt;
    if (this.zoneTick <= 0 && t > 80) {
      this.zoneTick = 0.5;
      for (const e of this.game.aliveEntities()) {
        if (!e.alive || e.dropping) continue;
        const isPlayer = e === this.game.player;
        const outside = Math.hypot(e.pos.x - s.x, e.pos.z - s.z) > s.r;
        const inLava = this.lavaAt(e.pos.x, e.pos.z);
        if (outside || inLava) {
          const masked = isPlayer && this.map.toxic && this.game.player.maskTime > 0;
          if (masked && outside && !inLava) continue;
          let dmg = inLava ? 12 : this.map.toxic ? 11 : this.map.storm ? 8 : 9;
          if (isPlayer) this.game.player.takeDamage(dmg, inLava ? 'La lava' : 'La zona', '');
          else this.game.damageEntity(e, dmg, 'La zona', '');
        }
      }
    }

    // Rocas ardientes / meteoritos / palomas
    this.updateRocks(dt);
    this.updateMeteors(dt);
    this.updatePigeons(dt);
  }

  spawnBurningRock() {
    const a = Math.random() * Math.PI * 2;
    const d = 20 + Math.random() * 120;
    const x = 10 + Math.cos(a) * d, z = 105 + Math.sin(a) * d;
    const mesh = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.7 + Math.random() * 0.9, 0),
      new THREE.MeshBasicMaterial({ color: 0xff5a1f, toneMapped: false })
    );
    mesh.position.set(x + (Math.random() - 0.5) * 12, 70, z + (Math.random() - 0.5) * 12);
    this.scene.add(mesh);
    this.rocks.push({ mesh, vy: 26 + Math.random() * 12, targetY: this.world.heightAt(x, z), life: 8, x, z });
  }

  updateRocks(dt) {
    for (let i = this.rocks.length - 1; i >= 0; i--) {
      const r = this.rocks[i];
      r.life -= dt;
      r.mesh.position.y -= r.vy * dt;
      r.mesh.rotation.x += dt * 4;
      r.mesh.rotation.z += dt * 3;
      if (Math.random() < 0.6) this.game.effects.sparksAt(r.mesh.position, 0xff7a2f, 1, 2, 0.4);
      if (r.mesh.position.y <= r.targetY) {
        const pos = r.mesh.position.clone();
        this.game.effects.explosion(pos, 3.5, 0xff5a1f);
        this.game.effects.ring(pos, 3.5, 0xff7a2f);
        for (const e of this.game.aliveEntities()) {
          if (!e.alive) continue;
          if (e.pos.distanceTo(pos) < 4) {
            if (e === this.game.player) {
              this.game.player.takeDamage(24, 'Una roca ardiente', '');
              this.game.shake = Math.max(this.game.shake, 0.5);
            } else this.game.damageEntity(e, 24, 'Una roca ardiente', '');
          }
        }
        this.scene.remove(r.mesh);
        r.mesh.geometry.dispose();
        this.rocks.splice(i, 1);
      } else if (r.life <= 0) {
        this.scene.remove(r.mesh); r.mesh.geometry.dispose(); this.rocks.splice(i, 1);
      }
    }
  }

  /* ───────── meteorito de la humillación ───────── */
  updateMeteors(dt) {
    this.meteorTimer -= dt;
    if (this.meteorTimer <= 0) {
      this.meteorTimer = 20 + Math.random() * 16;
      this.spawnMeteor();
    }
    for (let i = this.meteors.length - 1; i >= 0; i--) {
      const m = this.meteors[i];
      m.t -= dt;
      const k = 1 - m.t / m.dur;
      m.mesh.position.lerpVectors(m.from, m.to, k);
      m.mesh.rotation.x += dt * 8;
      if (Math.random() < 0.7) this.game.effects.sparksAt(m.mesh.position, 0xff7a2f, 1, 1.5, 0.3);
      if (m.t <= 0) {
        const pos = m.to.clone();
        this.game.effects.explosion(pos, 2.4, 0xff7a2f);
        this.game.effects.ring(pos, 2.2, 0xff7a2f);
        this.game.effects.smokeAt(pos, 0x3a2a24, 8, 2);
        if (m.target && m.target.alive) {
          if (m.target === this.game.player) {
            this.game.player.takeDamage(5, 'El Meteorito de la Humillación', '');
            this.game.shake = Math.max(this.game.shake, 0.35);
          } else {
            this.game.damageEntity(m.target, 5, 'El Meteorito de la Humillación', '');
          }
        }
        this.game.hud.chat(`☄️ <b>«A ${m.targetName} le cayó un meteorito, qué pena, terrible...»</b>`, 'meteor');
        this.scene.remove(m.mesh);
        m.mesh.geometry.dispose();
        m.mesh.material.dispose();
        this.meteors.splice(i, 1);
      }
    }
  }

  spawnMeteor() {
    const entities = this.game.aliveEntities().filter((e) => e.alive && !e.dropping);
    if (!entities.length) return;
    const target = entities[Math.floor(Math.random() * entities.length)];
    const targetName = target === this.game.player ? this.game.playerName : target.name;
    const to = target.pos.clone();
    to.y = this.world.heightAt(to.x, to.z) + 0.2;
    const from = to.clone().add(new THREE.Vector3(12 + Math.random() * 18, 90 + Math.random() * 30, 12 + Math.random() * 18));
    const mesh = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.75, 0),
      new THREE.MeshBasicMaterial({ color: 0xff7a2f, toneMapped: false })
    );
    mesh.position.copy(from);
    this.scene.add(mesh);
    this.meteors.push({ mesh, from, to, t: 1.8, dur: 1.8, target, targetName });
  }

  /* ───────── palomas cósmicas ───────── */
  updatePigeons(dt) {
    const p = this.game.player;
    this.pigeonTimer -= dt;
    if (this.pigeonTimer <= 0 && p.alive && !p.dropping) {
      this.pigeonTimer = 0.5;
      const outOfBounds = Math.hypot(p.pos.x, p.pos.z) > 205;
      const tooHigh = p.pos.y > 42;
      const below = p.pos.y < -2;
      if ((outOfBounds || tooHigh || below) && !this._pigeonWarned) {
        this._pigeonWarned = true;
        this.game.hud.banner('🚫 ZONA NO AUTORIZADA', 'Las Palomas Cósmicas han detectado un camper', 3.5, '#35f0ff');
        this.game.hud.chat('🐦 <b>Las Palomas Cósmicas descienden...</b>', 'pigeon');
        this.spawnPigeons(p.pos.clone(), () => {
          if (p.alive) {
            this.game.hud.chat(`🐦 <b>Las Palomas Cósmicas ajusticiaron a ${this.game.playerName} por camper</b>`, 'pigeon');
            this.game.killPlayer('Las Palomas Cósmicas', 'justicia divina');
          }
        });
      }
    }
    if (this._pigeonWarned && p.alive && !this.pigeons.length) {
      // ya ejecutado o el jugador volvió: reset
      this._pigeonWarned = false;
    }

    for (let i = this.pigeons.length - 1; i >= 0; i--) {
      const pg = this.pigeons[i];
      pg.t -= dt;
      const k = Math.min(1, 1 - pg.t / pg.dur);
      pg.mesh.position.lerpVectors(pg.from, pg.to, k * k);
      pg.mesh.rotation.z = Math.sin(performance.now() * 0.02 + i) * 0.3;
      pg.wingL.rotation.z = Math.sin(performance.now() * 0.03 + i) * 0.9;
      pg.wingR.rotation.z = -Math.sin(performance.now() * 0.03 + i) * 0.9;
      if (pg.t <= 0) {
        pg.onDone?.();
        this.scene.remove(pg.mesh);
        this.pigeons.splice(i, 1);
        setTimeout(() => { this._pigeonWarned = false; }, 1500);
      }
    }
  }

  spawnPigeons(pos, onDone) {
    const geo = pigeonGeo();
    const mat = new THREE.MeshLambertMaterial({ vertexColors: true });
    for (let i = 0; i < 3; i++) {
      const mesh = new THREE.Mesh(geo, mat);
      mesh.scale.setScalar(3.2);
      const from = pos.clone().add(new THREE.Vector3((i - 1) * 14 + (Math.random() - 0.5) * 6, 34 + i * 5, 10 + Math.random() * 12));
      mesh.position.copy(from);
      const wingL = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.12, 0.9), new THREE.MeshLambertMaterial({ color: 0x7d8a99 }));
      const wingR = wingL.clone();
      wingL.position.set(-1.0, 0.6, 0);
      wingR.position.set(1.0, 0.6, 0);
      mesh.add(wingL, wingR);
      this.scene.add(mesh);
      this.pigeons.push({
        mesh, from, to: pos.clone().add(new THREE.Vector3(0, 1.2, 0)),
        t: 1.35 + i * 0.12, dur: 1.35, wingL, wingR,
        onDone: i === 0 ? onDone : null,
      });
    }
  }

  update(dt, t) {
    this.updateZone(dt, t);
    this.updateChickens(dt);
    // Anillo del muro
    this.wall.material.opacity = 0.12 + Math.sin(t * 2) * 0.03;
  }

  dispose() {
    this.scene.remove(this.wall, this.zoneRing);
    for (const c of this.chickens) this.scene.remove(c.mesh);
    for (const c of this.immortalChickens) this.scene.remove(c.mesh);
    for (const m of this.meteors) this.scene.remove(m.mesh);
    for (const r of this.rocks) this.scene.remove(r.mesh);
    for (const p of this.pigeons) this.scene.remove(p.mesh);
  }
}
