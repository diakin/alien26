// Камбуз базы (кухня в духе корабельной): шлифованная нержавейка, плитка на полу, остров с плитами, плита
// с духовкой и вытяжкой, мойки, холодильник, навесные шкафы. Предметы строятся в локальной рамке своей
// площадки (как остальные предметы buildObject): x — вдоль col, z — вдоль row, начало — угол площадки.
// item.face — у какой стены стоит предмет (N, E, S, W): его задняя сторона прижата к этой стене.
import * as THREE from 'three';
import { canvasTexture, mulberry32 } from './lib.js';

const TILE = 1.25;
const WALL_FACE = 0.09;            // половина толщины стены: внутренняя грань стены от линии клетки

// ---------------- материалы ----------------
const cache = new Map();
const once = (key, make) => { if (!cache.has(key)) cache.set(key, make()); return cache.get(key); };

// шлифованная сталь: продольные риски (карта шероховатости) и лёгкая неровность цвета
function brushedTextures(seed, vertical) {
  return once('brushed' + seed + (vertical ? 'v' : 'h'), () => {
    const size = 256, rng = mulberry32(seed);
    const color = document.createElement('canvas'), rough = document.createElement('canvas');
    color.width = color.height = rough.width = rough.height = size;
    const colorContext = color.getContext('2d'), roughContext = rough.getContext('2d');
    colorContext.fillStyle = 'rgb(196,200,204)'; colorContext.fillRect(0, 0, size, size);
    roughContext.fillStyle = 'rgb(92,92,92)'; roughContext.fillRect(0, 0, size, size);
    for (let line = 0; line < 900; line++) {
      const position = rng() * size, length = 20 + rng() * 200, start = rng() * size, tone = rng();
      colorContext.fillStyle = `rgba(${tone > 0.5 ? 230 : 150},${tone > 0.5 ? 232 : 154},${tone > 0.5 ? 236 : 158},0.10)`;
      roughContext.fillStyle = `rgba(${tone > 0.5 ? 140 : 50},${tone > 0.5 ? 140 : 50},${tone > 0.5 ? 140 : 50},0.25)`;
      if (vertical) { colorContext.fillRect(position, start, 1, length); roughContext.fillRect(position, start, 1, length); }
      else { colorContext.fillRect(start, position, length, 1); roughContext.fillRect(start, position, length, 1); }
    }
    return { map: canvasTexture(color, { repeat: 1 }), roughnessMap: canvasTexture(rough, { srgb: false, repeat: 1 }) };
  });
}
const boosted = (material, boost) => { material.userData.envBoost = boost; return material; };
const steel = (vertical = false) => once('galleySteel' + vertical, () => {
  const textures = brushedTextures(vertical ? 11 : 7, vertical);
  const material = new THREE.MeshStandardMaterial({ color: 0xf0f3f6, map: textures.map, roughnessMap: textures.roughnessMap, roughness: 0.5, metalness: 0.6 });
  material.userData.envBoost = 3.2;
  return material;
});
const MATS = {
  steel: () => steel(false),
  steelVertical: () => steel(true),
  steelDark: () => once('galleySteelDark', () => boosted(new THREE.MeshStandardMaterial({ color: 0x8a9096, roughness: 0.45, metalness: 0.6 }), 2.5)),
  groove: () => once('galleyGroove', () => new THREE.MeshStandardMaterial({ color: 0x2a2d30, roughness: 0.6, metalness: 0.5 })),
  plinth: () => once('galleyPlinth', () => new THREE.MeshStandardMaterial({ color: 0x1f2225, roughness: 0.8, metalness: 0.2 })),
  castIron: () => once('galleyIron', () => new THREE.MeshStandardMaterial({ color: 0x1c1d1f, roughness: 0.75, metalness: 0.35 })),
  knob: () => once('galleyKnob', () => new THREE.MeshStandardMaterial({ color: 0x111214, roughness: 0.35, metalness: 0.3 })),
  glass: () => once('galleyGlass', () => new THREE.MeshStandardMaterial({ color: 0x0c0f12, roughness: 0.1, metalness: 0.4 })),
  basin: () => once('galleyBasin', () => boosted(new THREE.MeshStandardMaterial({ color: 0xb4b9be, roughness: 0.3, metalness: 0.7 }), 3)),
  chrome: () => once('galleyChrome', () => boosted(new THREE.MeshStandardMaterial({ color: 0xe8ecf0, roughness: 0.15, metalness: 0.9 }), 4)),
  white: () => once('galleyWhite', () => new THREE.MeshStandardMaterial({ color: 0xe8e8e4, roughness: 0.5, metalness: 0.05 })),
  display: () => once('galleyDisplay', () => new THREE.MeshStandardMaterial({ color: 0x0a1418, emissive: 0x3aa8d8, emissiveIntensity: 0.6, roughness: 0.3 })),
  lamp: () => once('galleyLamp', () => new THREE.MeshStandardMaterial({ color: 0xfff6e0, emissive: 0xfff0d0, emissiveIntensity: 1.4 })),
  rubber: () => once('galleyRubber', () => new THREE.MeshStandardMaterial({ color: 0x15171a, roughness: 0.9 })),
  red: () => once('galleyRed', () => new THREE.MeshStandardMaterial({ color: 0xa8241c, roughness: 0.45, metalness: 0.3 })),
  // светлая плитка 30 см со швами
  floor: () => once('galleyFloor', () => {
    const size = 512, rng = mulberry32(5);
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = size;
    const context = canvas.getContext('2d');
    context.fillStyle = 'rgb(176,178,174)'; context.fillRect(0, 0, size, size);
    const cells = 4, step = size / cells;
    for (let row = 0; row < cells; row++) for (let col = 0; col < cells; col++) {
      const tone = 214 + Math.floor(rng() * 10);
      context.fillStyle = `rgb(${tone},${tone - 2},${tone - 8})`;
      context.fillRect(col * step + 3, row * step + 3, step - 6, step - 6);
    }
    const texture = canvasTexture(canvas, { repeat: 1 });
    return new THREE.MeshStandardMaterial({ map: texture, roughness: 0.35, metalness: 0.0 });
  }),
};

