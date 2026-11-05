import * as THREE from '../vendor/three.module.min.js'

const mat = (color, opts = {}) =>
  new THREE.MeshStandardMaterial({ color, roughness: 0.82, metalness: 0.08, flatShading: true, ...opts })

function box(w, h, d, color, opts) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), typeof color === 'string' ? mat(color, opts) : color)
  m.castShadow = true
  return m
}
function sphere(r, color, opts = {}) {
  const { seg, seg2, ...rest } = opts
  const m = new THREE.Mesh(new THREE.SphereGeometry(r, seg || 8, seg2 || 6), typeof color === 'string' ? mat(color, rest) : color)
  m.castShadow = true
  return m
}
function cap(r, len, color, opts = {}) {
  const m = new THREE.Mesh(new THREE.CapsuleGeometry(r, len, 3, opts.seg || 6), typeof color === 'string' ? mat(color, opts) : color)
  m.castShadow = true
  return m
}

export function buildCharacter(char, { menu = false } = {}) {
  const g = new THREE.Group()
  const skin = char.id === 'pana' ? '#e2ac72' : char.id === 'troll' ? '#f0f0ea' : char.id === 'nero' ? '#9b7d62' : char.id === 'chad' ? '#b9b3ad' : '#d8a77c'
  const cloth = char.color
  const accent = char.accent
  const isCat = char.id === 'pana' || char.id === 'hacker'

  // legs
  const legs = []
  for (const side of [-1, 1]) {
    const leg = cap(0.12, 0.48, char.id === 'tulia' || char.id === 'abuela' ? '#5b4350' : '#30343b')
    leg.position.set(side * 0.17, 0.48, 0)
    g.add(leg)
    legs.push(leg)
    const boot = box(0.25, 0.16, 0.34, accent)
    boot.position.set(side * 0.17, 0.09, 0.04)
    g.add(boot)
  }

  // torso
  const torsoW = char.id === 'chad' ? 0.86 : 0.62
  const torso = box(torsoW, 0.62, 0.36, cloth)
  torso.position.y = 1.14
  g.add(torso)
  const vest = box(torsoW * 0.82, 0.44, 0.4, accent, { roughness: 0.7 })
  vest.position.set(0, 1.18, 0.02)
  g.add(vest)
  // belt
  const belt = box(torsoW * 0.9, 0.12, 0.38, '#24262b')
  belt.position.y = 0.83
  g.add(belt)

  // arms
  const arms = []
  for (const side of [-1, 1]) {
    const arm = new THREE.Group()
    const upper = cap(0.1, 0.34, char.id === 'abuelo' ? skin : cloth)
    upper.position.y = -0.2
    arm.add(upper)
    const hand = sphere(0.11, skin, { seg: 6 })
    hand.position.y = -0.46
    arm.add(hand)
    arm.position.set(side * (torsoW / 2 + 0.11), 1.4, 0)
    arm.rotation.z = side * 0.16
    g.add(arm)
    arms.push(arm)
  }

  // head
  const head = sphere(isCat ? 0.3 : 0.26, skin, { seg: 10, seg2: 8 })
  head.position.y = 1.78
  if (char.id === 'chad') head.scale.set(1.08, 0.96, 1)
  g.add(head)

  // ears
  if (isCat) {
    for (const side of [-1, 1]) {
      const ear = new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.27, 4), mat(skin))
      ear.position.set(side * 0.2, 2.02, 0)
      ear.rotation.z = side * 0.16
      ear.castShadow = true
      g.add(ear)
    }
    const muzzle = sphere(0.13, '#f7dcc0', { seg: 7 })
    muzzle.position.set(0, 1.71, 0.23)
    muzzle.scale.set(1.2, 0.7, 0.7)
    g.add(muzzle)
    const nose = sphere(0.035, '#3a2520', { seg: 5 })
    nose.position.set(0, 1.76, 0.34)
    g.add(nose)
    // whiskers
    for (const side of [-1, 1]) {
      const wh = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.008, 0.008), mat('#f5e6d0'))
      wh.position.set(side * 0.24, 1.72, 0.31)
      wh.rotation.z = side * 0.18
      g.add(wh)
    }
    // tail
    const tail = new THREE.Group()
    for (let i = 0; i < 5; i++) {
      const seg = sphere(0.075 - i * 0.008, skin, { seg: 6 })
      seg.position.set(0, 0.92 + i * 0.12, -0.26 - i * 0.055)
      tail.add(seg)
    }
    tail.rotation.x = 0.2
    g.add(tail)
    g.userData.tail = tail
  }

  // eyes
  for (const side of [-1, 1]) {
    const eye = sphere(0.055, char.id === 'troll' ? '#111' : '#1a1718', { seg: 6 })
    eye.position.set(side * 0.1, 1.8, 0.24)
    g.add(eye)
    if (char.id !== 'troll') {
      const glint = sphere(0.018, '#fff', { seg: 4 })
      glint.position.set(side * 0.1 + 0.015, 1.82, 0.285)
      g.add(glint)
    }
  }

  if (char.id === 'troll') {
    const smile = new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.018, 4, 10, Math.PI), mat('#111'))
    smile.position.set(0, 1.66, 0.245)
    smile.rotation.z = Math.PI
    g.add(smile)
    const brow = box(0.34, 0.02, 0.02, '#111')
    brow.position.set(0, 1.91, 0.24)
    g.add(brow)
  }

  if (char.id === 'tulia') {
    // hair curlers
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2
      const curler = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.13, 5), mat(i % 2 ? '#e65e97' : '#7b4dc4'))
      curler.position.set(Math.cos(a) * 0.24, 1.94 + Math.sin(i) * 0.04, Math.sin(a) * 0.2)
      curler.rotation.z = Math.PI / 2
      g.add(curler)
    }
    const apron = box(0.46, 0.55, 0.06, '#f3d7e4')
    apron.position.set(0, 1.05, 0.21)
    g.add(apron)
  }

  if (char.id === 'chad') {
    const jaw = box(0.34, 0.16, 0.28, skin)
    jaw.position.set(0, 1.63, 0.07)
    g.add(jaw)
    const shoulders = box(1.02, 0.2, 0.38, cloth)
    shoulders.position.y = 1.5
    g.add(shoulders)
  }

  if (char.id === 'hacker') {
    const hood = sphere(0.36, '#1b1f33', { seg: 8 })
    hood.position.set(0, 1.82, -0.03)
    hood.scale.set(1.1, 1.1, 1)
    g.add(hood)
    const visor = box(0.44, 0.12, 0.08, '#38f6ff', { emissive: '#18d9ff', emissiveIntensity: 1.6, roughness: 0.2 })
    visor.position.set(0, 1.81, 0.28)
    g.add(visor)
  }

  if (char.id === 'abuelo') {
    const cap2 = box(0.56, 0.1, 0.54, '#3c4d78')
    cap2.position.y = 1.99
    g.add(cap2)
    const brim = box(0.5, 0.04, 0.22, '#2c3a5c')
    brim.position.set(0, 1.95, 0.3)
    g.add(brim)
    const chancla = new THREE.Mesh(new THREE.BoxGeometry(0.17, 0.05, 0.36), mat('#f2b632'))
    chancla.position.set(0.55, 0.9, 0.1)
    chancla.rotation.x = 0.5
    g.add(chancla)
  }

  if (char.id === 'abuela') {
    const bun = sphere(0.18, '#cfcfcf', { seg: 6 })
    bun.position.set(0, 2.02, -0.16)
    g.add(bun)
    const apron = box(0.52, 0.65, 0.06, '#f0d2dc')
    apron.position.set(0, 1.0, 0.21)
    g.add(apron)
    const broom = new THREE.Group()
    const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 1.6, 5), mat('#8d6139'))
    stick.position.y = 0.3
    broom.add(stick)
    const bristles = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.38, 6), mat('#d9b45c'))
    bristles.position.y = -0.65
    broom.add(bristles)
    broom.position.set(0.58, 1.0, 0.06)
    broom.rotation.z = -0.15
    g.add(broom)
  }

  if (char.id === 'nero') {
    const helmet = sphere(0.37, '#bfe9ff', { transparent: true, opacity: 0.32, roughness: 0.1, metalness: 0.2 })
    helmet.position.y = 1.8
    g.add(helmet)
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(0.38, 0.035, 6, 16), mat('#31ffc8', { emissive: '#31ffc8', emissiveIntensity: 1 }))
    ring2.position.y = 1.8
    ring2.rotation.x = Math.PI / 2
    g.add(ring2)
    const antenna = box(0.025, 0.28, 0.025, '#31ffc8', { emissive: '#31ffc8', emissiveIntensity: 0.8 })
    antenna.position.set(0.18, 2.15, 0)
    g.add(antenna)
    const boombox = box(0.42, 0.28, 0.18, '#26263c')
    boombox.position.set(-0.55, 1.0, 0)
    g.add(boombox)
  }

  g.userData.legs = legs
  g.userData.arms = arms
  g.userData.head = head
  g.userData.isCat = isCat
  g.traverse((o) => {
    if (o.isMesh) {
      o.castShadow = true
      o.receiveShadow = true
    }
  })
  if (menu) {
    g.scale.setScalar(1.32)
  }
  return g
}

