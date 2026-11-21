// Сборка сцены и рендер изометрической камерой.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import {
  toXZ, heightAt, CRAFT, buildTerrain, buildGrass, buildRock, buildPebbles, buildTree, buildBush, buildLeafLitter,
  buildLog, buildCraft, buildDebris, buildSmoke, glowSprite, canopies,
} from './world.js';
import { buildAlien, buildRifle } from './actors.js';
import { buildStockySoldier as buildSoldier } from './soldier2.js';
import { buildMech } from './mech.js';
import { segment, setEnvIntensity, fbm2 } from './lib.js';

const VIEW_W = 1280, VIEW_H = 700, SUPERSAMPLE = window.SUPERSAMPLE || 2;
const params = new URLSearchParams(location.search);
const FAST = params.has('fast');
const NO_SOLDIERS = params.has('nosoldiers');
const SUN_ONLY = params.has('sunonly');

const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(1);
renderer.setSize(VIEW_W * SUPERSAMPLE, VIEW_H * SUPERSAMPLE);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.outputColorSpace = THREE.SRGBColorSpace;
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x6f7a5e);
scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), 0.04).texture;
scene.environmentIntensity = 0.25;

// ---------- свет: низкое вечернее солнце ----------
const target = new THREE.Vector3();
{ const xz = toXZ(-0.6, -1.5); target.set(xz.x, 0, xz.y); }
const hemisphere = new THREE.HemisphereLight(0xc8dcff, 0x46502c, 0.7);
scene.add(hemisphere);
if (SUN_ONLY) { hemisphere.intensity = 0; scene.environmentIntensity = 0; }
const sun = new THREE.DirectionalLight(0xfff4e0, 4.2);
{ const offset = toXZ(-11, 7.5); sun.position.set(target.x + offset.x, 11, target.z + offset.y); }
sun.target.position.copy(target);
sun.castShadow = true;
sun.shadow.mapSize.set(FAST ? 2048 : 4096, FAST ? 2048 : 4096);
Object.assign(sun.shadow.camera, { left: -22, right: 22, top: 22, bottom: -22, near: 1, far: 60 });
sun.shadow.camera.updateProjectionMatrix();
sun.shadow.bias = -0.0004;
sun.shadow.normalBias = 0.03;
sun.shadow.radius = 3;
scene.add(sun, sun.target);
scene.fog = new THREE.Fog(0x9fb0c0, 66, 130);

// ---------- местность ----------
const bounds = { uMin: -13, uMax: 13, vMin: -12.5, vMax: 12.5 };
const TERRAIN_PENDING = true;

const greenLeaves = [new THREE.Color(0.22, 0.34, 0.12), new THREE.Color(0.3, 0.42, 0.15), new THREE.Color(0.18, 0.28, 0.1), new THREE.Color(0.36, 0.44, 0.18)];
const autumnLeaves = [new THREE.Color(0.85, 0.42, 0.1), new THREE.Color(0.95, 0.6, 0.15), new THREE.Color(0.7, 0.28, 0.08), new THREE.Color(0.8, 0.5, 0.12)];
const yellowLeaves = [new THREE.Color(0.9, 0.72, 0.18), new THREE.Color(0.8, 0.62, 0.12), new THREE.Color(0.95, 0.8, 0.3), new THREE.Color(0.6, 0.6, 0.18)];
const redBush = [new THREE.Color(0.65, 0.2, 0.08), new THREE.Color(0.8, 0.32, 0.1), new THREE.Color(0.5, 0.15, 0.06)];

