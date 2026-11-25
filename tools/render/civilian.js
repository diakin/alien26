// Гражданские: мужчина, женщина, учёный, инженер, рабочий; персонал базы «Ямантау» (командир, офицер, врач, хирург,
// медсестра, учёная, учёный в костюме биозащиты, инженер-женщина, электрик, сантехник, повара, уборка). Тот же скелет и пропорции, что у бойца
// (soldier2.js), но без брони и оружия, телосложение обычное и ноги почти прямые: бедро и голень по 0,42 м,
// плечо и предплечье 0,28 и 0,27 м, рост около 1,78 м. Позы: idle — стоит, руки опущены; walk (walkCycle) — с отмашкой рук; cower — присел,
// руки на голове (испуган, ждёт эвакуации); dead / fall — лежит на спине, падение (civilianFall).
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { segment, ball, solveTwoBone, fabricNormalTexture, setShadows } from './lib.js';
import { clothLimb, FOLDS, buildBoot } from './cloth.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);

function box(width, height, depth, material, radius = 0.01) {
  const mesh = new THREE.Mesh(new RoundedBoxGeometry(width, height, depth, 3, Math.min(radius, width / 2.2, height / 2.2, depth / 2.2)), material);
  mesh.castShadow = mesh.receiveShadow = true;
  return mesh;
}

