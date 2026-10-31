// Configuración de los tres mapas. El terreno base es compartido y cada mapa
// aplica su paleta, ruinas y mecánica de amenaza.

export const MAPS = [
  {
    id: 'erupcion',
    name: 'La Zona de la Erupción',
    tag: 'VOLCÁNICO',
    emoji: '🌋',
    subtitle: 'La ciudad, el pueblo y la cordillera rodean un volcán a punto de estallar.',
    hazard: 'A los 2 minutos el volcán entra en erupción: rocas ardientes y ríos de lava te obligan a moverte sin parar.',
    hazardShort: 'Erupción a los 2:00',
    zoneName: 'LAVA',
    accent: '#ff6b35',
    accent2: '#ffb02e',
    sky: { top: '#241018', mid: '#6b2a1c', bottom: '#ff9a4d', fog: 0x6a3524, fogDensity: 0.0029, sunDir: [-0.35, 0.22, 0.9] },
    sun: 0xffb27a, ambient: 0x7a5b52, hemi: 0xb07a5a,
    ground: '#5c3a2c',
    lava: true,
    storm: false,
    toxic: false,
    ruined: false,
    weather: 'ember',
  },
  {
    id: 'posapocalipsis',
    name: 'El Posapocalipsis',
    tag: 'RUINAS',
    emoji: '☢️',
    subtitle: 'El mismo mapa, arrasado. La ciudad y el pueblo son escombros; hay un búnker en la cordillera.',
    hazard: 'Una tormenta de ceniza avanza desde los bordes hacia el centro. El terreno se cierra y solo queda pelear.',
    hazardShort: 'Tormenta de ceniza',
    zoneName: 'CENIZA',
    accent: '#c9b18a',
    accent2: '#8a7a5a',
    sky: { top: '#20242a', mid: '#565a58', bottom: '#c8bda4', fog: 0x777568, fogDensity: 0.0048, sunDir: [0.2, 0.4, 0.85] },
    sun: 0xe8d8b8, ambient: 0x6a6a60, hemi: 0xa89e88,
    ground: '#4b4a3f',
    lava: false,
    storm: true,
    toxic: false,
    ruined: true,
    weather: 'ash',
  },
  {
    id: 'neon',
    name: 'Neón Ciber-Barrio',
    tag: 'CYBERPUNK',
    emoji: '🌆',
    subtitle: 'Callejones estrechos, letreros de neón podridos y generadores a punto de colapsar.',
    hazard: 'Los leus liberan humo tóxico. Busca máscaras de gas antiguas o la contaminación te manda al lobby.',
    hazardShort: 'Humo tóxico · máscaras',
    zoneName: 'TÓXICO',
    accent: '#ff3ea5',
    accent2: '#35f0ff',
    sky: { top: '#120a24', mid: '#4a1a6a', bottom: '#b02a8a', fog: 0x2a1244, fogDensity: 0.0055, sunDir: [0.35, 0.28, -0.75] },
    sun: 0xff7ad9, ambient: 0x4a3a7a, hemi: 0x9a5aff,
    ground: '#241a33',
    lava: false,
    storm: false,
    toxic: true,
    ruined: false,
    weather: 'neon',
  },
];

export function getMap(id) {
  return MAPS.find((m) => m.id === id) || MAPS[0];
}

export const SKINS = [
  {
    id: 'miguel',
    name: 'El Pana Miguel',
    tag: 'El pana de siempre',
    desc: 'Gatito tierno de 1.02 m y 12 kg. Pelaje realista en píxel art adaptado al 3D, traje táctico completo y cola animada. Sin guantes por defecto.',
    gloves: false,
    meleeBonus: 0,
  },
  {
    id: 'furia',
    name: 'Miguel Furioso',
    tag: 'Furia Gatuna',
    desc: 'Miguel con los guantes de combate equipados. Mantiene compatibilidad visual con las animaciones de ataque rápido cuerpo a cuerpo. +15% daño de melé.',
    gloves: true,
    meleeBonus: 0.15,
  },
];

export const BOT_NAMES = [
  'Cheems', 'Doge', 'El Pepe', 'Etesech', 'Doña Gladys', 'Juancho', 'La Rata',
  'Pepito', 'Among Us', 'Gigachad', 'Sr. Barriga', 'El Risas', 'Chabelo',
  'Momo', 'Snoop Dogg', 'La Chancla', 'Pollo Juan', 'Paloma Cósmica',
  'Tilín', 'El Bromas', 'Michi', 'Don Ramón', 'La Vecina', 'Bodoque',
  'Freddy', 'El Chavo', 'Pikachu', 'Sans', 'Shrek', 'El Temach',
];

export const CHAT_LINES = [
  'alguien vio un pollo por el pueblo?',
  'no entren a la ciudad, hay camper con sniper',
  'quién quiere duo?',
  'me caí del mapa y me salvaron las palomas',
  'el volcán está raro...',
  'vendo chancla divina, 3 kills',
  'no me funen, solo estaba looteando',
  'GG',
  'la lava me comió el loot',
  'Miguel > todos',
  'hay un tipo con guantes en el pueblo',
  'esto está más caliente que el reactor',
  'me teleportó un pollo ayuda',
  'el que dispara primero pierde',
  'quedan muy pocos, cuidado',
];
