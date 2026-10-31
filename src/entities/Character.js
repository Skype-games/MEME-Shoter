import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

/* Utilidades de geometría coloreada */
function paint(geo, color) {
  const c = new THREE.Color(color);
  const n = geo.attributes.position.count;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b; }
  geo.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return geo;
}
function box(w, h, d, x, y, z, color, rx = 0, ry = 0, rz = 0) {
  const g = new THREE.BoxGeometry(w, h, d);
  paint(g, color);
  if (rx) g.rotateX(rx); if (ry) g.rotateY(ry); if (rz) g.rotateZ(rz);
  g.translate(x, y, z);
  return g;
}
function sph(r, x, y, z, color, sx = 1, sy = 1, sz = 1) {
  const g = new THREE.IcosahedronGeometry(r, 1);
  paint(g, color);
  g.scale(sx, sy, sz);
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
function cyl(rt, rb, h, x, y, z, color, seg = 6, rx = 0, rz = 0) {
  const g = new THREE.CylinderGeometry(rt, rb, h, seg);
  paint(g, color);
  if (rx) g.rotateX(rx); if (rz) g.rotateZ(rz);
  g.translate(x, y, z);
  return g;
}
function mergeGeo(list) {
  return mergeGeometries(list.map((g) => (g.index ? g.toNonIndexed() : g)), false);
}
function mergeMesh(list, mat) {
  const geo = mergeGeo(list);
  const mesh = new THREE.Mesh(geo, mat);
  return mesh;
}

const FUR = {
  miguel: '#d9894a',
  miguelDark: '#b5652f',
  cream: '#f2d9b0',
  vest: '#3c4a34',
  vestDark: '#2a3526',
  strap: '#1d241a',
  glove: '#ff7a2f',
  claw: '#d9d9d9',
};

export function furPalette(seed = 0) {
  const palettes = [
    { fur: '#d9894a', dark: '#b5652f', cream: '#f2d9b0' },
    { fur: '#8f8f96', dark: '#6a6a72', cream: '#e8e2d4' },
    { fur: '#2f2b2a', dark: '#1c1918', cream: '#b9aa98' },
    { fur: '#e8dfd0', dark: '#c4b8a4', cream: '#fff6e8' },
    { fur: '#b06a3a', dark: '#7d4422', cream: '#f0d0a8' },
    { fur: '#6b5a4a', dark: '#4a3d31', cream: '#d8c4a8' },
  ];
  return palettes[seed % palettes.length];
}

const VESTS = ['#3c4a34', '#3a3f4a', '#4a3a34', '#2f3a3a', '#4a4430', '#352f42'];

/* Cuerpo base (cabeza, torso, orejas, ojos) fusionado */
function bodyGeo(pal, vest, gloves, stripes = true) {
  const g = [];
  // piernas / patas se añaden aparte en el jugador
  g.push(box(0.44, 0.34, 0.3, 0, 0.52, 0, pal.fur));
  g.push(box(0.46, 0.16, 0.32, 0, 0.62, 0.01, vest));
  g.push(box(0.5, 0.07, 0.34, 0, 0.72, 0, FUR.strap));
  g.push(box(0.08, 0.38, 0.34, 0, 0.53, 0.01, FUR.strap));
  // placa táctica
  g.push(box(0.2, 0.15, 0.04, 0, 0.6, 0.17, '#6b6f5a'));
  // cabeza
  g.push(sph(0.23, 0, 0.86, 0, pal.fur, 1, 0.94, 1));
  g.push(sph(0.15, 0, 0.8, 0.1, pal.cream, 1, 0.8, 0.8));
  // hocico
  g.push(sph(0.06, 0, 0.81, 0.21, '#f7b7a0', 1.2, 0.8, 0.9));
  // nariz
  g.push(box(0.045, 0.035, 0.035, 0, 0.835, 0.255, '#3a2424'));
  // ojos
  g.push(sph(0.042, -0.085, 0.89, 0.185, '#1a1a1a', 1, 1.15, 0.7));
  g.push(sph(0.042, 0.085, 0.89, 0.185, '#1a1a1a', 1, 1.15, 0.7));
  g.push(sph(0.012, -0.08, 0.9, 0.213, '#ffffff'));
  g.push(sph(0.012, 0.09, 0.9, 0.213, '#ffffff'));
  // orejas
  g.push(cone(0.09, 0.2, -0.14, 1.02, 0, pal.fur, 0, 0, -0.16));
  g.push(cone(0.09, 0.2, 0.14, 1.02, 0, pal.fur, 0, 0, 0.16));
  g.push(cone(0.05, 0.12, -0.14, 1.0, 0.02, '#e8a8a0', 0, 0, -0.16));
  g.push(cone(0.05, 0.12, 0.14, 1.0, 0.02, '#e8a8a0', 0, 0, 0.16));
  // rayas
  if (stripes) {
    g.push(box(0.05, 0.02, 0.22, -0.1, 1.045, 0, pal.dark));
    g.push(box(0.05, 0.02, 0.22, 0.08, 1.05, 0, pal.dark));
    g.push(box(0.24, 0.04, 0.02, 0, 0.71, -0.14, pal.dark));
  }
  // guantes
  if (gloves) {
    g.push(box(0.11, 0.11, 0.12, -0.31, 0.42, 0.02, FUR.glove));
    g.push(box(0.11, 0.11, 0.12, 0.31, 0.42, 0.02, FUR.glove));
    for (let i = -1; i <= 1; i++) {
      g.push(cone(0.018, 0.1, -0.34 + i * 0.03, 0.36, 0.08, FUR.claw, 0.5, 0, 0));
      g.push(cone(0.018, 0.1, 0.28 + i * 0.03, 0.36, 0.08, FUR.claw, 0.5, 0, 0));
    }
  }
  // mochila
  g.push(box(0.26, 0.24, 0.12, 0, 0.58, -0.2, '#3a3a2e'));
  return g;
}

/* ───────────────────────── Jugador ───────────────────────── */

export function createPlayerCharacter(scene, skin) {
  const pal = { fur: FUR.miguel, dark: FUR.miguelDark, cream: FUR.cream };
  const gloves = !!skin.gloves;
  const mat = new THREE.MeshLambertMaterial({ vertexColors: true });
  const root = new THREE.Group();
  root.name = 'miguel';
  const rig = new THREE.Group();
  root.add(rig);

  const body = mergeMesh(bodyGeo(pal, FUR.vest, gloves), mat);
  body.castShadow = false;
  rig.add(body);

  // Brazos articulados
  const armGeo = (side) => {
    const g = [];
    g.push(box(0.1, 0.26, 0.1, 0, -0.1, 0, pal.fur));
    g.push(sph(0.075, 0, -0.25, 0, gloves ? FUR.glove : pal.cream, 1, 0.9, 1));
    if (gloves) {
      g.push(cone(0.02, 0.09, 0, -0.31, 0.02, FUR.claw, 0.3, 0, 0));
    }
    const m = mergeMesh(g, mat);
    m.position.set(side * 0.29, 0.74, 0);
    return m;
  };
  const armL = armGeo(-1), armR = armGeo(1);
  rig.add(armL, armR);

  // Piernas articuladas
  const legGeo = () => {
    const g = [];
    g.push(box(0.12, 0.28, 0.13, 0, -0.13, 0, pal.fur));
    g.push(box(0.14, 0.08, 0.2, 0, -0.29, 0.03, pal.cream));
    return mergeMesh(g, mat);
  };
  const legL = legGeo(), legR = legGeo();
  legL.position.set(-0.13, 0.36, 0);
  legR.position.set(0.13, 0.36, 0);
  rig.add(legL, legR);

  // Cola animada
  const tail = new THREE.Group();
  const tailSegs = [];
  const tailMat = new THREE.MeshLambertMaterial({ color: pal.fur });
  for (let i = 0; i < 3; i++) {
    const seg = new THREE.Mesh(new THREE.CylinderGeometry(0.045 - i * 0.008, 0.05 - i * 0.008, 0.2, 5), tailMat);
    seg.position.y = 0.1;
    const pivot = new THREE.Group();
    pivot.add(seg);
    pivot.position.set(0, i === 0 ? 0 : 0.18, 0);
    pivot.rotation.x = 0.5 + i * 0.15;
    tailSegs.push(pivot);
    if (i === 0) tail.add(pivot); else tailSegs[i - 1].add(pivot);
  }
  tail.position.set(0, 0.52, -0.18);
  tail.rotation.x = -0.4;
  rig.add(tail);

  // Arma en la mano derecha
  const weaponMount = new THREE.Group();
  weaponMount.position.set(0.34, 0.45, 0.06);
  rig.add(weaponMount);
  let weaponMesh = null;
  let muzzle = new THREE.Object3D();
  muzzle.position.set(0, 0.02, 0.35);
  weaponMount.add(muzzle);

  // Sombra falsa
  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(0.42, 12),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.28, depthWrite: false })
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.03;
  root.add(shadow);

  let walkPhase = 0;
  let bob = 0;
  let swing = 0;
  let aimBlend = 0;

  function setWeapon(id) {
    if (weaponMesh) { weaponMount.remove(weaponMesh); disposeObject(weaponMesh); }
    weaponMesh = buildWeaponMesh(id);
    weaponMount.add(weaponMesh);
    muzzle.position.set(0, 0.03, weaponMesh.userData.muzzleZ || 0.35);
  }

  function update(dt, speed, grounded, aiming, attacking) {
    const moving = speed > 0.3;
    walkPhase += dt * (moving ? speed * 6.2 : 2.2);
    aimBlend += ((aiming ? 1 : 0) - aimBlend) * Math.min(1, dt * 10);
    bob += dt * (moving ? speed * 5 : 1.5);

    const legSwing = moving ? Math.sin(walkPhase) * 0.65 : 0;
    legL.rotation.x = legSwing;
    legR.rotation.x = -legSwing;
    armL.rotation.x = -legSwing * 0.7 - aimBlend * 0.9;
    armR.rotation.x = legSwing * 0.7 - aimBlend * 1.25 + (attacking ? Math.sin(performance.now() * 0.03) * 0.4 : 0);
    armL.rotation.z = -0.08;
    armR.rotation.z = 0.08 + aimBlend * 0.18;
    rig.position.y = moving ? Math.abs(Math.sin(walkPhase * 2)) * 0.025 : Math.sin(bob) * 0.008;
    rig.rotation.z = moving ? Math.sin(walkPhase) * 0.035 : 0;
    rig.rotation.x = aimBlend * 0.06;
    tail.rotation.y = Math.sin(bob * 1.4) * 0.4;
    tail.rotation.x = -0.4 + Math.sin(bob * 1.1) * 0.12;
    for (let i = 0; i < tailSegs.length; i++) tailSegs[i].rotation.z = Math.sin(bob * 1.6 + i) * 0.18;
    shadow.position.y = 0.03;
    weaponMount.rotation.x = aimBlend * -0.15;
  }

  scene.add(root);
  return {
    root, rig, weaponMount, muzzle, shadow,
    setWeapon, update,
    setGloves(on) {
      // Reconstrucción ligera al alternar variante
      body.geometry.dispose();
      body.geometry = mergeGeo(bodyGeo(pal, FUR.vest, on));
    },
    getWeaponMesh: () => weaponMesh,
  };
}

