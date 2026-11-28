// Оружие: карабин отряда КС-9 / КС-9М и плазменный пистолет пришельцев.
// Детали — по боковым профилям (вытяжка поперёк, скруглённые кромки), а не коробками.
// Система координат: z — вдоль ствола (дуло в +z), y — вверх, x — вбок. Точки userData (хват, цевьё, дуло)
// те же, что у прежних моделей: позы рук бойцов и пришельцев на них опираются.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);

let materials = null;
function getMaterials() {
  if (materials) return materials;
  const standard = (color, roughness, metalness, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness, metalness, ...extra });
  materials = {
    // карабин
    steel: standard(0x2b2e31, 0.38, 0.8),
    steelDark: standard(0x18191b, 0.45, 0.7),
    parkerized: standard(0x45494b, 0.5, 0.55),
    polymer: standard(0x1c1d1f, 0.62, 0.08),
    polymerTan: standard(0x9a8462, 0.7, 0.04),
    rubber: standard(0x121212, 0.9, 0.0),
    brass: standard(0xb88a3a, 0.35, 0.85),
    lens: new THREE.MeshPhysicalMaterial({ color: 0x2a5c6e, roughness: 0.05, metalness: 0.4, clearcoat: 1, transparent: true, opacity: 0.75 }),
    dot: standard(0xff3020, 0.3, 0, { emissive: 0xff2010, emissiveIntensity: 2.5 }),
    lightLens: standard(0xe8f0f0, 0.1, 0.3, { emissive: 0x404848 }),
    // пистолет пришельцев
    shell: standard(0x3c3346, 0.32, 0.55),
    shellLight: standard(0x6c6278, 0.28, 0.6),
    core: standard(0x15121a, 0.5, 0.4),
    glow: standard(0x30b8e8, 0.25, 0, { emissive: 0x22c4ff, emissiveIntensity: 1.6 }),
    glowSoft: new THREE.MeshStandardMaterial({ color: 0x7ee8ff, roughness: 0.1, metalness: 0, emissive: 0x3ad0ff, emissiveIntensity: 1.1, transparent: true, opacity: 0.8 }),
    bone: standard(0xb8ae92, 0.6, 0.05),
  };
  return materials;
}

function shadowed(mesh) { mesh.castShadow = mesh.receiveShadow = true; return mesh; }
// деталь по боковому профилю (z, y), толщина по x, кромки скруглены
function side(group, points, thickness, material, x = 0, bevel = 0.004) {
  const shape = new THREE.Shape();
  points.forEach(([z, y], index) => { if (index === 0) shape.moveTo(-z, y); else shape.lineTo(-z, y); });
  const geometry = new THREE.ExtrudeGeometry(shape, { depth: Math.max(0.001, thickness - bevel * 2), bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 2, curveSegments: 6 });
  geometry.rotateY(Math.PI / 2);
  const mesh = shadowed(new THREE.Mesh(geometry, material));
  mesh.position.x = x - thickness / 2 + bevel;
  group.add(mesh);
  return mesh;
}
function rounded(group, width, height, depth, material, x, y, z, radius = 0.004) {
  const mesh = shadowed(new THREE.Mesh(new RoundedBoxGeometry(width, height, depth, 2, Math.min(radius, width / 2.2, height / 2.2, depth / 2.2)), material));
  mesh.position.set(x, y, z);
  group.add(mesh);
  return mesh;
}
function tube(group, radius, length, material, x, y, z, segments = 16, radiusEnd = radius) {
  const mesh = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(radiusEnd, radius, length, segments).rotateX(Math.PI / 2), material));
  mesh.position.set(x, y, z);
  group.add(mesh);
  return mesh;
}
function arc(cz, cy, radius, from, to, count = 6) {
  const points = [];
  for (let step = 0; step <= count; step++) { const angle = from + (to - from) * step / count; points.push([cz + Math.cos(angle) * radius, cy + Math.sin(angle) * radius]); }
  return points;
}

