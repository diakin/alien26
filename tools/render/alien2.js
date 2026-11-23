// Пришелец, коренастое телосложение: только тело, без снаряжения.
// Высокий (около 2 м), широкая грудная клетка, толстые конечности, пальцевая стопа с обратным суставом.
import * as THREE from 'three';
import { segment, ball, solveTwoBone, setShadows, scaleTextures } from './lib.js';
import { alienMaterials, getAlienHeadGeometry } from './actors.js';
import { clothLimb } from './cloth.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);

// ---------- материалы: чешуя и противотень (спина темнее, брюхо светлее) ----------
// uForward — куда смотрит пришелец в мировых координатах; задаётся после поворота модели.
const shading = { uForward: { value: new THREE.Vector3(0, 0, 1) } };
export function setAlienFacing(alien) {
  alien.updateMatrixWorld(true);
  shading.uForward.value.set(0, 0, 1).transformDirection(alien.matrixWorld);
}

function countershade(material, backColor, bellyColor) {
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uForward = shading.uForward;
    shader.uniforms.uBack = { value: new THREE.Color(backColor) };
    shader.uniforms.uBelly = { value: new THREE.Color(bellyColor) };
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWorldNormal;')
      .replace('#include <defaultnormal_vertex>', '#include <defaultnormal_vertex>\nvWorldNormal = normalize(mat3(modelMatrix) * objectNormal);');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWorldNormal;\nuniform vec3 uForward;\nuniform vec3 uBack;\nuniform vec3 uBelly;')
      .replace('#include <map_fragment>', `#include <map_fragment>
        vec3 worldNormal = normalize(vWorldNormal);
        float dorsal = dot(worldNormal, -uForward) * 0.75 + worldNormal.y * 0.35;
        diffuseColor.rgb *= mix(uBelly, uBack, smoothstep(-0.45, 0.55, dorsal));`);
  };
  material.customProgramCacheKey = () => 'alienCountershade' + backColor;
  return material;
}

let scaledMaterials = null;
function alienScaleMaterials() {
  if (scaledMaterials) return scaledMaterials;
  const base = alienMaterials();
  const scales = scaleTextures();
  scales.map.repeat.set(3, 3);
  scales.normalMap.repeat.set(3, 3);
  const small = scaleTextures({ columns: 14, rows: 20, seed: 52 });
  small.map.repeat.set(2, 2);
  small.normalMap.repeat.set(2, 2);
  const skin = countershade(new THREE.MeshPhysicalMaterial({
    map: scales.map, normalMap: scales.normalMap, normalScale: new THREE.Vector2(1.3, 1.3),
    color: 0xffffff, roughness: 0.42, metalness: 0, clearcoat: 0.35, clearcoatRoughness: 0.35,
    sheen: 0.4, sheenColor: new THREE.Color(0x9fd0c0), sheenRoughness: 0.5,
  }), 0x22403a, 0x9eac88);
  // голова: мелкая чешуя
  const head = countershade(new THREE.MeshPhysicalMaterial({
    map: small.map, normalMap: small.normalMap, normalScale: new THREE.Vector2(1.0, 1.0),
    color: 0xffffff, roughness: 0.4, clearcoat: 0.4, clearcoatRoughness: 0.3,
  }), 0x22403a, 0x9eac88);
  // крупные спинные щитки — в цвет спины
  const plate = countershade(new THREE.MeshPhysicalMaterial({
    map: scales.map, normalMap: scales.normalMap, color: 0xb0b8b0, roughness: 0.5, clearcoat: 0.3,
  }), 0x223a36, 0x8a9a88);
  const crest = new THREE.MeshPhysicalMaterial({ vertexColors: true, roughness: 0.45, clearcoat: 0.4, side: THREE.DoubleSide,
    emissive: 0x401000, emissiveIntensity: 0.25 });
  scaledMaterials = { skin, head, chitin: plate, crest, eye: base.eye, dark: base.dark };
  return scaledMaterials;
}

