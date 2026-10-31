import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

/* ────────────────────────── helpers ────────────────────────── */

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const smoothstep = (a, b, x) => {
  const t = clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
};

function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function paint(geo, color) {
  const c = new THREE.Color(color);
  const n = geo.attributes.position.count;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b; }
  geo.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return geo;
}

function box(w, h, d, x, y, z, color, rotY = 0) {
  const g = new THREE.BoxGeometry(w, h, d);
  paint(g, color);
  if (rotY) g.rotateY(rotY);
  g.translate(x, y, z);
  return g;
}

function cyl(rt, rb, h, x, y, z, color, seg = 7) {
  const g = new THREE.CylinderGeometry(rt, rb, h, seg);
  paint(g, color);
  g.translate(x, y, z);
  return g;
}

function cone(r, h, x, y, z, color, rx = 0, ry = 0, rz = 0, seg = 6) {
  const g = new THREE.ConeGeometry(r, h, seg);
  paint(g, color);
  if (rx) g.rotateX(rx); if (ry) g.rotateY(ry); if (rz) g.rotateZ(rz);
  g.translate(x, y, z);
  return g;
}

function rock(r, x, y, z, color, detail = 0) {
  const g = new THREE.IcosahedronGeometry(r, detail);
  paint(g, color);
  g.scale(1, 0.72 + Math.random() * 0.4, 1);
  g.rotateY(Math.random() * Math.PI);
  g.translate(x, y, z);
  return g;
}

function merge(list, material) {
  if (!list.length) return null;
  const geo = mergeGeometries(list.map((g) => (g.index ? g.toNonIndexed() : g)), false);
  const mesh = new THREE.Mesh(geo, material);
  mesh.frustumCulled = true;
  return mesh;
}

function canvasTexture(text, bg, fg, w = 256, h = 128) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = fg; ctx.lineWidth = 6; ctx.strokeRect(8, 8, w - 16, h - 16);
  ctx.font = `900 ${Math.floor(h * 0.42)}px Impact, Arial Black, sans-serif`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillStyle = fg;
  ctx.shadowColor = fg; ctx.shadowBlur = 18;
  ctx.fillText(text, w / 2, h / 2 + 4);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 2;
  return tex;
}

/* ────────────────────────── terrain ────────────────────────── */

function makeHeightFn(map) {
  const bunker = { x: -58, z: -120, r: 16, y: 14 };
  return function heightAt(x, z) {
    let h = 2.2
      + Math.sin(x * 0.025) * 1.25
      + Math.cos(z * 0.021) * 1.05
      + Math.sin((x + z) * 0.052) * 0.45;

    // Cordillera al norte
    const ridge = Math.exp(-Math.pow((z + 145) / 58, 2))
      * (13 + 9 * Math.sin(x * 0.019) + 7 * Math.cos(x * 0.043 + 1.7));
    h += Math.max(0, ridge);

    // Volcán
    const vd = Math.hypot(x - 10, z - 105);
    if (vd < 80) {
      const t = 1 - vd / 80;
      h += Math.pow(t, 1.65) * 48;
      if (vd < 15) h -= (1 - vd / 15) * 14;
    }

    // Meseta de la ciudad
    const cd = Math.hypot(x - 95, z + 40);
    if (cd < 68) h = lerp(h, 2.6, smoothstep(68, 34, cd) * 0.94);

    // Meseta del pueblo
    const pd = Math.hypot(x + 95, z - 35);
    if (pd < 52) h = lerp(h, 2.3, smoothstep(52, 24, pd) * 0.92);

    // Búnker (solo posapocalipsis)
    if (map.ruined) {
      const bd = Math.hypot(x - bunker.x, z - bunker.z);
      if (bd < bunker.r) h = lerp(h, bunker.y, smoothstep(bunker.r, 7, bd));
    }

    // Caída al agua en los bordes
    const r = Math.hypot(x, z);
    h -= smoothstep(168, 210, r) * 22;
    return h;
  };
}

function buildTerrain(scene, map, heightAt) {
  const size = 420, seg = 108;
  const geo = new THREE.PlaneGeometry(size, size, seg, seg);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  const colors = new Float32Array(pos.count * 3);
  const c = new THREE.Color();
  const rng = mulberry32(map.id === 'neon' ? 77 : map.id === 'posapocalipsis' ? 42 : 13);

  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);
    const y = heightAt(x, z);
    pos.setY(i, y);

    const inCity = Math.hypot(x - 95, z + 40) < 68;
    const inVillage = Math.hypot(x + 95, z - 35) < 52;
    const volcano = Math.hypot(x - 10, z - 105);
    const mountain = z < -92;

    if (volcano < 82) {
      const t = 1 - volcano / 82;
      c.set(map.lava ? '#6a4030' : '#4a4a44').lerp(new THREE.Color('#2a1a16'), t * 0.7);
      if (volcano < 20) c.lerp(new THREE.Color('#ff6a24'), (1 - volcano / 20) * 0.55);
    } else if (inCity) {
      c.set(map.ruined ? '#6a655b' : map.toxic ? '#3b2e5c' : '#6b6458');
    } else if (inVillage) {
      c.set(map.ruined ? '#6a6250' : map.toxic ? '#42345f' : '#5f7d43');
    } else if (mountain) {
      c.set(map.ruined ? '#6a675c' : map.toxic ? '#423566' : '#756a58');
    } else {
      c.set(map.ruined ? '#6a6350' : map.toxic ? '#3a3056' : map.ground);
    }
    const n = (rng() - 0.5) * 0.09;
    c.offsetHSL((rng() - 0.5) * 0.015, 0, n);
    colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geo.computeVertexNormals();
  const mat = new THREE.MeshLambertMaterial({ vertexColors: true });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = false;
  mesh.name = 'terrain';
  scene.add(mesh);

  // Agua / borde
  const water = new THREE.Mesh(
    new THREE.PlaneGeometry(900, 900),
    new THREE.MeshBasicMaterial({
      color: map.toxic ? 0x0b1a24 : map.lava ? 0x2a1612 : 0x14252e,
      transparent: true, opacity: 0.9,
    })
  );
  water.rotation.x = -Math.PI / 2;
  water.position.y = -0.4;
  scene.add(water);
  return mesh;
}

