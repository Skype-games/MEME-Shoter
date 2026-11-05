import * as THREE from '../vendor/three.module.min.js'
import { WEAPONS, WEAPON_POOL, BOT_NAMES, CHAT_LINES, MEME_KILL_LINES, pick } from './data.js'
import { buildBotModel } from './models.js'
import { makeChicken } from './world.js'

const clamp = (v, a, b) => Math.max(a, Math.min(b, v))
const lerp = (a, b, t) => a + (b - a) * t
const rand = (a = 0, b = 1) => a + Math.random() * (b - a)
const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z)

function rayAABB(origin, dir, box, maxDist = Infinity) {
  let tmin = 0
  let tmax = maxDist
  for (const axis of ['x', 'y', 'z']) {
    const min = axis === 'x' ? box.minX : axis === 'y' ? box.minY : box.minZ
    const max = axis === 'x' ? box.maxX : axis === 'y' ? box.maxY : box.maxZ
    const o = origin[axis]
    const d = dir[axis]
    if (Math.abs(d) < 1e-8) {
      if (o < min || o > max) return null
    } else {
      let t1 = (min - o) / d
      let t2 = (max - o) / d
      if (t1 > t2) [t1, t2] = [t2, t1]
      tmin = Math.max(tmin, t1)
      tmax = Math.min(tmax, t2)
      if (tmin > tmax) return null
    }
  }
  return tmin
}

function raySphere(origin, dir, center, radius) {
  const ox = origin.x - center.x
  const oy = origin.y - center.y
  const oz = origin.z - center.z
  const b = ox * dir.x + oy * dir.y + oz * dir.z
  const c = ox * ox + oy * oy + oz * oz - radius * radius
  const h = b * b - c
  if (h < 0) return null
  const t = -b - Math.sqrt(h)
  return t > 0 ? t : null
}

function circleCollides(x, z, r, c) {
  const cx = clamp(x, c.minX, c.maxX)
  const cz = clamp(z, c.minZ, c.maxZ)
  return (x - cx) ** 2 + (z - cz) ** 2 < r * r
}

function moveCircle(game, pos, dx, dz, r) {
  const colliders = game.world.colliders
  const limit = game.world.half - 4
  const nx = clamp(pos.x + dx, -limit, limit)
  let blocked = false
  for (const c of colliders) {
    if (rayAABB ? circleCollides(nx, pos.z, r, c) : false) { blocked = true; break }
  }
  if (!blocked) pos.x = nx
  const nz = clamp(pos.z + dz, -limit, limit)
  for (const c of colliders) {
    if (circleCollides(pos.x, nz, r, c)) { blocked = true; break }
  }
  if (!blocked) pos.z = nz
  return blocked
}

function worldDistance(game, origin, dir, maxDist) {
  let best = null
  for (const c of game.world.colliders) {
    const t = rayAABB(origin, dir, c, maxDist)
    if (t !== null && t > 0.01 && (best === null || t < best)) best = t
  }
  if (dir.y < -0.001) {
    const t = -origin.y / dir.y
    if (t > 0 && t < maxDist && (best === null || t < best)) best = t
  }
  return best
}

function hasLOS(game, a, b) {
  const dir = b.clone().sub(a)
  const dist = dir.length()
  if (dist < 0.2) return true
  dir.normalize()
  const t = worldDistance(game, a, dir, dist)
  return t === null || t > dist - 0.4
}

export function playerRespawnPoint(game) {
  const sp = game.world.spawn
  return V(sp.x + 2, 0, sp.z + 6)
}

export function refreshWeaponVisual(game) {
  const entry = game.inventory[game.slot]
  if (!entry) {
    if (game.el['weapon-name']) game.el['weapon-name'].textContent = 'Sin arma'
    return
  }
  const w = WEAPONS[entry.id]
  const el = game.el
  if (el['weapon-name']) el['weapon-name'].textContent = w.name
  if (el['weapon-icon']) el['weapon-icon'].textContent = w.icon
  if (el['weapon-type']) el['weapon-type'].textContent = `${w.type} · ${w.rarity.toUpperCase()}`
}

function makeZone(game) {
  const theme = game.mapId
  const col = theme === 'cyber' ? '#ff3fe0' : theme === 'wasteland' ? '#a69a90' : '#ff7430'
  const mat = new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.14, side: THREE.DoubleSide, depthWrite: false })
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 38, 64, 1, true), mat)
  mesh.position.y = 19
  const top = new THREE.Mesh(new THREE.TorusGeometry(1, 0.02, 4, 64), new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.8 }))
  top.rotation.x = Math.PI / 2
  top.position.y = 36
  const group = new THREE.Group()
  group.add(mesh, top)
  game.scene.add(group)
  game.zoneGroup = group
  game.zoneMesh = mesh
  game.zone = {
    cx: 0, cz: 0, r: 116, targetR: 116, targetCx: 0, targetCz: 0,
    phase: 0, timer: 36, shrinking: false, label: 'CÍRCULO 1', color: col,
  }
  game.outsideZone = false
}

export function initMatch(game) {
  game.bots = []
  game.loot = []
  game.tracers = []
  game.effects = []
  game.projectiles = []
  game.meteors = []
  game.swarm = []
  game.chickenKills = 0
  game.nextMeteor = 24
  game.nextChat = 5
  game.nextEvent = 38
  game.campWarned = false
  game.swarmTriggered = false
  game.matchTime = 0
  game._zoneTick = 0
  makeZone(game)
  spawnBots(game)
  game.world.lootSpots.forEach((p, i) => spawnLoot(game, p.x, p.z, i < 4 ? pick(WEAPON_POOL) : null))
  game.chat('SISTEMA', `☠️ <b>30 jugadores</b> entran a <em>${game.world.info.name}</em>. Solo uno saldrá vivo.`, true)
}

export function resetMatch(game) {
  game.bots.forEach((b) => { if (b.group) game.scene.remove(b.group) })
  game.loot.forEach((l) => { if (l.group) game.scene.remove(l.group) })
  ;['projectiles', 'meteors', 'swarm'].forEach((key) => {
    ;(game[key] || []).forEach((o) => { if (o.group) game.scene.remove(o.group); if (o.mesh) game.scene.remove(o.mesh) })
  })
  ;(game.effects || []).forEach((e) => { if (e.obj) game.scene.remove(e.obj) })
  if (game.zoneGroup) game.scene.remove(game.zoneGroup)
  game.zoneGroup = null
  game.zone = null
  game.effects = []
  game.tracers = []
  game.projectiles = []
  game.meteors = []
  game.swarm = []
  game.loot = []
  game.bots = []
  game.alive = true
  game.reloading = false
  game.fireHeld = false
  game.aiming = false
  game.outsideZone = false
  game.el['interact-prompt']?.classList.add('hidden')
  game.el['event-banner']?.classList.remove('show')
  game.el['event-sub']?.classList.remove('show')
  game.el['killfeed'].innerHTML = ''
  game.el['chat-log'].innerHTML = ''
  if (game.gun) game.gun.visible = true
}