// ---------- виды ----------
// top — верх (куртка, блузка, халат, комбинезон), legs — брюки, shoes — обувь, hair — волосы,
// build — ширина плеч и таза (женщина уже в плечах), coat — длинный халат до колен, vest — сигнальный жилет,
// helmet — каска, glasses — очки, boots — рабочие ботинки вместо туфель, gloves — перчатки, belt — пояс с инструментом
export const CIVILIANS = {
  man: { top: 0x55606c, legs: 0x2f4664, shoes: 0x3a2a1e, hair: 0x2a2018, skin: 0xc89a7c, build: 1, hairStyle: 'short' },
  woman: { top: 0x9c3e3a, legs: 0x2a2a30, shoes: 0x1e1a18, hair: 0x6a3a22, skin: 0xd8ac90, build: 0.86, hairStyle: 'long' },
  scientist: { top: 0x3c5a84, legs: 0x3a3a3e, shoes: 0x26221e, hair: 0x9a9690, skin: 0xcca088, build: 0.97, hairStyle: 'short', coat: 0xe2e2dc, glasses: true },
  engineer: { top: 0x2c4a74, legs: 0x2c4a74, shoes: 0x2a2620, hair: 0x3a2c20, skin: 0xbe9070, build: 1, hairStyle: 'short', vest: 0xc4d02a, helmet: 0xe8e8e2, boots: true, tablet: true },
  worker: { top: 0xb8581c, legs: 0xb8581c, shoes: 0x2a2620, hair: 0x2a2018, skin: 0xb88a6a, build: 1.04, hairStyle: 'short', helmet: 0xe0b020, boots: true, gloves: 0x3a3a34, belt: true },
  // ---- персонал базы ----
  // cap — фуражка (crown, band), epaulets — погоны, tie — галстук, armband — повязка на левом плече (дежурный)
  commander: { top: 0x3e4a30, legs: 0x3e4a30, shoes: 0x121212, hair: 0x6a6a66, skin: 0xc8987a, build: 1.04, hairStyle: 'short', cap: { crown: 0x3e4a30, band: 0x9a1c1c }, epaulets: 0xc8a040, tie: 0x2a2c20 },
  officer: { top: 0x46523a, legs: 0x46523a, shoes: 0x121212, hair: 0x2a2018, skin: 0xc4967a, build: 1.02, hairStyle: 'short', epaulets: 0xc8a040, tie: 0x2a2c20, armband: 0xb01e1e },
  // врач: голубой хирургический костюм, белый халат, фонендоскоп
  doctor: { top: 0x84b4cc, legs: 0x84b4cc, shoes: 0xdcdcd8, hair: 0x3a2c20, skin: 0xc89c80, build: 1, hairStyle: 'short', coat: 0xeeeeea, stethoscope: true, glasses: true },
  // хирург: зелёный костюм, шапочка, маска, перчатки
  surgeon: { top: 0x3a8476, legs: 0x3a8476, shoes: 0xdcdcd8, hair: 0x2a2018, skin: 0xc49a7e, build: 1, hairStyle: 'short', scrubCap: 0x3a8476, mask: 0x9ccde0, gloves: 0xa8cce4 },
  nurse: { top: 0xf2f2f0, legs: 0xf2f2f0, shoes: 0xe8e8e4, hair: 0x7a4a2a, skin: 0xdcb094, build: 0.86, hairStyle: 'long', female: true, nurseCap: 0xf8f8f8, stethoscope: true },
  labwoman: { top: 0x6a4a6a, legs: 0x2a2a32, shoes: 0x26221e, hair: 0x4a2c1c, skin: 0xd8ae92, build: 0.87, hairStyle: 'long', female: true, coat: 0xe6e6e0 },
  // костюм биозащиты: комбинезон с капюшоном, панорамное стекло, фильтр, перчатки и сапоги
  hazmat: { top: 0xe0c030, legs: 0xe0c030, shoes: 0x1e1e1e, hair: 0x2a2018, skin: 0xc89a7c, build: 1.06, hairStyle: 'short', hazmat: true, gloves: 0x262626, boots: true, coverall: true },
  engineerw: { top: 0x2c4a74, legs: 0x2c4a74, shoes: 0x2a2620, hair: 0x5a3a22, skin: 0xd6aa8e, build: 0.88, hairStyle: 'long', female: true, vest: 0xc4d02a, helmet: 0xe8e8e2, boots: true, tablet: true, coverall: true },
  electrician: { top: 0x2c3c66, legs: 0x2c3c66, shoes: 0x2a2620, hair: 0x3a2c20, skin: 0xc0926e, build: 1.02, hairStyle: 'short', coverall: true, belt: true, gloves: 0xd8b020, boots: true },
  plumber: { top: 0x4a5a48, legs: 0x4a5a48, shoes: 0x2a2620, hair: 0x2a2018, skin: 0xbc8e6c, build: 1.05, hairStyle: 'short', coverall: true, belt: true, gloves: 0x3a3a34, boots: true, baseballCap: 0x2a4a8a },
  // повара: белая куртка, колпак, фартук
  cook: { top: 0xeeeeea, legs: 0x3a3a3c, shoes: 0x161616, hair: 0x2a2018, skin: 0xc49a7e, build: 1.06, hairStyle: 'short', chefHat: 0xf6f6f4, apron: 0xf0f0ec },
  cookw: { top: 0xeeeeea, legs: 0x3a3a3c, shoes: 0x161616, hair: 0x6a3a22, skin: 0xd8ac90, build: 0.88, hairStyle: 'long', female: true, chefHat: 0xf6f6f4, apron: 0xf0f0ec },
  // уборка помещений: синий рабочий халат, резиновые перчатки
  cleaner: { top: 0x3a68a0, legs: 0x3a3a48, shoes: 0x26221e, hair: 0x8a5a3a, skin: 0xd8ac90, build: 0.88, hairStyle: 'long', female: true, coat: 0x3a68a0, gloves: 0xc84a3a },
  cleanerm: { top: 0x3a68a0, legs: 0x3a3a48, shoes: 0x26221e, hair: 0x4a4a46, skin: 0xc0926e, build: 1, hairStyle: 'short', coat: 0x3a68a0, gloves: 0xc84a3a },
  // дети (около 8–10 лет): та же модель, уменьшенная в child раз, голова крупнее (×headScale)
  boy: { top: 0x3c7a44, legs: 0x34507a, shoes: 0x8a2a22, hair: 0x6a4424, skin: 0xd8ae92, build: 0.94, hairStyle: 'short', child: 0.66, headScale: 1.28 },
  girl: { top: 0xd0708e, legs: 0x5a4a8a, shoes: 0xe0dcd4, hair: 0x9a6a3a, skin: 0xe0b89c, build: 0.9, hairStyle: 'long', female: true, child: 0.64, headScale: 1.28 },
};