const exclusions = [];
const rocks = [
  [7.6, 5.6, 1.5, 1, { flatten: 0.8 }], [9.0, 4.3, 1.1, 2, {}], [8.6, 6.9, 0.9, 3, {}], [6.4, 6.6, 0.6, 4, {}], [10.2, 6.0, 0.8, 5, {}],
  [-9.8, -8.2, 1.6, 6, { flatten: 0.85 }], [-8.2, -9.6, 1.2, 7, {}], [-11.0, -6.6, 0.9, 8, {}],
  [10.6, -6.8, 1.3, 9, {}], [11.6, -5.2, 0.7, 10, {}],
  [1.9, 6.0, 0.55, 11, { flatten: 0.65 }], [2.7, 6.2, 0.35, 12, {}],
  [-5.6, 9.2, 0.5, 13, {}], [4.8, 10.6, 0.7, 14, {}], [-11.5, 3.4, 0.6, 15, {}], [12.2, 1.2, 0.5, 16, {}],
];
for (const [u, v, radius, seed, options] of rocks) {
  scene.add(buildRock(u, v, radius, seed, options));
  exclusions.push({ u, v, radius: radius * 0.95 });
}
scene.add(buildPebbles(bounds, FAST ? 300 : 1200));

const trees = [
  [-11.8, -4.2, { height: 6.5, spread: 2.8, seed: 3, palette: greenLeaves }],
  [-6.5, -10.5, { height: 7, spread: 3.0, seed: 4, palette: greenLeaves }],
  [6.0, -10.6, { height: 6.8, spread: 2.8, seed: 5, palette: greenLeaves }],
  [11.4, -1.6, { height: 6.0, spread: 2.5, seed: 6, palette: yellowLeaves }],
  [-11.6, 10.2, { height: 5.5, spread: 2.4, seed: 7, palette: autumnLeaves }],
  [9.8, 10.4, { height: 5.0, spread: 2.2, seed: 8, palette: autumnLeaves }],
];
for (const [u, v, options] of trees) canopies.push({ u, v, radius: options.spread * 1.15 });
scene.add(buildTerrain());
for (const [u, v, options] of trees) {
  scene.add(buildTree(u, v, { ...options, cards: FAST ? 30 : 80 }));
  exclusions.push({ u, v, radius: 0.6 });
}
const bushes = [
  [-7.6, 4.2, { radius: 0.8, seed: 11, palette: greenLeaves }], [5.6, 4.0, { radius: 0.7, seed: 12, palette: redBush }],
  [-3.4, 9.6, { radius: 0.9, seed: 13, palette: autumnLeaves }], [11.0, 3.4, { radius: 0.8, seed: 14, palette: greenLeaves }],
  [-12.0, 0.8, { radius: 0.9, seed: 15, palette: redBush }], [3.0, -9.6, { radius: 0.8, seed: 16, palette: yellowLeaves }],
  [8.4, 2.4, { radius: 0.6, seed: 17, palette: autumnLeaves }], [0.4, 9.8, { radius: 0.7, seed: 18, palette: greenLeaves }],
];
for (const [u, v, options] of bushes) {
  scene.add(buildBush(u, v, { ...options, cards: FAST ? 20 : 45 }));
  exclusions.push({ u, v, radius: options.radius * 0.6 });
}
scene.add(buildLeafLitter(-11.0, 9.6, 3.2, autumnLeaves, 600, 4));
scene.add(buildLeafLitter(9.8, 10.4, 2.8, autumnLeaves, 450, 5));
scene.add(buildLeafLitter(11.4, -1.6, 3.0, yellowLeaves, 450, 6));
scene.add(buildLog(-7.8, 10.4, 2.4, 0.5));
scene.add(buildGrass(bounds, exclusions));

// ---------- корабль ----------
const craft = buildCraft();
scene.add(craft);
scene.add(buildDebris(CRAFT.u - 3.2, CRAFT.v + 5.6, 26, 1.8, 3));
scene.add(buildDebris(CRAFT.u + 6.5, CRAFT.v - 6.0, 18, 3.0, 4));
scene.add(buildSmoke(CRAFT.u + 3.6, CRAFT.v - 2.6, 3.2, 3, 16));
scene.add(buildSmoke(CRAFT.u + 8.5, CRAFT.v - 7.5, 0.3, 5, 9, 0x5a5c58));

