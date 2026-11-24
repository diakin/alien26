// 3D-осмотр подземной базы: та же сцена, что и в тайлах (outpost_scene.js), но с орбитальной камерой.
// Разработка: baseview.html?map=base (ES-модули через http-сервер tools/render).
// В игру идёт собранный esbuild-ом классический скрипт game/js/base3d.js (см. tools/render/build_base3d.sh),
// страница game/base3d.html.
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { TILE, TILES, LEVELS, LEVEL_H, FLOOR, BASE_COL, BASE_ROW } from './outpost_layout.js';
import {
  layout, renderer, scene, sun, SIZE, MAT, buildWall, floorTile, buildStairs, buildObject,
  getDoorLeaves, resetDoorLeaves,
} from './outpost_scene.js';
import { setEnvIntensity } from './lib.js';
import { BASE_PLAN } from './base_plan.js';

const MODULE_COLORS = { 1: '#d8a420', 2: '#7fb2d8', 3: '#9fd27f', 4: '#e0705a', 5: '#5fd0ff', 6: '#ffb347', 7: '#c49be8', 8: '#b8b8b8', 0: '#808080' };

// ---------------- рендерер и окно ----------------
renderer.domElement.style.display = 'block';
renderer.domElement.style.outline = 'none';
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
renderer.shadowMap.autoUpdate = false;   // тени пересчитываем только при смене уровней
renderer.setSize(window.innerWidth, window.innerHeight);

// свет лампы ложится на всю базу (поле 72 × 72 м)
const HALF_FIELD = SIZE / 2 + 2;
Object.assign(sun.shadow.camera, { left: -HALF_FIELD, right: HALF_FIELD, top: HALF_FIELD, bottom: -HALF_FIELD, near: 1, far: 140 });
sun.shadow.camera.updateProjectionMatrix();
sun.shadow.mapSize.set(4096, 4096);

// центр плана базы (а не всего поля)
const planCols = BASE_PLAN.grid[0], planRows = BASE_PLAN.grid[1];
const planCenter = new THREE.Vector3((BASE_COL + planCols / 2) * TILE, 0, (BASE_ROW + planRows / 2) * TILE);

const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.3, 400);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.12;
controls.screenSpacePanning = false;           // панорама по горизонтали, как по карте
controls.minDistance = 4;
controls.maxDistance = 140;
controls.maxPolarAngle = THREE.MathUtils.degToRad(86);
controls.keyPanSpeed = 14;
controls.listenToKeyEvents(window);

function viewFrom(azimuthDeg, elevationDeg, distance) {
  const azimuth = THREE.MathUtils.degToRad(azimuthDeg), elevation = THREE.MathUtils.degToRad(elevationDeg);
  controls.target.copy(planCenter).add(new THREE.Vector3(0, 1.5, 0));
  camera.position.set(
    controls.target.x + Math.cos(elevation) * Math.sin(azimuth) * distance,
    controls.target.y + Math.sin(elevation) * distance,
    controls.target.z + Math.cos(elevation) * Math.cos(azimuth) * distance);
  controls.update();
}
// как в игре: смотрим с юго-востока (азимут 45°), наклон 35°
const homeView = () => viewFrom(45, 40, 78);