let fabricNormal = null;
const prepared = {};
function materialsFor(kind) {
  if (prepared[kind]) return prepared[kind];
  const look = CIVILIANS[kind];
  if (!fabricNormal) { fabricNormal = fabricNormalTexture(33); fabricNormal.repeat.set(3, 3); }
  const cloth = (color, roughness = 0.95) => new THREE.MeshStandardMaterial({ color, roughness, normalMap: fabricNormal, normalScale: new THREE.Vector2(0.8, 0.8) });
  const materials = {
    top: cloth(look.top), legs: cloth(look.legs),
    skin: new THREE.MeshStandardMaterial({ color: look.skin, roughness: 0.7 }),
    hair: new THREE.MeshStandardMaterial({ color: look.hair, roughness: 0.85 }),
    shoe: new THREE.MeshStandardMaterial({ color: look.shoes, roughness: 0.55 }),
    sole: new THREE.MeshStandardMaterial({ color: 0x141414, roughness: 0.9 }),
    dark: new THREE.MeshStandardMaterial({ color: 0x1c1c1e, roughness: 0.6 }),
    // для buildBoot (рабочие ботинки)
    boot: new THREE.MeshStandardMaterial({ color: 0x3a3026, roughness: 0.85 }),
    lace: new THREE.MeshStandardMaterial({ color: 0x2a2620, roughness: 0.9 }),
  };
  if (look.coat) materials.coat = cloth(look.coat, 0.9);
  if (look.vest) {
    materials.vest = new THREE.MeshStandardMaterial({ color: look.vest, roughness: 0.6, emissive: look.vest, emissiveIntensity: 0.08 });
    materials.stripe = new THREE.MeshStandardMaterial({ color: 0xd8d8d8, roughness: 0.25, metalness: 0.4 });
  }
  if (look.helmet) materials.helmet = new THREE.MeshStandardMaterial({ color: look.helmet, roughness: 0.4, metalness: 0.05 });
  if (look.gloves) materials.glove = new THREE.MeshStandardMaterial({ color: look.gloves, roughness: 0.85 });
  if (look.glasses) materials.lens = new THREE.MeshPhysicalMaterial({ color: 0x1a2428, roughness: 0.05, metalness: 0.5, clearcoat: 1 });
  const plain = (color, roughness = 0.6, metalness = 0) => new THREE.MeshStandardMaterial({ color, roughness, metalness });
  if (look.cap) { materials.capCrown = cloth(look.cap.crown, 0.8); materials.capBand = plain(look.cap.band, 0.7); materials.visor = plain(0x101010, 0.3, 0.2); }
  if (look.epaulets) materials.gold = plain(look.epaulets, 0.35, 0.7);
  if (look.tie) materials.tie = plain(look.tie, 0.7);
  if (look.armband) materials.armband = plain(look.armband, 0.8);
  if (look.stethoscope) { materials.steth = plain(0x1c1c1e, 0.4); materials.chrome = plain(0xd0d4d8, 0.2, 0.9); }
  if (look.scrubCap) materials.scrubCap = cloth(look.scrubCap, 0.9);
  if (look.mask) materials.mask = cloth(look.mask, 0.9);
  if (look.nurseCap) materials.nurseCap = cloth(look.nurseCap, 0.8);
  if (look.chefHat) materials.chefHat = cloth(look.chefHat, 0.9);
  if (look.apron) materials.apron = cloth(look.apron, 0.9);
  if (look.baseballCap) materials.baseballCap = cloth(look.baseballCap, 0.85);
  if (look.hazmat) {
    materials.hood = new THREE.MeshStandardMaterial({ color: look.top, roughness: 0.55, normalMap: fabricNormal, normalScale: new THREE.Vector2(0.4, 0.4) });
    materials.visorGlass = new THREE.MeshPhysicalMaterial({ color: 0x23343a, roughness: 0.05, metalness: 0.3, clearcoat: 1 });
    materials.filter = plain(0x2a2a2a, 0.5);
    materials.tape = plain(0x1e1e1e, 0.6);
  }
  prepared[kind] = materials;
  return materials;
}

// ---------- позы ----------
// hands — кисти в координатах модели; handsOnHead — кисти на затылке (считаются от головы)
export const CIVILIAN_POSES = {
  idle: {
    pelvis: V(0, 0.985, 0), lean: 0.03, twist: 0.06, feet: [V(-0.12, 0.08, 0.04), V(0.13, 0.08, -0.02)], footPitch: [0, 0], footYaw: [-0.1, 0.12],
    kneePole: [V(-0.1, 0, 1), V(0.1, 0, 1)], hands: [V(-0.26, 0.95, 0.05), V(0.27, 0.96, 0.02)], elbowPoles: [V(-0.4, 0, -1), V(0.4, 0, -1)], head: [0.04, 0.05, 0],
  },
  // присел, корпус наклонён вперёд, руки сцеплены на затылке
  cower: {
    pelvis: V(0, 0.5, -0.1), lean: 0.62, twist: 0.05, feet: [V(-0.16, 0.08, 0.2), V(0.17, 0.08, 0.12)], footPitch: [0, 0.2], footYaw: [-0.2, 0.2],
    kneePole: [V(-0.4, 0.2, 1), V(0.4, 0.2, 1)], handsOnHead: true, elbowPoles: [V(-1, 0.3, 0.6), V(1, 0.3, 0.6)], head: [0.55, 0, 0],
  },
  // лежит на спине (как у бойца: после укладки ось z становится высотой) — руки раскинуты
  dead: {
    pelvis: V(0, 0.93, 0), lean: 0.08, twist: 0, feet: [V(-0.24, 0.04, -0.03), V(0.22, 0.06, -0.03)], footPitch: [0.5, 0.4], footYaw: [-1.2, 1.1],
    kneePole: [V(-1, 0, -0.15), V(1, 0, -0.15)], hands: [V(-0.66, 1.3, -0.04), V(0.6, 1.6, -0.04)], elbowPoles: [V(-0.3, -0.7, -0.6), V(0.3, -0.7, -0.6)],
    head: [-0.7, 0.85, 0],
  },
};

