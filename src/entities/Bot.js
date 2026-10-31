import * as THREE from 'three';
import { createBotMesh, buildWeaponMesh, disposeObject } from './Character.js';
import { WEAPONS } from '../data/weapons.js';

const BOT_WEAPONS = [
  'pio', 'm1911', 'uzi', 'mp5', 'ak47', 'm4a1', 'remington', 'deagle',
  'mp7', 'scar', 'g36', 'mosin', 'm249', 'bate_beisbol', 'katana', 'p90',
];

export class Bot {
  constructor(game, name, seed, spawn) {
    this.game = game;
    this.name = name;
    this.seed = seed;
    this.alive = true;
    this.hp = 1000;
    this.maxHp = 1000;
    this.pos = new THREE.Vector3(spawn.x, spawn.y ?? 0, spawn.z);
    this.vel = new THREE.Vector3();
    this.knock = new THREE.Vector3();
    this.yaw = Math.random() * Math.PI * 2;
    this.dropping = spawn.drop !== false;
    this.landed = !this.dropping;
    this.dropSpeed = 10 + Math.random() * 6;
    this.stun = 0;
    this.dead = false;
    this.target = null;
    this.targetTimer = Math.random() * 0.6;
    this.fireTimer = 2 + Math.random() * 3;
    this.thinkTimer = Math.random();
    this.wander = new THREE.Vector3(spawn.x, 0, spawn.z);
    this.accuracy = 0.28 + Math.random() * 0.3;
    this.aggression = 0.4 + Math.random() * 0.6;
    this.speed = 3.8 + Math.random() * 1.5;
    this.weapon = WEAPONS[BOT_WEAPONS[Math.floor(Math.random() * BOT_WEAPONS.length)]];
    this.meshData = createBotMesh(game.scene, seed, game.map);
    // Ajustar el arma visual al arma real del bot
    this.meshData.group.remove(this.meshData.weaponMesh);
    disposeObject(this.meshData.weaponMesh);
    const wm = buildWeaponMesh(this.weapon.id);
    wm.position.set(0.3, 0.48, 0.15);
    wm.scale.setScalar(0.9);
    this.meshData.group.add(wm);
    this.meshData.weaponMesh = wm;
    this.mesh = this.meshData.group;
    this.mesh.position.copy(this.pos);
    this.bobPhase = Math.random() * 10;
    this.lastHitBy = null;
    this.meleeTimer = 0;
    if (this.dropping) {
      this.pos.y = 60 + Math.random() * 25;
      this.mesh.position.y = this.pos.y;
    } else {
      this.pos.y = game.world.heightAt(this.pos.x, this.pos.z);
      this.mesh.position.y = this.pos.y;
    }
  }

  get chest() { return new THREE.Vector3(this.pos.x, this.pos.y + 0.62, this.pos.z); }
  get head() { return new THREE.Vector3(this.pos.x, this.pos.y + 0.9, this.pos.z); }

  takeDamage(amount, source, weaponName = '') {
    if (!this.alive) return;
    this.hp -= amount;
    this.lastHitBy = source;
    this.stun = Math.max(this.stun, 0.08);
    if (source === this.game.player) {
      this.game.hud.damage(this.head.clone().add(new THREE.Vector3(0, 0.25, 0)), amount, amount >= 100 ? 'crit' : '');
    }
    if (this.hp <= 0) {
      this.game.killBot(this, source, weaponName);
    }
  }

  applyKnockback(dir, force) {
    this.knock.addScaledVector(dir, force);
    this.stun = Math.max(this.stun, 0.35);
  }

