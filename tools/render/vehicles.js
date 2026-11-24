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

// Деталь по боковому профилю: контур в плоскости (z, y), вытянут поперёк машины на width, кромки скруглены.
function sideExtrude(group, points, width, material, x, bevel = 0.025) {
  const shape = new THREE.Shape();
  points.forEach(([z, y], index) => { if (index === 0) shape.moveTo(-z, y); else shape.lineTo(-z, y); });
  const geometry = new THREE.ExtrudeGeometry(shape, { depth: width - bevel * 2, bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 3, curveSegments: 4 });
  geometry.rotateY(Math.PI / 2);                 // x контура (−z) → z, вытяжка — вдоль x
  const mesh = shadowed(new THREE.Mesh(geometry, material));
  mesh.position.x = x - width / 2 + bevel;
  group.add(mesh);
  return mesh;
}
// Деталь по поперечному сечению: контур в плоскости (x, y), вытянут вдоль машины от z0 до z1;
// shape(t) может сужать сечение к переду (t — доля длины от z0).
function crossExtrude(group, outline, z0, z1, material, taper = () => ({ scale: 1, drop: 0 }), bevel = 0.02) {
  const shape = new THREE.Shape();
  outline.forEach(([x, y], index) => { if (index === 0) shape.moveTo(x, y); else shape.lineTo(x, y); });
  const length = z1 - z0;
  const geometry = new THREE.ExtrudeGeometry(shape, { depth: length - bevel * 2, bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 2, steps: 8, curveSegments: 6 });
  const position = geometry.attributes.position;
  for (let index = 0; index < position.count; index++) {
    const t = Math.min(1, Math.max(0, (position.getZ(index) + bevel) / length));
    const { scale, drop } = taper(t);
    position.setX(index, position.getX(index) * scale);
    position.setY(index, position.getY(index) - drop * Math.max(0, position.getY(index)));
  }
  geometry.computeVertexNormals();
  const mesh = shadowed(new THREE.Mesh(geometry, material));
  mesh.position.z = z0 + bevel;
  group.add(mesh);
  return mesh;
}
// скруглённый прямоугольник: контур (x, y) с центром в 0
function roundedOutline(width, height, radiusTop, radiusBottom = 0.03, y0 = 0) {
  const points = [], halfWidth = width / 2;
  const arc = (cx, cy, radius, from, to) => { for (let step = 0; step <= 6; step++) { const angle = from + (to - from) * step / 6; points.push([cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius]); } };
  arc(halfWidth - radiusBottom, y0 + radiusBottom, radiusBottom, -Math.PI / 2, 0);
  arc(halfWidth - radiusTop, y0 + height - radiusTop, radiusTop, 0, Math.PI / 2);
  arc(-halfWidth + radiusTop, y0 + height - radiusTop, radiusTop, Math.PI / 2, Math.PI);
  arc(-halfWidth + radiusBottom, y0 + radiusBottom, radiusBottom, Math.PI, Math.PI * 1.5);
  return points;
}

// то же сечение, уменьшенное на скругление кромок вытяжки (оно наращивает контур наружу)
function section(width, height, radiusTop, radiusBottom, y0, bevel) {
  return roundedOutline(width - bevel * 2, height - bevel * 2, Math.max(0.01, radiusTop - bevel), Math.max(0.01, radiusBottom - bevel), y0 + bevel);
}

// колесо повышенной проходимости: шина с округлым профилем и грунтозацепами «ёлочкой», диск со ступицей и болтами
function wheel(group, x, y, z, radius, width, outward) {
  const material = getMaterials();
  const inner = radius * 0.58, shoulder = 0.09, half = width / 2;
  const profile = [new THREE.Vector2(inner, -half)];
  for (let step = 0; step <= 6; step++) { const angle = -Math.PI / 2 + step / 6 * Math.PI / 2; profile.push(new THREE.Vector2(radius - shoulder + Math.cos(angle) * shoulder, -half + shoulder + Math.sin(angle) * shoulder)); }
  for (let step = 0; step <= 6; step++) { const angle = step / 6 * Math.PI / 2; profile.push(new THREE.Vector2(radius - shoulder + Math.cos(angle) * shoulder, half - shoulder + Math.sin(angle) * shoulder)); }
  profile.push(new THREE.Vector2(inner, half));
  const tire = shadowed(new THREE.Mesh(new THREE.LatheGeometry(profile, 36), material.rubber));
  tire.rotation.z = Math.PI / 2;
  tire.position.set(x, y, z);
  group.add(tire);
  // грунтозацепы: по кругу, «ёлочкой» к середине протектора
  const lugs = 20;
  for (let index = 0; index < lugs; index++) {
    const angle = index / lugs * Math.PI * 2;
    for (const side of [-1, 1]) {
      const lug = boxMesh(group, width * 0.36, 0.04, 0.075, material.rubber, x + side * width * 0.2, y + Math.cos(angle) * (radius + 0.005), z + Math.sin(angle) * (radius + 0.005), 0.015);
      lug.rotation.set(angle, side * 0.5, 0);
    }
  }
  // диск, ступица и болты — с внешней стороны
  const face = x + outward * (half - 0.03);
  cylinderMesh(group, inner, 0.05, material.hub, face, y, z, 'x', 28);
  cylinderMesh(group, radius * 0.24, 0.08, material.hub, face + outward * 0.04, y, z, 'x', 18);
  cylinderMesh(group, radius * 0.12, 0.05, material.frame, face + outward * 0.08, y, z, 'x', 12);
  for (let index = 0; index < 8; index++) {
    const angle = index / 8 * Math.PI * 2;
    cylinderMesh(group, 0.018, 0.04, material.steel, face + outward * 0.03, y + Math.cos(angle) * radius * 0.36, z + Math.sin(angle) * radius * 0.36, 'x', 6);
  }
}

