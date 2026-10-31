// Catálogo completo del arsenal. Los daños están calibrados contra 1000 HP.
// fireRate = segundos entre disparos. special = habilidad mítica (botón Q / ESPECIAL).

const S = (name, desc, cooldown, type, extra = {}) => ({ name, desc, cooldown, type, ...extra });

export const WEAPONS = {
  // ── MÍTICAS ────────────────────────────────────────────────────────────────
  garras: {
    id: 'garras', name: 'Furia de Garras', emoji: '🐾', category: 'Mítica', rarity: 'mythic',
    damage: 46, fireRate: 0.19, mag: Infinity, reserve: Infinity, reload: 0, spread: 0.02,
    range: 3.1, melee: true, moveSpeed: 1.12, knockback: 2.5,
    desc: 'Zarpazos mecánicos ultra rápidos. La furia de Miguel.',
    special: S('Frenesí Gatuno', 'Dash + 5 zarpazos impecables', 12, 'flurry', { hits: 5, damage: 46 }),
  },
  bate: {
    id: 'bate', name: 'Bate Bonk', emoji: '🏏', category: 'Mítica', rarity: 'mythic',
    damage: 78, fireRate: 1.0, mag: Infinity, reserve: Infinity, reload: 0, spread: 0,
    range: 3.4, melee: true, stun: 1.5, knockback: 3,
    desc: 'Le perteneció a Cheems alguna vez... (nostalgia porque falleció)',
    special: S('Palazo Cheems Gigachat', 'Manda a volar al rival · 128 de daño', 10, 'smash', { damage: 128, knockback: 16 }),
  },
  memes: {
    id: 'memes', name: 'Cañón de Memes Añejos', emoji: '🗿', category: 'Mítica', rarity: 'mythic',
    damage: 80, fireRate: 0.9, mag: 4, reserve: 24, reload: 2.1, spread: 0.01,
    projectileSpeed: 42, aoe: 1.0, range: 120,
    desc: 'Tira los mejores memes del siglo (el etesech, el Pepe XD y esas vainas)',
    special: S('Láser Nostálgico', 'Rayo multicolor: 100 daño + 50/s durante 10s', 16, 'laser', { damage: 100, burn: 50, duration: 10 }),
  },
  chancla: {
    id: 'chancla', name: 'Chancla Divina / Latina', emoji: '🩴', category: 'Mítica', rarity: 'mythic',
    damage: 80, fireRate: 0.4, mag: Infinity, reserve: Infinity, reload: 0, spread: 0,
    range: 50, melee: true, rangedMelee: true, boomerang: true, knockback: 2,
    desc: 'Búmeran cuántico guiado por la ley materna. Viaja 50 m y regresa.',
    special: S('¡Perdiste el año! 💀', 'Combo de chanclazos: 300 de daño', 14, 'smash', { damage: 300, knockback: 10 }),
  },
  chismes: {
    id: 'chismes', name: 'El Lanza-Chismes', emoji: '👵', category: 'Mítica', rarity: 'mythic',
    damage: 28, fireRate: 0.16, mag: 60, reserve: 180, reload: 2.8, spread: 0.09,
    range: 18, flame: true, moveSpeed: 0.92,
    desc: 'Lanzallamas artesanal con doña Gladys amarrada en la punta. Fuego y cotilleo continuo.',
    special: S('Chisme a todo pulmón', 'Doña Gladys grita: 280 de daño en área', 18, 'aoe', { damage: 280, radius: 7 }),
  },

  // ── PISTOLAS ───────────────────────────────────────────────────────────────
  pio: {
    id: 'pio', name: 'Pio-Pío Glock', emoji: '🐤', category: 'Pistola', rarity: 'common',
    damage: 17, fireRate: 0.16, mag: 15, reserve: 90, reload: 1.1, spread: 0.035, range: 70,
    desc: 'Pistola de billetes de Monopoly. Arma de emergencia al caer del paracaídas.',
  },
  m1911: {
    id: 'm1911', name: 'M1911', emoji: '🔫', category: 'Pistola', rarity: 'common',
    damage: 35, fireRate: 0.24, mag: 8, reserve: 64, reload: 1.3, spread: 0.025, range: 80,
    desc: 'Precisión y cadencia equilibradas para empezar.',
  },
  beretta: {
    id: 'beretta', name: 'Beretta 92FS', emoji: '🔫', category: 'Pistola', rarity: 'common',
    damage: 35, fireRate: 0.2, mag: 15, reserve: 90, reload: 1.4, spread: 0.022, range: 80,
    desc: 'La clásica de los policías de película.',
  },
  glock: {
    id: 'glock', name: 'Glock 17', emoji: '🔫', category: 'Pistola', rarity: 'common',
    damage: 35, fireRate: 0.17, mag: 17, reserve: 102, reload: 1.2, spread: 0.028, range: 78,
    desc: 'Ligera, fiable y con cargador generoso.',
  },
  deagle: {
    id: 'deagle', name: 'Desert Eagle', emoji: '🦅', category: 'Pistola', rarity: 'rare',
    damage: 85, fireRate: 0.62, mag: 7, reserve: 42, reload: 1.9, spread: 0.02, recoil: 0.05, range: 110,
    desc: 'Alto impacto por bala, pero cadencia lenta y retroceso fuerte.',
  },
  magnum: {
    id: 'magnum', name: '.44 Magnum', emoji: '🤠', category: 'Pistola', rarity: 'rare',
    damage: 85, fireRate: 0.72, mag: 6, reserve: 36, reload: 2.1, spread: 0.018, recoil: 0.06, range: 115,
    desc: 'Seis balas. Seis razones para no asomarte.',
  },

  // ── SUBFUSILES ─────────────────────────────────────────────────────────────
  uzi: {
    id: 'uzi', name: 'Uzi', emoji: '💨', category: 'Subfusil', rarity: 'common',
    damage: 25, fireRate: 0.075, mag: 32, reserve: 160, reload: 1.6, spread: 0.055, range: 55,
    desc: 'Cadencia altísima para fundir enemigos de cerca.',
  },
  mp5: {
    id: 'mp5', name: 'MP5', emoji: '💨', category: 'Subfusil', rarity: 'rare',
    damage: 27, fireRate: 0.08, mag: 30, reserve: 150, reload: 1.7, spread: 0.045, range: 62,
    desc: 'El equilibrio alemán entre precisión y rociada.',
  },
  tec9: {
    id: 'tec9', name: 'TEC-9', emoji: '💨', category: 'Subfusil', rarity: 'common',
    damage: 25, fireRate: 0.07, mag: 32, reserve: 160, reload: 1.8, spread: 0.065, range: 50,
    desc: 'Rocía sin piedad. Precisión opcional.',
  },
  p90: {
    id: 'p90', name: 'P90', emoji: '💨', category: 'Subfusil', rarity: 'rare',
    damage: 26, fireRate: 0.07, mag: 50, reserve: 150, reload: 2.0, spread: 0.05, range: 60,
    desc: 'Cargador de 50. La presión no se acaba.',
  },
  vector: {
    id: 'vector', name: 'KRISS Vector', emoji: '💨', category: 'Subfusil', rarity: 'epic',
    damage: 30, fireRate: 0.062, mag: 33, reserve: 165, reload: 1.9, spread: 0.038, range: 58,
    desc: 'Cadencia de vértigo y control sorprendente.',
  },
  mp7: {
    id: 'mp7', name: 'HK MP7', emoji: '💨', category: 'Subfusil', rarity: 'rare',
    damage: 26, fireRate: 0.068, mag: 40, reserve: 160, reload: 1.7, spread: 0.042, range: 60,
    desc: 'Compacta, rápida y letal en pasillos.',
  },

  // ── ESCOPETAS ──────────────────────────────────────────────────────────────
  remington: {
    id: 'remington', name: 'Remington 870', emoji: '💥', category: 'Escopeta', rarity: 'rare',
    damage: 135, fireRate: 0.85, mag: 6, reserve: 30, reload: 2.6, spread: 0.14, pellets: 8, range: 28,
    desc: 'Daño masivo a corta distancia si impactan todos los perdigones.',
  },
  doblecano: {
    id: 'doblecano', name: 'Doble Cañón', emoji: '💥', category: 'Escopeta', rarity: 'rare',
    damage: 150, fireRate: 0.6, mag: 2, reserve: 20, reload: 2.2, spread: 0.16, pellets: 10, range: 25,
    desc: 'Dos tiros. Suficiente para mandar a alguien al lobby.',
  },
  benelli: {
    id: 'benelli', name: 'Benelli M4', emoji: '💥', category: 'Escopeta', rarity: 'epic',
    damage: 125, fireRate: 0.42, mag: 7, reserve: 35, reload: 2.8, spread: 0.13, pellets: 8, range: 30,
    desc: 'Semiautomática. El pasillo es tuyo.',
  },
  spas: {
    id: 'spas', name: 'SPAS-12', emoji: '💥', category: 'Escopeta', rarity: 'epic',
    damage: 140, fireRate: 0.5, mag: 8, reserve: 32, reload: 3.0, spread: 0.135, pellets: 9, range: 29,
    desc: 'Pompa o semiautomática, tú decides cómo duele.',
  },
  aa12: {
    id: 'aa12', name: 'AA-12', emoji: '💥', category: 'Escopeta', rarity: 'legendary',
    damage: 75, fireRate: 0.24, mag: 20, reserve: 60, reload: 3.2, spread: 0.15, pellets: 6, range: 26,
    desc: 'Fuego continuo de escopeta para presionar pasillos.',
  },

  // ── RIFLES ─────────────────────────────────────────────────────────────────
  ak47: {
    id: 'ak47', name: 'AK-47', emoji: '🎯', category: 'Rifle', rarity: 'rare',
    damage: 52, fireRate: 0.105, mag: 30, reserve: 120, reload: 2.2, spread: 0.04, range: 140,
    desc: 'El equilibrio perfecto para terrenos abiertos. Y para todo lo demás.',
  },
  m4a1: {
    id: 'm4a1', name: 'M4A1', emoji: '🎯', category: 'Rifle', rarity: 'rare',
    damage: 48, fireRate: 0.095, mag: 30, reserve: 120, reload: 2.0, spread: 0.032, range: 150,
    desc: 'Precisión y control. El rifle de los que leen las instrucciones.',
  },
  scar: {
    id: 'scar', name: 'SCAR-H', emoji: '🎯', category: 'Rifle', rarity: 'epic',
    damage: 55, fireRate: 0.12, mag: 20, reserve: 100, reload: 2.3, spread: 0.034, range: 155,
    desc: 'Pega como camión y suena como trueno.',
  },
  fal: {
    id: 'fal', name: 'FAL', emoji: '🎯', category: 'Rifle', rarity: 'epic',
    damage: 54, fireRate: 0.13, mag: 20, reserve: 100, reload: 2.4, spread: 0.036, range: 160,
    desc: 'El rifle de los clásicos. Retroceso con carácter.',
  },
  g36: {
    id: 'g36', name: 'G36', emoji: '🎯', category: 'Rifle', rarity: 'rare',
    damage: 47, fireRate: 0.1, mag: 30, reserve: 120, reload: 2.1, spread: 0.035, range: 145,
    desc: 'Ligero, versátil y muy alemán.',
  },
  m16: {
    id: 'm16', name: 'M16A4', emoji: '🎯', category: 'Rifle', rarity: 'rare',
    damage: 49, fireRate: 0.11, mag: 30, reserve: 120, reload: 2.2, spread: 0.03, range: 160,
    desc: 'Ráfagas limpias a larga distancia.',
  },
  famas: {
    id: 'famas', name: 'FAMAS', emoji: '🎯', category: 'Rifle', rarity: 'epic',
    damage: 46, fireRate: 0.085, mag: 25, reserve: 125, reload: 2.0, spread: 0.038, range: 140,
    desc: 'Cadencia francesa. Elegancia discutible, resultados claros.',
  },
  galil: {
    id: 'galil', name: 'Galil ACE', emoji: '🎯', category: 'Rifle', rarity: 'rare',
    damage: 51, fireRate: 0.1, mag: 35, reserve: 140, reload: 2.3, spread: 0.042, range: 135,
    desc: 'Cargador grande y aguante de sobra.',
  },

  // ── FRANCOTIRADORES ────────────────────────────────────────────────────────
  awm: {
    id: 'awm', name: 'AWM', emoji: '🔭', category: 'Francotirador', rarity: 'legendary',
    damage: 200, headshot: 360, fireRate: 1.45, mag: 5, reserve: 25, reload: 3.0, spread: 0.001, range: 320, scope: 3,
    desc: 'Puntería milimétrica. 360 a la cabeza y a otra cosa.',
  },
  barrett: {
    id: 'barrett', name: 'Barrett M82', emoji: '🔭', category: 'Francotirador', rarity: 'legendary',
    damage: 200, headshot: 400, fireRate: 1.8, mag: 10, reserve: 30, reload: 3.6, spread: 0.0015, range: 340, scope: 3.5,
    desc: 'Un rifle antimateria para gente con prisa.',
  },
  mosin: {
    id: 'mosin', name: 'Mosin-Nagant', emoji: '🔭', category: 'Francotirador', rarity: 'epic',
    damage: 200, headshot: 300, fireRate: 1.6, mag: 5, reserve: 25, reload: 2.8, spread: 0.001, range: 300, scope: 3,
    desc: 'Cerrojo viejo, resultados eternos.',
  },
  svd: {
    id: 'svd', name: 'SVD', emoji: '🔭', category: 'Francotirador', rarity: 'epic',
    damage: 200, headshot: 300, fireRate: 1.1, mag: 10, reserve: 40, reload: 2.8, spread: 0.002, range: 290, scope: 2.5,
    desc: 'Precisión soviética con cargador de sobra.',
  },
  vss: {
    id: 'vss', name: 'VSS Vintorez', emoji: '🔭', category: 'Francotirador', rarity: 'epic',
    damage: 200, headshot: 300, fireRate: 0.9, mag: 10, reserve: 40, reload: 2.6, spread: 0.003, range: 250, scope: 2.5, silenced: true,
    desc: 'Silencioso. Nadie sabe de dónde vino el susto.',
  },

  // ── PESADAS ────────────────────────────────────────────────────────────────
  rpg: {
    id: 'rpg', name: 'RPG-7', emoji: '🚀', category: 'Pesada', rarity: 'legendary',
    damage: 350, fireRate: 2.2, mag: 1, reserve: 6, reload: 3.8, spread: 0.01, range: 200,
    aoe: 6, projectileSpeed: 38, heavy: true,
    desc: 'Daño de 350 en área con explosión masiva.',
  },
  javelin: {
    id: 'javelin', name: 'Javelin', emoji: '🚀', category: 'Pesada', rarity: 'legendary',
    damage: 350, fireRate: 3.0, mag: 1, reserve: 5, reload: 4.2, spread: 0.01, range: 220,
    aoe: 7, projectileSpeed: 30, heavy: true,
    desc: 'Busca el calor de tus problemas y los borra del mapa.',
  },
  m79: {
    id: 'm79', name: 'M79', emoji: '🚀', category: 'Pesada', rarity: 'epic',
    damage: 350, fireRate: 1.9, mag: 1, reserve: 10, reload: 3.2, spread: 0.015, range: 150,
    aoe: 5, projectileSpeed: 34,
    desc: 'Lanzagranadas. Un tubo, una lección.',
  },
  minigun: {
    id: 'minigun', name: 'Minigun', emoji: '🌀', category: 'Pesada', rarity: 'legendary',
    damage: 40, fireRate: 0.05, mag: 150, reserve: 300, reload: 5.0, spread: 0.08, range: 130, heavy: true, moveSpeed: 0.68,
    desc: 'Fuego sostenido masivo a cambio de movilidad.',
  },
  m249: {
    id: 'm249', name: 'M249 SAW', emoji: '🌀', category: 'Pesada', rarity: 'epic',
    damage: 40, fireRate: 0.07, mag: 100, reserve: 300, reload: 4.6, spread: 0.06, range: 130, heavy: true, moveSpeed: 0.78,
    desc: 'Aguanta el gatillo. Aguanta el pasillo.',
  },
  m60: {
    id: 'm60', name: 'M60', emoji: '🌀', category: 'Pesada', rarity: 'rare',
    damage: 40, fireRate: 0.09, mag: 100, reserve: 300, reload: 4.8, spread: 0.07, range: 125, heavy: true, moveSpeed: 0.8,
    desc: 'Vieja escuela. Sigue escupiendo plomo.',
  },
  pkm: {
    id: 'pkm', name: 'PKM', emoji: '🌀', category: 'Pesada', rarity: 'rare',
    damage: 40, fireRate: 0.08, mag: 100, reserve: 300, reload: 4.7, spread: 0.075, range: 125, heavy: true, moveSpeed: 0.8,
    desc: 'Fuego de supresión con acento eslavo.',
  },

  // ── MELÉ ───────────────────────────────────────────────────────────────────
  bate_beisbol: {
    id: 'bate_beisbol', name: 'Bate de béisbol', emoji: '🏏', category: 'Melé', rarity: 'common',
    damage: 40, fireRate: 0.7, mag: Infinity, reserve: Infinity, reload: 0, spread: 0, range: 2.8, melee: true,
    desc: 'Remates sigilosos o destrucción del entorno.',
  },
  palanca: {
    id: 'palanca', name: 'Palanca', emoji: '🪓', category: 'Melé', rarity: 'common',
    damage: 55, fireRate: 0.9, mag: Infinity, reserve: Infinity, reload: 0, spread: 0, range: 2.9, melee: true,
    desc: 'Para abrir puertas. Y cráneos.',
  },
  cuchillo: {
    id: 'cuchillo', name: 'Cuchillo de combate', emoji: '🔪', category: 'Melé', rarity: 'rare',
    damage: 60, fireRate: 0.45, mag: Infinity, reserve: Infinity, reload: 0, spread: 0, range: 2.3, melee: true,
    desc: 'Rápido, silencioso, eficaz.',
  },
  katana: {
    id: 'katana', name: 'Katana', emoji: '⚔️', category: 'Melé', rarity: 'epic',
    damage: 90, fireRate: 0.85, mag: Infinity, reserve: Infinity, reload: 0, spread: 0, range: 3.2, melee: true,
    desc: 'Corte limpio. Estética impecable.',
  },
  mazo: {
    id: 'mazo', name: 'Mazo', emoji: '🔨', category: 'Melé', rarity: 'rare',
    damage: 85, fireRate: 1.2, mag: Infinity, reserve: Infinity, reload: 0, spread: 0, range: 2.9, melee: true,
    desc: 'Lento, contundente, memorable.',
  },
};