// ---------------- примитивы ----------------
function box(width, height, depth, material, x, y, z) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), material);
  mesh.position.set(x, y, z);
  return mesh;
}
function cylinder(radius, height, material, x, y, z, segments = 12) {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, height, segments), material);
  mesh.position.set(x, y, z);
  return mesh;
}
// труба между двумя точками
function tube(from, to, radius, material) {
  const direction = new THREE.Vector3().subVectors(to, from);
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, direction.length(), 10), material);
  mesh.position.copy(from).addScaledVector(direction, 0.5);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());
  return mesh;
}

// ---------------- части (в канонической рамке: стена — при z = 0, предмет вдоль x от 0 до along) ----------------
const COUNTER_TOP = 0.9, COUNTER_DEPTH = 0.66;
const FRONT = WALL_FACE + COUNTER_DEPTH;             // передняя плоскость шкафов

// нижний шкаф: корпус, цоколь, фасады с утопленными ручками, столешница с бортом
function baseCabinet(group, x0, x1, fronts) {
  const width = x1 - x0, center = (x0 + x1) / 2;
  group.add(box(width - 0.01, 0.1, COUNTER_DEPTH - 0.06, MATS.plinth(), center, 0.05, WALL_FACE + (COUNTER_DEPTH - 0.06) / 2));
  group.add(box(width - 0.01, COUNTER_TOP - 0.14, COUNTER_DEPTH - 0.02, MATS.steelVertical(), center, 0.1 + (COUNTER_TOP - 0.14) / 2, WALL_FACE + (COUNTER_DEPTH - 0.02) / 2));
  // фасады: ящики (drawers) или распашные дверцы (doors); швы и ручки-углубления
  const top = COUNTER_TOP - 0.06, bottom = 0.12, frontZ = WALL_FACE + COUNTER_DEPTH - 0.01;
  const handle = (x, y, horizontal) => group.add(box(horizontal ? 0.12 : 0.03, horizontal ? 0.03 : 0.12, 0.012, MATS.groove(), x, y, frontZ + 0.002));
  const seamV = (x) => group.add(box(0.006, top - bottom, 0.006, MATS.groove(), x, (top + bottom) / 2, frontZ + 0.002));
  const seamH = (y, from, to) => group.add(box(to - from, 0.006, 0.006, MATS.groove(), (from + to) / 2, y, frontZ + 0.002));
  seamH(top, x0, x1);
  if (fronts === 'drawers') {
    const rows = 3;
    for (let index = 1; index < rows; index++) seamH(bottom + (top - bottom) * index / rows, x0 + 0.01, x1 - 0.01);
    for (let index = 0; index < rows; index++) handle(center, bottom + (top - bottom) * (index + 0.8) / rows, true);
  } else if (fronts === 'doors') {
    seamV(center);
    handle(center - 0.05, top - 0.08, false); handle(center + 0.05, top - 0.08, false);
  } else if (fronts === 'mixed') {
    seamH(top - 0.18, x0 + 0.01, x1 - 0.01); handle(center, top - 0.07, true);
    seamV(center); handle(center - 0.05, top - 0.28, false); handle(center + 0.05, top - 0.28, false);
  }
  // столешница с передним бортом и задним бортиком
  group.add(box(width, 0.04, COUNTER_DEPTH + 0.02, MATS.steel(), center, COUNTER_TOP - 0.02, WALL_FACE + (COUNTER_DEPTH + 0.02) / 2));
  group.add(box(width, 0.05, 0.015, MATS.steel(), center, COUNTER_TOP - 0.035, FRONT + 0.012));
  group.add(box(width, 0.1, 0.02, MATS.steel(), center, COUNTER_TOP + 0.05, WALL_FACE + 0.01));
}
// облицовка стены нержавейкой над столешницей
function backsplash(group, x0, x1, top) {
  group.add(box(x1 - x0, top - COUNTER_TOP, 0.012, MATS.steelVertical(), (x0 + x1) / 2, (COUNTER_TOP + top) / 2, WALL_FACE + 0.006));
  for (let x = x0 + 0.6; x < x1 - 0.05; x += 0.6) group.add(box(0.005, top - COUNTER_TOP, 0.004, MATS.groove(), x, (COUNTER_TOP + top) / 2, WALL_FACE + 0.013));
}
// навесной шкаф
function wallCabinet(group, x0, x1) {
  const bottom = 1.5, top = 2.15, depth = 0.34, center = (x0 + x1) / 2;
  group.add(box(x1 - x0 - 0.01, top - bottom, depth, MATS.steelVertical(), center, (bottom + top) / 2, WALL_FACE + depth / 2));
  group.add(box(0.006, top - bottom - 0.02, 0.006, MATS.groove(), center, (bottom + top) / 2, WALL_FACE + depth + 0.002));
  for (const side of [-1, 1]) group.add(box(0.03, 0.1, 0.012, MATS.groove(), center + side * 0.05, bottom + 0.1, WALL_FACE + depth + 0.004));
  // подсветка столешницы под шкафом
  group.add(box(x1 - x0 - 0.1, 0.012, 0.04, MATS.lamp(), center, bottom - 0.007, WALL_FACE + depth - 0.05));
}
// мойка в столешнице: чаша, слив, смеситель с высоким изливом
function sink(group, x, double) {
  const bowls = double ? [x - 0.2, x + 0.2] : [x];
  for (const bowlX of bowls) {
    group.add(box(double ? 0.36 : 0.5, 0.012, 0.42, MATS.basin(), bowlX, COUNTER_TOP - 0.14, WALL_FACE + 0.36));
    for (const side of [-1, 1]) group.add(box(0.012, 0.14, 0.42, MATS.basin(), bowlX + side * (double ? 0.18 : 0.25), COUNTER_TOP - 0.07, WALL_FACE + 0.36));
    group.add(box(double ? 0.36 : 0.5, 0.14, 0.012, MATS.basin(), bowlX, COUNTER_TOP - 0.07, WALL_FACE + 0.15));
    group.add(box(double ? 0.36 : 0.5, 0.14, 0.012, MATS.basin(), bowlX, COUNTER_TOP - 0.07, WALL_FACE + 0.57));
    group.add(cylinder(0.025, 0.004, MATS.groove(), bowlX, COUNTER_TOP - 0.132, WALL_FACE + 0.36));
  }
  // проём в столешнице закрываем тёмной «водой»-тенью по краю (чаша видна сверху)
  const baseX = x, baseZ = WALL_FACE + 0.08;
  group.add(cylinder(0.03, 0.06, MATS.chrome(), baseX, COUNTER_TOP + 0.03, baseZ));
  group.add(tube(new THREE.Vector3(baseX, COUNTER_TOP + 0.06, baseZ), new THREE.Vector3(baseX, COUNTER_TOP + 0.48, baseZ), 0.014, MATS.chrome()));
  // излив дугой вперёд
  const arc = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.013, 8, 16, Math.PI), MATS.chrome());
  arc.rotation.y = Math.PI / 2;
  arc.position.set(baseX, COUNTER_TOP + 0.48, baseZ + 0.12);
  group.add(arc);
  group.add(tube(new THREE.Vector3(baseX, COUNTER_TOP + 0.48, baseZ + 0.24), new THREE.Vector3(baseX, COUNTER_TOP + 0.36, baseZ + 0.24), 0.016, MATS.chrome()));
  group.add(box(0.012, 0.012, 0.08, MATS.chrome(), baseX + 0.04, COUNTER_TOP + 0.1, baseZ + 0.03));
}