export function updateMatch(game, dt) {
  game.matchTime += dt
  game.fireCooldown = Math.max(0, game.fireCooldown - dt)
  game.specialCooldown = Math.max(0, game.specialCooldown - dt)
  game.revealTimer = Math.max(0, game.revealTimer - dt)
  game.speedBoostTimer = Math.max(0, game.speedBoostTimer - dt)
  game.lastActivity += dt
  if (game.reloading) {
    game.reloadTimer -= dt
    if (game.reloadTimer <= 0) finishReload(game)
  }
  updatePlayer(game, dt)
  updateBots(game, dt)
  updateZone(game, dt)
  updateLoot(game, dt)
  updateProjectiles(game, dt)
  updateMeteors(game, dt)
  updateSwarm(game, dt)
  updateChaos(game, dt)
  const entry = game.inventory[game.slot]
  if (entry && WEAPONS[entry.id].auto && game.fireHeld) tryFire(game)
}

function updatePlayer(game, dt) {
  const p = game.player
  if (!p || !game.alive) return
  const keys = game.keys
  let fx = 0
  let fz = 0
  if (keys.KeyW) fz -= 1
  if (keys.KeyS) fz += 1
  if (keys.KeyA) fx -= 1
  if (keys.KeyD) fx += 1
  fx += game.touchMove.x
  fz += game.touchMove.y
  const len = Math.hypot(fx, fz)
  const moving = len > 0.08
  if (moving) {
    fx /= Math.max(1, len)
    fz /= Math.max(1, len)
    game.lastActivity = 0
  }
  const entry = game.inventory[game.slot]
  const weapon = entry ? WEAPONS[entry.id] : null
  let speed = 5.6
  if (keys.ShiftLeft && !game.aiming) speed = 8.3
  if (game.aiming) speed *= 0.55
  if (weapon?.slow) speed *= weapon.slow
  if (game.speedBoostTimer > 0) speed *= 1.35
  if (game.lastActivity > 20) speed *= 0.9
  const sin = Math.sin(p.yaw)
  const cos = Math.cos(p.yaw)
  const dx = (fx * cos + fz * sin) * speed * dt
  const dz = (-fx * sin + fz * cos) * speed * dt
  moveCircle(game, p.pos, dx, dz, 0.46)
  p.vel.set(fx * speed, 0, fz * speed)
  // jump / gravity
  if (keys.Space && p.onGround) {
    p.yVel = 6.4
    p.onGround = false
    game.sound.tone(190, 0.08, 'sine', 0.04, 30)
  }
  if (!p.onGround) {
    p.yVel -= 19 * dt
    p.pos.y += p.yVel * dt
    if (p.pos.y <= 0) {
      p.pos.y = 0
      p.yVel = 0
      p.onGround = true
    }
  }
  // volcanic hazard
  if (game.mapId === 'volcano') {
    for (const l of game.world.lavaZones) {
      if (Math.hypot(p.pos.x - l.x, p.pos.z - l.z) < l.r) {
        damagePlayer(game, 26 * dt, 'la lava', { silent: true })
        break
      }
    }
  }
  // idle / pigeons
  if (game.lastActivity > 19 && !game.campWarned) {
    game.campWarned = true
    game.event('🕊️ LAS PALOMAS CÓSMICAS TE OBSERVAN', 'Muévete o te van a funar', 3.5)
    game.chat('SISTEMA', '🕊️ Las palomas detectaron un campero. 10 segundos para moverse.', true)
  }
  if (game.lastActivity > 30 && game.alive) {
    game.chat('SISTEMA', `☠️ Las Palomas Cósmicas se llevaron a <b>${game.character.name}</b>.`, true)
    spawnFeathers(game, p.pos.clone().setY(1.5), 30)
    killPlayer(game, 'las Palomas Cósmicas')
    return
  }
  if (game.lastActivity < 0.5) game.campWarned = false
  // weapon fidget
  if (game.fireCooldown > 0) game.gunKick = Math.max(game.gunKick, 0.2)
}

function finishReload(game) {
  const entry = game.inventory[game.slot]
  if (!entry) return
  const w = WEAPONS[entry.id]
  const need = w.mag - entry.mag
  const take = Math.min(need, entry.reserve)
  entry.mag += take
  entry.reserve -= take
  game.reloading = false
  game.reloadTimer = 0
  game.sound.reload()
  refreshWeaponVisual(game)
}

export function startReload(game) {
  if (game.reloading || game.mode !== 'playing') return
  const entry = game.inventory[game.slot]
  if (!entry) return
  const w = WEAPONS[entry.id]
  if (w.melee) return
  if (entry.mag >= w.mag || entry.reserve <= 0) return
  game.reloading = true
  game.reloadTimer = w.reload
  game.sound.reload()
  game.toast('Recargando…')
}

export function tryFire(game) {
  if (game.mode !== 'playing' || game.paused || !game.alive) return
  if (game.fireCooldown > 0 || game.reloading) return
  const entry = game.inventory[game.slot]
  if (!entry) return
  const w = WEAPONS[entry.id]
  if (!w.melee && entry.mag <= 0) {
    game.fireCooldown = 0.25
    game.sound.click()
    startReload(game)
    return
  }
  game.fireCooldown = 60 / w.rpm
  if (!w.auto) game.fireHeld = false
  if (!w.melee) entry.mag -= 1
  game.gunKick = 1
  game.recoilPitch += (w.damage > 100 ? 0.026 : w.type === 'Escopeta' ? 0.022 : 0.009)
  game.flashTimer = 0.055
  game.shake = Math.max(game.shake, 0.4)
  game.sound.shot(w.sound)
  if (w.melee && w.boomerang) {
    spawnProjectile(game, w)
    return
  }
  if (w.melee) {
    meleeAttack(game, w)
    return
  }
  if (w.explosive) {
    spawnProjectile(game, w)
    return
  }
  fireHitscan(game, w)
  if (entry.mag === 0) {
    const token = game.matchId
    setTimeout(() => { if (game.matchId === token && game.mode === 'playing') startReload(game) }, 220)
  }
}

function aimDirection(game, spread = 0) {
  const dir = new THREE.Vector3()
  game.camera.getWorldDirection(dir)
  if (spread > 0) {
    const a = Math.random() * Math.PI * 2
    const r = Math.sqrt(Math.random()) * spread
    const right = new THREE.Vector3().crossVectors(dir, new THREE.Vector3(0, 1, 0)).normalize()
    const up = new THREE.Vector3().crossVectors(right, dir).normalize()
    dir.addScaledVector(right, Math.cos(a) * r).addScaledVector(up, Math.sin(a) * r).normalize()
  }
  return dir
}

function muzzlePoint(game) {
  const dir = new THREE.Vector3()
  game.camera.getWorldDirection(dir)
  const right = new THREE.Vector3().crossVectors(dir, new THREE.Vector3(0, 1, 0)).normalize()
  return game.camera.position.clone().addScaledVector(dir, 0.8).addScaledVector(right, 0.22).add(V(0, -0.12, 0))
}