/* ────────────────────────── structures ────────────────────────── */

function buildCity(ctx) {
  const { map, heightAt, buildings, windows, neonStrips, signs, colliders, rng } = ctx;
  const palette = map.toxic
    ? ['#2a2148', '#352a5e', '#241c3f', '#3d2c6e', '#1d1735']
    : map.ruined
      ? ['#5a554c', '#6a6458', '#4c4740', '#756d5f']
      : ['#6b6154', '#7a6c5b', '#5c554c', '#8a7a64', '#4f4a44'];

  const cell = 27;
  const startX = 58, startZ = -98;
  for (let ix = 0; ix < 4; ix++) {
    for (let iz = 0; iz < 4; iz++) {
      if (rng() < 0.12) continue; // plaza / callejón abierto
      const cx = startX + ix * cell + (rng() - 0.5) * 4;
      const cz = startZ + iz * cell + (rng() - 0.5) * 4;
      const w = 10 + rng() * 9;
      const d = 10 + rng() * 9;
      const baseY = heightAt(cx, cz);
      let h = 8 + rng() * (map.toxic ? 46 : 30);
      if (map.ruined) h *= 0.45 + rng() * 0.3;
      if (map.toxic) h = Math.max(h, 18);

      const color = palette[Math.floor(rng() * palette.length)];
      buildings.push(box(w, h, d, cx, baseY + h / 2, cz, color));
      colliders.push({ minX: cx - w / 2, maxX: cx + w / 2, minY: baseY - 1, maxY: baseY + h, minZ: cz - d / 2, maxZ: cz + d / 2, tag: 'building' });

      // Tejado / antena
      if (!map.ruined && rng() < 0.6) {
        buildings.push(box(w * 0.5, 0.6, d * 0.5, cx, baseY + h + 0.3, cz, '#2c2a28'));
      }
      if (map.ruined) {
        for (let k = 0; k < 3; k++) {
          const rw = 3 + rng() * 4, rh = 1 + rng() * 3;
          buildings.push(box(rw, rh, 3 + rng() * 4, cx + (rng() - 0.5) * w, baseY + rh / 2, cz + (rng() - 0.5) * d, color));
        }
        for (let k = 0; k < 4; k++) {
          ctx.rocks.push(rock(0.8 + rng() * 1.6, cx + (rng() - 0.5) * (w + 8), baseY + 0.4, cz + (rng() - 0.5) * (d + 8), '#4b463d'));
        }
      }

      // Ventanas emisivas
      const rows = Math.max(1, Math.floor(h / 3.4));
      const cols = Math.max(1, Math.floor(w / 3.2));
      const lit = map.toxic ? ['#ff3ea5', '#35f0ff', '#ffd166', '#a06bff'] : map.ruined ? ['#ffb35a'] : ['#ffd98a', '#ffb35a', '#9fd8ff'];
      for (let face = 0; face < 4; face++) {
        if (map.ruined && face > 1) continue;
        const isX = face < 2;
        const sign = face % 2 === 0 ? 1 : -1;
        const faceCols = isX ? cols : Math.max(1, Math.floor(d / 3.2));
        for (let ry = 0; ry < rows; ry++) {
          for (let cxi = 0; cxi < faceCols; cxi++) {
            if (rng() < 0.38) continue;
            const off = (cxi + 0.5) / faceCols - 0.5;
            const wx = isX ? cx + sign * (w / 2 + 0.06) : cx + off * w;
            const wz = isX ? cz + off * d : cz + sign * (d / 2 + 0.06);
            windows.push({
              x: wx, y: baseY + 1.9 + ry * 3.3, z: wz,
              ry: isX ? Math.PI / 2 : 0,
              color: lit[Math.floor(rng() * lit.length)],
              sx: map.toxic ? 0.62 : 0.8, sy: map.toxic ? 0.32 : 0.9,
            });
          }
        }
      }

      // Tiras de neón
      if (map.toxic && rng() < 0.85) {
        const nc = rng() < 0.5 ? '#ff3ea5' : '#35f0ff';
        const nc2 = nc === '#ff3ea5' ? '#35f0ff' : '#ff3ea5';
        // Esquinas verticales
        for (const sx of [-1, 1]) {
          for (const sz of [-1, 1]) {
            neonStrips.push({
              x: cx + sx * (w / 2 + 0.08), y: baseY + h * 0.5, z: cz + sz * (d / 2 + 0.08),
              sx: 0.1, sy: h * 0.8, sz: 0.1, color: nc2,
            });
          }
        }
        // Contorno del techo
        for (const s of [-1, 1]) {
          neonStrips.push({ x: cx, y: baseY + h + 0.05, z: cz + s * (d / 2 + 0.08), sx: w + 0.2, sy: 0.12, sz: 0.12, color: nc });
          neonStrips.push({ x: cx + s * (w / 2 + 0.08), y: baseY + h + 0.05, z: cz, sx: 0.12, sy: 0.12, sz: d + 0.2, color: nc });
        }
        const tex = ['LEUS', '24/7', 'RAMEN', 'CYBER', 'NO FUTURO', 'POLLO'][Math.floor(rng() * 6)];
        if (rng() < 0.75) {
          signs.push({ x: cx + w / 2 + 0.25, y: baseY + 5 + rng() * 6, z: cz + (rng() - 0.5) * d * 0.5, ry: Math.PI / 2, tex, w: 5 + rng() * 2, h: 2.2, color: nc });
        }
        if (rng() < 0.75) {
          signs.push({ x: cx - w / 2 - 0.25, y: baseY + 5 + rng() * 6, z: cz + (rng() - 0.5) * d * 0.5, ry: -Math.PI / 2, tex, w: 5 + rng() * 2, h: 2.2, color: nc2 });
        }
      }
    }
  }

  // Reactor nuclear (ciudad)
  const rx = 122, rz = -22, ry = heightAt(rx, rz);
  buildings.push(cyl(6, 7, 12, rx, ry + 6, rz, map.ruined ? '#3b3b38' : '#8b8f87', 10));
  buildings.push(cyl(7.4, 7.4, 1.2, rx, ry + 12.4, rz, '#2c2e2c', 10));
  buildings.push(cyl(3.2, 3.2, 4, rx, ry + 14.6, rz, '#4a4e4a', 8));
  colliders.push({ minX: rx - 7, maxX: rx + 7, minY: ry - 1, maxY: ry + 16, minZ: rz - 7, maxZ: rz + 7, tag: 'reactor' });
  if (!map.ruined) {
    neonStrips.push({ x: rx, y: ry + 7, z: rz - 7.1, sx: 1.2, sy: 4, sz: 0.2, color: '#7dffb0' });
  }
}

