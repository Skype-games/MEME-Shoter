import * as THREE from '../vendor/three.module.min.js'
import { MAPS } from './data.js'

const HALF = 122

function mulberry32(seed) {
  return function () {
    let t = (seed += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function color(hex) {
  return new THREE.Color(hex)
}

function groundTexture(base, fleck, theme) {
  const c = document.createElement('canvas')
  c.width = c.height = 256
  const ctx = c.getContext('2d')
  ctx.fillStyle = base
  ctx.fillRect(0, 0, 256, 256)
  const rng = mulberry32(99)
  for (let i = 0; i < 900; i++) {
    ctx.globalAlpha = 0.08 + rng() * 0.22
    ctx.fillStyle = fleck
    const s = 1 + rng() * 5
    ctx.fillRect(rng() * 256, rng() * 256, s, s)
  }
  if (theme === 'cyber') {
    ctx.globalAlpha = 0.22
    ctx.strokeStyle = '#4df2ff'
    ctx.lineWidth = 1
    for (let i = 0; i < 6; i++) {
      ctx.beginPath()
      ctx.moveTo(rng() * 256, 0)
      ctx.lineTo(rng() * 256, 256)
      ctx.stroke()
    }
  }
  ctx.globalAlpha = 0.12
  ctx.strokeStyle = '#000'
  for (let i = 0; i < 22; i++) {
    ctx.beginPath()
    ctx.moveTo(rng() * 256, rng() * 256)
    ctx.lineTo(rng() * 256, rng() * 256)
    ctx.stroke()
  }
  ctx.globalAlpha = 1
  const tex = new THREE.CanvasTexture(c)
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  tex.repeat.set(18, 18)
  tex.anisotropy = 4
  return tex
}

function facadeTexture(base, lit, theme, rng) {
  const c = document.createElement('canvas')
  c.width = 128
  c.height = 256
  const ctx = c.getContext('2d')
  ctx.fillStyle = base
  ctx.fillRect(0, 0, 128, 256)
  // vertical grime
  for (let i = 0; i < 30; i++) {
    ctx.globalAlpha = 0.06 + rng() * 0.12
    ctx.fillStyle = '#081018'
    ctx.fillRect(rng() * 128, 0, 1 + rng() * 5, 256)
  }
  const rows = 7
  const cols = 4
  for (let r = 0; r < rows; r++) {
    for (let col = 0; col < cols; col++) {
      const x = 10 + col * 29 + (r % 2) * 2
      const y = 8 + r * 34
      ctx.globalAlpha = 1
      const on = rng() > (theme === 'wasteland' ? 0.72 : 0.45)
      ctx.fillStyle = on ? lit : theme === 'cyber' ? '#150f2c' : '#14181c'
      if (theme === 'cyber' && rng() > 0.72) ctx.fillStyle = rng() > 0.5 ? '#ff32cf' : '#25f4ff'
      ctx.fillRect(x, y, 19, 20)
      ctx.globalAlpha = 0.5
      ctx.fillStyle = '#000'
      ctx.fillRect(x, y + 20, 19, 2)
    }
  }
  const tex = new THREE.CanvasTexture(c)
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  return tex
}

function signTexture(text, colorA = '#ff2bd6', colorB = '#25f4ff') {
  const c = document.createElement('canvas')
  c.width = 512
  c.height = 128
  const ctx = c.getContext('2d')
  const grd = ctx.createLinearGradient(0, 0, 512, 0)
  grd.addColorStop(0, colorA)
  grd.addColorStop(1, colorB)
  ctx.fillStyle = grd
  ctx.fillRect(0, 0, 512, 128)
  ctx.fillStyle = 'rgba(0,0,0,0.72)'
  ctx.fillRect(8, 8, 496, 112)
  ctx.font = 'bold 64px Impact, Arial Black, sans-serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.shadowColor = colorB
  ctx.shadowBlur = 18
  ctx.lineWidth = 9
  ctx.strokeStyle = 'rgba(0,0,0,0.9)'
  ctx.strokeText(text, 256, 68)
  ctx.fillStyle = '#ffffff'
  ctx.fillText(text, 256, 68)
  ctx.shadowBlur = 0
  const tex = new THREE.CanvasTexture(c)
  return tex
}

function makeTree(theme, rng, height = 5) {
  const g = new THREE.Group()
  const trunkMat = new THREE.MeshStandardMaterial({
    color: theme === 'wasteland' ? '#4a372b' : '#5b3d27',
    roughness: 1,
    flatShading: true,
  })
  const leafColor = theme === 'wasteland' ? '#5a5740' : theme === 'cyber' ? '#22405c' : '#3f7b3c'
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.34, height * 0.52, 5), trunkMat)
  trunk.position.y = height * 0.26
  trunk.castShadow = true
  g.add(trunk)
  const leafMat = new THREE.MeshStandardMaterial({ color: leafColor, roughness: 0.9, flatShading: true })
  for (let i = 0; i < 3; i++) {
    const cone = new THREE.Mesh(new THREE.ConeGeometry(height * (0.46 - i * 0.09), height * 0.46, 6), leafMat)
    cone.position.y = height * 0.48 + i * height * 0.19
    cone.rotation.y = rng() * Math.PI
    cone.castShadow = true
    g.add(cone)
  }
  return g
}

export function makeChicken() {
  const g = new THREE.Group()
  const white = new THREE.MeshStandardMaterial({ color: '#f4efe0', roughness: 0.9 })
  const red = new THREE.MeshStandardMaterial({ color: '#e44040', roughness: 0.8 })
  const orange = new THREE.MeshStandardMaterial({ color: '#f2a33a', roughness: 0.8 })
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.34, 7, 6), white)
  body.position.y = 0.5
  body.scale.z = 1.25
  g.add(body)
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.19, 6, 5), white)
  head.position.set(0, 0.85, 0.26)
  g.add(head)
  const comb = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.16, 4), red)
  comb.position.set(0, 1.0, 0.28)
  g.add(comb)
  const beak = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.16, 4), orange)
  beak.rotation.x = Math.PI / 2
  beak.position.set(0, 0.84, 0.46)
  g.add(beak)
  const tail = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.38, 4), white)
  tail.rotation.x = -0.8
  tail.position.set(0, 0.64, -0.38)
  g.add(tail)
  return g
}