// ---------------- предметы ----------------
// item.variant: drawers | doors | mixed | sink | sink2 | microwave | grinder; item.upper — навесной шкаф над
function counter(item, along) {
  const group = new THREE.Group();
  const variant = item.variant || 'drawers';
  const fronts = variant === 'sink' || variant === 'sink2' ? 'doors' : variant === 'microwave' || variant === 'grinder' ? 'mixed' : variant;
  baseCabinet(group, 0.005, along - 0.005, fronts);
  backsplash(group, 0, along, item.upper ? 1.5 : 1.45);
  if (item.upper) wallCabinet(group, 0.005, along - 0.005);
  if (variant === 'sink' || variant === 'sink2') sink(group, along / 2, variant === 'sink2');
  if (variant === 'microwave') {
    const x = along / 2, z = WALL_FACE + 0.26;
    group.add(box(0.52, 0.3, 0.38, MATS.steel(), x, COUNTER_TOP + 0.15, z));
    group.add(box(0.33, 0.21, 0.01, MATS.glass(), x - 0.07, COUNTER_TOP + 0.15, z + 0.19));
    group.add(box(0.1, 0.21, 0.01, MATS.groove(), x + 0.18, COUNTER_TOP + 0.15, z + 0.19));
    group.add(box(0.05, 0.015, 0.012, MATS.display(), x + 0.18, COUNTER_TOP + 0.24, z + 0.196));
  }
  if (variant === 'grinder') {
    // мясорубка: корпус, горловина с лотком, рукоять
    const x = along / 2 - 0.1, z = WALL_FACE + 0.3;
    group.add(box(0.22, 0.24, 0.36, MATS.steel(), x, COUNTER_TOP + 0.12, z));
    group.add(cylinder(0.06, 0.2, MATS.chrome(), x, COUNTER_TOP + 0.3, z + 0.06));
    group.add(box(0.26, 0.02, 0.22, MATS.chrome(), x, COUNTER_TOP + 0.41, z + 0.06));
    group.add(box(0.04, 0.03, 0.03, MATS.red(), x + 0.12, COUNTER_TOP + 0.08, z + 0.19));
    // миксер с чашей рядом
    const mixerX = along / 2 + 0.22;
    group.add(box(0.16, 0.06, 0.26, MATS.white(), mixerX, COUNTER_TOP + 0.03, z));
    group.add(box(0.1, 0.3, 0.1, MATS.white(), mixerX, COUNTER_TOP + 0.18, z - 0.08));
    group.add(box(0.14, 0.08, 0.26, MATS.white(), mixerX, COUNTER_TOP + 0.36, z));
    group.add(cylinder(0.08, 0.12, MATS.chrome(), mixerX, COUNTER_TOP + 0.12, z + 0.05));
  }
  return group;
}

