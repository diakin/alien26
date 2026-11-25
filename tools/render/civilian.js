// Гражданские: мужчина, женщина, учёный, инженер, рабочий; персонал базы «Ямантау» (командир, офицер, врач, хирург,
// медсестра, учёная, учёный в костюме биозащиты, инженер-женщина, электрик, сантехник, повара, уборка). Тот же скелет и пропорции, что у бойца
// (soldier2.js), но без брони и оружия, телосложение обычное и ноги почти прямые: бедро и голень по 0,42 м,
// плечо и предплечье 0,28 и 0,27 м, рост около 1,78 м. Позы: idle — стоит, руки опущены; walk (walkCycle) — с отмашкой рук; cower — присел,
// руки на голове (испуган, ждёт эвакуации); dead / fall — лежит на спине, падение (civilianFall).
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { segment, ball, solveTwoBone, setShadows } from './lib.js';
import { clothLimb, FOLDS, buildBoot } from './cloth.js';
import { fabric, pvc, rubber } from './person.js';
import { buildHumanBody, prepareHuman } from './human.js';
export { prepareHuman };

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
  commander: { uniform: true, eyes: 0x5a6a78, top: 0x3e4a30, legs: 0x3e4a30, shoes: 0x121212, hair: 0x6a6a66, skin: 0xc8987a, build: 1.04, hairStyle: 'short', cap: { crown: 0x3e4a30, band: 0x9a1c1c }, epaulets: 0xc8a040, tie: 0x2a2c20 },
  officer: { uniform: true, eyes: 0x4a3a28, top: 0x46523a, legs: 0x46523a, shoes: 0x121212, hair: 0x2a2018, skin: 0xc4967a, build: 1.02, hairStyle: 'short', epaulets: 0xc8a040, tie: 0x2a2c20, armband: 0xb01e1e },
  // врач: голубой хирургический костюм, белый халат, фонендоскоп
  doctor: { top: 0x84b4cc, legs: 0x84b4cc, shoes: 0xdcdcd8, hair: 0x3a2c20, skin: 0xc89c80, build: 1, hairStyle: 'short', coat: 0xeeeeea, stethoscope: true, glasses: true },
  // хирург: зелёный костюм, шапочка, маска, перчатки
  surgeon: { top: 0x3a8476, legs: 0x3a8476, shoes: 0xdcdcd8, hair: 0x2a2018, skin: 0xc49a7e, build: 1, hairStyle: 'short', scrubCap: 0x3a8476, mask: 0x9ccde0, gloves: 0xa8cce4 },
  nurse: { top: 0xf2f2f0, legs: 0xf2f2f0, shoes: 0xe8e8e4, hair: 0x7a4a2a, skin: 0xdcb094, build: 0.86, hairStyle: 'long', female: true, nurseCap: 0xf8f8f8, stethoscope: true },
  labwoman: { top: 0x6a4a6a, legs: 0x2a2a32, shoes: 0x26221e, hair: 0x4a2c1c, skin: 0xd8ae92, build: 0.87, hairStyle: 'long', female: true, coat: 0xe6e6e0 },
  // костюм биозащиты: комбинезон с капюшоном, панорамное стекло, фильтр, перчатки и сапоги
  hazmat: { top: 0xe8c418, legs: 0xe8c418, shoes: 0x141414, hair: 0x5a3a24, skin: 0xd6aa8c, build: 1.08, hairStyle: 'short', female: true, eyes: 0x6a4a2a, hazmat: true, gloves: 0x141414, boots: true, coverall: true },
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