// ---------------- карабин ----------------
// Современный карабин: телескопический приклад, ствольная коробка с планкой, изогнутый магазин, длинное цевьё
// с прорезями, дульный тормоз или глушитель (ПБС), коллиматор; у КС-9М — тактический фонарь.
export function buildRifle({ tanFurniture = false, suppressor = false } = {}) {
  const material = getMaterials();
  const rifle = new THREE.Group();
  const furniture = tanFurniture ? material.polymerTan : material.polymer;

  // приклад: профиль с подщёчником и затыльником, буферная трубка
  side(rifle, [[0.0, -0.055], [0.0, 0.035], [0.02, 0.048], [0.11, 0.05], [0.13, 0.03], [0.2, 0.026], [0.21, 0.0], [0.17, -0.02], [0.06, -0.058]], 0.044, furniture, 0, 0.006);
  rounded(rifle, 0.048, 0.1, 0.016, material.rubber, 0, -0.01, 0.004, 0.006);                    // затыльник
  for (const z of [0.08, 0.12]) rounded(rifle, 0.046, 0.008, 0.014, material.steelDark, 0, -0.04, z, 0.002);
  tube(rifle, 0.016, 0.12, material.parkerized, 0, 0.022, 0.24, 14);                             // буферная трубка
  rounded(rifle, 0.03, 0.012, 0.03, material.steelDark, 0, -0.0, 0.22, 0.003);                   // фиксатор приклада

  // нижняя ствольная коробка с горловиной магазина и спусковой скобой
  side(rifle, [[0.29, 0.03], [0.5, 0.03], [0.5, -0.005], [0.47, -0.035], [0.47, -0.06], [0.4, -0.06], [0.4, -0.035], [0.3, -0.03]], 0.04, material.parkerized, 0, 0.003);
  side(rifle, [[0.33, -0.03], [0.4, -0.03], [0.4, -0.05], [0.37, -0.065], [0.33, -0.05]], 0.012, material.steelDark, 0, 0.002);   // скоба
  rounded(rifle, 0.006, 0.022, 0.006, material.steel, 0, -0.04, 0.37, 0.002);                   // спуск
  rounded(rifle, 0.044, 0.01, 0.012, material.steel, 0.0, 0.012, 0.335, 0.003);                  // флажок предохранителя
  // верхняя коробка с окном экстракции и планкой Пикатинни
  side(rifle, [[0.28, 0.03], [0.52, 0.03], [0.52, 0.074], [0.29, 0.074], [0.28, 0.06]], 0.046, material.parkerized, 0, 0.004);
  rounded(rifle, 0.004, 0.022, 0.07, material.steelDark, 0.024, 0.05, 0.42, 0.001);              // окно экстракции
  rounded(rifle, 0.01, 0.014, 0.014, material.steel, 0.026, 0.05, 0.385, 0.003);                 // досылатель
  rounded(rifle, 0.05, 0.012, 0.028, material.steel, 0, 0.068, 0.3, 0.004);                      // рукоять затвора
  for (let slot = 0; slot < 8; slot++) rounded(rifle, 0.03, 0.009, 0.016, material.steelDark, 0, 0.08, 0.3 + slot * 0.028, 0.002);

  // пистолетная рукоять с выемками под пальцы
  side(rifle, [[0.285, -0.03], [0.33, -0.03], [0.32, -0.06], [0.33, -0.08], [0.32, -0.1], [0.305, -0.13], [0.28, -0.135], [0.27, -0.12], [0.272, -0.07]], 0.032, furniture, 0, 0.006);

  // изогнутый магазин с рёбрами
  const magazine = [];
  for (let step = 0; step <= 8; step++) {
    const t = step / 8, bend = t * t * 0.07;
    magazine.push([0.41 + bend + t * 0.012, -0.06 - t * 0.16]);
  }
  const magazineBack = magazine.map(([z, y]) => [z + 0.066 - 0.004 * (y + 0.06) / -0.16, y]).reverse();
  side(rifle, magazine.concat(magazineBack), 0.03, furniture, 0, 0.004);
  for (let rib = 1; rib < 4; rib++) {
    const t = rib / 4, bend = t * t * 0.07;
    rounded(rifle, 0.032, 0.006, 0.05, material.steelDark, 0, -0.06 - t * 0.16, 0.445 + bend + t * 0.012, 0.002);
  }
  rounded(rifle, 0.034, 0.012, 0.074, material.steelDark, 0, -0.226, 0.515, 0.004);               // пятка магазина

  // цевьё: восьмигранная труба с прорезями, сверху продолжение планки
  const handguard = tube(rifle, 0.032, 0.36, material.parkerized, 0, 0.044, 0.7, 8);
  handguard.rotation.z = Math.PI / 8;
  for (let slot = 0; slot < 5; slot++) for (const sideX of [-1, 1]) rounded(rifle, 0.004, 0.012, 0.04, material.steelDark, sideX * 0.03, 0.044, 0.58 + slot * 0.055, 0.002);
  for (let slot = 0; slot < 11; slot++) rounded(rifle, 0.026, 0.008, 0.016, material.steelDark, 0, 0.08, 0.54 + slot * 0.03, 0.002);
  // передняя рукоять (наклонная) и антабка
  side(rifle, [[0.59, 0.012], [0.65, 0.012], [0.635, -0.03], [0.6, -0.035]], 0.026, furniture, 0, 0.005);
  rounded(rifle, 0.008, 0.016, 0.03, material.steel, -0.032, 0.03, 0.8, 0.003);

  // ствол, газовый блок, дульное устройство или глушитель
  tube(rifle, 0.011, 0.14, material.steelDark, 0, 0.044, 0.94, 12);
  rounded(rifle, 0.024, 0.03, 0.03, material.steel, 0, 0.05, 0.88, 0.005);
  if (suppressor) {
    tube(rifle, 0.021, 0.19, material.parkerized, 0, 0.044, 1.04, 18);
    for (const z of [0.955, 1.125]) tube(rifle, 0.0225, 0.016, material.steelDark, 0, 0.044, z, 18);
    tube(rifle, 0.012, 0.006, material.steelDark, 0, 0.044, 1.137, 12);
  } else {
    tube(rifle, 0.016, 0.06, material.steel, 0, 0.044, 0.99, 10);
    for (const z of [0.98, 1.0]) for (const sideX of [-1, 1]) rounded(rifle, 0.004, 0.008, 0.008, material.steelDark, sideX * 0.016, 0.044, z, 0.001);
  }

  // коллиматорный прицел: корпус-рамка, стекло, точка
  rounded(rifle, 0.03, 0.012, 0.05, material.steelDark, 0, 0.09, 0.4, 0.003);
  side(rifle, [[0.37, 0.096], [0.44, 0.096], [0.44, 0.115], [0.43, 0.15], [0.385, 0.15], [0.37, 0.12]], 0.008, material.steel, -0.019, 0.002);
  side(rifle, [[0.37, 0.096], [0.44, 0.096], [0.44, 0.115], [0.43, 0.15], [0.385, 0.15], [0.37, 0.12]], 0.008, material.steel, 0.019, 0.002);
  rounded(rifle, 0.046, 0.008, 0.068, material.steel, 0, 0.152, 0.407, 0.003);                   // козырёк
  const glass = shadowed(new THREE.Mesh(new THREE.PlaneGeometry(0.03, 0.04), material.lens));
  glass.position.set(0, 0.125, 0.43); rifle.add(glass);
  const reticle = new THREE.Mesh(new THREE.SphereGeometry(0.0035, 8, 6), material.dot);
  reticle.position.set(0, 0.125, 0.428); rifle.add(reticle);
  rounded(rifle, 0.012, 0.012, 0.02, material.steelDark, 0.026, 0.12, 0.41, 0.003);             // регулятор яркости

  // КС-9М: тактический фонарь на правой стороне цевья
  if (tanFurniture) {
    tube(rifle, 0.013, 0.07, material.steelDark, 0.045, 0.03, 0.78, 14);
    tube(rifle, 0.016, 0.018, material.steelDark, 0.045, 0.03, 0.82, 14);
    const lamp = new THREE.Mesh(new THREE.CircleGeometry(0.013, 14), material.lightLens);
    lamp.position.set(0.045, 0.03, 0.83); rifle.add(lamp);
    rounded(rifle, 0.014, 0.02, 0.03, material.steelDark, 0.034, 0.03, 0.78, 0.003);
  }
  rifle.userData = { grip: V(0, -0.075, 0.305), support: V(-0.01, -0.03, 0.6), muzzle: V(0, 0.044, suppressor ? 1.14 : 1.02) };
  return rifle;
}

