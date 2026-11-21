// Бойцы, оружие и пришельцы (собраны из примитивов, позы через ИК).
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { segment, ball, solveTwoBone, camoTexture, webbingTexture, alienSkinTextures, chitinTextures, setShadows } from './lib.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);

function box(width, height, depth, material, radius = 0.01) {
  const mesh = new THREE.Mesh(new RoundedBoxGeometry(width, height, depth, 2, Math.min(radius, width / 2.2, height / 2.2, depth / 2.2)), material);
  mesh.castShadow = mesh.receiveShadow = true;
  return mesh;
}

// ---------- материалы ----------

const cache = {};
export function soldierMaterials(camo) {
  if (cache[camo]) return cache[camo];
  const black = camo === 'black';
  const camoMap = black
    ? camoTexture([[52, 56, 60], [96, 102, 106], [30, 32, 35], [72, 78, 80], [118, 122, 118]], { seed: 4, scale: 5 })
    : camoTexture([[92, 96, 68], [120, 118, 90], [66, 76, 46], [96, 82, 60], [54, 62, 40]], { seed: 9, scale: 6 });
  camoMap.repeat.set(3, 3);
  const gearMap = black ? webbingTexture([58, 60, 60], 5) : webbingTexture([92, 92, 68], 6);
  const materials = {
    cloth: new THREE.MeshStandardMaterial({ map: camoMap, roughness: 0.92, metalness: 0 }),
    gear: new THREE.MeshStandardMaterial({ map: gearMap, roughness: 0.85, metalness: 0 }),
    gearDark: new THREE.MeshStandardMaterial({ color: black ? 0x2c2f31 : 0x4a4c36, roughness: 0.8 }),
    plastic: new THREE.MeshStandardMaterial({ color: 0x17191b, roughness: 0.55, metalness: 0.1 }),
    helmet: new THREE.MeshStandardMaterial({ map: camoMap, color: 0xcccccc, roughness: 0.75, metalness: 0.05 }),
    glove: new THREE.MeshStandardMaterial({ color: black ? 0x1b1c1e : 0x8a6e4c, roughness: 0.8 }),
    boot: new THREE.MeshStandardMaterial({ color: black ? 0x151617 : 0x57534a, roughness: 0.75 }),
    sole: new THREE.MeshStandardMaterial({ color: 0x101010, roughness: 0.9 }),
    earPro: new THREE.MeshStandardMaterial({ color: 0x55573e, roughness: 0.6 }),
    lens: new THREE.MeshPhysicalMaterial({ color: 0x0b1416, roughness: 0.05, metalness: 0.6, clearcoat: 1 }),
    goggle: new THREE.MeshPhysicalMaterial({ color: 0xd8a860, roughness: 0.15, metalness: 0.3, clearcoat: 1, transparent: true, opacity: 0.85 }),
    scarf: new THREE.MeshStandardMaterial({ map: camoMap, color: black ? 0x8090a8 : 0xb8b8a0, roughness: 0.95 }),
    patch: new THREE.MeshStandardMaterial({ color: 0x6a6e72, roughness: 0.9 }),
  };
  cache[camo] = materials;
  return materials;
}

export const gunMaterials = {
  metal: new THREE.MeshStandardMaterial({ color: 0x26282a, roughness: 0.42, metalness: 0.7 }),
  polymer: new THREE.MeshStandardMaterial({ color: 0x1a1b1c, roughness: 0.6, metalness: 0.1 }),
  tan: new THREE.MeshStandardMaterial({ color: 0x8c7a5c, roughness: 0.7, metalness: 0.05 }),
  glass: new THREE.MeshPhysicalMaterial({ color: 0x1a3a4a, roughness: 0.05, metalness: 0.8, clearcoat: 1 }),
};

// ---------- винтовка (вдоль +z, приклад в начале координат) ----------