function buildVillage(ctx) {
  const { map, heightAt, buildings, colliders, rocks, rng } = ctx;
  const wall = map.ruined ? '#4a4336' : '#8a6a4a';
  const roof = map.ruined ? '#3a332a' : '#7a3f2e';

  for (let i = 0; i < 11; i++) {
    const a = (i / 11) * Math.PI * 2;
    const rad = 16 + rng() * 26;
    const cx = -95 + Math.cos(a) * rad;
    const cz = 35 + Math.sin(a) * rad;
    const by = heightAt(cx, cz);
    const w = 7 + rng() * 5, d = 7 + rng() * 5, h = 3.6 + rng() * 2.2;
    buildings.push(box(w, h, d, cx, by + h / 2, cz, wall));
    colliders.push({ minX: cx - w / 2, maxX: cx + w / 2, minY: by - 1, maxY: by + h, minZ: cz - d / 2, maxZ: cz + d / 2, tag: 'house' });

    if (!map.ruined) {
      const roofG = new THREE.ConeGeometry(Math.max(w, d) * 0.76, 2.4, 4);
      paint(roofG, roof);
      roofG.rotateY(Math.PI / 4);
      roofG.translate(cx, by + h + 1.2, cz);
      buildings.push(roofG);
    } else {
      buildings.push(box(w * 0.9, 0.5, d * 0.9, cx, by + h + 0.2, cz, roof));
      rocks.push(rock(1.2 + rng(), cx + (rng() - 0.5) * w, by + 0.4, cz + (rng() - 0.5) * d, '#5a5142'));
    }
    // Puerta
    buildings.push(box(1.2, 2.1, 0.2, cx, by + 1.05, cz + d / 2 + 0.08, '#241d17'));
    // Ventana
    buildings.push(box(1.2, 1.1, 0.2, cx - w * 0.28, by + h * 0.6, cz + d / 2 + 0.08, map.ruined ? '#1d1b17' : '#ffcf7a'));
  }

  // Cercas de campo
  for (let i = 0; i < 9; i++) {
    const x = -130 + rng() * 65, z = 10 + rng() * 55;
    const by = heightAt(x, z);
    const len = 5 + rng() * 9;
    buildings.push(box(len, 0.16, 0.16, x, by + 0.9, z, '#6b5a42'));
    for (let p = 0; p <= 4; p++) {
      buildings.push(box(0.18, 1.1, 0.18, x - len / 2 + (len * p) / 4, by + 0.55, z, '#5a4a36'));
    }
  }
  // Pacas de heno
  for (let i = 0; i < 7; i++) {
    const x = -120 + rng() * 45, z = 12 + rng() * 48;
    const by = heightAt(x, z);
    buildings.push(cyl(1.5, 1.5, 1.8, x, by + 0.9, z, '#b08a3e', 9));
  }
  // Torre de agua
  const tx = -68, tz = 54, ty = heightAt(tx, tz);
  buildings.push(cyl(0.4, 0.55, 9, tx - 2, ty + 4.5, tz, '#5a4a36', 5));
  buildings.push(cyl(0.4, 0.55, 9, tx + 2, ty + 4.5, tz, '#5a4a36', 5));
  buildings.push(cyl(3, 3, 3.2, tx, ty + 10.2, tz, map.ruined ? '#4a3a2a' : '#7a6a52', 9));
  colliders.push({ minX: tx - 3, maxX: tx + 3, minY: ty - 1, maxY: ty + 12, minZ: tz - 3, maxZ: tz + 3, tag: 'tower' });
}