// плита с духовкой и вытяжка над ней
function range(item, along) {
  const group = new THREE.Group();
  const width = along - 0.01, center = along / 2;
  group.add(box(width, 0.1, COUNTER_DEPTH - 0.06, MATS.plinth(), center, 0.05, WALL_FACE + (COUNTER_DEPTH - 0.06) / 2));
  group.add(box(width, COUNTER_TOP - 0.1, COUNTER_DEPTH, MATS.steelVertical(), center, 0.1 + (COUNTER_TOP - 0.1) / 2, WALL_FACE + COUNTER_DEPTH / 2));
  // духовка: дверца со стеклом и ручкой-трубой
  const frontZ = FRONT + 0.004;
  group.add(box(width - 0.12, 0.46, 0.02, MATS.steel(), center, 0.42, frontZ + 0.01));
  group.add(box(width - 0.34, 0.2, 0.01, MATS.glass(), center, 0.44, frontZ + 0.022));
  group.add(tube(new THREE.Vector3(center - (width - 0.3) / 2, 0.66, frontZ + 0.06), new THREE.Vector3(center + (width - 0.3) / 2, 0.66, frontZ + 0.06), 0.012, MATS.chrome()));
  for (const side of [-1, 1]) group.add(box(0.015, 0.015, 0.05, MATS.chrome(), center + side * (width - 0.3) / 2, 0.66, frontZ + 0.035));
  // панель ручек
  group.add(box(width - 0.06, 0.11, 0.02, MATS.steelDark(), center, 0.79, frontZ + 0.006));
  const knobs = 6;
  for (let index = 0; index < knobs; index++) {
    const knob = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.024, 0.03, 14), MATS.knob());
    knob.rotation.x = Math.PI / 2;
    knob.position.set(center - (width - 0.2) / 2 + (width - 0.2) * index / (knobs - 1), 0.79, frontZ + 0.03);
    group.add(knob);
  }
  // варочная поверхность: решётки над конфорками
  group.add(box(width, 0.02, COUNTER_DEPTH, MATS.steelDark(), center, COUNTER_TOP - 0.01, WALL_FACE + COUNTER_DEPTH / 2));
  for (const [dx, dz] of [[-0.22, 0.2], [0.22, 0.2], [-0.22, 0.48], [0.22, 0.48]]) {
    group.add(cylinder(0.07, 0.015, MATS.castIron(), center + dx, COUNTER_TOP + 0.007, WALL_FACE + dz, 16));
    for (const turn of [0, Math.PI / 2]) {
      const bar = box(0.3, 0.018, 0.018, MATS.castIron(), center + dx, COUNTER_TOP + 0.03, WALL_FACE + dz);
      bar.rotation.y = turn;
      group.add(bar);
    }
  }
  backsplash(group, 0, along, 1.75);
  // вытяжка: зонт с наклонным низом, фильтры и светильники
  const hoodBottom = 1.78, hoodTop = 2.25, hoodDepth = 0.62;
  group.add(box(along + 0.1, hoodTop - hoodBottom - 0.12, hoodDepth, MATS.steel(), center, hoodTop - (hoodTop - hoodBottom - 0.12) / 2, WALL_FACE + hoodDepth / 2));
  group.add(box(along + 0.1, 0.12, 0.03, MATS.steel(), center, hoodBottom + 0.06, WALL_FACE + hoodDepth - 0.015));
  group.add(box(along - 0.06, 0.012, hoodDepth - 0.08, MATS.steelDark(), center, hoodBottom + 0.01, WALL_FACE + hoodDepth / 2));
  for (let slat = 0; slat < 9; slat++) group.add(box(0.012, 0.02, hoodDepth - 0.14, MATS.groove(), center - along * 0.4 + along * 0.8 * slat / 8, hoodBottom + 0.02, WALL_FACE + hoodDepth / 2 - 0.02));
  for (const side of [-1, 1]) group.add(box(0.14, 0.008, 0.06, MATS.lamp(), center + side * along * 0.28, hoodBottom + 0.004, WALL_FACE + hoodDepth - 0.08));
  return group;
}