export function buildRifle({ tanFurniture = false, suppressor = false } = {}) {
  const rifle = new THREE.Group();
  const metal = gunMaterials.metal;
  const furniture = tanFurniture ? gunMaterials.tan : gunMaterials.polymer;
  const add = (mesh, x, y, z, rx = 0) => { mesh.position.set(x, y, z); mesh.rotation.x = rx; rifle.add(mesh); return mesh; };
  add(box(0.045, 0.1, 0.06, furniture, 0.012), 0, -0.02, 0.03);           // затыльник
  add(box(0.04, 0.06, 0.17, furniture, 0.01), 0, 0.0, 0.13);              // приклад
  add(new THREE.Mesh(new THREE.CylinderGeometry(0.017, 0.017, 0.12, 12).rotateX(Math.PI / 2), metal), 0, 0.02, 0.25);
  add(box(0.042, 0.065, 0.2, metal, 0.008), 0, 0.0, 0.38);                 // нижняя часть
  add(box(0.046, 0.05, 0.24, metal, 0.008), 0, 0.05, 0.39);                // верхняя часть
  add(box(0.03, 0.1, 0.04, furniture, 0.01), 0, -0.07, 0.31, -0.3);        // рукоять
  add(box(0.028, 0.16, 0.065, furniture, 0.008), 0, -0.1, 0.44, 0.2);      // магазин
  add(box(0.056, 0.058, 0.32, metal, 0.01), 0, 0.04, 0.66);                // цевьё
  for (let rail = 0; rail < 9; rail++) add(box(0.03, 0.008, 0.02, metal, 0.002), 0, 0.074, 0.53 + rail * 0.032);
  add(box(0.03, 0.05, 0.05, furniture, 0.01), 0, -0.015, 0.6);             // передняя рукоять-упор
  add(new THREE.Mesh(new THREE.CylinderGeometry(0.011, 0.011, 0.16, 10).rotateX(Math.PI / 2), metal), 0, 0.04, 0.88);
  if (suppressor) add(new THREE.Mesh(new THREE.CylinderGeometry(0.019, 0.019, 0.17, 14).rotateX(Math.PI / 2), metal), 0, 0.04, 1.02);
  else add(new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.016, 0.05, 10).rotateX(Math.PI / 2), metal), 0, 0.04, 0.97);
  // прицел
  add(box(0.03, 0.025, 0.06, metal, 0.005), 0, 0.087, 0.42);
  add(new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.11, 14).rotateX(Math.PI / 2), metal), 0, 0.115, 0.42);
  add(new THREE.Mesh(new THREE.CircleGeometry(0.018, 14), gunMaterials.glass), 0, 0.115, 0.476);
  add(box(0.02, 0.03, 0.04, furniture, 0.006), 0.03, 0.05, 0.72);          // фонарь
  setShadows(rifle);
  rifle.userData = { grip: V(0, -0.075, 0.305), support: V(-0.01, -0.03, 0.6), muzzle: V(0, 0.04, suppressor ? 1.11 : 1.0) };
  return rifle;
}

// ---------- боец ----------

const POSES = {
  standAim: { pelvis: V(0, 0.95, 0), lean: 0.12, twist: 0.32, feet: [V(-0.15, 0.09, 0.24), V(0.17, 0.09, -0.2)], footPitch: [0, 0.15], kneePole: [V(0, 0, 1), V(0.2, 0, 1)], aimPitch: 0.02, ready: 'aim' },
  kneelAim: { pelvis: V(0.02, 0.6, -0.06), lean: 0.2, twist: 0.36, feet: [V(-0.15, 0.09, 0.38), V(0.17, 0.12, -0.5)], footPitch: [0, 1.0], kneePole: [V(0, 0.2, 1), V(0, -1, 0.5)], aimPitch: 0.05, ready: 'aim' },
  crouchAim: { pelvis: V(0, 0.56, -0.12), lean: 0.38, twist: 0.3, feet: [V(-0.16, 0.09, 0.24), V(0.18, 0.09, -0.12)], footPitch: [0, 0.35], kneePole: [V(-0.3, 0, 1), V(0.3, 0, 1)], aimPitch: 0.12, ready: 'aim' },
  walk: { pelvis: V(0, 0.92, 0), lean: 0.16, twist: 0.22, feet: [V(-0.12, 0.09, 0.3), V(0.13, 0.16, -0.3)], footPitch: [-0.1, 0.55], kneePole: [V(0, 0, 1), V(0, 0, 1)], aimPitch: -0.5, ready: 'low' },
};