function buildCordillera(ctx) {
  const { map, heightAt, rocks, colliders, buildings, rng } = ctx;
  for (let i = 0; i < 34; i++) {
    const x = -150 + rng() * 300;
    const z = -175 + rng() * 55;
    const y = heightAt(x, z);
    rocks.push(rock(1.4 + rng() * 4.2, x, y + 0.4, z, map.toxic ? '#2a2038' : map.ruined ? '#55514a' : '#665c4c'));
  }

  if (map.ruined) {
    // Búnker dentro de la montaña
    const bx = -58, bz = -120, by = 14;
    const wallC = '#4a4a44', dark = '#2b2b27';
    buildings.push(box(18, 0.5, 12, bx, by + 0.25, bz, dark)); // suelo
    buildings.push(box(18, 4.6, 0.6, bx, by + 2.5, bz - 6, wallC)); // pared norte
    buildings.push(box(18, 4.6, 0.6, bx, by + 2.5, bz + 6, wallC)); // pared sur
    buildings.push(box(0.6, 4.6, 12, bx - 9, by + 2.5, bz, wallC)); // pared oeste
    buildings.push(box(0.6, 4.6, 5, bx + 9, by + 2.5, bz - 3.5, wallC)); // pared este con puerta
    buildings.push(box(0.6, 4.6, 4, bx + 9, by + 2.5, bz + 4, wallC));
    buildings.push(box(18.6, 0.5, 12.6, bx, by + 4.85, bz, '#3c3c36')); // techo
    buildings.push(box(0.5, 4.6, 7, bx + 1.5, by + 2.5, bz, '#3a3a34')); // pasillo interior
    buildings.push(box(6, 2.4, 0.6, bx - 5, by + 1.7, bz + 2.2, '#55554e'));
    colliders.push({ minX: bx - 9.3, maxX: bx + 9.3, minY: by, maxY: by + 5, minZ: bz - 6.3, maxZ: bz - 5.7, tag: 'bunker' });
    colliders.push({ minX: bx - 9.3, maxX: bx + 9.3, minY: by, maxY: by + 5, minZ: bz + 5.7, maxZ: bz + 6.3, tag: 'bunker' });
    colliders.push({ minX: bx - 9.3, maxX: bx - 8.7, minY: by, maxY: by + 5, minZ: bz - 6, maxZ: bz + 6, tag: 'bunker' });
    colliders.push({ minX: bx + 8.7, maxX: bx + 9.3, minY: by, maxY: by + 5, minZ: bz - 6, maxZ: bz - 1, tag: 'bunker' });
    colliders.push({ minX: bx + 8.7, maxX: bx + 9.3, minY: by, maxY: by + 5, minZ: bz + 2, maxZ: bz + 6, tag: 'bunker' });
    colliders.push({ minX: bx + 1.2, maxX: bx + 1.8, minY: by, maxY: by + 5, minZ: bz - 3.5, maxZ: bz + 3.5, tag: 'bunker' });
    // Cajas
    for (let i = 0; i < 5; i++) {
      buildings.push(box(1.1, 1.1, 1.1, bx - 6 + rng() * 3, by + 1.1, bz - 3 + rng() * 6, '#6a5a3a'));
    }
    // Entrada iluminada
    ctx.neonStrips.push({ x: bx + 9.35, y: by + 3.2, z: bz + 0.5, sx: 0.2, sy: 0.25, sz: 3, color: '#ffb35a' });
  }
}

function buildVolcano(ctx) {
  const { map, heightAt, buildings, lava, rng } = ctx;
  const vx = 10, vz = 105;

  // Cráter brillante
  const crater = new THREE.Mesh(
    new THREE.CircleGeometry(13, 24),
    new THREE.MeshBasicMaterial({ color: map.lava ? 0xff5a1f : 0x552222, transparent: true, opacity: 0.9 })
  );
  crater.rotation.x = -Math.PI / 2;
  crater.position.set(vx, heightAt(vx, vz) + 0.15, vz);
  ctx.scene.add(crater);
  ctx.crater = crater;

  // Ríos de lava
  for (let r = 0; r < 7; r++) {
    const ang = (r / 7) * Math.PI * 2 + 0.3;
    const pts = [];
    for (let s = 0; s <= 14; s++) {
      const t = s / 14;
      const dist = 10 + t * (58 + rng() * 12);
      const wob = Math.sin(t * 7 + r) * 5 * t;
      const x = vx + Math.cos(ang) * dist + Math.cos(ang + Math.PI / 2) * wob;
      const z = vz + Math.sin(ang) * dist + Math.sin(ang + Math.PI / 2) * wob;
      pts.push(new THREE.Vector3(x, heightAt(x, z) + 0.25, z));
    }
    const curve = new THREE.CatmullRomCurve3(pts);
    const geo = new THREE.TubeGeometry(curve, 24, 1.4 + rng() * 1.2, 5, false);
    const mat = new THREE.MeshBasicMaterial({
      color: map.lava ? 0xff5a1f : 0x3a1a14,
      transparent: true, opacity: map.lava ? 0.92 : 0.45,
    });
    const mesh = new THREE.Mesh(geo, mat);
    ctx.scene.add(mesh);
    lava.push(mesh);
  }

  // Rocas del volcán
  for (let i = 0; i < 26; i++) {
    const a = rng() * Math.PI * 2;
    const d = 16 + rng() * 60;
    const x = vx + Math.cos(a) * d, z = vz + Math.sin(a) * d;
    ctx.rocks.push(rock(1 + rng() * 2.4, x, heightAt(x, z) + 0.3, z, '#3a2a24'));
  }
  // Fumarolas
  ctx.smokeOrigin.set(vx, heightAt(vx, vz) + 2, vz);
}

/* ────────────────────────── weather ────────────────────────── */