// гребень по средней линии черепа: контур макушки берётся из самой геометрии головы
let crestGeometry = null;
function getCrestGeometry() {
  if (crestGeometry) return crestGeometry;
  const position = getAlienHeadGeometry().attributes.position;
  const bins = new Map();
  for (let index = 0; index < position.count; index++) {
    if (Math.abs(position.getX(index)) > 0.012) continue;
    const z = position.getZ(index), y = position.getY(index);
    const key = Math.round(z * 200);
    if (!bins.has(key) || bins.get(key).y < y) bins.set(key, { z, y });
  }
  const top = [...bins.values()].filter((point) => point.y > 0.06).sort((a, b) => b.z - a.z);   // ото лба к затылку
  const front = top[0].z, back = top[top.length - 1].z;
  const from = front - (front - back) * 0.12, to = back + (front - back) * 0.03;
  const contour = top.filter((point) => point.z <= from && point.z >= to);
  const shape = new THREE.Shape();
  shape.moveTo(contour[0].z, contour[0].y - 0.012);
  const teeth = 7;
  for (let tooth = 0; tooth <= teeth * 2; tooth++) {
    const t = tooth / (teeth * 2);
    const point = contour[Math.min(contour.length - 1, Math.round(t * (contour.length - 1)))];
    const tall = Math.sin(Math.PI * Math.min(1, t * 1.1)) * 0.085 + 0.016;
    const lift = tooth % 2 === 1 ? tall : tall * 0.35;
    shape.lineTo(point.z - (tooth % 2 === 1 ? 0.012 : 0), point.y + lift);   // зубцы наклонены назад
  }
  for (let index = contour.length - 1; index >= 0; index -= 3) shape.lineTo(contour[index].z, contour[index].y - 0.012);
  const geometry = new THREE.ExtrudeGeometry(shape, { depth: 0.012, bevelEnabled: true, bevelThickness: 0.003, bevelSize: 0.003, bevelSegments: 2 });
  geometry.translate(0, 0, -0.006);
  geometry.rotateY(-Math.PI / 2);          // профиль (z, y) -> плоскость YZ головы
  // цвет: у основания тёмно-красный, к кончикам оранжево-жёлтый
  const positions = geometry.attributes.position;
  const colors = new Float32Array(positions.count * 3);
  const baseColor = new THREE.Color(0x8a1410), tipColor = new THREE.Color(0xffb020), color = new THREE.Color();
  let minY = Infinity, maxLift = 0;
  for (let index = 0; index < positions.count; index++) minY = Math.min(minY, positions.getY(index));
  for (let index = 0; index < positions.count; index++) {
    const z = -positions.getX(index);    // после поворота z профиля ушёл в -x
    const near = contour.reduce((best, point) => Math.abs(point.z - z) < Math.abs(best.z - z) ? point : best, contour[0]);
    const lift = Math.max(0, positions.getY(index) - near.y);
    maxLift = Math.max(maxLift, lift);
    colors[index * 3] = lift;
  }
  for (let index = 0; index < positions.count; index++) {
    color.copy(baseColor).lerp(tipColor, Math.min(1, colors[index * 3] / (maxLift * 0.8)));
    colors[index * 3] = color.r; colors[index * 3 + 1] = color.g; colors[index * 3 + 2] = color.b;
  }
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geometry.computeVertexNormals();
  crestGeometry = geometry;
  return geometry;
}

// складки кожи у суставов (неглубокие, без мешковатости одежды)
const SKIN = {
  thigh: (seed) => ({ seed, noiseAmp: 0.03, folds: [{ t: 0.88, amp: 0.05, width: 0.03 }], bulge: (t) => 0.14 * Math.sin(t * Math.PI * 0.85) }),
  shin: (seed) => ({ seed, noiseAmp: 0.03, folds: [{ t: 0.1, amp: 0.05, width: 0.03 }], bulge: (t) => 0.12 * Math.sin(t * Math.PI) * (1 - t * 0.5) }),
  upperArm: (seed) => ({ seed, noiseAmp: 0.03, folds: [{ t: 0.85, amp: 0.06, width: 0.03 }, { t: 0.92, amp: 0.05, width: 0.025 }], bulge: (t) => 0.16 * Math.sin(t * Math.PI * 0.9) }),
  forearm: (seed) => ({ seed, noiseAmp: 0.03, folds: [{ t: 0.1, amp: 0.06, width: 0.03 }], bulge: (t) => 0.12 * Math.sin(t * Math.PI * 0.7) }),
};