function fireHitscan(game, w) {
  const origin = game.camera.position.clone()
  const pellets = w.pellets || 1
  const spread = (game.aiming ? w.spread * 0.4 : w.spread) + (game.keys.ShiftLeft ? 0.01 : 0)
  const from = muzzlePoint(game)
  let anyHit = false
  let anyCrit = false
  for (let i = 0; i < pellets; i++) {
    const dir = aimDirection(game, spread)
    const hit = traceShot(game, origin, dir, w.range)
    const end = hit.point
    if (i < 4) tracer(game, from, end, w.id === 'chisme' ? '#ff9a3a' : w.id === 'awm' ? '#bfe9ff' : '#ffe08a')
    if (hit.bot) {
      anyHit = true
      anyCrit ||= hit.crit
      let dmg = w.damage * (hit.crit ? 1.9 : 1)
      if (game.character.id === 'tulia' && w.id === 'chisme') dmg *= 1.2
      damageBot(game, hit.bot, dmg, { crit: hit.crit, player: true, weapon: w })
    } else if (hit.chicken) {
      killChicken(game, hit.chicken)
    } else if (hit.world) {
      sparks(game, hit.point, w.id === 'chisme' ? '#ff8a32' : '#ffd889')
    }
  }
  if (anyHit) {
    game.hitmarker(anyCrit)
    game.sound.hit(anyCrit)
  }
}

function traceShot(game, origin, dir, maxDist) {
  let bestT = maxDist
  let bot = null
  let chicken = null
  let crit = false
  const wt = worldDistance(game, origin, dir, bestT)
  if (wt !== null) bestT = wt
  for (const b of game.bots) {
    if (!b.alive) continue
    const head = V(b.pos.x, b.pos.y + 1.78, b.pos.z)
    const body = V(b.pos.x, b.pos.y + 1.08, b.pos.z)
    const th = raySphere(origin, dir, head, 0.31)
    const tb = raySphere(origin, dir, body, 0.58)
    let t = null
    let c = false
    if (th !== null && (tb === null || th < tb)) { t = th; c = true }
    else if (tb !== null) t = tb
    if (t !== null && t < bestT) {
      bestT = t
      bot = b
      chicken = null
      crit = c
    }
  }
  for (const ch of game.world.chickens) {
    if (!ch.alive) continue
    const t = raySphere(origin, dir, V(ch.x, ch.mesh.position.y + 0.55, ch.z), 0.48)
    if (t !== null && t < bestT) {
      bestT = t
      chicken = ch
      bot = null
    }
  }
  const point = origin.clone().addScaledVector(dir, bestT)
  return { bot, chicken, crit, point, distance: bestT, world: !bot && !chicken && bestT < maxDist }
}

function meleeAttack(game, w) {
  const origin = game.camera.position
  const dir = new THREE.Vector3()
  game.camera.getWorldDirection(dir)
  let hit = false
  for (const b of game.bots) {
    if (!b.alive) continue
    const to = V(b.pos.x, b.pos.y + 1.1, b.pos.z).sub(origin)
    const dist = to.length()
    if (dist > w.range + 1.2) continue
    to.normalize()
    if (to.dot(dir) < 0.45) continue
    const dmg = w.damage * (game.character.id === 'abuelo' && w.id === 'chancla' ? 1.2 : 1)
    damageBot(game, b, dmg, { player: true, weapon: w })
    hit = true
  }
  const slash = new THREE.Mesh(
    new THREE.RingGeometry(w.range * 0.55, w.range * 0.72, 16, 1, -0.7, 1.4),
    new THREE.MeshBasicMaterial({ color: '#ffe08a', transparent: true, opacity: 0.7, side: THREE.DoubleSide, depthWrite: false })
  )
  slash.position.copy(origin).addScaledVector(dir, w.range * 0.55)
  slash.position.y -= 0.6
  slash.rotation.x = Math.PI / 2
  game.scene.add(slash)
  game.effects.push({ obj: slash, life: 0.18, maxLife: 0.18, type: 'ring', grow: 1.6 })
  if (hit) {
    game.hitmarker(false)
    game.sound.hit(false)
  } else {
    game.sound.tone(300, 0.06, 'sawtooth', 0.06, -100)
  }
}

function spawnProjectile(game, w) {
  const origin = game.camera.position.clone()
  const dir = new THREE.Vector3()
  game.camera.getWorldDirection(dir)
  let mesh
  if (w.id === 'chancla') {
    mesh = new THREE.Mesh(new THREE.BoxGeometry(0.23, 0.06, 0.46), new THREE.MeshStandardMaterial({ color: '#f4b32e', roughness: 0.7 }))
  } else {
    mesh = new THREE.Mesh(new THREE.SphereGeometry(0.24, 8, 6), new THREE.MeshBasicMaterial({ color: '#a678ff' }))
  }
  mesh.position.copy(origin).addScaledVector(dir, 0.7)
  mesh.castShadow = true
  game.scene.add(mesh)
  const boomerang = Boolean(w.boomerang)
  game.projectiles.push({
    group: mesh,
    pos: mesh.position.clone(),
    vel: dir.clone().multiplyScalar(boomerang ? 34 : 58),
    weapon: w,
    life: boomerang ? 2.2 : 2.6,
    boomerang,
    returning: false,
    hit: new Set(),
    age: 0,
  })
}

function updateProjectiles(game, dt) {
  for (let i = game.projectiles.length - 1; i >= 0; i--) {
    const pr = game.projectiles[i]
    pr.age += dt
    pr.life -= dt
    if (pr.boomerang) {
      if (pr.age > 0.72) pr.returning = true
      if (pr.returning) {
        const to = game.camera.position.clone().add(V(0, -0.25, 0)).sub(pr.pos)
        if (to.length() < 1.8) {
          game.scene.remove(pr.group)
          game.projectiles.splice(i, 1)
          continue
        }
        pr.vel.lerp(to.normalize().multiplyScalar(45), dt * 5)
      }
      pr.group.rotation.x += dt * 12
      pr.group.rotation.z += dt * 8
      for (const b of game.bots) {
        if (!b.alive || pr.hit.has(b.id)) continue
        if (b.pos.distanceTo(pr.pos) < 2) {
          pr.hit.add(b.id)
          damageBot(game, b, pr.weapon.damage * (game.character.id === 'abuelo' ? 1.2 : 1), { player: true, weapon: pr.weapon })
          game.sound.tone(900, 0.07, 'square', 0.12, -300)
        }
      }
      if (pr.life <= 0) {
        game.scene.remove(pr.group)
        game.projectiles.splice(i, 1)
        continue
      }
    } else {
      pr.vel.y -= 6 * dt
      if (pr.pos.y < 0.15) { explode(game, pr.pos.clone(), 6, pr.weapon.damage, true); game.scene.remove(pr.group); game.projectiles.splice(i, 1); continue }
      for (const b of game.bots) {
        if (!b.alive) continue
        if (b.pos.distanceTo(pr.pos) < 1.1) {
          explode(game, pr.pos.clone(), 6, pr.weapon.damage, true)
          game.scene.remove(pr.group)
          game.projectiles.splice(i, 1)
          break
        }
      }
      let hitWorld = false
      for (const c of game.world.colliders) {
        if (pr.pos.x > c.minX && pr.pos.x < c.maxX && pr.pos.y > c.minY && pr.pos.y < c.maxY && pr.pos.z > c.minZ && pr.pos.z < c.maxZ) { hitWorld = true; break }
      }
      if (hitWorld || pr.life <= 0) {
        explode(game, pr.pos.clone(), 6, pr.weapon.damage, true)
        game.scene.remove(pr.group)
        game.projectiles.splice(i, 1)
        continue
      }
    }
    pr.pos.addScaledVector(pr.vel, dt)
    pr.group.position.copy(pr.pos)
  }
}

