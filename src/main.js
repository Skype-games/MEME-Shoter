import { Game } from './game.js'
import { Sound } from './audio.js'
import { CHARACTERS, MAPS } from './data.js'
import { startReload, useSpecial, interact } from './combat.js'

const $ = (id) => document.getElementById(id)
const sound = new Sound()
const isTouch = window.matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0
if (isTouch) document.body.classList.add('touch')

let profile = { xp: 0, wins: 0, kills: 0, matches: 0 }
try {
  const saved = JSON.parse(localStorage.getItem('memeShoterProfile') || 'null')
  if (saved && typeof saved === 'object') profile = { ...profile, ...saved }
} catch {}

function updateProfile() {
  const level = Math.floor(profile.xp / 1200) + 1
  $('profile-level').textContent = `NIVEL ${level}`
  $('profile-wins').textContent = profile.wins
  $('profile-kills').textContent = profile.kills
  $('profile-xp').style.width = `${((profile.xp % 1200) / 1200) * 100}%`
  saveProfile()
}
function saveProfile() {
  try { localStorage.setItem('memeShoterProfile', JSON.stringify(profile)) } catch {}
}

let selectedMap = MAPS[0]
let selectedChar = CHARACTERS[0]

// ---------- MAP CARDS ----------
const mapList = $('map-list')
MAPS.forEach((m) => {
  const b = document.createElement('button')
  b.className = 'map-card'
  b.dataset.map = m.id
  b.style.setProperty('--map-a', m.colors[0])
  b.style.setProperty('--map-b', m.colors[1])
  b.setAttribute('aria-label', `Map ${m.name}`)
  b.innerHTML = `<div class="map-icon">${m.icon}</div><div class="map-copy"><b>${m.name}</b><small>${m.short} · ${m.hazard}</small></div><div class="map-check">◆</div>`
  b.addEventListener('click', () => selectMap(m))
  mapList.append(b)
})
function selectMap(m) {
  selectedMap = m
  document.querySelectorAll('.map-card').forEach((el) => {
    const active = el.dataset.map === m.id
    el.classList.toggle('active', active)
    el.setAttribute('aria-pressed', active)
  })
  $('map-art').textContent = m.icon
  $('map-art').style.background = `radial-gradient(circle at 50% 80%, ${m.colors[0]}55, transparent 70%)`
  $('map-detail-name').textContent = m.name
  $('map-detail-desc').textContent = m.desc
  $('map-detail-hazard').textContent = `⚠️ ${m.hazard}`
  if (game && game.mode === 'menu') game.setMap(m.id)
}

// ---------- CHARACTER CARDS ----------
const charList = $('char-list')
CHARACTERS.forEach((c) => {
  const b = document.createElement('button')
  b.className = 'char-card'
  b.dataset.char = c.id
  b.style.setProperty('--char-color', c.color)
  b.setAttribute('aria-label', `Character ${c.name}`)
  b.innerHTML = `<div class="char-emoji">${c.icon}</div><b>${c.name}</b><small>${c.tag}</small>`
  b.addEventListener('click', () => selectChar(c))
  charList.append(b)
})
function selectChar(c) {
  selectedChar = c
  document.querySelectorAll('.char-card').forEach((el) => {
    const active = el.dataset.char === c.id
    el.classList.toggle('active', active)
    el.setAttribute('aria-pressed', active)
  })
  $('selected-icon').textContent = c.icon
  $('selected-name').textContent = c.name
  $('selected-tag').textContent = c.tag
  if ($('ready-label')) $('ready-label').textContent = `${c.name.toUpperCase()} ESTÁ LISTO`
  $('passive-name').textContent = c.tag
  $('passive-text').textContent = c.passive
  $('special-name-menu').textContent = c.special
  $('special-text').textContent = c.specialDesc
  if (game && game.mode === 'menu') game.setCharacter(c.id)
}

// ---------- GAME ----------
let game = null
window.__memeShoter = () => game
try {
  game = new Game($('scene'), sound, {
    onStart: () => {
      document.body.classList.add('playing')
      $('mobile-controls').classList.toggle('hidden', !isTouch)
      sound.init()
    },
    onEnd: (result) => {
      profile.xp += result.xp
      profile.kills += result.kills
      profile.matches += 1
      if (result.win) profile.wins += 1
      updateProfile()
      document.body.classList.remove('playing')
      $('mobile-controls').classList.add('hidden')
      try { document.exitPointerLock?.() } catch {}
    },
    onMenu: () => {
      document.body.classList.remove('playing')
      $('mobile-controls').classList.add('hidden')
      updateProfile()
    },
  })
  selectMap(MAPS[0])
  selectChar(CHARACTERS[0])
} catch (error) {
  console.error(error)
  const warn = document.createElement('div')
  warn.className = 'nojs'
  warn.innerHTML = '<div style="text-align:center;padding:30px"><h2>MEME SHOTER necesita WebGL</h2><p>Tu navegador no pudo iniciar el render 3D. Prueba con Chrome o Edge actualizado.</p></div>'
  document.body.append(warn)
}
updateProfile()

