// MEME SHOTER — game data
export const CHARACTERS = [
  {
    id: 'pana', name: 'Pana Miguel', icon: '🐱', color: '#e1a86b', accent: '#6f4b2b',
    tag: 'El pana de siempre',
    passive: 'Piel gruesa: recibe 20% menos daño de explosiones.',
    special: 'Furia Gatuna',
    specialDesc: 'Zarpazo circular que empuja y daña a todo lo que esté cerca.',
  },
  {
    id: 'tulia', name: 'Doña Tulia', icon: '👵', color: '#b45d8a', accent: '#f2d06b',
    tag: 'La reina del chisme',
    passive: 'El Lanza-Chismes hace +20% de daño.',
    special: 'Chisme Explosivo',
    specialDesc: 'Doña Gladys grita un secreto y detona un área enorme.',
  },
  {
    id: 'chad', name: 'GigaChad', icon: '🗿', color: '#a7b3bb', accent: '#2c3238',
    tag: 'Mandíbula de acero',
    passive: 'Sus burlas lanzan ondas de choque visuales.',
    special: 'Onda Gigachad',
    specialDesc: 'Pisa el suelo y lanza a volar a los rivales cercanos.',
  },
  {
    id: 'troll', name: 'Trollface', icon: '😈', color: '#e8e8e8', accent: '#1e1e1e',
    tag: 'Problema?',
    passive: 'Al eliminar a alguien suelta una risa en el chat.',
    special: 'Risa Tóxica',
    specialDesc: 'Una risa insoportable ralentiza y daña a los rivales.',
  },
  {
    id: 'hacker', name: 'El Gato Hacker', icon: '🐈‍⬛', color: '#57e3ff', accent: '#1a2540',
    tag: 'Root access',
    passive: 'Abre cajas de loot más rápido.',
    special: 'Pirateo Total',
    specialDesc: 'Revela a todos los enemigos cercanos y marca su posición.',
  },
  {
    id: 'abuelo', name: 'Abuelo con Chancla', icon: '🩴', color: '#d9b45c', accent: '#6b4a28',
    tag: 'Puntería legendaria',
    passive: 'La Chancla Divina hace +20% de daño.',
    special: 'Chanclazo Divino',
    specialDesc: 'Un búmeran cuántico que golpea a todos a su paso.',
  },
  {
    id: 'abuela', name: 'Abuela con Escoba', icon: '🧹', color: '#8fc7a7', accent: '#4a3b6b',
    tag: 'Coscorrones de amor',
    passive: 'Los ataques cuerpo a cuerpo derriban al enemigo.',
    special: 'Escobazo Supremo',
    specialDesc: 'Barré el piso con todo lo que se mueva.',
  },
  {
    id: 'nero', name: 'Ñero Galáctico', icon: '🛸', color: '#8c6cff', accent: '#31ffc8',
    tag: 'Directo desde Andrómeda',
    passive: 'Ignora parcialmente la gravedad reducida.',
    special: 'Gravedad Cero',
    specialDesc: 'Activa gravedad cero y acelera tu movimiento.',
  },
]

export const MAPS = [
  {
    id: 'volcano', name: 'La Zona de la Erupción', short: 'ERUPCIÓN', icon: '🌋',
    desc: 'Ciudad, pueblo rural, cordillera y un volcán que entra en erupción a los 2 minutos.',
    hazard: 'Ríos de lava y rocas ardientes',
    colors: ['#ff9a3c', '#7d2f3f'], ground: '#6f7a4c', fog: '#c58a63', top: '#f2b06a', bottom: '#4d2b45',
    stars: false,
  },
  {
    id: 'wasteland', name: 'El Posapocalipsis', short: 'RUINAS', icon: '☢️',
    desc: 'Ruinas de la ciudad, un búnker en la cordillera y una tormenta de ceniza que cierra el mapa.',
    hazard: 'Tormenta de ceniza que avanza',
    colors: ['#8a7d76', '#3a2f38'], ground: '#555044', fog: '#625a5a', top: '#7d7070', bottom: '#1b1820',
    stars: false,
  },
  {
    id: 'cyber', name: 'Neón Ciber-Barrio', short: 'NEÓN', icon: '🌆',
    desc: 'Callejones de neón, generadores colapsados y humo tóxico de los leus podridos.',
    hazard: 'Humo tóxico de los leus',
    colors: ['#ff2bd6', '#22e7ff'], ground: '#1d1b2f', fog: '#201338', top: '#1b0d36', bottom: '#07040f',
    stars: true,
  },
]