/* ───────────────────────── Bots ───────────────────────── */

export function createBotMesh(scene, seed = 0, map) {
  const pal = furPalette(seed * 7 + 3);
  const vest = VESTS[seed % VESTS.length];
  const gloves = seed % 9 === 0;
  const list = bodyGeo(pal, vest, gloves, seed % 3 !== 0);
  // piernas simples fusionadas
  list.push(box(0.12, 0.3, 0.13, -0.13, 0.18, 0, pal.fur));
  list.push(box(0.12, 0.3, 0.13, 0.13, 0.18, 0, pal.fur));
  list.push(box(0.14, 0.07, 0.2, -0.13, 0.035, 0.03, pal.cream));
  list.push(box(0.14, 0.07, 0.2, 0.13, 0.035, 0.03, pal.cream));
  // cola fusionada
  list.push(cyl(0.035, 0.05, 0.34, 0, 0.5, -0.32, pal.fur, 5, 0.9, 0));
  const mat = new THREE.MeshLambertMaterial({ vertexColors: true });
  const mesh = mergeMesh(list, mat);
  const group = new THREE.Group();
  group.add(mesh);
  // arma simplificada
  const wm = buildWeaponMesh(seed % 4 === 0 ? 'ak47' : seed % 4 === 1 ? 'mp5' : seed % 4 === 2 ? 'remington' : 'm1911');
  wm.position.set(0.3, 0.48, 0.15);
  wm.scale.setScalar(0.9);
  group.add(wm);
  scene.add(group);
  return { group, mesh, weaponMesh: wm, palette: pal, vest };
}