// Армейский грузовик 6×6 с капотной кабиной и кузовом-фургоном (кунгом), по типу советских машин 1960-х—70-х:
// скруглённый капот, сужающийся к носу, крылья с плавной аркой, переходящие в подножку, кабина и кунг со скруглёнными
// гранями. Длина около 6,15 м, ширина 2,35 м, высота по кунгу 3,2 м.
export const ARMY_TRUCK = { length: 6.15, width: 2.35 };
export function buildArmyTruck() {
  const material = getMaterials();
  const truck = new THREE.Group();
  const wheelRadius = 0.5, wheelWidth = 0.34, track = 0.95;
  const frontAxle = 5.1, axles = [1.12, 2.3, frontAxle];
  const frameTop = 0.95;
  for (const z of axles) for (const side of [-1, 1]) wheel(truck, side * track, wheelRadius, z, wheelRadius, wheelWidth, side);
  // рама и мосты
  for (const side of [-1, 1]) boxMesh(truck, 0.12, 0.22, 5.75, material.frame, side * 0.45, frameTop - 0.11, 3.1);
  for (const z of axles) {
    cylinderMesh(truck, 0.065, track * 2 - 0.25, material.frame, 0, wheelRadius, z, 'x', 12);
    const housing = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 10), material.frame);
    housing.scale.set(1.1, 0.9, 0.9); housing.position.set(0, wheelRadius, z);
    truck.add(shadowed(housing));
  }
  // бампер: швеллер со скруглёнными концами, крюки, лебёдка за ним
  boxMesh(truck, 2.25, 0.2, 0.16, material.oliveDark, 0, 0.8, 6.06, 0.06);
  for (const side of [-1, 1]) {
    const hook = new THREE.Mesh(new THREE.TorusGeometry(0.055, 0.018, 6, 12, Math.PI * 1.4), material.frame);
    hook.position.set(side * 0.6, 0.72, 6.16); hook.rotation.set(0, Math.PI / 2, Math.PI * 0.8);
    truck.add(shadowed(hook));
  }
  boxMesh(truck, 0.6, 0.24, 0.24, material.frame, 0, 0.84, 5.86, 0.06);
  cylinderMesh(truck, 0.1, 0.48, material.steel, 0, 0.88, 5.86, 'x', 14);
  // капот: сечение со скруглённым верхом, к носу сужается и опускается
  const hoodRear = 4.72, hoodFront = 6.0;
  crossExtrude(truck, section(1.14, 0.78, 0.24, 0.02, 0.98, 0.03), hoodRear, hoodFront, material.olive,
    (t) => ({ scale: 1 - 0.1 * t, drop: 0.045 * t * t }), 0.03);
  // продольный шов капота и жалюзи по бокам
  boxMesh(truck, 0.03, 0.02, hoodFront - hoodRear - 0.1, material.oliveDark, 0, 1.755, (hoodRear + hoodFront) / 2);
  for (const side of [-1, 1]) for (let vent = 0; vent < 6; vent++) {
    const louver = boxMesh(truck, 0.02, 0.2, 0.05, material.frame, side * 0.552, 1.38, 4.95 + vent * 0.11, 0.008);
    louver.rotation.y = side * 0.15;
  }
  // облицовка радиатора: рамка со скруглёнными углами, вертикальные прорези
  crossExtrude(truck, section(1.0, 0.68, 0.12, 0.04, 1.02, 0.012), hoodFront - 0.02, hoodFront + 0.05, material.olive, undefined, 0.012);
  for (let slot = -4; slot <= 4; slot++) boxMesh(truck, 0.045, 0.5, 0.04, material.frame, slot * 0.09, 1.34, hoodFront + 0.045, 0.012);
  // крылья: арка над колесом плавно переходит назад в подножку под дверью
  const fenderOutline = [];
  const ellipse = (radiusZ, radiusY, from, to, reverse) => {
    const result = [];
    for (let step = 0; step <= 20; step++) { const angle = from + (to - from) * step / 20; result.push([frontAxle + Math.cos(angle) * radiusZ, wheelRadius + Math.sin(angle) * radiusY]); }
    return reverse ? result.reverse() : result;
  };
  fenderOutline.push(...ellipse(0.98, 0.72, 0.2, 2.75, false));            // наружная кромка: от переда через верх к заду
  fenderOutline.push([3.62, 0.78], [3.62, 0.72]);                          // подножка до задней стенки кабины
  fenderOutline.push(...ellipse(0.92, 0.66, 0.2, 2.75, true).slice(0, -1)); // внутренняя кромка обратно
  // соединяем: внутренняя кромка заканчивается спереди, контур замкнётся сам
  const step = [[frontAxle + Math.cos(2.75) * 0.92, wheelRadius + Math.sin(2.75) * 0.66]];
  void step;
  for (const side of [-1, 1]) {
    sideExtrude(truck, fenderOutline, 0.44, material.olive, side * 0.93, 0.03);
    // внутренний щиток между крылом и капотом
    boxMesh(truck, 0.05, 0.45, 1.05, material.oliveDark, side * 0.7, 1.0, frontAxle + 0.05);
    // фара в округлом корпусе на передке крыла, подфарник, решётка защиты
    const housing = new THREE.Mesh(new THREE.SphereGeometry(0.12, 18, 12), material.olive);
    housing.scale.set(1, 1, 0.75); housing.position.set(side * 0.83, 1.13, 5.86);
    truck.add(shadowed(housing));
    cylinderMesh(truck, 0.09, 0.02, material.lens, side * 0.83, 1.13, 5.95, 'z', 18);
    for (const bar of [-0.05, 0, 0.05]) boxMesh(truck, 0.012, 0.2, 0.012, material.frame, side * 0.83 + bar, 1.13, 5.99);
    boxMesh(truck, 0.07, 0.045, 0.04, material.amber, side * 1.0, 1.2, 5.7, 0.01);
    // брызговик за передним колесом
    boxMesh(truck, 0.36, 0.4, 0.02, material.rubber, side * 0.93, 0.55, frontAxle - 0.82);
  }
  // кабина: нижняя часть и верх со скруглённой крышей; лобовое стекло из двух половин, двери с окнами
  const cabFront = 4.74, cabRear = 3.62, cabZ = (cabFront + cabRear) / 2, cabLength = cabFront - cabRear;
  boxMesh(truck, 1.3, 0.24, cabLength - 0.1, material.frame, 0, 1.06, cabZ);
  crossExtrude(truck, section(2.18, 0.98, 0.1, 0.05, 1.0, 0.05), cabRear, cabFront, material.olive, undefined, 0.05);
  // верх кабины — по боковому профилю: передний верх скруглён, лобовое стекло наклонено назад, крыша плавно
  // переходит в заднюю стенку; боковые кромки скруглены фаской вытяжки
  const windshieldBottom = { z: cabFront - 0.02, y: 1.96 }, windshieldTop = { z: cabFront - 0.24, y: 2.44 };
  const cabProfile = [[cabRear + 0.02, 1.95], [cabFront - 0.02, 1.95], [windshieldBottom.z, windshieldBottom.y]];
  const roofY = 2.6, rearRadius = 0.16, frontRadiusZ = 0.24;
  for (let step = 1; step <= 10; step++) {         // скругление от верха стекла к крыше: четверть эллипса
    const angle = step / 10 * Math.PI / 2;
    cabProfile.push([windshieldTop.z - frontRadiusZ * (1 - Math.cos(angle)), windshieldTop.y + (roofY - windshieldTop.y) * Math.sin(angle)]);
  }
  for (let step = 0; step <= 8; step++) {          // скругление крыши к задней стенке
    const angle = step / 8 * Math.PI / 2;
    cabProfile.push([cabRear + 0.04 + rearRadius - Math.sin(angle) * rearRadius, roofY - rearRadius + Math.cos(angle) * rearRadius]);
  }
  sideExtrude(truck, cabProfile, 2.1, material.olive, 0, 0.09);
  // лобовое стекло на наклоне, две половины со стойкой
  const slope = Math.atan2(windshieldBottom.z - windshieldTop.z, windshieldTop.y - windshieldBottom.y);
  // скругление кромок вытяжки наращивает профиль на 0,09 м — стекло ставится поверх
  const glassZ = (windshieldBottom.z + windshieldTop.z) / 2 + 0.1 * Math.cos(slope), glassY = (windshieldBottom.y + windshieldTop.y) / 2 + 0.1 * Math.sin(slope);
  for (const side of [-1, 1]) {
    const pane = boxMesh(truck, 0.84, 0.44, 0.03, material.glass, side * 0.48, glassY, glassZ, 0.02);
    pane.rotation.x = -slope;
    boxMesh(truck, 0.03, 0.36, 0.6, material.glass, side * 1.06, 2.22, cabZ + 0.02, 0.02);      // окно двери
    boxMesh(truck, 0.03, 0.85, 0.02, material.oliveDark, side * 1.1, 1.55, cabZ - 0.28);       // шов двери
    boxMesh(truck, 0.03, 0.03, 0.12, material.steel, side * 1.105, 1.8, cabZ - 0.16);           // ручка
    tubeMesh(truck, [[side * 1.05, 2.0, cabFront - 0.1], [side * 1.28, 2.12, cabFront], [side * 1.31, 2.34, cabFront]], 0.014, material.frame);
    boxMesh(truck, 0.04, 0.26, 0.16, material.frame, side * 1.32, 2.36, cabFront, 0.015);
  }
  const pillar = boxMesh(truck, 0.06, 0.46, 0.04, material.oliveDark, 0, glassY, glassZ + 0.01);
  pillar.rotation.x = -slope;
  boxMesh(truck, 1.1, 0.28, 0.03, material.glass, 0, 2.22, cabRear + 0.03, 0.02);                 // заднее окно
  for (const x of [-0.25, 0, 0.25]) boxMesh(truck, 0.07, 0.04, 0.05, material.amber, x, 2.7, cabFront - 0.4, 0.01);
  // под кабиной: топливный бак, ящик аккумуляторов; выхлоп за кабиной
  cylinderMesh(truck, 0.26, 0.85, material.oliveDark, 0.88, 0.78, 3.05, 'z', 20);
  for (const z of [2.75, 3.35]) boxMesh(truck, 0.04, 0.58, 0.05, material.frame, 0.88, 0.78, z);
  boxMesh(truck, 0.5, 0.4, 0.62, material.oliveDark, -0.88, 0.82, 3.05, 0.05);
  tubeMesh(truck, [[0.55, 1.0, cabRear - 0.02], [0.75, 1.25, cabRear - 0.08], [0.78, 2.65, cabRear - 0.08]], 0.045, material.frame);
  // кунг: короб со скруглёнными гранями, окна в рамках, рёбра, дверь сзади с лестницей, багажник, отопитель
  const bodyFront = 3.5, bodyRear = 0.12, bodyLength = bodyFront - bodyRear, bodyZ = (bodyFront + bodyRear) / 2;
  const bodyBottom = 1.1, bodyHeight = 2.08;
  boxMesh(truck, 2.08, 0.12, bodyLength, material.frame, 0, bodyBottom - 0.06, bodyZ);
  crossExtrude(truck, section(2.35, bodyHeight, 0.2, 0.05, bodyBottom, 0.08), bodyRear, bodyFront, material.olive, undefined, 0.08);
  for (const side of [-1, 1]) {
    for (const z of [0.88, 1.78, 2.68]) {
      boxMesh(truck, 0.03, 0.44, 0.62, material.oliveDark, side * 1.177, bodyBottom + 1.45, z, 0.03);
      boxMesh(truck, 0.03, 0.34, 0.52, material.glass, side * 1.186, bodyBottom + 1.45, z, 0.02);
    }
    for (const y of [bodyBottom + 0.38, bodyBottom + 1.02]) boxMesh(truck, 0.02, 0.03, bodyLength - 0.3, material.oliveDark, side * 1.178, y, bodyZ);
    boxMesh(truck, 0.3, 0.36, 0.5, material.oliveDark, side * 1.0, bodyBottom - 0.24, 1.71, 0.05);
  }
  boxMesh(truck, 0.86, 1.75, 0.03, material.oliveDark, -0.45, bodyBottom + 0.92, bodyRear - 0.01, 0.03);
  boxMesh(truck, 0.3, 0.26, 0.03, material.glass, -0.45, bodyBottom + 1.45, bodyRear - 0.03, 0.02);
  boxMesh(truck, 0.03, 0.03, 0.14, material.steel, -0.1, bodyBottom + 0.9, bodyRear - 0.05);
  for (const x of [-0.75, -0.15]) boxMesh(truck, 0.03, 0.9, 0.03, material.frame, x, bodyBottom - 0.3, bodyRear - 0.12);
  for (let rung = 0; rung < 4; rung++) boxMesh(truck, 0.6, 0.025, 0.03, material.frame, -0.45, bodyBottom - 0.65 + rung * 0.22, bodyRear - 0.12);
  for (const side of [-1, 1]) {
    boxMesh(truck, 0.14, 0.08, 0.04, material.red, side * 0.95, 0.92, bodyRear - 0.02, 0.02);
    boxMesh(truck, 0.4, 0.4, 0.02, material.rubber, side * 0.95, 0.58, 0.45);
  }
  const roof = bodyBottom + bodyHeight;
  for (const side of [-1, 1]) tubeMesh(truck, [[side * 0.98, roof - 0.02, 0.35], [side * 0.98, roof + 0.14, 0.5], [side * 0.98, roof + 0.14, 3.05], [side * 0.98, roof - 0.02, 3.2]], 0.02, material.frame);
  for (const z of [0.65, 1.45, 2.25, 3.0]) boxMesh(truck, 1.96, 0.025, 0.025, material.frame, 0, roof + 0.14, z);
  boxMesh(truck, 1.2, 0.18, 0.9, material.canvas, -0.2, roof + 0.08, 1.25, 0.08);
  boxMesh(truck, 0.6, 0.55, 0.3, material.oliveDark, 0.55, roof - 0.38, bodyFront + 0.16, 0.08);
  cylinderMesh(truck, 0.12, 0.42, material.frame, 0.55, roof + 0.12, bodyFront + 0.16, 'y', 16);
  cylinderMesh(truck, 0.16, 0.04, material.oliveDark, 0.55, roof + 0.34, bodyFront + 0.16, 'y', 16);
  cylinderMesh(truck, 0.035, 0.9, material.frame, -0.7, roof + 0.38, bodyFront - 0.2, 'y', 8);
  // пыль у низа кунга
  crossExtrude(truck, section(2.37, 0.16, 0.02, 0.05, bodyBottom - 0.005, 0.01), bodyRear + 0.01, bodyFront - 0.01, material.dusty, undefined, 0.01);
  return truck;
}