export const WEAPONS = {
  pio: {
    id: 'pio', name: 'Pio-Pio Glock', type: 'Pistola', icon: '🔫', rarity: 'común',
    damage: 20, rpm: 360, mag: 15, reserve: 90, reload: 1.15, spread: 0.012, auto: false,
    range: 90, color: '#ffdd55', accent: '#f0a400', sound: 'pistol', slot: 1,
    desc: 'Pistola de emergencia con balas de Monopoly.',
  },
  deagle: {
    id: 'deagle', name: 'Desert Eagle', type: 'Pistola', icon: '🔫', rarity: 'raro',
    damage: 85, rpm: 180, mag: 7, reserve: 49, reload: 1.7, spread: 0.016, auto: false,
    range: 120, color: '#d7dde6', accent: '#2d3748', sound: 'heavy', slot: 1,
    desc: 'Alto impacto, retroceso de mula.',
  },
  mp5: {
    id: 'mp5', name: 'MP5', type: 'Subfusil', icon: '💨', rarity: 'raro',
    damage: 28, rpm: 720, mag: 30, reserve: 150, reload: 1.5, spread: 0.022, auto: true,
    range: 80, color: '#3d4652', accent: '#131820', sound: 'smg', slot: 1,
    desc: 'Fundir enemigos de cerca con cadencia brutal.',
  },
  ak: {
    id: 'ak', name: 'AK-47', type: 'Rifle', icon: '🎯', rarity: 'épico',
    damage: 52, rpm: 600, mag: 30, reserve: 150, reload: 1.9, spread: 0.017, auto: true,
    range: 180, color: '#c27a37', accent: '#2a1c12', sound: 'rifle', slot: 1,
    desc: 'El equilibrio perfecto para el caos.',
  },
  shotgun: {
    id: 'shotgun', name: 'Remington 870', type: 'Escopeta', icon: '💥', rarity: 'épico',
    damage: 24, pellets: 7, rpm: 75, mag: 6, reserve: 30, reload: 2.4, spread: 0.075, auto: false,
    range: 45, color: '#74432a', accent: '#1f2428', sound: 'shotgun', slot: 1,
    desc: '120–150 de daño si te acercas lo suficiente.',
  },
  awm: {
    id: 'awm', name: 'AWM', type: 'Francotirador', icon: '🔭', rarity: 'legendario',
    damage: 220, rpm: 42, mag: 5, reserve: 20, reload: 3.0, spread: 0.001, auto: false,
    range: 400, color: '#315a3c', accent: '#111', sound: 'sniper', slot: 1, zoom: 62,
    desc: 'Puntería milimétrica. 400 de daño en la cabeza.',
  },
  minigun: {
    id: 'minigun', name: 'Minigun', type: 'Pesada', icon: '⚙️', rarity: 'legendario',
    damage: 40, rpm: 1100, mag: 120, reserve: 360, reload: 4.5, spread: 0.035, auto: true,
    range: 140, color: '#8a949e', accent: '#20262c', sound: 'minigun', slot: 1, slow: 0.72,
    desc: 'Fuego sostenido masivo, movilidad reducida.',
  },
  chisme: {
    id: 'chisme', name: 'El Lanza-Chismes', type: 'Lanzallamas', icon: '👵‍🔥', rarity: 'mítico',
    damage: 26, rpm: 480, mag: 100, reserve: 300, reload: 2.8, spread: 0.04, auto: true,
    range: 22, color: '#b8442f', accent: '#f2c14e', sound: 'flame', slot: 1, flame: true,
    desc: 'Doña Gladys escupe fuego y cotilleo continuo.',
  },
  memes: {
    id: 'memes', name: 'Cañón de Memes Añejos', type: 'Explosiva', icon: '🗿', rarity: 'mítico',
    damage: 80, rpm: 90, mag: 6, reserve: 24, reload: 2.4, spread: 0.01, auto: false,
    range: 130, color: '#b7b7b7', accent: '#5c3a8a', sound: 'thump', slot: 1, explosive: true,
    desc: 'Tira los mejores memes del siglo. 1 m de radio.',
  },
  chancla: {
    id: 'chancla', name: 'Chancla Divina', type: 'Mítica', icon: '🩴', rarity: 'mítico',
    damage: 80, rpm: 150, mag: 1, reserve: 999, reload: 0, spread: 0, auto: false,
    range: 50, color: '#f6b73c', accent: '#7b3f8f', sound: 'slap', slot: 2, melee: true, boomerang: true,
    desc: 'Búmeran cuántico guiado por la ley materna.',
  },
  bate: {
    id: 'bate', name: 'Bate Bonk', type: 'Cuerpo a cuerpo', icon: '🏏', rarity: 'mítico',
    damage: 78, rpm: 60, mag: 1, reserve: 999, reload: 0, spread: 0, auto: false,
    range: 4, color: '#cf984f', accent: '#6d3d1f', sound: 'bonk', slot: 2, melee: true, stun: 1.5,
    desc: 'Le perteneció a Cheems. Aturde 1.5 s.',
  },
  claws: {
    id: 'claws', name: 'Furia de Garras', type: 'Mítica', icon: '🐾', rarity: 'mítico',
    damage: 60, rpm: 240, mag: 1, reserve: 999, reload: 0, spread: 0, auto: true,
    range: 3.5, color: '#ff5b5b', accent: '#1e1e1e', sound: 'claw', slot: 2, melee: true,
    desc: 'Zarpazos mecánicos ultra rápidos.',
  },
}