// уровень земли у лежащего на левом боку (координата x стоящей модели)
const DEAD_GROUND = -0.32;
// положение кончиков пальцев по щиколотке и наклону стопы (обратное к расчёту щиколотки в alien3.js)
function toeFromAnkle(ankle, pitch) {
  return ankle.clone().sub(V(0, 0.27, -0.15).applyEuler(new THREE.Euler(pitch, 0, 0)));
}

export const ALIEN_POSES = {
  idle: { pelvis: V(0, 1.16, 0), lean: 0.06, twist: 0.08, toes: [V(-0.17, 0, 0.14), V(0.17, 0, 0.02)], toePitch: [0, 0], headTilt: 0.02, armSwing: [0, 0] },
  // «вольно»: ноги прямые на ширине плеч (от бедра до щиколотки почти полная длина ноги, колено согнуто
  // примерно на 7°), корпус прямо, кисти сцеплены за спиной на пояснице
  ease: {
    pelvis: V(0, 1.265, -0.05), lean: 0.02, twist: 0, toes: [V(-0.18, 0, 0.08), V(0.18, 0, 0.08)], toePitch: [0, 0], headTilt: 0.05, armSwing: [0, 0],
    hands: [V(-0.06, 1.39, -0.27), V(0.06, 1.41, -0.28)], pistol: 'holster',
  },
  // погибший: поза до укладки на левый бок (dead.js поворачивает модель так, что ось x становится высотой,
  // земля — на уровне x ≈ DEAD_GROUND). Нижние рука и нога лежат на земле, верхняя нога согнута и опирается
  // коленом о землю перед телом, верхняя рука свешена вперёд на землю, голова склонена к земле, хвост лежит.
  dead: {
    pelvis: V(0, 1.06, 0), lean: 0.25, twist: 0, headTilt: 0.3, headRoll: 0.9, armSwing: [0, 0],
    toes: [toeFromAnkle(V(-0.26, 0.25, 0.1), 0.6), toeFromAnkle(V(-0.25, 0.36, 0.3), 0.6)], toePitch: [0.6, 0.6],
    kneePoles: [V(0.2, 0, 1), V(-0.8, 0, 1)],
    hands: [V(-0.22, 1.42, 0.62), V(-0.1, 1.15, 0.55)], elbowPoles: [V(0, -1, 0.5), V(-0.2, -0.3, 1)],
    tailLevel: DEAD_GROUND, pistol: 'none',
  },
  // фигура для экрана снаряжения: как «вольно», но без пистолета в кобуре
  doll: {
    pelvis: V(0, 1.265, -0.05), lean: 0.02, twist: 0, toes: [V(-0.18, 0, 0.08), V(0.18, 0, 0.08)], toePitch: [0, 0], headTilt: 0.05, armSwing: [0, 0],
    hands: [V(-0.06, 1.39, -0.27), V(0.06, 1.41, -0.28)], pistol: 'none',
  },
  // прицеливание: правая рука с пистолетом вытянута вперёд на уровне плеча, левая опущена, правая нога позади
  aim: {
    pelvis: V(0, 1.15, 0), lean: 0.08, twist: 0.18, toes: [V(-0.18, 0, 0.16), V(0.17, 0, -0.12)], toePitch: [0, 0.2], headTilt: 0.1, armSwing: [0, 0],
    hands: [null, V(0.05, 1.62, 0.6)], elbowPoles: [null, V(1, -0.4, 0)], aim: true,
  },
};