/* ───────────────────────── Armas low-poly ───────────────────────── */

const matCache = new Map();
function lam(color, emissive = 0x000000, ei = 0) {
  const key = `${color}-${emissive}-${ei}`;
  if (!matCache.has(key)) matCache.set(key, new THREE.MeshLambertMaterial({ color, emissive, emissiveIntensity: ei }));
  return matCache.get(key);
}
function basic(color) {
  const key = `b-${color}`;
  if (!matCache.has(key)) matCache.set(key, new THREE.MeshBasicMaterial({ color, toneMapped: false }));
  return matCache.get(key);
}
function part(geo, mat, x, y, z, rx = 0, ry = 0, rz = 0) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.rotation.set(rx, ry, rz);
  return m;
}

export function buildWeaponMesh(id) {
  const g = new THREE.Group();
  const dark = lam(0x24262a), metal = lam(0x555a60), wood = lam(0x7a4a28), tan = lam(0x8a7a5a);
  const glow = basic(0xff4d6d);
  let muzzleZ = 0.35;

  switch (id) {
    case 'garras': {
      const clawMat = basic(0xffb02e);
      for (let i = -1; i <= 1; i++) {
        const c = part(new THREE.ConeGeometry(0.035, 0.42, 5), clawMat, i * 0.07, 0.02, 0.16, Math.PI / 2);
        g.add(c);
      }
      g.add(part(new THREE.BoxGeometry(0.16, 0.1, 0.16), lam(0xff7a2f), 0, -0.04, 0.02));
      muzzleZ = 0.34;
      break;
    }
    case 'bate': {
      const b = part(new THREE.CylinderGeometry(0.045, 0.075, 0.8, 7), wood, 0, 0, 0.28, Math.PI / 2);
      g.add(b);
      g.add(part(new THREE.CylinderGeometry(0.055, 0.045, 0.18, 7), dark, 0, 0, -0.14, Math.PI / 2));
      g.add(part(new THREE.BoxGeometry(0.14, 0.02, 0.1), basic(0xffd166), 0, 0.07, 0.45));
      muzzleZ = 0.66;
      break;
    }
    case 'chancla': {
      g.add(part(new THREE.BoxGeometry(0.18, 0.05, 0.5), basic(0xff4d9a), 0, 0, 0.18));
      g.add(part(new THREE.BoxGeometry(0.1, 0.06, 0.16), basic(0xffb02e), 0, 0.02, 0.12));
      g.add(part(new THREE.BoxGeometry(0.02, 0.08, 0.4), basic(0xffd166), 0, 0.05, 0.2));
      muzzleZ = 0.44;
      break;
    }
    case 'chismes': {
      g.add(part(new THREE.CylinderGeometry(0.06, 0.075, 0.55, 8), metal, 0, 0, 0.18, Math.PI / 2));
      g.add(part(new THREE.CylinderGeometry(0.11, 0.11, 0.3, 8), lam(0x8a2f2f), 0, -0.12, -0.1, Math.PI / 2));
      g.add(part(new THREE.ConeGeometry(0.12, 0.18, 8), basic(0xff7a2f), 0, 0, 0.48, Math.PI / 2));
      muzzleZ = 0.58;
      break;
    }
    case 'memes': {
      g.add(part(new THREE.BoxGeometry(0.18, 0.2, 0.5), lam(0x3a3a4a), 0, 0, 0.14));
      g.add(part(new THREE.CylinderGeometry(0.07, 0.09, 0.28, 8), basic(0xb06bff), 0, 0, 0.42, Math.PI / 2));
      g.add(part(new THREE.SphereGeometry(0.08, 8, 6), glow, 0, 0, 0.5));
      muzzleZ = 0.58;
      break;
    }
    case 'rpg': case 'javelin': case 'm79': {
      g.add(part(new THREE.CylinderGeometry(0.085, 0.085, 1.0, 8), lam(0x3f4a35), 0, 0, 0.2, Math.PI / 2));
      g.add(part(new THREE.ConeGeometry(0.14, 0.3, 8), lam(0x6a3a2a), 0, 0, 0.55, Math.PI / 2));
      g.add(part(new THREE.BoxGeometry(0.06, 0.16, 0.12), dark, 0, -0.12, 0.05));
      muzzleZ = 0.7;
      break;
    }
    case 'minigun': case 'm249': case 'm60': case 'pkm': {
      g.add(part(new THREE.BoxGeometry(0.2, 0.18, 0.55), lam(0x3a3f3a), 0, 0, 0.15));
      g.add(part(new THREE.CylinderGeometry(0.06, 0.06, 0.55, 8), metal, 0, 0.01, 0.48, Math.PI / 2));
      g.add(part(new THREE.CylinderGeometry(0.12, 0.12, 0.18, 8), dark, 0, -0.1, 0.12, Math.PI / 2));
      muzzleZ = 0.78;
      break;
    }
    case 'awm': case 'barrett': case 'mosin': case 'svd': case 'vss': {
      g.add(part(new THREE.BoxGeometry(0.1, 0.12, 0.7), lam(0x3a4238), 0, 0, 0.25));
      g.add(part(new THREE.CylinderGeometry(0.035, 0.035, 0.55, 6), metal, 0, 0.02, 0.68, Math.PI / 2));
      g.add(part(new THREE.BoxGeometry(0.12, 0.12, 0.26), dark, 0, 0.1, 0.12));
      g.add(part(new THREE.CylinderGeometry(0.05, 0.05, 0.2, 8), basic(0x7ef9ff), 0, 0.11, 0.12, Math.PI / 2));
      g.add(part(new THREE.BoxGeometry(0.06, 0.18, 0.1), dark, 0, -0.12, 0.1));
      muzzleZ = 0.95;
      break;
    }
    case 'remington': case 'doblecano': case 'benelli': case 'spas': case 'aa12': {
      g.add(part(new THREE.BoxGeometry(0.13, 0.13, 0.62), wood, 0, 0, 0.2));
      g.add(part(new THREE.CylinderGeometry(0.045, 0.045, 0.5, 6), metal, 0, 0.03, 0.62, Math.PI / 2));
      g.add(part(new THREE.CylinderGeometry(0.04, 0.04, 0.4, 6), metal, 0, -0.03, 0.6, Math.PI / 2));
      muzzleZ = 0.9;
      break;
    }
    case 'uzi': case 'mp5': case 'tec9': case 'p90': case 'vector': case 'mp7': {
      g.add(part(new THREE.BoxGeometry(0.13, 0.16, 0.38), dark, 0, 0, 0.12));
      g.add(part(new THREE.CylinderGeometry(0.03, 0.03, 0.22, 6), metal, 0, 0.03, 0.38, Math.PI / 2));
      g.add(part(new THREE.BoxGeometry(0.07, 0.2, 0.08), metal, 0, -0.13, 0.1));
      muzzleZ = 0.52;
      break;
    }
    case 'ak47': case 'm4a1': case 'scar': case 'fal': case 'g36': case 'm16': case 'famas': case 'galil': {
      g.add(part(new THREE.BoxGeometry(0.11, 0.14, 0.58), lam(0x333a32), 0, 0, 0.2));
      g.add(part(new THREE.CylinderGeometry(0.028, 0.028, 0.38, 6), metal, 0, 0.03, 0.62, Math.PI / 2));
      g.add(part(new THREE.BoxGeometry(0.08, 0.22, 0.09), dark, 0, -0.15, 0.14));
      g.add(part(new THREE.BoxGeometry(0.07, 0.12, 0.16), dark, 0, 0.09, 0.22));
      muzzleZ = 0.86;
      break;
    }
    case 'deagle': case 'magnum': {
      g.add(part(new THREE.BoxGeometry(0.1, 0.13, 0.34), metal, 0, 0.02, 0.14));
      g.add(part(new THREE.BoxGeometry(0.09, 0.18, 0.1), dark, 0, -0.1, 0.02));
      muzzleZ = 0.34;
      break;
    }
    case 'katana': {
      g.add(part(new THREE.BoxGeometry(0.035, 0.045, 0.95), basic(0xd8e6f0), 0, 0.02, 0.45));
      g.add(part(new THREE.CylinderGeometry(0.03, 0.03, 0.18, 6), dark, 0, 0, -0.06, Math.PI / 2));
      muzzleZ = 0.9;
      break;
    }
    case 'cuchillo': {
      g.add(part(new THREE.BoxGeometry(0.03, 0.06, 0.32), basic(0xc8d6e0), 0, 0.02, 0.2));
      g.add(part(new THREE.BoxGeometry(0.05, 0.05, 0.12), dark, 0, 0, -0.02));
      muzzleZ = 0.36;
      break;
    }
    case 'mazo': {
      g.add(part(new THREE.CylinderGeometry(0.03, 0.035, 0.55, 6), wood, 0, 0, 0.2, Math.PI / 2));
      g.add(part(new THREE.BoxGeometry(0.18, 0.18, 0.22), metal, 0, 0, 0.48));
      muzzleZ = 0.56;
      break;
    }
    case 'palanca': {
      g.add(part(new THREE.CylinderGeometry(0.025, 0.03, 0.8, 6), lam(0x8a3a2a), 0, 0, 0.3, Math.PI / 2));
      g.add(part(new THREE.BoxGeometry(0.12, 0.05, 0.1), metal, 0, 0.04, 0.7));
      muzzleZ = 0.7;
      break;
    }
    case 'bate_beisbol': {
      g.add(part(new THREE.CylinderGeometry(0.04, 0.07, 0.72, 7), wood, 0, 0, 0.26, Math.PI / 2));
      muzzleZ = 0.62;
      break;
    }
    default: { // pistolas genéricas
      g.add(part(new THREE.BoxGeometry(0.09, 0.12, 0.3), dark, 0, 0.02, 0.12));
      g.add(part(new THREE.BoxGeometry(0.08, 0.16, 0.1), lam(0x3a3a3a), 0, -0.1, 0.02));
      muzzleZ = 0.3;
    }
  }
  g.userData.muzzleZ = muzzleZ;
  return g;
}

export function disposeObject(obj) {
  obj.traverse((o) => {
    if (o.geometry) o.geometry.dispose();
  });
}

/* Círculo de selección / sombra compartida */
export function makeShadow() {
  const m = new THREE.Mesh(
    new THREE.CircleGeometry(0.42, 10),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.3, depthWrite: false })
  );
  m.rotation.x = -Math.PI / 2;
  return m;
}
