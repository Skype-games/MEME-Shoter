import * as THREE from 'three';
import { RARITY } from '../data/weapons.js';

const $ = (id) => document.getElementById(id);
const fmtTime = (s) => {
  s = Math.max(0, Math.floor(s));
  return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
};

export class HUD {
  constructor({ map, skin, world }) {
    this.map = map;
    this.skin = skin;
    this.world = world;
    this.el = {
      hud: $('hud'), feed: $('feed'), killfeed: $('killfeed'),
      alive: $('alive-count'), timer: $('match-timer'), mapName: $('map-name'),
      zonePill: $('zone-pill'), zoneLabel: $('zone-label'), zoneTimer: $('zone-timer'), zoneIcon: $('zone-icon'),
      hpValue: $('hp-value'), hpFill: $('hp-fill'), hpLag: $('hp-lag'), hpTrack: document.querySelector('.hp-track'),
      weaponIcon: $('weapon-icon'), weaponName: $('weapon-name'), weaponCat: $('weapon-cat'),
      ammoMag: $('ammo-mag'), ammoReserve: $('ammo-reserve'), weaponSlots: $('weapon-slots'),
      specialBtn: $('special-btn'), specialIcon: $('special-icon'), specialName: $('special-name'),
      specialDesc: $('special-desc'), specialCd: $('special-cd'),
      prompt: $('interact-prompt'), promptText: $('interact-text'),
      toast: $('toast'), vignette: $('vignette'), floatLayer: $('float-layer'),
      banner: $('event-banner'), bannerTitle: $('event-title'), bannerSub: $('event-sub'),
      drop: $('drop-info'), altitude: $('altitude'),
      crosshair: $('crosshair'), hitmarker: $('hitmarker'),
      statusGloves: $('status-gloves'), statusZone: $('status-zone'),
      statusMask: $('status-mask'), statusChickens: $('status-chickens'),
      statusGuard: $('status-guard'),
      playerName: $('player-name'), skinTag: $('skin-tag'),
      minimap: $('minimap'),
    };
    this.mctx = this.el.minimap.getContext('2d');
    this.floats = [];
    this.feedLines = [];
    this.bannerTimer = 0;
    this.toastTimer = 0;
    this.hitTimer = 0;
    this.minimapT = 0;
    this.el.mapName.textContent = map.name.toUpperCase();
    this.el.zoneIcon.textContent = map.emoji;
    this.el.zoneLabel.textContent = map.zoneName;
    this.el.playerName.textContent = skin.gloves ? 'MIGUEL FURIOSO' : 'MIGUEL';
    this.el.skinTag.textContent = skin.gloves ? 'FURIA GATUNA · GUANTES' : 'EL PANA DE SIEMPRE';
    this.el.statusGloves.textContent = skin.gloves ? '🥊 FURIA +15%' : '🐾 SIN GUANTES';
    this.el.statusGloves.style.display = '';
    this.lastHp = 1000;
  }

  show() { this.el.hud.classList.remove('hidden'); }
  hide() { this.el.hud.classList.add('hidden'); }

  setDrop(alt) {
    if (alt == null) { this.el.drop.classList.add('hidden'); return; }
    this.el.drop.classList.remove('hidden');
    this.el.altitude.textContent = `${Math.max(0, Math.round(alt))} m`;
  }

  chat(text, type = '') {
    const line = document.createElement('div');
    line.className = `feed-line ${type}`;
    line.innerHTML = text;
    this.el.feed.appendChild(line);
    this.feedLines.push(line);
    while (this.feedLines.length > 6) this.feedLines.shift().remove();
    setTimeout(() => {
      line.style.opacity = '0';
      line.style.transition = 'opacity 0.5s';
      setTimeout(() => line.remove(), 520);
      this.feedLines = this.feedLines.filter((l) => l !== line);
    }, 11000);
  }

  kill(killer, victim, weaponName, playerInvolved = false) {
    const line = document.createElement('div');
    line.className = 'kill-line';
    line.innerHTML = `<b>${killer}</b> <span class="wep">${weaponName}</span> <b>${victim}</b>`;
    this.el.killfeed.appendChild(line);
    const kids = [...this.el.killfeed.children];
    while (kids.length > 5) kids.shift().remove();
    setTimeout(() => { line.remove(); }, 8000);
    if (playerInvolved) line.style.borderColor = 'rgba(255,122,47,0.6)';
  }

  banner(title, sub = '', duration = 3.2, color = '#ffd166') {
    this.el.bannerTitle.textContent = title;
    this.el.bannerSub.textContent = sub;
    this.el.bannerTitle.style.color = color;
    this.el.banner.classList.remove('hidden');
    this.bannerTimer = duration;
  }

  toast(text) {
    this.el.toast.textContent = text;
    this.el.toast.classList.add('show');
    this.toastTimer = 2.2;
  }

  setPrompt(text) {
    if (!text) { this.el.prompt.classList.add('hidden'); return; }
    this.el.prompt.classList.remove('hidden');
    this.el.promptText.textContent = text;
  }