// ходьба: ноги — как у бойца (шаг 0,7 м, 0..1 — два шага), руки отмахивают против ног
export function civilianWalk(phase) {
  const smooth = (value) => value * value * (3 - 2 * value);
  const leg = (offset) => {
    const q = (phase + offset) % 1;
    if (q < 0.5) return { z: 0.33 - (q / 0.5) * 0.66, y: 0.08, pitch: 0 };
    const s = (q - 0.5) / 0.5;
    return { z: -0.33 + 0.66 * smooth(s), y: 0.08 + 0.12 * Math.sin(Math.PI * s), pitch: -0.25 * Math.sin(Math.PI * s) };
  };
  const left = leg(0), right = leg(0.5);
  const bob = Math.cos(phase * Math.PI * 4);
  const swing = Math.sin(phase * Math.PI * 2);
  return {
    pelvis: V(0, 0.95 + 0.02 * bob, 0.02), lean: 0.06, twist: 0.08 * swing,
    feet: [V(-0.12, left.y, left.z), V(0.12, right.y, right.z)], footPitch: [left.pitch, right.pitch], footYaw: [-0.05, 0.05],
    kneePole: [V(-0.05, 0, 1), V(0.05, 0, 1)],
    hands: [V(-0.25, 0.94 + 0.03 * Math.abs(swing), 0.04 + 0.22 * swing), V(0.25, 0.94 + 0.03 * Math.abs(swing), 0.04 - 0.22 * swing)],
    elbowPoles: [V(-0.3, 0, -1), V(0.3, 0, -1)], head: [0.03, 0, 0],
  };
}