// ---------------- конвертоплан КТ-6 «Гриф» ----------------
// Тяжёлый транспортный конвертоплан с четырьмя поворотными винтами в кольцевых каналах (на стоянке — каналы
// горизонтально, как при взлёте). Салон 4×6 клеток по 1,25 м (5 × 7,5 м), высота 4 м — K7 в модели 3,2 м
// (в игре его высота принята 4 м), ширина K7 3,1 м — проходит по полосе B–C с зазором до сидений около 0,5 м.
// Клетки салона: столбцы A–D слева направо (x от −2,5 до 2,5), ряды 1–6 от кабины к рампе (z от 10 до 2,5).
// K7 — средняя полоса B–C, стоит в рядах 1–2; сиденья A2–A4 и D2–D4; дверь в кабину — A1; боковая дверь
// с трапом — правый борт, ряд 5; кормовая рампа во всю ширину (z от 0 до 2,5, пол салона на 0,6 м).
// Модель: z от 0 (конец опущенной рампы) до 15 (нос), x поперёк, y вверх.
export const TILTROTOR = {
  length: 15, width: 12.4, height: 6.45,
  floor: 0.6, cabin: { left: -2.5, right: 2.5, rear: 2.5, front: 10, ceiling: 4.6 },
  cells: { columns: 4, rows: 6, cell: 1.25 },
  ramp: { from: 0, to: 2.5 },
  sideDoor: { side: 'right', rear: 3.75, front: 5.0, height: 2.1 },
  cockpitDoor: { left: -2.5, right: -1.25, height: 2.1 },
  seats: [['A', 2], ['A', 3], ['A', 4], ['D', 2], ['D', 3], ['D', 4]],
  mechBay: { columns: ['B', 'C'], rows: [1, 2] },
};