function makeGunPickupIcon() {
  const g = new THREE.Group()
  const mat = new THREE.MeshStandardMaterial({ color: '#ffd34d', metalness: 0.5, roughness: 0.3, emissive: '#5d3d00', emissiveIntensity: 0.5 })
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.22, 0.22), mat)
  body.position.y = 0.3
  g.add(body)
  const grip = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.5, 0.2), mat)
  grip.position.set(-0.25, 0.1, 0)
  g.add(grip)
  return g
}

function addCollider(colliders, x, z, w, d, y = 0, h = 4) {
  colliders.push({ minX: x - w / 2, maxX: x + w / 2, minZ: z - d / 2, maxZ: z + d / 2, minY: y, maxY: y + h })
}

export function createWorld(scene, mapId = 'volcano') {
  const info = MAPS.find((m) => m.id === mapId) || MAPS[0]
  const theme = mapId
  const rng = mulberry32(mapId === 'volcano' ? 1337 : mapId === 'wasteland' ? 4242 : 9090)
  const group = new THREE.Group()
  group.name = 'world'
  scene.add(group)
  const colliders = []
  const lootSpots = []
  const lavaZones = []
  const stage = new THREE.Group()

  // ---------- SKY ----------
  const skyGeo = new THREE.SphereGeometry(430, 24, 16)
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    uniforms: {
      top: { value: color(info.top) },
      bottom: { value: color(info.bottom) },
      offset: { value: 30 },
      exponent: { value: 0.8 },
    },
    vertexShader: `varying vec3 vWorld; void main(){ vec4 w = modelMatrix * vec4(position,1.0); vWorld = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: `uniform vec3 top; uniform vec3 bottom; uniform float offset; uniform float exponent; varying vec3 vWorld;
      void main(){ float h = normalize(vWorld + vec3(0.0, offset, 0.0)).y; gl_FragColor = vec4(mix(bottom, top, pow(max(h,0.0), exponent)),1.0); }`,
  })
  group.add(new THREE.Mesh(skyGeo, skyMat))

  if (info.stars) {
    const starGeo = new THREE.BufferGeometry()
    const pts = []
    for (let i = 0; i < 700; i++) {
      const a = rng() * Math.PI * 2
      const h = 0.1 + rng() * 0.9
      const r = 360
      pts.push(Math.cos(a) * r * Math.sqrt(1 - h * h), h * r, Math.sin(a) * r * Math.sqrt(1 - h * h))
    }
    starGeo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3))
    group.add(new THREE.Points(starGeo, new THREE.PointsMaterial({ color: '#d9e8ff', size: 1.5, sizeAttenuation: false, transparent: true, opacity: 0.8 })))
  }

  // sun / moon
  const sunColor = theme === 'cyber' ? '#9fd9ff' : theme === 'wasteland' ? '#d9b79c' : '#ffd07a'
  const sun = new THREE.Mesh(new THREE.CircleGeometry(theme === 'cyber' ? 12 : 22, 32), new THREE.MeshBasicMaterial({ color: sunColor, transparent: true, opacity: 0.9 }))
  sun.position.set(-170, theme === 'cyber' ? 160 : 85, -300)
  sun.lookAt(0, 0, 0)
  group.add(sun)

  // ---------- GROUND ----------
  const groundMap = groundTexture(info.ground, theme === 'cyber' ? '#3c3566' : theme === 'wasteland' ? '#6c6559' : '#85905b', theme)
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(HALF * 2 + 50, HALF * 2 + 50, 1, 1),
    new THREE.MeshStandardMaterial({ map: groundMap, color: '#ffffff', roughness: 1 })
  )
  ground.rotation.x = -Math.PI / 2
  ground.receiveShadow = true
  group.add(ground)

  // region color patches
  const patch = (x, z, w, d, col, y = 0.02, opacity = 1) => {
    const m = new THREE.Mesh(
      new THREE.PlaneGeometry(w, d),
      new THREE.MeshStandardMaterial({ color: col, roughness: 1, transparent: opacity < 1, opacity })
    )
    m.rotation.x = -Math.PI / 2
    m.position.set(x, y, z)
    m.receiveShadow = true
    group.add(m)
    return m
  }

  if (theme === 'volcano') {
    patch(-65, 68, 82, 84, '#5d733e')
    patch(76, 76, 82, 82, '#4a4038')
    patch(48, -42, 124, 126, '#3e4446', 0.025) // city asphalt
  } else if (theme === 'wasteland') {
    patch(-65, 68, 82, 84, '#5d5843')
    patch(76, 76, 82, 82, '#483d35')
    patch(48, -42, 124, 126, '#393731', 0.025)
  } else {
    patch(-65, 68, 82, 84, '#1b2d28')
    patch(76, 76, 82, 82, '#241c33')
    patch(48, -42, 124, 126, '#171426', 0.025)
  }

  // roads
  const roadMat = new THREE.MeshStandardMaterial({ color: theme === 'cyber' ? '#11101d' : theme === 'wasteland' ? '#393732' : '#2f3335', roughness: 0.95 })
  const lineMat = new THREE.MeshBasicMaterial({ color: theme === 'cyber' ? '#29f7ff' : '#d5b85a', transparent: true, opacity: 0.55 })
  for (let i = -1; i <= 2; i++) {
    const roadX = new THREE.Mesh(new THREE.PlaneGeometry(11, 128), roadMat)
    roadX.rotation.x = -Math.PI / 2
    roadX.position.set(48 + i * 29, 0.035, -42)
    group.add(roadX)
    const roadZ = new THREE.Mesh(new THREE.PlaneGeometry(128, 11), roadMat)
    roadZ.rotation.x = -Math.PI / 2
    roadZ.position.set(48, 0.036, -42 + i * 29)
    group.add(roadZ)
  }
  for (let i = 0; i < 20; i++) {
    const dash = new THREE.Mesh(new THREE.PlaneGeometry(4, 0.34), lineMat)
    dash.rotation.x = -Math.PI / 2
    dash.position.set(48, 0.045, -100 + i * 6.2)
    group.add(dash)
    const dash2 = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 4), lineMat)
    dash2.rotation.x = -Math.PI / 2
    dash2.position.set(-18 + i * 6.6, 0.045, -42)
    group.add(dash2)
  }

  // central plaza
  const plaza = new THREE.Mesh(new THREE.CircleGeometry(16, 40), new THREE.MeshStandardMaterial({ color: theme === 'cyber' ? '#251d3c' : '#67615a', roughness: 0.9 }))
  plaza.rotation.x = -Math.PI / 2
  plaza.position.y = 0.04
  plaza.receiveShadow = true
  group.add(plaza)
  const plazaRing = new THREE.Mesh(new THREE.RingGeometry(13.2, 13.8, 48), new THREE.MeshBasicMaterial({ color: info.colors[0], transparent: true, opacity: 0.7, side: THREE.DoubleSide }))
  plazaRing.rotation.x = -Math.PI / 2
  plazaRing.position.y = 0.06
  stage.add(plazaRing)

  // stage platform
  const stageBase = new THREE.Mesh(new THREE.CylinderGeometry(4.9, 5.3, 0.35, 32), new THREE.MeshStandardMaterial({ color: '#18161f', metalness: 0.6, roughness: 0.35 }))
  stageBase.position.y = 0.18
  stageBase.receiveShadow = true
  stage.add(stageBase)
  const stageRing = new THREE.Mesh(new THREE.TorusGeometry(4.4, 0.07, 8, 64), new THREE.MeshBasicMaterial({ color: info.colors[0] }))
  stageRing.rotation.x = Math.PI / 2
  stageRing.position.y = 0.4
  stage.add(stageRing)
  const stageRing2 = new THREE.Mesh(new THREE.TorusGeometry(3.8, 0.035, 8, 64), new THREE.MeshBasicMaterial({ color: info.colors[1] }))
  stageRing2.rotation.x = Math.PI / 2
  stageRing2.position.y = 1.8
  stage.add(stageRing2)

  group.add(stage)

  // ---------- BUILDINGS ----------
  const buildingPalette = theme === 'cyber' ? ['#211d38', '#2b1e46', '#17263b', '#301a3a'] : theme === 'wasteland' ? ['#5b554b', '#4b463e', '#655c50'] : ['#8b8578', '#6f7a76', '#9b8d78', '#77706a']
  const windowLit = theme === 'cyber' ? '#2cf6ff' : '#ffd98a'
  const facadeCache = []
  for (let i = 0; i < 4; i++) facadeCache.push(facadeTexture(buildingPalette[i % buildingPalette.length], windowLit, theme, rng))

  function addBuilding(x, z, w, d, h, opts = {}) {
    const tex = facadeCache[Math.floor(rng() * facadeCache.length)]
    const mats = [
      new THREE.MeshStandardMaterial({ map: tex, roughness: 0.88 }),
      new THREE.MeshStandardMaterial({ map: tex, roughness: 0.88 }),
      new THREE.MeshStandardMaterial({ color: opts.roof || (theme === 'cyber' ? '#0e0c18' : '#4b4842'), roughness: 1 }),
      new THREE.MeshStandardMaterial({ color: '#2a2a2a', roughness: 1 }),
      new THREE.MeshStandardMaterial({ map: tex, roughness: 0.88 }),
      new THREE.MeshStandardMaterial({ map: tex, roughness: 0.88 }),
    ]
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mats)
    mesh.position.set(x, h / 2, z)
    mesh.castShadow = true
    mesh.receiveShadow = true
    group.add(mesh)
    addCollider(colliders, x, z, w, d, 0, h)
    // roof lip
    const lip = new THREE.Mesh(new THREE.BoxGeometry(w + 0.4, 0.35, d + 0.4), new THREE.MeshStandardMaterial({ color: opts.trim || '#383632', roughness: 1 }))
    lip.position.set(x, h + 0.1, z)
    lip.castShadow = true
    group.add(lip)
    if (theme === 'cyber' && rng() > 0.3) {
      const sign = new THREE.Mesh(new THREE.PlaneGeometry(Math.min(w * 0.9, 9), 2.6), new THREE.MeshBasicMaterial({ map: signTexture(rng() > 0.5 ? 'LEU' : rng() > 0.5 ? '24/7' : 'CHISME', info.colors[0], info.colors[1]), transparent: true }))
      sign.position.set(x, Math.min(h - 2, 5 + rng() * 9), z + d / 2 + 0.06)
      group.add(sign)
    }
    return mesh
  }

  // city grid
  for (let gx = 0; gx < 3; gx++) {
    for (let gz = 0; gz < 3; gz++) {
      const bx = 35 + gx * 29
      const bz = -95 + gz * 29
      const n = 1 + Math.floor(rng() * 2)
      for (let k = 0; k < n; k++) {
        const w = 8 + rng() * 8
        const d = 8 + rng() * 8
        const x = bx + (rng() - 0.5) * (18 - w)
        const z = bz + (rng() - 0.5) * (18 - d)
        let h = 8 + rng() * 20
        if (theme === 'cyber') h += 10 + rng() * 24
        if (theme === 'wasteland') h *= 0.8
        addBuilding(x, z, w, d, h)
      }
    }
  }
  // a few signature towers
  addBuilding(100, -70, 15, 15, theme === 'cyber' ? 58 : 32)
  addBuilding(22, -112, 13, 13, theme === 'cyber' ? 44 : 26)
  addBuilding(96, -20, 12, 18, theme === 'cyber' ? 48 : 24)

  // neon billboards / city signs (all maps)
  const billboardTexts = theme === 'cyber' ? ['PANA MIGUEL', 'NEÓN', 'LEUS'] : ['MEME SHOTER', 'PANA MIGUEL', 'BATTLE ROYALE']
  billboardTexts.forEach((t, i) => {
    const board = new THREE.Mesh(new THREE.PlaneGeometry(12, 3.4), new THREE.MeshBasicMaterial({ map: signTexture(t, info.colors[0], info.colors[1]), transparent: true }))
    board.position.set(63 + i * 2, 11 + i * 4, -80 + i * 15)
    board.rotation.y = -Math.PI / 2 + (i - 1) * 0.1
    group.add(board)
  })

  // street lamps
  const lampMat = new THREE.MeshStandardMaterial({ color: '#2b2d2f', roughness: 0.8 })
  const bulbMat = new THREE.MeshBasicMaterial({ color: theme === 'cyber' ? '#33f4ff' : '#ffd38a' })
  for (let i = 0; i < 18; i++) {
    const lx = 20 + (i % 6) * 15
    const lz = -100 + Math.floor(i / 6) * 28
    const lamp = new THREE.Group()
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.11, 4.6, 5), lampMat)
    pole.position.y = 2.3
    lamp.add(pole)
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.24, 6, 6), bulbMat)
    bulb.position.set(0.25, 4.55, 0)
    lamp.add(bulb)
    lamp.position.set(lx, 0, lz)
    group.add(lamp)
  }

  // ---------- RURAL ----------
  const barn = new THREE.Group()
  const barnMat = new THREE.MeshStandardMaterial({ color: theme === 'wasteland' ? '#4f3f36' : '#9e3b33', roughness: 0.95 })
  const barnBody = new THREE.Mesh(new THREE.BoxGeometry(12, 6, 9), barnMat)
  barnBody.position.y = 3
  barnBody.castShadow = true
  barn.add(barnBody)
  const roof = new THREE.Mesh(new THREE.ConeGeometry(9.2, 4.5, 4), new THREE.MeshStandardMaterial({ color: '#4c332b', roughness: 1 }))
  roof.rotation.y = Math.PI / 4
  roof.position.y = 8.2
  roof.castShadow = true
  barn.add(roof)
  barn.position.set(-63, 0, 58)
  group.add(barn)
  addCollider(colliders, -63, 58, 12, 9, 0, 10)

  // farm houses
  ;[
    [-92, 38, 8, 7, 5],
    [-42, 92, 9, 8, 6],
    [-98, 93, 7, 6, 4.5],
    [-38, 42, 7, 7, 5],
  ].forEach(([x, z, w, d, h]) => {
    addBuilding(x, z, w, d, h, { roof: theme === 'cyber' ? '#161224' : '#5c3b2c', trim: '#43362b' })
  })

  // crop rows
  const cropMat = new THREE.MeshStandardMaterial({ color: theme === 'wasteland' ? '#5c5733' : '#798c34', roughness: 1 })
  for (let i = 0; i < 8; i++) {
    const row = new THREE.Mesh(new THREE.BoxGeometry(40, 0.35, 1.2), cropMat)
    row.position.set(-79, 0.16, 73 + i * 3)
    row.castShadow = true
    group.add(row)
  }
  // hay bales
  const hayMat = new THREE.MeshStandardMaterial({ color: '#c6a34f', roughness: 1 })
  for (let i = 0; i < 5; i++) {
    const hay = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 1.4, 8), hayMat)
    hay.rotation.z = Math.PI / 2
    hay.position.set(-50 + i * 2.5, 1.1, 68 + rng() * 12)
    hay.castShadow = true
    group.add(hay)
  }
  // trees
  for (let i = 0; i < 32; i++) {
    const x = -110 + rng() * 78
    const z = 8 + rng() * 108
    if (Math.hypot(x + 63, z - 58) < 14) continue
    const h = 4 + rng() * 4
    const tree = makeTree(theme, rng, h)
    tree.position.set(x, 0, z)
    group.add(tree)
    addCollider(colliders, x, z, 0.7, 0.7, 0, h)
  }
  // fences
  const fenceMat = new THREE.MeshStandardMaterial({ color: '#6e5239', roughness: 1 })
  for (let i = 0; i < 15; i++) {
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.15, 1.4, 0.15), fenceMat)
    post.position.set(-108 + i * 2.2, 0.7, 26)
    group.add(post)
  }

  // chickens
  const chickens = []
  for (let i = 0; i < 10; i++) {
    const c = makeChicken()
    const x = -72 + (rng() - 0.5) * 46
    const z = 52 + (rng() - 0.5) * 50
    c.position.set(x, 0, z)
    c.scale.setScalar(1.2)
    group.add(c)
    chickens.push({ mesh: c, x, z, alive: true, phase: rng() * 6, speed: 0.4 + rng() * 0.7 })
  }

  // ---------- VOLCANO / ROCKS ----------
  if (theme !== 'cyber') {
    const cone = new THREE.Mesh(new THREE.ConeGeometry(43, 46, 9, 3), new THREE.MeshStandardMaterial({ color: theme === 'wasteland' ? '#5a4d44' : '#64554a', roughness: 1, flatShading: true }))
    cone.position.set(82, 23, 88)
    cone.castShadow = true
    group.add(cone)
    const crater = new THREE.Mesh(new THREE.CircleGeometry(8, 20), new THREE.MeshBasicMaterial({ color: theme === 'wasteland' ? '#9a6b5c' : '#ff752b' }))
    crater.rotation.x = -Math.PI / 2
    crater.position.set(82, 46.1, 88)
    group.add(crater)
    // cracks / lava flows
    for (let i = 0; i < 5; i++) {
      const flow = new THREE.Mesh(new THREE.PlaneGeometry(2 + rng() * 4, 22 + rng() * 18), new THREE.MeshBasicMaterial({ color: '#ff5a20', transparent: true, opacity: 0.85 }))
      flow.rotation.x = -Math.PI / 2
      flow.rotation.z = -0.4 + rng() * 0.8
      flow.position.set(68 + rng() * 28, 0.09, 70 + rng() * 22)
      group.add(flow)
      lavaZones.push({ x: flow.position.x, z: flow.position.z, r: 2.5 })
    }
    // rocks
    const rockMat = new THREE.MeshStandardMaterial({ color: '#4d4540', roughness: 1, flatShading: true })
    for (let i = 0; i < 26; i++) {
      const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(0.8 + rng() * 2.6, 0), rockMat)
      const a = rng() * Math.PI * 2
      const r = 45 + rng() * 72
      const rx = Math.cos(a) * r
      const rz = Math.sin(a) * r + 30
      if (Math.hypot(rx - 48, rz - 32) < 16) continue
      rock.position.set(rx, 0.6 + rng() * 0.7, rz)
      rock.rotation.set(rng() * 3, rng() * 3, rng() * 3)
      rock.castShadow = true
      group.add(rock)
    }
  } else {
    // cyber district extra towers in the far south
    for (let i = 0; i < 12; i++) {
      const x = 40 + rng() * 70
      const z = 35 + rng() * 70
      addBuilding(x, z, 7 + rng() * 5, 7 + rng() * 5, 18 + rng() * 38)
    }
  }

  // ---------- MOUNTAIN BORDER ----------
  const mountainMat = new THREE.MeshStandardMaterial({
    color: theme === 'cyber' ? '#161126' : theme === 'wasteland' ? '#48423e' : '#5d5747',
    roughness: 1,
    flatShading: true,
  })
  for (let i = 0; i < 30; i++) {
    const a = (i / 30) * Math.PI * 2
    const r = 138 + rng() * 35
    const h = 16 + rng() * 32
    const m = new THREE.Mesh(new THREE.ConeGeometry(9 + rng() * 15, h, 5), mountainMat)
    m.position.set(Math.cos(a) * r, h / 2 - 2, Math.sin(a) * r)
    m.rotation.y = rng() * 3
    group.add(m)
  }

  // ---------- BUNKER (wasteland) ----------
  if (theme === 'wasteland') {
    const bunkerMat = new THREE.MeshStandardMaterial({ color: '#4c4d48', roughness: 0.95 })
    const bunker = new THREE.Group()
    const back = new THREE.Mesh(new THREE.BoxGeometry(16, 6, 1.2), bunkerMat)
    back.position.set(0, 3, -6)
    const left = new THREE.Mesh(new THREE.BoxGeometry(1.2, 6, 12), bunkerMat)
    left.position.set(-7.4, 3, 0)
    const right = left.clone()
    right.position.x = 7.4
    const roofB = new THREE.Mesh(new THREE.BoxGeometry(16, 1, 13), bunkerMat)
    roofB.position.set(0, 6.1, 0)
    bunker.add(back, left, right, roofB)
    bunker.position.set(-82, 0, 76)
    group.add(bunker)
    addCollider(colliders, -82, 70, 16, 1.2, 0, 6)
    addCollider(colliders, -89.4, 76, 1.2, 12, 0, 6)
    addCollider(colliders, -74.6, 76, 1.2, 12, 0, 6)
    addCollider(colliders, -82, 80.5, 16, 1, 6, 1)
  }

  // ---------- PROPS / LOOT ----------
  const crateMat = new THREE.MeshStandardMaterial({ color: '#92703e', roughness: 0.85 })
  const metalMat = new THREE.MeshStandardMaterial({ color: '#59616b', metalness: 0.6, roughness: 0.55 })
  for (let i = 0; i < 28; i++) {
    const x = -112 + rng() * 224
    const z = -112 + rng() * 224
    if (Math.hypot(x, z) < 18) continue
    const isMetal = rng() > 0.7
    const s = 0.8 + rng() * 0.7
    if (Math.hypot(x - 48, z - 32) < 15) continue
    const crate = new THREE.Mesh(new THREE.BoxGeometry(s, s, s), isMetal ? metalMat : crateMat)
    crate.position.set(x, s / 2, z)
    crate.rotation.y = rng() * Math.PI
    crate.castShadow = true
    group.add(crate)
    addCollider(colliders, x, z, s, s, 0, s)
  }

  // ---------- DEPLOYMENT ZONE (spawn staging area) ----------
  // Gives the player cover, landmarks and visual interest right where the match starts.
  const dzX = 48
  const dzZ = 42
  const accent = info.colors[0]
  const accent2 = info.colors[1]
  const padMat = new THREE.MeshStandardMaterial({ color: theme === 'cyber' ? '#141125' : theme === 'wasteland' ? '#37342e' : '#2b2d2b', roughness: 0.85, metalness: 0.35 })
  const pad = new THREE.Mesh(new THREE.CylinderGeometry(9.7, 10.1, 0.14, 56), padMat)
  pad.position.set(dzX, 0.07, dzZ)
  pad.receiveShadow = true
  group.add(pad)
  ;[[9.5, accent, 0.9, 0.24], [7.9, accent2, 0.55, 0.1], [4.6, accent, 0.3, 0.08]].forEach(([r, col, op, tube]) => {
    const ring = new THREE.Mesh(new THREE.RingGeometry(r - tube, r, 64), new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: op, side: THREE.DoubleSide }))
    ring.rotation.x = -Math.PI / 2
    ring.position.set(dzX, 0.16, dzZ)
    group.add(ring)
  })
  // painted H landing marker
  const paintMat = new THREE.MeshBasicMaterial({ color: accent2, transparent: true, opacity: 0.5 })
  ;[[-1.55, 0, 0.5, 3.4], [1.55, 0, 0.5, 3.4], [0, 0, 3.6, 0.5]].forEach(([ox, oz, w, d]) => {
    const bar = new THREE.Mesh(new THREE.PlaneGeometry(w, d), paintMat)
    bar.rotation.x = -Math.PI / 2
    bar.position.set(dzX + ox, 0.18, dzZ + oz)
    group.add(bar)
  })

  // cargo containers (solid cover, no floating geometry)
  const containerColors = theme === 'cyber'
    ? ['#1d3c55', '#43204b', '#233f3a']
    : theme === 'wasteland'
      ? ['#5d5246', '#4b4a3e', '#63503b']
      : ['#3e5a49', '#6b3d33', '#4a5261']
  const containerTrim = new THREE.MeshStandardMaterial({ color: '#22262a', metalness: 0.55, roughness: 0.55 })
  function container(x, z, rot, color, w = 6.2, h = 2.7, d = 2.6) {
    const g = new THREE.Group()
    const body = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshStandardMaterial({ color, metalness: 0.5, roughness: 0.62 }))
    body.position.y = h / 2
    body.castShadow = true
    body.receiveShadow = true
    g.add(body)
    for (let i = 1; i < 7; i++) {
      const rib = new THREE.Mesh(new THREE.BoxGeometry(0.11, h * 0.94, d + 0.08), containerTrim)
      rib.position.set(-w / 2 + (i / 7) * w, h / 2, 0)
      g.add(rib)
    }
    const frame = new THREE.Mesh(new THREE.BoxGeometry(w + 0.1, 0.13, d + 0.1), containerTrim)
    frame.position.y = h
    g.add(frame)
    g.position.set(x, 0, z)
    g.rotation.y = rot
    group.add(g)
    const swap = Math.abs(Math.sin(rot)) > 0.7
    addCollider(colliders, x, z, swap ? d : w, swap ? w : d, 0, h)
    return g
  }
  container(33.5, 41, 0.04, containerColors[0])
  container(33.5, 34.6, 0.04, containerColors[2])
  container(62.4, 30.5, Math.PI / 2, containerColors[1])
  container(67, 43.5, 0.09, containerColors[2])
  // stacked crates next to the pads
  for (let i = 0; i < 5; i++) {
    const s = 0.9 + (i % 3) * 0.28
    const crate = new THREE.Mesh(new THREE.BoxGeometry(s, s, s), i % 2 ? metalMat : crateMat)
    crate.position.set(57 + (i % 2) * 1.5, s / 2 + (i > 2 ? 1.2 : 0), 52 + Math.floor(i / 2) * 1.3)
    crate.rotation.y = i * 0.5
    crate.castShadow = true
    group.add(crate)
    addCollider(colliders, crate.position.x, crate.position.z, s, s, 0, s)
  }

  // deploy-zone gateway arch facing the city
  const gateZ = 4
  const gateMat = new THREE.MeshStandardMaterial({ color: '#2b2e33', metalness: 0.7, roughness: 0.4 })
  ;[-9, 9].forEach((ox) => {
    const pole = new THREE.Mesh(new THREE.BoxGeometry(0.55, 9.6, 0.55), gateMat)
    pole.position.set(dzX + ox, 4.8, gateZ)
    pole.castShadow = true
    group.add(pole)
    addCollider(colliders, dzX + ox, gateZ, 0.7, 0.7, 0, 9.6)
    const tip = new THREE.Mesh(new THREE.SphereGeometry(0.24, 6, 6), new THREE.MeshBasicMaterial({ color: accent }))
    tip.position.set(dzX + ox, 9.75, gateZ)
    group.add(tip)
  })
  const gateSign = new THREE.Mesh(
    new THREE.PlaneGeometry(16.4, 2.7),
    new THREE.MeshBasicMaterial({ map: signTexture('MEME SHOTER', accent, accent2), transparent: true, side: THREE.DoubleSide })
  )
  gateSign.position.set(dzX, 8.4, gateZ)
  group.add(gateSign)
  const gateBar = new THREE.Mesh(new THREE.BoxGeometry(17.2, 0.3, 0.45), gateMat)
  gateBar.position.set(dzX, 9.9, gateZ)
  group.add(gateBar)

  // jersey barriers + sandbags framing the pad (leave the city side open)
  const barrierMat = new THREE.MeshStandardMaterial({ color: theme === 'cyber' ? '#3b3450' : '#b7afa0', roughness: 0.95 })
  ;[
    [-8.4, 8.6, 0.2], [-5.6, 11.2, 0.45], [8.8, 7.4, -0.15],
    [11.5, 3.8, -0.9], [-11.6, 2.6, 0.9],
  ].forEach(([ox, oz, rot]) => {
    const b = new THREE.Mesh(new THREE.BoxGeometry(3.4, 1.0, 0.55), barrierMat)
    b.position.set(dzX + ox, 0.5, dzZ + oz)
    b.rotation.y = rot
    b.castShadow = true
    group.add(b)
    addCollider(colliders, b.position.x, b.position.z, 3.4, 0.7, 0, 1)
  })
  const bagMat = new THREE.MeshStandardMaterial({ color: '#6e6248', roughness: 1 })
  for (let i = 0; i < 8; i++) {
    const bag = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.42, 0.72), bagMat)
    bag.position.set(dzX - 12.2 + (i % 4) * 1.16, 0.24 + Math.floor(i / 4) * 0.42, dzZ - 3.4)
    bag.rotation.y = (i % 4) * 0.05
    group.add(bag)
  }

  // approach road from the pad to the city gate
  const approach = new THREE.Mesh(new THREE.PlaneGeometry(11, 31), roadMat)
  approach.rotation.x = -Math.PI / 2
  approach.position.set(dzX, 0.034, 18.5)
  group.add(approach)
  for (let i = 0; i < 5; i++) {
    const dash = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 3.4), lineMat)
    dash.rotation.x = -Math.PI / 2
    dash.position.set(dzX, 0.05, 7 + i * 5.6)
    group.add(dash)
  }

  // landing lights
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2 + Math.PI / 8
    const lx = dzX + Math.cos(a) * 10.9
    const lz = dzZ + Math.sin(a) * 10.9
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 0.52, 5), gateMat)
    pole.position.set(lx, 0.26, lz)
    group.add(pole)
    const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.13, 6, 6), new THREE.MeshBasicMaterial({ color: i % 2 ? accent : accent2 }))
    lamp.position.set(lx, 0.58, lz)
    group.add(lamp)
  }

  // loot positions — deliberately spread across every region
  const handLoot = [
    [2, 12], [-8, -12], [24, -20], [51, -37], [80, -73], [103, -18], [49, -107], [61, 41],
    [-45, 26], [-88, 55], [-34, 74], [-66, 95], [-100, 22], [-24, 101], [-52, 40],
    [64, 48], [92, 106], [43, 78], [18, 60], [12, 95], [-15, 46],
  ]
  handLoot.forEach(([x, z]) => {
    if (Math.hypot(x, z) > 16) lootSpots.push({ x, z })
  })
  // filter loot spots out of colliders
  const safeLoot = lootSpots.filter((p) => !colliders.some((c) => p.x > c.minX - 1 && p.x < c.maxX + 1 && p.z > c.minZ - 1 && p.z < c.maxZ + 1))
  lootSpots.length = 0
  lootSpots.push(...safeLoot.slice(0, 16))

  // decorative glowing pickups at loot spots (replaced by gameplay loot objects)
  const markers = []
  lootSpots.forEach((p) => {
    const marker = new THREE.Group()
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.9, 5, 12, 1, true), new THREE.MeshBasicMaterial({ color: info.colors[0], transparent: true, opacity: 0.12, side: THREE.DoubleSide, depthWrite: false }))
    beam.position.y = 2.5
    marker.add(beam)
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.65, 0.95, 20), new THREE.MeshBasicMaterial({ color: info.colors[0], transparent: true, opacity: 0.8, side: THREE.DoubleSide }))
    ring.rotation.x = -Math.PI / 2
    ring.position.y = 0.07
    marker.add(ring)
    marker.position.set(p.x, 0, p.z)
    group.add(marker)
    markers.push({ group: marker, ring, beam })
  })

  // floating embers / ash / rain of neon
  const particleCount = theme === 'cyber' ? 180 : 140
  const pGeo = new THREE.BufferGeometry()
  const pArr = []
  for (let i = 0; i < particleCount; i++) pArr.push((rng() - 0.5) * 240, rng() * 50, (rng() - 0.5) * 240)
  pGeo.setAttribute('position', new THREE.Float32BufferAttribute(pArr, 3))
  const pMat = new THREE.PointsMaterial({
    color: theme === 'cyber' ? '#ff64df' : theme === 'wasteland' ? '#b9ada2' : '#ffb066',
    size: theme === 'cyber' ? 0.32 : 0.24,
    transparent: true,
    opacity: 0.65,
    depthWrite: false,
    blending: theme === 'cyber' ? THREE.AdditiveBlending : THREE.NormalBlending,
  })
  const particles = new THREE.Points(pGeo, pMat)
  group.add(particles)

  // ---------- UPDATE ----------
  let elapsed = 0
  function update(dt, t) {
    elapsed += dt
    const pos = pGeo.attributes.position
    for (let i = 0; i < particleCount; i++) {
      let y = pos.getY(i)
      y -= dt * (theme === 'cyber' ? 2.4 : 1.1)
      if (y < 0) y = 48
      pos.setY(i, y)
      if (theme === 'cyber') pos.setX(i, pos.getX(i) + Math.sin(t * 0.4 + i) * dt * 0.5)
    }
    pos.needsUpdate = true
    stageRing2.position.y = 1.8 + Math.sin(t * 1.4) * 0.12
    stageRing2.rotation.z += dt * 0.2
    plazaRing.material.opacity = 0.45 + Math.sin(t * 2) * 0.2
    markers.forEach((m, i) => {
      m.ring.rotation.z += dt * (0.5 + (i % 3) * 0.25)
      m.ring.material.opacity = 0.55 + Math.sin(t * 2.4 + i) * 0.3
      m.beam.material.opacity = 0.08 + Math.sin(t * 1.7 + i) * 0.04
    })
    // chickens peck / wander
    chickens.forEach((c) => {
      if (!c.alive) return
      c.phase += dt
      c.mesh.position.y = Math.abs(Math.sin(c.phase * 3)) * 0.06
      c.mesh.rotation.y = Math.sin(c.phase * 0.6) * 0.8
    })
  }

  return {
    group,
    stage,
    colliders,
    lootSpots,
    markerGroups: markers,
    chickens,
    lavaZones,
    spawn: { x: 48, z: 32 },
    half: HALF,
    theme,
    info,
    update,
    maxParticles: particleCount,
  }
}

export function disposeWorld(scene, world) {
  if (!world) return
  scene.remove(world.group)
  world.group.traverse((obj) => {
    if (obj.geometry) obj.geometry.dispose()
    if (obj.material) {
      const mats = Array.isArray(obj.material) ? obj.material : [obj.material]
      mats.forEach((m) => {
        if (m.map) m.map.dispose()
        m.dispose()
      })
    }
  })
}