// ---------------- сцена по уровням ----------------
// Как в тайлах базы (tileset.js, MAP=base): плиты пола только в помещениях, стены, перекрытия,
// лестницы и предметы уровней 0..viewLevel. Вокруг — тёмная порода.
function buildBaseWorld(viewLevel, cut) {
  const root = new THREE.Group();
  resetDoorLeaves();

  const rock = new THREE.Mesh(new THREE.PlaneGeometry(SIZE + 40, SIZE + 40), new THREE.MeshStandardMaterial({ color: 0x24211e, roughness: 1 }));
  rock.rotation.x = -Math.PI / 2;
  rock.position.set(SIZE / 2, -0.03, SIZE / 2);
  rock.receiveShadow = true;
  root.add(rock);

  // плиты пола первого уровня — одним InstancedMesh
  const plateCells = [];
  for (let row = 0; row < TILES; row++) for (let col = 0; col < TILES; col++) if (layout.floor[0][row][col] === FLOOR.interior) plateCells.push([col, row]);
  const plates = new THREE.InstancedMesh(new THREE.BoxGeometry(TILE + 0.004, 0.04, TILE + 0.004), MAT.interiorFloor(), plateCells.length);
  const matrix = new THREE.Matrix4();
  plateCells.forEach(([col, row], index) => plates.setMatrixAt(index, matrix.makeTranslation((col + 0.5) * TILE, 0.025, (row + 0.5) * TILE)));
  plates.receiveShadow = true;
  root.add(plates);

  for (let level = 0; level <= viewLevel; level++) {
    const cutLevel = cut && level === viewLevel;
    for (let row = 0; row <= TILES; row++) for (let col = 0; col <= TILES; col++) {
      for (const orient of ['W', 'N']) {
        const wall = (orient === 'W' ? layout.wallW : layout.wallN)[level][row][col];
        if (!wall || !wall.type || wall.type === 'hull') continue;
        const usesCut = wall.type === 'wall' || wall.type === 'door' || wall.type === 'window';
        root.add(buildWall(orient, col, row, level, wall, usesCut && cutLevel));
      }
      if (level > 0 && row < TILES && col < TILES) {
        const type = layout.floor[level][row][col];
        if (type === FLOOR.interior || type === FLOOR.roof || type === FLOOR.deck) root.add(floorTile(col, row, level, type));
      }
    }
  }
  for (const stair of layout.stairs) if (stair.level <= viewLevel) root.add(buildStairs(stair));
  for (const item of layout.objects) {
    if (item.level > viewLevel) continue;
    const object = buildObject(item, viewLevel);
    if (object) root.add(object);
  }
  root.add(getDoorLeaves());
  setEnvIntensity(root, 0.28);
  return root;
}

// Склейка неподвижной геометрии по материалам: тысячи стен и предметов -> десятки вызовов отрисовки.
// Стены собраны из коробок с разными материалами граней — такие меши режутся по группам.
function mergeStatic(root) {
  root.updateMatrixWorld(true);
  const buckets = new Map();
  const keep = [];
  root.traverse((node) => {
    if (!node.isMesh) return;
    if (node.isInstancedMesh || node.isSkinnedMesh || node.morphTargetInfluences) { keep.push(node); return; }
    const materials = Array.isArray(node.material) ? node.material : [node.material];
    let geometry = node.geometry.index ? node.geometry.toNonIndexed() : node.geometry.clone();
    const withColorAny = materials.some((material) => material.vertexColors) && !!geometry.attributes.color;
    for (const name of Object.keys(geometry.attributes)) {
      if (name !== 'position' && name !== 'normal' && name !== 'uv' && !(withColorAny && name === 'color')) geometry.deleteAttribute(name);
    }
    if (!geometry.attributes.normal) geometry.computeVertexNormals();
    if (!geometry.attributes.uv) geometry.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(geometry.attributes.position.count * 2), 2));
    geometry.morphAttributes = {};
    geometry.applyMatrix4(node.matrixWorld);
    if (node.matrixWorld.determinant() < 0) flipWinding(geometry);
    const total = geometry.attributes.position.count;
    // группы имеют смысл только при массиве материалов (у BoxGeometry они есть всегда — по граням)
    const groups = Array.isArray(node.material) && geometry.groups.length ? geometry.groups : [{ start: 0, count: total, materialIndex: 0 }];
    for (const group of groups) {
      const material = materials[group.materialIndex || 0];
      if (!material || !material.visible) continue;
      const count = Math.min(group.count, total - group.start);
      if (count <= 0) continue;
      const part = groups.length === 1 ? geometry : extractRange(geometry, group.start, count);
      const withColor = !!material.vertexColors && !!part.attributes.color;
      if (!withColor && part.attributes.color) part.deleteAttribute('color');
      part.clearGroups();
      const key = `${material.uuid}|${node.castShadow ? 1 : 0}${node.receiveShadow ? 1 : 0}|${withColor ? 1 : 0}`;
      if (!buckets.has(key)) buckets.set(key, { material, castShadow: node.castShadow, receiveShadow: node.receiveShadow, geometries: [] });
      buckets.get(key).geometries.push(part);
    }
    if (groups.length > 1) geometry.dispose();
  });
  const merged = new THREE.Group();
  for (const bucket of buckets.values()) {
    const geometry = mergeGeometries(bucket.geometries, false);
    bucket.geometries.forEach((part) => part.dispose());
    if (!geometry) continue;
    const mesh = new THREE.Mesh(geometry, bucket.material);
    mesh.castShadow = bucket.castShadow;
    mesh.receiveShadow = bucket.receiveShadow;
    merged.add(mesh);
  }
  for (const node of keep) merged.attach(node);
  return merged;
}