  hitmarker(crit = false) {
    this.el.crosshair.classList.add('hit');
    this.el.hitmarker.style.color = crit ? '#ffd166' : '#ff3b4e';
    this.hitTimer = 0.12;
  }

  hurt(amount) {
    this.el.vignette.classList.add('hurt');
    clearTimeout(this._hurtT);
    this._hurtT = setTimeout(() => this.el.vignette.classList.remove('hurt'), 140);
  }

  damage(worldPos, amount, kind = '') {
    const div = document.createElement('div');
    div.className = `dmg-float ${kind}`;
    div.textContent = kind === 'heal' ? `+${Math.round(amount)}` : `${Math.round(amount)}`;
    this.el.floatLayer.appendChild(div);
    this.floats.push({ el: div, pos: worldPos.clone(), life: 0.85, vy: 0 });
    while (this.floats.length > 18) this.floats.shift().el.remove();
  }

  updateFloats(dt, camera) {
    const v = new THREE.Vector3();
    for (let i = this.floats.length - 1; i >= 0; i--) {
      const f = this.floats[i];
      f.life -= dt;
      f.pos.y += dt * 1.1;
      if (f.life <= 0) { f.el.remove(); this.floats.splice(i, 1); continue; }
      v.copy(f.pos).project(camera);
      if (v.z > 1 || v.z < -1) { f.el.style.opacity = '0'; continue; }
      const x = (v.x * 0.5 + 0.5) * innerWidth;
      const y = (-v.y * 0.5 + 0.5) * innerHeight;
      f.el.style.left = `${x}px`;
      f.el.style.top = `${y}px`;
      f.el.style.opacity = String(Math.min(1, f.life * 2.2));
      f.el.style.fontSize = f.life > 0.6 ? '' : '';
    }
  }

  update(dt, state) {
    const {
      hp, maxHp = 1000, ammo, reserve, weapon, slots = [], slotIndex = 0,
      alive, timer, specialRemaining = 0, specialTotal = 1, reloading = false,
      zoneDanger = false, maskTime = 0, funado = false, zoneTime = '', spawnGuard = 0,
    } = state;

    // HP
    const pct = Math.max(0, hp / maxHp) * 100;
    this.el.hpValue.textContent = Math.max(0, Math.ceil(hp));
    this.el.hpFill.style.width = `${pct}%`;
    this.el.hpLag.style.width = `${pct}%`;
    this.el.hpTrack.classList.toggle('low', hp < 300);
    this.el.hpValue.style.color = hp < 300 ? '#ff6b6b' : hp < 600 ? '#ffd166' : '#7dffb0';
    this.lastHp = hp;

    this.el.alive.textContent = alive;
    this.el.timer.textContent = fmtTime(timer);
    this.el.zoneTimer.textContent = zoneTime;
    this.el.zonePill.classList.toggle('danger', zoneDanger);

    // Arma
    if (weapon) {
      this.el.weaponIcon.textContent = weapon.emoji;
      this.el.weaponName.textContent = weapon.name;
      const rar = RARITY[weapon.rarity] || RARITY.common;
      this.el.weaponCat.textContent = `${weapon.category.toUpperCase()} · ${rar.label.toUpperCase()}`;
      this.el.weaponCat.style.color = rar.color;
      this.el.weaponIcon.style.borderColor = rar.color + '66';
      this.el.ammoMag.textContent = weapon.melee ? '∞' : (reloading ? '···' : ammo);
      this.el.ammoReserve.textContent = weapon.melee ? '∞' : reserve;
      this.el.ammoMag.style.color = !weapon.melee && ammo === 0 ? '#ff3b4e' : '';
      // Especial
      if (weapon.special) {
        this.el.specialBtn.disabled = false;
        this.el.specialIcon.textContent = weapon.emoji;
        this.el.specialName.textContent = weapon.special.name;
        this.el.specialDesc.textContent = weapon.special.desc;
        const ratio = specialRemaining > 0 ? specialRemaining / specialTotal : 0;
        this.el.specialCd.style.width = `${ratio * 100}%`;
        this.el.specialBtn.classList.toggle('ready', specialRemaining <= 0);
      } else {
        this.el.specialBtn.disabled = true;
        this.el.specialIcon.textContent = '✨';
        this.el.specialName.textContent = 'SIN ESPECIAL';
        this.el.specialDesc.textContent = 'Busca un arma mítica';
        this.el.specialCd.style.width = '0%';
        this.el.specialBtn.classList.remove('ready');
      }
    }
    // Slots
    this.el.weaponSlots.innerHTML = '';
    for (let i = 0; i < 3; i++) {
      const w = slots[i];
      const d = document.createElement('div');
      d.className = `wslot ${i === slotIndex ? 'active' : ''}`;
      d.innerHTML = w ? `<b>${w.emoji}</b><i>${w.name}</i>` : `<b>·</b><i>vacío</i>`;
      this.el.weaponSlots.appendChild(d);
    }

    // Estados
    this.el.statusZone.classList.toggle('hidden', !zoneDanger);
    this.el.statusGuard.classList.toggle('hidden', !(spawnGuard > 0));
    if (spawnGuard > 0) this.el.statusGuard.textContent = `🛡️ PROTEGIDO ${Math.ceil(spawnGuard)}s`;
    this.el.statusMask.classList.toggle('hidden', !(maskTime > 0));
    if (maskTime > 0) this.el.statusMask.textContent = `😷 MÁSCARA ${Math.ceil(maskTime)}s`;
    this.el.statusChickens.classList.toggle('hidden', !funado);

    // Timers
    if (this.bannerTimer > 0) {
      this.bannerTimer -= dt;
      if (this.bannerTimer <= 0) this.el.banner.classList.add('hidden');
    }
    if (this.toastTimer > 0) {
      this.toastTimer -= dt;
      if (this.toastTimer <= 0) this.el.toast.classList.remove('show');
    }
    if (this.hitTimer > 0) {
      this.hitTimer -= dt;
      if (this.hitTimer <= 0) this.el.crosshair.classList.remove('hit');
    }

    this.minimapT -= dt;
    if (this.minimapT <= 0) {
      this.minimapT = 0.1;
      this.drawMinimap(state.minimap || {});
    }
  }

