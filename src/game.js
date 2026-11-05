import * as THREE from '../vendor/three.module.min.js'
import { CHARACTERS, MAPS, WEAPONS } from './data.js'
import { createWorld, disposeWorld } from './world.js'
import { buildCharacter, buildGun } from './models.js'
import {
  initMatch, resetMatch, updateMatch, tryFire, startReload, interact, useSpecial,
  updateEffects, refreshWeaponVisual, playerRespawnPoint,
} from './combat.js'

const clamp = (v, a, b) => Math.max(a, Math.min(b, v))
const lerp = (a, b, t) => a + (b - a) * t

export class Game {
  constructor(canvas, sound, hooks = {}) {
    this.canvas = canvas
    this.sound = sound
    this.hooks = hooks
    this.isTouch = typeof window !== 'undefined' && (('ontouchstart' in window) || navigator.maxTouchPoints > 0 || window.matchMedia?.('(pointer: coarse)').matches)
    this.mode = 'menu'
    this.paused = false
    this.mapId = 'volcano'
    this.charId = 'pana'
    this.character = CHARACTERS[0]
    this.time = 0
    this.keys = {}
    this.fireHeld = false
    this.aiming = false
    this.locked = false
    this.dragging = false
    this.touchMove = { x: 0, y: 0 }
    this.inventory = []
    this.slot = 0
    this.reloading = false
    this.reloadTimer = 0
    this.fireCooldown = 0
    this.recoilPitch = 0
    this.gunKick = 0
    this.flashTimer = 0
    this.inspectTimer = 0
    this.shake = 0
    this.walkTime = 0
    this.specialCooldown = 0
    this.revealTimer = 0
    this.speedBoostTimer = 0
    this.lastActivity = 0
    this.idleWarned = false
    this.alive = true
    this.kills = 0
    this.damageDealt = 0
    this.bots = []
    this.loot = []
    this.tracers = []
    this.effects = []
    this.projectiles = []
    this.meteors = []
    this.swarm = []
    this.zone = null
    this.startedAt = 0
    this.matchTime = 0
    this.chickenKills = 0
    this.nextMeteor = 22
    this.nextChat = 5
    this.nextEvent = 40
    this.endShown = false
    this.el = {}
    ;[
      'hud', 'menu', 'end-screen', 'alive-count', 'kill-count', 'match-timer', 'zone-label',
      'zone-timer', 'health-fill', 'health-text', 'armor-fill', 'armor-text', 'weapon-name',
      'weapon-icon', 'weapon-type', 'ammo-mag', 'ammo-reserve', 'special-fill', 'special-name',
      'special-state', 'minimap', 'compass', 'killfeed', 'chat-log', 'event-banner',
      'event-sub', 'interact-prompt', 'hitmarker', 'damage-flash', 'crosshair', 'scope-overlay',
      'lock-hint', 'slot-0', 'slot-1', 'slot-2', 'zone-warning', 'char-badge', 'weapon-view',
      'toast-layer', 'float-layer', 'ammo-bar', 'end-title', 'end-placement', 'end-kills',
      'end-damage', 'end-time', 'end-xp', 'end-icon', 'end-killer', 'mobile-controls',
      'btn-special',
    ].forEach((id) => { this.el[id] = document.getElementById(id) })
    this.el.slots = [this.el['slot-0'], this.el['slot-1'], this.el['slot-2']]
    this.el.ammoBar = this.el['ammo-bar']
    this.minimapCtx = this.el.minimap?.getContext('2d')

    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.65))
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.renderer.outputColorSpace = THREE.SRGBColorSpace
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 1.05

    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.05, 620)
    this.camera.rotation.order = 'YXZ'
    this.scene.add(this.camera)
    this.flashLight = new THREE.PointLight(0xffb15c, 0, 12, 2)
    this.flashLight.position.set(0.2, -0.1, -0.8)
    this.camera.add(this.flashLight)

    this.menuAngle = 0
    this.world = createWorld(this.scene, this.mapId)
    this.setupLights()
    this.showcase = buildCharacter(this.character, { menu: true })
    this.showcase.position.set(0, 0.42, 0)
    this.scene.add(this.showcase)
    this.gun = null
    this.bindInput()
    this.bindResize()
    this.buildWeaponView()
    this.clock = new THREE.Clock()
    this.animate = this.animate.bind(this)
    requestAnimationFrame(this.animate)
  }

  setupLights() {
    if (this.lights) {
      this.lights.forEach((l) => this.scene.remove(l))
    }
    const info = this.world?.info || MAPS[0]
    const cyber = this.mapId === 'cyber'
    const hemi = new THREE.HemisphereLight(cyber ? '#6f8cff' : '#d8ecff', cyber ? '#250e35' : info.ground, cyber ? 0.9 : 1.15)
    this.scene.add(hemi)
    const sun = new THREE.DirectionalLight(cyber ? '#7fa6ff' : this.mapId === 'wasteland' ? '#e2b892' : '#ffd89a', cyber ? 1.1 : 2.0)
    sun.position.set(-60, 90, -40)
    sun.castShadow = true
    sun.shadow.mapSize.set(1024, 1024)
    sun.shadow.camera.left = -120
    sun.shadow.camera.right = 120
    sun.shadow.camera.top = 120
    sun.shadow.camera.bottom = -120
    sun.shadow.camera.far = 260
    sun.shadow.bias = -0.0008
    this.scene.add(sun)
    const fill = new THREE.DirectionalLight(cyber ? '#ff3ec8' : '#ffb066', cyber ? 0.9 : 0.45)
    fill.position.set(80, 35, 70)
    this.scene.add(fill)
    const stageKey = new THREE.PointLight('#fff4dd', 70, 17, 2)
    stageKey.position.set(2.4, 4.6, 3.4)
    const stageRim = new THREE.PointLight(info.colors[0], 55, 14, 2)
    stageRim.position.set(-3.2, 2.8, -2.2)
    this.scene.add(stageKey, stageRim)
    this.lights = [hemi, sun, fill, stageKey, stageRim]
    const fogColor = new THREE.Color(info.fog)
    this.scene.fog = new THREE.Fog(fogColor, cyber ? 60 : 80, cyber ? 260 : 340)
    this.scene.background = fogColor
    this.renderer.toneMappingExposure = cyber ? 1.2 : 1.05
  }

  setMap(mapId) {
    if (mapId === this.mapId || this.mode === 'playing') return
    this.mapId = mapId
    if (this.world) disposeWorld(this.scene, this.world)
    this.world = createWorld(this.scene, mapId)
    this.setupLights()
    if (this.showcase) this.scene.add(this.showcase)
    this.sound.click()
  }

  setCharacter(charId) {
    const char = CHARACTERS.find((c) => c.id === charId) || CHARACTERS[0]
    this.charId = char.id
    this.character = char
    if (this.showcase) {
      this.scene.remove(this.showcase)
      this.showcase.traverse((o) => {
        if (o.geometry) o.geometry.dispose()
        if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => m.dispose())
      })
    }
    this.showcase = buildCharacter(char, { menu: true })
    this.showcase.position.set(0, 0.42, 0)
    this.scene.add(this.showcase)
    if (this.mode === 'menu') this.sound.click()
  }

  startMatch() {
    this.sound.init()
    this.matchId = (this.matchId || 0) + 1
    this.resetMatchState()
    this.mode = 'playing'
    this.paused = false
    this.endShown = false
    this.alive = true
    this.kills = 0
    this.damageDealt = 0
    this.matchTime = 0
    this.chickenKills = 0
    this.character = CHARACTERS.find((c) => c.id === this.charId) || CHARACTERS[0]
    this.player = {
      pos: new THREE.Vector3(this.world.spawn.x + 2, 0, this.world.spawn.z + 6),
      vel: new THREE.Vector3(),
      yaw: 0.04,
      pitch: -0.02,
      yVel: 0,
      onGround: true,
      hp: 1000,
      maxHp: 1000,
      armor: 250,
      maxArmor: 500,
      kills: 0,
      bob: 0,
    }
    this.inventory = [
      { id: 'pio', mag: WEAPONS.pio.mag, reserve: WEAPONS.pio.reserve },
      { id: 'chancla', mag: 1, reserve: 999 },
      null,
    ]
    this.slot = 0
    this.fireCooldown = 0
    this.reloading = false
    this.reloadTimer = 0
    this.recoilPitch = 0
    this.gunKick = 0
    this.specialCooldown = 0
    this.revealTimer = 0
    this.speedBoostTimer = 0
    this.lastActivity = 0
    this.idleWarned = false
    this.showcase.visible = false
    if (this.world.stage) this.world.stage.visible = false
    this.el.menu.classList.add('hidden')
    this.el.hud.classList.remove('hidden')
    this.el['lock-hint'].classList.remove('hidden')
    if (this.isTouch) this.el['lock-hint'].classList.add('hidden')
    this.toast(this.isTouch ? '🕹️ Joystick para moverte · botones para disparar' : '🖱️ Haz clic para apuntar · WASD para moverte', 'loot')
    this.el['end-screen'].classList.add('hidden')
    this.el['char-badge'].innerHTML = `<span>${this.character.icon}</span> ${this.character.name}`
    this.player.pos.copy(playerRespawnPoint(this))
    initMatch(this)
    this.buildWeaponView()
    this.refreshWeapon()
    this.updateHud()
    this.hooks.onStart?.()
    if (!this.isTouch) {
      try { this.canvas.requestPointerLock?.() } catch {}
    }
  }

  resetMatchState() {
    resetMatch(this)
  }

  toMenu() {
    resetMatch(this)
    this.mode = 'menu'
    this.showcase.visible = true
    if (this.world.stage) this.world.stage.visible = true
    this.el.hud.classList.add('hidden')
    this.el['end-screen'].classList.add('hidden')
    this.el.menu.classList.remove('hidden')
    try { document.exitPointerLock?.() } catch {}
    this.aiming = false
    this.fireHeld = false
    this.keys = {}
    this.hooks.onMenu?.()
  }

  endMatch(result) {
    if (this.mode !== 'playing') return
    this.mode = 'end'
    this.fireHeld = false
    this.aiming = false
    this.el.hud.classList.add('hidden')
    this.el['end-screen'].classList.remove('hidden')
    this.el['end-title'].textContent = result.win ? '¡VICTORIA!' : 'ELIMINADO'
    this.el['end-title'].className = result.win ? 'win' : 'lose'
    this.el['end-placement'].textContent = result.win ? '#1 DE 30' : `#${result.placement} DE 30`
    this.el['end-kills'].textContent = this.kills
    this.el['end-damage'].textContent = Math.round(this.damageDealt)
    this.el['end-time'].textContent = `${Math.floor(this.matchTime / 60)}:${String(Math.floor(this.matchTime % 60)).padStart(2, '0')}`
    this.el['end-icon'].textContent = result.win ? '🏆' : '💀'
    this.el['end-killer'].textContent = result.win ? 'La victoria es tuya, pana.' : `${result.killer || 'Un bot'} te eliminó.`
    const xp = Math.round(this.kills * 120 + this.damageDealt * 0.35 + (result.win ? 800 : 120))
    this.el['end-xp'].textContent = `+${xp} XP`
    if (result.win) this.sound.win()
    else this.sound.lose()
    this.hooks.onEnd?.({ ...result, kills: this.kills, damage: this.damageDealt, xp, time: this.matchTime, charId: this.charId, mapId: this.mapId })
  }

  bindResize() {
    this.onResize = () => {
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.65))
      this.renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', this.onResize)
  }

  bindInput() {
    document.addEventListener('keydown', (e) => {
      if (this.mode !== 'playing') return
      if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'Space', 'ShiftLeft', 'KeyR', 'KeyE', 'KeyQ', 'KeyF'].includes(e.code)) e.preventDefault()
      this.keys[e.code] = true
      this.lastActivity = 0
      if (e.code === 'KeyR') startReload(this)
      if (e.code === 'KeyE') interact(this)
      if (e.code === 'KeyQ') useSpecial(this)
      if (e.code === 'KeyF') this.inspectTimer = 1.7
      if (e.code === 'Digit1') this.equipSlot(0)
      if (e.code === 'Digit2') this.equipSlot(1)
      if (e.code === 'Digit3') this.equipSlot(2)
      if (e.code === 'KeyP') this.paused = !this.paused
    })
    document.addEventListener('keyup', (e) => { this.keys[e.code] = false })
    window.addEventListener('blur', () => { this.keys = {}; this.fireHeld = false })

    this.canvas.addEventListener('mousedown', (e) => {
      if (this.mode !== 'playing' || this.paused) return
      this.sound.init()
      this.lastActivity = 0
      if (e.button === 0) {
        this.fireHeld = true
        if (document.pointerLockElement !== this.canvas) {
          try { this.canvas.requestPointerLock?.() } catch {}
        }
        tryFire(this)
      } else if (e.button === 2) {
        this.aiming = true
      }
    })
    document.addEventListener('mouseup', (e) => {
      if (e.button === 0) this.fireHeld = false
      if (e.button === 2) this.aiming = false
    })
    this.canvas.addEventListener('contextmenu', (e) => e.preventDefault())
    document.addEventListener('mousemove', (e) => {
      if (this.mode !== 'playing' || this.paused) return
      if (document.pointerLockElement === this.canvas) this.look(e.movementX, e.movementY)
      else if (this.dragging) this.look(e.movementX || 0, e.movementY || 0)
      if (Math.abs(e.movementX || 0) > 1 || Math.abs(e.movementY || 0) > 1) this.lastActivity = 0
    })
    this.canvas.addEventListener('pointerdown', (e) => { if (e.pointerType === 'mouse') this.dragging = true })
    document.addEventListener('pointerup', () => { this.dragging = false })
    document.addEventListener('pointerlockchange', () => {
      this.locked = document.pointerLockElement === this.canvas
      this.el['lock-hint'].classList.toggle('hidden', this.locked || this.mode !== 'playing')
    })
    document.addEventListener('pointerlockerror', () => {
      this.el['lock-hint'].classList.toggle('hidden', this.mode !== 'playing')
    })
  }

  look(dx, dy) {
    if (!this.player) return
    const sens = this.aiming ? 0.0015 : 0.0022
    this.player.yaw -= dx * sens
    this.player.pitch = clamp(this.player.pitch - dy * sens, -1.35, 1.25)
  }

  equipSlot(i) {
    if (!this.inventory[i]) return
    if (i === this.slot) return
    this.slot = i
    this.reloading = false
    this.reloadTimer = 0
    this.fireCooldown = 0.18
    this.inspectTimer = 0
    this.buildWeaponView()
    this.refreshWeapon()
    this.sound.click()
  }

  buildWeaponView() {
    if (this.gun) {
      this.camera.remove(this.gun)
      this.gun.traverse((o) => {
        if (o.geometry) o.geometry.dispose()
        if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => m.dispose())
      })
    }
    const entry = this.inventory[this.slot]
    if (!entry) {
      this.gun = null
      return
    }
    const weapon = WEAPONS[entry.id]
    this.gun = buildGun(weapon, '#d8a77c', this.character?.color || '#2a2f3a')
    this.gun.position.set(0.3, -0.35, -1.12)
    this.gun.rotation.set(0.02, 0.26, -0.02)
    this.gun.scale.setScalar(0.66)
    this.camera.add(this.gun)
    const flash = new THREE.Mesh(
      new THREE.ConeGeometry(0.11, 0.4, 5),
      new THREE.MeshBasicMaterial({ color: '#ffd166', transparent: true, opacity: 0.95, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending })
    )
    flash.rotation.x = -Math.PI / 2
    flash.position.set(0, 0.01, weapon.muzzle ? -weapon.muzzle : (this.gun.userData.muzzleZ || -0.8))
    flash.visible = false
    flash.renderOrder = 1000
    this.gun.add(flash)
    this.muzzleFlash = flash
    this.flashTimer = 0
  }

  refreshWeapon() {
    refreshWeaponVisual(this)
    this.updateHud()
  }

  animate() {
    requestAnimationFrame(this.animate)
    const dt = Math.min(this.clock.getDelta(), 0.05)
    this.time += dt
    if (this.mode === 'menu') {
      this.updateMenu(dt)
      this.world.update(dt, this.time)
      updateEffects(this, dt)
    } else if (this.mode === 'playing') {
      if (!this.paused) {
        updateMatch(this, dt)
        this.world.update(dt, this.time)
        updateEffects(this, dt)
        this.updateCamera(dt)
        this.updateGun(dt)
        this.updateHud()
      }
    } else {
      this.world.update(dt, this.time)
      updateEffects(this, dt)
      this.updateEndCamera(dt)
    }
    this.renderer.render(this.scene, this.camera)
  }

  updateMenu(dt) {
    this.menuAngle += dt * 0.13
    const a = this.menuAngle
    this.player = this.player || { yaw: 0, pitch: 0 }
    this.camera.fov = lerp(this.camera.fov, 55, dt * 2)
    this.camera.updateProjectionMatrix()
    this.camera.position.set(Math.sin(a) * 7.1, 2.8 + Math.sin(a * 0.7) * 0.16, Math.cos(a) * 7.1)
    this.camera.lookAt(0, 1.32, 0)
    if (this.showcase) {
      this.showcase.rotation.y = a + Math.PI * 0.05
      this.showcase.position.y = 0.42 + Math.sin(this.time * 1.6) * 0.035
      const legs = this.showcase.userData.legs || []
      const arms = this.showcase.userData.arms || []
      legs.forEach((l, i) => { l.rotation.x = Math.sin(this.time * 1.5 + i) * 0.04 })
      arms.forEach((l, i) => { l.rotation.z = (i ? 1 : -1) * (0.16 + Math.sin(this.time * 1.4 + i) * 0.03) })
      if (this.showcase.userData.tail) this.showcase.userData.tail.rotation.z = Math.sin(this.time * 2.4) * 0.25
    }
  }

  updateEndCamera(dt) {
    this.menuAngle += dt * 0.05
    this.camera.position.set(Math.sin(this.menuAngle) * 8, 4.2, Math.cos(this.menuAngle) * 8)
    this.camera.lookAt(0, 1.4, 0)
    this.showcase.visible = true
    this.showcase.rotation.y = this.menuAngle
  }

  updateCamera(dt) {
    const p = this.player
    if (!p) return
    const moving = Math.abs(p.vel.x) + Math.abs(p.vel.z) > 0.5
    if (moving) this.walkTime += dt * (this.keys.ShiftLeft ? 1.5 : 1)
    const bob = moving ? Math.sin(this.walkTime * 10) * 0.024 : Math.sin(this.time * 1.7) * 0.005
    const sway = moving ? Math.cos(this.walkTime * 5) * 0.012 : 0
    this.shake = Math.max(0, this.shake - dt * 3.5)
    const shakeX = (Math.random() - 0.5) * this.shake * 0.08
    const shakeY = (Math.random() - 0.5) * this.shake * 0.08
    this.camera.position.set(p.pos.x + shakeX, p.pos.y + 1.68 + bob, p.pos.z + shakeY)
    this.camera.rotation.y = p.yaw
    this.camera.rotation.x = clamp(p.pitch + this.recoilPitch, -1.45, 1.35)
    this.camera.rotation.z = sway + (moving ? Math.sin(this.walkTime * 5) * 0.004 : 0)
    this.recoilPitch = lerp(this.recoilPitch, 0, dt * 7)
    const entry = this.inventory[this.slot]
    const weapon = entry ? WEAPONS[entry.id] : null
    let fov = window.innerWidth < window.innerHeight ? 82 : 72
    if (this.aiming) fov = weapon?.zoom || 56
    if (this.keys.ShiftLeft && !this.aiming) fov = window.innerWidth < window.innerHeight ? 86 : 76
    this.camera.fov = lerp(this.camera.fov, fov, dt * 9)
    this.camera.updateProjectionMatrix()
    const scoped = Boolean(this.aiming && weapon?.zoom)
    this.el['scope-overlay'].classList.toggle('active', scoped)
    this.el.crosshair.classList.toggle('aiming', this.aiming)
    this.el.crosshair.style.opacity = scoped ? '0' : ''
  }

  updateGun(dt) {
    if (!this.gun) return
    const entry = this.inventory[this.slot]
    const weapon = entry ? WEAPONS[entry.id] : null
    if (!weapon) return
    this.gun.visible = this.alive && !(this.aiming && weapon.zoom)
    const portrait = window.innerWidth < window.innerHeight
    const gs = portrait ? 0.52 : 0.66
    if (Math.abs(this.gun.scale.x - gs) > 0.001) this.gun.scale.setScalar(gs)
    const moving = this.player && (Math.abs(this.player.vel.x) + Math.abs(this.player.vel.z) > 0.5)
    const bobX = moving ? Math.cos(this.walkTime * 5) * 0.012 : Math.sin(this.time * 1.2) * 0.003
    const bobY = moving ? Math.abs(Math.sin(this.walkTime * 10)) * 0.012 : Math.sin(this.time * 1.6) * 0.003
    const ads = this.aiming
    const tx = ads ? 0.0 : (portrait ? 0.16 : 0.3)
    const ty = (ads ? -0.26 : (portrait ? -0.4 : -0.35)) + bobY
    const tz = ads ? -1.05 : (portrait ? -1.02 : -1.12)
    this.gun.position.x = lerp(this.gun.position.x, tx + bobX, dt * 12)
    this.gun.position.y = lerp(this.gun.position.y, ty, dt * 12)
    this.gun.position.z = lerp(this.gun.position.z, tz + this.gunKick * 0.13, dt * 14)
    this.gunKick = lerp(this.gunKick, 0, dt * 8)
    let rotX = ads ? 0.0 : 0.02
    let rotZ = ads ? 0.0 : -0.02
    if (this.reloading) rotZ += 0.5
    if (this.inspectTimer > 0) {
      this.inspectTimer -= dt
      rotZ += Math.sin((1.7 - this.inspectTimer) * 5) * 0.5
      rotX += Math.sin((1.7 - this.inspectTimer) * 4) * 0.22
    }
    this.gun.rotation.x = lerp(this.gun.rotation.x, rotX + this.gunKick * 0.24, dt * 14)
    this.gun.rotation.z = lerp(this.gun.rotation.z, rotZ, dt * 12)
    if (this.flashTimer > 0) {
      this.flashTimer -= dt
      if (this.muzzleFlash) {
        this.muzzleFlash.visible = true
        this.muzzleFlash.scale.setScalar(0.8 + Math.random() * 0.7)
      }
      this.flashLight.intensity = 3 + Math.random() * 3
    } else {
      if (this.muzzleFlash) this.muzzleFlash.visible = false
      this.flashLight.intensity = lerp(this.flashLight.intensity, 0, dt * 16)
    }
  }

  updateHud() {
    if (this.mode !== 'playing' && this.mode !== 'end') return
    const p = this.player
    if (!p) return
    const alive = this.bots.filter((b) => b.alive).length + (this.alive ? 1 : 0)
    this.el['alive-count'].textContent = String(alive).padStart(2, '0')
    this.el['kill-count'].textContent = String(this.kills).padStart(2, '0')
    const secs = Math.floor(this.matchTime)
    this.el['match-timer'].textContent = `${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, '0')}`
    const hp = clamp(p.hp / p.maxHp, 0, 1)
    this.el['health-fill'].style.width = `${hp * 100}%`
    this.el['health-text'].textContent = Math.ceil(p.hp)
    this.el['health-fill'].classList.toggle('low', hp < 0.3)
    this.el['armor-fill'].style.width = `${clamp(p.armor / p.maxArmor, 0, 1) * 100}%`
    this.el['armor-text'].textContent = Math.ceil(p.armor)
    const entry = this.inventory[this.slot]
    if (entry) {
      const w = WEAPONS[entry.id]
      this.el['ammo-mag'].textContent = w.melee ? '∞' : entry.mag
      this.el['ammo-reserve'].textContent = w.melee ? '∞' : entry.reserve
      this.el['ammo-bar'].style.width = w.melee ? '100%' : `${(entry.mag / w.mag) * 100}%`
    }
    // slots
    this.el.slots.forEach((slotEl, i) => {
      const item = this.inventory[i]
      if (!slotEl) return
      slotEl.classList.toggle('active', i === this.slot)
      slotEl.classList.toggle('empty', !item)
      if (item) {
        const w = WEAPONS[item.id]
        slotEl.innerHTML = `<small>${i + 1}</small><span>${w.icon}</span><b>${w.name}</b>`
      } else {
        slotEl.innerHTML = `<small>${i + 1}</small><span>·</span><b>Vacío</b>`
      }
    })
    // special
    const ready = this.specialCooldown <= 0
    this.el['special-fill'].style.width = `${clamp(1 - this.specialCooldown / 22, 0, 1) * 100}%`
    this.el['special-name'].textContent = this.character.special
    this.el['special-state'].textContent = ready ? 'Q · LISTO' : `${Math.ceil(this.specialCooldown)}s`
    this.el['special-fill'].classList.toggle('ready', ready)
    if (this.el['btn-special']) this.el['btn-special'].classList.toggle('ready', ready)
    const heading = ((-p.yaw * 180) / Math.PI + 360) % 360
    const dirs = ['N', 'NE', 'E', 'SE', 'S', 'SO', 'O', 'NO']
    const dir = dirs[Math.round(heading / 45) % 8]
    this.el.compass.textContent = `🧭 ${dir}  ·  ${Math.round(heading).toString().padStart(3, '0')}°`
    this.el['zone-label'].textContent = this.zone ? this.zone.label : 'ZONA'
    this.el['zone-timer'].textContent = this.zone ? (this.zone.shrinking ? `CIERRE ${Math.ceil(this.zone.timer)}s` : `CIERRA EN ${Math.ceil(this.zone.timer)}s`) : '--'
    this.el['zone-warning'].classList.toggle('visible', Boolean(this.outsideZone))
    this.drawMinimap()
  }

  drawMinimap() {
    const ctx = this.minimapCtx
    if (!ctx || !this.player) return
    const w = this.el.minimap.width
    const h = this.el.minimap.height
    const scale = w / 250
    ctx.clearRect(0, 0, w, h)
    ctx.fillStyle = this.mapId === 'cyber' ? '#130d22' : this.mapId === 'wasteland' ? '#2b2822' : '#2e3826'
    ctx.fillRect(0, 0, w, h)
    ctx.save()
    ctx.translate(w / 2, h / 2)
    ctx.strokeStyle = 'rgba(255,255,255,0.12)'
    ctx.lineWidth = 1
    for (let i = -100; i <= 100; i += 25) {
      ctx.beginPath(); ctx.moveTo(i * scale, -w / 2); ctx.lineTo(i * scale, w / 2); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(-w / 2, i * scale); ctx.lineTo(w / 2, i * scale); ctx.stroke()
    }
    // city block hint
    ctx.fillStyle = 'rgba(255,255,255,0.13)'
    ctx.fillRect(20 * scale, -105 * scale, 95 * scale, 125 * scale)
    ctx.fillStyle = 'rgba(150,190,90,0.14)'
    ctx.fillRect(-110 * scale, 10 * scale, 80 * scale, 105 * scale)
    if (this.zone) {
      const z = this.zone
      ctx.beginPath()
      ctx.arc((z.cx) * scale, (z.cz) * scale, z.r * scale, 0, Math.PI * 2)
      ctx.strokeStyle = this.mapId === 'cyber' ? '#ff4ce0' : '#ffb03a'
      ctx.lineWidth = 2
      ctx.setLineDash([5, 4])
      ctx.stroke()
      ctx.setLineDash([])
      ctx.fillStyle = 'rgba(255,80,60,0.06)'
      ctx.beginPath()
      ctx.rect(-w / 2, -h / 2, w, h)
      ctx.arc((z.cx) * scale, (z.cz) * scale, z.r * scale, 0, Math.PI * 2, true)
      ctx.fill('evenodd')
    }
    // loot
    ctx.fillStyle = '#ffd45c'
    this.loot.forEach((l) => {
      if (l.taken) return
      ctx.fillRect(l.x * scale - 1.5, l.z * scale - 1.5, 3, 3)
    })
    // bots
    this.bots.forEach((b) => {
      if (!b.alive) return
      const near = Math.hypot(b.pos.x - this.player.pos.x, b.pos.z - this.player.pos.z) < 42 || this.revealTimer > 0
      if (!near) return
      ctx.fillStyle = this.revealTimer > 0 ? '#25f4ff' : '#ff5a5a'
      ctx.beginPath()
      ctx.arc(b.pos.x * scale, b.pos.z * scale, 2.4, 0, Math.PI * 2)
      ctx.fill()
    })
    // player
    ctx.save()
    ctx.translate(this.player.pos.x * scale, this.player.pos.z * scale)
    ctx.rotate(-this.player.yaw)
    ctx.fillStyle = '#ffffff'
    ctx.beginPath()
    ctx.moveTo(0, -6)
    ctx.lineTo(4.5, 5)
    ctx.lineTo(0, 2.5)
    ctx.lineTo(-4.5, 5)
    ctx.closePath()
    ctx.fill()
    ctx.restore()
    ctx.restore()
  }

  killfeed(text) {
    const d = document.createElement('div')
    d.className = 'feed-entry'
    d.innerHTML = text
    this.el.killfeed.prepend(d)
    setTimeout(() => d.classList.add('out'), 4200)
    setTimeout(() => d.remove(), 5000)
    while (this.el.killfeed.children.length > 6) this.el.killfeed.lastChild.remove()
  }

  chat(author, text, system = false) {
    const d = document.createElement('div')
    d.className = `chat-entry${system ? ' system' : ''}`
    d.innerHTML = system ? text : `<b>${author}</b><span>${text}</span>`
    this.el['chat-log'].append(d)
    while (this.el['chat-log'].children.length > 5) this.el['chat-log'].firstChild.remove()
    setTimeout(() => d.classList.add('out'), 7000)
    setTimeout(() => d.remove(), 8000)
  }

  toast(text, kind = '') {
    const d = document.createElement('div')
    d.className = `toast ${kind}`
    d.innerHTML = text
    this.el['toast-layer'].append(d)
    setTimeout(() => d.classList.add('out'), 2600)
    setTimeout(() => d.remove(), 3100)
  }

  event(title, sub = '', duration = 3.4) {
    this.el['event-banner'].textContent = title
    this.el['event-sub'].textContent = sub
    this.el['event-banner'].classList.add('show')
    this.el['event-sub'].classList.add('show')
    clearTimeout(this._eventTimer)
    this._eventTimer = setTimeout(() => {
      this.el['event-banner'].classList.remove('show')
      this.el['event-sub'].classList.remove('show')
    }, duration * 1000)
  }

  hitmarker(crit = false) {
    const el = this.el.hitmarker
    el.classList.remove('show', 'crit')
    void el.offsetWidth
    el.classList.add('show')
    if (crit) el.classList.add('crit')
    clearTimeout(this._hitTimer)
    this._hitTimer = setTimeout(() => el.classList.remove('show'), 150)
  }

  damageFlash() {
    const el = this.el['damage-flash']
    el.classList.remove('show')
    void el.offsetWidth
    el.classList.add('show')
    clearTimeout(this._damageTimer)
    this._damageTimer = setTimeout(() => el.classList.remove('show'), 260)
  }

  floatText(pos, text, crit = false) {
    const v = pos.clone().project(this.camera)
    if (v.z > 1 || v.z < -1) return
    const x = (v.x * 0.5 + 0.5) * window.innerWidth
    const y = (-v.y * 0.5 + 0.5) * window.innerHeight
    const d = document.createElement('div')
    d.className = `float-text${crit ? ' crit' : ''}`
    d.textContent = text
    d.style.left = `${x}px`
    d.style.top = `${y}px`
    this.el['float-layer'].append(d)
    setTimeout(() => d.remove(), 900)
  }

  setTouchMove(x, y) {
    this.touchMove.x = x
    this.touchMove.y = y
    this.lastActivity = 0
  }

  setTouchLook(dx, dy) {
    this.look(dx * 1.13, dy * 1.13)
    this.lastActivity = 0
  }

  setFire(on) {
    if (this.mode !== 'playing') return
    this.fireHeld = on
    if (on) tryFire(this)
  }
}