// вершины [start, start + count) неиндексированной геометрии — в отдельную геометрию
function extractRange(geometry, start, count) {
  const part = new THREE.BufferGeometry();
  for (const [name, attribute] of Object.entries(geometry.attributes)) {
    const size = attribute.itemSize;
    part.setAttribute(name, new THREE.BufferAttribute(attribute.array.slice(start * size, (start + count) * size), size, attribute.normalized));
  }
  return part;
}

// зеркальная матрица выворачивает треугольники — меняем порядок вершин обратно
function flipWinding(geometry) {
  for (const attribute of Object.values(geometry.attributes)) {
    const size = attribute.itemSize, array = attribute.array;
    for (let first = 0; first + 2 < attribute.count; first += 3) {
      for (let component = 0; component < size; component++) {
        const second = (first + 1) * size + component, third = (first + 2) * size + component;
        const saved = array[second];
        array[second] = array[third];
        array[third] = saved;
      }
    }
    attribute.needsUpdate = true;
  }
}

let world = null;
let shownLevels = LEVELS - 1;
let cutWalls = false;

function disposeTree(root) {
  root.traverse((node) => { if (node.isMesh && node.geometry) node.geometry.dispose(); });
}

function rebuildWorld() {
  if (world) { scene.remove(world); disposeTree(world); }
  const started = performance.now();
  const source = buildBaseWorld(shownLevels, cutWalls);
  world = mergeStatic(source);
  disposeTree(source);
  scene.add(world);
  const reasons = {};
  world.children.forEach((node) => { const reason = node.isInstancedMesh ? 'instanced' : Array.isArray(node.material) ? 'multi' : node.geometry.groups.length > 1 ? 'groups' : node.morphTargetInfluences ? 'morph' : 'merged'; reasons[reason] = (reasons[reason] || 0) + 1; });
  window.base3dStats = { buildMs: Math.round(performance.now() - started), meshes: world.children.length, reasons };
  renderer.shadowMap.needsUpdate = true;
  updateLabels();
  requestRender();
}

// ---------------- подписи помещений ----------------
const labelLayer = document.createElement('div');
labelLayer.id = 'labels';
document.body.appendChild(labelLayer);
const labels = BASE_PLAN.rooms.filter((room) => room.module !== 0 || room.width * room.height >= 24).map((room) => {
  const element = document.createElement('div');
  element.className = 'room-label';
  element.textContent = room.name;
  element.style.borderColor = MODULE_COLORS[room.module] || '#808080';
  labelLayer.appendChild(element);
  const position = new THREE.Vector3((BASE_COL + room.x + room.width / 2) * TILE, 0, (BASE_ROW + room.y + room.height / 2) * TILE);
  return { element, room, position, baseLevel: room.level || 0 };
});
let labelsVisible = true;

function updateLabels() {
  for (const label of labels) {
    const topLevel = Math.min(shownLevels, label.baseLevel + (label.room.levels || 1) - 1);
    label.position.y = Math.max(label.baseLevel, Math.min(topLevel, shownLevels)) * LEVEL_H + 0.4;
    label.hidden = label.baseLevel > shownLevels;
  }
}

const projected = new THREE.Vector3();
function placeLabels() {
  labelLayer.style.display = labelsVisible ? 'block' : 'none';
  if (!labelsVisible) return;
  const width = window.innerWidth, height = window.innerHeight;
  // ближние подписи ставим первыми; подпись, налезающая на уже поставленную, скрывается
  for (const label of labels) label.distance = camera.position.distanceTo(label.position);
  const placed = [];
  for (const label of [...labels].sort((first, second) => first.distance - second.distance)) {
    projected.copy(label.position).project(camera);
    let visible = !label.hidden && label.distance < 120 && projected.z < 1 && Math.abs(projected.x) < 1.1 && Math.abs(projected.y) < 1.1;
    const screenX = (projected.x + 1) / 2 * width, screenY = (1 - projected.y) / 2 * height;
    if (visible) {
      if (!label.width) label.width = label.element.offsetWidth || label.room.name.length * 7 + 16;
      const rect = [screenX - label.width / 2, screenY - 10, screenX + label.width / 2, screenY + 10];
      visible = !placed.some((other) => rect[0] < other[2] && rect[2] > other[0] && rect[1] < other[3] && rect[3] > other[1]);
      if (visible) placed.push(rect);
    }
    label.element.style.display = visible ? 'block' : 'none';
    if (!visible) continue;
    label.element.style.transform = `translate(${screenX.toFixed(1)}px, ${screenY.toFixed(1)}px) translate(-50%, -50%)`;
    label.element.style.opacity = label.distance > 85 ? '0.6' : '1';
  }
}