export function buildSoldier({ camo = 'black', pose = 'standAim', nvg = false, goggles = false, scarf = false, pack = true, tanRifle = false, suppressor = false } = {}) {
  const spec = POSES[pose];
  const materials = soldierMaterials(camo);
  const soldier = new THREE.Group();
  const add = (object) => { soldier.add(object); return object; };

  // туловище
  const pelvis = spec.pelvis.clone();
  const torsoQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(spec.lean, spec.twist, 0, 'YXZ'));
  const local = (x, y, z, origin = pelvis, quat = torsoQuat) => V(x, y, z).applyQuaternion(quat).add(origin);
  const chest = local(0, 0.32, 0);
  const pelvisQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(spec.lean * 0.3, spec.twist * 0.5, 0, 'YXZ'));

  const hips = add(box(0.34, 0.22, 0.22, materials.cloth, 0.07));
  hips.position.copy(pelvis); hips.quaternion.copy(pelvisQuat);
  const belt = add(box(0.33, 0.06, 0.23, materials.gearDark, 0.02));
  belt.position.copy(local(0, 0.08, 0, pelvis, pelvisQuat)); belt.quaternion.copy(pelvisQuat);
  for (const [x, z] of [[-0.17, 0.02], [0.17, -0.02], [0.08, -0.12], [-0.08, -0.12]]) {
    const pouch = add(box(0.06, 0.09, 0.06, materials.gear, 0.012));
    pouch.position.copy(local(x, 0.03, z, pelvis, pelvisQuat)); pouch.quaternion.copy(pelvisQuat);
  }
  const abdomen = add(segment(local(0, 0.08, 0), local(0, 0.24, 0), 0.13, 0.15, materials.cloth, 12));
  abdomen.scale.set(1, 1, 0.75);
  const torso = add(box(0.36, 0.38, 0.22, materials.cloth, 0.08));
  torso.position.copy(chest); torso.quaternion.copy(torsoQuat);

  // плитник и подсумки
  const plateFront = add(box(0.33, 0.33, 0.06, materials.gear, 0.02));
  plateFront.position.copy(local(0, 0.33, 0.12)); plateFront.quaternion.copy(torsoQuat);
  const plateBack = add(box(0.33, 0.35, 0.06, materials.gear, 0.02));
  plateBack.position.copy(local(0, 0.34, -0.12)); plateBack.quaternion.copy(torsoQuat);
  for (const side of [-1, 1]) {
    const cummerbund = add(box(0.06, 0.18, 0.2, materials.gear, 0.015));
    cummerbund.position.copy(local(side * 0.18, 0.26, 0)); cummerbund.quaternion.copy(torsoQuat);
    const strap = add(box(0.05, 0.03, 0.26, materials.gearDark, 0.01));
    strap.position.copy(local(side * 0.11, 0.5, 0)); strap.quaternion.copy(torsoQuat);
  }
  for (let index = 0; index < 3; index++) {
    const pouch = add(box(0.075, 0.13, 0.055, materials.gear, 0.012));
    pouch.position.copy(local(-0.09 + index * 0.09, 0.24, 0.17)); pouch.quaternion.copy(torsoQuat);
    const flap = add(box(0.077, 0.03, 0.06, materials.gearDark, 0.008));
    flap.position.copy(local(-0.09 + index * 0.09, 0.305, 0.172)); flap.quaternion.copy(torsoQuat);
  }
  const admin = add(box(0.15, 0.08, 0.04, materials.gearDark, 0.01));
  admin.position.copy(local(0, 0.39, 0.165)); admin.quaternion.copy(torsoQuat);
  const radio = add(box(0.07, 0.15, 0.06, materials.plastic, 0.012));
  radio.position.copy(local(-0.2, 0.36, -0.06)); radio.quaternion.copy(torsoQuat);
  const antenna = add(segment(local(-0.2, 0.42, -0.08), local(-0.24, 0.72, -0.16), 0.005, 0.003, materials.plastic, 5));
  antenna.castShadow = false;
  const patch = add(box(0.07, 0.045, 0.01, materials.patch, 0.004));
  patch.position.copy(local(0.08, 0.43, 0.15)); patch.quaternion.copy(torsoQuat);
  if (pack) {
    const backpack = add(box(0.27, 0.3, 0.13, materials.gear, 0.04));
    backpack.position.copy(local(0, 0.35, -0.21)); backpack.quaternion.copy(torsoQuat);
    const top = add(box(0.24, 0.07, 0.12, materials.gearDark, 0.03));
    top.position.copy(local(0, 0.52, -0.21)); top.quaternion.copy(torsoQuat);
  }

  // голова
  const neckBase = local(0, 0.55, 0.0);
  const headQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(spec.ready === 'aim' ? 0.15 : 0.05, -spec.twist * 0.85, spec.ready === 'aim' ? 0.12 : 0, 'YXZ'));
  const headCenter = neckBase.clone().add(V(0, 0.15, 0.02).applyQuaternion(headQuat));
  if (spec.ready === 'aim') headCenter.add(V(0.03, -0.02, 0.03));
  const headLocal = (x, y, z) => V(x, y, z).applyQuaternion(headQuat).add(headCenter);
  add(segment(neckBase, headCenter, 0.06, 0.055, materials.scarf, 10));
  add(ball(headCenter, 0.1, materials.scarf, [0.95, 1.08, 1.0], 16));
  if (scarf) {
    const wrap = add(new THREE.Mesh(new THREE.TorusGeometry(0.085, 0.045, 8, 16), materials.scarf));
    wrap.position.copy(neckBase.clone().add(V(0, 0.03, 0.02))); wrap.quaternion.copy(torsoQuat); wrap.rotateX(Math.PI / 2);
    wrap.castShadow = true;
    const tail = add(box(0.12, 0.16, 0.03, materials.scarf, 0.012));
    tail.position.copy(local(0.02, 0.47, 0.15)); tail.quaternion.copy(torsoQuat); tail.rotateZ(0.2);
  }
  const helmet = add(new THREE.Mesh(new THREE.SphereGeometry(0.128, 20, 12, 0, Math.PI * 2, 0, Math.PI * 0.56), materials.helmet));
  helmet.position.copy(headLocal(0, 0.02, -0.005)); helmet.quaternion.copy(headQuat); helmet.scale.set(1, 0.95, 1.08);
  helmet.castShadow = true;
  for (const side of [-1, 1]) {
    const rail = add(box(0.012, 0.025, 0.14, materials.plastic, 0.004));
    rail.position.copy(headLocal(side * 0.125, 0.02, 0)); rail.quaternion.copy(headQuat);
    const cup = add(new THREE.Mesh(new THREE.CylinderGeometry(0.048, 0.05, 0.045, 16).rotateZ(Math.PI / 2), materials.earPro));
    cup.position.copy(headLocal(side * 0.118, -0.03, 0)); cup.quaternion.copy(headQuat); cup.castShadow = true;
  }
  const band = add(box(0.27, 0.015, 0.03, materials.earPro, 0.005));
  band.position.copy(headLocal(0, 0.1, 0)); band.quaternion.copy(headQuat);
  const shroud = add(box(0.04, 0.035, 0.02, materials.plastic, 0.006));
  shroud.position.copy(headLocal(0, 0.06, 0.13)); shroud.quaternion.copy(headQuat);
  if (nvg) {
    for (const side of [-1, 1]) {
      const tube = add(new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.02, 0.07, 12), materials.plastic));
      tube.position.copy(headLocal(side * 0.025, 0.1, 0.135)); tube.quaternion.copy(headQuat); tube.rotateX(-0.4);
    }
  }
  if (goggles) {
    const lens = add(box(0.17, 0.05, 0.03, materials.goggle, 0.015));
    lens.position.copy(headLocal(0, 0.01, 0.1)); lens.quaternion.copy(headQuat);
  } else {
    const glasses = add(box(0.15, 0.035, 0.02, materials.lens, 0.01));
    glasses.position.copy(headLocal(0, 0.005, 0.098)); glasses.quaternion.copy(headQuat);
  }
  const mic = add(segment(headLocal(0.11, -0.04, 0.02), headLocal(0.05, -0.07, 0.1), 0.004, 0.004, materials.plastic, 5));
  mic.castShadow = false;

  // оружие
  const shoulders = [local(-0.19, 0.47, 0.0), local(0.19, 0.47, 0.0)];
  const rifle = buildRifle({ tanFurniture: tanRifle, suppressor });
  const aimQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(-spec.aimPitch, spec.ready === 'aim' ? 0 : -0.45, spec.ready === 'aim' ? -0.05 : 0, 'YXZ'));
  rifle.quaternion.copy(aimQuat);
  const buttPosition = spec.ready === 'aim'
    ? shoulders[1].clone().add(V(-0.07, -0.03, 0.07))
    : shoulders[1].clone().add(V(-0.04, -0.1, 0.1));
  rifle.position.copy(buttPosition);
  add(rifle);
  rifle.updateMatrixWorld(true);
  const hands = [rifle.localToWorld(rifle.userData.support.clone()), rifle.localToWorld(rifle.userData.grip.clone())];

  // руки
  const elbowPoles = [V(-0.9, -1, -0.1).applyQuaternion(torsoQuat), V(0.8, -1, -0.3).applyQuaternion(torsoQuat)];
  [0, 1].forEach((side) => {
    const shoulder = shoulders[side];
    const elbow = solveTwoBone(shoulder, hands[side], 0.29, 0.28, elbowPoles[side]);
    add(ball(shoulder, 0.068, materials.cloth));
    add(segment(shoulder, elbow, 0.064, 0.054, materials.cloth));
    add(ball(elbow, 0.054, materials.cloth));
    add(segment(elbow, hands[side], 0.052, 0.042, materials.cloth));
    const glove = add(box(0.06, 0.045, 0.1, materials.glove, 0.018));
    glove.position.copy(hands[side]);
    glove.quaternion.copy(rifle.quaternion);
    const pad = add(ball(shoulder.clone().add(V(side ? 0.03 : -0.03, 0.02, 0)), 0.07, materials.gearDark, [1, 0.6, 1]));
    pad.quaternion.copy(torsoQuat);
  });

  // ноги
  const hipsJoints = [local(-0.1, -0.05, 0, pelvis, pelvisQuat), local(0.1, -0.05, 0, pelvis, pelvisQuat)];
  [0, 1].forEach((side) => {
    const hip = hipsJoints[side];
    const ankle = spec.feet[side];
    const knee = solveTwoBone(hip, ankle, 0.45, 0.45, spec.kneePole[side]);
    add(segment(hip, knee, 0.1, 0.074, materials.cloth, 12));
    add(ball(knee, 0.072, materials.cloth));
    add(segment(knee, ankle, 0.07, 0.056, materials.cloth, 12));
    // наколенник
    const kneeDirection = new THREE.Vector3().subVectors(ankle, knee).normalize();
    const thighDirection = new THREE.Vector3().subVectors(knee, hip).normalize();
    const outward = thighDirection.clone().sub(kneeDirection).normalize();
    const padMesh = add(box(0.11, 0.13, 0.05, materials.plastic, 0.02));
    padMesh.position.copy(knee.clone().add(outward.multiplyScalar(0.05)));
    padMesh.quaternion.setFromUnitVectors(V(0, 0, 1), outward.clone().normalize());
    // ботинок
    const boot = add(box(0.11, 0.11, 0.27, materials.boot, 0.035));
    const bootQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(spec.footPitch[side], spec.twist * 0.3 * (side ? 1 : 0.5), 0, 'YXZ'));
    boot.quaternion.copy(bootQuat);
    boot.position.copy(ankle.clone().add(V(0, -0.04, 0.07).applyQuaternion(bootQuat)));
    const sole = add(box(0.115, 0.025, 0.28, materials.sole, 0.01));
    sole.quaternion.copy(bootQuat);
    sole.position.copy(ankle.clone().add(V(0, -0.095, 0.07).applyQuaternion(bootQuat)));
    // набедренная кобура у правой ноги
    if (side === 1) {
      const holster = add(box(0.06, 0.17, 0.11, materials.plastic, 0.015));
      holster.position.copy(hip.clone().lerp(knee, 0.35).add(V(0.09, 0, 0).applyQuaternion(pelvisQuat)));
      holster.quaternion.setFromUnitVectors(V(0, -1, 0), thighDirection);
    }
  });

  soldier.userData = { head: headCenter.clone(), muzzle: rifle.localToWorld(rifle.userData.muzzle.clone()), rifle };
  return soldier;
}

