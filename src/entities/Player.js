import * as THREE from 'three';
import { createPlayerCharacter } from './Character.js';
import { WEAPONS, STARTER_WEAPON } from '../data/weapons.js';

export class Player {
  constructor(game, skin) {
    this.game = game;
    this.skin = skin;
    this.pos = new THREE.Vector3(0, 80, 0);
    this.vel = new THREE.Vector3();
    this.yaw = Math.random() * Math.PI * 2;
    this.pitch = 0.08;
    this.hp = 1000;
    this.maxHp = 1000;
    this.alive = true;
    this.grounded = false;
    this.dropping = true;
    this.dropSpeed = 11;
    this.stun = 0;
    this.fireCooldown = 0;
    this.reloadTimer = 0;
    this.reloading = false;
    this.specialCooldown = 0;
    this.aiming = false;
    this.attacking = 0;
    this.maskTime = 0;
    this.spawnGuard = 0;
    this.funado = false;
    this.slots = [];
    this.slotIndex = 0;
    this.lastDamage = '';
    this.character = createPlayerCharacter(game.scene, skin);
    this.character.root.position.copy(this.pos);
    this.addWeapon(STARTER_WEAPON, true);
  }

  get weapon() { return WEAPONS[this.slots[this.slotIndex]?.id] || WEAPONS[STARTER_WEAPON]; }
  get item() { return this.slots[this.slotIndex]; }
  get chest() { return new THREE.Vector3(this.pos.x, this.pos.y + 0.62, this.pos.z); }
  get head() { return new THREE.Vector3(this.pos.x, this.pos.y + 0.9, this.pos.z); }

  addWeapon(id, silent = false) {
    const w = WEAPONS[id];
    if (!w) return false;
    const existing = this.slots.find((s) => s.id === id);
    if (existing) {
      existing.mag = w.mag === Infinity ? Infinity : w.mag;
      existing.reserve = w.reserve;
      this.slotIndex = this.slots.indexOf(existing);
      this.character.setWeapon(id);
      if (!silent) this.game.hud.toast(`${w.name} recargada`);
      return true;
    }
    const item = {
      id,
      mag: w.mag === Infinity ? Infinity : w.mag,
      reserve: w.reserve,
    };
    if (this.slots.length < 3) {
      this.slots.push(item);
      this.slotIndex = this.slots.length - 1;
    } else {
      this.slots[this.slotIndex] = item;
    }
    this.character.setWeapon(id);
    this.fireCooldown = 0.15;
    this.reloading = false;
    this.reloadTimer = 0;
    if (!silent) this.game.hud.toast(`Equipado: ${w.name}`);
    return true;
  }

  switchSlot(i) {
    if (i < 0 || i >= this.slots.length || i === this.slotIndex) return;
    this.slotIndex = i;
    this.character.setWeapon(this.item.id);
    this.reloading = false;
    this.reloadTimer = 0;
    this.fireCooldown = Math.max(this.fireCooldown, 0.18);
  }

  cycleSlot(dir = 1) {
    if (this.slots.length < 2) return;
    const n = this.slots.length;
    this.switchSlot((this.slotIndex + dir + n) % n);
  }

  startReload() {
    const w = this.weapon;
    if (w.melee || this.reloading || this.item.mag >= w.mag || this.item.reserve <= 0) return;
    this.reloading = true;
    this.reloadTimer = w.reload;
    this.game.hud.toast('Recargando...');
  }

  finishReload() {
    const w = this.weapon, it = this.item;
    const need = w.mag - it.mag;
    const take = Math.min(need, it.reserve);
    it.mag += take;
    if (it.reserve !== Infinity) it.reserve -= take;
    this.reloading = false;
  }

  heal(amount) {
    const before = this.hp;
    this.hp = Math.min(this.maxHp, this.hp + amount);
    if (this.hp > before) this.game.hud.damage(this.pos.clone().add(new THREE.Vector3(0, 1.3, 0)), this.hp - before, 'heal');
  }

  takeDamage(amount, source = 'El caos', weaponName = '') {
    if (!this.alive || this.dropping || this.spawnGuard > 0) return;
    this.hp -= amount;
    this.lastDamage = weaponName ? `${source} con ${weaponName}` : source;
    this.game.hud.hurt(amount);
    this.game.shake = Math.min(1.2, this.game.shake + amount / 180);
    this.game.hud.damage(this.pos.clone().add(new THREE.Vector3(0, 1.4, 0)), amount, '');
    if (this.hp <= 0) {
      this.hp = 0;
      this.game.killPlayer(source, weaponName);
    }
  }

  respawnAtSpawn(spawn) {
    this.pos.set(spawn.x, spawn.y, spawn.z);
    this.vel.set(0, 0, 0);
    this.character.root.position.copy(this.pos);
  }