// холодильный шкаф: две дверцы, вертикальные ручки, табло
function fridge(item, along) {
  const group = new THREE.Group();
  const width = along - 0.04, center = along / 2, depth = 0.72, height = 2.02;
  group.add(box(width, 0.08, depth - 0.06, MATS.plinth(), center, 0.04, WALL_FACE + (depth - 0.06) / 2));
  group.add(box(width, height - 0.08, depth, MATS.steelVertical(), center, 0.08 + (height - 0.08) / 2, WALL_FACE + depth / 2));
  const frontZ = WALL_FACE + depth;
  group.add(box(width - 0.02, 0.006, 0.006, MATS.groove(), center, 1.25, frontZ + 0.003));
  group.add(box(0.006, height - 0.12, 0.006, MATS.groove(), center, 0.08 + (height - 0.08) / 2, frontZ + 0.003));
  for (const side of [-1, 1]) {
    group.add(tube(new THREE.Vector3(center + side * 0.06, 0.95, frontZ + 0.045), new THREE.Vector3(center + side * 0.06, 1.55, frontZ + 0.045), 0.012, MATS.chrome()));
    for (const y of [0.95, 1.55]) group.add(box(0.015, 0.015, 0.045, MATS.chrome(), center + side * 0.06, y, frontZ + 0.022));
  }
  group.add(box(0.16, 0.06, 0.01, MATS.display(), center - width / 4, 1.82, frontZ + 0.006));
  return group;
}