export const WEAPON_POOL = ['deagle', 'mp5', 'ak', 'shotgun', 'awm', 'minigun', 'chisme', 'memes', 'chancla', 'bate', 'claws']

export const BOT_NAMES = [
  'xX_Dark_Sasuke_Xx', 'ElPanaDelBarrio', 'DoñaGladys', 'TilinTrap', 'MemeLord77',
  'GatoConBotas', 'LaRataInmunda', 'ChadSupremo', 'Trollface_Real', 'Siuuuu',
  'NoobMaster69', 'ElBrayan', 'PepitoPerez', 'ChorizoVerde', 'CocodriloDundee',
  'ElChinoCudeiro', 'MamasitaLinda', 'ÑeroPro', 'PixelKiller', 'VergilDMC',
  'ElAbueloPro', 'LaAbuelaFuria', 'CapiCheems', 'Hamburguesa69', 'ElMonoChino',
  'DonComedia', 'ElPapu', 'SombraNocturna', 'TilinInsano', 'JuanitoAlimaña',
]

export const CHAT_LINES = [
  'gg ez', 'campero detectado 👀', '¿quién me disparó?', 'esto está re bug',
  'pásenme un arma', 'no manches', 'jajaja qué risa', 'la chancla no falla',
  'me voy a la ciudad', 'el volcán ya va a explotar', 'bro?', 'lag lag lag',
  '¿hay loot en el pueblo?', 'revívanme... ah no, es solo', 'puro meme shoter',
]

export const MEME_KILL_LINES = [
  'se lo comió la chancla', 'f en el chat', 'skill issue', 'te falta calle',
  'eso dolió hasta en 4K', 'gg no re', 'a llorar al lobby', 'pana Miguel no perdona',
  'te funaron', 'eso fue un palazo de Cheems',
]

export function pick(arr, rng = Math.random) {
  return arr[Math.floor(rng() * arr.length)]
}
