// Мебель и оборудование базы по плану модернизации: каюты (кровати, тумбочки, шкафы, столы), столовая,
// медицина (функциональные кровати, операционный стол, мониторы), санблоки (душевые, умывальники, туалеты),
// спортзал (дорожки, велотренажёры, силовая рама, скамья, маты, груша), лаборатории (вытяжные и биобоксы,
// приборные стойки, испытательный стенд, колбы с образцами), военная зона (стойки с оружием, стол-карта,
// экран, ряды кресел) и цех (станки).
// Предметы строятся в локальной рамке площадки (как в galley.js): x — вдоль col, z — вдоль row.
// item.face — сторона, к которой предмет обращён спиной (у стены — к этой стене): N, E, S, W.
import * as THREE from 'three';
import { canvasTexture, mulberry32, screenTexture } from './lib.js';

const TILE = 1.25;
const WALL_FACE = 0.09;            // внутренняя грань стены от линии клетки

// ---------------- материалы ----------------
const cache = new Map();
const once = (key, make) => { if (!cache.has(key)) cache.set(key, make()); return cache.get(key); };
const standard = (key, options, boost) => once(key, () => {
  const material = new THREE.MeshStandardMaterial(options);
  if (boost) material.userData.envBoost = boost;
  return material;
});

// ткань: мелкая рябь переплетения
function fabricTexture(base, seed) {
  return once('fabricTexture' + base + seed, () => {
    const size = 128, rng = mulberry32(seed);
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = size;
    const context = canvas.getContext('2d');
    context.fillStyle = `rgb(${base})`;
    context.fillRect(0, 0, size, size);
    for (let index = 0; index < 1400; index++) {
      const tone = rng() < 0.5 ? 255 : 0;
      context.fillStyle = `rgba(${tone},${tone},${tone},${0.03 + rng() * 0.04})`;
      context.fillRect(Math.floor(rng() * size), Math.floor(rng() * size), 1 + Math.floor(rng() * 2), 1);
    }
    return canvasTexture(canvas, { repeat: 2 });
  });
}
// ламинат «под дерево»: продольные волокна
function woodTexture() {
  return once('woodTexture', () => {
    const size = 256, rng = mulberry32(17);
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = size;
    const context = canvas.getContext('2d');
    context.fillStyle = 'rgb(150,112,74)';
    context.fillRect(0, 0, size, size);
    for (let line = 0; line < 160; line++) {
      const y = rng() * size, tone = rng();
      context.fillStyle = `rgba(${tone > 0.5 ? 190 : 90},${tone > 0.5 ? 146 : 62},${tone > 0.5 ? 100 : 36},0.18)`;
      context.fillRect(0, y, size, 1 + rng() * 2);
    }
    return canvasTexture(canvas, { repeat: 1 });
  });
}
// резиновое покрытие спортзала: крошка
function rubberTexture() {
  return once('rubberTexture', () => {
    const size = 128, rng = mulberry32(23);
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = size;
    const context = canvas.getContext('2d');
    context.fillStyle = 'rgb(46,48,52)';
    context.fillRect(0, 0, size, size);
    for (let index = 0; index < 900; index++) {
      const color = rng() < 0.12 ? '160,60,40' : rng() < 0.5 ? '70,72,76' : '30,31,34';
      context.fillStyle = `rgba(${color},0.8)`;
      context.fillRect(Math.floor(rng() * size), Math.floor(rng() * size), 2, 2);
    }
    return canvasTexture(canvas, { repeat: 2 });
  });
}

const MATS = {
  frame: () => standard('fFrame', { color: 0x5c646a, roughness: 0.5, metalness: 0.5 }, 1.5),
  steel: () => standard('fSteel', { color: 0xc4c9ce, roughness: 0.35, metalness: 0.65 }, 2.5),
  darkSteel: () => standard('fDarkSteel', { color: 0x30353a, roughness: 0.5, metalness: 0.5 }),
  black: () => standard('fBlack', { color: 0x16181b, roughness: 0.6, metalness: 0.2 }),
  white: () => standard('fWhite', { color: 0xe6e8e6, roughness: 0.45, metalness: 0.05 }),
  cream: () => standard('fCream', { color: 0xd8d2c2, roughness: 0.6 }),
  wood: () => standard('fWood', { map: woodTexture(), roughness: 0.55 }),
  cabinetGrey: () => standard('fCabinetGrey', { color: 0x8e979c, roughness: 0.55, metalness: 0.25 }),
  olive: () => standard('fOlive', { color: 0x5d6648, roughness: 0.7, metalness: 0.1 }),
  blanket: (color) => standard('fBlanket' + color, { map: fabricTexture(color, 3), roughness: 0.95 }),
  sheet: () => standard('fSheet', { map: fabricTexture('226,228,224', 5), roughness: 0.95 }),
  upholstery: (color) => standard('fUph' + color, { map: fabricTexture(color, 9), roughness: 0.9 }),
  glass: () => standard('fGlass', { color: 0xa8c8d4, roughness: 0.05, metalness: 0.1, transparent: true, opacity: 0.35 }),
  tintedGlass: () => standard('fTinted', { color: 0x203840, roughness: 0.1, metalness: 0.3 }),
  ceramic: () => standard('fCeramic', { color: 0xf2f2ee, roughness: 0.2, metalness: 0.0 }, 1.5),
  chrome: () => standard('fChrome', { color: 0xe8ecf0, roughness: 0.15, metalness: 0.9 }, 3),
  rubber: () => standard('fRubber', { map: rubberTexture(), roughness: 0.95 }),
  mat: () => standard('fMat', { color: 0x2a4c7a, roughness: 0.85 }),
  red: () => standard('fRed', { color: 0xa82a20, roughness: 0.5, metalness: 0.2 }),
  orange: () => standard('fOrange', { color: 0xd8742a, roughness: 0.5, metalness: 0.2 }),
  yellow: () => standard('fYellow', { color: 0xd8b024, roughness: 0.5, metalness: 0.2 }),
  green: () => standard('fGreen', { color: 0x2f8a52, roughness: 0.5 }),
  leather: () => standard('fLeather', { color: 0x3a2a22, roughness: 0.6 }),
  soil: () => standard('fSoil', { color: 0x3a2a1e, roughness: 1 }),
  leaf: (tone) => standard('fLeaf' + tone, { color: [0x3f7a34, 0x56923e, 0x2f6a3a, 0x6a9a3a][tone % 4], roughness: 0.8 }),
  bark: () => standard('fBark', { color: 0x5a4030, roughness: 0.9 }),
  terracotta: () => standard('fTerracotta', { color: 0xa8583a, roughness: 0.8 }),
  water: () => standard('fWater', { color: 0x3a7aa0, roughness: 0.05, metalness: 0.2, emissive: 0x0a2a3a, emissiveIntensity: 0.5 }),
  growLight: () => standard('fGrowLight', { color: 0x401040, emissive: 0xd060ff, emissiveIntensity: 1.1 }),
  velvet: () => standard('fVelvet', { map: fabricTexture('128,28,36', 13), roughness: 0.95 }),
  lamp: () => standard('fLamp', { color: 0xfff6e0, emissive: 0xfff0d0, emissiveIntensity: 1.3 }),
  ledGreen: () => standard('fLedGreen', { color: 0x103010, emissive: 0x40ff60, emissiveIntensity: 1.0 }),
  ledRed: () => standard('fLedRed', { color: 0x301010, emissive: 0xff3020, emissiveIntensity: 1.0 }),
  liquid: () => standard('fLiquid', { color: 0x6ad8b4, emissive: 0x2a9a7a, emissiveIntensity: 0.7, roughness: 0.08, metalness: 0.1, transparent: true, opacity: 0.82 }),
  specimen: () => standard('fSpecimen', { color: 0x6a5a48, roughness: 0.7 }),
  screen: (seed, kind = 'text') => once('fScreen' + seed + kind, () => {
    const colors = ['#5fd0ff', '#ffb347', '#7dff9a', '#ff6a5a'];
    const texture = screenTexture(colors[seed % colors.length], seed + 40, kind);
    return new THREE.MeshStandardMaterial({ map: texture, emissive: 0xffffff, emissiveMap: texture, emissiveIntensity: 0.85 });
  }),
  map: () => once('fMapTable', () => {
    const size = 256, rng = mulberry32(31);
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = size;
    const context = canvas.getContext('2d');
    context.fillStyle = '#071a24';
    context.fillRect(0, 0, size, size);
    context.strokeStyle = 'rgba(80,200,255,0.25)';
    for (let line = 0; line <= size; line += 32) {
      context.beginPath(); context.moveTo(line, 0); context.lineTo(line, size); context.stroke();
      context.beginPath(); context.moveTo(0, line); context.lineTo(size, line); context.stroke();
    }
    context.fillStyle = 'rgba(90,220,140,0.55)';
    for (let blob = 0; blob < 7; blob++) {
      context.beginPath();
      context.ellipse(rng() * size, rng() * size, 20 + rng() * 40, 12 + rng() * 30, rng() * 3, 0, Math.PI * 2);
      context.fill();
    }
    context.fillStyle = '#ff5a40';
    for (let mark = 0; mark < 5; mark++) context.fillRect(rng() * size, rng() * size, 5, 5);
    const texture = canvasTexture(canvas, { repeat: 1 });
    return new THREE.MeshStandardMaterial({ map: texture, emissive: 0xffffff, emissiveMap: texture, emissiveIntensity: 0.7 });
  }),
};

