import * as THREE from 'three';
import { MAPS, SKINS } from '../data/maps.js';
import { createPlayerCharacter } from '../entities/Character.js';

const QUALITIES = ['auto', 'alta', 'baja'];
const QLABEL = { auto: 'AUTO', alta: 'ALTA', baja: 'BAJA' };

export class Menu {
  constructor({ onPlay }) {
    this.onPlay = onPlay;
    this.selectedMap = MAPS[0];
    this.selectedSkin = SKINS[0];
    this.quality = localStorage.getItem('ms-quality') || 'auto';
    this.raf = 0;
    this.visible = true;
    this.buildMaps();
    this.bindSkin();
    this.bindButtons();
    this.initPreview();
    this.applyQualityLabel();
  }

  buildMaps() {
    const list = document.getElementById('map-list');
    list.innerHTML = '';
    const thumbs = {
      erupcion: 'linear-gradient(160deg, #ff7a3d 0%, #6b2318 45%, #1b1216 100%)',
      posapocalipsis: 'linear-gradient(160deg, #b9ad94 0%, #55534a 45%, #1a1c1d 100%)',
      neon: 'linear-gradient(160deg, #ff3ea5 0%, #4b1a7a 45%, #090616 100%)',
    };
    MAPS.forEach((m) => {
      const card = document.createElement('button');
      card.className = `map-card ${m.id === this.selectedMap.id ? 'active' : ''}`;
      card.style.setProperty('--accent', m.accent);
      card.style.setProperty('--thumb', thumbs[m.id]);
      card.innerHTML = `
        <div class="map-thumb">${m.emoji}</div>
        <div class="map-info">
          <b>${m.name}</b>
          <small>${m.subtitle}</small>
        </div>
        <div class="map-hazard">${m.hazardShort}<span>${m.tag}</span></div>`;
      card.addEventListener('click', () => {
        this.selectedMap = m;
        document.querySelectorAll('.map-card').forEach((c) => c.classList.remove('active'));
        card.classList.add('active');
        document.documentElement.style.setProperty('--accent', m.accent);
      });
      list.appendChild(card);
    });
    document.documentElement.style.setProperty('--accent', this.selectedMap.accent);
  }

  bindSkin() {
    const buttons = [...document.querySelectorAll('[data-skin]')];
    const desc = document.getElementById('skin-desc');
    const badge = document.getElementById('skin-badge');
    const bonus = document.getElementById('skin-bonus');
    const apply = (id) => {
      this.selectedSkin = SKINS.find((s) => s.id === id) || SKINS[0];
      buttons.forEach((b) => b.classList.toggle('active', b.dataset.skin === id));
      desc.textContent = this.selectedSkin.desc;
      badge.textContent = this.selectedSkin.gloves ? 'GUANTES EQUIPADOS' : 'SIN GUANTES';
      badge.style.color = this.selectedSkin.gloves ? '#ff9a6b' : '#7dffb0';
      badge.style.borderColor = this.selectedSkin.gloves ? 'rgba(255,154,107,0.4)' : 'rgba(125,255,176,0.3)';
      bonus.textContent = `+${Math.round(this.selectedSkin.meleeBonus * 100)}%`;
      if (this.previewChar) {
        this.previewChar.setGloves(this.selectedSkin.gloves);
        this.previewChar.setWeapon(this.selectedSkin.gloves ? 'garras' : 'pio');
        this.previewChar.rig.rotation.y = 0;
      }
    };
    buttons.forEach((b) => b.addEventListener('click', () => apply(b.dataset.skin)));
    apply('miguel');
    this.applySkin = apply;
  }

  bindButtons() {
    document.getElementById('play-btn').addEventListener('click', () => {
      if (!this.visible) return;
      this.onPlay(this.selectedMap, this.selectedSkin, this.quality);
    });
    document.getElementById('quality-btn').addEventListener('click', () => {
      const i = QUALITIES.indexOf(this.quality);
      this.quality = QUALITIES[(i + 1) % QUALITIES.length];
      localStorage.setItem('ms-quality', this.quality);
      this.applyQualityLabel();
    });
    const how = document.getElementById('how-modal');
    document.getElementById('how-btn').addEventListener('click', () => how.classList.remove('hidden'));
    document.getElementById('how-close').addEventListener('click', () => how.classList.add('hidden'));
    how.addEventListener('click', (e) => { if (e.target === how) how.classList.add('hidden'); });
  }

  applyQualityLabel() {
    const el = document.getElementById('quality-label');
    if (el) el.textContent = QLABEL[this.quality];
  }

  initPreview() {
    const canvas = document.getElementById('skin-preview');
    if (!canvas) return;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'low-power' });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.previewRenderer = renderer;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 30);
    camera.position.set(0, 1.15, 2.6);
    camera.lookAt(0, 0.62, 0);

    scene.add(new THREE.HemisphereLight(0xffd9b0, 0x2a1a30, 2.0));
    const key = new THREE.DirectionalLight(0xffa060, 3);
    key.position.set(2, 3, 3);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0x35f0ff, 2);
    rim.position.set(-2, 1.5, -2);
    scene.add(rim);

    const pedestal = new THREE.Mesh(
      new THREE.CylinderGeometry(0.72, 0.86, 0.12, 24),
      new THREE.MeshLambertMaterial({ color: 0x2a1a30 })
    );
    pedestal.position.y = -0.06;
    scene.add(pedestal);
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.78, 0.86, 32),
      new THREE.MeshBasicMaterial({ color: 0xff7a2f, transparent: true, opacity: 0.7, side: THREE.DoubleSide })
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.01;
    scene.add(ring);

    // Piso de rejilla
    const grid = new THREE.GridHelper(6, 24, 0x6a3a8a, 0x2a1a30);
    grid.position.y = -0.07;
    scene.add(grid);

    this.previewChar = createPlayerCharacter(scene, this.selectedSkin);
    this.previewChar.setWeapon('pio');
    this.previewChar.root.scale.setScalar(1.25);
    this.previewScene = scene;
    this.previewCamera = camera;

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      if (r.width < 2) return;
      renderer.setSize(r.width, r.height, false);
      camera.aspect = r.width / Math.max(1, r.height);
      camera.updateProjectionMatrix();
    };
    this.previewResize = resize;
    resize();
    addEventListener('resize', resize);

    let t = 0;
    const loop = () => {
      if (!this.visible) { this.raf = 0; return; }
      this.raf = requestAnimationFrame(loop);
      t += 0.016;
      resize();
      if (this.previewChar) {
        this.previewChar.root.rotation.y = Math.sin(t * 0.5) * 0.6 + t * 0.12;
        this.previewChar.update(0.016, 0, true, false, false);
      }
      ring.rotation.z += 0.004;
      ring.material.opacity = 0.5 + Math.sin(t * 2) * 0.2;
      renderer.render(scene, camera);
    };
    loop();
  }

  hide() {
    this.visible = false;
    cancelAnimationFrame(this.raf);
    this.raf = 0;
    document.getElementById('menu').classList.add('hidden');
    if (this.previewRenderer) {
      this.previewRenderer.dispose();
      this.previewRenderer = null;
    }
    removeEventListener('resize', this.previewResize);
  }

  show() {
    this.visible = true;
    document.getElementById('menu').classList.remove('hidden');
    if (!this.previewRenderer) {
      // recrear preview al volver al menú (initPreview arranca su propio loop)
      this.initPreview();
    }
  }
}
