// Tiny procedural sound engine — no external assets.
export class Sound {
  constructor() {
    this.ctx = null
    this.muted = false
    this.master = null
    this.lastShot = 0
  }

  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume()
      return
    }
    const AC = window.AudioContext || window.webkitAudioContext
    if (!AC) return
    this.ctx = new AC()
    this.master = this.ctx.createGain()
    this.master.gain.value = 0.28
    this.master.connect(this.ctx.destination)
  }

  toggle() {
    this.muted = !this.muted
    if (this.master) this.master.gain.value = this.muted ? 0 : 0.28
    return this.muted
  }

  tone(freq, dur, type = 'sine', vol = 0.3, slide = 0) {
    if (!this.ctx || this.muted) return
    const t = this.ctx.currentTime
    const osc = this.ctx.createOscillator()
    const gain = this.ctx.createGain()
    osc.type = type
    osc.frequency.setValueAtTime(freq, t)
    if (slide) osc.frequency.exponentialRampToValueAtTime(Math.max(20, freq + slide), t + dur)
    gain.gain.setValueAtTime(vol, t)
    gain.gain.exponentialRampToValueAtTime(0.0001, t + dur)
    osc.connect(gain).connect(this.master)
    osc.start(t)
    osc.stop(t + dur)
  }

  noise(dur = 0.12, vol = 0.5, filterFreq = 900, q = 1) {
    if (!this.ctx || this.muted) return
    const ctx = this.ctx
    const t = ctx.currentTime
    const len = Math.floor(ctx.sampleRate * dur)
    const buf = ctx.createBuffer(1, len, ctx.sampleRate)
    const data = buf.getChannelData(0)
    for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / len)
    const src = ctx.createBufferSource()
    src.buffer = buf
    const filter = ctx.createBiquadFilter()
    filter.type = 'lowpass'
    filter.frequency.value = filterFreq
    filter.Q.value = q
    const gain = ctx.createGain()
    gain.gain.setValueAtTime(vol, t)
    gain.gain.exponentialRampToValueAtTime(0.0001, t + dur)
    src.connect(filter).connect(gain).connect(this.master)
    src.start(t)
  }

  shot(kind = 'rifle') {
    if (!this.ctx) return
    const now = performance.now()
    const minGap = kind === 'minigun' ? 28 : kind === 'smg' ? 45 : 55
    if (now - this.lastShot < minGap) return
    this.lastShot = now
    const cfg = {
      pistol: [0.09, 0.22, 1400],
      heavy: [0.16, 0.5, 700],
      smg: [0.06, 0.22, 1800],
      rifle: [0.1, 0.36, 1200],
      shotgun: [0.24, 0.65, 500],
      sniper: [0.3, 0.62, 850],
      minigun: [0.055, 0.24, 1500],
      flame: [0.12, 0.12, 600],
      thump: [0.2, 0.35, 320],
    }[kind] || [0.1, 0.3, 900]
    this.noise(cfg[0], cfg[1], cfg[2], 0.8)
    if (kind === 'sniper' || kind === 'heavy') this.tone(90, 0.2, 'sine', 0.25, -50)
    if (kind === 'shotgun') this.tone(70, 0.18, 'sine', 0.3, -40)
  }

  hit(crit = false) {
    this.tone(crit ? 1400 : 900, 0.07, 'square', 0.12, crit ? 500 : 200)
    if (crit) this.tone(1900, 0.1, 'sine', 0.1, 300)
  }

  hurt() {
    this.tone(160, 0.16, 'sawtooth', 0.14, -80)
  }

  pickup() {
    this.tone(660, 0.08, 'sine', 0.16)
    setTimeout(() => this.tone(990, 0.12, 'sine', 0.14), 70)
  }

  reload() {
    this.noise(0.06, 0.12, 2500)
    setTimeout(() => this.noise(0.07, 0.14, 1800), 180)
  }

  explode() {
    this.noise(0.6, 0.75, 260, 0.7)
    this.tone(55, 0.5, 'sine', 0.35, -30)
  }

  click() {
    this.tone(520, 0.04, 'square', 0.08)
  }

  win() {
    ;[523, 659, 784, 1047].forEach((f, i) => setTimeout(() => this.tone(f, 0.35, 'triangle', 0.2), i * 130))
  }

  lose() {
    ;[330, 262, 196].forEach((f, i) => setTimeout(() => this.tone(f, 0.4, 'sine', 0.18), i * 160))
  }

  peck() {
    this.tone(1200, 0.04, 'square', 0.07, 200)
  }
}
