// Машины для карты: собственные модели, без марок и эмблем.
// Система координат модели: x — поперёк (0 — ось машины), y — вверх от земли, z — вдоль, перед в +z.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);

let materials = null;
function getMaterials() {
  if (materials) return materials;
  const standard = (color, roughness = 0.75, metalness = 0.15, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness, metalness, ...extra });
  materials = {
    olive: standard(0x4d5638, 0.78, 0.18),
    oliveDark: standard(0x3a4229, 0.8, 0.18),
    dusty: standard(0x6b6448, 0.95, 0.05),          // пыль на нижних частях
    frame: standard(0x1d1f1b, 0.7, 0.4),
    rubber: standard(0x1b1b1a, 0.95, 0.0),
    rubberDusty: standard(0x3a3630, 0.98, 0.0),
    hub: standard(0x434a32, 0.7, 0.3),
    steel: standard(0x8a8d88, 0.4, 0.75),
    glass: new THREE.MeshPhysicalMaterial({ color: 0x1a2428, roughness: 0.08, metalness: 0.1, clearcoat: 1, envMapIntensity: 1.4 }),
    lens: standard(0xd8dcd0, 0.15, 0.6, { emissive: 0x111111 }),
    red: standard(0x8a1a12, 0.4, 0.1),
    amber: standard(0xc07a1a, 0.4, 0.1),
    canvas: standard(0x5a5a40, 0.95, 0.0),
  };
  return materials;
}

function shadowed(mesh) { mesh.castShadow = mesh.receiveShadow = true; return mesh; }
function boxMesh(group, width, height, depth, material, x, y, z, radius = 0) {
  const geometry = radius > 0 ? new RoundedBoxGeometry(width, height, depth, 3, Math.min(radius, width / 2.1, height / 2.1, depth / 2.1)) : new THREE.BoxGeometry(width, height, depth);
  const mesh = shadowed(new THREE.Mesh(geometry, material));
  mesh.position.set(x, y, z);
  group.add(mesh);
  return mesh;
}
function cylinderMesh(group, radius, length, material, x, y, z, axis = 'x', segments = 20, radiusEnd = radius) {
  const mesh = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(radius, radiusEnd, length, segments), material));
  if (axis === 'x') mesh.rotation.z = Math.PI / 2;
  if (axis === 'z') mesh.rotation.x = Math.PI / 2;
  mesh.position.set(x, y, z);
  group.add(mesh);
  return mesh;
}
function tubeMesh(group, points, radius, material) {
  const curve = new THREE.CatmullRomCurve3(points.map((point) => V(...point)), false, 'catmullrom', 0.05);
  group.add(shadowed(new THREE.Mesh(new THREE.TubeGeometry(curve, points.length * 8, radius, 8), material)));
}

// колесо повышенной проходимости: шина с грунтозацепами «ёлочкой», диск со ступицей и болтами
function wheel(group, x, y, z, radius, width, outward) {
  const material = getMaterials();
  const tire = cylinderMesh(group, radius, width, material.rubber, x, y, z, 'x', 32);
  void tire;
  // боковина чуть светлее от пыли
  cylinderMesh(group, radius * 0.92, width + 0.01, material.rubberDusty, x, y, z, 'x', 32);
  // грунтозацепы: по кругу, наклон чередуется
  const lugs = 22;
  for (let index = 0; index < lugs; index++) {
    const angle = index / lugs * Math.PI * 2;
    for (const half of [-1, 1]) {
      const lug = boxMesh(group, width * 0.42, 0.045, 0.07, material.rubber,
        x + half * width * 0.22, y + Math.cos(angle) * radius, z + Math.sin(angle) * radius);
      lug.rotation.set(angle, half * 0.45 * (index % 2 ? 1 : -1), 0);
    }
  }
  // диск и ступица с внешней стороны
  const face = x + outward * (width / 2 + 0.005);
  cylinderMesh(group, radius * 0.56, 0.03, material.hub, face, y, z, 'x', 24);
  cylinderMesh(group, radius * 0.2, 0.09, material.hub, face + outward * 0.03, y, z, 'x', 16);
  for (let index = 0; index < 8; index++) {
    const angle = index / 8 * Math.PI * 2;
    cylinderMesh(group, 0.018, 0.04, material.steel, face + outward * 0.02, y + Math.cos(angle) * radius * 0.36, z + Math.sin(angle) * radius * 0.36, 'x', 6);
  }
}