  drawMinimap(m) {
    const ctx = this.mctx;
    const W = this.el.minimap.width, H = this.el.minimap.height;
    const scale = W / 420;
    const ox = W / 2, oz = H / 2;
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#0b0810';
    ctx.fillRect(0, 0, W, H);

    // terreno
    ctx.fillStyle = this.map.toxic ? '#1c1230' : this.map.ruined ? '#33312c' : '#2b2a22';
    ctx.beginPath(); ctx.arc(ox, oz, 196 * scale, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.14)'; ctx.lineWidth = 1; ctx.stroke();

    // ciudad / pueblo / volcán
    ctx.fillStyle = this.map.toxic ? 'rgba(255,62,165,0.18)' : 'rgba(255,255,255,0.09)';
    ctx.fillRect(ox + (95 - 68) * scale, oz + (-40 - 68) * scale, 136 * scale, 136 * scale);
    ctx.fillStyle = 'rgba(120,255,140,0.12)';
    ctx.beginPath(); ctx.arc(ox - 95 * scale, oz + 35 * scale, 52 * scale, 0, Math.PI * 2); ctx.fill();
    // volcán
    ctx.fillStyle = 'rgba(255,90,31,0.35)';
    ctx.beginPath(); ctx.arc(ox + 10 * scale, oz + 105 * scale, 30 * scale, 0, Math.PI * 2); ctx.fill();

    // zona segura
    if (m.safe) {
      const sx = ox + m.safe.x * scale, sz = oz + m.safe.z * scale;
      // sombra fuera
      ctx.save();
      ctx.beginPath(); ctx.rect(0, 0, W, H); ctx.arc(sx, sz, m.safe.r * scale, 0, Math.PI * 2, true);
      ctx.fillStyle = 'rgba(255,40,60,0.16)'; ctx.fill();
      ctx.restore();
      ctx.strokeStyle = this.map.accent; ctx.lineWidth = 1.6;
      ctx.beginPath(); ctx.arc(sx, sz, m.safe.r * scale, 0, Math.PI * 2); ctx.stroke();
    }
    // lava / tormenta / tóxico
    if (m.hazardRadius > 0) {
      ctx.strokeStyle = this.map.accent; ctx.lineWidth = 1.4;
      ctx.setLineDash([3, 3]);
      ctx.beginPath(); ctx.arc(ox + 10 * scale, oz + 105 * scale, m.hazardRadius * scale, 0, Math.PI * 2); ctx.stroke();
      ctx.setLineDash([]);
    }
    // loot
    if (m.loot) {
      ctx.fillStyle = 'rgba(255,209,102,0.65)';
      for (const p of m.loot) ctx.fillRect(ox + p.x * scale - 1, oz + p.z * scale - 1, 2, 2);
    }
    // enemigos
    if (m.enemies) {
      ctx.fillStyle = '#ff4d5e';
      for (const p of m.enemies) {
        ctx.beginPath(); ctx.arc(ox + p.x * scale, oz + p.z * scale, 1.9, 0, Math.PI * 2); ctx.fill();
      }
    }
    // jugador
    if (m.player) {
      const px = ox + m.player.x * scale, pz = oz + m.player.z * scale;
      ctx.save();
      ctx.translate(px, pz);
      ctx.rotate(m.player.yaw);
      ctx.fillStyle = '#fff';
      ctx.beginPath(); ctx.moveTo(0, -5); ctx.lineTo(3.6, 4); ctx.lineTo(0, 2.2); ctx.lineTo(-3.6, 4); ctx.closePath(); ctx.fill();
      ctx.restore();
      ctx.strokeStyle = 'rgba(255,255,255,0.35)';
      ctx.beginPath(); ctx.arc(px, pz, 6, 0, Math.PI * 2); ctx.stroke();
    }
    // marco
    ctx.strokeStyle = 'rgba(255,255,255,0.15)';
    ctx.strokeRect(0.5, 0.5, W - 1, H - 1);
  }

  destroy() {
    this.el.feed.innerHTML = '';
    this.el.killfeed.innerHTML = '';
    this.el.floatLayer.innerHTML = '';
  }
}
