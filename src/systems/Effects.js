import * as THREE from 'three';

/* Pool de trazadoras, partículas, explosiones, anillos y destellos. */

const MAX_TRACERS = 56;
const MAX_SPARKS = 420;
const MAX_SMOKE = 120;
const MAX_FLASH = 10;

function radialTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.35, 'rgba(255,220,150,0.9)');
  g.addColorStop(1, 'rgba(255,120,40,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export class Effects {
  constructor(scene) {
    this.scene = scene;
    this.tmp = new THREE.Vector3();
    this.tmp2 = new THREE.Vector3();

    // Trazadoras
    this.tracerPos = new Float32Array(MAX_TRACERS * 6);
    this.tracerCol = new Float32Array(MAX_TRACERS * 6);
    const tg = new THREE.BufferGeometry();
    tg.setAttribute('position', new THREE.BufferAttribute(this.tracerPos, 3));
    tg.setAttribute('color', new THREE.BufferAttribute(this.tracerCol, 3));
    this.tracerMesh = new THREE.LineSegments(tg, new THREE.LineBasicMaterial({
      vertexColors: true, transparent: true, opacity: 0.95,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    this.tracerMesh.frustumCulled = false;
    scene.add(this.tracerMesh);
    this.tracers = [];

    // Chispas
    this.sparkPos = new Float32Array(MAX_SPARKS * 3).fill(-999);
    this.sparkCol = new Float32Array(MAX_SPARKS * 3);
    this.sparkVel = new Float32Array(MAX_SPARKS * 3);
    this.sparkLife = new Float32Array(MAX_SPARKS);
    const sg = new THREE.BufferGeometry();
    sg.setAttribute('position', new THREE.BufferAttribute(this.sparkPos, 3));
    sg.setAttribute('color', new THREE.BufferAttribute(this.sparkCol, 3));
    this.sparks = new THREE.Points(sg, new THREE.PointsMaterial({
      size: 0.19, vertexColors: true, transparent: true, opacity: 0.95,
      blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true,
    }));
    this.sparks.frustumCulled = false;
    scene.add(this.sparks);
    this.sparkIdx = 0;

    // Humo
    this.smokePos = new Float32Array(MAX_SMOKE * 3).fill(-999);
    this.smokeCol = new Float32Array(MAX_SMOKE * 3);
    this.smokeVel = new Float32Array(MAX_SMOKE * 3);
    this.smokeLife = new Float32Array(MAX_SMOKE);
    const mg = new THREE.BufferGeometry();
    mg.setAttribute('position', new THREE.BufferAttribute(this.smokePos, 3));
    mg.setAttribute('color', new THREE.BufferAttribute(this.smokeCol, 3));
    this.smoke = new THREE.Points(mg, new THREE.PointsMaterial({
      size: 1.4, vertexColors: true, transparent: true, opacity: 0.32,
      depthWrite: false, sizeAttenuation: true,
    }));
    this.smoke.frustumCulled = false;
    scene.add(this.smoke);
    this.smokeIdx = 0;

    // Destellos de boca de cañón
    const tex = radialTexture();
    this.flashPos = new Float32Array(MAX_FLASH * 3).fill(-999);
    const fg = new THREE.BufferGeometry();
    fg.setAttribute('position', new THREE.BufferAttribute(this.flashPos, 3));
    this.flash = new THREE.Points(fg, new THREE.PointsMaterial({
      map: tex, size: 1.3, transparent: true, opacity: 0.9,
      blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true,
    }));
    this.flash.frustumCulled = false;
    scene.add(this.flash);
    this.flashLife = new Float32Array(MAX_FLASH);
    this.flashIdx = 0;

    // Explosiones
    this.booms = [];
    for (let i = 0; i < 4; i++) {
      const m = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1, 1),
        new THREE.MeshBasicMaterial({ color: 0xff7a2f, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false })
      );
      m.visible = false;
      scene.add(m);
      this.booms.push({ mesh: m, life: 0, max: 0.5, radius: 4 });
    }

    // Anillos
    this.rings = [];
    for (let i = 0; i < 6; i++) {
      const m = new THREE.Mesh(
        new THREE.RingGeometry(0.86, 1, 28),
        new THREE.MeshBasicMaterial({ color: 0xffd166, transparent: true, opacity: 0, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false })
      );
      m.rotation.x = -Math.PI / 2;
      m.visible = false;
      scene.add(m);
      this.rings.push({ mesh: m, life: 0, max: 0.5, radius: 4 });
    }

    // Haces
    this.beams = [];
    for (let i = 0; i < 5; i++) {
      const m = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 1, 6, 1, true),
        new THREE.MeshBasicMaterial({ color: 0x35f0ff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false })
      );
      m.visible = false;
      scene.add(m);
      this.beams.push({ mesh: m, life: 0, max: 0.2 });
    }
  }

  tracer(from, to, color = 0xffd166) {
    const i = this.tracers.length % MAX_TRACERS;
    const p = this.tracerPos, c = this.tracerCol;
    p[i * 6] = from.x; p[i * 6 + 1] = from.y; p[i * 6 + 2] = from.z;
    p[i * 6 + 3] = to.x; p[i * 6 + 4] = to.y; p[i * 6 + 5] = to.z;
    const col = new THREE.Color(color);
    c[i * 6] = col.r; c[i * 6 + 1] = col.g; c[i * 6 + 2] = col.b;
    c[i * 6 + 3] = col.r * 0.15; c[i * 6 + 4] = col.g * 0.15; c[i * 6 + 5] = col.b * 0.15;
    const entry = this.tracers.find((t) => t.slot === i);
    if (entry) { entry.life = 0.12; entry.max = 0.12; }
    else this.tracers.push({ slot: i, life: 0.12, max: 0.12 });
    this.tracerMesh.geometry.attributes.position.needsUpdate = true;
    this.tracerMesh.geometry.attributes.color.needsUpdate = true;
  }

  muzzle(pos) {
    const i = this.flashIdx++ % MAX_FLASH;
    this.flashPos[i * 3] = pos.x; this.flashPos[i * 3 + 1] = pos.y; this.flashPos[i * 3 + 2] = pos.z;
    this.flashLife[i] = 0.06;
    this.flash.geometry.attributes.position.needsUpdate = true;
  }

  sparksAt(pos, color = 0xffd166, count = 6, speed = 4, spread = 1) {
    const col = new THREE.Color(color);
    for (let k = 0; k < count; k++) {
      const i = this.sparkIdx++ % MAX_SPARKS;
      this.sparkPos[i * 3] = pos.x; this.sparkPos[i * 3 + 1] = pos.y; this.sparkPos[i * 3 + 2] = pos.z;
      this.sparkVel[i * 3] = (Math.random() - 0.5) * speed * spread;
      this.sparkVel[i * 3 + 1] = Math.random() * speed;
      this.sparkVel[i * 3 + 2] = (Math.random() - 0.5) * speed * spread;
      this.sparkCol[i * 3] = col.r; this.sparkCol[i * 3 + 1] = col.g; this.sparkCol[i * 3 + 2] = col.b;
      this.sparkLife[i] = 0.35 + Math.random() * 0.4;
    }
    this.sparks.geometry.attributes.position.needsUpdate = true;
    this.sparks.geometry.attributes.color.needsUpdate = true;
  }

  smokeAt(pos, color = 0x555555, count = 5, up = 2) {
    const col = new THREE.Color(color);
    for (let k = 0; k < count; k++) {
      const i = this.smokeIdx++ % MAX_SMOKE;
      this.smokePos[i * 3] = pos.x + (Math.random() - 0.5) * 1.2;
      this.smokePos[i * 3 + 1] = pos.y + Math.random() * 0.6;
      this.smokePos[i * 3 + 2] = pos.z + (Math.random() - 0.5) * 1.2;
      this.smokeVel[i * 3] = (Math.random() - 0.5) * 1.5;
      this.smokeVel[i * 3 + 1] = up * (0.4 + Math.random());
      this.smokeVel[i * 3 + 2] = (Math.random() - 0.5) * 1.5;
      this.smokeCol[i * 3] = col.r; this.smokeCol[i * 3 + 1] = col.g; this.smokeCol[i * 3 + 2] = col.b;
      this.smokeLife[i] = 0.8 + Math.random() * 0.7;
    }
    this.smoke.geometry.attributes.position.needsUpdate = true;
    this.smoke.geometry.attributes.color.needsUpdate = true;
  }

  explosion(pos, radius = 5, color = 0xff7a2f) {
    const b = this.booms.find((x) => x.life <= 0) || this.booms[0];
    b.mesh.position.copy(pos);
    b.mesh.material.color.set(color);
    b.mesh.material.opacity = 0.9;
    b.mesh.scale.setScalar(0.6);
    b.mesh.visible = true;
    b.life = b.max = 0.5;
    b.radius = radius;
    const ring = this.rings.find((x) => x.life <= 0) || this.rings[0];
    ring.mesh.position.set(pos.x, Math.max(0.3, pos.y - 0.4), pos.z);
    ring.mesh.material.color.set(color);
    ring.mesh.material.opacity = 0.9;
    ring.mesh.scale.setScalar(1);
    ring.mesh.visible = true;
    ring.life = ring.max = 0.6;
    ring.radius = radius * 1.3;
    this.sparksAt(pos, color, 26, 12, 1.4);
    this.smokeAt(pos, 0x3a3a3a, 12, 3.5);
  }

  ring(pos, radius = 3, color = 0xffd166) {
    const r = this.rings.find((x) => x.life <= 0) || this.rings[0];
    r.mesh.position.set(pos.x, Math.max(0.25, pos.y - 0.35), pos.z);
    r.mesh.material.color.set(color);
    r.mesh.material.opacity = 0.85;
    r.mesh.scale.setScalar(1);
    r.mesh.visible = true;
    r.life = r.max = 0.45;
    r.radius = radius;
  }

  beam(from, to, color = 0x35f0ff, width = 1) {
    const b = this.beams.find((x) => x.life <= 0) || this.beams[0];
    const mid = this.tmp.copy(from).add(to).multiplyScalar(0.5);
    const len = from.distanceTo(to);
    b.mesh.position.copy(mid);
    b.mesh.scale.set(width, len, width);
    b.mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), this.tmp2.copy(to).sub(from).normalize());
    b.mesh.material.color.set(color);
    b.mesh.material.opacity = 0.9;
    b.mesh.visible = true;
    b.life = b.max = 0.16;
  }

  update(dt) {
    // Trazadoras
    for (const t of this.tracers) {
      t.life -= dt;
      if (t.life <= 0) {
        for (let k = 0; k < 6; k++) this.tracerCol[t.slot * 6 + k] = 0;
      }
    }
    this.tracers = this.tracers.filter((t) => t.life > 0);
    this.tracerMesh.geometry.attributes.color.needsUpdate = true;

    // Chispas
    for (let i = 0; i < MAX_SPARKS; i++) {
      if (this.sparkLife[i] <= 0) continue;
      this.sparkLife[i] -= dt;
      this.sparkVel[i * 3 + 1] -= dt * 9;
      this.sparkPos[i * 3] += this.sparkVel[i * 3] * dt;
      this.sparkPos[i * 3 + 1] += this.sparkVel[i * 3 + 1] * dt;
      this.sparkPos[i * 3 + 2] += this.sparkVel[i * 3 + 2] * dt;
      const f = Math.max(0, this.sparkLife[i]);
      this.sparkCol[i * 3] *= 0.94; this.sparkCol[i * 3 + 1] *= 0.94; this.sparkCol[i * 3 + 2] *= 0.94;
      if (this.sparkLife[i] <= 0) this.sparkPos[i * 3 + 1] = -999;
    }
    this.sparks.geometry.attributes.position.needsUpdate = true;
    this.sparks.geometry.attributes.color.needsUpdate = true;

    // Humo
    for (let i = 0; i < MAX_SMOKE; i++) {
      if (this.smokeLife[i] <= 0) continue;
      this.smokeLife[i] -= dt;
      this.smokePos[i * 3] += this.smokeVel[i * 3] * dt;
      this.smokePos[i * 3 + 1] += this.smokeVel[i * 3 + 1] * dt;
      this.smokePos[i * 3 + 2] += this.smokeVel[i * 3 + 2] * dt;
      this.smokeCol[i * 3] *= 0.985; this.smokeCol[i * 3 + 1] *= 0.985; this.smokeCol[i * 3 + 2] *= 0.985;
      if (this.smokeLife[i] <= 0) this.smokePos[i * 3 + 1] = -999;
    }
    this.smoke.geometry.attributes.position.needsUpdate = true;
    this.smoke.geometry.attributes.color.needsUpdate = true;

    // Destellos
    for (let i = 0; i < MAX_FLASH; i++) {
      if (this.flashLife[i] <= 0) continue;
      this.flashLife[i] -= dt;
      if (this.flashLife[i] <= 0) { this.flashPos[i * 3 + 1] = -999; this.flash.geometry.attributes.position.needsUpdate = true; }
    }

    // Explosiones / anillos / haces
    for (const b of this.booms) {
      if (b.life <= 0) continue;
      b.life -= dt;
      const t = 1 - b.life / b.max;
      b.mesh.scale.setScalar(0.6 + t * b.radius);
      b.mesh.material.opacity = Math.max(0, 0.9 * (1 - t));
      if (b.life <= 0) b.mesh.visible = false;
    }
    for (const r of this.rings) {
      if (r.life <= 0) continue;
      r.life -= dt;
      const t = 1 - r.life / r.max;
      r.mesh.scale.setScalar(1 + t * r.radius);
      r.mesh.material.opacity = Math.max(0, 0.85 * (1 - t));
      if (r.life <= 0) r.mesh.visible = false;
    }
    for (const b of this.beams) {
      if (b.life <= 0) continue;
      b.life -= dt;
      b.mesh.material.opacity = Math.max(0, 0.9 * (b.life / b.max));
      if (b.life <= 0) b.mesh.visible = false;
    }
  }

  dispose() {
    this.scene.remove(this.tracerMesh, this.sparks, this.smoke, this.flash);
    for (const b of this.booms) this.scene.remove(b.mesh);
    for (const r of this.rings) this.scene.remove(r.mesh);
    for (const b of this.beams) this.scene.remove(b.mesh);
  }
}