function spawnBotHealthBar(group) {
  const bg = new THREE.Sprite(new THREE.SpriteMaterial({ color: '#1c1d22', depthTest: false, depthWrite: false, transparent: true, opacity: 0.8 }))
  bg.scale.set(1.18, 0.11, 1)
  bg.position.y = 2.24
  bg.renderOrder = 50
  const fill = new THREE.Sprite(new THREE.SpriteMaterial({ color: '#7bf05c', depthTest: false, depthWrite: false, transparent: true }))
  fill.scale.set(1.08, 0.065, 1)
  fill.position.y = 2.24
  fill.position.z = 0.001
  fill.renderOrder = 51
  group.add(bg, fill)
  return { bg, fill }
}

function spawnBots(game) {
  const used = new Set()
  for (let i = 0; i < 29; i++) {
    let name = pick(BOT_NAMES)
    let guard = 0
    while (used.has(name) && guard++ < 50) name = pick(BOT_NAMES)
    used.add(name)
    let x = 0
    let z = 0
    let tries = 0
    while (tries++ < 80) {
      const a = Math.random() * Math.PI * 2
      const r = 24 + Math.random() * 90
      x = Math.cos(a) * r
      z = Math.sin(a) * r
      if (Math.hypot(x, z) < 22) continue
      if (game.world.colliders.some((c) => circleCollides(x, z, 1.1, c))) continue
      break
    }
    const color = ['#7b4bb3', '#b34b4b', '#4b8bb3', '#b38b4b', '#4bb37b', '#8b4bb3'][i % 6]
    const model = buildBotModel(color)
    model.position.set(x, 0, z)
    game.scene.add(model)
    const bar = spawnBotHealthBar(model)
    const weaponId = pick(['mp5', 'ak', 'shotgun', 'deagle', 'awm', 'chisme', 'mp5', 'ak'])
    game.bots.push({
      id: i,
      name,
      group: model,
      pos: model.position,
      hp: 1000,
      maxHp: 1000,
      alive: true,
      target: null,
      think: Math.random() * 1.5,
      weaponId,
      fireGap: rand(0.5, 1.25),
      fireTimer: rand(0.3, 1.4),
      range: rand(34, 74),
      accuracy: rand(0.28, 0.6),
      speed: rand(3.4, 5.6),
      damage: rand(7, 15),
      strafe: Math.random() > 0.5 ? 1 : -1,
      wander: Math.random() * Math.PI * 2,
      wanderTimer: rand(1, 4),
      phase: Math.random() * 6,
      deathT: 0,
      bar,
      color,
      kills: 0,
    })
  }
}

function chooseTarget(game, bot) {
  let best = null
  let bestD = Infinity
  if (game.alive) {
    const d = bot.pos.distanceTo(game.player.pos)
    if (d < 95) { best = { isPlayer: true, pos: game.player.pos, name: game.character.name }; bestD = d }
  }
  for (const other of game.bots) {
    if (!other.alive || other.id === bot.id) continue
    const d = bot.pos.distanceTo(other.pos)
    if (d < bestD && d < 72) { bestD = d; best = other }
  }
  return best
}

function updateBots(game, dt) {
  for (const bot of game.bots) {
    if (!bot.alive) {
      bot.deathT += dt
      if (bot.deathT < 0.7) bot.group.rotation.z = lerp(bot.group.rotation.z, Math.PI / 2, dt * 5)
      if (bot.deathT > 1.2) {
        bot.group.position.y -= dt * 0.7
        if (bot.deathT > 2.8 && bot.group.parent) game.scene.remove(bot.group)
      }
      continue
    }
    bot.phase += dt * 4
    bot.think -= dt
    bot.fireTimer -= dt
    if (bot.think <= 0) {
      bot.think = rand(0.8, 1.8)
      bot.target = chooseTarget(game, bot)
    }
    const target = bot.target
    if (target && (target.isPlayer ? !game.alive : !target.alive)) bot.target = null
    let dirX = 0
    let dirZ = 0
    const inZone = Math.hypot(bot.pos.x - game.zone.cx, bot.pos.z - game.zone.cz) < game.zone.r - 2
    if (!inZone) {
      const dx = game.zone.cx - bot.pos.x
      const dz = game.zone.cz - bot.pos.z
      const l = Math.hypot(dx, dz) || 1
      dirX = dx / l
      dirZ = dz / l
    } else if (bot.target) {
      const tpos = bot.target.pos
      const dx = tpos.x - bot.pos.x
      const dz = tpos.z - bot.pos.z
      const dist = Math.hypot(dx, dz) || 1
      const eyeA = V(bot.pos.x, bot.pos.y + 1.6, bot.pos.z)
      const eyeB = V(tpos.x, tpos.y + 1.6, tpos.z)
      const los = hasLOS(game, eyeA, eyeB)
      if (dist > 30 || !los) {
        dirX = dx / dist
        dirZ = dz / dist
      } else if (dist < 10) {
        dirX = -dx / dist
        dirZ = -dz / dist
      } else {
        dirX = (-dz / dist) * bot.strafe
        dirZ = (dx / dist) * bot.strafe
      }
      if (los && dist < bot.range && bot.fireTimer <= 0) {
        botShoot(game, bot, target, dist)
      }
    } else {
      bot.wanderTimer -= dt
      if (bot.wanderTimer <= 0) { bot.wanderTimer = rand(1.5, 4); bot.wander = Math.random() * Math.PI * 2 }
      dirX = Math.cos(bot.wander)
      dirZ = Math.sin(bot.wander)
    }
    if (dirX || dirZ) {
      const speed = bot.speed * (inZone ? 1 : 1.35)
      moveCircle(game, bot.pos, dirX * speed * dt, dirZ * speed * dt, 0.48)
      bot.group.rotation.y = Math.atan2(dirX, dirZ)
      if (bot.group.userData.legs) {
        bot.group.userData.legs.forEach((l, i) => { l.rotation.x = Math.sin(bot.phase + i * Math.PI) * 0.45 })
      }
    }
    // outside zone damage
    if (!inZone) {
      damageBot(game, bot, 26 * dt, { killer: 'La Zona', silent: true })
    }
    const ratio = clamp(bot.hp / bot.maxHp, 0, 1)
    if (bot.bar) {
      bot.bar.fill.scale.x = Math.max(0.001, 1.08 * ratio)
      bot.bar.fill.position.x = -(1.08 * (1 - ratio)) / 2
      bot.bar.fill.material.color.set(ratio > 0.55 ? '#7bf05c' : ratio > 0.25 ? '#ffcf4d' : '#ff4d4d')
      const distToPlayer = bot.pos.distanceTo(game.player.pos)
      bot.bar.bg.visible = bot.bar.fill.visible = distToPlayer < 55
    }
  }
}