// ---------- BUTTONS ----------
$('play-button').addEventListener('click', () => {
  if (!game) return
  sound.init()
  sound.click()
  game.startMatch()
})
$('replay-button').addEventListener('click', () => {
  if (!game) return
  sound.click()
  game.startMatch()
})
$('menu-button').addEventListener('click', () => {
  if (!game) return
  sound.click()
  game.toMenu()
})
$('mute-button').addEventListener('click', () => {
  sound.init()
  const muted = sound.toggle()
  $('mute-button').textContent = muted ? '🔇' : '🔊'
  $('mute-button').setAttribute('aria-label', muted ? 'Unmute' : 'Mute')
})

document.addEventListener('pointerdown', () => sound.init(), { once: true })

// ---------- TOUCH ----------
const mobile = $('mobile-controls')
const joystick = $('joystick')
const stick = $('stick')
let joyPointer = null
function joyStart(e) {
  joyPointer = e.pointerId
  joystick.setPointerCapture?.(e.pointerId)
  joyMove(e)
  e.stopPropagation()
}
function joyMove(e) {
  if (e.pointerId !== joyPointer) return
  const rect = joystick.getBoundingClientRect()
  const cx = rect.left + rect.width / 2
  const cy = rect.top + rect.height / 2
  let dx = (e.clientX - cx) / (rect.width / 2)
  let dy = (e.clientY - cy) / (rect.height / 2)
  const len = Math.hypot(dx, dy)
  if (len > 1) { dx /= len; dy /= len }
  stick.style.transform = `translate(${dx * 34}px, ${dy * 34}px)`
  game?.setTouchMove(dx, dy)
  e.stopPropagation()
  e.preventDefault()
}
function joyEnd(e) {
  if (e.pointerId !== joyPointer) return
  joyPointer = null
  stick.style.transform = 'translate(0px, 0px)'
  game?.setTouchMove(0, 0)
}
joystick?.addEventListener('pointerdown', joyStart)
joystick?.addEventListener('pointermove', joyMove)
joystick?.addEventListener('pointerup', joyEnd)
joystick?.addEventListener('pointercancel', joyEnd)

// look with the right side of the screen
let lookId = null
let lastLook = null
$('scene').addEventListener('pointerdown', (e) => {
  if (e.pointerType !== 'touch' || !game || game.mode !== 'playing') return
  if (e.clientX < window.innerWidth * 0.38) return
  lookId = e.pointerId
  lastLook = { x: e.clientX, y: e.clientY }
})
$('scene').addEventListener('pointermove', (e) => {
  if (e.pointerId !== lookId || !lastLook) return
  game?.setTouchLook(e.clientX - lastLook.x, e.clientY - lastLook.y)
  lastLook = { x: e.clientX, y: e.clientY }
})
const lookEnd = (e) => { if (e.pointerId === lookId) { lookId = null; lastLook = null } }
$('scene').addEventListener('pointerup', lookEnd)
$('scene').addEventListener('pointercancel', lookEnd)

function holdButton(id, onDown, onUp) {
  const el = $(id)
  if (!el) return
  el.addEventListener('pointerdown', (e) => {
    e.preventDefault()
    e.stopPropagation()
    el.setPointerCapture?.(e.pointerId)
    onDown()
  })
  const up = (e) => { e.preventDefault(); onUp?.() }
  el.addEventListener('pointerup', up)
  el.addEventListener('pointercancel', up)
  el.addEventListener('pointerleave', up)
}
holdButton('btn-fire', () => game?.setFire(true), () => game?.setFire(false))
holdButton('btn-jump', () => {
  if (!game) return
  game.keys.Space = true
  setTimeout(() => { game.keys.Space = false }, 140)
})
holdButton('btn-reload', () => game && startReload(game))
holdButton('btn-special', () => game && useSpecial(game))
holdButton('btn-aim', () => game?.setAim(true), () => game?.setAim(false))
holdButton('btn-loot', () => game && interact(game))
holdButton('btn-swap', () => {
  if (!game) return
  for (let i = 1; i <= 3; i++) {
    const idx = (game.slot + i) % 3
    if (game.inventory[idx]) { game.equipSlot(idx); break }
  }
})

// Pause when tab is hidden to avoid a wall of bots shooting at nothing.
document.addEventListener('visibilitychange', () => {
  if (document.hidden && game?.mode === 'playing') {
    game.keys = {}
    game.fireHeld = false
  }
})