// ---------------- плазменный пистолет ----------------
// Футуристический: обтекаемый корпус, изогнутая рукоять из костяной пластины, светящиеся кольца ускорителя,
// излучатель с тремя «лепестками», прозрачная энергоячейка вдоль корпуса, рёбра охлаждения.
// Начало координат — хват (кисть), дуло — вперёд по +z.
// Плазменная винтовка золотистого пришельца: тот же стиль, что у пистолета, но длиннее — рукоять у начала координат,
// длинный корпус-веретено с гребнем, две энергоячейки, длинный ускоритель с кольцами, костяной приклад назад.
export function buildPlasmaRifle() {
  const material = getMaterials();
  const rifle = new THREE.Group();
  // рукоять — как у пистолета
  const grip = [];
  for (let step = 0; step <= 10; step++) {
    const t = step / 10;
    grip.push([0.016 - t * 0.022 - t * t * 0.012, 0.05 - t * 0.12]);
  }
  const gripBack = grip.map(([z, y], index) => [z - 0.034 + (index / 10) * 0.008, y]).reverse();
  side(rifle, grip.concat(gripBack), 0.028, material.shell, 0, 0.007);
  const guard = shadowed(new THREE.Mesh(new THREE.TorusGeometry(0.024, 0.0045, 6, 16, Math.PI * 1.1), material.shellLight));
  guard.rotation.set(0, Math.PI / 2, -0.3); guard.position.set(0, 0.022, 0.048); rifle.add(guard);
  rounded(rifle, 0.006, 0.02, 0.006, material.glow, 0, 0.025, 0.042, 0.002);
  // корпус: длинное веретено и гребень по верху
  const body = shadowed(new THREE.Mesh(new THREE.SphereGeometry(1, 32, 16), material.shell));
  body.scale.set(0.036, 0.04, 0.26); body.position.set(0, 0.072, 0.1); rifle.add(body);
  side(rifle, [[-0.12, 0.095], [0.22, 0.1], [0.28, 0.115], [0.12, 0.13], [-0.1, 0.118]], 0.014, material.shellLight, 0, 0.003);
  // рёбра охлаждения
  for (let fin = 0; fin < 7; fin++) for (const sideX of [-1, 1]) {
    const plate = rounded(rifle, 0.006, 0.03, 0.014, material.core, sideX * 0.038, 0.072, -0.02 + fin * 0.03, 0.002);
    plate.rotation.y = sideX * 0.25;
  }
  // две энергоячейки по бокам
  for (const sideX of [-1, 1]) {
    tube(rifle, 0.012, 0.13, material.glowSoft, sideX * 0.041, 0.06, 0.1, 14);
    for (const z of [0.035, 0.165]) tube(rifle, 0.014, 0.009, material.core, sideX * 0.041, 0.06, z, 14);
  }
  // приклад: костяная дуга назад
  side(rifle, [[-0.1, 0.09], [-0.3, 0.075], [-0.36, 0.03], [-0.34, -0.03], [-0.3, -0.035], [-0.24, 0.035], [-0.12, 0.055]], 0.022, material.bone, 0, 0.004);
  // ускоритель: длинный ствол с кольцами
  tube(rifle, 0.018, 0.26, material.core, 0, 0.072, 0.43, 18, 0.014);
  for (let ring = 0; ring < 5; ring++) {
    const coil = new THREE.Mesh(new THREE.TorusGeometry(0.023 - ring * 0.0012, 0.005, 8, 20), material.glow);
    coil.position.set(0, 0.072, 0.35 + ring * 0.036); rifle.add(coil);
  }
  // излучатель: три лепестка и ядро
  for (let petal = 0; petal < 3; petal++) {
    const angle = petal / 3 * Math.PI * 2 + Math.PI / 2;
    const prong = rounded(rifle, 0.009, 0.009, 0.06, material.shellLight, Math.cos(angle) * 0.025, 0.072 + Math.sin(angle) * 0.025, 0.58, 0.003);
    prong.rotation.set(-Math.sin(angle) * 0.25, Math.cos(angle) * 0.25, 0);
  }
  const emitter = new THREE.Mesh(new THREE.SphereGeometry(0.011, 12, 8), material.glow);
  emitter.position.set(0, 0.072, 0.58); rifle.add(emitter);
  // прицел сверху
  tube(rifle, 0.01, 0.07, material.core, 0, 0.128, 0.12, 12);
  const sight = new THREE.Mesh(new THREE.SphereGeometry(0.008, 10, 8), material.glow);
  sight.position.set(0, 0.128, 0.16); rifle.add(sight);
  rifle.userData.muzzle = V(0, 0.072, 0.6);
  rifle.scale.setScalar(1.2);
  return rifle;
}