function tiltrotorMaterials(clip) {
  const extra = clip ? { clippingPlanes: clip, clipShadows: true, side: THREE.DoubleSide } : {};
  const standard = (color, roughness = 0.7, metalness = 0.25, more = {}) => new THREE.MeshStandardMaterial({ color, roughness, metalness, ...extra, ...more });
  return {
    hull: standard(0x4a5145, 0.62, 0.3),
    hullDark: standard(0x363c33, 0.66, 0.3),
    belly: standard(0x70756c, 0.7, 0.25),
    panel: standard(0x2b302a, 0.6, 0.4),
    interior: standard(0x8f958d, 0.8, 0.15),
    floor: standard(0x2a2d2a, 0.85, 0.35),
    seat: standard(0x3e4a36, 0.95, 0.0),
    frame: standard(0x1d1f1c, 0.6, 0.6),
    steel: standard(0x8c908a, 0.35, 0.8),
    rubber: standard(0x1a1a19, 0.95, 0.0),
    yellow: standard(0xc9a21a, 0.6, 0.1),
    glass: new THREE.MeshPhysicalMaterial({ color: 0x14202a, roughness: 0.06, metalness: 0.2, clearcoat: 1, envMapIntensity: 1.6, ...extra }),
    red: standard(0xb01810, 0.4, 0.1, { emissive: 0x500805 }),
    green: standard(0x10a030, 0.4, 0.1, { emissive: 0x053a10 }),
    white: standard(0xe8e8e0, 0.4, 0.1, { emissive: 0x303030 }),
  };
}

// сечение фюзеляжа: прямоугольник с крупно скруглённым верхом
function fuselageOutline(halfWidth, bottom, top, radiusTop, radiusBottom) {
  const points = [], arc = (centerX, centerY, radius, from, to, steps) => {
    for (let index = 0; index <= steps; index++) {
      const angle = from + (to - from) * index / steps;
      points.push([centerX + Math.cos(angle) * radius, centerY + Math.sin(angle) * radius]);
    }
  };
  arc(halfWidth - radiusBottom, bottom + radiusBottom, radiusBottom, -Math.PI / 2, 0, 4);
  arc(halfWidth - radiusTop, top - radiusTop, radiusTop, 0, Math.PI / 2, 10);
  arc(-halfWidth + radiusTop, top - radiusTop, radiusTop, Math.PI / 2, Math.PI, 10);
  arc(-halfWidth + radiusBottom, bottom + radiusBottom, radiusBottom, Math.PI, Math.PI * 1.5, 4);
  return points;
}
// тело по сечению вдоль z с деформацией по длине: form(z) → { scale, top, bottom }; reference — низ и верх
// исходного сечения, относительно которых переносятся высоты (у полосы остекления они берутся от фюзеляжа)
function loft(group, outline, z0, z1, material, form, steps = 32, reference = null) {
  const shape = new THREE.Shape();
  outline.forEach(([x, y], index) => { if (index === 0) shape.moveTo(x, y); else shape.lineTo(x, y); });
  const geometry = new THREE.ExtrudeGeometry(shape, { depth: z1 - z0, bevelEnabled: false, steps, curveSegments: 6 });
  const position = geometry.attributes.position;
  const bottom = reference ? reference.bottom : Math.min(...outline.map((point) => point[1]));
  const top = reference ? reference.top : Math.max(...outline.map((point) => point[1]));
  for (let index = 0; index < position.count; index++) {
    const shapeOf = form(z0 + position.getZ(index));
    position.setX(index, position.getX(index) * shapeOf.scale);
    position.setY(index, shapeOf.bottom + (position.getY(index) - bottom) * (shapeOf.top - shapeOf.bottom) / (top - bottom));
  }
  geometry.computeVertexNormals();
  const mesh = shadowed(new THREE.Mesh(geometry, material));
  mesh.position.z = z0;
  group.add(mesh);
  return mesh;
}