// ---------- пришелец ----------

let alienMats = null;
function alienMaterials() {
  if (alienMats) return alienMats;
  const skin = alienSkinTextures();
  const chitin = chitinTextures();
  alienMats = {
    skin: new THREE.MeshPhysicalMaterial({ map: skin.map, normalMap: skin.normalMap, color: 0xb4c0bc, roughness: 0.5, metalness: 0, sheen: 0.5, sheenColor: new THREE.Color(0x9fc8d0), sheenRoughness: 0.5, clearcoat: 0.3, clearcoatRoughness: 0.35 }),
    chitin: new THREE.MeshPhysicalMaterial({ map: chitin.map, normalMap: chitin.normalMap, roughness: 0.3, metalness: 0.2, clearcoat: 0.8, clearcoatRoughness: 0.2 }),
    eye: new THREE.MeshPhysicalMaterial({ color: 0x030405, roughness: 0.04, metalness: 0.1, clearcoat: 1, clearcoatRoughness: 0.02 }),
    dark: new THREE.MeshStandardMaterial({ color: 0x1a1e20, roughness: 0.7 }),
    bone: new THREE.MeshPhysicalMaterial({ color: 0x4a4a42, roughness: 0.4, metalness: 0.3, clearcoat: 0.6 }),
    glow: new THREE.MeshStandardMaterial({ color: 0xd9a6ff, emissive: 0xb050ff, emissiveIntensity: 4, roughness: 0.3 }),
    harness: new THREE.MeshStandardMaterial({ color: 0x2c2a30, roughness: 0.6, metalness: 0.4 }),
  };
  return alienMats;
}