// остров с четырьмя чугунными плитами и поручнем по кругу (как на камбузе: держаться при качке)
function island(item, width, depth) {
  const group = new THREE.Group();
  const margin = 0.2, cx = width / 2, cz = depth / 2;
  const bodyWidth = width - margin * 2, bodyDepth = depth - margin * 2;
  group.add(box(bodyWidth - 0.08, 0.1, bodyDepth - 0.08, MATS.plinth(), cx, 0.05, cz));
  group.add(box(bodyWidth, COUNTER_TOP - 0.14, bodyDepth, MATS.steelVertical(), cx, 0.1 + (COUNTER_TOP - 0.14) / 2, cz));
  group.add(box(bodyWidth + 0.06, 0.06, bodyDepth + 0.06, MATS.steel(), cx, COUNTER_TOP - 0.06, cz));
  // ванна столешницы с плитами
  group.add(box(bodyWidth - 0.04, 0.02, bodyDepth - 0.04, MATS.steelDark(), cx, COUNTER_TOP - 0.025, cz));
  const plateWidth = (bodyWidth - 0.16) / 2, plateDepth = (bodyDepth - 0.16) / 2;
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const px = cx + sx * (plateWidth / 2 + 0.03), pz = cz + sz * (plateDepth / 2 + 0.03);
    group.add(box(plateWidth, 0.035, plateDepth, MATS.castIron(), px, COUNTER_TOP - 0.005, pz));
    if (sx === sz) for (let ring = 0; ring < 5; ring++) group.add(box(plateWidth * 0.5, 0.004, 0.012, MATS.groove(), px, COUNTER_TOP + 0.014, pz - 0.08 + ring * 0.04));
  }
  // поручень на стойках по периметру
  const railY = COUNTER_TOP + 0.06, outer = 0.1;
  const corners = [[cx - bodyWidth / 2 - outer, cz - bodyDepth / 2 - outer], [cx + bodyWidth / 2 + outer, cz - bodyDepth / 2 - outer],
    [cx + bodyWidth / 2 + outer, cz + bodyDepth / 2 + outer], [cx - bodyWidth / 2 - outer, cz + bodyDepth / 2 + outer]];
  corners.forEach(([x, z], index) => {
    const [nextX, nextZ] = corners[(index + 1) % 4];
    group.add(tube(new THREE.Vector3(x, railY, z), new THREE.Vector3(nextX, railY, nextZ), 0.016, MATS.chrome()));
    group.add(tube(new THREE.Vector3(x, COUNTER_TOP - 0.05, z), new THREE.Vector3(x, railY + 0.03, z), 0.02, MATS.chrome()));
    const inward = new THREE.Vector3(Math.sign(cx - x) * outer, 0, Math.sign(cz - z) * outer);
    group.add(tube(new THREE.Vector3(x, COUNTER_TOP - 0.05, z), new THREE.Vector3(x + inward.x, COUNTER_TOP - 0.05, z + inward.z), 0.015, MATS.chrome()));
  });
  return group;
}