// винт в кольцевом канале: канал (профиль крыла, вращённый вокруг оси), втулка, 7 лопастей, 3 стойки
function ductedFan(group, materials, x, y, z) {
  const fan = new THREE.Group();
  const profile = [[1.38, 0.32], [1.41, 0.44], [1.47, 0.47], [1.53, 0.4], [1.56, 0.1], [1.55, -0.3], [1.5, -0.45], [1.44, -0.45], [1.39, -0.25], [1.38, 0.32]]
    .map(([radius, height]) => new THREE.Vector2(radius, height));
  fan.add(shadowed(new THREE.Mesh(new THREE.LatheGeometry(profile, 56), materials.hull)));
  // светлая кромка-полоса по каналу
  const band = shadowed(new THREE.Mesh(new THREE.TorusGeometry(1.555, 0.03, 6, 56), materials.yellow));
  band.rotation.x = Math.PI / 2; band.position.y = 0.05; fan.add(band);
  cylinderMesh(fan, 0.3, 0.7, materials.hullDark, 0, 0, 0, 'y', 24);
  const spinner = shadowed(new THREE.Mesh(new THREE.SphereGeometry(0.3, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), materials.steel));
  spinner.position.y = 0.35; fan.add(spinner);
  for (let blade = 0; blade < 7; blade++) {
    const holder = new THREE.Group();
    holder.rotation.y = blade * Math.PI * 2 / 7 + 0.2;
    const mesh = shadowed(new THREE.Mesh(new THREE.BoxGeometry(1.08, 0.03, 0.24), materials.frame));
    mesh.position.x = 0.84; mesh.position.y = 0.12; mesh.rotation.x = 0.42;
    holder.add(mesh); fan.add(holder);
  }
  for (let strut = 0; strut < 3; strut++) {
    const holder = new THREE.Group();
    holder.rotation.y = strut * Math.PI * 2 / 3;
    const mesh = shadowed(new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.12, 0.05), materials.hullDark));
    mesh.position.x = 0.85; mesh.position.y = -0.2; holder.add(mesh); fan.add(holder);
  }
  // ось поворота канала со стороны фюзеляжа
  cylinderMesh(fan, 0.16, 0.5, materials.steel, -Math.sign(x) * 1.7, 0, 0, 'x', 16);
  fan.position.set(x, y, z);
  group.add(fan);
  return fan;
}

// крыло-пилон от борта к каналу: профиль в плоскости (z, y), вытянут по x
function pylon(group, materials, side, x0, x1, y, z, chord) {
  const points = [[chord * 0.5, 0], [chord * 0.35, 0.12], [-chord * 0.2, 0.14], [-chord * 0.5, 0.03], [-chord * 0.5, -0.03], [-chord * 0.2, -0.12], [chord * 0.35, -0.1]]
    .map(([along, up]) => [z + along, y + up]);
  const width = x1 - x0;
  sideExtrude(group, points, width, materials.hull, side * (x0 + width / 2), 0.03);
}