const prepared = {};
function materialsFor(kind) {
  if (prepared[kind]) return prepared[kind];
  const look = CIVILIANS[kind];
  // ткани (person.js): форма и комбинезоны — саржа, рубашки, халаты и хирургические костюмы — полотно, брюки — саржа,
  // у мужчины в городе — джинсы, у женщины — трикотажный верх; костюм биозащиты — глянцевый ПВХ
  const coverall = kind === 'engineer' || kind === 'worker' || !!look.coverall;
  const topWeave = look.topWeave || (coverall || look.uniform ? 'twill' : kind === 'woman' || kind === 'girl' ? 'knit' : 'plain');
  const legsWeave = look.legsWeave || (kind === 'man' || kind === 'boy' ? 'denim' : look.legs === look.top ? topWeave : 'twill');
  const cloth = (color, roughness = 0.92, weave = 'plain') => fabric(color, weave, { roughness });
  const materials = {
    top: look.hazmat ? pvc(look.top) : cloth(look.top, 0.92, topWeave), legs: look.hazmat ? pvc(look.legs) : cloth(look.legs, 0.92, legsWeave),
    skin: new THREE.MeshStandardMaterial({ color: look.skin, roughness: 0.7 }),
    hair: new THREE.MeshStandardMaterial({ color: look.hair, roughness: 0.85 }),
    shoe: new THREE.MeshStandardMaterial({ color: look.shoes, roughness: 0.55 }),
    sole: new THREE.MeshStandardMaterial({ color: 0x141414, roughness: 0.9 }),
    dark: new THREE.MeshStandardMaterial({ color: 0x1c1c1e, roughness: 0.6 }),
    // для buildBoot (рабочие ботинки)
    boot: new THREE.MeshStandardMaterial({ color: 0x3a3026, roughness: 0.85 }),
    lace: new THREE.MeshStandardMaterial({ color: 0x2a2620, roughness: 0.9 }),
  };
  if (look.coat) materials.coat = cloth(look.coat, 0.9, 'plain');
  if (look.vest) {
    materials.vest = new THREE.MeshStandardMaterial({ color: look.vest, roughness: 0.6, emissive: look.vest, emissiveIntensity: 0.08 });
    materials.stripe = new THREE.MeshStandardMaterial({ color: 0xd8d8d8, roughness: 0.25, metalness: 0.4 });
  }
  if (look.helmet) materials.helmet = new THREE.MeshStandardMaterial({ color: look.helmet, roughness: 0.4, metalness: 0.05 });
  if (look.gloves) materials.glove = look.hazmat || kind.startsWith('cleaner') || kind === 'surgeon' ? rubber(look.gloves) : cloth(look.gloves, 0.85, 'knit');
  if (look.glasses) materials.lens = new THREE.MeshPhysicalMaterial({ color: 0x1a2428, roughness: 0.05, metalness: 0.5, clearcoat: 1 });
  const plain = (color, roughness = 0.6, metalness = 0) => new THREE.MeshStandardMaterial({ color, roughness, metalness });
  if (look.cap) { materials.capCrown = cloth(look.cap.crown, 0.8, 'twill'); materials.capBand = plain(look.cap.band, 0.7); materials.visor = plain(0x101010, 0.3, 0.2); }
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
    materials.hood = pvc(look.top);
    // панорамное стекло: прозрачное, с бликами
    materials.visorGlass = new THREE.MeshPhysicalMaterial({ color: 0xdfeaf0, roughness: 0.04, metalness: 0, clearcoat: 1, transparent: true, opacity: 0.22, depthWrite: false, side: THREE.DoubleSide });
    materials.visorRim = new THREE.MeshPhysicalMaterial({ color: 0xc8d0d4, roughness: 0.2, clearcoat: 1, transparent: true, opacity: 0.75 });
    materials.respirator = rubber(0x161616);
    materials.filter = rubber(0x262626);
    materials.label = new THREE.MeshStandardMaterial({ color: 0x141414, roughness: 0.6 });
    materials.labelText = new THREE.MeshStandardMaterial({ color: 0xbcbcbc, roughness: 0.6 });
    materials.boot = rubber(0x121212);
    materials.lace = rubber(0x121212);
  }
  materials.button = new THREE.MeshStandardMaterial({ color: look.uniform ? 0xb89a48 : 0xe8e6e0, roughness: 0.35, metalness: look.uniform ? 0.7 : 0 });
  materials.seam = new THREE.MeshStandardMaterial({ color: 0x000000, roughness: 1, transparent: true, opacity: 0.25 });
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
  const person = new THREE.Group();
  const add = (object) => { person.add(object); return object; };
  const placed = (mesh, position, quaternion) => { mesh.position.copy(position); mesh.quaternion.copy(quaternion); return add(mesh); };
  const female = kind === 'woman' || kind === 'girl' || !!look.female;
  const coverall = kind === 'engineer' || kind === 'worker' || !!look.coverall;

  const pelvis = spec.pelvis.clone();
  const torsoQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(spec.lean, spec.twist, 0, 'YXZ'));
  const pelvisQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(spec.lean * 0.3, spec.twist * 0.5, 0, 'YXZ'));
  const headQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(spec.head[0], 0, spec.head[2])).multiply(new THREE.Quaternion().setFromEuler(new THREE.Euler(0, spec.head[1], 0)));
  const footQuats = [0, 1].map((side) => new THREE.Quaternion().setFromEuler(new THREE.Euler(spec.footPitch[side], spec.footYaw ? spec.footYaw[side] : 0, 0, 'YXZ')));

  // ---- одежда слоями (human.js): брюки, верх, халат или комбинезон, жилет, фартук, перчатки ----
  const garments = [];
  const layer = (region, material, offset, extra = {}) => garments.push({ region, material, offset, ...extra });
  if (look.hazmat) {
    layer('coverall', materials.top, 0.02, { density: 1.6 });
    layer('glove', materials.glove, 0.026, { relax: 0, loose: 0 });
    layer('boot', materials.boot, 0.03, { relax: 2, loose: 0 });
  } else if (coverall) {
    layer('coverall', materials.top, 0.009);
  } else {
    layer('legs', materials.legs, 0.005);
    layer(look.shortSleeves ? 'shortTop' : 'top', materials.top, 0.009);
  }
  if (look.coat) {
    layer('top', materials.coat, 0.017);
    if (!spec.handsOnHead) garments.push({ part: 'skirt', open: true, toKnee: true, material: materials.coat, offset: 0.02 });
  }
  if (look.vest) {
    layer('vest', materials.vest, 0.022);
    layer('vestStripes', materials.stripe, 0.025, { thin: true });
  }
  if (look.apron) layer('apron', materials.apron, look.coat ? 0.026 : 0.02, { thin: true });
  if (look.gloves && !look.hazmat) layer('glove', materials.glove, 0.004, { thin: true, relax: 0, loose: 0 });
  // обувь — по форме стопы; ремень — лента по поясу брюк
  if (!look.hazmat) layer(look.boots ? 'workBoot' : 'shoes', look.boots ? materials.boot : materials.shoe, look.boots ? 0.014 : 0.009, { relax: 2, loose: 0, thin: true });
  const belted = look.belt || (!coverall && !look.coat && !look.apron && !look.hazmat && kind !== 'girl' && kind !== 'woman');
  if (belted) layer('belt', materials.dark, 0.016, { thin: true, relax: 0, loose: 0 });

  const human = buildHumanBody({ kind, look, garments, hideHair: !!(look.hazmat || look.scrubCap), hairStyle: look.hairStyle }, {
    pelvis, pelvisQuat, torsoQuat, headQuat, hands: spec.handsOnHead ? null : spec.hands, handsOnHead: !!spec.handsOnHead,
    elbowPoles: spec.elbowPoles, feet: spec.feet.map((foot) => foot.clone().add(V(0, 0.03, 0))), kneePole: spec.kneePole, footQuats,
  });
  add(human.group);
  const { joints, headCenter, rest } = human;
  const frame = rest.frame;
  // точка на поверхности спереди (в покое) над слоем одежды: для пуговиц, галстука, нашивок
  const front = (x, y, lift = 0.012) => human.torsoPoint(x, y, human.front(x, y) + lift);
  const chestY = frame.shoulderY - 0.13, waistY = frame.waist;

  // ---- голова: принадлежности в рамке головы (центр — середина головы, z — вперёд) ----
  // headScaled — головные уборы и капюшон: размеры прежней модели (голова 0,186 × 0,22 × 0,2) подогнаны под голову человека
  const headScaled = new THREE.Group(), headExact = new THREE.Group();
  for (const holder of [headScaled, headExact]) { holder.position.copy(headCenter); holder.quaternion.copy(headQuat); add(holder); }
  // головные уборы прежней модели рассчитаны на макушку на высоте 0,11 над центром головы
  headScaled.scale.set(frame.headSize.x / 0.186 * 1.02, frame.crown / 0.11, frame.headSize.z / 0.2 * 1.02);
  const inHead = (mesh, x, y, z, holder = headScaled) => { mesh.position.set(x, y, z); holder.add(mesh); mesh.castShadow = true; return mesh; };
  const eye = frame.eyeCenter.clone().sub(frame.headCenter);          // центр между глазами в рамке головы
  const faceFront = eye.z + 0.012;
  if (look.scrubCap) {
    const capShell = new THREE.Mesh(new THREE.SphereGeometry(0.108, 28, 14, 0, Math.PI * 2, 0, Math.PI * 0.52), materials.scrubCap);
    inHead(capShell, 0, 0.02, -0.008).scale.set(1.0, 1.12, 1.08);
  }
  if (look.glasses) {
    for (const side of [-1, 1]) {
      const lens = new THREE.Mesh(new THREE.CylinderGeometry(0.017, 0.017, 0.003, 20), materials.lens);
      lens.rotation.x = Math.PI / 2; lens.scale.set(1, 1, 0.75);
      inHead(lens, eye.x + side * frame.eyeDistance * 0.5, eye.y, faceFront + 0.004, headExact);
      const rim = new THREE.Mesh(new THREE.TorusGeometry(0.0172, 0.0016, 4, 22), materials.dark);
      rim.scale.set(1, 0.75, 1);
      inHead(rim, eye.x + side * frame.eyeDistance * 0.5, eye.y, faceFront + 0.004, headExact);
      const temple = segment(V(eye.x + side * (frame.eyeDistance * 0.5 + 0.017), eye.y + 0.004, faceFront + 0.002), V(side * frame.headSize.x * 0.5, eye.y + 0.002, eye.z - 0.075), 0.0014, 0.0014, materials.dark, 4);
      headExact.add(temple);
    }
    inHead(box(0.014, 0.003, 0.003, materials.dark, 0.001), eye.x, eye.y + 0.004, faceFront + 0.006, headExact);
  }
  if (look.cap) {
    const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.135, 0.105, 0.065, 28), materials.capCrown);
    inHead(crown, 0, 0.1, 0.005).scale.set(1, 1, 1.08);
    inHead(new THREE.Mesh(new THREE.CylinderGeometry(0.108, 0.106, 0.04, 28), materials.capBand), 0, 0.055, 0.005).scale.set(1, 1, 1.08);
    inHead(box(0.17, 0.012, 0.075, materials.visor, 0.005), 0, 0.04, 0.11).rotateX(0.25);
    inHead(box(0.03, 0.03, 0.01, materials.gold || materials.visor, 0.004), 0, 0.07, 0.117);
  }
  if (look.baseballCap) {
    const shell = new THREE.Mesh(new THREE.SphereGeometry(0.11, 24, 12, 0, Math.PI * 2, 0, Math.PI * 0.5), materials.baseballCap);
    inHead(shell, 0, 0.03, 0).scale.set(1, 0.9, 1.08);
    inHead(box(0.15, 0.012, 0.09, materials.baseballCap, 0.005), 0, 0.035, 0.13).rotateX(0.12);
  }

  // размеры черепа в рамке головы: ширина без ушей, глубина, высота лба и макушки
  const skullX = frame.headSize.x * 0.5 - 0.012, skullZ = frame.headSize.z * 0.5 - 0.008, browY = eye.y + 0.03, crownY = frame.crown;
  if (look.chefHat) {
    // поварской колпак: околыш по лбу и надутый верх
    const bandBottom = browY - 0.004, bandHeight = crownY - bandBottom + 0.05;
    const band = new THREE.Mesh(new THREE.CylinderGeometry(1.08, 1, 1, 28, 1, true), materials.chefHat);
    inHead(band, 0, bandBottom + bandHeight / 2, -0.012, headExact).scale.set(skullX + 0.026, bandHeight, skullZ + 0.026);
    const puff = ball(V(0, 0, 0), 1, materials.chefHat, [1, 1, 1], 20);
    inHead(puff, 0, bandBottom + bandHeight + 0.01, -0.012, headExact).scale.set(skullX + 0.04, 0.05, skullZ + 0.045);
  }
  if (look.nurseCap) {
    // сестринская шапочка: передняя стенка, откинутая назад, и плоский верх на темени
    inHead(box(skullX * 1.55, 0.05, 0.007, materials.nurseCap, 0.003), 0, crownY - 0.012, skullZ * 0.45, headExact).rotateX(-0.55);
    inHead(box(skullX * 1.45, 0.008, 0.07, materials.nurseCap, 0.003), 0, crownY + 0.008, skullZ * 0.05, headExact);
  }
  if (look.mask) {
    // хирургическая маска: на нос и рот, завязки к затылку
    const maskShell = new THREE.Mesh(new THREE.SphereGeometry(0.1, 24, 12, Math.PI * 0.2, Math.PI * 0.6, Math.PI * 0.52, Math.PI * 0.3), materials.mask);
    maskShell.scale.set(frame.headSize.x / 0.2, 1.0, frame.headSize.z / 0.2 * 1.04);
    inHead(maskShell, 0, eye.y - 0.012, 0.0, headExact);
  }
  if (look.helmet) {
    // строительная каска: купол над черепом с зазором под оголовье, козырёк спереди, узкий поля по бокам и сзади, ребро по темени
    const base = browY + 0.012, height = crownY - base + 0.04;
    const shell = new THREE.Mesh(new THREE.SphereGeometry(1, 28, 14, 0, Math.PI * 2, 0, Math.PI * 0.5), materials.helmet);
    inHead(shell, 0, base, -0.012, headExact).scale.set(skullX + 0.026, height, skullZ + 0.03);
    const brim = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 0.006, 32), materials.helmet);
    inHead(brim, 0, base + 0.002, 0.008, headExact).scale.set(skullX + 0.034, 1, skullZ + 0.05);
    // ребро жёсткости — та же оболочка, узкая по x и чуть выше купола
    const ridge = new THREE.Mesh(new THREE.SphereGeometry(1, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.5), materials.helmet);
    inHead(ridge, 0, base, -0.012, headExact).scale.set(0.016, height + 0.007, skullZ + 0.036);
  }
  // костюм биозащиты: капюшон из ПВХ облегает голову, спереди — окно с прозрачным выпуклым стеклом в светлой рамке,
  // под стеклом лицо и чёрная полумаска с двумя фильтрами; капюшон спадает на плечи
  if (look.hazmat) {
    const radii = [0.122, 0.142, 0.128];
    const windowPhi = 0.95, windowTop = 0.3 * Math.PI, windowBottom = 0.76 * Math.PI;
    const hoodPart = (phiStart, phiLength, thetaStart, thetaLength, material) => {
      const mesh = new THREE.Mesh(new THREE.SphereGeometry(1, 44, 30, phiStart, phiLength, thetaStart, thetaLength), material);
      mesh.scale.set(...radii);
      return inHead(mesh, 0, 0.012, -0.006);
    };
    hoodPart(Math.PI / 2 + windowPhi, Math.PI * 2 - windowPhi * 2, 0, Math.PI, materials.hood);
    hoodPart(Math.PI / 2 - windowPhi, windowPhi * 2, 0, windowTop, materials.hood);
    hoodPart(Math.PI / 2 - windowPhi, windowPhi * 2, windowBottom, Math.PI - windowBottom, materials.hood);
    const glass = hoodPart(Math.PI / 2 - windowPhi, windowPhi * 2, windowTop, windowBottom - windowTop, materials.visorGlass);
    glass.scale.set(radii[0] * 1.03, radii[1], radii[2] * 1.12);
    glass.castShadow = false; glass.renderOrder = 2;
    const rimPoints = [];
    for (let step = 0; step <= 64; step++) {
      const along = step / 64;
      let phi, theta;
      if (along < 0.25) { phi = Math.PI / 2 - windowPhi + along * 4 * windowPhi * 2; theta = windowTop; }
      else if (along < 0.5) { phi = Math.PI / 2 + windowPhi; theta = windowTop + (along - 0.25) * 4 * (windowBottom - windowTop); }
      else if (along < 0.75) { phi = Math.PI / 2 + windowPhi - (along - 0.5) * 4 * windowPhi * 2; theta = windowBottom; }
      else { phi = Math.PI / 2 - windowPhi; theta = windowBottom - (along - 0.75) * 4 * (windowBottom - windowTop); }
      rimPoints.push(V(-Math.cos(phi) * Math.sin(theta) * radii[0] * 1.035, Math.cos(theta) * radii[1] * 1.005 + 0.012, Math.sin(phi) * Math.sin(theta) * radii[2] * 1.12 - 0.006));
    }
    inHead(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(rimPoints, true), 80, 0.006, 6, true), materials.visorRim), 0, 0, 0);
    // полумаска с клапаном и двумя фильтрами
    const mouthY = eye.y - frame.eyeDistance * 1.05, mouthZ = eye.z + 0.012;
    const maskBody = new THREE.Mesh(new THREE.SphereGeometry(0.034, 22, 16), materials.respirator);
    maskBody.scale.set(1.1, 1.05, 0.85);
    inHead(maskBody, 0, mouthY + 0.008, mouthZ, headExact);
    inHead(new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.014, 0.016, 14), materials.filter), 0, mouthY - 0.006, mouthZ + 0.028, headExact).rotateX(Math.PI / 2 + 0.3);
    for (const side of [-1, 1]) {
      const cartridge = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.024, 20), materials.filter);
      inHead(cartridge, side * 0.034, mouthY - 0.005, mouthZ + 0.006, headExact);
      cartridge.rotateZ(side * 1.15); cartridge.rotateX(0.45);
      headExact.add(segment(V(side * 0.034, mouthY + 0.02, mouthZ - 0.01), V(side * frame.headSize.x * 0.5, eye.y + 0.01, eye.z - 0.06), 0.003, 0.003, materials.respirator, 4));
    }
    // капюшон спадает на плечи
    const neckTop = human.torsoPoint(0, frame.shoulderY + 0.12, rest.joints.neck_01[0].z);
    const shoulders = human.torsoPoint(0, frame.shoulderY + 0.01, rest.joints.spine_03[0].z);
    const cape = add(segment(neckTop, shoulders, 0.085, 0.2 * (female ? 0.92 : 1), materials.hood, 28));
    cape.scale.set(1, 1, 0.82);
    // молния, чёрная нашивка на груди, клапан кармана на плече
    add(segment(front(0, chestY + 0.12, 0.024), front(0, waistY - 0.05, 0.024), 0.005, 0.005, materials.respirator, 6));
    placed(box(0.1, 0.034, 0.006, materials.label, 0.003), front(0.075, chestY + 0.03, 0.026), torsoQuat);
    for (let line = 0; line < 2; line++) placed(box(0.068 - line * 0.02, 0.004, 0.003, materials.labelText, 0.001), front(0.075, chestY + 0.037 - line * 0.011, 0.03), torsoQuat);
  }

  // ---- корпус: детали одежды ----
  if (look.uniform) {
    // китель: пуговицы, нагрудные карманы с клапанами, воротник, ремень
    for (let button = 0; button < 5; button++) placed(new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.005, 12), materials.button), front(0.0, chestY + 0.11 - button * 0.075, 0.015), torsoQuat).rotateX(Math.PI / 2);
    for (const side of [-1, 1]) {
      placed(box(0.085, 0.03, 0.01, materials.top, 0.004), front(side * 0.075, chestY + 0.035, 0.016), torsoQuat);
      placed(new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.004, 10), materials.button), front(side * 0.075, chestY + 0.03, 0.023), torsoQuat).rotateX(Math.PI / 2);
    }
  }
  if (look.tie) {
    add(segment(front(0, frame.shoulderY + 0.04, 0.016), front(0, chestY - 0.06, 0.016), 0.012, 0.02, materials.tie, 4)).scale.set(1, 1, 0.3);
  }
  if (look.epaulets) for (const [number, side] of [[0, -1], [1, 1]]) {
    const top = joints.shoulders[number].clone().add(V(0, 0.045, 0).applyQuaternion(torsoQuat)).add(V(-side * 0.035, 0, 0).applyQuaternion(torsoQuat));
    placed(box(0.065, 0.012, 0.1, materials.gold, 0.005), top, torsoQuat);
  }
  if (look.coat) {
    // халат: лацканы, три пуговицы, нагрудный карман с ручкой, боковые карманы
    for (const side of [-1, 1]) {
      const lapel = add(segment(front(side * 0.05, frame.shoulderY + 0.02, 0.022), front(side * 0.015, chestY - 0.06, 0.022), 0.02, 0.01, materials.coat, 4));
      lapel.scale.set(1, 1, 0.25);
    }
    for (let button = 0; button < 3; button++) placed(new THREE.Mesh(new THREE.CylinderGeometry(0.007, 0.007, 0.005, 12), materials.button), front(0.012, chestY - 0.08 - button * 0.08, 0.024), torsoQuat).rotateX(Math.PI / 2);
    placed(box(0.08, 0.095, 0.006, materials.coat, 0.004), front(0.085, chestY - 0.01, 0.024), torsoQuat);
    placed(box(0.009, 0.08, 0.009, materials.dark, 0.003), front(0.1, chestY + 0.02, 0.03), torsoQuat);
  }
  if (look.belt || (!coverall && !look.coat && !look.apron && !look.hazmat && kind !== 'girl' && kind !== 'woman')) {
    // ремень по талии: эллипс по сечению брюк
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1, 0.018, 6, 32), materials.dark);
    const half = Math.abs(human.front(0, waistY - 0.04) - rest.joints.pelvis[0].z) + 0.012;
    ring.scale.set(half * 1.32, half * 1.0, 1);
    ring.rotation.x = Math.PI / 2;
    const holder = new THREE.Group();
    holder.add(ring);
    holder.position.copy(human.hipPoint(0, waistY - 0.035, rest.joints.pelvis[0].z - 0.005));
    holder.quaternion.copy(pelvisQuat);
    add(holder);
    placed(box(0.05, 0.035, 0.01, materials.chrome || materials.button, 0.004), human.hipPoint(0, waistY - 0.035, human.front(0, waistY - 0.04) + 0.016), pelvisQuat);
    if (look.belt) {
      placed(box(0.08, 0.12, 0.06, materials.dark, 0.015), human.hipPoint(0.16, waistY - 0.1, rest.joints.pelvis[0].z + 0.03), pelvisQuat);
      placed(box(0.025, 0.2, 0.025, materials.dark, 0.006), human.hipPoint(-0.17, waistY - 0.12, rest.joints.pelvis[0].z + 0.02), pelvisQuat);
    }
  }
  if (look.armband) add(segment(joints.shoulders[0].clone().lerp(joints.elbows[0], 0.3), joints.shoulders[0].clone().lerp(joints.elbows[0], 0.55), 0.06, 0.056, materials.armband, 16));
  if (look.stethoscope) {
    const neck = rest.joints.neck_01[0];
    const points = [];
    for (let step = 0; step <= 16; step++) {
      const angle = Math.PI * 0.12 + step / 16 * Math.PI * 0.76;
      points.push(human.torsoPoint(Math.cos(angle) * 0.075, neck.y - 0.01, neck.z - Math.sin(angle) * 0.065 + 0.01));
    }
    add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), 24, 0.006, 6), materials.steth));
    for (const side of [-1, 1]) add(segment(human.torsoPoint(side * 0.074, neck.y - 0.01, neck.z + 0.02), front(side * 0.05, chestY - 0.03, 0.03), 0.006, 0.006, materials.steth, 6));
    placed(new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.011, 16), materials.chrome), front(0.05, chestY - 0.05, 0.032), torsoQuat).rotateX(Math.PI / 2);
  }
  // планшет у инженера в левой руке
  if (look.tablet && !spec.handsOnHead && spec !== CIVILIAN_POSES.dead && !spec.limp) {
    const tablet = add(box(0.2, 0.26, 0.015, materials.dark, 0.01));
    tablet.position.copy(joints.hands[0].clone().add(V(0.02, 0.06, 0.06)));
    tablet.quaternion.copy(torsoQuat).multiply(new THREE.Quaternion().setFromEuler(new THREE.Euler(0.3, 0.6, 0)));
  }

  setShadows(person);
  person.traverse((node) => { if (node.isSkinnedMesh) node.frustumCulled = false; });
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