function buildWeather(scene, map) {
  const count = map.weather === 'neon' ? 500 : 380;
  const geo = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const seeds = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 110;
    positions[i * 3 + 1] = Math.random() * 60;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 110;
    seeds[i] = Math.random();
  }
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const color = map.weather === 'ash' ? 0xd8d0be : map.weather === 'neon' ? 0x7ef9ff : 0xffa060;
  const mat = new THREE.PointsMaterial({
    color, size: map.weather === 'neon' ? 0.16 : 0.34, transparent: true,
    opacity: map.weather === 'neon' ? 0.55 : 0.7, depthWrite: false,
    blending: map.weather === 'neon' ? THREE.AdditiveBlending : THREE.NormalBlending,
  });
  const points = new THREE.Points(geo, mat);
  points.frustumCulled = false;
  scene.add(points);
  return { points, positions, seeds, count };
}

/* ────────────────────────── roads & vegetation ────────────────────────── */

function buildRoads(ctx) {
  const { map, heightAt } = ctx;
  const paths = [
    [[-95, 35], [-45, 22], [25, -8], [95, -40]],
    [[95, -40], [72, 25], [38, 78], [12, 102]],
    [[-95, 35], [-48, 68], [10, 100]],
    [[95, -40], [118, -82], [45, -118], [-52, -118]],
  ];
  const pos = [], col = [];
  const c = new THREE.Color(map.toxic ? '#241a36' : map.ruined ? '#3d3a33' : '#40382e');
  const edge = new THREE.Color(map.toxic ? '#ff3ea5' : map.ruined ? '#555047' : '#5a4a38');
  for (const path of paths) {
    const curve = new THREE.CatmullRomCurve3(path.map(([x, z]) => new THREE.Vector3(x, 0, z)));
    const n = 46;
    const w = 5.5;
    const left = [], right = [];
    for (let i = 0; i <= n; i++) {
      const p = curve.getPoint(i / n);
      const t = curve.getTangent(i / n).normalize();
      const perp = new THREE.Vector3(-t.z, 0, t.x).multiplyScalar(w / 2);
      const y = heightAt(p.x, p.z) + 0.1;
      left.push(new THREE.Vector3(p.x + perp.x, y, p.z + perp.z));
      right.push(new THREE.Vector3(p.x - perp.x, y, p.z - perp.z));
    }
    for (let i = 0; i < n; i++) {
      const a = left[i], b = left[i + 1], cc = right[i], d = right[i + 1];
      const quad = [a, cc, b, b, cc, d];
      for (const v of quad) { pos.push(v.x, v.y, v.z); col.push(c.r, c.g, c.b); }
      // borde tenue
      if (i % 6 === 0) {
        const e1 = a.clone().add(new THREE.Vector3(0, 0.03, 0));
        const e2 = b.clone().add(new THREE.Vector3(0, 0.03, 0));
        const e3 = a.clone().add(new THREE.Vector3(0, 0.03, 0)).add(new THREE.Vector3(0, 0, 0.3));
        for (const v of [e1, e2, e3]) { pos.push(v.x, v.y, v.z); col.push(edge.r, edge.g, edge.b); }
      }
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  geo.computeVertexNormals();
  const mesh = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ vertexColors: true }));
  mesh.name = 'roads';
  ctx.scene.add(mesh);
}

function buildTrees(ctx) {
  const { map, heightAt, rocks, rng } = ctx;
  const trees = [];
  const trunkC = map.lava ? '#4a3528' : map.ruined ? '#4a4034' : '#5a4030';
  const leafC = map.lava ? '#4a3a24' : map.ruined ? '#4a4a38' : map.toxic ? '#2a3a44' : '#3f6b34';
  const leafC2 = map.lava ? '#5a4428' : map.ruined ? '#55543f' : map.toxic ? '#3a4a5a' : '#4f7a3c';

  for (let i = 0; i < 150; i++) {
    const a = rng() * Math.PI * 2;
    const r = 25 + rng() * 165;
    const x = Math.cos(a) * r, z = Math.sin(a) * r;
    if (Math.hypot(x - 95, z + 40) < 66) continue;
    if (Math.hypot(x - 10, z - 105) < 40) continue;
    if (z < -105 && rng() < 0.5) continue;
    const y = heightAt(x, z);
    if (y < 1) continue;
    const h = 2.2 + rng() * 3.4;
    if (map.toxic) {
      // Antenas / postes de neón en el ciberbarrio
      trees.push(cyl(0.06, 0.09, h, x, y + h / 2, z, '#2a2a3a', 5));
      trees.push(box(0.7, 0.08, 0.08, x, y + h - 0.2, z, rng() < 0.5 ? '#ff3ea5' : '#35f0ff'));
    } else if (map.lava && rng() < 0.45) {
      // Árbol seco volcánico
      trees.push(cyl(0.1, 0.18, h * 0.8, x, y + h * 0.4, z, trunkC, 5));
      trees.push(cyl(0.05, 0.08, h * 0.5, x + 0.4, y + h * 0.55, z, trunkC, 4, 0.7));
      trees.push(cyl(0.05, 0.08, h * 0.45, x - 0.35, y + h * 0.5, z, trunkC, 4, -0.7));
    } else {
      trees.push(cyl(0.12, 0.2, h, x, y + h / 2, z, trunkC, 5));
      trees.push(cone(1.0 + rng() * 0.7, 2.2 + rng() * 1.4, x, y + h + 0.8, z, leafC, 0, rng() * 3, 0, 6));
      trees.push(cone(0.8 + rng() * 0.5, 1.8, x, y + h + 2.0, z, leafC2, 0, rng() * 3, 0, 6));
    }
  }
  for (let i = 0; i < 42; i++) {
    const a = rng() * Math.PI * 2;
    const r = 30 + rng() * 160;
    const x = Math.cos(a) * r, z = Math.sin(a) * r;
    if (Math.hypot(x - 95, z + 40) < 62) continue;
    rocks.push(rock(0.5 + rng() * 2.2, x, heightAt(x, z) + 0.3, z, map.toxic ? '#3a2f50' : map.ruined ? '#5a5750' : '#6a5c4a'));
  }
  const mesh = merge(trees, new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true }));
  if (mesh) { mesh.name = 'vegetation'; ctx.scene.add(mesh); }
}