// ---------- персонажи ----------
// направление спрайта d (0 к зрителю, по часовой на экране) -> поворот модели
const directionYaw = (direction) => {
  const angle = direction * Math.PI / 4;
  const xz = toXZ(-Math.sin(angle), Math.cos(angle));
  return Math.atan2(xz.x, xz.y);
};
function place(object, u, v, facingU, facingV, onFloor = false, sprite = null) {
  const xz = toXZ(u, v);
  const y = onFloor ? CRAFT.floor : heightAt(xz.x, xz.y);
  object.position.set(xz.x, y, xz.y);
  if (sprite) {
    // бойцы смотрят строго в одно из 8 направлений спрайта
    const angle = Math.atan2(-(facingU - u), facingV - v);
    const direction = ((Math.round(angle / (Math.PI / 4)) % 8) + 8) % 8;
    object.rotation.y = directionYaw(direction);
    object.userData.sprite = { key: sprite, direction };
    if (!NO_SOLDIERS) scene.add(object);
  } else {
    const face = toXZ(facingU, facingV).sub(xz);
    object.rotation.y = Math.atan2(face.x, face.y);
    scene.add(object);
  }
  object.updateMatrixWorld(true);
  return object;
}

const breach = { u: CRAFT.u - 2.6, v: CRAFT.v + 4.6 };
const alienTargets = {};
const actors = {};
actors.s1 = place(buildSoldier({ camo: 'black', pose: 'kneelAim', nvg: true, scarf: true, suppressor: true }), -3.3, 5.2, breach.u + 0.6, breach.v - 1.2, false, 'black_kneelAim');
actors.s2 = place(buildSoldier({ camo: 'green', pose: 'standAim', goggles: true, tanRifle: true }), -5.3, 6.2, breach.u, breach.v - 1, false, 'green_standAim');
actors.s3 = place(buildSoldier({ camo: 'black', pose: 'crouchAim' }), 1.4, 6.9, CRAFT.u - 0.5, CRAFT.v + 2, false, 'black_crouchAim');
actors.s4 = place(buildSoldier({ camo: 'green', pose: 'walk', goggles: true }), -5.0, 3.3, -2.5, 1.8, false, 'green_walk');

actors.a1 = place(buildAlien('aim'), CRAFT.u - 1.7, CRAFT.v + 3.3, -3.3, 5.2, true);
actors.a2 = place(buildAlien('crouch'), CRAFT.u - 3.0, CRAFT.v - 0.3, -5, 7, true);
actors.a3 = place(buildAlien('console'), CRAFT.u + 1.3, CRAFT.v - 2.85, CRAFT.u + 1.3, CRAFT.v - 6, true);
actors.a4 = place(buildAlien('stand'), CRAFT.u + 2.6, CRAFT.v + 0.9, -2, 6, true);

const mech = buildMech();
mech.setPose(0, false, 0);
mech.root.traverse((node) => { if (node.isMesh) { node.castShadow = node.receiveShadow = true; } });
place(mech.root, -7.0, 0.4, CRAFT.u, CRAFT.v + 2.5);

// ---------- выстрелы ----------
function beam(from, to, color, radius, glowSize) {
  const group = new THREE.Group();
  const core = segment(from, to, radius, radius, new THREE.MeshBasicMaterial({ color: 0xffffff }), 6);
  core.castShadow = false;
  group.add(core);
  const halo = segment(from, to, radius * 3, radius * 3, new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false }), 8);
  halo.castShadow = false;
  group.add(halo);
  const head = glowSprite(color, glowSize);
  head.position.copy(to);
  group.add(head);
  scene.add(group);
  return group;
}
{
  // плазма пришельца в сторону бойца
  const from = actors.a1.localToWorld(actors.a1.userData.muzzle.clone());
  const toward = actors.s1.localToWorld(actors.s1.userData.head.clone());
  const end = from.clone().lerp(toward, 0.55);
  beam(from.clone().lerp(toward, 0.25), end, 0xc070ff, 0.035, 0.9);
  const flash = glowSprite(0xd090ff, 0.7); flash.position.copy(from); scene.add(flash);
  const light = new THREE.PointLight(0xb060ff, 6, 5, 2); light.position.copy(end); scene.add(light);
  // трассер бойца
  const muzzle = actors.s2.localToWorld(actors.s2.userData.muzzle.clone());
  const hit = actors.a1.localToWorld(actors.a1.userData.head.clone()).add(new THREE.Vector3(0.3, -0.5, 0));
  beam(muzzle.clone().lerp(hit, 0.35), muzzle.clone().lerp(hit, 0.6), 0xffb040, 0.012, 0.25);
  const muzzleFlash = glowSprite(0xffc060, 0.55); muzzleFlash.position.copy(muzzle); scene.add(muzzleFlash);
  const flashLight = new THREE.PointLight(0xffa040, 4, 4, 2); flashLight.position.copy(muzzle); scene.add(flashLight);
}