// ---------------- служебный пистолет (полиция) ----------------
// Затвор-кожух, полимерная рамка, рукоять с наклоном назад, спусковая скоба. Ствол вдоль +z,
// userData.grip — середина рукояти (кисть), userData.muzzle — дульный срез.
export function buildPistol() {
  const material = getMaterials();
  const pistol = new THREE.Group();
  rounded(pistol, 0.03, 0.034, 0.2, material.steel, 0, 0.074, 0.07, 0.005);              // затвор
  for (let notch = 0; notch < 6; notch++) rounded(pistol, 0.031, 0.026, 0.003, material.steelDark, 0, 0.074, -0.022 + notch * 0.006, 0.001);
  rounded(pistol, 0.027, 0.022, 0.16, material.polymer, 0, 0.049, 0.06, 0.004);           // рамка
  side(pistol, [[0.012, 0.046], [-0.036, 0.046], [-0.058, -0.072], [-0.016, -0.078], [0.006, 0.0]], 0.03, material.polymer, 0, 0.005);
  const guard = shadowed(new THREE.Mesh(new THREE.TorusGeometry(0.02, 0.0035, 6, 16, Math.PI), material.polymer));
  guard.rotation.set(0, Math.PI / 2, Math.PI); guard.position.set(0, 0.04, 0.03); pistol.add(guard);
  rounded(pistol, 0.006, 0.018, 0.006, material.steelDark, 0, 0.03, 0.026, 0.002);       // спуск
  rounded(pistol, 0.006, 0.008, 0.01, material.steelDark, 0, 0.094, 0.16, 0.002);        // мушка
  pistol.userData.grip = V(0, -0.012, -0.022);
  pistol.userData.muzzle = V(0, 0.078, 0.172);
  return pistol;
}