// ---------------- панель ----------------
const panel = document.createElement('div');
panel.id = 'panel';
panel.innerHTML = `
  <div class="title">ОСМОТР БАЗЫ</div>
  <div class="row">Уровни: <span id="levels"></span></div>
  <div class="row"><label><input type="checkbox" id="cut"> срезать стены верхнего уровня</label></div>
  <div class="row"><label><input type="checkbox" id="names" checked> подписи помещений</label></div>
  <div class="row views">
    <button data-view="home">Как в игре</button><button data-view="top">Сверху</button>
    <button data-view="n">С севера</button><button data-view="s">С юга</button>
    <button data-view="w">С запада</button><button data-view="e">С востока</button>
  </div>
  <div class="help">ЛКМ — вращать · ПКМ / стрелки — сдвиг · колесо — масштаб · 1–4 — уровни · R — вид как в игре · Esc — назад</div>
  <button id="back" class="back">НАЗАД НА БАЗУ</button>`;
document.body.appendChild(panel);

const levelBox = panel.querySelector('#levels');
for (let level = 0; level < LEVELS; level++) {
  const button = document.createElement('button');
  button.textContent = String(level + 1);
  button.dataset.level = String(level);
  levelBox.appendChild(button);
}
function syncLevelButtons() {
  levelBox.querySelectorAll('button').forEach((button) => button.classList.toggle('on', Number(button.dataset.level) <= shownLevels));
}
levelBox.addEventListener('click', (event) => {
  const level = event.target.dataset && event.target.dataset.level;
  if (level === undefined) return;
  setLevels(Number(level));
});
function setLevels(level) {
  if (level === shownLevels) return;
  shownLevels = level;
  syncLevelButtons();
  rebuildWorld();
}
panel.querySelector('#cut').addEventListener('change', (event) => { cutWalls = event.target.checked; rebuildWorld(); });
panel.querySelector('#names').addEventListener('change', (event) => { labelsVisible = event.target.checked; requestRender(); });
panel.querySelector('.views').addEventListener('click', (event) => {
  const view = event.target.dataset && event.target.dataset.view;
  if (!view) return;
  if (view === 'home') homeView();
  else if (view === 'top') viewFrom(0, 85, 75);
  else if (view === 'n') viewFrom(180, 30, 60);
  else if (view === 's') viewFrom(0, 30, 60);
  else if (view === 'w') viewFrom(-90, 30, 60);
  else if (view === 'e') viewFrom(90, 30, 60);
  requestRender();
});
function goBack() {
  if (window.BASE3D_BACK) location.href = window.BASE3D_BACK;
  else history.back();
}
panel.querySelector('#back').addEventListener('click', goBack);
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') goBack();
  else if (event.key >= '1' && event.key <= String(LEVELS)) setLevels(Number(event.key) - 1);
  else if (event.key === 'r' || event.key === 'R' || event.key === 'к' || event.key === 'К') { homeView(); requestRender(); }
});

// ---------------- цикл: рисуем только когда что-то меняется ----------------
let renderQueued = false;
function requestRender() {
  if (renderQueued) return;
  renderQueued = true;
  requestAnimationFrame(frame);
}
function frame() {
  renderQueued = false;
  const moving = controls.update();
  renderer.render(scene, camera);
  placeLabels();
  if (moving) requestRender();
}
controls.addEventListener('change', requestRender);
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  requestRender();
});

syncLevelButtons();
homeView();
rebuildWorld();
{ const loading = document.getElementById('loading'); if (loading) loading.remove(); }
window.base3dReady = true;