  update(dt, input) {
    if (!this.alive) return;
    const w = this.weapon;
    const world = this.game.world;

    // Cámara / mirada
    const sens = (this.aiming ? 0.0016 : 0.0026) * (this.game.quality === 'baja' ? 1.1 : 1);
    this.yaw += input.lookX * sens;
    this.pitch -= input.lookY * sens;
    this.pitch = Math.max(-0.52, Math.min(0.95, this.pitch));
    if (this.yaw > Math.PI) this.yaw -= Math.PI * 2;
    if (this.yaw < -Math.PI) this.yaw += Math.PI * 2;
    this.aiming = !!input.aiming;

    if (this.stun > 0) this.stun -= dt;
    this.fireCooldown = Math.max(0, this.fireCooldown - dt);
    this.specialCooldown = Math.max(0, this.specialCooldown - dt);
    this.attacking = Math.max(0, this.attacking - dt);
    this.maskTime = Math.max(0, this.maskTime - dt);
    this.spawnGuard = Math.max(0, this.spawnGuard - dt);
    if (this.reloading) {
      this.reloadTimer -= dt;
      if (this.reloadTimer <= 0) this.finishReload();
    }

    // Caída en paracaídas
    if (this.dropping) {
      const fwd = new THREE.Vector3(Math.sin(this.yaw), 0, Math.cos(this.yaw));
      const right = new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw));
      this.pos.addScaledVector(fwd, -input.moveY * 9 * dt);
      this.pos.addScaledVector(right, input.moveX * 9 * dt);
      this.pos.y -= this.dropSpeed * dt;
      const g = world.heightAt(this.pos.x, this.pos.z);
      this.game.hud.setDrop(this.pos.y - g);
      if (this.pos.y <= g + 0.02) {
        this.pos.y = g;
        this.dropping = false;
        this.grounded = true;
        this.spawnGuard = 6;
        this.vel.set(0, 0, 0);
        this.game.effects.ring(this.pos, 2.2, 0xffd166);
        this.game.effects.smokeAt(this.pos, 0x8a7a5a, 8, 2);
        this.game.hud.setDrop(null);
        this.game.hud.toast('¡Aterrizaste! 6s de protección. Busca armas.');
        this.game.shake = Math.max(this.game.shake, 0.25);
      }
      this.character.root.position.copy(this.pos);
      this.character.root.rotation.y = this.yaw;
      this.character.rig.rotation.x = -0.35;
      this.character.rig.rotation.z = Math.sin(performance.now() * 0.003) * 0.1;
      this.character.update(dt, 0, false, false, false);
      return;
    }
    this.character.rig.rotation.x = 0;

    // Movimiento
    const fwd = new THREE.Vector3(Math.sin(this.yaw), 0, Math.cos(this.yaw));
    const right = new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw));
    const wish = new THREE.Vector3();
    wish.addScaledVector(fwd, -input.moveY);
    wish.addScaledVector(right, input.moveX);
    if (wish.lengthSq() > 1) wish.normalize();

    let speed = 5.4;
    if (input.sprint && input.moveY < -0.2 && !this.aiming) speed = 8.4;
    if (this.aiming) speed = 3.0;
    speed *= w.moveSpeed || 1;
    if (this.stun > 0) speed *= 0.25;

    const targetVX = wish.x * speed;
    const targetVZ = wish.z * speed;
    const accel = this.grounded ? 14 : 4;
    this.vel.x += (targetVX - this.vel.x) * Math.min(1, accel * dt);
    this.vel.z += (targetVZ - this.vel.z) * Math.min(1, accel * dt);

    // Salto / gravedad
    if (input.jump && this.grounded && this.stun <= 0) {
      this.vel.y = 7.4;
      this.grounded = false;
      this.game.effects.ring(this.pos, 0.9, 0xffffff);
    }
    this.vel.y -= 20 * dt;

    this.pos.x += this.vel.x * dt;
    this.pos.z += this.vel.z * dt;
    this.pos.y += this.vel.y * dt;

    // Colisiones
    const boxTop = world.resolveCollisions(this.pos, 0.34, 1.02);
    let ground = world.heightAt(this.pos.x, this.pos.z);
    if (boxTop != null) ground = Math.max(ground, boxTop);
    if (this.pos.y <= ground) {
      this.pos.y = ground;
      if (this.vel.y < -6) {
        this.game.effects.ring(this.pos, 1.2, 0xffffff);
        this.game.shake = Math.max(this.game.shake, Math.min(0.35, -this.vel.y / 40));
      }
      this.vel.y = 0;
      this.grounded = true;
    } else {
      this.grounded = false;
    }

    // Agua = daño
    if (this.pos.y < 0.35) {
      this.pos.y = Math.max(this.pos.y, 0.1);
      if (!this._waterT) this._waterT = 0;
      this._waterT += dt;
      if (this._waterT > 0.6) { this._waterT = 0; this.takeDamage(18, 'El agua', ''); }
      const dx = -this.pos.x, dz = -this.pos.z;
      const l = Math.hypot(dx, dz) || 1;
      this.pos.x += (dx / l) * dt * 3;
      this.pos.z += (dz / l) * dt * 3;
    }

    // Límites del mapa: las palomas se encargan, pero no dejar salir del todo
    if (Math.hypot(this.pos.x, this.pos.z) > 230) {
      this.pos.x *= 0.98; this.pos.z *= 0.98;
    }

    // Acciones
    if (input.reload) this.startReload();
    if (input.swapTo != null) this.switchSlot(input.swapTo);
    else if (input.swap) this.cycleSlot(input.swapDir || 1);

    // Disparo
    if (input.firing && this.fireCooldown <= 0 && this.stun <= 0 && !this.reloading) {
      this.game.playerShoot();
    }

    // Animación
    const hSpeed = Math.hypot(this.vel.x, this.vel.z);
    this.character.root.position.copy(this.pos);
    this.character.root.rotation.y = this.yaw;
    this.character.rig.rotation.y = 0;
    this.character.update(dt, hSpeed, this.grounded, this.aiming, this.attacking > 0);
    this.character.muzzle.getWorldPosition(this.game.tmpMuzzle);
  }

  dispose() {
    this.character.root.parent?.remove(this.character.root);
  }
}