// ---------------- примитивы ----------------
function box(width, height, depth, material, x, y, z) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), material);
  mesh.position.set(x, y, z);
  return mesh;
}
function cylinder(radius, height, material, x, y, z, segments = 14, radiusTop = radius) {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radiusTop, radius, height, segments), material);
  mesh.position.set(x, y, z);
  return mesh;
}
function tube(from, to, radius, material) {
  const direction = new THREE.Vector3().subVectors(to, from);
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, direction.length(), 8), material);
  mesh.position.copy(from).addScaledVector(direction, 0.5);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());
  return mesh;
}
const V = (x, y, z) => new THREE.Vector3(x, y, z);

// стул: сиденье, спинка, четыре ножки; back — сторона спинки: +1 (к +z) или −1
function chair(group, x, z, back, color = '70,76,88') {
  const seat = 0.44, size = 0.44;
  group.add(box(size, 0.06, size, MATS.upholstery(color), x, seat, z));
  group.add(box(size, 0.42, 0.05, MATS.upholstery(color), x, seat + 0.24, z + back * (size / 2 - 0.02)));
  for (const deltaX of [-1, 1]) for (const deltaZ of [-1, 1]) group.add(box(0.03, seat, 0.03, MATS.frame(), x + deltaX * (size / 2 - 0.03), seat / 2, z + deltaZ * (size / 2 - 0.03)));
}
// стол на четырёх ножках
function table(group, x0, z0, x1, z1, height, top = MATS.wood()) {
  group.add(box(x1 - x0, 0.04, z1 - z0, top, (x0 + x1) / 2, height - 0.02, (z0 + z1) / 2));
  for (const x of [x0 + 0.05, x1 - 0.05]) for (const z of [z0 + 0.05, z1 - 0.05]) group.add(box(0.04, height - 0.04, 0.04, MATS.frame(), x, (height - 0.04) / 2, z));
}
// монитор на подставке; facing — +1, экран смотрит в +z
function monitor(group, x, y, z, width, seed, facing = 1) {
  group.add(box(width, width * 0.6, 0.04, MATS.black(), x, y + width * 0.3 + 0.08, z));
  group.add(box(width - 0.04, width * 0.6 - 0.04, 0.01, MATS.screen(seed), x, y + width * 0.3 + 0.08, z + facing * 0.022));
  group.add(box(0.04, 0.1, 0.04, MATS.black(), x, y + 0.04, z));
  group.add(box(0.18, 0.015, 0.14, MATS.black(), x, y + 0.008, z));
}

