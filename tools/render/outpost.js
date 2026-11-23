// Рендер карты «База на плато» целиком, по вариантам.
// Каждый вариант = (уровень обзора V, стены текущего уровня срезаны или целые): видны уровни 0..V.
// На каждый вариант два прохода кусками: цвет (тени, затенение GTAO) и ID — у каждого пикселя
// клетка, уровень и часть (пол / стена W / стена N / предмет), которой он принадлежит.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { toXZ } from './world.js';
import { TILE, TILES, LEVELS, LEVEL_H } from './outpost_layout.js';
import { layout, PPM, SS, SIZE, CENTER, V, renderer, scene, buildWorld, getDoorLeaves, getGroundGroup } from './outpost_scene.js';

// ---------------- камера и кадр ----------------
const elevation = THREE.MathUtils.degToRad(35);
const down = toXZ(0, 1);
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 300);
camera.position.set(CENTER.x + down.x * Math.cos(elevation) * 120, Math.sin(elevation) * 120, CENTER.z + down.y * Math.cos(elevation) * 120);
camera.lookAt(CENTER);
camera.updateMatrixWorld(true);
const MARGIN = 1.5;
// кадр: углы карты на земле (с запасом по высоте под камни и ящики) и самые высокие точки построек
const frameCorners = [];
for (const [x, z] of [[-MARGIN, -MARGIN], [SIZE + MARGIN, -MARGIN], [-MARGIN, SIZE + MARGIN], [SIZE + MARGIN, SIZE + MARGIN]]) {
  for (const y of [0, 3]) frameCorners.push(new THREE.Vector3(x, y, z).applyMatrix4(camera.matrixWorldInverse));
}
for (const [col, row, height] of [[3, 3, 6.2], [4, 8, 9.0], [20, 14, 10.5], [16, 4, 7.0], [12, 1, 4.5]]) {
  frameCorners.push(new THREE.Vector3(col * TILE, height, row * TILE).applyMatrix4(camera.matrixWorldInverse));
}
const minX = Math.min(...frameCorners.map((point) => point.x)), maxX = Math.max(...frameCorners.map((point) => point.x));
const minY = Math.min(...frameCorners.map((point) => point.y)), maxY = Math.max(...frameCorners.map((point) => point.y));
Object.assign(camera, { left: minX, right: maxX, top: maxY, bottom: minY });
camera.updateProjectionMatrix();
const FULL_W = Math.round((maxX - minX) * PPM), FULL_H = Math.round((maxY - minY) * PPM);

function projectPixel(point) {
  camera.clearViewOffset();
  const projected = point.clone().project(camera);
  return [(projected.x + 1) / 2 * FULL_W, (1 - projected.y) / 2 * FULL_H];
}

// ---------------- проход ID ----------------
const ID_VERTEX = /* glsl */`
varying vec3 vWorld;
void main() {
  vec4 local = vec4(position, 1.0);
#ifdef USE_INSTANCING
  local = instanceMatrix * local;
#endif
  vec4 world = modelMatrix * local;
  vWorld = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}`;
const ID_FRAGMENT = /* glsl */`
uniform float uPart;
uniform float uLevel;
uniform vec2 uBias;
uniform float uAuto;
varying vec3 vWorld;
void main() {
  if (uPart < 0.5) { gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); return; }
  float level = uLevel;
  if (uAuto > 0.5) level = clamp(floor((vWorld.y - 0.05) / ${LEVEL_H.toFixed(3)}), 0.0, 3.0);
  float col = clamp(floor(vWorld.x / ${TILE.toFixed(4)} + uBias.x), 0.0, 31.0);
  float row = clamp(floor(vWorld.z / ${TILE.toFixed(4)} + uBias.y), 0.0, 31.0);
  gl_FragColor = vec4((col * 8.0 + uPart) / 255.0, (row * 8.0 + level) / 255.0, 1.0, 1.0);
}`;
function idMaterial(info) {
  return new THREE.ShaderMaterial({
    vertexShader: ID_VERTEX, fragmentShader: ID_FRAGMENT,
    uniforms: { uPart: { value: info.part }, uLevel: { value: info.level }, uBias: { value: new THREE.Vector2(info.biasCol, info.biasRow) }, uAuto: { value: info.auto ? 1 : 0 } },
  });
}

let world = null;
let doorLeaves = null;
let doorRects = [];
let composer = null, composerSize = '';
let idTarget = null;
const idCanvas = document.createElement('canvas');

function disposeWorld(root) {
  root.traverse((node) => {
    if (node.isMesh && node.parent && node !== getGroundGroup() && !isInGround(node)) {
      node.geometry.dispose();
      if (node.userData.idMaterial) node.userData.idMaterial.dispose();
    }
  });
}
function isInGround(node) { let current = node; while (current) { if (current === getGroundGroup()) return true; current = current.parent; } return false; }

