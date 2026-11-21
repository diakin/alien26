// Пререндер спрайтов бойцов: 8 направлений, та же изометрическая камера и свет, что в сцене.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { toXZ } from './world.js';
import { buildStockySoldier, walkCycle } from './soldier2.js';
import { rockMaterial } from './world.js';
import { rockGeometry } from './lib.js';
import { setEnvIntensity } from './lib.js';

// масштаб как у сцены: 18.5 м на 1280 px, рендер в 2 раза крупнее
const PIXELS_PER_METER = 1280 / 18.5 * 2;
const FRAME_W_M = 4.2, FRAME_H_M = 2.8;
const WIDTH = Math.round(FRAME_W_M * PIXELS_PER_METER), HEIGHT = Math.round(FRAME_H_M * PIXELS_PER_METER);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(1);
renderer.setSize(WIDTH, HEIGHT);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.outputColorSpace = THREE.SRGBColorSpace;
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), 0.04).texture;
scene.environmentIntensity = 0.25;
scene.add(new THREE.HemisphereLight(0xc8dcff, 0x46502c, 0.7));
const sun = new THREE.DirectionalLight(0xfff4e0, 4.2);
{ const offset = toXZ(-11, 7.5); sun.position.set(offset.x, 11, offset.y); }
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
Object.assign(sun.shadow.camera, { left: -3, right: 3, top: 3, bottom: -3, near: 1, far: 40 });
sun.shadow.bias = -0.0004;
sun.shadow.normalBias = 0.02;
sun.shadow.radius = 3;
sun.layers.enable(1);
scene.add(sun, sun.target);
// контровой свет сзади-справа: отделяет тёмный силуэт от фона
const rim = new THREE.DirectionalLight(0xbcd8ff, 1.3);
{ const offset = toXZ(9, -10); rim.position.set(offset.x, 8, offset.y); }
scene.add(rim);

// приёмник тени: виден только в проходе тени (слой 1)
const ground = new THREE.Mesh(new THREE.PlaneGeometry(8, 8), new THREE.ShadowMaterial({ opacity: 1 }));
ground.rotation.x = -Math.PI / 2;
ground.receiveShadow = true;
ground.layers.set(1);
scene.add(ground);

const elevation = THREE.MathUtils.degToRad(35);
const lookAt = new THREE.Vector3(0, 0.95, 0);
const camera = new THREE.OrthographicCamera(-FRAME_W_M / 2, FRAME_W_M / 2, FRAME_H_M / 2, -FRAME_H_M / 2, 0.1, 100);
{
  const down = toXZ(0, 1);
  camera.position.set(lookAt.x + down.x * Math.cos(elevation) * 30, lookAt.y + Math.sin(elevation) * 30, lookAt.z + down.y * Math.cos(elevation) * 30);
  camera.lookAt(lookAt);
}

let composer = null;
try {
  composer = new EffectComposer(renderer);
  composer.setSize(WIDTH, HEIGHT);
  composer.addPass(new RenderPass(scene, camera));
  const gtao = new GTAOPass(scene, camera, WIDTH, HEIGHT);
  gtao.updateGtaoMaterial({ radius: 0.18, distanceExponent: 1.5, thickness: 1.5, scale: 1.4, samples: 16 });
  gtao.blendIntensity = 1.0;
  composer.addPass(gtao);
  composer.addPass(new OutputPass());
} catch (error) {
  console.warn('GTAO недоступен:', error.message);
  composer = null;
}

const white = new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false });
const invisible = new THREE.MeshBasicMaterial({ colorWrite: false, depthWrite: false });

// направление d: 0 к зрителю, далее по часовой на экране (1 вниз-влево, 2 влево ... 6 вправо, 7 вниз-вправо)
export function facingYaw(direction) {
  const angle = direction * Math.PI / 4;
  const xz = toXZ(-Math.sin(angle), Math.cos(angle));
  return Math.atan2(xz.x, xz.y);
}

function anchor() {
  const projected = new THREE.Vector3(0, 0, 0).project(camera);
  return { x: (projected.x + 1) / 2 * WIDTH, y: (1 - projected.y) / 2 * HEIGHT };
}

function buildRockObject(seed, radius) {
  const geometry = rockGeometry(radius, seed, { flatten: 0.78 });
  const colors = new Float32Array(geometry.attributes.position.count * 3);
  const normal = geometry.attributes.normal;
  for (let index = 0; index < normal.count; index++) {
    const moss = Math.max(0, normal.getY(index) - 0.55) * 1.6;
    colors[index * 3] = 1 - moss * 0.5; colors[index * 3 + 1] = 1 - moss * 0.2; colors[index * 3 + 2] = 1 - moss * 0.65;
  }
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const mesh = new THREE.Mesh(geometry, rockMaterial());
  mesh.position.y = radius * 0.22;
  mesh.rotation.y = seed;
  mesh.castShadow = mesh.receiveShadow = true;
  const group = new THREE.Group();
  group.add(mesh);
  return group;
}

window.renderSprite = (options, direction) => {
  let soldier;
  if (options.rock) soldier = buildRockObject(options.rock.seed, options.rock.radius);
  else {
    const spriteOptions = { ...options };
    if (options.walkPhase !== undefined) spriteOptions.pose = walkCycle(options.walkPhase);
    soldier = buildStockySoldier(spriteOptions);
  }
  soldier.rotation.y = facingYaw(direction);
  setEnvIntensity(soldier, 0.28);
  scene.add(soldier);
  soldier.updateMatrixWorld(true);

  // 1. цвет (с затенением в складках)
  camera.layers.set(0);
  scene.background = new THREE.Color(0x7f7f7f);
  if (composer) composer.render(); else renderer.render(scene, camera);
  const color = renderer.domElement.toDataURL('image/png');

  // 2. маска силуэта
  scene.background = new THREE.Color(0x000000);
  scene.overrideMaterial = white;
  renderer.render(scene, camera);
  scene.overrideMaterial = null;
  const mask = renderer.domElement.toDataURL('image/png');

  // 3. тень на земле (боец невидим для камеры, но отбрасывает тень)
  scene.background = null;
  renderer.setClearColor(0x000000, 0);
  soldier.traverse((node) => { if (node.isMesh) node.material = invisible; });
  camera.layers.enableAll();
  renderer.render(scene, camera);
  camera.layers.set(0);
  const shadow = renderer.domElement.toDataURL('image/png');

  scene.remove(soldier);
  return { color, mask, shadow, anchor: anchor(), width: WIDTH, height: HEIGHT, scale: PIXELS_PER_METER };
};
window.debugShadow = () => {
  const soldier = buildStockySoldier({ camo: 'black', pose: 'idle' });
  scene.add(soldier);
  const results = {};
  const gl = renderer.getContext();
  const readAlpha = () => {
    const pixels = new Uint8Array(WIDTH * HEIGHT * 4);
    gl.readPixels(0, 0, WIDTH, HEIGHT, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
    let maxAlpha = 0, count = 0;
    for (let index = 3; index < pixels.length; index += 4) { if (pixels[index] > 0) count++; maxAlpha = Math.max(maxAlpha, pixels[index]); }
    return { maxAlpha, count };
  };
  scene.background = null; renderer.setClearColor(0x000000, 0);
  camera.layers.enableAll();
  renderer.render(scene, camera); results.all = readAlpha();
  camera.layers.set(1);
  renderer.render(scene, camera); results.layer1 = readAlpha();
  results.sunLayers = sun.layers.mask; results.groundLayers = ground.layers.mask;
  scene.remove(soldier);
  return results;
};
window.ready = true;