function botShoot(game, bot, target, dist) {
  bot.fireTimer = bot.fireGap * rand(0.75, 1.45)
  const from = V(bot.pos.x, bot.pos.y + 1.55, bot.pos.z)
  const aim = V(target.pos.x, target.pos.y + 1.3, target.pos.z)
  let miss = dist > 45 ? 2.2 : 1.1
  aim.x += rand(-miss, miss)
  aim.z += rand(-miss, miss)
  aim.y += rand(-0.8, 1.2)
  tracer(game, from, aim, '#ff7b5c')
  const chance = clamp(bot.accuracy * (1 - dist / 140), 0.08, 0.75)
  if (Math.random() < chance) {
    if (target.isPlayer) {
      damagePlayer(game, bot.damage, bot.name)
    } else {
      damageBot(game, target, bot.damage * 2.6, { killer: bot.name, killerBot: bot })
      bot.kills += 1
    }
  }
  if (dist < 40) game.sound.shot(bot.weaponId === 'awm' ? 'sniper' : 'rifle')
}

export function damageBot(game, bot, amount, opts = {}) {
  if (!bot || !bot.alive) return
  bot.hp -= amount
  if (opts.player) {
    game.damageDealt += amount
    game.floatText(V(bot.pos.x, bot.pos.y + 1.75, bot.pos.z), `${Math.round(amount)}${opts.crit ? ' CRIT' : ''}`, opts.crit)
  }
  if (!opts.silent) sparks(game, V(bot.pos.x, bot.pos.y + 1.2, bot.pos.z), opts.crit ? '#ff4d4d' : '#ffb347', 4)
  if (bot.hp <= 0) killBot(game, bot, opts.killer || (opts.player ? game.character.name : 'alguien'), opts.player, opts.weapon)
}

function killBot(game, bot, killerName, byPlayer, weapon) {
  if (!bot.alive) return
  bot.alive = false
  bot.deathT = 0
  bot.hp = 0
  if (bot.bar) {
    bot.bar.bg.visible = false
    bot.bar.fill.visible = false
  }
  if (Math.random() < 0.62) {
    spawnLoot(game, bot.pos.x + rand(-1, 1), bot.pos.z + rand(-1, 1), Math.random() < 0.65 ? pick(WEAPON_POOL) : null)
  }
  const icon = weapon?.icon || '💀'
  if (byPlayer) {
    game.kills += 1
    game.killfeed(`<b class="you">${game.character.name}</b> ${icon} <span>${bot.name}</span>`)
    game.chat('SISTEMA', `☠️ ${game.character.name} funó a <b>${bot.name}</b> — ${pick(MEME_KILL_LINES)}.`, true)
    game.toast(`<b>${bot.name}</b> eliminado`, 'kill')
    game.sound.tone(1300, 0.09, 'square', 0.1, 400)
  } else {
    game.killfeed(`<b>${killerName}</b> ${icon} <span>${bot.name}</span>`)
  }
  const aliveBots = game.bots.filter((b) => b.alive).length
  if (aliveBots === 0 && game.alive) {
    const token = game.matchId
    setTimeout(() => {
      if (game.matchId === token && game.alive && game.mode === 'playing') game.endMatch({ win: true, placement: 1, killer: '' })
    }, 900)
  }
}

export function damagePlayer(game, amount, source, opts = {}) {
  if (!game.alive) return
  const p = game.player
  if (game.character.id === 'pana' && opts.explosive) amount *= 0.8
  let dmg = amount
  if (p.armor > 0) {
    const absorbed = Math.min(p.armor, dmg * 0.55)
    p.armor -= absorbed
    dmg -= absorbed
  }
  p.hp -= dmg
  game.lastDamageSource = source
  if (!opts.silent) {
    game.damageFlash()
    if (!game._hurtAt || performance.now() - game._hurtAt > 240) {
      game.sound.hurt()
      game._hurtAt = performance.now()
    }
    game.shake = Math.max(game.shake, Math.min(1.4, dmg / 30))
  }
  if (p.hp <= 0) {
    p.hp = 0
    killPlayer(game, source)
  }
}

function killPlayer(game, killer) {
  if (!game.alive) return
  game.alive = false
  game.fireHeld = false
  if (game.gun) game.gun.visible = false
  const killerName = typeof killer === 'string' ? killer : (killer?.name || 'alguien')
  const placement = game.bots.filter((b) => b.alive).length + 1
  game.chat('SISTEMA', `☠️ <b>${game.character.name}</b> fue eliminado por <b>${killerName}</b>.`, true)
  spawnFeathers(game, game.player.pos.clone().setY(1.4), 12)
  const token = game.matchId
  setTimeout(() => {
    if (game.matchId === token) game.endMatch({ win: false, killer: killerName, placement })
  }, 500)
}

function killChicken(game, chicken) {
  if (!chicken.alive) return
  chicken.alive = false
  chicken.mesh.visible = false
  game.chickenKills += 1
  game.damageDealt += 5
  spawnFeathers(game, V(chicken.x, 0.8, chicken.z), 12)
  game.toast(`🐔 Pollo eliminado <b>${game.chickenKills}/10</b>`)
  game.killfeed(`<b class="you">${game.character.name}</b> 🍗 <span>Pollo inocente</span>`)
  if (game.chickenKills >= 10) triggerChickenApocalypse(game)
}

function triggerChickenApocalypse(game) {
  if (game.swarmTriggered) return
  game.swarmTriggered = true
  game.event('🐔 EL APOCALIPSIS AVÍCOLA', 'Mataste 10 pollos. Ahora ellos te matan a ti.', 4.5)
  game.chat('SISTEMA', '☠️ <b>EL APOCALIPSIS AVÍCOLA HA COMENZADO.</b> Los pollos son inmortales.', true)
  for (let i = 0; i < 9; i++) {
    const mesh = makeChicken()
    const a = (i / 9) * Math.PI * 2
    mesh.position.set(game.player.pos.x + Math.cos(a) * rand(8, 14), 0, game.player.pos.z + Math.sin(a) * rand(8, 14))
    mesh.scale.setScalar(1.5)
    game.scene.add(mesh)
    game.swarm.push({ group: mesh, phase: Math.random() * 6, peck: rand(0.3, 1) })
  }
}