window.setupVariant = (viewLevel, cut) => {
  if (world) { scene.remove(world); disposeWorld(world); }
  world = buildWorld(viewLevel, cut);
  doorLeaves = getDoorLeaves();
  scene.add(world);
  let meshes = 0;
  const prepare = (node) => {
    if (!node.isMesh) return;
    meshes++;
    const info = node.userData.id || { part: 0, level: 0, biasCol: 0, biasRow: 0, auto: false };
    if (!node.userData.idMaterial) node.userData.idMaterial = idMaterial(info);
  };
  world.traverse(prepare);
  doorLeaves.traverse(prepare);
  // прямоугольники створок в пикселях x1 — чтобы делать проход створок только там, где они есть
  doorRects = doorLeaves.children.map((leaf) => {
    const bounds = new THREE.Box3().setFromObject(leaf);
    const points = [];
    for (const x of [bounds.min.x, bounds.max.x]) for (const y of [bounds.min.y, bounds.max.y]) for (const z of [bounds.min.z, bounds.max.z]) points.push(projectPixel(V(x, y, z)));
    return [Math.min(...points.map((point) => point[0])), Math.min(...points.map((point) => point[1])), Math.max(...points.map((point) => point[0])), Math.max(...points.map((point) => point[1]))];
  });
  return { meshes, doors: doorLeaves.children.length };
};

window.outpostInfo = () => ({
  width: FULL_W, height: FULL_H, tile: TILE, tiles: TILES, levels: LEVELS, levelHeight: LEVEL_H, ppm: PPM,
  origin: projectPixel(V(0, 0, 0)), colStep: projectPixel(V(TILE, 0, 0)), rowStep: projectPixel(V(0, 0, TILE)), up: projectPixel(V(0, 1, 0)),
});

// кусок (x, y, width, height) в пикселях итоговой картинки x1, с запасом margin со всех сторон
window.renderChunk = (x, y, width, height, margin) => {
  const left = x - margin, top = y - margin, fullWidth = width + margin * 2, fullHeight = height + margin * 2;
  camera.setViewOffset(FULL_W * SS, FULL_H * SS, left * SS, top * SS, fullWidth * SS, fullHeight * SS);
  const pixelWidth = fullWidth * SS, pixelHeight = fullHeight * SS;
  const sizeKey = pixelWidth + 'x' + pixelHeight;
  if (sizeKey !== composerSize) {
    composerSize = sizeKey;
    renderer.setSize(pixelWidth, pixelHeight);
    composer = new EffectComposer(renderer);
    composer.setSize(pixelWidth, pixelHeight);
    composer.addPass(new RenderPass(scene, camera));
    const gtao = new GTAOPass(scene, camera, pixelWidth, pixelHeight);
    gtao.updateGtaoMaterial({ radius: 0.45, distanceExponent: 1.5, thickness: 1.2, scale: 1.2, samples: 16 });
    gtao.blendIntensity = 0.9;
    composer.addPass(gtao);
    composer.addPass(new OutputPass());
    if (idTarget) idTarget.dispose();
    idTarget = new THREE.WebGLRenderTarget(pixelWidth, pixelHeight, { samples: 0, minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter });
  }
  composer.render();
  const color = renderer.domElement.toDataURL('image/png');
  const id = renderIdPass(pixelWidth, pixelHeight);
  const result = { color, id };
  // створки дверей: тот же кадр со створками; в фон они не входят
  const overlapsDoor = doorRects.some((rect) => rect[0] < left + fullWidth && rect[2] > left && rect[1] < top + fullHeight && rect[3] > top);
  if (overlapsDoor) {
    world.add(doorLeaves);
    composer.render();
    result.doorColor = renderer.domElement.toDataURL('image/png');
    result.doorId = renderIdPass(pixelWidth, pixelHeight);
    world.remove(doorLeaves);
  }
  camera.clearViewOffset();
  return result;
};

function renderIdPass(pixelWidth, pixelHeight) {
  // ID: подменить материалы, отрендерить в цель без сглаживания, прочитать
  const saved = [];
  world.traverse((node) => { if (node.isMesh) { saved.push([node, node.material]); node.material = node.userData.idMaterial; } });
  const background = scene.background;
  scene.background = new THREE.Color(0x000000);
  renderer.setRenderTarget(idTarget);
  renderer.clear();
  renderer.render(scene, camera);
  const pixels = new Uint8Array(pixelWidth * pixelHeight * 4);
  renderer.readRenderTargetPixels(idTarget, 0, 0, pixelWidth, pixelHeight, pixels);
  renderer.setRenderTarget(null);
  scene.background = background;
  for (const [node, material] of saved) node.material = material;
  idCanvas.width = pixelWidth; idCanvas.height = pixelHeight;
  const context = idCanvas.getContext('2d');
  const image = context.createImageData(pixelWidth, pixelHeight);
  for (let row = 0; row < pixelHeight; row++) {
    const source = (pixelHeight - 1 - row) * pixelWidth * 4;
    image.data.set(pixels.subarray(source, source + pixelWidth * 4), row * pixelWidth * 4);
  }
  for (let index = 3; index < image.data.length; index += 4) image.data[index] = 255;
  context.putImageData(image, 0, 0);
  return idCanvas.toDataURL('image/png');
}

// уменьшенный общий вид для проверки
window.renderPreview = (width) => {
  const height = Math.round(width * FULL_H / FULL_W);
  camera.clearViewOffset();
  renderer.setSize(width, height);
  composerSize = '';
  renderer.render(scene, camera);
  return renderer.domElement.toDataURL('image/png');
};

window.layoutData = () => layout;
window.ready = true;