// ---------- метки выбора ----------
function groundRing(object, color, radius, onFloor = false) {
  const ring = new THREE.Mesh(new THREE.RingGeometry(radius * 0.86, radius, 48), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.85, depthWrite: false }));
  ring.rotation.x = -Math.PI / 2;
  ring.position.set(object.position.x, object.position.y + 0.03, object.position.z);
  scene.add(ring);
}
groundRing(actors.s1, 0xffc040, 0.62);
groundRing(actors.a1, 0x4fe0ff, 0.55, true);

// ---------- камера ----------
const VIEW_WIDTH_M = 18.5;
const camera = new THREE.OrthographicCamera(-VIEW_WIDTH_M / 2, VIEW_WIDTH_M / 2, VIEW_WIDTH_M * VIEW_H / VIEW_W / 2, -VIEW_WIDTH_M * VIEW_H / VIEW_W / 2, 1, 200);
const elevation = THREE.MathUtils.degToRad(35);
{
  const down = toXZ(0, 1);
  camera.position.set(target.x + down.x * Math.cos(elevation) * 70, Math.sin(elevation) * 70, target.z + down.y * Math.cos(elevation) * 70);
  camera.lookAt(target);
}

function renderMain() {
  if (FAST) {
    renderer.render(scene, camera);
    return renderer.domElement.toDataURL('image/png');
  }
  const composer = new EffectComposer(renderer);
  composer.setSize(VIEW_W * SUPERSAMPLE, VIEW_H * SUPERSAMPLE);
  composer.addPass(new RenderPass(scene, camera));
  try {
    const gtao = new GTAOPass(scene, camera, VIEW_W * SUPERSAMPLE, VIEW_H * SUPERSAMPLE);
    gtao.updateGtaoMaterial({ radius: 0.6, distanceExponent: 1.4, thickness: 1.5, scale: 1.2, samples: 16 });
    gtao.blendIntensity = 0.9;
    composer.addPass(gtao);
  } catch (error) { console.warn('GTAO', error.message); }
  composer.addPass(new UnrealBloomPass(new THREE.Vector2(VIEW_W * SUPERSAMPLE, VIEW_H * SUPERSAMPLE), 0.55, 0.5, 0.92));
  composer.addPass(new OutputPass());
  composer.render();
  return renderer.domElement.toDataURL('image/png');
}

function project(point) {
  const projected = point.clone().project(camera);
  return { x: (projected.x + 1) / 2 * VIEW_W, y: (1 - projected.y) / 2 * VIEW_H };
}