// цикл ходьбы: phase 0..1 (два шага), шаг 0.6 м, за цикл 1.2 м
export const ALIEN_STRIDE = 1.2;
export function alienWalkCycle(phase) {
  const half = ALIEN_STRIDE / 4;
  const smooth = (value) => value * value * (3 - 2 * value);
  const leg = (offset) => {
    const q = (phase + offset) % 1;
    if (q < 0.5) return { z: half - (q / 0.5) * half * 2, y: 0, pitch: 0 };
    const s = (q - 0.5) / 0.5;
    return { z: -half + half * 2 * smooth(s), y: 0.15 * Math.sin(Math.PI * s), pitch: -0.4 * Math.sin(Math.PI * s) };
  };
  const left = leg(0), right = leg(0.5);
  const bob = Math.cos(phase * Math.PI * 4);
  return {
    pelvis: V(0, 1.1 + 0.025 * bob, 0.03),
    lean: 0.14,
    twist: 0.1 * Math.sin(phase * Math.PI * 2),
    toes: [V(-0.16, left.y, left.z), V(0.16, right.y, right.z)],
    toePitch: [left.pitch, right.pitch],
    headTilt: 0.04,
    // руки качаются навстречу ногам
    armSwing: [-(left.z / half) * 0.35, -(right.z / half) * 0.35],
  };
}

