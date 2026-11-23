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