/* ────────────────────────── main factory ────────────────────────── */

export function createWorld(scene, map, opts = {}) {
  const rng = mulberry32(map.id === 'neon' ? 9001 : map.id === 'posapocalipsis' ? 4242 : 1337);
  const heightAt = makeHeightFn(map);
  const colliders = [];
  const buildings = [];
  const rocks = [];
  const windows = [];
  const neonStrips = [];
  const signs = [];
  const lava = [];
  const smokeOrigin = new THREE.Vector3();
  const lootSpots = [];
  const chickenSpots = [];
  const gasMaskSpots = [];
  const group = new THREE.Group();
  group.name = 'world';

  // Sky dome
  const skyGeo = new THREE.SphereGeometry(420, 24, 14);
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false,
    uniforms: {
      top: { value: new THREE.Color(map.sky.top) },
      mid: { value: new THREE.Color(map.sky.mid) },
      bottom: { value: new THREE.Color(map.sky.bottom) },
      sunColor: { value: new THREE.Color(map.sun) },
      sunDir: { value: new THREE.Vector3(...(map.sky.sunDir || [-0.35, 0.28, 0.9])).normalize() },
    },
    vertexShader: `varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: `uniform vec3 top; uniform vec3 mid; uniform vec3 bottom; uniform vec3 sunColor; uniform vec3 sunDir; varying vec3 vP;
      void main(){
        vec3 n = normalize(vP);
        float h = n.y;
        vec3 c = h > 0.05 ? mix(mid, top, smoothstep(0.05,0.75,h)) : mix(bottom, mid, smoothstep(-0.28,0.05,h));
        float sd = max(dot(n, normalize(sunDir)), 0.0);
        c += sunColor * pow(sd, 10.0) * 0.22;
        c += sunColor * pow(sd, 180.0) * 1.6;
        gl_FragColor = vec4(c,1.0);
      }`,
  });
  const sky = new THREE.Mesh(skyGeo, skyMat);
  sky.frustumCulled = false;
  group.add(sky);

  // Estrellas para el mapa cyberpunk
  if (map.toxic) {
    const n = 260;
    const sp = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;
      const y = 0.25 + Math.random() * 0.7;
      const r = Math.sqrt(1 - y * y);
      sp[i * 3] = Math.cos(a) * r * 390;
      sp[i * 3 + 1] = y * 390;
      sp[i * 3 + 2] = Math.sin(a) * r * 390;
    }
    const sg = new THREE.BufferGeometry();
    sg.setAttribute('position', new THREE.BufferAttribute(sp, 3));
    const stars = new THREE.Points(sg, new THREE.PointsMaterial({
      color: 0xffc6f5, size: 1.4, transparent: true, opacity: 0.75, depthWrite: false,
    }));
    stars.frustumCulled = false;
    group.add(stars);
  }

  const boost = map.toxic ? 1.28 : map.ruined ? 1.2 : 1.0;
  const hemi = new THREE.HemisphereLight(map.hemi, 0x241a18, 1.25 * boost);
  group.add(hemi);
  const dir = new THREE.DirectionalLight(map.sun, 1.9 * boost);
  dir.position.set(-80, 140, 40);
  group.add(dir);
  const fill = new THREE.DirectionalLight(map.accent2 ? new THREE.Color(map.accent2) : 0xffffff, map.toxic ? 1.0 : map.ruined ? 0.55 : 0.4);
  fill.position.set(120, 60, -90);
  group.add(fill);

  buildTerrain(scene, map, heightAt);
  const ctx = { scene, map, heightAt, buildings, rocks, windows, neonStrips, signs, lava, colliders, smokeOrigin, rng };
  buildCity(ctx);
  buildVillage(ctx);
  buildCordillera(ctx);
  buildVolcano(ctx);
  buildRoads(ctx);
  buildTrees(ctx);

  // Merge static geometry
  const staticMat = new THREE.MeshLambertMaterial({
    vertexColors: true,
    emissive: map.toxic ? 0x241a3d : map.ruined ? 0x16130f : 0x0a0705,
  });
  const cityMesh = merge(buildings, staticMat);
  if (cityMesh) { cityMesh.name = 'structures'; group.add(cityMesh); }
  const rockMesh = merge(rocks, new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true }));
  if (rockMesh) { rockMesh.name = 'rocks'; group.add(rockMesh); }

  // Ventanas instanciadas
  if (windows.length) {
    const wGeo = new THREE.BoxGeometry(1, 1, 0.1);
    const wMat = new THREE.MeshBasicMaterial({ toneMapped: false });
    const inst = new THREE.InstancedMesh(wGeo, wMat, windows.length);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler();
    windows.forEach((w, i) => {
      e.set(0, w.ry, 0); q.setFromEuler(e);
      m.compose(new THREE.Vector3(w.x, w.y, w.z), q, new THREE.Vector3(w.sx, w.sy, 0.12));
      inst.setMatrixAt(i, m);
      inst.setColorAt(i, new THREE.Color(w.color));
    });
    inst.instanceMatrix.needsUpdate = true;
    if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
    inst.name = 'windows';
    group.add(inst);
  }

  // Neón instanciado
  if (neonStrips.length) {
    const nGeo = new THREE.BoxGeometry(1, 1, 1);
    const nMat = new THREE.MeshBasicMaterial({ toneMapped: false });
    const inst = new THREE.InstancedMesh(nGeo, nMat, neonStrips.length);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion();
    neonStrips.forEach((n, i) => {
      m.compose(new THREE.Vector3(n.x, n.y, n.z), q, new THREE.Vector3(n.sx, n.sy, n.sz));
      inst.setMatrixAt(i, m);
      inst.setColorAt(i, new THREE.Color(n.color));
    });
    inst.instanceMatrix.needsUpdate = true;
    if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
    inst.name = 'neon';
    group.add(inst);
  }

  // Letreros de neón
  const signTextures = {};
  signs.slice(0, 30).forEach((s) => {
    if (!signTextures[s.tex]) {
      signTextures[s.tex] = canvasTexture(s.tex, '#120a1d', s.color);
    }
    const mat = new THREE.MeshBasicMaterial({ map: signTextures[s.tex], transparent: true, side: THREE.DoubleSide, toneMapped: false });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(s.w, s.h), mat);
    mesh.position.set(s.x, s.y, s.z);
    mesh.rotation.y = s.ry;
    group.add(mesh);
  });

  // Niebla / ambiente
  scene.fog = new THREE.FogExp2(map.sky.fog, map.sky.fogDensity);
  scene.background = new THREE.Color(map.sky.fog);
  scene.add(group);

  const weather = buildWeather(scene, map);

  /* ── puntos de loot / pollos / máscaras ── */
  const isInside = (x, z) => colliders.some((c) =>
    x > c.minX - 1 && x < c.maxX + 1 && z > c.minZ - 1 && z < c.maxZ + 1);

  function scatter(n, minR, maxR, list, filter) {
    let tries = 0;
    while (list.length < n && tries < n * 40) {
      tries++;
      const a = rng() * Math.PI * 2;
      const r = minR + rng() * (maxR - minR);
      const x = Math.cos(a) * r + (rng() - 0.5) * 20;
      const z = Math.sin(a) * r + (rng() - 0.5) * 20;
      if (Math.hypot(x, z) > 195) continue;
      if (isInside(x, z)) continue;
      if (filter && !filter(x, z)) continue;
      list.push({ x, z, y: heightAt(x, z) });
    }
  }

  scatter(52, 18, 175, lootSpots);
  scatter(16, 20, 165, chickenSpots, (x, z) => {
    const city = Math.hypot(x - 95, z + 40) < 72;
    const village = Math.hypot(x + 95, z - 35) < 55;
    return !city || village || rng() < 0.2;
  });
  if (map.toxic) scatter(7, 30, 165, gasMaskSpots);

  // Ajustar puntos que caen en agua
  for (const list of [lootSpots, chickenSpots, gasMaskSpots]) {
    for (const p of list) {
      if (p.y < 0.6) p.y = Math.max(p.y, heightAt(p.x * 0.8, p.z * 0.8));
    }
  }

  /* ── raycast barato contra AABB + terreno ── */
  function segmentHit(from, to) {
    let bestT = 1;
    const dx = to.x - from.x, dy = to.y - from.y, dz = to.z - from.z;
    for (const c of colliders) {
      let tmin = 0, tmax = 1;
      // X
      if (Math.abs(dx) < 1e-8) { if (from.x < c.minX || from.x > c.maxX) continue; }
      else {
        let t1 = (c.minX - from.x) / dx, t2 = (c.maxX - from.x) / dx;
        if (t1 > t2) [t1, t2] = [t2, t1];
        tmin = Math.max(tmin, t1); tmax = Math.min(tmax, t2);
        if (tmin > tmax) continue;
      }
      if (Math.abs(dy) < 1e-8) { if (from.y < c.minY || from.y > c.maxY) continue; }
      else {
        let t1 = (c.minY - from.y) / dy, t2 = (c.maxY - from.y) / dy;
        if (t1 > t2) [t1, t2] = [t2, t1];
        tmin = Math.max(tmin, t1); tmax = Math.min(tmax, t2);
        if (tmin > tmax) continue;
      }
      if (Math.abs(dz) < 1e-8) { if (from.z < c.minZ || from.z > c.maxZ) continue; }
      else {
        let t1 = (c.minZ - from.z) / dz, t2 = (c.maxZ - from.z) / dz;
        if (t1 > t2) [t1, t2] = [t2, t1];
        tmin = Math.max(tmin, t1); tmax = Math.min(tmax, t2);
        if (tmin > tmax) continue;
      }
      if (tmin > 0.001 && tmin < bestT) bestT = tmin;
    }
    // Terreno (muestreo)
    const steps = 12;
    for (let i = 1; i <= steps; i++) {
      const t = i / steps;
      if (t >= bestT) break;
      const x = from.x + dx * t, y = from.y + dy * t, z = from.z + dz * t;
      if (y < heightAt(x, z)) { bestT = t; break; }
    }
    return {
      hit: bestT < 1,
      t: bestT,
      point: new THREE.Vector3(from.x + dx * bestT, from.y + dy * bestT, from.z + dz * bestT),
    };
  }

  /* ── colisiones de personaje ── */
  function resolveCollisions(pos, radius, height) {
    let onBox = null;
    for (const c of colliders) {
      if (pos.y + height < c.minY || pos.y > c.maxY) continue;
      const cx = clamp(pos.x, c.minX, c.maxX);
      const cz = clamp(pos.z, c.minZ, c.maxZ);
      const dx = pos.x - cx, dz = pos.z - cz;
      const d2 = dx * dx + dz * dz;
      if (d2 < radius * radius) {
        const d = Math.sqrt(d2) || 0.0001;
        if (d2 > 1e-6) {
          pos.x += (dx / d) * (radius - d);
          pos.z += (dz / d) * (radius - d);
        } else {
          // dentro del AABB: empujar por el eje más cercano
          const left = pos.x - c.minX, right = c.maxX - pos.x;
          const front = pos.z - c.minZ, back = c.maxZ - pos.z;
          const m = Math.min(left, right, front, back);
          if (m === left) pos.x = c.minX - radius;
          else if (m === right) pos.x = c.maxX + radius;
          else if (m === front) pos.z = c.minZ - radius;
          else pos.z = c.maxZ + radius;
        }
      }
      // Techo pisable
      if (pos.x > c.minX - 0.4 && pos.x < c.maxX + 0.4 && pos.z > c.minZ - 0.4 && pos.z < c.maxZ + 0.4) {
        if (pos.y <= c.maxY + 0.35 && pos.y >= c.maxY - 0.8) onBox = Math.max(onBox || -Infinity, c.maxY);
      }
    }
    return onBox;
  }

  function groundAt(x, z) { return heightAt(x, z); }

  /* ── update ── */
  let t = 0;
  const tmp = new THREE.Vector3();
  function update(dt, camera) {
    t += dt;
    // Partículas de clima alrededor de la cámara
    const arr = weather.positions;
    for (let i = 0; i < weather.count; i++) {
      const i3 = i * 3;
      if (map.weather === 'ember') {
        arr[i3 + 1] -= dt * (1.4 + weather.seeds[i] * 2.2);
        arr[i3] += Math.sin(t * 1.2 + i) * dt * 0.5;
      } else if (map.weather === 'ash') {
        arr[i3 + 1] -= dt * (2.4 + weather.seeds[i] * 3);
        arr[i3] += Math.sin(t * 0.7 + i) * dt * 1.3;
      } else {
        arr[i3 + 1] -= dt * (12 + weather.seeds[i] * 8);
      }
      if (arr[i3 + 1] < -2) {
        arr[i3 + 1] = 55;
        arr[i3] = camera.position.x + (Math.random() - 0.5) * 100;
        arr[i3 + 2] = camera.position.z + (Math.random() - 0.5) * 100;
      }
      if (Math.abs(arr[i3] - camera.position.x) > 60) arr[i3] = camera.position.x + (Math.random() - 0.5) * 90;
      if (Math.abs(arr[i3 + 2] - camera.position.z) > 60) arr[i3 + 2] = camera.position.z + (Math.random() - 0.5) * 90;
    }
    weather.points.geometry.attributes.position.needsUpdate = true;

    // Lava pulsante
    if (lava.length) {
      const pulse = 0.8 + Math.sin(t * 2.2) * 0.12;
      for (let i = 0; i < lava.length; i++) {
        lava[i].material.opacity = (map.lava ? 0.82 : 0.4) * pulse;
      }
      if (ctx.crater) ctx.crater.material.opacity = 0.65 + Math.sin(t * 3) * 0.2;
    }

    // Fumarola del volcán
    if (ctx.smokeOrigin && !ctx.smoke) {
      const n = 70;
      const g = new THREE.BufferGeometry();
      const p = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) {
        p[i * 3] = ctx.smokeOrigin.x + (Math.random() - 0.5) * 8;
        p[i * 3 + 1] = ctx.smokeOrigin.y + Math.random() * 25;
        p[i * 3 + 2] = ctx.smokeOrigin.z + (Math.random() - 0.5) * 8;
      }
      g.setAttribute('position', new THREE.BufferAttribute(p, 3));
      ctx.smoke = new THREE.Points(g, new THREE.PointsMaterial({
        color: map.lava ? 0x4a4038 : 0x6a6a66, size: 5, transparent: true, opacity: 0.35, depthWrite: false,
      }));
      ctx.smoke.frustumCulled = false;
      scene.add(ctx.smoke);
    }
    if (ctx.smoke) {
      const p = ctx.smoke.geometry.attributes.position.array;
      for (let i = 0; i < p.length / 3; i++) {
        p[i * 3 + 1] += dt * 3;
        p[i * 3] += dt * 1.2;
        if (p[i * 3 + 1] > ctx.smokeOrigin.y + 30) {
          p[i * 3] = ctx.smokeOrigin.x + (Math.random() - 0.5) * 8;
          p[i * 3 + 1] = ctx.smokeOrigin.y;
          p[i * 3 + 2] = ctx.smokeOrigin.z + (Math.random() - 0.5) * 8;
        }
      }
      ctx.smoke.geometry.attributes.position.needsUpdate = true;
    }
  }

  function setEruption(on) {
    for (const m of lava) {
      m.material.color.set(on ? 0xff6a1f : 0x3a1a14);
      m.material.opacity = on ? 0.95 : 0.45;
    }
    if (ctx.crater) ctx.crater.material.color.set(on ? 0xff7a1f : 0x552222);
  }

  return {
    group, heightAt, groundAt, colliders, lootSpots, chickenSpots, gasMaskSpots,
    update, segmentHit, resolveCollisions, setEruption, weather,
    dispose() {
      scene.remove(group);
      scene.remove(weather.points);
      if (ctx.smoke) scene.remove(ctx.smoke);
      scene.fog = null;
      scene.background = null;
      scene.traverse((o) => {
        if (o.isMesh || o.isPoints) {
          o.geometry?.dispose?.();
          if (Array.isArray(o.material)) o.material.forEach((m) => m.dispose?.());
          else o.material?.dispose?.();
        }
      });
    },
  };
}