export const WEAPON_LIST = Object.values(WEAPONS);

export const STARTER_WEAPON = 'pio';

export const LOOT_POOL = {
  common: ['pio', 'm1911', 'beretta', 'glock', 'uzi', 'tec9', 'bate_beisbol', 'palanca'],
  rare: ['deagle', 'magnum', 'mp5', 'p90', 'mp7', 'remington', 'doblecano', 'ak47', 'm4a1', 'g36', 'm16', 'galil', 'm60', 'pkm', 'cuchillo', 'mazo'],
  epic: ['vector', 'benelli', 'spas', 'scar', 'fal', 'famas', 'mosin', 'svd', 'vss', 'm79', 'm249', 'katana'],
  legendary: ['aa12', 'awm', 'barrett', 'rpg', 'javelin', 'minigun'],
  mythic: ['garras', 'bate', 'memes', 'chancla', 'chismes'],
};

export const RARITY = {
  common: { label: 'Común', color: '#9fb3c8', glow: 0x9fb3c8 },
  rare: { label: 'Raro', color: '#4aa3ff', glow: 0x4aa3ff },
  epic: { label: 'Épico', color: '#b06bff', glow: 0xb06bff },
  legendary: { label: 'Legendario', color: '#ffb02e', glow: 0xffb02e },
  mythic: { label: 'Mítico', color: '#ff4d6d', glow: 0xff4d6d },
};

export function randomWeapon(rng = Math.random, tierBias = 0) {
  const roll = rng() + tierBias;
  let pool = LOOT_POOL.common;
  if (roll > 0.985) pool = LOOT_POOL.mythic;
  else if (roll > 0.93) pool = LOOT_POOL.legendary;
  else if (roll > 0.75) pool = LOOT_POOL.epic;
  else if (roll > 0.4) pool = LOOT_POOL.rare;
  return pool[Math.floor(rng() * pool.length)];
}

export function weaponDps(w) {
  if (!w) return 0;
  const pellets = w.pellets || 1;
  return (w.damage * pellets) / Math.max(0.05, w.fireRate);
}
