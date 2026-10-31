import './style.css';
import * as THREE from 'three';
import { Menu } from './ui/Menu.js';
import { Game } from './Game.js';

const canvas = document.getElementById('game-canvas');
const loading = document.getElementById('loading');
const loadFill = document.getElementById('load-fill');
const loadTitle = document.getElementById('load-title');
const loadSub = document.getElementById('load-sub');

let renderer = null;
let game = null;
let busy = false;
let current = { map: null, skin: null, quality: 'auto' };

const touch = matchMedia('(pointer: coarse)').matches || (navigator.maxTouchPoints > 0 && innerWidth < 1024);

function ensureRenderer() {
  if (renderer) return renderer;
  renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: !touch,
    powerPreference: 'high-performance',
    stencil: false,
    alpha: false,
  });
  renderer.setSize(innerWidth, innerHeight, false);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NoToneMapping;
  return renderer;
}

function showLoading(title = 'GENERANDO EL CAOS', sub = 'Colocando pollos jueces...') {
  loadTitle.textContent = title;
  loadSub.textContent = sub;
  loadFill.style.width = '8%';
  loading.classList.remove('hidden');
  let p = 8;
  const timer = setInterval(() => {
    p = Math.min(92, p + 7 + Math.random() * 14);
    loadFill.style.width = `${p}%`;
  }, 70);
  return () => {
    clearInterval(timer);
    loadFill.style.width = '100%';
    setTimeout(() => loading.classList.add('hidden'), 180);
  };
}

function nextFrame() {
  return new Promise((res) => requestAnimationFrame(() => requestAnimationFrame(res)));
}

async function startGame(map, skin, quality) {
  if (busy) return;
  busy = true;
  current = { map, skin, quality };
  document.getElementById('end-screen').classList.add('hidden');
  document.getElementById('pause').classList.add('hidden');
  menu.hide();
  const done = showLoading('GENERANDO EL CAOS', `${map.name} · ${skin.name}`);

  await nextFrame();
  await new Promise((r) => setTimeout(r, 160));

  try {
    ensureRenderer();
    if (game) { game.dispose(); game = null; }
    game = new Game({
      renderer,
      map,
      skin,
      quality,
      onRestart: () => restart(),
      onExit: () => backToMenu(),
    });
    window.__game = game;
    document.body.classList.add('playing');
  } catch (err) {
    console.error(err);
    loadTitle.textContent = 'ALGO EXPLOTÓ';
    loadSub.textContent = String(err?.message || err);
    loadFill.style.width = '100%';
    loadFill.style.background = '#ff3b4e';
    busy = false;
    return;
  }
  done();
  busy = false;
}

function restart() {
  if (busy) return;
  if (game) { game.dispose(); game = null; }
  document.getElementById('end-screen').classList.add('hidden');
  document.getElementById('hud').classList.add('hidden');
  startGame(current.map, current.skin, current.quality);
}

function backToMenu() {
  if (busy) return;
  if (game) { game.dispose(); game = null; }
  window.__game = null;
  document.body.classList.remove('playing');
  document.getElementById('end-screen').classList.add('hidden');
  document.getElementById('pause').classList.add('hidden');
  document.getElementById('hud').classList.add('hidden');
  menu.show();
}

const menu = new Menu({ onPlay: (map, skin, quality) => startGame(map, skin, quality) });

// Ajuste de viewport móvil (barra de navegación)
function onResize() {
  if (renderer) renderer.setSize(innerWidth, innerHeight, false);
  if (game) game.resize();
}
addEventListener('resize', onResize);
addEventListener('orientationchange', () => setTimeout(onResize, 120));

// Pausa al perder foco (solo si hay partida)
addEventListener('blur', () => {
  if (game && (game.state === 'playing' || game.state === 'drop')) game.pause();
});

// Evitar zoom/scroll táctil accidental
document.addEventListener('touchmove', (e) => {
  if (e.touches.length > 1) e.preventDefault();
}, { passive: false });

console.log('%cMEME·SHOTER','background:linear-gradient(90deg,#ff7a2f,#ff3ea5);color:#1a0c08;font:900 28px Impact;padding:6px 14px;border-radius:6px');
console.log('%c30 jugadores · 1000 HP · 60 FPS móvil · pollos justicieros','color:#ffd166;font:12px system-ui');