export function buildTiltrotor({ cutaway = false, rampOpen = true } = {}) {
  const clip = cutaway ? [new THREE.Plane(new THREE.Vector3(0, -1, 0), 3.0)] : null;
  const materials = tiltrotorMaterials(clip);
  // Слои для карты из тайлов (модель на карте повёрнута на −90°: нос к меньшим col, правый борт к большим row):
  // floor — пол салона, рампа, сиденья, трап (рисуются до юнитов), back — левая обшивка салона и переборка кабины
  // (дальние от камеры стенки, тоже до юнитов), group — корпус, крыша и всё остальное (после юнитов).
  const floorGroup = new THREE.Group(), backGroup = new THREE.Group();
  floorGroup.name = 'floor'; backGroup.name = 'back';
  const group = new THREE.Group();
  group.name = 'shell';
  const halfWidth = 2.8, bottom = 0.25, top = 5.0, floorY = TILTROTOR.floor;
  const cabin = TILTROTOR.cabin;

  // днище с полом салона
  boxMesh(floorGroup, halfWidth * 2, floorY - bottom, cabin.front - cabin.rear, materials.belly, 0, (floorY + bottom) / 2, (cabin.front + cabin.rear) / 2, 0.12).userData.solid = true;
  boxMesh(floorGroup, cabin.right - cabin.left - 0.02, 0.03, cabin.front - cabin.rear, materials.floor, 0, floorY + 0.015, (cabin.front + cabin.rear) / 2);
  // борта до 4 м: левый целиком, правый с проёмом боковой двери
  const wallTop = 3.5, wallHeight = wallTop - bottom - 0.12;
  const wallY = bottom + 0.12 + wallHeight / 2;
  boxMesh(group, halfWidth - cabin.right, wallHeight, cabin.front - cabin.rear, materials.hull, -(halfWidth + cabin.right) / 2, wallY, (cabin.front + cabin.rear) / 2);
  const door = TILTROTOR.sideDoor;
  const rightX = (halfWidth + cabin.right) / 2;
  boxMesh(group, halfWidth - cabin.right, wallHeight, door.rear - cabin.rear, materials.hull, rightX, wallY, (door.rear + cabin.rear) / 2);
  boxMesh(group, halfWidth - cabin.right, wallHeight, cabin.front - door.front, materials.hull, rightX, wallY, (cabin.front + door.front) / 2);
  const lintelBottom = floorY + door.height;
  boxMesh(group, halfWidth - cabin.right, wallTop - lintelBottom, door.front - door.rear, materials.hull, rightX, (wallTop + lintelBottom) / 2, (door.rear + door.front) / 2);
  boxMesh(group, halfWidth - cabin.right, floorY - bottom - 0.12, door.front - door.rear, materials.hull, rightX, (floorY + bottom + 0.12) / 2, (door.rear + door.front) / 2);
  // рамка двери
  [[door.rear, 0], [door.front, 0]].forEach(([edgeZ]) => boxMesh(group, 0.36, door.height + 0.1, 0.08, materials.hullDark, rightX, floorY + door.height / 2, edgeZ));
  boxMesh(group, 0.36, 0.08, door.front - door.rear + 0.08, materials.hullDark, rightX, lintelBottom, (door.rear + door.front) / 2);
  // крыша: арка сечения выше 4 м
  const outer = fuselageOutline(halfWidth, bottom, top, 1.3, 0.3).filter(([, y]) => y >= wallTop - 0.001);
  const inner = fuselageOutline(cabin.right, floorY, cabin.ceiling, 0.9, 0.01).filter(([, y]) => y >= wallTop - 0.001).reverse();
  const roofShape = [[halfWidth, wallTop]].concat(outer, [[-halfWidth, wallTop], [cabin.left, wallTop]], inner, [[cabin.right, wallTop]]);
  const roofGeometry = new THREE.ExtrudeGeometry(new THREE.Shape(roofShape.map(([x, y]) => new THREE.Vector2(x, y))), { depth: cabin.front - cabin.rear, bevelEnabled: false, curveSegments: 4 });
  const roof = shadowed(new THREE.Mesh(roofGeometry, materials.hull));
  roof.position.z = cabin.rear; group.add(roof);
  // кормовой обвод проёма
  const rimOuter = fuselageOutline(halfWidth + 0.04, bottom + 0.1, top + 0.04, 1.32, 0.3);
  const rimInner = fuselageOutline(cabin.right - 0.03, floorY + 0.02, cabin.ceiling - 0.03, 0.87, 0.01);   // кант внутрь: грани не совпадают с бортами
  const rimShape = new THREE.Shape(rimOuter.map(([x, y]) => new THREE.Vector2(x, y)));
  rimShape.holes.push(new THREE.Path(rimInner.slice().reverse().map(([x, y]) => new THREE.Vector2(x, y))));
  const rim = shadowed(new THREE.Mesh(new THREE.ExtrudeGeometry(rimShape, { depth: 0.3, bevelEnabled: false, curveSegments: 4 }), materials.hullDark));
  rim.position.z = cabin.rear; rim.userData.hollow = true; group.add(rim);       // кольцо: рамка не препятствие
  rim.castShadow = rim.receiveShadow = false;      // тонкая рамка сама на себя даёт рябь теней

  // нос с кабиной пилотов: то же сечение; верх опускается скатом остекления, низ поднимается к подбородку,
  // сечение сужается к закруглённому носу
  const noseStart = cabin.front, noseEnd = TILTROTOR.length, noseLength = noseEnd - noseStart;
  const smooth = (edge0, edge1, value) => { const t = Math.min(1, Math.max(0, (value - edge0) / (edge1 - edge0))); return t * t * (3 - 2 * t); };
  const noseForm = (z) => {
    const t = (z - noseStart) / noseLength;
    return {
      scale: 1 - 0.1 * smooth(0.25, 0.65, t) - 0.55 * Math.pow(smooth(0.55, 1, t), 1.3),
      top: top - 2.0 * smooth(0.18, 0.66, t) - 1.45 * Math.pow(smooth(0.62, 1, t), 1.4),
      bottom: bottom + 0.85 * Math.pow(smooth(0.5, 1, t), 1.6),
    };
  };
  const hullOutline = fuselageOutline(halfWidth, bottom, top, 1.3, 0.3);
  loft(group, hullOutline, noseStart, noseEnd, materials.hull, noseForm, 40);
  // остекление кабины: полоса по верхней части сечения (выше 3,3 м), чуть снаружи обшивки, на скате
  const glassBand = (() => {
    const upper = hullOutline.filter(([, y]) => y >= 2.85);
    const center = [0, 2.6], offset = (point, distance) => {
      const length = Math.hypot(point[0] - center[0], point[1] - center[1]);
      return [point[0] + (point[0] - center[0]) / length * distance, point[1] + (point[1] - center[1]) / length * distance];
    };
    return upper.map((point) => offset(point, 0.035)).concat(upper.slice().reverse().map((point) => offset(point, -0.01)));
  })();
  const glassFront = noseStart + noseLength * 0.2, glassBack = noseStart + noseLength * 0.7;
  loft(group, glassBand, glassFront, glassBack, materials.glass, noseForm, 24, { bottom, top });
  // переплёт: поперечная дуга посередине остекления
  const archBand = glassBand.map(([x, y]) => [x * 1.004, y + 0.004]);
  loft(group, archBand, glassFront + (glassBack - glassFront) * 0.45, glassFront + (glassBack - glassFront) * 0.45 + 0.1, materials.hullDark, noseForm, 2, { bottom, top });
  // переборка с дверью в кабину (A1) — со стороны салона
  boxMesh(backGroup, cabin.right - cabin.left, cabin.ceiling - floorY, 0.08, materials.interior, 0, (cabin.ceiling + floorY) / 2, cabin.front - 0.04);
  const cockpit = TILTROTOR.cockpitDoor;
  boxMesh(backGroup, cockpit.right - cockpit.left - 0.2, cockpit.height, 0.06, materials.hullDark, (cockpit.left + cockpit.right) / 2, floorY + cockpit.height / 2, cabin.front - 0.09);
  boxMesh(backGroup, 0.25, 0.25, 0.05, materials.glass, (cockpit.left + cockpit.right) / 2, floorY + 1.6, cabin.front - 0.13);

  // отсеки шасси по бортам и колёса
  [-1, 1].forEach((side) => {
    boxMesh(group, 0.5, 1.0, 4.0, materials.hullDark, side * (halfWidth + 0.2), 0.85, 7.4, 0.2);
    [6.0, 8.8].forEach((wheelZ) => {
      cylinderMesh(group, 0.07, 0.5, materials.steel, side * (halfWidth + 0.2), 0.45, wheelZ, 'y', 10);
      cylinderMesh(group, 0.27, 0.22, materials.rubber, side * (halfWidth + 0.2), 0.27, wheelZ, 'x', 20);
    });
  });
  cylinderMesh(group, 0.07, 0.4, materials.steel, 0, 0.35, 13.6, 'y', 10);
  cylinderMesh(group, 0.22, 0.18, materials.rubber, 0, 0.22, 13.6, 'x', 18);

  // кормовая рампа: от пола салона до земли, рифление, бортики
  const rampGroup = new THREE.Group();
  const rampLength = Math.hypot(TILTROTOR.ramp.to - TILTROTOR.ramp.from, floorY);
  boxMesh(rampGroup, cabin.right - cabin.left, 0.12, rampLength, materials.hullDark, 0, -0.06, -rampLength / 2);
  for (let rib = 0; rib < 9; rib++) boxMesh(rampGroup, cabin.right - cabin.left - 0.3, 0.025, 0.05, materials.frame, 0, 0.012, -0.2 - rib * (rampLength - 0.4) / 8);
  [-1, 1].forEach((side) => boxMesh(rampGroup, 0.06, 0.18, rampLength, materials.yellow, side * (cabin.right - 0.03), 0.09, -rampLength / 2));
  rampGroup.position.set(0, floorY, cabin.rear);
  rampGroup.rotation.x = rampOpen ? -Math.atan2(floorY, TILTROTOR.ramp.to - TILTROTOR.ramp.from) : Math.PI / 2 - 0.15;
  floorGroup.add(rampGroup);

  // трап у боковой двери: три ступени от пола салона до земли
  const ladderX = halfWidth + 0.55, ladderWidth = door.front - door.rear - 0.15;
  for (let step = 0; step < 3; step++) {
    const stepY = floorY - (step + 1) * floorY / 3.2;
    boxMesh(floorGroup, 0.36, 0.05, ladderWidth, materials.steel, halfWidth + 0.15 + step * 0.32, stepY, (door.rear + door.front) / 2);
  }
  [door.rear + 0.1, door.front - 0.1].forEach((railZ) => tubeMesh(group, [[halfWidth + 0.05, floorY + 0.95, railZ], [halfWidth + 0.5, floorY + 0.7, railZ], [ladderX + 0.4, 0.75, railZ]], 0.025, materials.steel));

  // салон: панели бортов, сиденья, разметка места K7
  [-1, 1].forEach((side) => boxMesh(side < 0 ? backGroup : group, 0.03, 2.9, cabin.front - cabin.rear - 0.2, materials.interior, side * (cabin.right - 0.015), floorY + 1.6, (cabin.front + cabin.rear) / 2));
  const cell = TILTROTOR.cells.cell;
  const rowZ = (row) => cabin.front - (row - 0.5) * cell;
  TILTROTOR.seats.forEach(([column, row]) => {
    const side = column === 'A' ? -1 : 1;
    const seatX = side * (cabin.right - 0.35), seatZ = rowZ(row);
    boxMesh(floorGroup, 0.5, 0.1, 0.9, materials.seat, seatX, floorY + 0.48, seatZ, 0.03);
    boxMesh(floorGroup, 0.1, 0.75, 0.9, materials.seat, side * (cabin.right - 0.08), floorY + 0.95, seatZ, 0.03);
    boxMesh(floorGroup, 0.04, 0.45, 0.04, materials.frame, seatX - side * 0.2, floorY + 0.22, seatZ - 0.38);
    boxMesh(floorGroup, 0.04, 0.45, 0.04, materials.frame, seatX - side * 0.2, floorY + 0.22, seatZ + 0.38);
    boxMesh(floorGroup, 0.03, 0.6, 0.06, materials.yellow, side * (cabin.right - 0.05), floorY + 1.0, seatZ - 0.25);   // ремни
  });
  const bayLeft = -cell, bayRight = cell, bayRear = rowZ(2) - cell / 2, bayFront = cabin.front;
  [[bayLeft, bayRear, bayRight, bayRear], [bayLeft, bayRear, bayLeft, bayFront - 0.1], [bayRight, bayRear, bayRight, bayFront - 0.1]].forEach(([x0, z0, x1, z1]) => {
    boxMesh(floorGroup, Math.max(0.08, Math.abs(x1 - x0)), 0.012, Math.max(0.08, Math.abs(z1 - z0)), materials.yellow, (x0 + x1) / 2, floorY + 0.036, (z0 + z1) / 2);
  });
  [[-0.8, 9.4], [0.8, 9.4], [-0.8, 7.8], [0.8, 7.8]].forEach(([ringX, ringZ]) => cylinderMesh(floorGroup, 0.07, 0.03, materials.steel, ringX, floorY + 0.045, ringZ, 'y', 12));   // швартовочные кольца

  // хвостовые кили и обтекатель двигателей на крыше
  [-1, 1].forEach((side) => {
    const fin = sideExtrude(group, [[2.55, top - 0.25], [4.9, top - 0.25], [3.55, top + 1.35], [2.75, top + 1.4]], 0.16, materials.hull, 0, 0.04);
    fin.rotation.z = side * -0.18; fin.position.x += side * 1.55;
    boxMesh(group, 0.06, 0.06, 0.06, side < 0 ? materials.red : materials.green, side * 1.82, top + 1.38, 2.85);
  });
  boxMesh(group, 2.2, 0.5, 4.2, materials.hullDark, 0, top + 0.12, 7.3, 0.22);
  [-0.6, 0.6].forEach((ventX) => boxMesh(group, 0.6, 0.12, 0.8, materials.frame, ventX, top + 0.38, 6.0, 0.04));
  boxMesh(group, 0.08, 0.06, 0.08, materials.white, 0, top + 0.4, 9.2);

  // четыре винта в каналах: задние на пилонах у кормы, передние — у кабины
  const fanX = halfWidth + 0.35 + 1.5, fanY = 3.85;
  [[4.2, 1.7], [11.6, 1.5]].forEach(([fanZ, chord]) => {
    [-1, 1].forEach((side) => {
      pylon(group, materials, side, halfWidth - 0.1, fanX - 1.45, fanY, fanZ, chord);
      ductedFan(group, materials, side * fanX, fanY, fanZ);
    });
  });
  // надпись-номер на борту: светлые полосы вместо текста
  [-1, 1].forEach((side) => {
    boxMesh(group, 0.02, 0.08, 2.4, materials.yellow, side * (halfWidth + 0.01), 2.9, 7.4);
    boxMesh(group, 0.02, 0.4, 0.4, materials.white, side * (halfWidth + 0.01), 3.25, 9.2);
  });
  // препятствия для пуль: крупные части корпуса (тонкие детали, стёкла кабины и лопасти — нет)
  group.updateMatrixWorld(true);
  group.traverse((node) => {
    if (!node.isMesh) return;
    const size = new THREE.Box3().setFromObject(node).getSize(new THREE.Vector3());
    if (Math.min(size.x, size.y, size.z) >= 0.12 && !node.userData.hollow) node.userData.solid = true;
  });
  const root = new THREE.Group();
  root.add(floorGroup, backGroup, group);
  return root;
}