// плитка на полу камбуза и трап-сток вдоль стены
function floor(item, width, depth) {
  const group = new THREE.Group();
  const material = MATS.floor().clone();
  material.map = material.map.clone();
  material.map.repeat.set(width / 1.2, depth / 1.2);
  material.map.needsUpdate = true;
  const plane = box(width - 0.02, 0.006, depth - 0.02, material, width / 2, 0.05, depth / 2);
  plane.receiveShadow = true;
  group.add(plane);
  if (item.drain) {
    const [x0, z0, x1, z1] = item.drain;
    group.add(box(x1 - x0, 0.004, z1 - z0, MATS.groove(), (x0 + x1) / 2, 0.055, (z0 + z1) / 2));
    const along = x1 - x0 > z1 - z0;
    const count = Math.floor((along ? x1 - x0 : z1 - z0) / 0.03);
    for (let index = 0; index < count; index++) {
      const t = (index + 0.5) / count;
      group.add(along ? box(0.008, 0.005, z1 - z0 - 0.01, MATS.steelDark(), x0 + (x1 - x0) * t, 0.058, (z0 + z1) / 2)
        : box(x1 - x0 - 0.01, 0.005, 0.008, MATS.steelDark(), (x0 + x1) / 2, 0.058, z0 + (z1 - z0) * t));
    }
  }
  return group;
}

// предмет у стены: строится в канонической рамке (стена — z = 0) и поворачивается к своей стене
function againstWall(item, width, depth, build) {
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

export const GALLEY_KINDS = new Set(['galleyCounter', 'galleyRange', 'galleyFridge', 'galleyIsland', 'galleyFloor']);

export function buildGalleyObject(item) {
  const width = item.cols * TILE, depth = item.rows * TILE;
  switch (item.kind) {
    case 'galleyCounter': return againstWall(item, width, depth, counter);
    case 'galleyRange': return againstWall(item, width, depth, range);
    case 'galleyFridge': return againstWall(item, width, depth, fridge);
    case 'galleyIsland': return island(item, width, depth);
    case 'galleyFloor': return floor(item, width, depth);
    default: return null;
  }
}