// ---------- модель ----------
export function buildCivilian({ kind = 'man', pose = 'idle' } = {}) {
  const look = CIVILIANS[kind];
  const spec = typeof pose === 'string' ? CIVILIAN_POSES[pose] : pose;
  const materials = materialsFor(kind);
  const build = look.build;
  const person = new THREE.Group();
  const add = (object) => { person.add(object); return object; };
  const placed = (mesh, position, quaternion) => { mesh.position.copy(position); mesh.quaternion.copy(quaternion); return add(mesh); };

  const pelvis = spec.pelvis.clone();
  const torsoQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(spec.lean, spec.twist, 0, 'YXZ'));
  const pelvisQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(spec.lean * 0.3, spec.twist * 0.5, 0, 'YXZ'));
  const local = (x, y, z, origin = pelvis, quat = torsoQuat) => V(x, y, z).applyQuaternion(quat).add(origin);
  const hipLocal = (x, y, z) => local(x, y, z, pelvis, pelvisQuat);
  const female = kind === 'woman' || !!look.female;
  const coverall = kind === 'engineer' || kind === 'worker' || !!look.coverall;
  const upper = materials.top;

  // таз и корпус
  placed(box(0.34 * (female ? 1.06 : 1), 0.22, 0.22, materials.legs, 0.08), pelvis, pelvisQuat);
  if (!coverall) placed(box(0.35 * (female ? 1.05 : 1), 0.04, 0.23, materials.dark, 0.015), hipLocal(0, 0.09, 0), pelvisQuat);   // ремень
  const abdomen = add(clothLimb(local(0, 0.04, 0), local(0, 0.26, 0), 0.15 * build, 0.165 * build, upper, FOLDS.torso(5)));
  abdomen.scale.set(1, 1, 0.74);
  const chest = local(0, 0.33, 0);
  placed(box(0.39 * build, 0.38, 0.22, upper, 0.1), chest, torsoQuat);
  if (female) for (const side of [-1, 1]) add(ball(local(side * 0.065, 0.31, 0.085), 0.06, upper, [1, 0.85, 0.6]));
  // воротник
  placed(box(0.2, 0.05, 0.16, kind === 'scientist' ? upper : coverall ? upper : materials.top, 0.02), local(0, 0.54, 0.01), torsoQuat);

  // халат учёного: полы до колен поверх брюк и плечи поверх рубашки
  if (look.coat) {
    placed(box(0.42 * build, 0.36, 0.25, materials.coat, 0.1), local(0, 0.34, 0), torsoQuat);
    // короткая юбка халата на тазу, ниже — полы на бёдрах (см. ноги): так халат следует позе, а не торчит трубой
    const skirt = add(segment(hipLocal(0, 0.06, 0), hipLocal(0, -0.2, 0), 0.2, 0.22, materials.coat, 16));
    skirt.scale.set(1, 1, 0.72);
    placed(box(0.03, 0.62, 0.02, materials.top, 0.008), local(0, 0.18, 0.13), torsoQuat);    // рубашка в вырезе халата
    placed(box(0.08, 0.1, 0.02, materials.coat, 0.01), local(-0.13, 0.36, 0.14), torsoQuat);   // нагрудный карман
    placed(box(0.012, 0.09, 0.012, materials.dark, 0.004), local(-0.13, 0.42, 0.155), torsoQuat);   // ручка
  }
  // сигнальный жилет инженера со световозвращающими полосами
  if (look.vest) {
    placed(box(0.41 * build, 0.34, 0.235, materials.vest, 0.08), local(0, 0.32, 0), torsoQuat);
    for (const height of [0.22, 0.38]) placed(box(0.415 * build, 0.035, 0.24, materials.stripe, 0.01), local(0, height, 0), torsoQuat);
  }
  // галстук и погоны (форма офицера)
  if (look.tie) placed(box(0.035, 0.2, 0.012, materials.tie, 0.005), local(0, 0.41, 0.114), torsoQuat);
  if (look.epaulets) for (const side of [-1, 1]) placed(box(0.06, 0.014, 0.11, materials.gold, 0.005), local(side * 0.155 * build, 0.535, 0), torsoQuat);
  // фартук повара: от пояса до колен спереди
  if (look.apron) placed(box(0.34 * build, 0.52, 0.02, materials.apron, 0.01), hipLocal(0, -0.15, 0.125), pelvisQuat);
  // пояс с инструментом у рабочего
  if (look.belt) {
    placed(box(0.37, 0.05, 0.24, materials.dark, 0.015), hipLocal(0, 0.09, 0), pelvisQuat);
    placed(box(0.08, 0.12, 0.07, materials.dark, 0.015), hipLocal(0.17, 0.0, 0.07), pelvisQuat);
    placed(box(0.025, 0.2, 0.025, materials.dark, 0.006), hipLocal(-0.18, -0.02, 0.04), pelvisQuat);   // ручка молотка
  }

  // голова
  const headStart = person.children.length;
  const neckBase = local(0, 0.56, 0);
  const headQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(spec.head[0], 0, spec.head[2])).multiply(new THREE.Quaternion().setFromEuler(new THREE.Euler(0, spec.head[1], 0)));
  const headCenter = neckBase.clone().add(V(0, 0.15, 0.02).applyQuaternion(headQuat));
  const headLocal = (x, y, z) => V(x, y, z).applyQuaternion(headQuat).add(headCenter);
  add(segment(neckBase, headCenter, 0.055, 0.05, materials.skin, 12));
  add(ball(headCenter, 0.1, materials.skin, [0.93, 1.1, 1.0], 18));
  if (!look.hazmat) add(ball(headLocal(0, -0.005, 0.098), 0.02, materials.skin, [0.8, 1, 1]));   // нос
  for (const side of [-1, 1]) add(ball(headLocal(side * 0.095, 0, -0.005), 0.025, materials.skin, [0.5, 1, 0.8]));   // уши
  // волосы: шапочка сверху и сзади; у женщины — объём до плеч сзади
  const hairCap = add(new THREE.Mesh(new THREE.SphereGeometry(0.106, 22, 12, 0, Math.PI * 2, 0, Math.PI * 0.5), materials.scrubCap || materials.hair));
  hairCap.position.copy(headLocal(0, 0.012, -0.012)); hairCap.quaternion.copy(headQuat); hairCap.scale.set(0.97, 1.05, 1.06);
  if (look.scrubCap) hairCap.scale.set(1.02, 1.1, 1.08);
  hairCap.castShadow = true;
  add(ball(headLocal(0, -0.01, -0.05), 0.09, materials.scrubCap || materials.hair, [1, 0.9, 0.75]));
  if (look.hairStyle === 'long' && !look.hazmat && !look.chefHat) {
    const back = add(segment(headLocal(0, 0.02, -0.06), headLocal(0, -0.22, -0.07), 0.1, 0.085, materials.hair, 14));
    back.scale.set(1, 1, 0.6);
    for (const side of [-1, 1]) add(segment(headLocal(side * 0.085, 0.03, 0.0), headLocal(side * 0.09, -0.16, -0.02), 0.035, 0.03, materials.hair, 8));
  }
  if (look.glasses) {
    for (const side of [-1, 1]) placed(box(0.045, 0.03, 0.008, materials.lens, 0.006), headLocal(side * 0.036, 0.015, 0.1), headQuat);
    placed(box(0.15, 0.008, 0.008, materials.dark, 0.003), headLocal(0, 0.028, 0.101), headQuat);
  }
  // фуражка: тулья, околыш, козырёк, кокарда
  if (look.cap) {
    const crown = placed(new THREE.Mesh(new THREE.CylinderGeometry(0.135, 0.105, 0.065, 24), materials.capCrown), headLocal(0, 0.1, 0.005), headQuat);
    crown.scale.set(1, 1, 1.08); crown.castShadow = true;
    placed(new THREE.Mesh(new THREE.CylinderGeometry(0.108, 0.106, 0.04, 24), materials.capBand), headLocal(0, 0.055, 0.005), headQuat).scale.set(1, 1, 1.08);
    const visor = placed(box(0.17, 0.012, 0.075, materials.visor, 0.005), headLocal(0, 0.04, 0.11), headQuat);
    visor.rotateX(0.25);
    placed(box(0.03, 0.03, 0.01, materials.gold || materials.visor, 0.004), headLocal(0, 0.07, 0.115), headQuat);
  }
  if (look.baseballCap) {
    const shell = add(new THREE.Mesh(new THREE.SphereGeometry(0.11, 20, 10, 0, Math.PI * 2, 0, Math.PI * 0.5), materials.baseballCap));
    shell.position.copy(headLocal(0, 0.025, 0)); shell.quaternion.copy(headQuat); shell.scale.set(1, 0.9, 1.08); shell.castShadow = true;
    placed(box(0.15, 0.012, 0.09, materials.baseballCap, 0.005), headLocal(0, 0.03, 0.13), headQuat).rotateX(0.12);
  }
  if (look.chefHat) {
    placed(new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.16, 20), materials.chefHat), headLocal(0, 0.13, -0.005), headQuat).castShadow = true;
    add(ball(headLocal(0, 0.22, -0.005), 0.12, materials.chefHat, [1, 0.6, 1]));
  }
  if (look.nurseCap) placed(box(0.15, 0.05, 0.09, materials.nurseCap, 0.012), headLocal(0, 0.105, 0.01), headQuat);
  if (look.mask) placed(box(0.12, 0.075, 0.035, materials.mask, 0.012), headLocal(0, -0.045, 0.092), headQuat);
  // капюшон костюма биозащиты закрывает голову целиком: панорамное стекло, фильтр, шов у шеи
  if (look.hazmat) {
    const hood = add(ball(headLocal(0, 0.01, -0.005), 0.148, materials.hood, [1, 1.08, 1.02], 20));
    hood.castShadow = true;
    const visor = placed(box(0.17, 0.12, 0.04, materials.visorGlass, 0.02), headLocal(0, 0.025, 0.128), headQuat);
    visor.rotateX(-0.08);
    placed(new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.045, 0.06, 14), materials.filter), headLocal(0, -0.085, 0.13), headQuat).rotateX(Math.PI / 2);
    add(segment(local(0, 0.52, 0), local(0, 0.6, 0), 0.12, 0.12, materials.tape, 16)).scale.set(1, 1, 0.85);
    placed(box(0.22, 0.32, 0.12, materials.tape, 0.03), local(0, 0.33, -0.17), torsoQuat);      // блок фильтровентиляции на спине
  }
  if (look.helmet) {
    const shell = add(new THREE.Mesh(new THREE.SphereGeometry(0.128, 22, 12, 0, Math.PI * 2, 0, Math.PI * 0.5), materials.helmet));
    shell.position.copy(headLocal(0, 0.035, 0)); shell.quaternion.copy(headQuat); shell.scale.set(1, 0.95, 1.1);
    shell.castShadow = true;
    const brim = placed(new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.012, 22), materials.helmet), headLocal(0, 0.035, 0.02), headQuat);
    brim.scale.set(0.95, 1, 1.1); brim.castShadow = true;
    placed(box(0.02, 0.02, 0.2, materials.helmet, 0.008), headLocal(0, 0.155, 0), headQuat);   // гребень
  }

  // у детей голова крупнее: части головы (кроме шеи) увеличены вокруг её центра
  if (look.headScale) {
    person.children.slice(headStart + 1).forEach((part) => {
      part.position.sub(headCenter).multiplyScalar(look.headScale).add(headCenter);
      part.scale.multiplyScalar(look.headScale);
      part.updateMatrix();
    });
  }

  // руки
  const shoulders = [local(-0.2 * build, 0.47, 0), local(0.2 * build, 0.47, 0)];
  const hands = spec.handsOnHead ? [headLocal(-0.07, 0.07, -0.08), headLocal(0.07, 0.07, -0.08)] : [spec.hands[0].clone(), spec.hands[1].clone()];
  const joints = { pelvis: pelvis.clone(), head: headCenter.clone(), shoulders: [], elbows: [], hands: [], hips: [], knees: [], ankles: [] };
  const sleeve = look.coat ? materials.coat : upper;
  [0, 1].forEach((side) => {
    const shoulder = shoulders[side];
    const elbow = solveTwoBone(shoulder, hands[side], 0.28, 0.27, spec.elbowPoles[side]);
    joints.shoulders[side] = shoulder.clone(); joints.elbows[side] = elbow.clone(); joints.hands[side] = hands[side].clone();
    add(ball(shoulder, 0.07, sleeve, [1, 1, 1], 14));
    add(clothLimb(shoulder, elbow, 0.066, 0.055, sleeve, FOLDS.upperArm(side * 3 + 4)));
    add(ball(elbow, 0.055, sleeve, [1, 1, 1], 12));
    const wrist = hands[side].clone().lerp(elbow, 0.14);
    add(clothLimb(elbow, wrist, 0.055, 0.044, sleeve, FOLDS.forearm(side * 3 + 5)));
    const handMaterial = materials.glove || materials.skin;
    add(ball(wrist, 0.035, handMaterial, [1, 1, 1], 10));
    const forearm = new THREE.Vector3().subVectors(hands[side], elbow).normalize();
    const hand = add(box(0.07, 0.1, 0.035, handMaterial, 0.015));
    hand.position.copy(hands[side]);
    hand.quaternion.setFromUnitVectors(V(0, -1, 0), forearm);
  });
  // повязка дежурного на левом плече
  if (look.armband) {
    const elbow = joints.elbows[0], shoulder = joints.shoulders[0];
    add(segment(shoulder.clone().lerp(elbow, 0.3), shoulder.clone().lerp(elbow, 0.55), 0.072, 0.068, materials.armband, 14));
  }
  // фонендоскоп на шее: дуга за шеей, трубки на грудь, головка
  if (look.stethoscope) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.085, 0.008, 6, 18, Math.PI * 1.15), materials.steth);
    ring.position.copy(local(0, 0.53, 0.0));
    ring.quaternion.copy(torsoQuat).multiply(new THREE.Quaternion().setFromEuler(new THREE.Euler(Math.PI / 2 - 0.2, 0, Math.PI - 0.07 * Math.PI)));
    add(ring);
    for (const side of [-1, 1]) add(segment(local(side * 0.08, 0.52, 0.06), local(side * 0.05, 0.32, 0.135), 0.008, 0.008, materials.steth, 6));
    placed(new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.012, 14), materials.chrome), local(0.05, 0.3, 0.14), torsoQuat).rotateX(Math.PI / 2);
  }
  // планшет у инженера в левой руке
  if (look.tablet && !spec.handsOnHead && spec !== CIVILIAN_POSES.dead && !spec.limp) {
    const tablet = add(box(0.2, 0.26, 0.015, materials.dark, 0.01));
    tablet.position.copy(hands[0].clone().add(V(0.02, 0.06, 0.05)));
    tablet.quaternion.copy(torsoQuat).multiply(new THREE.Quaternion().setFromEuler(new THREE.Euler(0.3, 0.6, 0)));
  }

  // ноги
  const hipJoints = [hipLocal(-0.1 * build, -0.05, 0), hipLocal(0.1 * build, -0.05, 0)];
  [0, 1].forEach((side) => {
    const hip = hipJoints[side];
    const ankle = spec.feet[side].clone().add(V(0, 0.03, 0));
    const knee = solveTwoBone(hip, ankle, 0.42, 0.42, spec.kneePole[side]);
    joints.hips[side] = hip.clone(); joints.knees[side] = knee.clone(); joints.ankles[side] = ankle.clone();
    add(ball(hip, 0.1, materials.legs, [1, 1, 1], 14));
    add(clothLimb(hip, knee, 0.1, 0.075, materials.legs, FOLDS.thigh(side * 5 + 3)));
    if (look.coat) add(segment(hip, hip.clone().lerp(knee, 0.85), 0.125, 0.105, materials.coat, 14));   // полы халата
    add(ball(knee, 0.074, materials.legs, [1, 1, 1], 12));
    add(clothLimb(knee, ankle.clone().add(V(0, 0.04, 0)), 0.073, 0.06, materials.legs, FOLDS.shin(side * 5 + 6)));
    const shoeQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(spec.footPitch[side], spec.footYaw ? spec.footYaw[side] : 0, 0, 'YXZ'));
    if (look.boots) {
      const boot = buildBoot(materials);
      boot.quaternion.copy(shoeQuat);
      boot.position.copy(ankle.clone().add(V(0, -0.11, 0).applyQuaternion(shoeQuat)));
      add(boot);
    } else {
      // туфли: стопа и подошва; у женщины чуть уже
      const shoe = add(box(female ? 0.08 : 0.095, 0.075, 0.25, materials.shoe, 0.03));
      shoe.quaternion.copy(shoeQuat);
      shoe.position.copy(ankle.clone().add(V(0, -0.075, 0.05).applyQuaternion(shoeQuat)));
      const sole = add(box(female ? 0.085 : 0.1, 0.02, 0.26, materials.sole, 0.008));
      sole.quaternion.copy(shoeQuat);
      sole.position.copy(ankle.clone().add(V(0, -0.11, 0.05).applyQuaternion(shoeQuat)));
    }
  });

  setShadows(person);
  person.userData = { head: headCenter.clone(), joints };
  if (look.child) {
    // ребёнок: вся фигура меньше; суставы и голова — в тех же координатах после уменьшения
    const holder = new THREE.Group();
    person.scale.setScalar(look.child);
    holder.add(person);
    const scaleAll = (point) => point.clone().multiplyScalar(look.child);
    holder.userData = { head: scaleAll(headCenter), joints: Object.fromEntries(Object.entries(joints).map(([key, value]) => [key, Array.isArray(value) ? value.map(scaleAll) : scaleAll(value)])) };
    return holder;
  }
  return person;
}