// ---------------- легковые машины для стоянки ----------------
// Обобщённые формы без марок: внедорожник и фургон. Вдоль z, перед в +z, x поперёк, y вверх.
export const CARS = {
  suv: { length: 4.7, width: 1.9, height: 1.8 },
  van: { length: 5.1, width: 2.0, height: 2.15 },
};
const CAR_COLORS = { police: 0xe4e6e2, white: 0xd6d8d4, graphite: 0x3a3e42, red: 0x7a2a22, olive: 0x4f5638, blue: 0x2f4a66, sand: 0xa8946a };

function carWheel(group, materials, x, y, z, radius, width, outward) {
  const tire = cylinderMesh(group, radius, width, materials.rubber, x, y, z, 'x', 28);
  void tire;
  cylinderMesh(group, radius * 0.62, width + 0.01, materials.rim, x + outward * 0.005, y, z, 'x', 20);
  cylinderMesh(group, radius * 0.2, width + 0.03, materials.frame, x + outward * 0.01, y, z, 'x', 12);
}

export function buildCar({ type = 'suv', color = 'white', seed = 1 } = {}) {
  const info = CARS[type];
  const standard = (value, roughness = 0.45, metalness = 0.35, extra = {}) => new THREE.MeshStandardMaterial({ color: value, roughness, metalness, ...extra });
  const materials = {
    body: standard(CAR_COLORS[color] || CAR_COLORS.white, 0.38, 0.45),
    trim: standard(0x1f2224, 0.7, 0.2),
    rubber: standard(0x18181a, 0.95, 0.0),
    rim: standard(0x9a9ea2, 0.35, 0.8),
    frame: standard(0x2a2c2e, 0.6, 0.5),
    glass: new THREE.MeshPhysicalMaterial({ color: 0x141c22, roughness: 0.05, metalness: 0.2, clearcoat: 1, envMapIntensity: 1.5 }),
    lamp: standard(0xe8e4d0, 0.2, 0.3, { emissive: 0x222018 }),
    tail: standard(0x8a1a14, 0.3, 0.2, { emissive: 0x2a0503 }),
    dust: standard(0x8a7a5e, 0.95, 0.0),
  };
  const group = new THREE.Group();
  const width = info.width, length = info.length;
  const wheelRadius = type === 'van' ? 0.36 : 0.4;
  const groundClear = type === 'van' ? 0.18 : 0.26;
  if (type === 'suv') {
    // нижняя часть кузова до линии окон: профиль сбоку
    sideExtrude(group, [[0.0, groundClear + 0.22], [0.0, 1.0], [0.12, 1.08], [3.75, 1.1], [4.55, 1.0], [4.7, 0.86], [4.7, groundClear + 0.22], [4.45, groundClear + 0.1], [0.25, groundClear + 0.1]], width, materials.body, 0, 0.09);
    // остекление и крыша: стёкла на всю «теплицу», стойки и крыша — цветом кузова
    sideExtrude(group, [[0.22, 1.06], [0.32, 1.66], [2.95, 1.7], [3.62, 1.08]], width - 0.18, materials.glass, 0, 0.06);
    sideExtrude(group, [[0.3, 1.66], [0.34, 1.78], [2.92, 1.8], [2.98, 1.68]], width - 0.12, materials.body, 0, 0.05);
    for (const pillar of [[0.26, 0.3], [1.6, 1.68], [3.2, 3.3]]) boxMesh(group, width - 0.16, 0.62, pillar[1] - pillar[0] + 0.05, materials.body, 0, 1.39, (pillar[0] + pillar[1]) / 2 + (pillar[0] > 3 ? 0.08 : 0));
    // багажник на крыше
    for (const rail of [-1, 1]) boxMesh(group, 0.05, 0.05, 2.2, materials.trim, rail * (width / 2 - 0.2), 1.83, 1.6);
  } else {
    // фургон: высокий короб, короткий капот, окна только в кабине
    sideExtrude(group, [[0.0, groundClear + 0.2], [0.0, 2.08], [0.1, 2.15], [4.05, 2.15], [4.25, 1.55], [4.95, 1.1], [5.1, 0.95], [5.1, groundClear + 0.2], [4.9, groundClear + 0.08], [0.2, groundClear + 0.08]], width, materials.body, 0, 0.08);
    sideExtrude(group, [[3.6, 1.15], [3.6, 1.95], [4.02, 1.95], [4.32, 1.18]], width + 0.01, materials.glass, 0, 0.02);
    boxMesh(group, width - 0.2, 0.7, 0.04, materials.glass, 0, 1.55, 4.27).rotation.x = -0.75;
    boxMesh(group, 0.02, 1.7, 0.02, materials.trim, width / 2 + 0.005, 1.15, 2.2);   // шов сдвижной двери
    boxMesh(group, 0.02, 1.7, 0.02, materials.trim, -width / 2 - 0.005, 1.15, 2.2);
  }
  // бамперы, фары, фонари, зеркала, решётка
  boxMesh(group, width + 0.04, 0.22, 0.18, materials.trim, 0, groundClear + 0.3, length - 0.04, 0.05);
  boxMesh(group, width + 0.04, 0.22, 0.16, materials.trim, 0, groundClear + 0.3, 0.05, 0.05);
  for (const side of [-1, 1]) {
    boxMesh(group, 0.32, 0.12, 0.05, materials.lamp, side * (width / 2 - 0.3), type === 'van' ? 0.9 : 0.9, length + 0.005, 0.02);
    boxMesh(group, 0.18, 0.26, 0.05, materials.tail, side * (width / 2 - 0.15), type === 'van' ? 1.2 : 0.95, -0.005, 0.02);
    boxMesh(group, 0.06, 0.12, 0.2, materials.trim, side * (width / 2 + 0.06), type === 'van' ? 1.75 : 1.2, length - (type === 'van' ? 1.35 : 1.15), 0.02);
  }
  boxMesh(group, width * 0.5, 0.18, 0.04, materials.frame, 0, type === 'van' ? 0.85 : 0.82, length + 0.01, 0.02);
  // колёса и пыль на нижней кромке
  const axles = type === 'van' ? [0.95, 4.15] : [0.9, 3.8];
  for (const axleZ of axles) for (const side of [-1, 1]) carWheel(group, materials, side * (width / 2 - 0.12), wheelRadius, axleZ, wheelRadius, 0.26, side);
  boxMesh(group, width + 0.02, 0.08, length - 0.3, materials.dust, 0, groundClear + 0.12, length / 2);
  if (color === 'police') {
    // полоса по борту и маячки на крыше
    const blue = standard(0x1f4a9a, 0.4, 0.3), red = standard(0xc02020, 0.3, 0.2, { emissive: 0x400000 }), lightBlue = standard(0x2050d0, 0.3, 0.2, { emissive: 0x001040 });
    for (const side of [-1, 1]) boxMesh(group, 0.02, 0.16, length - 0.8, blue, side * (width / 2 + 0.005), 0.78, length / 2);
    boxMesh(group, 1.1, 0.1, 0.3, materials.trim, 0, type === 'van' ? 2.2 : 1.85, length * 0.45);
    boxMesh(group, 0.45, 0.12, 0.26, red, -0.3, type === 'van' ? 2.3 : 1.95, length * 0.45);
    boxMesh(group, 0.45, 0.12, 0.26, lightBlue, 0.3, type === 'van' ? 2.3 : 1.95, length * 0.45);
  }
  void seed;
  return group;
}