// ---------------- предметы (каноническая рамка: «спина» — у z = 0, вдоль x от 0 до along, вглубь до deep) ----------------
const BUILDERS = {
  // кровать: изголовье у стены, рама, матрас, простыня, одеяло, подушка
  bed(item, along, deep) {
    const group = new THREE.Group();
    const width = Math.min(0.95, along - 0.2), x = along / 2, length = Math.min(2.05, deep - 0.25), z0 = WALL_FACE + 0.02;
    group.add(box(width + 0.06, 0.9, 0.05, MATS.wood(), x, 0.45, z0 + 0.025));
    group.add(box(width + 0.06, 0.55, 0.05, MATS.wood(), x, 0.275, z0 + length));
    group.add(box(width, 0.18, length - 0.05, MATS.frame(), x, 0.25, z0 + length / 2));
    group.add(box(width - 0.04, 0.16, length - 0.08, MATS.sheet(), x, 0.42, z0 + length / 2 + 0.01));
    group.add(box(width - 0.02, 0.06, length * 0.62, MATS.blanket(item.color || '64,82,110'), x, 0.52, z0 + length * 0.66));
    group.add(box(width * 0.7, 0.1, 0.34, MATS.sheet(), x, 0.55, z0 + 0.25));
    return group;
  },
  // тумбочка с ящиком и лампой
  nightstand(item, along) {
    const group = new THREE.Group(), x = along / 2, z = WALL_FACE + 0.24;
    group.add(box(0.45, 0.55, 0.42, MATS.wood(), x, 0.275, z));
    group.add(box(0.12, 0.02, 0.01, MATS.darkSteel(), x, 0.44, z + 0.215));
    group.add(cylinder(0.05, 0.03, MATS.darkSteel(), x - 0.1, 0.565, z - 0.05));
    group.add(tube(V(x - 0.1, 0.57, z - 0.05), V(x - 0.1, 0.82, z - 0.05), 0.008, MATS.darkSteel()));
    group.add(cylinder(0.09, 0.1, MATS.cream(), x - 0.1, 0.86, z - 0.05, 12, 0.05));
    return group;
  },
  // платяной шкаф: две дверцы
  wardrobe(item, along) {
    const group = new THREE.Group(), width = along - 0.15, x = along / 2, z = WALL_FACE + 0.3;
    group.add(box(width, 2.0, 0.58, MATS.wood(), x, 1.0, z));
    group.add(box(0.006, 1.86, 0.006, MATS.black(), x, 1.0, z + 0.293));
    for (const side of [-1, 1]) group.add(box(0.02, 0.22, 0.02, MATS.chrome(), x + side * 0.05, 1.1, z + 0.3));
    return group;
  },
  // стол каюты на двоих: столешница у стены, полка над ней, два стула
  cabinTable(item, along) {
    const group = new THREE.Group(), z0 = WALL_FACE + 0.01;
    table(group, 0.15, z0, along - 0.15, z0 + 0.62, 0.74);
    group.add(box(along - 0.4, 0.03, 0.24, MATS.wood(), along / 2, 1.45, z0 + 0.12));
    for (const x of [along * 0.3, along * 0.7]) chair(group, x, z0 + 0.82, 1);
    group.add(box(0.3, 0.22, 0.2, MATS.darkSteel(), along * 0.3, 0.85, z0 + 0.2));
    return group;
  },
  // письменный стол с креслом и монитором
  deskChair(item, along) {
    const group = new THREE.Group(), z0 = WALL_FACE + 0.01;
    table(group, 0.08, z0, along - 0.08, z0 + 0.62, 0.74);
    monitor(group, along / 2, 0.74, z0 + 0.18, 0.48, item.seed || 1);
    group.add(box(0.42, 0.02, 0.14, MATS.black(), along / 2, 0.75, z0 + 0.42));
    chair(group, along / 2, z0 + 0.86, 1, '40,44,52');
    return group;
  },
  // сейф
  safe(item, along) {
    const group = new THREE.Group(), x = along / 2, z = WALL_FACE + 0.26;
    group.add(box(0.55, 0.9, 0.5, MATS.olive(), x, 0.45, z));
    group.add(cylinder(0.06, 0.03, MATS.chrome(), x, 0.55, z + 0.26, 16).rotateX(Math.PI / 2));
    group.add(box(0.03, 0.12, 0.03, MATS.chrome(), x + 0.18, 0.45, z + 0.26));
    return group;
  },
  // диван у стены
  sofa(item, along) {
    const group = new THREE.Group(), color = item.color || '96,68,52', z0 = WALL_FACE + 0.02, depth = 0.86;
    group.add(box(along - 0.1, 0.4, depth, MATS.upholstery(color), along / 2, 0.2, z0 + depth / 2));
    group.add(box(along - 0.1, 0.5, 0.18, MATS.upholstery(color), along / 2, 0.6, z0 + 0.09));
    for (const x of [0.12, along - 0.12]) group.add(box(0.14, 0.62, depth, MATS.upholstery(color), x, 0.31, z0 + depth / 2));
    for (let index = 0; index < 2; index++) group.add(box((along - 0.4) / 2 - 0.02, 0.1, depth - 0.24, MATS.upholstery(color), 0.2 + (along - 0.4) / 4 + index * (along - 0.4) / 2, 0.45, z0 + depth / 2 + 0.06));
    return group;
  },
  // обеденный стол на четверых: стол посередине, по два стула с двух сторон
  diningTable(item, along, deep) {
    const group = new THREE.Group(), z = deep / 2;
    table(group, 0.3, z - 0.42, along - 0.3, z + 0.42, 0.75, MATS.cabinetGrey());
    for (const x of [along * 0.3, along * 0.7]) { chair(group, x, z - 0.72, -1, '120,62,40'); chair(group, x, z + 0.72, 1, '120,62,40'); }
    group.add(box(0.2, 0.08, 0.2, MATS.white(), along / 2, 0.79, z));
    return group;
  },
  // раздаточная стойка столовой
  servingCounter(item, along) {
    const group = new THREE.Group(), z = WALL_FACE + 0.35;
    group.add(box(along - 0.05, 0.9, 0.68, MATS.steel(), along / 2, 0.45, z));
    group.add(box(along - 0.05, 0.03, 0.3, MATS.chrome(), along / 2, 1.25, z + 0.1));
    for (const x of [0.15, along - 0.15]) group.add(tube(V(x, 0.9, z + 0.2), V(x, 1.25, z + 0.2), 0.01, MATS.chrome()));
    for (let index = 0; index < Math.floor(along / 0.4); index++) group.add(box(0.3, 0.04, 0.22, MATS.darkSteel(), 0.25 + index * 0.4, 0.92, z - 0.05));
    return group;
  },
  // функциональная кровать: колёса, рама, поднятое изголовье, боковые поручни, монитор на стойке
  medBed(item, along, deep) {
    const group = new THREE.Group(), x = along / 2, length = Math.min(2.05, deep - 0.25), z0 = WALL_FACE + 0.12;
    group.add(box(0.9, 0.06, length, MATS.white(), x, 0.5, z0 + length / 2));
    for (const deltaX of [-0.38, 0.38]) for (const z of [z0 + 0.1, z0 + length - 0.1]) {
      group.add(box(0.04, 0.4, 0.04, MATS.chrome(), x + deltaX, 0.28, z));
      group.add(cylinder(0.05, 0.04, MATS.black(), x + deltaX, 0.05, z, 10).rotateZ(Math.PI / 2));
    }
    group.add(box(0.84, 0.12, length * 0.62, MATS.sheet(), x, 0.59, z0 + length * 0.62));
    const back = box(0.84, 0.12, length * 0.36, MATS.sheet(), x, 0.72, z0 + length * 0.2);
    back.rotation.x = 0.45;
    group.add(back);
    group.add(box(0.5, 0.09, 0.3, MATS.white(), x, 0.86, z0 + 0.22));
    group.add(box(0.74, 0.05, length * 0.5, MATS.blanket('120,160,190'), x, 0.67, z0 + length * 0.68));
    for (const side of [-1, 1]) group.add(box(0.02, 0.2, length * 0.45, MATS.chrome(), x + side * 0.46, 0.7, z0 + length * 0.55));
    group.add(box(0.94, 0.5, 0.04, MATS.white(), x, 0.75, z0));
    if (item.monitor !== false) {
      const mx = along - 0.12;
      group.add(tube(V(mx, 0, z0 + 0.1), V(mx, 1.5, z0 + 0.1), 0.02, MATS.chrome()));
      group.add(box(0.3, 0.24, 0.08, MATS.white(), mx, 1.45, z0 + 0.15));
      group.add(box(0.26, 0.18, 0.01, MATS.screen(2, 'wave'), mx, 1.45, z0 + 0.195));
      group.add(tube(V(mx - 0.05, 1.6, z0 + 0.1), V(mx - 0.05, 1.9, z0 + 0.1), 0.01, MATS.chrome()));
      group.add(box(0.1, 0.16, 0.04, MATS.glass(), mx - 0.05, 1.82, z0 + 0.1));
    }
    return group;
  },
  // операционный стол на колонне, над ним бестеневая лампа на кронштейне
  opTable(item, along, deep) {
    const group = new THREE.Group(), x = along / 2, z = deep / 2;
    group.add(box(0.6, 0.06, 0.5, MATS.darkSteel(), x, 0.03, z));
    group.add(cylinder(0.12, 0.75, MATS.steel(), x, 0.42, z));
    group.add(box(0.56, 0.1, 1.95, MATS.steel(), x, 0.84, z));
    group.add(box(0.52, 0.06, 1.9, MATS.upholstery('40,96,120'), x, 0.92, z));
    group.add(tube(V(along - 0.1, 0, 0.2), V(along - 0.1, 2.3, 0.2), 0.04, MATS.white()));
    group.add(tube(V(along - 0.1, 2.3, 0.2), V(x, 2.15, z), 0.03, MATS.white()));
    group.add(cylinder(0.32, 0.12, MATS.white(), x, 2.1, z, 20, 0.2));
    group.add(cylinder(0.28, 0.01, MATS.lamp(), x, 2.035, z, 20));
    return group;
  },
  // наркозный аппарат / монитор на тележке
  medCart(item, along) {
    const group = new THREE.Group(), x = along / 2, z = WALL_FACE + 0.35;
    group.add(box(0.55, 0.9, 0.45, MATS.white(), x, 0.5, z));
    for (const deltaX of [-0.22, 0.22]) for (const deltaZ of [-0.18, 0.18]) group.add(cylinder(0.04, 0.04, MATS.black(), x + deltaX, 0.04, z + deltaZ, 8).rotateZ(Math.PI / 2));
    for (let drawer = 0; drawer < 3; drawer++) group.add(box(0.5, 0.005, 0.005, MATS.darkSteel(), x, 0.3 + drawer * 0.22, z + 0.226));
    monitor(group, x, 0.95, z - 0.05, 0.42, 2);
    group.add(cylinder(0.06, 0.4, MATS.green(), x + 0.2, 1.15, z + 0.12, 10));
    return group;
  },
  // душевая кабина: поддон, стёкла, стойка с лейкой
  showerCabin(item, along) {
    const group = new THREE.Group(), size = Math.min(0.95, along - 0.2), x = along / 2, z0 = WALL_FACE + 0.02, z1 = z0 + size;
    group.add(box(size, 0.12, size, MATS.ceramic(), x, 0.06, (z0 + z1) / 2));
    group.add(box(size, 2.0, 0.02, MATS.white(), x, 1.0, z0 + 0.01));
    for (const side of [-1, 1]) group.add(box(0.012, 1.9, size, MATS.glass(), x + side * size / 2, 1.07, (z0 + z1) / 2));
    group.add(box(size, 1.9, 0.012, MATS.glass(), x, 1.07, z1));
    for (const side of [-1, 1]) group.add(box(0.03, 1.95, 0.03, MATS.chrome(), x + side * size / 2, 1.05, z1));
    group.add(tube(V(x, 0.9, z0 + 0.05), V(x, 1.95, z0 + 0.05), 0.012, MATS.chrome()));
    group.add(cylinder(0.08, 0.02, MATS.chrome(), x, 1.95, z0 + 0.14, 14));
    group.add(box(0.08, 0.12, 0.04, MATS.chrome(), x, 1.1, z0 + 0.04));
    return group;
  },
  // умывальник с зеркалом
  washbasin(item, along) {
    const group = new THREE.Group(), x = along / 2, z = WALL_FACE + 0.26;
    group.add(box(0.58, 0.16, 0.44, MATS.ceramic(), x, 0.8, z));
    group.add(box(0.46, 0.04, 0.32, MATS.chrome(), x, 0.86, z + 0.02));
    group.add(box(0.14, 0.7, 0.14, MATS.ceramic(), x, 0.36, z - 0.1));
    group.add(tube(V(x, 0.88, WALL_FACE + 0.05), V(x, 1.02, WALL_FACE + 0.12), 0.012, MATS.chrome()));
    group.add(box(0.5, 0.65, 0.02, MATS.chrome(), x, 1.45, WALL_FACE + 0.01));
    group.add(box(0.46, 0.6, 0.01, MATS.tintedGlass(), x, 1.45, WALL_FACE + 0.025));
    return group;
  },
  // туалетная кабинка: перегородки, дверца, унитаз внутри
  toilet(item, along) {
    const group = new THREE.Group(), x = along / 2, width = along - 0.1, z0 = WALL_FACE, depth = 1.0;
    for (const side of [-1, 1]) group.add(box(0.03, 1.9, depth, MATS.cabinetGrey(), x + side * width / 2, 1.07, z0 + depth / 2));
    group.add(box(width - 0.06, 1.75, 0.03, MATS.cabinetGrey(), x, 1.0, z0 + depth));
    group.add(box(0.03, 0.1, 0.03, MATS.chrome(), x + width / 2 - 0.15, 1.0, z0 + depth + 0.02));
    group.add(box(0.36, 0.36, 0.5, MATS.ceramic(), x, 0.2, z0 + 0.35));
    group.add(box(0.38, 0.4, 0.16, MATS.ceramic(), x, 0.6, z0 + 0.1));
    return group;
  },
  // стиральная машина в колонне с сушилкой
  washer(item, along) {
    const group = new THREE.Group(), x = along / 2, z = WALL_FACE + 0.32;
    for (const [y, seed] of [[0.43, 1], [1.29, 2]]) {
      group.add(box(0.6, 0.84, 0.6, MATS.white(), x, y, z));
      group.add(cylinder(0.2, 0.02, MATS.tintedGlass(), x, y - 0.04, z + 0.305, 18).rotateX(Math.PI / 2));
      group.add(cylinder(0.23, 0.015, MATS.chrome(), x, y - 0.04, z + 0.3, 18).rotateX(Math.PI / 2));
      group.add(box(0.12, 0.04, 0.01, seed === 1 ? MATS.ledGreen() : MATS.ledRed(), x + 0.18, y + 0.33, z + 0.305));
    }
    return group;
  },
  // беговая дорожка: лента, рама, поручни, пульт; лицом к «спине» (стене или окну)
  treadmill(item, along, deep) {
    const group = new THREE.Group(), x = along / 2, z0 = WALL_FACE + 0.15, length = Math.min(1.9, deep - 0.4);
    group.add(box(0.8, 0.18, length, MATS.darkSteel(), x, 0.12, z0 + length / 2 + 0.1));
    group.add(box(0.56, 0.02, length - 0.2, MATS.black(), x, 0.22, z0 + length / 2 + 0.1));
    for (const side of [-1, 1]) {
      group.add(tube(V(x + side * 0.36, 0.2, z0 + 0.15), V(x + side * 0.34, 1.3, z0 + 0.05), 0.03, MATS.frame()));
      group.add(tube(V(x + side * 0.34, 1.0, z0 + 0.1), V(x + side * 0.34, 1.0, z0 + 0.6), 0.02, MATS.black()));
    }
    group.add(box(0.72, 0.28, 0.12, MATS.black(), x, 1.32, z0 + 0.08));
    group.add(box(0.4, 0.16, 0.01, MATS.screen(0, 'wave'), x, 1.34, z0 + 0.145));
    return group;
  },
  // велотренажёр
  exerciseBike(item, along) {
    const group = new THREE.Group(), x = along / 2, z = 0.62;
    group.add(box(0.5, 0.05, 0.08, MATS.frame(), x, 0.03, z - 0.4));
    group.add(box(0.5, 0.05, 0.08, MATS.frame(), x, 0.03, z + 0.4));
    group.add(box(0.08, 0.06, 0.8, MATS.frame(), x, 0.06, z));
    group.add(cylinder(0.22, 0.08, MATS.darkSteel(), x, 0.32, z - 0.28, 18).rotateZ(Math.PI / 2));
    group.add(tube(V(x, 0.06, z - 0.3), V(x, 1.05, z - 0.36), 0.03, MATS.frame()));
    group.add(box(0.46, 0.04, 0.06, MATS.black(), x, 1.07, z - 0.36));
    group.add(box(0.2, 0.12, 0.08, MATS.black(), x, 1.16, z - 0.38));
    group.add(tube(V(x, 0.06, z + 0.3), V(x, 0.88, z + 0.16), 0.03, MATS.frame()));
    group.add(box(0.24, 0.07, 0.3, MATS.black(), x, 0.92, z + 0.14));
    group.add(cylinder(0.12, 0.05, MATS.red(), x, 0.36, z - 0.02, 14).rotateZ(Math.PI / 2));
    return group;
  },
  // силовая рама со штангой и блинами
  powerRack(item, along, deep) {
    const group = new THREE.Group(), w = along - 0.3, d = Math.min(1.2, deep - 0.3), x0 = (along - w) / 2, z0 = (deep - d) / 2;
    for (const x of [x0, x0 + w]) for (const z of [z0, z0 + d]) group.add(box(0.07, 2.25, 0.07, MATS.black(), x, 1.125, z));
    for (const x of [x0, x0 + w]) group.add(box(0.07, 0.07, d, MATS.black(), x, 2.22, z0 + d / 2));
    for (const z of [z0, z0 + d]) group.add(box(w, 0.07, 0.07, MATS.black(), x0 + w / 2, 2.22, z));
    group.add(tube(V(x0 - 0.35, 1.35, z0 + 0.2), V(x0 + w + 0.35, 1.35, z0 + 0.2), 0.016, MATS.chrome()));
    for (const x of [x0 - 0.22, x0 + w + 0.22]) group.add(cylinder(0.225, 0.05, MATS.black(), x, 1.35, z0 + 0.2, 20).rotateZ(Math.PI / 2));
    group.add(box(w - 0.1, 0.02, d - 0.1, MATS.rubber(), x0 + w / 2, 0.01, z0 + d / 2));
    return group;
  },
  // скамья для жима со стойками
  weightBench(item, along, deep) {
    const group = new THREE.Group(), x = along / 2, z0 = 0.3, length = Math.min(1.3, deep - 0.6);
    group.add(box(0.3, 0.08, length, MATS.leather(), x, 0.45, z0 + length / 2 + 0.2));
    for (const z of [z0 + 0.35, z0 + length]) group.add(box(0.06, 0.42, 0.06, MATS.black(), x, 0.21, z));
    group.add(box(0.5, 0.04, 0.06, MATS.black(), x, 0.02, z0 + length));
    for (const side of [-1, 1]) group.add(box(0.05, 1.2, 0.05, MATS.black(), x + side * 0.42, 0.6, z0 + 0.15));
    group.add(tube(V(x - 0.85, 1.12, z0 + 0.15), V(x + 0.85, 1.12, z0 + 0.15), 0.014, MATS.chrome()));
    for (const side of [-1, 1]) group.add(cylinder(0.17, 0.04, MATS.black(), x + side * 0.6, 1.12, z0 + 0.15, 18).rotateZ(Math.PI / 2));
    return group;
  },
  // стойка с гантелями
  dumbbellRack(item, along) {
    const group = new THREE.Group(), z = WALL_FACE + 0.3;
    for (const x of [0.1, along - 0.1]) group.add(box(0.05, 0.8, 0.45, MATS.black(), x, 0.4, z));
    for (const [y, tilt] of [[0.45, 0], [0.75, 0]]) {
      group.add(box(along - 0.2, 0.03, 0.4, MATS.darkSteel(), along / 2, y + tilt, z));
      const count = Math.floor((along - 0.3) / 0.22);
      for (let index = 0; index < count; index++) {
        const x = 0.25 + index * 0.22, size = 0.05 + index * 0.006;
        for (const deltaZ of [-0.08, 0.08]) group.add(cylinder(size, 0.05, MATS.black(), x, y + size + 0.02, z + deltaZ, 10).rotateX(Math.PI / 2));
        group.add(tube(V(x, y + size + 0.02, z - 0.1), V(x, y + size + 0.02, z + 0.1), 0.012, MATS.chrome()));
      }
    }
    return group;
  },
  // мат на полу
  gymMat(item, along, deep) {
    const group = new THREE.Group();
    group.add(box(along - 0.1, 0.05, deep - 0.1, MATS.mat(), along / 2, 0.025, deep / 2));
    group.add(box(along - 0.1, 0.006, 0.02, MATS.white(), along / 2, 0.053, deep / 2));
    return group;
  },
  // боксёрская груша на стойке
  punchingBag(item, along, deep) {
    const group = new THREE.Group(), x = along / 2, z = deep / 2;
    group.add(box(0.5, 0.05, 0.5, MATS.black(), x - 0.3, 0.025, z));
    group.add(tube(V(x - 0.45, 0, z), V(x - 0.45, 2.3, z), 0.035, MATS.black()));
    group.add(tube(V(x - 0.45, 2.25, z), V(x, 2.25, z), 0.03, MATS.black()));
    group.add(tube(V(x, 2.25, z), V(x, 1.75, z), 0.006, MATS.chrome()));
    group.add(cylinder(0.17, 1.0, MATS.red(), x, 1.2, z, 16));
    return group;
  },
  // стойка с оружием: решётчатый шкаф, карабины, ящик внизу
  gunRack(item, along) {
    const group = new THREE.Group(), z = WALL_FACE + 0.22;
    group.add(box(along - 0.08, 1.9, 0.04, MATS.olive(), along / 2, 0.95, WALL_FACE + 0.02));
    group.add(box(along - 0.08, 0.5, 0.4, MATS.olive(), along / 2, 0.25, z));
    group.add(box(along - 0.1, 0.04, 0.3, MATS.darkSteel(), along / 2, 1.5, z - 0.03));
    for (const x of [0.04, along - 0.04]) group.add(box(0.04, 1.9, 0.42, MATS.olive(), x, 0.95, z));
    const count = Math.max(2, Math.floor((along - 0.2) / 0.16));
    for (let index = 0; index < count; index++) {
      const x = 0.15 + index * (along - 0.3) / (count - 1);
      group.add(box(0.05, 0.85, 0.08, MATS.black(), x, 0.98, z));
      group.add(box(0.035, 0.22, 0.12, MATS.black(), x, 0.68, z + 0.04));
      group.add(box(0.03, 0.12, 0.05, MATS.darkSteel(), x, 1.44, z + 0.04));
    }
    return group;
  },
  // вытяжной шкаф: стол, стекло, вентиляционный короб к потолку
  fumeHood(item, along) {
    const group = new THREE.Group(), x = along / 2, z = WALL_FACE + 0.36;
    group.add(box(along - 0.1, 0.9, 0.7, MATS.cabinetGrey(), x, 0.45, z));
    group.add(box(along - 0.1, 0.04, 0.72, MATS.black(), x, 0.92, z));
    for (const side of [-1, 1]) group.add(box(0.04, 1.05, 0.7, MATS.white(), x + side * (along / 2 - 0.07), 1.45, z));
    group.add(box(along - 0.1, 0.06, 0.7, MATS.white(), x, 2.0, z));
    group.add(box(along - 0.18, 0.02, 0.36, MATS.white(), x, 1.97, z));
    group.add(box(along - 0.2, 0.6, 0.012, MATS.glass(), x, 1.55, z + 0.34));
    group.add(box(0.3, 0.45, 0.3, MATS.steel(), x, 2.25, z - 0.12));
    group.add(cylinder(0.04, 0.2, MATS.yellow(), x - 0.2, 1.04, z - 0.1, 10, 0.03));
    group.add(cylinder(0.05, 0.14, MATS.glass(), x + 0.1, 1.01, z, 12));
    return group;
  },
  // бокс биобезопасности: корпус с наклонным стеклом и подсветкой, ножки
  bioCabinet(item, along) {
    const group = new THREE.Group(), x = along / 2, z = WALL_FACE + 0.38;
    for (const deltaX of [-0.42, 0.42]) group.add(box(0.05, 0.7, 0.6, MATS.frame(), x + deltaX, 0.35, z));
    group.add(box(along - 0.12, 1.15, 0.74, MATS.white(), x, 1.28, z));
    const glassPanel = box(along - 0.22, 0.6, 0.01, MATS.glass(), x, 1.3, z + 0.38);
    glassPanel.rotation.x = -0.18;
    group.add(glassPanel);
    group.add(box(along - 0.24, 0.02, 0.5, MATS.lamp(), x, 1.62, z + 0.05));
    group.add(box(0.2, 0.06, 0.01, MATS.ledGreen(), x + 0.3, 1.78, z + 0.375));
    return group;
  },
  // стойка приборов: блоки с экранами, кнопками и огнями
  instrumentRack(item, along) {
    const group = new THREE.Group(), x = along / 2, z = WALL_FACE + 0.32;
    group.add(box(along - 0.15, 1.85, 0.6, MATS.darkSteel(), x, 0.925, z));
    for (let unit = 0; unit < 5; unit++) {
      const y = 0.25 + unit * 0.33;
      group.add(box(along - 0.25, 0.28, 0.02, unit % 2 ? MATS.cabinetGrey() : MATS.black(), x, y, z + 0.305));
      group.add(box(0.3, 0.16, 0.01, MATS.screen(unit + (item.seed || 0), unit % 2 ? 'wave' : 'text'), x - 0.15, y, z + 0.317));
      group.add(box(0.03, 0.03, 0.01, unit % 3 ? MATS.ledGreen() : MATS.ledRed(), x + 0.25, y + 0.06, z + 0.317));
    }
    return group;
  },
  // испытательный стенд: рама, камера с приборами, кабели
  testRig(item, along, deep) {
    const group = new THREE.Group(), x = along / 2, z = deep / 2, w = along - 0.4, d = deep - 0.5;
    group.add(box(w, 0.8, d, MATS.cabinetGrey(), x, 0.4, z));
    group.add(box(w + 0.04, 0.05, d + 0.04, MATS.black(), x, 0.82, z));
    group.add(cylinder(0.42, 0.9, MATS.steel(), x, 1.3, z, 20));
    group.add(cylinder(0.44, 0.06, MATS.orange(), x, 1.78, z, 20));
    group.add(cylinder(0.12, 0.02, MATS.tintedGlass(), x, 1.3, z + 0.43, 16).rotateX(Math.PI / 2));
    for (const angle of [0.6, 2.2, 4.0]) group.add(tube(V(x + Math.cos(angle) * 0.4, 1.0, z + Math.sin(angle) * 0.4), V(x + Math.cos(angle) * (w / 2), 0.84, z + Math.sin(angle) * (d / 2)), 0.02, MATS.black()));
    group.add(box(0.5, 0.35, 0.3, MATS.black(), x + w / 2 - 0.3, 1.0, z - d / 2 + 0.2));
    group.add(box(0.4, 0.22, 0.01, MATS.screen(1, 'wave'), x + w / 2 - 0.3, 1.02, z - d / 2 + 0.355));
    return group;
  },
  // колба с образцом: основание, стеклянный цилиндр, раствор, крышка с трубками
  specimenTank(item, along, deep) {
    const group = new THREE.Group(), x = along / 2, z = deep / 2;
    group.add(cylinder(0.45, 0.3, MATS.darkSteel(), x, 0.15, z, 20));
    group.add(cylinder(0.4, 1.6, MATS.liquid(), x, 1.1, z, 20));
    for (const angle of [0.8, 2.4, 3.9, 5.5]) group.add(box(0.03, 1.65, 0.03, MATS.chrome(), x + Math.cos(angle) * 0.42, 1.12, z + Math.sin(angle) * 0.42));
    group.add(cylinder(0.45, 0.2, MATS.darkSteel(), x, 2.03, z, 20));
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.22, 14, 10), MATS.specimen());
    body.scale.set(0.8, 1.6, 0.7);
    body.position.set(x, 1.15, z);
    group.add(body);
    for (const angle of [0.5, 2.6]) group.add(tube(V(x + Math.cos(angle) * 0.3, 2.1, z + Math.sin(angle) * 0.3), V(x + Math.cos(angle) * 0.3, 2.45, z + Math.sin(angle) * 0.3), 0.025, MATS.black()));
    group.add(box(0.1, 0.06, 0.01, MATS.ledGreen(), x, 0.2, z + 0.455));
    return group;
  },
  // морозильник для образцов
  freezer(item, along) {
    const group = new THREE.Group(), x = along / 2, z = WALL_FACE + 0.38;
    group.add(box(along - 0.2, 1.95, 0.72, MATS.white(), x, 0.975, z));
    group.add(box(0.03, 0.6, 0.03, MATS.chrome(), x + along / 2 - 0.2, 1.1, z + 0.37));
    group.add(box(0.2, 0.08, 0.01, MATS.screen(0, 'text'), x, 1.75, z + 0.362));
    return group;
  },
  // стол-карта командного центра со светящейся картой
  commandTable(item, along, deep) {
    const group = new THREE.Group(), x = along / 2, z = deep / 2, w = along - 0.5, d = deep - 0.5;
    group.add(box(w - 0.2, 0.85, d - 0.2, MATS.darkSteel(), x, 0.425, z));
    group.add(box(w, 0.06, d, MATS.black(), x, 0.88, z));
    group.add(box(w - 0.1, 0.01, d - 0.1, MATS.map(), x, 0.915, z));
    return group;
  },
  // большой экран на стене (на стойке)
  wallScreen(item, along) {
    const group = new THREE.Group(), x = along / 2, z = WALL_FACE + 0.08;
    group.add(box(along - 0.2, 1.1, 0.08, MATS.black(), x, 1.55, z));
    group.add(box(along - 0.3, 1.0, 0.01, MATS.screen(item.seed || 3, 'wave'), x, 1.55, z + 0.045));
    group.add(box(along - 0.2, 0.75, 0.3, MATS.darkSteel(), x, 0.375, z + 0.12));
    return group;
  },
  // ряд кресел: смотрят от «спины» (к +z — спинки к z = 0)
  chairRow(item, along, deep) {
    const group = new THREE.Group(), count = Math.max(1, Math.floor(along / 0.6)), z = deep / 2;
    group.add(box(along - 0.1, 0.05, 0.08, MATS.frame(), along / 2, 0.06, z));
    for (let index = 0; index < count; index++) chair(group, (index + 0.5) * along / count, z, -1, '52,60,74');
    return group;
  },
  // скамья
  bench(item, along, deep) {
    const group = new THREE.Group(), z = deep / 2;
    group.add(box(along - 0.2, 0.05, 0.36, MATS.wood(), along / 2, 0.45, z));
    for (const x of [0.25, along - 0.25]) group.add(box(0.06, 0.43, 0.3, MATS.frame(), x, 0.215, z));
    return group;
  },
  // станок (токарный или фрезерный): станина, шпиндель, кожух, пульт
  machineTool(item, along) {
    const group = new THREE.Group(), z = WALL_FACE + 0.45, x = along / 2;
    group.add(box(along - 0.2, 0.85, 0.8, MATS.green(), x, 0.425, z));
    group.add(box(along - 0.3, 0.06, 0.6, MATS.steel(), x, 0.88, z + 0.05));
    group.add(box(0.5, 0.55, 0.55, MATS.green(), 0.45, 1.18, z - 0.05));
    group.add(cylinder(0.06, 0.3, MATS.chrome(), 0.85, 1.05, z + 0.05, 12).rotateZ(Math.PI / 2));
    group.add(box(0.35, 0.3, 0.35, MATS.green(), along - 0.45, 1.06, z));
    group.add(box(along - 0.3, 0.45, 0.012, MATS.glass(), x, 1.15, z + 0.38));
    group.add(box(0.28, 0.36, 0.1, MATS.black(), along - 0.2, 1.4, z - 0.2));
    group.add(box(0.2, 0.14, 0.01, MATS.screen(1, 'text'), along - 0.2, 1.45, z - 0.145));
    group.add(box(0.1, 0.06, 0.04, MATS.red(), along - 0.2, 1.25, z - 0.14));
    return group;
  },
  // ремонтный стенд K7: разметка на полу и две стойки с подъёмниками по сторонам
  repairStand(item, along, deep) {
    const group = new THREE.Group();
    group.add(box(along - 0.2, 0.01, deep - 0.2, MATS.darkSteel(), along / 2, 0.006, deep / 2));
    for (const z of [0.12, deep - 0.12]) group.add(box(along - 0.2, 0.012, 0.1, MATS.yellow(), along / 2, 0.012, z));
    for (const x of [0.12, along - 0.12]) group.add(box(0.1, 0.012, deep - 0.2, MATS.yellow(), x, 0.012, deep / 2));
    return group;
  },
  // книжный стеллаж / полки с папками
  shelf(item, along) {
    const group = new THREE.Group(), z = WALL_FACE + 0.18, rng = mulberry32(item.col * 31 + item.row);
    for (const x of [0.06, along - 0.06]) group.add(box(0.03, 1.9, 0.34, MATS.wood(), x, 0.95, z));
    for (let shelfIndex = 0; shelfIndex < 5; shelfIndex++) {
      const y = 0.05 + shelfIndex * 0.45;
      group.add(box(along - 0.1, 0.03, 0.34, MATS.wood(), along / 2, y, z));
      if (shelfIndex === 4) continue;
      let x = 0.1;
      while (x < along - 0.15) {
        const width = 0.04 + rng() * 0.05, height = 0.24 + rng() * 0.14;
        const colors = [MATS.red(), MATS.olive(), MATS.cabinetGrey(), MATS.yellow(), MATS.black()];
        group.add(box(width, height, 0.24, colors[Math.floor(rng() * colors.length)], x + width / 2, y + 0.015 + height / 2, z));
        x += width + 0.005;
      }
    }
    return group;
  },
  // экран кинозала у стены: рама, полотно, колонки по краям
  cinemaScreen(item, along) {
    const group = new THREE.Group(), z = WALL_FACE + 0.05;
    group.add(box(along - 0.2, 1.75, 0.06, MATS.black(), along / 2, 1.35, z));
    group.add(box(along - 0.36, 1.6, 0.01, MATS.screen(item.seed || 2, 'wave'), along / 2, 1.35, z + 0.035));
    for (const x of [0.25, along - 0.25]) group.add(box(0.36, 1.1, 0.34, MATS.black(), x, 0.55, z + 0.17));
    group.add(box(along - 0.2, 0.25, 0.4, MATS.darkSteel(), along / 2, 0.125, z + 0.2));
    return group;
  },
  // ряд кресел кинозала: мягкие кресла с подлокотниками, спинками к «спине» предмета, лицом к экрану
  cinemaSeats(item, along, deep) {
    const group = new THREE.Group(), count = Math.max(1, Math.round(along / 0.62)), z = deep / 2 + 0.05;
    group.add(box(along - 0.04, 0.12, 0.7, MATS.darkSteel(), along / 2, 0.06, z));
    for (let index = 0; index < count; index++) {
      const x = (index + 0.5) * along / count;
      group.add(box(0.5, 0.14, 0.5, MATS.velvet(), x, 0.42, z + 0.04));
      const back = box(0.5, 0.62, 0.1, MATS.velvet(), x, 0.76, z - 0.24);
      back.rotation.x = -0.12;
      group.add(back);
    }
    for (let index = 0; index <= count; index++) group.add(box(0.06, 0.62, 0.55, MATS.black(), index * along / count, 0.31, z));
    return group;
  },
  // кинопроектор на тумбе
  projector(item, along) {
    const group = new THREE.Group(), x = along / 2, z = WALL_FACE + 0.35;
    group.add(box(0.6, 0.9, 0.55, MATS.black(), x, 0.45, z));
    group.add(box(0.45, 0.3, 0.6, MATS.darkSteel(), x, 1.05, z + 0.05));
    group.add(cylinder(0.09, 0.14, MATS.tintedGlass(), x, 1.05, z + 0.42, 14).rotateX(Math.PI / 2));
    group.add(box(0.06, 0.03, 0.01, MATS.ledGreen(), x + 0.15, 1.15, z + 0.355));
    return group;
  },
  // грядка: бортик, земля, ряд кустов
  planter(item, along, deep) {
    const group = new THREE.Group(), rng = mulberry32(item.col * 13 + item.row * 7), z = WALL_FACE + 0.36, depth = Math.min(0.7, deep - 0.2);
    group.add(box(along - 0.1, 0.5, depth, MATS.wood(), along / 2, 0.25, z));
    group.add(box(along - 0.2, 0.04, depth - 0.1, MATS.soil(), along / 2, 0.5, z));
    const count = Math.max(2, Math.round(along / 0.35));
    for (let index = 0; index < count; index++) {
      const x = 0.15 + (index + 0.5) * (along - 0.3) / count, size = 0.16 + rng() * 0.1;
      const bush = new THREE.Mesh(new THREE.IcosahedronGeometry(size, 1), MATS.leaf(Math.floor(rng() * 4)));
      bush.position.set(x, 0.55 + size * 0.8, z + (rng() - 0.5) * 0.2);
      bush.scale.set(1, 0.8 + rng() * 0.6, 1);
      group.add(bush);
    }
    return group;
  },
  // дерево в кадке
  pottedTree(item, along, deep) {
    const group = new THREE.Group(), rng = mulberry32(item.col * 17 + item.row * 5), x = along / 2, z = deep / 2;
    group.add(cylinder(0.3, 0.5, MATS.terracotta(), x, 0.25, z, 16, 0.36));
    group.add(cylinder(0.33, 0.03, MATS.soil(), x, 0.5, z, 16));
    group.add(cylinder(0.05, 1.2, MATS.bark(), x, 1.1, z, 8, 0.035));
    for (let index = 0; index < 6; index++) {
      const angle = rng() * Math.PI * 2, size = 0.28 + rng() * 0.15, height = 1.55 + rng() * 0.5;
      const crown = new THREE.Mesh(new THREE.IcosahedronGeometry(size, 1), MATS.leaf(Math.floor(rng() * 4)));
      crown.position.set(x + Math.cos(angle) * 0.22, height, z + Math.sin(angle) * 0.22);
      group.add(crown);
    }
    return group;
  },
  // стеллаж гидропоники: полки с лотками, зелень, фитолампы
  hydroponicRack(item, along) {
    const group = new THREE.Group(), rng = mulberry32(item.col * 11 + item.row * 3), z = WALL_FACE + 0.3;
    for (const x of [0.08, along - 0.08]) group.add(box(0.04, 2.0, 0.5, MATS.steel(), x, 1.0, z));
    for (let shelf = 0; shelf < 4; shelf++) {
      const y = 0.25 + shelf * 0.5;
      group.add(box(along - 0.12, 0.08, 0.48, MATS.white(), along / 2, y, z));
      group.add(box(along - 0.2, 0.03, 0.4, MATS.growLight(), along / 2, y + 0.42, z));
      for (let plant = 0; plant < 5; plant++) {
        const size = 0.06 + rng() * 0.05;
        const leaf = new THREE.Mesh(new THREE.IcosahedronGeometry(size, 0), MATS.leaf(Math.floor(rng() * 4)));
        leaf.position.set(0.18 + plant * (along - 0.36) / 4, y + 0.05 + size, z + (rng() - 0.5) * 0.2);
        group.add(leaf);
      }
    }
    return group;
  },
  // фонтан: чаша, вода, центральная колонна
  fountain(item, along, deep) {
    const group = new THREE.Group(), x = along / 2, z = deep / 2, radius = Math.min(along, deep) / 2 - 0.15;
    group.add(cylinder(radius, 0.45, MATS.cream(), x, 0.225, z, 28));
    group.add(cylinder(radius - 0.1, 0.02, MATS.water(), x, 0.42, z, 28));
    group.add(cylinder(0.12, 0.8, MATS.cream(), x, 0.8, z, 12));
    group.add(cylinder(0.4, 0.08, MATS.cream(), x, 1.2, z, 18, 0.32));
    group.add(cylinder(0.32, 0.02, MATS.water(), x, 1.25, z, 18));
    return group;
  },
  // автомат с напитками
  vendingMachine(item, along) {
    const group = new THREE.Group(), x = along / 2, z = WALL_FACE + 0.4;
    group.add(box(0.85, 1.85, 0.75, MATS.red(), x, 0.925, z));
    group.add(box(0.55, 1.2, 0.01, MATS.tintedGlass(), x - 0.1, 1.15, z + 0.38));
    for (let shelf = 0; shelf < 5; shelf++) group.add(box(0.5, 0.02, 0.01, MATS.lamp(), x - 0.1, 0.65 + shelf * 0.24, z + 0.385));
    group.add(box(0.15, 0.3, 0.01, MATS.black(), x + 0.3, 1.2, z + 0.38));
    group.add(box(0.4, 0.15, 0.02, MATS.black(), x - 0.1, 0.25, z + 0.38));
    return group;
  },
};

// предмет в канонической рамке поворачивается к своей стороне
function oriented(item, width, depth, build) {
  const face = item.face || 'N';
  const along = face === 'N' || face === 'S' ? width : depth;
  const deep = face === 'N' || face === 'S' ? depth : width;
  const inner = build(item, along, deep);
  const pivot = new THREE.Group();
  inner.position.set(-along / 2, 0, -deep / 2);
  pivot.add(inner);
  pivot.rotation.y = { N: 0, S: Math.PI, W: Math.PI / 2, E: -Math.PI / 2 }[face];
  pivot.position.set(width / 2, 0, depth / 2);
  const holder = new THREE.Group();
  holder.add(pivot);
  return holder;
}

export const FURNITURE_KINDS = new Set(Object.keys(BUILDERS));
// предметы на полу без высоты (не препятствие для пуль и не заслоняют)
export const FLAT_FURNITURE = new Set(['gymMat', 'repairStand']);

export function buildFurnitureObject(item) {
  const build = BUILDERS[item.kind];
  if (!build) return null;
  return oriented(item, item.cols * TILE, item.rows * TILE, build);
}