  update(dt) {
    if (!this.alive) return;
    const world = this.game.world;

    if (this.dropping) {
      this.pos.y -= this.dropSpeed * dt;
      const g = world.heightAt(this.pos.x, this.pos.z);
      this.mesh.rotation.z = Math.sin(performance.now() * 0.004 + this.seed) * 0.18;
      if (this.pos.y <= g + 0.05) {
        this.pos.y = g;
        this.dropping = false;
        this.landed = true;
        this.mesh.rotation.z = 0;
        this.game.effects.ring(this.pos, 1.2, 0xffffff);
      }
      this.mesh.position.copy(this.pos);
      return;
    }

    this.stun = Math.max(0, this.stun - dt);
    this.fireTimer = Math.max(0, this.fireTimer - dt);
    this.targetTimer -= dt;
    this.thinkTimer -= dt;

    // Elegir objetivo
    if (this.targetTimer <= 0 || !this.target || !this.target.alive) {
      this.targetTimer = 0.7 + Math.random() * 0.7;
      this.target = this.pickTarget();
    }

    const zone = this.game.hazards.safe;
    const outside = Math.hypot(this.pos.x - zone.x, this.pos.z - zone.z) > zone.r - 3;
    const inLava = this.game.hazards.lavaAt(this.pos.x, this.pos.z);

    let moveTarget = null;
    let speed = this.speed;
    let strafe = false;

    if (outside || inLava) {
      moveTarget = new THREE.Vector3(zone.x, 0, zone.z);
      speed *= 1.25;
    } else if (this.target) {
      const d = this.pos.distanceTo(this.target.pos);
      const range = this.weapon.melee ? 2.2 : Math.min(28, this.weapon.range * 0.55);
      if (d > range * 1.15) {
        moveTarget = this.target.pos;
      } else if (d < range * 0.55) {
        moveTarget = this.pos.clone().add(this.pos.clone().sub(this.target.pos).setY(0).normalize().multiplyScalar(4));
        strafe = true;
      } else {
        // strafe lateral
        const dir = new THREE.Vector3(this.target.pos.x - this.pos.x, 0, this.target.pos.z - this.pos.z).normalize();
        const side = new THREE.Vector3(-dir.z, 0, dir.x).multiplyScalar(this.seed % 2 ? 1 : -1);
        moveTarget = this.pos.clone().add(side.multiplyScalar(5));
        strafe = true;
        speed *= 0.7;
      }
    } else {
      if (this.thinkTimer <= 0) {
        this.thinkTimer = 2 + Math.random() * 3;
        const a = Math.random() * Math.PI * 2;
        const r = 20 + Math.random() * 120;
        this.wander.set(zone.x + Math.cos(a) * r * 0.5, 0, zone.z + Math.sin(a) * r * 0.5);
      }
      moveTarget = this.wander;
      speed *= 0.55;
    }

    if (this.stun > 0) { moveTarget = null; speed = 0; }

    // Movimiento
    if (moveTarget) {
      const dir = new THREE.Vector3(moveTarget.x - this.pos.x, 0, moveTarget.z - this.pos.z);
      const dist = dir.length();
      if (dist > 0.5) {
        dir.normalize();
        this.pos.x += dir.x * speed * dt;
        this.pos.z += dir.z * speed * dt;
        if (!strafe) this.yaw = Math.atan2(dir.x, dir.z);
      }
    }
    if (this.target && this.fireTimer > 0) {
      // Mirar al objetivo mientras dispara
      const dx = this.target.pos.x - this.pos.x, dz = this.target.pos.z - this.pos.z;
      const want = Math.atan2(dx, dz);
      let diff = want - this.yaw;
      while (diff > Math.PI) diff -= Math.PI * 2;
      while (diff < -Math.PI) diff += Math.PI * 2;
      this.yaw += diff * Math.min(1, dt * 5);
    }

    // Knockback
    this.pos.x += this.knock.x * dt;
    this.pos.z += this.knock.z * dt;
    this.knock.multiplyScalar(Math.max(0, 1 - dt * 7));

    // Colisiones y suelo
    const boxTop = world.resolveCollisions(this.pos, 0.32, 1.0);
    let ground = world.heightAt(this.pos.x, this.pos.z);
    if (boxTop != null) ground = Math.max(ground, boxTop);
    this.pos.y = ground;

    // Evitar el agua
    if (this.pos.y < 0.4) {
      const dx = -this.pos.x, dz = -this.pos.z;
      const l = Math.hypot(dx, dz) || 1;
      this.pos.x += (dx / l) * dt * 4;
      this.pos.z += (dz / l) * dt * 4;
      this.pos.y = world.heightAt(this.pos.x, this.pos.z);
    }

    // Disparar
    if (this.target && this.fireTimer <= 0 && !this.dropping && this.stun <= 0) {
      const d = this.pos.distanceTo(this.target.pos);
      const maxRange = this.weapon.melee ? 2.6 : this.weapon.range;
      if (d < maxRange) {
        this.game.botShoot(this, this.target, this.weapon);
        this.fireTimer = this.weapon.melee
          ? this.weapon.fireRate * (1.2 + Math.random())
          : this.weapon.fireRate * (1.4 + Math.random() * 1.4);
      }
    }

    // Animación
    this.bobPhase += dt * (moveTarget && this.stun <= 0 ? 9 : 2);
    this.mesh.position.set(this.pos.x, this.pos.y + Math.abs(Math.sin(this.bobPhase)) * 0.02, this.pos.z);
    this.mesh.rotation.y = this.yaw;
    this.mesh.rotation.z = this.stun > 0 ? Math.sin(performance.now() * 0.03) * 0.12 : 0;
    this.meshData.weaponMesh.rotation.x = this.target ? -0.15 : 0;
  }

  pickTarget() {
    const game = this.game;
    let best = null, bestD = 50;
    const candidates = game.aliveEntities();
    for (const e of candidates) {
      if (e === this || !e.alive) continue;
      const d = this.pos.distanceTo(e.pos);
      if (d < bestD) {
        // No perseguir a través del mapa entero si está fuera de zona
        bestD = d;
        best = e;
      }
    }
    // 25% de las veces prioriza al jugador si está cerca
    if (game.player.alive && this.pos.distanceTo(game.player.pos) < 30 && Math.random() < 0.3) {
      return game.player;
    }
    return best;
  }

  dispose() {
    this.mesh.parent?.remove(this.mesh);
    this.mesh.traverse((o) => { o.geometry?.dispose?.(); });
  }
}