export function buildAlienWeapon() {
  const materials = alienMaterials();
  const weapon = new THREE.Group();
  const shell = new THREE.Mesh(new THREE.SphereGeometry(1, 20, 12), materials.bone);
  shell.scale.set(0.055, 0.065, 0.3);
  shell.position.z = 0.28;
  weapon.add(shell);
  for (let ring = 0; ring < 3; ring++) {
    const coil = new THREE.Mesh(new THREE.TorusGeometry(0.04 - ring * 0.006, 0.009, 8, 20), materials.glow);
    coil.position.z = 0.36 + ring * 0.09;
    weapon.add(coil);
  }
  for (const side of [-1, 1]) {
    const prong = new THREE.Mesh(new THREE.ConeGeometry(0.012, 0.16, 6).rotateX(Math.PI / 2), materials.chitin);
    prong.position.set(side * 0.03, 0.01, 0.68);
    weapon.add(prong);
  }
  const emitter = new THREE.Mesh(new THREE.SphereGeometry(0.022, 12, 8), materials.glow);
  emitter.position.z = 0.66;
  weapon.add(emitter);
  const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.022, 0.11, 8), materials.chitin);
  grip.position.set(0, -0.07, 0.2);
  grip.rotation.x = 0.4;
  weapon.add(grip);
  setShadows(weapon);
  weapon.userData = { grip: V(0, -0.08, 0.2), support: V(0, -0.03, 0.46), muzzle: V(0, 0, 0.72) };
  return weapon;
}