// Армейский грузовик 6×6 с капотной кабиной и кузовом-фургоном (кунгом). Длина около 6,1 м, ширина 2,35 м,
// высота по кунгу 3,2 м. Передняя ось под капотом, задние — сдвоенной тележкой под кунгом.
export const ARMY_TRUCK = { length: 6.15, width: 2.35 };
export function buildArmyTruck() {
  const material = getMaterials();
  const truck = new THREE.Group();
  const wheelRadius = 0.53, wheelWidth = 0.32, track = 0.95;
  const axles = [1.0, 2.25, 5.0];
  const frameTop = 0.98;
  // колёса
  for (const z of axles) for (const side of [-1, 1]) wheel(truck, side * track, wheelRadius, z, wheelRadius, wheelWidth, side);
  // рама, мосты
  for (const side of [-1, 1]) boxMesh(truck, 0.12, 0.24, 5.7, material.frame, side * 0.46, frameTop - 0.12, 3.05);
  for (const z of axles) {
    cylinderMesh(truck, 0.07, track * 2 - 0.2, material.frame, 0, wheelRadius, z, 'x', 12);
    boxMesh(truck, 0.36, 0.3, 0.34, material.frame, 0, wheelRadius, z, 0.08);          // картер моста
  }
  // передний бампер с буксирными крюками и лебёдкой
  boxMesh(truck, 2.3, 0.22, 0.2, material.oliveDark, 0, 0.82, 6.05, 0.03);
  for (const side of [-1, 1]) {
    const hook = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.018, 6, 12, Math.PI * 1.4), material.frame);
    hook.position.set(side * 0.62, 0.74, 6.17); hook.rotation.set(0, Math.PI / 2, Math.PI * 0.8);
    truck.add(shadowed(hook));
  }
  boxMesh(truck, 0.62, 0.26, 0.26, material.frame, 0, 0.84, 5.84, 0.04);
  cylinderMesh(truck, 0.1, 0.5, material.steel, 0, 0.88, 5.84, 'x', 14);
  // капот: моторный отсек с покатой крышкой, решётка радиатора из вертикальных планок
  boxMesh(truck, 1.16, 0.78, 1.32, material.olive, 0, 1.43, 5.33, 0.1);
  const lid = boxMesh(truck, 1.1, 0.12, 1.3, material.olive, 0, 1.84, 5.31, 0.05);
  lid.rotation.x = 0.06;
  boxMesh(truck, 1.0, 0.66, 0.06, material.frame, 0, 1.42, 6.0, 0.02);
  for (let slat = -3; slat <= 3; slat++) boxMesh(truck, 0.07, 0.6, 0.04, material.oliveDark, slat * 0.13, 1.42, 6.04, 0.015);
  for (const side of [-1, 1]) for (let vent = 0; vent < 5; vent++) boxMesh(truck, 0.02, 0.18, 0.08, material.frame, side * 0.585, 1.5, 4.95 + vent * 0.14);
  // крылья: плоские, над передними колёсами, с покатым передом и подножкой; фары на крыльях в решётчатой защите
  for (const side of [-1, 1]) {
    // арка крыла над колесом: профиль в плоскости (z, y), вытянут поперёк машины
    const arch = new THREE.Shape(), center = { z: 5.0, y: wheelRadius }, inner = 0.66, outer = 0.71, from = 0.12, to = Math.PI - 0.25;
    for (let step = 0; step <= 16; step++) {
      const angle = from + (to - from) * step / 16;
      const z = center.z + Math.cos(angle) * outer, y = center.y + Math.sin(angle) * outer;
      if (step === 0) arch.moveTo(-z, y); else arch.lineTo(-z, y);
    }
    for (let step = 16; step >= 0; step--) {
      const angle = from + (to - from) * step / 16;
      arch.lineTo(-(center.z + Math.cos(angle) * inner), center.y + Math.sin(angle) * inner);
    }
    const archGeometry = new THREE.ExtrudeGeometry(arch, { depth: 0.46, bevelEnabled: false });
    archGeometry.rotateY(Math.PI / 2);             // x профиля (−z) → z, вытяжка вдоль x
    const archMesh = shadowed(new THREE.Mesh(archGeometry, material.olive));
    archMesh.position.x = side * 0.95 - 0.23;
    truck.add(archMesh);
    boxMesh(truck, 0.46, 0.05, 0.5, material.olive, side * 0.95, center.y + outer * Math.sin(to) + 0.02 - 0.0, center.z + Math.cos(to) * outer - 0.25);
    boxMesh(truck, 0.06, 0.55, 1.25, material.oliveDark, side * 0.72, 1.0, 5.1);          // внутренний щиток
    cylinderMesh(truck, 0.11, 0.12, material.oliveDark, side * 0.86, 1.4, 5.74, 'z', 18);
    cylinderMesh(truck, 0.085, 0.02, material.lens, side * 0.86, 1.4, 5.81, 'z', 18);
    for (const bar of [-0.06, 0, 0.06]) boxMesh(truck, 0.012, 0.22, 0.012, material.frame, side * 0.86 + bar, 1.4, 5.84);
    boxMesh(truck, 0.06, 0.04, 0.04, material.amber, side * 1.08, 1.32, 5.7);
    // брызговик за передним колесом
    boxMesh(truck, 0.36, 0.42, 0.02, material.rubber, side * 0.95, 0.62, 4.36);
  }
  // кабина: прямоугольная, со скруглённой крышей; лобовое стекло из двух половин, боковые окна, двери
  const cabFront = 4.72, cabRear = 3.6, cabZ = (cabFront + cabRear) / 2, cabLength = cabFront - cabRear;
  boxMesh(truck, 1.3, 0.3, cabLength - 0.1, material.frame, 0, 1.1, cabZ);                         // подрамник кабины
  boxMesh(truck, 2.2, 0.95, cabLength, material.olive, 0, 1.72, cabZ, 0.08);
  boxMesh(truck, 2.14, 0.5, cabLength - 0.06, material.olive, 0, 2.38, cabZ - 0.03, 0.12);
  for (const side of [-1, 1]) {
    const pane = boxMesh(truck, 0.92, 0.4, 0.03, material.glass, side * 0.5, 2.4, cabFront + 0.01);
    pane.rotation.x = -0.12;
    boxMesh(truck, 0.03, 0.34, 0.62, material.glass, side * 1.105, 2.38, cabZ + 0.12);          // окно двери
    boxMesh(truck, 0.03, 0.85, 0.02, material.oliveDark, side * 1.105, 1.85, cabZ - 0.3);        // шов двери
    boxMesh(truck, 0.03, 0.03, 0.12, material.steel, side * 1.11, 2.02, cabZ - 0.18);             // ручка
    // зеркало на кронштейне
    tubeMesh(truck, [[side * 1.1, 2.15, cabFront - 0.05], [side * 1.32, 2.3, cabFront + 0.05], [side * 1.34, 2.5, cabFront + 0.05]], 0.014, material.frame);
    boxMesh(truck, 0.04, 0.26, 0.16, material.frame, side * 1.35, 2.52, cabFront + 0.05);
    // подножка и топливный бак / ящик АКБ под кабиной
    boxMesh(truck, 0.32, 0.04, 0.45, material.frame, side * 0.95, 0.92, cabZ);
  }
  boxMesh(truck, 0.05, 0.4, 0.04, material.oliveDark, 0, 2.4, cabFront + 0.03);                     // стойка между стёклами
  for (const x of [-0.25, 0, 0.25]) boxMesh(truck, 0.07, 0.04, 0.05, material.amber, x, 2.63, cabFront - 0.04);   // фонари на крыше
  cylinderMesh(truck, 0.28, 0.85, material.oliveDark, 0.92, 0.82, 3.05, 'z', 20);                  // топливный бак
  for (const z of [2.75, 3.35]) boxMesh(truck, 0.04, 0.62, 0.05, material.frame, 0.92, 0.82, z);
  boxMesh(truck, 0.5, 0.42, 0.6, material.oliveDark, -0.9, 0.86, 3.05, 0.04);                      // ящик АКБ
  // выхлоп за кабиной
  tubeMesh(truck, [[0.55, 1.05, cabRear - 0.02], [0.75, 1.3, cabRear - 0.08], [0.78, 2.7, cabRear - 0.08]], 0.045, material.frame);
  // кунг: короб на раме, окна с рамками, дверь сзади, лестница, багажник на крыше, отопитель спереди
  const bodyFront = 3.48, bodyRear = 0.1, bodyLength = bodyFront - bodyRear, bodyZ = (bodyFront + bodyRear) / 2;
  const bodyBottom = 1.14, bodyHeight = 2.05;
  boxMesh(truck, 2.08, 0.12, bodyLength, material.frame, 0, bodyBottom - 0.06, bodyZ);
  boxMesh(truck, 2.35, bodyHeight, bodyLength, material.olive, 0, bodyBottom + bodyHeight / 2, bodyZ, 0.06);
  for (const side of [-1, 1]) {
    for (const z of [0.85, 1.75, 2.65]) {
      boxMesh(truck, 0.03, 0.42, 0.6, material.oliveDark, side * 1.177, bodyBottom + 1.45, z, 0.02);
      boxMesh(truck, 0.03, 0.34, 0.52, material.glass, side * 1.185, bodyBottom + 1.45, z);
    }
    for (const y of [bodyBottom + 0.35, bodyBottom + 1.0]) boxMesh(truck, 0.02, 0.03, bodyLength - 0.2, material.oliveDark, side * 1.18, y, bodyZ);   // рёбра жёсткости
    boxMesh(truck, 0.32, 0.38, 0.5, material.oliveDark, side * 1.03, bodyBottom - 0.25, 1.62, 0.04);               // инструментальные ящики
  }
  // задняя дверь и лестница
  boxMesh(truck, 0.86, 1.75, 0.03, material.oliveDark, -0.45, bodyBottom + 0.9, bodyRear - 0.01, 0.02);
  boxMesh(truck, 0.3, 0.26, 0.03, material.glass, -0.45, bodyBottom + 1.45, bodyRear - 0.03);
  boxMesh(truck, 0.03, 0.03, 0.14, material.steel, -0.1, bodyBottom + 0.9, bodyRear - 0.05);
  for (const x of [-0.75, -0.15]) boxMesh(truck, 0.03, 0.9, 0.03, material.frame, x, bodyBottom - 0.3, bodyRear - 0.12);
  for (let step = 0; step < 4; step++) boxMesh(truck, 0.6, 0.025, 0.03, material.frame, -0.45, bodyBottom - 0.65 + step * 0.22, bodyRear - 0.12);
  for (const side of [-1, 1]) {
    boxMesh(truck, 0.14, 0.08, 0.04, material.red, side * 0.95, 0.95, bodyRear - 0.02);
    boxMesh(truck, 0.42, 0.42, 0.02, material.rubber, side * 0.95, 0.62, 0.38);                // задние брызговики
  }
  // багажник на крыше
  const roof = bodyBottom + bodyHeight;
  for (const side of [-1, 1]) tubeMesh(truck, [[side * 1.02, roof, 0.3], [side * 1.02, roof + 0.16, 0.45], [side * 1.02, roof + 0.16, 3.05], [side * 1.02, roof, 3.2]], 0.02, material.frame);
  for (const z of [0.6, 1.4, 2.2, 3.0]) boxMesh(truck, 2.04, 0.025, 0.025, material.frame, 0, roof + 0.16, z);
  boxMesh(truck, 1.2, 0.18, 0.9, material.canvas, -0.2, roof + 0.1, 1.2, 0.06);                  // свёрнутый тент
  // отопитель-вентиляция на передней стенке кунга, над кабиной
  boxMesh(truck, 0.62, 0.55, 0.32, material.oliveDark, 0.55, roof - 0.35, bodyFront + 0.17, 0.05);
  cylinderMesh(truck, 0.12, 0.42, material.frame, 0.55, roof + 0.15, bodyFront + 0.17, 'y', 16);
  cylinderMesh(truck, 0.16, 0.04, material.oliveDark, 0.55, roof + 0.37, bodyFront + 0.17, 'y', 16);
  cylinderMesh(truck, 0.04, 0.9, material.frame, -0.7, roof + 0.4, bodyFront - 0.2, 'y', 8);         // мачта антенны
  // пыль снизу: тонкий слой на кунге и кабине у земли
  boxMesh(truck, 2.37, 0.18, bodyLength + 0.01, material.dusty, 0, bodyBottom + 0.09, bodyZ, 0.04);
  return truck;
}