function updateSwarm(game, dt) {
  for (const c of game.swarm) {
    c.phase += dt * 5
    const to = game.player.pos.clone().sub(c.group.position)
    to.y = 0
    const d = to.length()
    if (d > 2.1) {
      to.normalize()
      c.group.position.addScaledVector(to, dt * 4.8)
    }
    c.group.rotation.y = Math.atan2(to.x, to.z)
    c.group.position.y = Math.abs(Math.sin(c.phase * 2)) * 0.08
    if (d < 2.6) {
      c.peck -= dt
      if (c.peck <= 0) {
        c.peck = 0.85
        damagePlayer(game, 2, 'los pollos', { silent: true })
        game.sound.peck()
        game.shake = Math.max(game.shake, 0.12)
      }
    }
  }
}

function updateChaos(game, dt) {
  // periodic chat
  game.nextChat -= dt
  if (game.nextChat <= 0) {
    game.nextChat = rand(9, 19)
    const alive = game.bots.filter((b) => b.alive)
    if (alive.length) {
      const b = pick(alive)
      game.chat(b.name, pick(CHAT_LINES))
    }
  }
  // global events
  game.nextEvent -= dt
  if (game.nextEvent <= 0) {
    game.nextEvent = rand(38, 58)
    if (game.mapId === 'volcano') game.event('🌋 EL VOLCÁN RUGGE', 'Las rocas ardientes caen del cielo. Sigue moviéndote.', 4)
    else if (game.mapId === 'wasteland') game.event('🌪️ TORMENTA DE CENIZA', 'El borde del mapa se está comiendo las ruinas.', 4)
    else game.event('☣️ LOS LEUS SE PUDRIERON', 'El humo tóxico avanza por los callejones.', 4)
    game.chat('SISTEMA', '⚠️ El círculo se está cerrando. No te quedes quieto.', true)
  }
  // meteors
  game.nextMeteor -= dt
  if (game.nextMeteor <= 0) {
    game.nextMeteor = rand(28, 42)
    spawnMeteor(game)
  }
}

function spawnMeteor(game) {
  const candidateBots = game.bots.filter((b) => b.alive)
  let target = null
  let name = game.character.name
  if (candidateBots.length && Math.random() < 0.7) {
    target = pick(candidateBots)
    name = target.name
  } else {
    target = { pos: game.player.pos, isPlayer: true, name: game.character.name }
  }
  const pos = target.pos.clone()
  pos.x += rand(-1.5, 1.5)
  pos.z += rand(-1.5, 1.5)
  const mesh = new THREE.Mesh(
    new THREE.DodecahedronGeometry(1.1, 0),
    new THREE.MeshStandardMaterial({ color: '#3b2622', emissive: '#ff5a20', emissiveIntensity: 1.4, roughness: 0.7, flatShading: true })
  )
  const start = V(pos.x + 5, 95, pos.z + 5)
  mesh.position.copy(start)
  const light = new THREE.PointLight('#ff7a32', 6, 25)
  mesh.add(light)
  game.scene.add(mesh)
  game.meteors.push({ group: mesh, target: pos, t: 0, duration: 2.1, name, targetBot: target.isPlayer ? null : target })
  game.event('☄️ METEORITO DE LA HUMILLACIÓN', 'Alguien va a perder 5 HP y mucha dignidad', 3.2)
  game.chat('SISTEMA', `☄️ Un meteorito va directo hacia <b>${name}</b>… qué pena, terrible.`, true)
}

function updateMeteors(game, dt) {
  for (let i = game.meteors.length - 1; i >= 0; i--) {
    const m = game.meteors[i]
    m.t += dt
    const t = clamp(m.t / m.duration, 0, 1)
    m.group.position.set(
      lerp(m.target.x + 5, m.target.x, t),
      lerp(95, 0.3, t * t),
      lerp(m.target.z + 5, m.target.z, t)
    )
    m.group.rotation.x += dt * 7
    m.group.rotation.z += dt * 5
    if (t >= 1) {
      explode(game, m.target.clone().setY(0.3), 4, 0, false, '#ff7a32')
      const d = game.player.pos.distanceTo(m.target)
      if (d < 8) damagePlayer(game, 5, 'el Meteorito de la Humillación', { explosive: true })
      if (m.targetBot && m.targetBot.alive) damageBot(game, m.targetBot, 5, { killer: 'el Meteorito de la Humillación' })
      game.chat('SISTEMA', `☄️ «A <b>${m.name}</b> le cayó un meteorito, qué pena, terrible…»`, true)
      game.scene.remove(m.group)
      game.meteors.splice(i, 1)
    }
  }
}

function updateZone(game, dt) {
  const z = game.zone
  if (!z) return
  z.timer -= dt
  if (z.timer <= 0 && z.phase < 5) {
    z.phase += 1
    z.label = `CÍRCULO ${z.phase + 1}`
    const radii = [88, 62, 40, 22, 10, 4]
    z.targetR = radii[z.phase - 1]
    const maxOff = Math.max(0, z.r - z.targetR - 4)
    const a = Math.random() * Math.PI * 2
    const r = Math.random() * maxOff
    z.targetCx = z.cx + Math.cos(a) * r
    z.targetCz = z.cz + Math.sin(a) * r
    z.shrinking = true
    z.timer = 17
    game.event('⭕ EL CÍRCULO SE CIERRA', `Quedan ${game.bots.filter((b) => b.alive).length + (game.alive ? 1 : 0)} jugadores`, 3)
    game.chat('SISTEMA', `⭕ Nueva zona segura: ${z.label}. Muévete.`, true)
    game.sound.tone(220, 0.4, 'sine', 0.1, 120)
  } else if (z.shrinking) {
    z.r = lerp(z.r, z.targetR, dt * 0.55)
    z.cx = lerp(z.cx, z.targetCx, dt * 0.35)
    z.cz = lerp(z.cz, z.targetCz, dt * 0.35)
    if (Math.abs(z.r - z.targetR) < 0.5) {
      z.r = z.targetR
      z.shrinking = false
      z.timer = 32
    }
  }
  if (game.zoneGroup) {
    game.zoneGroup.position.set(z.cx, 0, z.cz)
    game.zoneMesh.scale.set(z.r, 1, z.r)
    game.zoneMesh.position.y = 19
    game.zoneMesh.material.opacity = 0.1 + Math.sin(game.time * 2) * 0.035
    const top = game.zoneGroup.children[1]
    if (top) { top.scale.set(z.r, z.r, 1); top.position.y = 36 }
  }
  const outside = Math.hypot(game.player.pos.x - z.cx, game.player.pos.z - z.cz) > z.r
  game.outsideZone = outside
  if (outside) {
    game._zoneTick += dt
    damagePlayer(game, 19 * dt, 'La Zona', { silent: true })
    if (game._zoneTick > 0.55) {
      game._zoneTick = 0
      game.damageFlash()
      game.sound.hurt()
    }
  }
}