// голова: купол, вытянутый назад и вверх, сужение к подбородку
let alienHeadGeometry = null;
function getAlienHeadGeometry() {
  if (alienHeadGeometry) return alienHeadGeometry;
  const geometry = new THREE.SphereGeometry(1, 36, 28);
  const position = geometry.attributes.position;
  for (let index = 0; index < position.count; index++) {
    let x = position.getX(index), y = position.getY(index), z = position.getZ(index);
    if (z < 0) {
      const back = -z;
      z = -back * (1.55 + 0.45 * Math.max(0, y));
      y += back * back * 0.55;
      x *= 1 - back * 0.12;
    }
    if (y < 0) {
      const low = -y;
      x *= 1 - 0.58 * low;
      z = z > 0 ? z * (1 - 0.1 * low) : z * (1 - 0.5 * low);
      y *= 1.45;
    }
    position.setXYZ(index, x * 0.108, y * 0.118, z * 0.112);
  }
  geometry.computeVertexNormals();
  alienHeadGeometry = geometry;
  return geometry;
}

const ALIEN_POSES = {
  aim: { pelvis: V(0, 1.08, 0), lean: 0.1, twist: 0.25, feet: [V(-0.16, 0.0, 0.32), V(0.18, 0.0, -0.18)], weapon: 'aim', headTilt: 0.15 },
  stand: { pelvis: V(0, 1.1, 0), lean: 0.05, twist: 0, feet: [V(-0.15, 0.0, 0.12), V(0.15, 0.0, -0.05)], weapon: 'low', headTilt: -0.05 },
  crouch: { pelvis: V(0, 0.7, -0.1), lean: 0.45, twist: 0.2, feet: [V(-0.18, 0.0, 0.3), V(0.2, 0.0, 0.05)], weapon: 'aim', headTilt: 0.35 },
  console: { pelvis: V(0, 1.08, 0), lean: 0.3, twist: 0, feet: [V(-0.14, 0.0, 0.08), V(0.14, 0.0, -0.02)], weapon: 'none', headTilt: 0.45 },
};