export function buildBotModel(color = '#8b5e3c') {
  const g = new THREE.Group()
  const skin = '#c99a72'
  const jacket = color
  const legs = []
  for (const side of [-1, 1]) {
    const leg = cap(0.09, 0.42, '#2b3038')
    leg.position.set(side * 0.14, 0.43, 0)
    g.add(leg)
    legs.push(leg)
    const boot = box(0.2, 0.12, 0.28, '#181a1e')
    boot.position.set(side * 0.14, 0.07, 0.02)
    g.add(boot)
  }
  const torso = box(0.54, 0.58, 0.32, jacket)
  torso.position.y = 1.04
  g.add(torso)
  const vest = box(0.46, 0.4, 0.37, '#252a33')
  vest.position.y = 1.1
  g.add(vest)
  const head = sphere(0.24, skin, { seg: 8, seg2: 6 })
  head.position.y = 1.64
  g.add(head)
  const helmet = sphere(0.265, '#2d3542', { seg: 8 })
  helmet.position.y = 1.7
  helmet.scale.y = 0.7
  g.add(helmet)
  const visor = box(0.34, 0.08, 0.06, '#5de8ff', { emissive: '#2cd7ff', emissiveIntensity: 0.8 })
  visor.position.set(0, 1.62, 0.22)
  g.add(visor)
  const arms = []
  for (const side of [-1, 1]) {
    const arm = new THREE.Group()
    const upper = cap(0.075, 0.32, jacket)
    upper.position.y = -0.18
    arm.add(upper)
    const hand = sphere(0.09, skin, { seg: 5 })
    hand.position.y = -0.42
    arm.add(hand)
    arm.position.set(side * 0.38, 1.28, 0)
    arm.rotation.z = side * 0.2
    g.add(arm)
    arms.push(arm)
  }
  // backpack
  const pack = box(0.38, 0.46, 0.2, '#39404a')
  pack.position.set(0, 1.12, -0.26)
  g.add(pack)
  // rifle prop
  const rifle = box(0.075, 0.075, 0.62, '#20242b')
  rifle.position.set(0.27, 1.05, 0.3)
  rifle.rotation.x = 0.05
  g.add(rifle)
  const mag = box(0.05, 0.16, 0.1, '#11151a')
  mag.position.set(0.27, 0.93, 0.22)
  g.add(mag)
  g.traverse((o) => {
    if (o.isMesh) {
      o.castShadow = true
      o.receiveShadow = true
    }
  })
  g.userData.legs = legs
  g.userData.arms = arms
  return g
}