// ---------- падение и лежащий ----------
// Как у бойца (dead.js): ключевые позы смешиваются, модель поворачивается вокруг стоп назад, на спину;
// каждый кадр опускается на землю по точной рамке и смещается к центру клетки.
function mixValue(first, second, amount) {
  if (first === undefined || first === null) return second;
  if (second === undefined || second === null) return first;
  if (first.isVector3) return first.clone().lerp(second, amount);
  if (typeof first === 'number') return first + (second - first) * amount;
  if (Array.isArray(first)) return first.map((value, index) => mixValue(value, second[index], amount));
  return amount < 0.5 ? first : second;
}
function mixSpec(first, second, amount) {
  const result = {};
  for (const key of new Set([...Object.keys(first), ...Object.keys(second)])) if (key !== 'handsOnHead') result[key] = mixValue(first[key], second[key], amount);
  return result;
}
const idle = CIVILIAN_POSES.idle, dead = CIVILIAN_POSES.dead;
const buckle = {
  pelvis: V(0, 0.74, -0.05), lean: 0.3, twist: 0.08, feet: [V(-0.15, 0.08, 0.14), V(0.17, 0.08, 0.05)], footPitch: [0, 0], footYaw: [-0.1, 0.1],
  kneePole: [V(-0.2, 0, 1), V(0.2, 0, 1)], hands: [V(-0.42, 1.18, 0.26), V(0.44, 1.26, 0.22)], elbowPoles: [V(-0.6, -1, -0.2), V(0.6, -1, -0.2)], head: [0.35, 0.2, 0],
};
const sitting = { ...mixSpec(buckle, dead, 0.55), feet: [V(-0.22, 0.17, 0.28), V(0.21, 0.19, 0.22)], head: [-0.15, 0.5, 0] };
const FALL_KEYS = [
  { time: 0, angle: 0, spec: idle },
  { time: 0.35, angle: 0.12, spec: buckle },
  { time: 0.7, angle: 0.85, spec: sitting },
  { time: 1, angle: Math.PI / 2, spec: dead },
];
const smoothstep = (edge0, edge1, value) => { const amount = Math.min(1, Math.max(0, (value - edge0) / (edge1 - edge0))); return amount * amount * (3 - 2 * amount); };
function sample(progress) {
  for (let index = 1; index < FALL_KEYS.length; index++) {
    const previous = FALL_KEYS[index - 1], next = FALL_KEYS[index];
    if (progress <= next.time) {
      const amount = (progress - previous.time) / (next.time - previous.time);
      return { spec: amount >= 1 ? next.spec : mixSpec(previous.spec, next.spec, amount), angle: previous.angle + (next.angle - previous.angle) * amount };
    }
  }
  return { spec: dead, angle: Math.PI / 2 };
}
const finalOffsets = new Map();
export function civilianFall(kind, progress) {
  const posed = (value) => {
    const { spec, angle } = sample(value);
    const model = buildCivilian({ kind, pose: { ...spec, limp: true } });
    model.rotation.x = -angle;
    model.updateMatrixWorld(true);
    return { model, angle, box: new THREE.Box3().setFromObject(model, true) };
  };
  if (!finalOffsets.has(kind)) {
    const center = posed(1).box.getCenter(V(0, 0, 0));
    finalOffsets.set(kind, V(-center.x, 0, -center.z));
  }
  const offset = finalOffsets.get(kind);
  const { model, angle, box } = posed(progress);
  const slide = Math.sin(angle) * smoothstep(0, 1, progress);
  model.position.set(offset.x * slide, -box.min.y, offset.z * slide);
  const outer = new THREE.Group();
  outer.add(model);
  return outer;
}