export function buildAlien(pose = 'aim') {
  const spec = ALIEN_POSES[pose];
  const materials = alienMaterials();
  const alien = new THREE.Group();
  const add = (object) => { alien.add(object); return object; };
  const pelvis = spec.pelvis.clone();
  const torsoQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(spec.lean, spec.twist, 0, 'YXZ'));
  const local = (x, y, z, origin = pelvis, quat = torsoQuat) => V(x, y, z).applyQuaternion(quat).add(origin);

  // таз и позвоночник
  add(ball(pelvis, 0.11, materials.skin, [1.15, 0.7, 0.85]));
  const waist = local(0, 0.18, 0);
  add(segment(pelvis, waist, 0.075, 0.065, materials.skin, 10));
  const chestCenter = local(0, 0.43, 0.01);
  const ribcage = add(ball(chestCenter, 0.17, materials.skin, [0.95, 1.25, 0.72], 16));
  ribcage.quaternion.copy(torsoQuat);
  const belly = add(ball(local(0, 0.22, 0.02), 0.1, materials.skin, [0.85, 1.2, 0.7], 14));
  belly.quaternion.copy(torsoQuat);
  // хитиновые пластины
  const chestPlate = add(ball(local(0, 0.5, 0.06), 0.13, materials.chitin, [1.0, 0.7, 0.45]));
  chestPlate.quaternion.copy(torsoQuat);
  for (let plate = 0; plate < 5; plate++) {
    const spine = add(box(0.05, 0.05, 0.06, materials.chitin, 0.02));
    spine.position.copy(local(0, 0.2 + plate * 0.09, -0.12)); spine.quaternion.copy(torsoQuat); spine.rotateX(0.5);
  }
  const shoulders = [local(-0.165, 0.57, 0), local(0.165, 0.57, 0)];
  const collar = add(ball(local(0, 0.58, 0), 1, materials.skin, [0.19, 0.05, 0.075], 14));
  collar.quaternion.copy(torsoQuat);
  shoulders.forEach((shoulder, side) => {
    const pauldron = add(ball(shoulder.clone().add(V(side ? 0.01 : -0.01, 0.03, 0)), 0.068, materials.chitin, [0.95, 0.7, 1.1]));
    pauldron.quaternion.copy(torsoQuat); pauldron.rotateZ(side ? -0.35 : 0.35);
  });
  const harness = add(new THREE.Mesh(new THREE.TorusGeometry(0.085, 0.014, 8, 20), materials.harness));
  harness.position.copy(local(0, 0.1, 0)); harness.quaternion.copy(torsoQuat); harness.rotateX(Math.PI / 2);
  harness.scale.set(1.15, 0.85, 1);
  const strap = add(segment(local(-0.12, 0.6, 0.06), local(0.08, 0.12, 0.09), 0.012, 0.012, materials.harness, 6));
  const device = add(ball(local(0.07, 0.1, 0.1), 0.02, materials.glow));
  device.castShadow = false;

  // шея и голова
  const neckBase = local(0, 0.6, 0.01);
  const headQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(spec.headTilt, -spec.twist * 0.8, 0, 'YXZ'));
  const headBase = neckBase.clone().add(V(0, 0.24, 0.05).applyQuaternion(headQuat));
  add(segment(neckBase, headBase, 0.055, 0.035, materials.skin, 10));
  for (const side of [-1, 1]) {
    add(segment(neckBase.clone().add(V(side * 0.035, 0, 0.02)), headBase.clone().add(V(side * 0.02, -0.02, 0.03)), 0.014, 0.01, materials.skin, 6));
  }
  const headLocal = (x, y, z) => V(x, y, z).applyQuaternion(headQuat).add(headBase);
  const skull = add(new THREE.Mesh(getAlienHeadGeometry(), materials.skin));
  skull.position.copy(headLocal(0, 0.08, 0.0));
  skull.quaternion.copy(headQuat);
  skull.castShadow = skull.receiveShadow = true;
  for (const side of [-1, 1]) {
    const eye = add(ball(headLocal(side * 0.046, 0.1, 0.096), 1, materials.eye, [0.044, 0.024, 0.02], 16));
    eye.quaternion.copy(headQuat); eye.rotateZ(side * 0.42); eye.rotateY(side * 0.45);
  }
  const mouth = add(box(0.03, 0.004, 0.01, materials.dark, 0.002));
  mouth.position.copy(headLocal(0, -0.045, 0.075)); mouth.quaternion.copy(headQuat);
  for (const side of [-1, 1]) {
    const nostril = add(ball(headLocal(side * 0.008, 0.02, 0.103), 0.005, materials.dark));
    nostril.castShadow = false;
  }
  // оружие
  let hands;
  if (spec.weapon !== 'none') {
    const weapon = buildAlienWeapon();
    const aim = spec.weapon === 'aim';
    weapon.quaternion.setFromEuler(new THREE.Euler(aim ? 0 : 0.7, aim ? 0 : 0.4, 0, 'YXZ'));
    weapon.position.copy(aim ? shoulders[1].clone().add(V(-0.1, -0.06, 0.08)) : local(0.12, 0.1, 0.18));
    add(weapon);
    weapon.updateMatrixWorld(true);
    hands = [weapon.localToWorld(weapon.userData.support.clone()), weapon.localToWorld(weapon.userData.grip.clone())];
    alien.userData.muzzle = weapon.localToWorld(weapon.userData.muzzle.clone());
  } else {
    hands = [local(-0.15, 0.15, 0.45), local(0.15, 0.15, 0.45)];
  }

  // руки: длинные, три пальца
  const elbowPoles = [V(-1, -0.8, -0.3).applyQuaternion(torsoQuat), V(1, -0.8, -0.3).applyQuaternion(torsoQuat)];
  [0, 1].forEach((side) => {
    const shoulder = shoulders[side];
    const elbow = solveTwoBone(shoulder, hands[side], 0.36, 0.36, elbowPoles[side]);
    add(ball(shoulder, 0.05, materials.skin));
    add(segment(shoulder, elbow, 0.045, 0.03, materials.skin));
    add(ball(elbow, 0.03, materials.skin));
    add(segment(elbow, hands[side], 0.034, 0.022, materials.skin));
    const forward = new THREE.Vector3().subVectors(hands[side], elbow).normalize();
    for (let finger = -1; finger <= 1; finger++) {
      const offset = V(finger * 0.015, -0.01, 0).applyQuaternion(torsoQuat);
      const tip = hands[side].clone().add(offset).add(forward.clone().multiplyScalar(0.1)).add(V(0, -0.03, 0));
      add(segment(hands[side].clone().add(offset), tip, 0.009, 0.005, materials.skin, 5));
    }
  });

  // ноги со стопой на пальцах (обратный сустав)
  const hips = [local(-0.11, -0.03, 0), local(0.11, -0.03, 0)];
  [0, 1].forEach((side) => {
    const hip = hips[side];
    const toe = spec.feet[side].clone();
    const ankle = toe.clone().add(V(0, 0.26, -0.16));
    const knee = solveTwoBone(hip, ankle, 0.5, 0.48, V(0, 0, 1));
    add(segment(hip, knee, 0.085, 0.045, materials.skin, 10));
    add(ball(knee, 0.045, materials.skin));
    add(segment(knee, ankle, 0.04, 0.03, materials.skin, 8));
    add(ball(ankle, 0.032, materials.chitin));
    add(segment(ankle, toe.clone().add(V(0, 0.02, 0)), 0.03, 0.022, materials.skin, 8));
    for (let digit = -1; digit <= 1; digit++) {
      add(segment(toe.clone().add(V(digit * 0.025, 0.02, 0)), toe.clone().add(V(digit * 0.045, 0.005, 0.1)), 0.015, 0.008, materials.chitin, 5));
    }
    const kneePlate = add(ball(knee.clone().add(V(0, 0.02, 0.03)), 0.05, materials.chitin, [0.9, 1.1, 0.6]));
    kneePlate.castShadow = true;
  });

  alien.userData.head = headBase.clone().add(V(0, 0.1, 0));
  return alien;
}