export function buildPlasmaPistol() {
  const material = getMaterials();
  const pistol = new THREE.Group();
  // рукоять: тонкая, изогнутая назад, по спинке — костяная накладка с насечкой
  const grip = [];
  for (let step = 0; step <= 10; step++) {
    const t = step / 10;
    grip.push([0.016 - t * 0.022 - t * t * 0.012, 0.05 - t * 0.12]);
  }
  const gripBack = grip.map(([z, y], index) => [z - 0.034 + (index / 10) * 0.008, y]).reverse();
  side(pistol, grip.concat(gripBack), 0.026, material.shell, 0, 0.007);
  for (let notch = 0; notch < 5; notch++) {
    const t = 0.25 + notch * 0.13;
    rounded(pistol, 0.028, 0.006, 0.01, material.bone, 0, 0.05 - t * 0.12, 0.016 - t * 0.022 - t * t * 0.012 - 0.036, 0.002);
  }
  // спусковая скоба-дуга и спуск
  const guard = shadowed(new THREE.Mesh(new THREE.TorusGeometry(0.022, 0.004, 6, 16, Math.PI * 1.1), material.shellLight));
  guard.rotation.set(0, Math.PI / 2, -0.3); guard.position.set(0, 0.022, 0.045); pistol.add(guard);
  rounded(pistol, 0.006, 0.02, 0.006, material.glow, 0, 0.025, 0.04, 0.002);
  // корпус: вытянутое веретено, сверху гребень
  const body = shadowed(new THREE.Mesh(new THREE.SphereGeometry(1, 28, 16), material.shell));
  body.scale.set(0.028, 0.03, 0.135); body.position.set(0, 0.068, 0.075); pistol.add(body);
  side(pistol, [[-0.03, 0.085], [0.12, 0.09], [0.15, 0.1], [0.05, 0.112], [-0.02, 0.102]], 0.012, material.shellLight, 0, 0.003);
  // рёбра охлаждения по бокам
  for (let fin = 0; fin < 4; fin++) for (const sideX of [-1, 1]) {
    const plate = rounded(pistol, 0.006, 0.026, 0.012, material.core, sideX * 0.03, 0.068, 0.0 + fin * 0.022, 0.002);
    plate.rotation.y = sideX * 0.25;
  }
  // энергоячейка: прозрачная колба со свечением на левой стороне
  tube(pistol, 0.011, 0.085, material.glowSoft, -0.032, 0.058, 0.07, 14);
  for (const z of [0.025, 0.115]) tube(pistol, 0.013, 0.008, material.core, -0.032, 0.058, z, 14);
  // ускоритель: ствол с кольцами
  tube(pistol, 0.016, 0.1, material.core, 0, 0.068, 0.2, 18, 0.012);
  for (let ring = 0; ring < 3; ring++) {
    const coil = new THREE.Mesh(new THREE.TorusGeometry(0.02 - ring * 0.0015, 0.0045, 8, 20), material.glow);
    coil.position.set(0, 0.068, 0.165 + ring * 0.026); pistol.add(coil);
  }
  // излучатель: три лепестка вокруг дула и светящееся ядро
  for (let petal = 0; petal < 3; petal++) {
    const angle = petal / 3 * Math.PI * 2 + Math.PI / 2;
    const prong = rounded(pistol, 0.008, 0.008, 0.05, material.shellLight, Math.cos(angle) * 0.022, 0.068 + Math.sin(angle) * 0.022, 0.255, 0.003);
    prong.rotation.set(-Math.sin(angle) * 0.25, Math.cos(angle) * 0.25, 0);
  }
  const emitter = new THREE.Mesh(new THREE.SphereGeometry(0.009, 12, 8), material.glow);
  emitter.position.set(0, 0.068, 0.255); pistol.add(emitter);
  // прицельная линза сверху
  const sight = new THREE.Mesh(new THREE.SphereGeometry(0.006, 10, 8), material.glow);
  sight.position.set(0, 0.104, 0.09); pistol.add(sight);
  pistol.userData.muzzle = V(0, 0.068, 0.27);
  pistol.scale.setScalar(1.2);            // крупнее на 20 %: на спрайте иначе теряется
  return pistol;
}