export function buildGun(weapon, skinColor = '#d8a77c', sleeveColor = '#2a2f3a') {
  const g = new THREE.Group()
  const body = new THREE.MeshStandardMaterial({ color: weapon.color, roughness: 0.38, metalness: 0.6, flatShading: true, depthTest: false, depthWrite: false })
  const dark = new THREE.MeshStandardMaterial({ color: weapon.accent, roughness: 0.48, metalness: 0.55, flatShading: true, depthTest: false, depthWrite: false })
  const skin = new THREE.MeshStandardMaterial({ color: skinColor, roughness: 0.9, flatShading: true, depthTest: false, depthWrite: false })
  const sleeve = new THREE.MeshStandardMaterial({ color: sleeveColor, roughness: 0.95, flatShading: true, depthTest: false, depthWrite: false })
  const add = (mesh, x = 0, y = 0, z = 0) => {
    mesh.position.set(x, y, z)
    mesh.renderOrder = 999
    g.add(mesh)
    return mesh
  }
  let muzzleZ = -0.85
  const id = weapon.id

  if (id === 'pio' || id === 'deagle') {
    add(new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 0.4), body), 0, 0, 0)
    add(new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.055, 0.28), dark), 0, 0.01, -0.3)
    add(new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.24, 0.13), dark), 0, -0.15, 0.09)
    add(new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.03, 0.12), body), 0, 0.09, -0.24)
    muzzleZ = -0.48
  } else if (id === 'mp5') {
    add(new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.14, 0.55), body), 0, 0, -0.1)
    add(new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.3, 6), dark), 0, 0.01, -0.5).rotation.x = Math.PI / 2
    add(new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.28, 0.12), dark), 0, -0.19, 0.02)
    add(new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.26), dark), 0, 0.01, 0.3)
    muzzleZ = -0.68
  } else if (id === 'ak' || id === 'minigun') {
    if (id === 'minigun') {
      add(new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.55, 8), body), 0, 0, -0.34).rotation.x = Math.PI / 2
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2
        const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.66, 5), dark)
        barrel.position.set(Math.cos(a) * 0.12, Math.sin(a) * 0.12, -0.58)
        barrel.rotation.x = Math.PI / 2
        add(barrel, Math.cos(a) * 0.12, Math.sin(a) * 0.12, -0.58)
      }
      add(new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.28, 0.3), dark), 0, 0, 0.1)
      muzzleZ = -0.95
    } else {
      add(new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.13, 0.68), body), 0, 0, -0.2)
      add(new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.5, 6), dark), 0, 0.01, -0.72).rotation.x = Math.PI / 2
      add(new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.3, 0.16), dark), 0, -0.2, -0.04)
      add(new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.15, 0.36), body), 0, -0.01, 0.3)
      const mag = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.22, 0.12), dark)
      mag.position.set(0, -0.18, -0.16)
      mag.rotation.x = 0.25
      add(mag, 0, -0.18, -0.16)
      muzzleZ = -1.0
    }
  } else if (id === 'shotgun') {
    add(new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.15, 0.62), body), 0, 0, -0.12)
    add(new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.7, 7), dark), 0, 0.01, -0.6).rotation.x = Math.PI / 2
    add(new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.24, 0.16), dark), 0, -0.17, -0.06)
    add(new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.14, 0.35), body), 0, -0.01, 0.34)
    muzzleZ = -1.0
  } else if (id === 'awm') {
    add(new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.13, 0.9), body), 0, 0, -0.2)
    add(new THREE.Mesh(new THREE.CylinderGeometry(0.027, 0.027, 0.8, 6), dark), 0, 0.01, -0.85).rotation.x = Math.PI / 2
    add(new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.25, 0.14), dark), 0, -0.17, -0.02)
    const scope = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.3, 8), dark)
    scope.rotation.x = Math.PI / 2
    add(scope, 0, 0.15, -0.25)
    add(new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.14, 0.4), body), 0, -0.01, 0.4)
    muzzleZ = -1.28
  } else if (id === 'chisme') {
    add(new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.5, 8), body), 0, 0, 0.05).rotation.x = Math.PI / 2
    add(new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.07, 0.7, 6), dark), 0, 0.01, -0.55).rotation.x = Math.PI / 2
    const tank = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.35, 8), dark)
    tank.position.set(0, -0.16, 0.1)
    add(tank, 0, -0.16, 0.1)
    muzzleZ = -0.95
  } else if (id === 'memes') {
    add(new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.13, 0.7, 8), body), 0, 0, -0.25).rotation.x = Math.PI / 2
    add(new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.15, 0.22, 8), dark), 0, 0, -0.68).rotation.x = Math.PI / 2
    add(new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.2, 0.16), dark), 0, -0.17, 0.02)
    add(new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.12, 0.3), body), 0, 0.06, 0.25)
    muzzleZ = -0.85
  } else if (id === 'bate') {
    add(new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.08, 0.9, 7), body), 0, 0.12, -0.35).rotation.x = 1.19
    add(new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.09, 0.18, 7), dark), 0, 0.56, -0.6)
    muzzleZ = -0.8
  } else if (id === 'chancla') {
    add(new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.055, 0.44), body), 0, 0.02, -0.25)
    add(new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.05, 0.12), dark), 0, 0.075, -0.1)
    add(new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.022, 5, 10), dark), 0, 0.08, -0.2).rotation.x = Math.PI / 2
    muzzleZ = -0.5
  } else if (id === 'claws') {
    for (let i = 0; i < 3; i++) {
      const claw = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.42, 5), body)
      claw.rotation.x = -Math.PI / 2
      add(claw, -0.12 + i * 0.12, 0.02, -0.35)
    }
    add(new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.08, 0.12), dark), 0, 0, -0.06)
    muzzleZ = -0.5
  } else {
    add(new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 0.5), body), 0, 0, -0.1)
    muzzleZ = -0.55
  }

  // Blocky first-person hands so the weapon doesn't float in the air.
  const melee = id === 'bate' || id === 'chancla' || id === 'claws'
  const glove = new THREE.MeshStandardMaterial({ color: '#20232b', roughness: 0.85, flatShading: true, depthTest: false, depthWrite: false })
  const rightHand = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.14, 0.14), glove)
  rightHand.rotation.x = -0.18
  add(rightHand, 0.015, -0.14, 0.12)
  const rightThumb = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.07, 0.1), skin)
  add(rightThumb, -0.06, -0.12, 0.08)
  const rightArm = new THREE.Mesh(new THREE.BoxGeometry(0.115, 0.32, 0.115), sleeve)
  rightArm.rotation.x = -0.38
  rightArm.rotation.z = 0.08
  add(rightArm, 0.03, -0.33, 0.24)
  if (!melee) {
    const leftHand = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.15), glove)
    leftHand.rotation.x = -0.08
    add(leftHand, -0.035, -0.06, -0.31)
    const leftThumb = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.065, 0.09), skin)
    add(leftThumb, -0.085, -0.04, -0.29)
  }

  g.traverse((o) => {
    if (o.isMesh) {
      o.renderOrder = 999
      o.castShadow = false
      o.receiveShadow = false
      if (Array.isArray(o.material)) o.material.forEach((m) => { m.depthTest = false; m.depthWrite = false })
      else if (o.material) { o.material.depthTest = false; o.material.depthWrite = false }
    }
  })
  g.userData.muzzleZ = muzzleZ
  return g
}