// ---------- LOOT ----------
export function spawnLoot(game, x, z, weaponId = null) {
  if (game.loot.length > 30) {
    const old = game.loot.find((l) => !l.taken)
    if (old) { game.scene.remove(old.group); old.taken = true; game.loot.splice(game.loot.indexOf(old), 1) }
  }
  let type = 'weapon'
  if (!weaponId) {
    const roll = Math.random()
    if (roll > 0.84) type = 'armor'
    else if (roll > 0.74) type = 'ammo'
    else if (roll > 0.66) type = 'medkit'
  }
  if (type === 'weapon' && !weaponId) weaponId = pick(WEAPON_POOL)
  const group = new THREE.Group()
  const crateColor = type === 'weapon' ? '#8a6a35' : type === 'armor' ? '#3c6f96' : type === 'ammo' ? '#8a7b35' : '#3f7b48'
  const crate = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.62, 0.72), new THREE.MeshStandardMaterial({ color: crateColor, roughness: 0.72, metalness: 0.3 }))
  crate.position.y = 0.31
  crate.castShadow = true
  group.add(crate)
  const lid = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.09, 0.77), new THREE.MeshStandardMaterial({ color: '#d9ae4d', metalness: 0.65, roughness: 0.3 }))
  lid.position.y = 0.66
  group.add(lid)
  const glowColor = type === 'weapon' ? '#ffd45c' : type === 'armor' ? '#5ce4ff' : type === 'ammo' ? '#ffe38a' : '#67ff9a'
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.75, 1.0, 24), new THREE.MeshBasicMaterial({ color: glowColor, transparent: true, opacity: 0.65, side: THREE.DoubleSide }))
  ring.rotation.x = -Math.PI / 2
  ring.position.y = 0.04
  group.add(ring)
  const beam = new THREE.Mesh(
    new THREE.CylinderGeometry(0.06, 0.7, 4.2, 12, 1, true),
    new THREE.MeshBasicMaterial({ color: glowColor, transparent: true, opacity: 0.1, side: THREE.DoubleSide, depthWrite: false })
  )
  beam.position.y = 2.2
  group.add(beam)
  const icon = new THREE.Mesh(
    new THREE.OctahedronGeometry(0.2, 0),
    new THREE.MeshStandardMaterial({ color: glowColor, emissive: glowColor, emissiveIntensity: 1.2, roughness: 0.2 })
  )
  icon.position.y = 1.2
  group.add(icon)
  group.position.set(x, 0, z)
  game.scene.add(group)
  game.loot.push({ x, z, group, type, weaponId, ring, icon, taken: false, phase: Math.random() * 6 })
}

function updateLoot(game, dt) {
  let nearest = null
  let nearestD = 3.4
  for (const l of game.loot) {
    if (l.taken) continue
    l.phase += dt
    l.group.rotation.y += dt * 0.6
    if (l.icon) {
      l.icon.position.y = 1.2 + Math.sin(l.phase * 2.4) * 0.12
      l.icon.rotation.y += dt * 1.4
    }
    if (l.ring) l.ring.material.opacity = 0.4 + Math.sin(l.phase * 2) * 0.22
    const d = Math.hypot(l.x - game.player.pos.x, l.z - game.player.pos.z)
    if (d < nearestD) { nearest = l; nearestD = d }
  }
  const prompt = game.el['interact-prompt']
  if (nearest) {
    let label = ''
    if (nearest.type === 'weapon') {
      const w = WEAPONS[nearest.weaponId]
      label = `${w.icon} <b>${w.name}</b><small>${w.rarity} · ${w.type}</small>`
    } else if (nearest.type === 'armor') label = '🛡️ <b>Chaleco</b><small>+250 de armadura</small>'
    else if (nearest.type === 'ammo') label = '📦 <b>Municiones</b><small>Rellenar reserva</small>'
    else label = '💊 <b>Botiquín</b><small>+300 HP</small>'
    prompt.innerHTML = `<kbd>E</kbd><div>${label}</div>`
    prompt.classList.remove('hidden')
    game.nearLoot = nearest
  } else {
    prompt.classList.add('hidden')
    game.nearLoot = null
  }
}

export function interact(game) {
  if (game.mode !== 'playing' || !game.nearLoot) return
  const loot = game.nearLoot
  if (loot.taken) return
  const p = game.player
  if (loot.type === 'weapon') {
    const w = WEAPONS[loot.weaponId]
    let idx = game.inventory.findIndex((e) => e && e.id === loot.weaponId)
    if (idx >= 0) {
      game.inventory[idx].mag = w.mag
      game.inventory[idx].reserve = w.reserve
    } else {
      idx = game.inventory.findIndex((e) => !e)
      if (idx < 0) idx = game.slot
      game.inventory[idx] = { id: loot.weaponId, mag: w.mag, reserve: w.reserve }
    }
    game.slot = idx
    game.reloading = false
    game.buildWeaponView()
    game.refreshWeapon()
    game.toast(`${w.icon} <b>${w.name}</b> equipada`, 'loot')
    game.chat('SISTEMA', `🎒 ${game.character.name} recogió <b>${w.name}</b>.`, true)
  } else if (loot.type === 'armor') {
    p.armor = Math.min(p.maxArmor, p.armor + 250)
    game.toast('🛡️ <b>+250 Armadura</b>', 'loot')
  } else if (loot.type === 'ammo') {
    game.inventory.forEach((e) => { if (e) e.reserve += WEAPONS[e.id].mag * 3 })
    game.toast('📦 <b>Municiones rellenadas</b>', 'loot')
  } else if (loot.type === 'medkit') {
    p.hp = Math.min(p.maxHp, p.hp + 300)
    game.toast('💊 <b>+300 HP</b>', 'loot')
  }
  game.sound.pickup()
  game.scene.remove(loot.group)
  loot.taken = true
  const idx = game.loot.indexOf(loot)
  if (idx >= 0) game.loot.splice(idx, 1)
  game.nearLoot = null
  game.el['interact-prompt'].classList.add('hidden')
}

// ---------- VISUAL EFFECTS ----------
export function tracer(game, from, to, color = '#ffe08a') {
  const geo = new THREE.BufferGeometry().setFromPoints([from, to])
  const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.85, depthWrite: false })
  const line = new THREE.Line(geo, mat)
  game.scene.add(line)
  game.effects.push({ obj: line, life: 0.11, maxLife: 0.11, type: 'tracer' })
}

export function sparks(game, pos, color = '#ffd889', count = 5) {
  const geo = new THREE.BufferGeometry()
  const positions = new Float32Array(count * 3)
  const vel = []
  for (let i = 0; i < count; i++) {
    positions[i * 3] = pos.x
    positions[i * 3 + 1] = pos.y
    positions[i * 3 + 2] = pos.z
    vel.push(V(rand(-2.4, 2.4), rand(-0.4, 2.6), rand(-2.4, 2.4)))
  }
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  const mat = new THREE.PointsMaterial({ color, size: 0.14, transparent: true, opacity: 0.95, depthWrite: false, blending: THREE.AdditiveBlending })
  const pts = new THREE.Points(geo, mat)
  game.scene.add(pts)
  game.effects.push({ obj: pts, life: 0.35, maxLife: 0.35, type: 'particles', vel, gravity: 7 })
}