export function buildStockyAlien(pose = 'idle') {
  const spec = typeof pose === 'string' ? ALIEN_POSES[pose] : pose;
  const materials = alienScaleMaterials();
  const alien = new THREE.Group();
  const add = (object) => { alien.add(object); return object; };
  const pelvis = spec.pelvis.clone();
  const torsoQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(spec.lean, spec.twist, 0, 'YXZ'));
  const local = (x, y, z) => V(x, y, z).applyQuaternion(torsoQuat).add(pelvis);
  const oriented = (mesh) => { mesh.quaternion.copy(torsoQuat); return mesh; };

  // таз, живот, грудная клетка
  oriented(add(ball(pelvis, 0.16, materials.skin, [1.25, 0.78, 0.95], 18)));
  oriented(add(ball(local(0, 0.2, 0.02), 0.17, materials.skin, [1.05, 1.15, 0.88], 18)));
  oriented(add(ball(local(0, 0.46, 0.0), 0.22, materials.skin, [1.12, 1.12, 0.82], 22)));
  // ключичный валик и трапеции
  oriented(add(ball(local(0, 0.6, -0.01), 1, materials.skin, [0.24, 0.07, 0.11], 16)));
  // биологические хитиновые пластины: грудина, наплечья, хребет
  oriented(add(ball(local(0, 0.5, 0.11), 0.13, materials.chitin, [1.05, 0.8, 0.42], 16)));
  for (let plate = 0; plate < 6; plate++) {
    const spine = oriented(add(ball(local(0, 0.12 + plate * 0.09, -0.135 - Math.sin(plate / 5 * Math.PI) * 0.03), 0.042, materials.skin, [1.3, 0.7, 0.3], 10)));
    spine.rotateX(0.5);
  }
  const shoulders = [local(-0.21, 0.58, 0), local(0.21, 0.58, 0)];
  shoulders.forEach((shoulder, side) => {
    const pauldron = oriented(add(ball(shoulder.clone().add(V(side ? 0.01 : -0.01, 0.03, 0)), 0.088, materials.skin, [1.0, 0.55, 1.08], 14)));
    pauldron.rotateZ(side ? -0.35 : 0.35);
  });

  // шея и голова
  const neckBase = local(0, 0.6, 0.02);
  const headQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(spec.headTilt, -spec.twist * 0.6, 0, 'YXZ'));
  const headBase = neckBase.clone().add(V(0, 0.22, 0.05).applyQuaternion(headQuat));
  add(segment(neckBase, headBase, 0.075, 0.05, materials.skin, 12));
  for (const side of [-1, 1]) add(segment(neckBase.clone().add(V(side * 0.05, 0, 0.02)), headBase.clone().add(V(side * 0.025, -0.02, 0.03)), 0.022, 0.014, materials.skin, 8));
  const headLocal = (x, y, z) => V(x, y, z).applyQuaternion(headQuat).add(headBase);
  const skull = add(new THREE.Mesh(getAlienHeadGeometry(), materials.head));
  skull.position.copy(headLocal(0, 0.09, 0));
  skull.quaternion.copy(headQuat);
  skull.scale.setScalar(1.12);
  const crest = add(new THREE.Mesh(getCrestGeometry(), materials.crest));
  crest.position.copy(skull.position);
  crest.quaternion.copy(headQuat);
  crest.scale.setScalar(1.12);
  for (const side of [-1, 1]) {
    const eye = add(ball(headLocal(side * 0.052, 0.11, 0.107), 1, materials.eye, [0.05, 0.027, 0.022], 16));
    eye.quaternion.copy(headQuat); eye.rotateZ(side * 0.42); eye.rotateY(side * 0.45);
  }
  const mouth = add(new THREE.Mesh(new THREE.BoxGeometry(0.034, 0.005, 0.01), materials.dark));
  mouth.position.copy(headLocal(0, -0.045, 0.085)); mouth.quaternion.copy(headQuat);

  // руки: висят и качаются при ходьбе
  [0, 1].forEach((side) => {
    const sign = side ? 1 : -1;
    const shoulder = shoulders[side];
    const swing = spec.armSwing[side];
    const hand = shoulder.clone().add(V(sign * 0.08, -0.62, 0.06 + swing * 0.5).applyQuaternion(torsoQuat));
    const elbow = solveTwoBone(shoulder, hand, 0.36, 0.36, V(sign * 0.3, 0, -1).applyQuaternion(torsoQuat));
    add(ball(shoulder, 0.088, materials.skin, [1, 1, 1], 14));
    add(clothLimb(shoulder, elbow, 0.085, 0.06, materials.skin, SKIN.upperArm(side * 3 + 1)));
    add(ball(elbow, 0.06, materials.skin, [1, 1, 1], 12));
    add(clothLimb(elbow, hand, 0.062, 0.043, materials.skin, SKIN.forearm(side * 3 + 2)));
    add(ball(hand, 0.042, materials.skin, [1, 0.8, 1.15], 12));
    const forward = new THREE.Vector3().subVectors(hand, elbow).normalize();
    for (let finger = -1; finger <= 1; finger++) {
      const base = hand.clone().add(V(finger * 0.022, -0.015, 0.01).applyQuaternion(torsoQuat));
      const tip = base.clone().add(forward.clone().multiplyScalar(0.11)).add(V(0, -0.02, 0.03).applyQuaternion(torsoQuat));
      add(segment(base, tip, 0.014, 0.008, materials.skin, 6));
    }
  });

  // ноги: бедро, голень, плюсна, три пальца
  const hips = [local(-0.13, -0.04, 0), local(0.13, -0.04, 0)];
  [0, 1].forEach((side) => {
    const hip = hips[side];
    const toe = spec.toes[side].clone();
    const toeQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(spec.toePitch[side], 0, 0));
    const ankle = toe.clone().add(V(0, 0.27, -0.15).applyQuaternion(toeQuat));
    const knee = solveTwoBone(hip, ankle, 0.5, 0.46, V(0, 0, 1));
    add(ball(hip, 0.14, materials.skin, [1, 1, 1], 14));
    add(clothLimb(hip, knee, 0.14, 0.085, materials.skin, SKIN.thigh(side * 5 + 7)));
    add(ball(knee, 0.082, materials.skin, [1, 1, 1], 12));
    add(clothLimb(knee, ankle, 0.08, 0.052, materials.skin, SKIN.shin(side * 5 + 9)));
    add(ball(ankle, 0.052, materials.chitin, [1, 1, 1], 10));
    add(segment(ankle, toe.clone().add(V(0, 0.025, 0)), 0.052, 0.04, materials.skin, 10));
    add(ball(toe.clone().add(V(0, 0.025, 0)), 0.04, materials.skin, [1.2, 0.7, 1.2], 10));
    for (let digit = -1; digit <= 1; digit++) {
      add(segment(toe.clone().add(V(digit * 0.03, 0.022, 0.01)), toe.clone().add(V(digit * 0.055, 0.008, 0.12).applyQuaternion(toeQuat)), 0.019, 0.01, materials.chitin, 6));
    }
    const kneePlate = add(ball(knee.clone().add(V(0, 0.02, 0.035)), 0.06, materials.chitin, [0.95, 1.1, 0.6], 10));
    kneePlate.castShadow = true;
  });

  setShadows(alien);
  alien.userData.head = headBase.clone().add(V(0, 0.1, 0));
  return alien;
}