// портрет выбранного бойца: студийный кадр той же экипировки
function renderPortrait() {
  const studio = new THREE.Scene();
  studio.environment = scene.environment;
  studio.environmentIntensity = 0.5;
  studio.background = new THREE.Color(0x1b2024);
  studio.add(new THREE.HemisphereLight(0xb8c4cc, 0x202020, 0.8));
  const key = new THREE.DirectionalLight(0xfff0dc, 2.6); key.position.set(-1.5, 2.5, 2.5); studio.add(key);
  const rim = new THREE.DirectionalLight(0x9fd8ff, 2.0); rim.position.set(2, 1.5, -2); studio.add(rim);
  const model = buildSoldier({ camo: 'black', pose: 'walk', nvg: true, scarf: true, suppressor: true });
  setEnvIntensity(model, 0.5);
  model.rotation.y = 0.35;
  studio.add(model);
  model.updateMatrixWorld(true);
  const head = model.localToWorld(model.userData.head.clone());
  const portraitCamera = new THREE.PerspectiveCamera(20, 300 / 360, 0.1, 20);
  portraitCamera.position.set(head.x + 0.4, head.y + 0.05, head.z + 2.1);
  portraitCamera.lookAt(head.x, head.y - 0.17, head.z);
  renderer.setSize(300, 360);
  renderer.render(studio, portraitCamera);
  return renderer.domElement.toDataURL('image/png');
}

// карточка оружия
function renderWeapon() {
  const weaponScene = new THREE.Scene();
  weaponScene.environment = scene.environment;
  weaponScene.environmentIntensity = 0.8;
  weaponScene.add(new THREE.HemisphereLight(0xffffff, 0x404040, 1.2));
  const light = new THREE.DirectionalLight(0xffffff, 2.5); light.position.set(1, 2, 3); weaponScene.add(light);
  const rifle = buildRifle({ suppressor: true });
  rifle.rotation.y = Math.PI / 2;
  const holder = new THREE.Group();
  holder.add(rifle);
  holder.rotation.z = 0.32;
  holder.position.set(-0.5, -0.2, 0);
  weaponScene.add(holder);
  const weaponCamera = new THREE.OrthographicCamera(-0.62, 0.62, 0.5, -0.5, 0.1, 10);
  weaponCamera.position.set(0, 0, 3);
  renderer.setSize(380, 300);
  renderer.setClearColor(0x000000, 0);
  weaponScene.background = null;
  renderer.render(weaponScene, weaponCamera);
  const url = renderer.domElement.toDataURL('image/png');
  renderer.setClearColor(0x000000, 1);
  return url;
}

// мини-карта сверху
function renderMinimap() {
  const mapCamera = new THREE.OrthographicCamera(-14, 14, 14, -14, 1, 200);
  mapCamera.position.set(target.x, 80, target.z);
  mapCamera.up.set(...(() => { const up = toXZ(0, -1); return [up.x, 0, up.y]; })());
  mapCamera.lookAt(target);
  renderer.setSize(460, 460);
  const savedFog = scene.fog; scene.fog = null;
  renderer.render(scene, mapCamera);
  scene.fog = savedFog;
  const mapPoint = (object) => {
    const projected = object.position.clone().project(mapCamera);
    return { x: (projected.x + 1) / 2, y: (1 - projected.y) / 2 };
  };
  return {
    url: renderer.domElement.toDataURL('image/png'),
    markers: {
      squad: ['s1', 's2', 's3', 's4'].map((key) => mapPoint(actors[key])).concat([mapPoint(mech.root)]),
      enemies: ['a1', 'a2', 'a3', 'a4'].map((key) => mapPoint(actors[key])),
      selected: mapPoint(actors.s1),
    },
  };
}

window.renderAll = () => {
  setEnvIntensity(scene, SUN_ONLY ? 0 : 0.28);
  const main = renderMain();
  const points = {
    soldiers: ['s1', 's2', 's3', 's4'].map((key) => ({ ...actors[key].userData.sprite, foot: project(actors[key].position.clone()) })),
    s1Head: project(actors.s1.localToWorld(actors.s1.userData.head.clone())),
    a1Head: project(actors.a1.localToWorld(actors.a1.userData.head.clone())),
    a1Feet: project(actors.a1.position.clone()),
  };
  if (FAST) return { main, points };
  const portrait = renderPortrait();
  const weapon = renderWeapon();
  const minimap = renderMinimap();
  return { main, points, portrait, weapon, minimap };
};

window.ready = true;