export function spawnFeathers(game, pos, count = 16) {
  const geo = new THREE.BufferGeometry()
  const positions = new Float32Array(count * 3)
  const vel = []
  for (let i = 0; i < count; i++) {
    positions[i * 3] = pos.x
    positions[i * 3 + 1] = pos.y
    positions[i * 3 + 2] = pos.z
    vel.push(V(rand(-3, 3), rand(1, 5), rand(-3, 3)))
  }
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  const mat = new THREE.PointsMaterial({ color: '#fff8e8', size: 0.2, transparent: true, opacity: 0.95, depthWrite: false })
  const pts = new THREE.Points(geo, mat)
  game.scene.add(pts)
  game.effects.push({ obj: pts, life: 1.1, maxLife: 1.1, type: 'particles', vel, gravity: 5 })
}

export function explode(game, pos, radius = 6, damage = 80, byPlayer = false, color = '#ff8a32') {
  const count = 26
  const geo = new THREE.BufferGeometry()
  const positions = new Float32Array(count * 3)
  const vel = []
  for (let i = 0; i < count; i++) {
    positions[i * 3] = pos.x
    positions[i * 3 + 1] = pos.y
    positions[i * 3 + 2] = pos.z
    const a = Math.random() * Math.PI * 2
    const b = Math.random() * Math.PI
    const sp = rand(3, 12)
    vel.push(V(Math.sin(b) * Math.cos(a) * sp, Math.abs(Math.cos(b)) * sp * 0.8 + 2, Math.sin(b) * Math.sin(a) * sp))
  }
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  const mat = new THREE.PointsMaterial({ color, size: 0.42, transparent: true, opacity: 1, depthWrite: false, blending: THREE.AdditiveBlending })
  const pts = new THREE.Points(geo, mat)
  game.scene.add(pts)
  game.effects.push({ obj: pts, life: 0.65, maxLife: 0.65, type: 'particles', vel, gravity: 9 })
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(0.4, 1, 28),
    new THREE.MeshBasicMaterial({ color: '#ffe1a0', transparent: true, opacity: 0.9, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending })
  )
  ring.rotation.x = -Math.PI / 2
  ring.position.copy(pos).setY(Math.max(0.08, pos.y))
  game.scene.add(ring)
  game.effects.push({ obj: ring, life: 0.45, maxLife: 0.45, type: 'ring', grow: radius * 2.5 })
  const light = new THREE.PointLight(color, 7, radius * 5)
  light.position.copy(pos)
  game.scene.add(light)
  game.effects.push({ obj: light, life: 0.28, maxLife: 0.28, type: 'light' })
  game.shake = Math.max(game.shake, clamp(1 - game.player.pos.distanceTo(pos) / 30, 0, 1.4))
  game.sound.explode()
  if (byPlayer) {
    for (const b of game.bots) {
      if (!b.alive) continue
      const d = b.pos.distanceTo(pos)
      if (d < radius) {
        const dmg = damage * (1 - (d / radius) * 0.55)
        damageBot(game, b, dmg, { player: true, weapon: WEAPONS.memes })
      }
    }
  }
}

export function updateEffects(game, dt) {
  for (let i = game.effects.length - 1; i >= 0; i--) {
    const e = game.effects[i]
    e.life -= dt
    if (e.type === 'tracer') {
      e.obj.material.opacity = Math.max(0, e.life / e.maxLife) * 0.85
    } else if (e.type === 'ring') {
      const t = 1 - e.life / e.maxLife
      e.obj.scale.setScalar(1 + t * (e.grow || 3))
      e.obj.material.opacity = (1 - t) * 0.8
    } else if (e.type === 'particles') {
      const pos = e.obj.geometry.attributes.position
      for (let j = 0; j < e.vel.length; j++) {
        const v = e.vel[j]
        v.y -= e.gravity * dt
        pos.setXYZ(j, pos.getX(j) + v.x * dt, pos.getY(j) + v.y * dt, pos.getZ(j) + v.z * dt)
      }
      pos.needsUpdate = true
      e.obj.material.opacity = Math.max(0, e.life / e.maxLife)
    } else if (e.type === 'light') {
      e.obj.intensity = Math.max(0, e.life / e.maxLife) * 7
    }
    if (e.life <= 0) {
      game.scene.remove(e.obj)
      if (e.obj.geometry) e.obj.geometry.dispose()
      if (e.obj.material) e.obj.material.dispose()
      if (e.obj.isLight) e.obj.dispose?.()
      game.effects.splice(i, 1)
    }
  }
}

// ---------- SPECIAL ABILITY ----------
export function useSpecial(game) {
  if (game.mode !== 'playing' || !game.alive) return
  if (game.specialCooldown > 0) {
    game.toast(`⏳ ${game.character.special} en ${Math.ceil(game.specialCooldown)}s`)
    return
  }
  game.specialCooldown = 22
  const char = game.character
  const p = game.player
  if (char.id === 'hacker') {
    game.revealTimer = 12
    game.event('👁️ PIRATEO TOTAL', 'Todos los enemigos aparecen en el minimapa', 3)
    game.chat('SISTEMA', '👁️ El Gato Hacker reveló la posición de todos los rivales.', true)
    game.sound.tone(1200, 0.15, 'square', 0.12, 400)
    return
  }
  if (char.id === 'nero') {
    game.speedBoostTimer = 10
    game.event('🛸 GRAVEDAD CERO', 'Velocidad aumentada por 10 segundos', 3)
    game.chat('SISTEMA', '🛸 El Ñero Galáctico activó gravedad cero.', true)
    game.sound.tone(420, 0.4, 'sine', 0.15, 600)
    return
  }
  const radius = char.id === 'tulia' ? 15 : char.id === 'chad' ? 13 : char.id === 'abuelo' ? 14 : char.id === 'abuela' ? 13 : char.id === 'troll' ? 15 : 11
  const damage = char.id === 'tulia' ? 420 : char.id === 'chad' ? 380 : char.id === 'abuelo' ? 400 : 340
  let hits = 0
  for (const b of game.bots) {
    if (!b.alive) continue
    if (b.pos.distanceTo(p.pos) < radius) {
      damageBot(game, b, damage, { player: true, weapon: { icon: '💥' } })
      hits += 1
    }
  }
  explode(game, p.pos.clone().setY(1), radius, 0, false, char.id === 'troll' ? '#ff3fe0' : '#ffd166')
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(radius * 0.7, radius, 48),
    new THREE.MeshBasicMaterial({ color: char.id === 'troll' ? '#ff3fe0' : '#ffd166', transparent: true, opacity: 0.85, side: THREE.DoubleSide, depthWrite: false })
  )
  ring.rotation.x = -Math.PI / 2
  ring.position.copy(p.pos).setY(0.15)
  game.scene.add(ring)
  game.effects.push({ obj: ring, life: 0.6, maxLife: 0.6, type: 'ring', grow: 1.5 })
  game.event(`⚡ ${char.special.toUpperCase()}`, hits ? `${hits} rival(es) alcanzado(s)` : 'Nadie estaba cerca… qué vergüenza', 3)
  game.chat('SISTEMA', `⚡ ${char.name} usó <b>${char.special}</b>${hits ? ` y alcanzó a ${hits} rival(es)` : ''}.`, true)
  game.sound.explode()
}

