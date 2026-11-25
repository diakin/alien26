// WebGL-карта для игры: та же сцена, что в тайлах (outpost_scene.js), но рисуется в реальном времени
// ортокамерой игры (шаг клетки 61 × 35 пикселей, как у тайлов и спрайтов юнитов). Камеру можно повернуть
// на 90°: поворачивается корень сцены (как rotateLayout в outpost_layout.js), спрайты юнитов игра берёт
// с направлением, сдвинутым на 2 из 8.
//
// Юниты и тела игра рисует сама, на своём 2D-холсте (картинки с диска file:// в WebGL как текстуры не загрузить).
// Кадр складывается слоями: карта целиком -> подсветка пола и юниты (2D) -> «то, что перед ними» -> рамки и эффекты.
// Слой «перед ними» — та же сцена, но рисуются только точки ближе порога глубины: плоскости пола уровня обзора,
// а в прямоугольниках юнитов — вертикальной плоскости через юнит (выше точки ног) и пола перед ним (ниже), обе
// чуть вынесены к камере. Так стены и предметы перед юнитом его закрывают, стены за ним и пол под ногами — нет,
// а подсветка пола не ложится на стены.
//
// Сборка в игру: tools/render/build_map3d.sh -> game/js/map3d.js (window.Map3D). Карта — globalThis.ALIENS_MAP.
import * as THREE from 'three';
import { TILE, TILES, LEVELS, LEVEL_H, FLOOR, MAP_NAME } from './outpost_layout.js';
import { buildStairs,
  layout, renderer, scene, sun, SIZE, CENTER, MAT, buildWall, floorTile, buildObject, getDoorLeaves, resetDoorLeaves,
} from './outpost_scene.js';
import { setEnvIntensity } from './lib.js';
import { mergeStatic } from './scene_merge.js';

// ---------------- камера игры ----------------
const STEP_X = 61, STEP_Y = 35;
const PIXELS_PER_METER = STEP_X / (TILE * Math.SQRT1_2);
const ELEVATION = Math.asin(STEP_Y / STEP_X);
const UP_PIXELS = PIXELS_PER_METER * Math.cos(ELEVATION);          // пикселей экрана на метр высоты
const FORWARD_PIXELS = PIXELS_PER_METER * Math.sin(ELEVATION);     // пикселей экрана на метр к камере по земле
const DOWN = new THREE.Vector2(Math.SQRT1_2, Math.SQRT1_2);
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 300);
camera.position.set(CENTER.x + DOWN.x * Math.cos(ELEVATION) * 120, Math.sin(ELEVATION) * 120, CENTER.z + DOWN.y * Math.cos(ELEVATION) * 120);
camera.lookAt(CENTER);
camera.updateMatrixWorld(true);
const ORIGIN_CAMERA = new THREE.Vector3(0, 0, 0).applyMatrix4(camera.matrixWorldInverse);
const TOWARD_CAMERA = new THREE.Vector3(DOWN.x, 0, DOWN.y);        // по земле к камере
const UP = new THREE.Vector3(0, 1, 0);

// поворот вида на 90°: точка (x, z) в метрах -> (SIZE - z, x)
const TURN_MATRIX = new THREE.Matrix4().makeTranslation(TILE * TILES, 0, 0).multiply(new THREE.Matrix4().makeRotationY(-Math.PI / 2));

// ---------------- состояние ----------------
const root = new THREE.Group();
root.matrixAutoUpdate = false;
scene.add(root);
const levelGroups = [];         // [уровень] = { wallsFull, wallsCut, rockFull, rockCut, objects }
const doorLeaves = [];          // [дверь] = { full: Group, cut: Group, along: Vector3 }
let field = null;
let turns = 0, viewLevel = LEVELS - 1, viewCut = false;
let viewport = { x: 0, y: 0, width: 1, height: 1, ratio: 1 };
let ready = false;
const stats = { buildMs: 0, drawCalls: 0, triangles: 0, proxies: 0 };

// холст WebGL не показывается: игра копирует кадры на свой 2D-холст
renderer.domElement.style.display = 'none';
renderer.shadowMap.autoUpdate = false;
renderer.autoClear = false;
renderer.localClippingEnabled = false;

// свет лампы — на всё поле
{
  const half = SIZE / 2 + 2;
  Object.assign(sun.shadow.camera, { left: -half, right: half, top: half, bottom: -half, near: 1, far: 140 });
  sun.shadow.camera.updateProjectionMatrix();
  sun.shadow.mapSize.set(4096, 4096);
}

const nextFrame = () => new Promise((resolve) => setTimeout(resolve, 0));

// ---------------- сборка сцены базы ----------------
function rockSlab(item, level, cut) {
  const bottom = level * LEVEL_H;
  if (bottom >= item.height - 1e-6) return null;
  const top = Math.min(item.height, cut ? bottom + 0.8 : bottom + LEVEL_H);
  return buildObject({ ...item, bottom, top }, LEVELS - 1);
}

async function buildBase(doors, onProgress) {
  const started = performance.now();
  const doorIndex = new Map();
  doors.forEach((door, index) => doorIndex.set(`${door[0]}|${door[1]}|${door[2]}|${door[3] === 0 ? 'W' : 'N'}`, index));

  // порода и плиты пола первого уровня
  const ground = new THREE.Group();
  const rock = new THREE.Mesh(new THREE.PlaneGeometry(SIZE + 40, SIZE + 40), new THREE.MeshStandardMaterial({ color: 0x14120f, roughness: 1 }));
  rock.rotation.x = -Math.PI / 2;
  rock.position.set(SIZE / 2, -0.03, SIZE / 2);
  rock.receiveShadow = true;
  ground.add(rock);
  const plateCells = [];
  for (let row = 0; row < TILES; row++) for (let col = 0; col < TILES; col++) if (layout.floor[0][row][col] === FLOOR.interior) plateCells.push([col, row]);
  const plates = new THREE.InstancedMesh(new THREE.BoxGeometry(TILE + 0.004, 0.04, TILE + 0.004), MAT.interiorFloor(), plateCells.length);
  const matrix = new THREE.Matrix4();
  plateCells.forEach(([col, row], index) => plates.setMatrixAt(index, matrix.makeTranslation((col + 0.5) * TILE, 0.025, (row + 0.5) * TILE)));
  plates.receiveShadow = true;
  ground.add(plates);
  setEnvIntensity(ground, 0.28);
  root.add(ground);

  for (let level = 0; level < LEVELS; level++) {
    const wallsFull = new THREE.Group(), wallsCut = new THREE.Group(), rockFull = new THREE.Group(), rockCut = new THREE.Group(), objects = new THREE.Group();
    for (let row = 0; row <= TILES; row++) {
      for (let col = 0; col <= TILES; col++) {
        for (const orient of ['W', 'N']) {
          const wall = (orient === 'W' ? layout.wallW : layout.wallN)[level][row][col];
          if (!wall || !wall.type || wall.type === 'hull') continue;
          const usesCut = wall.type === 'wall' || wall.type === 'door' || wall.type === 'window';
          for (const cut of usesCut ? [false, true] : [false]) {
            resetDoorLeaves();
            const built = buildWall(orient, col, row, level, wall, cut);
            (cut ? wallsCut : wallsFull).add(built);
            if (!usesCut) wallsCut.add(buildWall(orient, col, row, level, wall, false));
            const leaves = getDoorLeaves();
            const index = doorIndex.get(`${col}|${row}|${level}|${orient}`);
            if (wall.type === 'door' && index !== undefined && leaves.children.length) {
              if (!doorLeaves[index]) doorLeaves[index] = { along: orient === 'W' ? new THREE.Vector3(0, 0, 1) : new THREE.Vector3(1, 0, 0), level, rollUp: !!wall.gate };
              doorLeaves[index][cut ? 'cut' : 'full'] = leaves;
              setEnvIntensity(leaves, 0.28);
              root.add(leaves);
            }
          }
        }
        if (level > 0 && row < TILES && col < TILES) {
          const type = layout.floor[level][row][col];
          if (type === FLOOR.interior || type === FLOOR.roof || type === FLOOR.deck) objects.add(floorTile(col, row, level, type));
        }
      }
    }
    for (const stair of layout.stairs) if (stair.level === level) objects.add(buildStairs(stair));
    for (const item of layout.objects) {
      if (item.kind === 'rockFill') {
        const full = rockSlab(item, level, false), cut = rockSlab(item, level, true);
        if (full) rockFull.add(full);
        if (cut) rockCut.add(cut);
        continue;
      }
      if (item.level !== level) continue;
      const object = buildObject(item, LEVELS - 1);
      if (object) objects.add(object);
    }
    const groups = { wallsFull, wallsCut, rockFull, rockCut, objects };
    for (const name of Object.keys(groups)) {
      setEnvIntensity(groups[name], 0.28);
      const merged = mergeStatic(groups[name]);
      merged.name = `${name}${level}`;
      groups[name] = merged;
      root.add(merged);
    }
    levelGroups[level] = groups;
    if (onProgress) onProgress((level + 1) / LEVELS);
    await nextFrame();
  }
  stats.buildMs = Math.round(performance.now() - started);
}

// ---------------- видимость по уровню обзора и срезу ----------------
function applyVisibility() {
  for (let level = 0; level < LEVELS; level++) {
    const groups = levelGroups[level];
    if (!groups) continue;
    const shown = level <= viewLevel, cut = viewCut && level === viewLevel;
    groups.wallsFull.visible = shown && !cut;
    groups.wallsCut.visible = shown && cut;
    groups.rockFull.visible = shown && !cut;
    groups.rockCut.visible = shown && cut;
    groups.objects.visible = shown;
  }
  doorLeaves.forEach((door) => {
    if (!door) return;
    const shown = door.level <= viewLevel, cut = viewCut && door.level === viewLevel;
    if (door.full) door.full.visible = shown && !cut;
    if (door.cut) door.cut.visible = shown && cut;
  });
  renderer.shadowMap.needsUpdate = true;
}

// ---------------- камера по пикселям карты игры ----------------
function applyCamera() {
  const left = ORIGIN_CAMERA.x + (viewport.x - field.origin[0]) / PIXELS_PER_METER;
  const top = ORIGIN_CAMERA.y - (viewport.y - field.origin[1]) / PIXELS_PER_METER;
  camera.left = left;
  camera.right = left + viewport.width / PIXELS_PER_METER;
  camera.top = top;
  camera.bottom = top - viewport.height / PIXELS_PER_METER;
  camera.updateProjectionMatrix();
}

// ---------------- порог глубины для слоя «перед юнитами» ----------------
const proxyScene = new THREE.Scene();
const PROXY_VERTEX = /* glsl */`void main() { gl_Position = vec4(position, 1.0); }`;
const PROXY_FRAGMENT = /* glsl */`void main() { gl_FragColor = vec4(0.0); }`;
const proxyMaterial = new THREE.ShaderMaterial({ vertexShader: PROXY_VERTEX, fragmentShader: PROXY_FRAGMENT, colorWrite: false, depthWrite: true, depthTest: true, side: THREE.DoubleSide });
const proxyPool = [];
function proxyMesh(index, quads) {
  let mesh = proxyPool[index];
  if (!mesh || mesh.userData.quads < quads) {
    if (mesh) { proxyScene.remove(mesh); mesh.geometry.dispose(); }
    quads = Math.ceil(quads / 16) * 16;
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(quads * 4 * 3), 3));
    const indices = [];
    for (let quad = 0; quad < quads; quad++) indices.push(quad * 4, quad * 4 + 2, quad * 4 + 1, quad * 4 + 1, quad * 4 + 2, quad * 4 + 3);
    geometry.setIndex(indices);
    mesh = new THREE.Mesh(geometry, proxyMaterial);
    mesh.frustumCulled = false;
    mesh.userData.quads = quads;
    proxyPool[index] = mesh;
    proxyScene.add(mesh);
  }
  return mesh;
}
const scratch = new THREE.Vector3();
// глубина (NDC z) точки мира (уже после поворота вида)
function depthOf(point) {
  return scratch.copy(point).project(camera).z;
}
const toNdcX = (x) => (x - viewport.x) / viewport.width * 2 - 1;
const toNdcY = (y) => 1 - (y - viewport.y) / viewport.height * 2;
function writeQuad(array, quad, x0, x1, top, bottom, zTop, zBottom) {
  const corners = [[x0, top, zTop], [x1, top, zTop], [x0, bottom, zBottom], [x1, bottom, zBottom]];
  corners.forEach(([x, y, z], corner) => {
    const offset = (quad * 4 + corner) * 3;
    array[offset] = toNdcX(x); array[offset + 1] = toNdcY(y); array[offset + 2] = z;
  });
}
// плоскость пола на высоте height: глубина в углах окна (в орто-проекции она линейна по экрану)
const floorRay = new THREE.Raycaster();
function floorDepthAt(x, y, height) {
  floorRay.setFromCamera(new THREE.Vector2(toNdcX(x), toNdcY(y)), camera);
  const ray = floorRay.ray;
  const distance = (height - ray.origin.y) / ray.direction.y;
  return depthOf(ray.origin.clone().addScaledVector(ray.direction, distance));
}
// прямоугольник юнита: выше точки ног — вертикальная плоскость, ниже — пол перед юнитом
// proxy: { x0, x1, y0, y1 (пиксели карты), foot: [col, row, высота], footY, pull }
function fillProxy(array, quad, proxy) {
  const foot = new THREE.Vector3(proxy.foot[0] * TILE, proxy.foot[2], proxy.foot[1] * TILE).applyMatrix4(root.matrix);
  const pulled = foot.addScaledVector(TOWARD_CAMERA, proxy.pull);
  const depthAt = (y) => {
    if (y <= proxy.footY) return depthOf(pulled.clone().addScaledVector(UP, (proxy.footY - y) / UP_PIXELS));
    return depthOf(pulled.clone().addScaledVector(TOWARD_CAMERA, (y - proxy.footY) / FORWARD_PIXELS).addScaledVector(UP, 0.02));
  };
  const footY = Math.max(proxy.y0, Math.min(proxy.y1, proxy.footY));
  writeQuad(array, quad, proxy.x0, proxy.x1, proxy.y0, footY, depthAt(proxy.y0), depthAt(footY));
  writeQuad(array, quad + 1, proxy.x0, proxy.x1, footY, proxy.y1, depthAt(footY), depthAt(proxy.y1));
}

// ---------------- общий интерфейс ----------------
const Map3D = {
  supported: MAP_NAME === 'base',
  canvas: renderer.domElement,
  stats,
  get ready() { return ready; },
  async init(options) {
    field = options.field;
    await buildBase(options.doors || [], options.onProgress);
    applyVisibility();
    ready = true;
    return Map3D;
  },
  setViewport(x, y, width, height, ratio) {
    const sizeChanged = width !== viewport.width || height !== viewport.height || ratio !== viewport.ratio;
    viewport = { x, y, width, height, ratio };
    if (sizeChanged) {
      renderer.setPixelRatio(ratio);
      renderer.setSize(width, height);
    }
  },
  setTurns(value) {
    turns = ((value % 4) + 4) % 4;
    root.matrix.identity();
    for (let step = 0; step < turns; step++) root.matrix.premultiply(TURN_MATRIX);
    root.matrixWorldNeedsUpdate = true;
    renderer.shadowMap.needsUpdate = true;
  },
  setLevel(level, cut) {
    if (level === viewLevel && !!cut === viewCut) return;
    viewLevel = level; viewCut = !!cut;
    applyVisibility();
  },
  // open: 0..1, slide: на сколько метров уходит створка при open = 1
  setDoor(index, open, slide) {
    const door = doorLeaves[index];
    if (!door) return;
    for (const leaves of [door.full, door.cut]) {
      if (!leaves) continue;
      // створка широкого проёма поднимается (сворачивается к верху проёма), обычная дверь уезжает в стену
      if (door.rollUp) leaves.traverse((node) => {
        const roll = node.userData.rollUp;
        if (!roll) return;
        const edge = open * roll.gateHeight;                     // нижний край створки над полом уровня 0
        node.scale.y = Math.max(0.002, (roll.top - Math.max(roll.bottom, edge)) / (roll.top - roll.bottom));
      });
      else leaves.position.copy(door.along).multiplyScalar(open * slide);
    }
  },
  // карта целиком (непрозрачный фон)
  render() {
    if (!ready) return;
    applyCamera();
    renderer.setClearColor(scene.background || 0x000000, 1);
    renderer.clear(true, true, true);
    renderer.render(scene, camera);
    stats.drawCalls = renderer.info.render.calls;
    stats.triangles = renderer.info.render.triangles;
  },
  // слой «перед юнитами и подсветкой пола»: прозрачный холст, только точки сцены ближе порога
  // floorHeight — высота пола уровня обзора, м; proxies — прямоугольники юнитов (см. fillProxy)
  renderOccluders(proxies, floorHeight) {
    if (!ready) return;
    applyCamera();
    renderer.setClearColor(0x000000, 0);
    renderer.clear(true, true, true);
    const list = proxies || [];
    const mesh = proxyMesh(0, 1 + list.length * 2);
    const array = mesh.geometry.attributes.position.array;
    const height = floorHeight + 0.06;
    const left = viewport.x, right = viewport.x + viewport.width, top = viewport.y, bottom = viewport.y + viewport.height;
    // пол уровня обзора на всё окно (глубина по углам: плоскость не вертикальна, но в строке x она линейна)
    const corners = [[left, top], [right, top], [left, bottom], [right, bottom]];
    corners.forEach(([x, y], corner) => {
      array[corner * 3] = toNdcX(x); array[corner * 3 + 1] = toNdcY(y); array[corner * 3 + 2] = floorDepthAt(x, y, height);
    });
    list.forEach((proxy, index) => fillProxy(array, 1 + index * 2, proxy));
    mesh.geometry.attributes.position.needsUpdate = true;
    mesh.geometry.setDrawRange(0, (1 + list.length * 2) * 6);
    const background = scene.background;
    renderer.render(proxyScene, camera);
    scene.background = null;
    renderer.render(scene, camera);
    scene.background = background;
    stats.proxies = list.length;
  },
  // пиксель карты (как Iso.toScreen) для точки в клетках — для проверки совпадения с проекцией игры
  pixelOf(col, row, height) {
    applyCamera();
    const point = new THREE.Vector3(col * TILE, height || 0, row * TILE).applyMatrix4(root.matrix).project(camera);
    return { x: viewport.x + (point.x + 1) / 2 * viewport.width, y: viewport.y + (1 - point.y) / 2 * viewport.height };
  },
  // общий вид всего поля (мини-карта): холст outWidth × пропорциональной высоты
  snapshot(outWidth) {
    if (!ready) return null;
    const outHeight = Math.round(outWidth * field.height / field.width);
    const saved = { ...viewport }, savedLevel = viewLevel, savedCut = viewCut;
    viewport = { x: 0, y: 0, width: field.width, height: field.height, ratio: 1 };
    viewLevel = LEVELS - 1; viewCut = false;
    applyVisibility();
    applyCamera();
    const target = new THREE.WebGLRenderTarget(outWidth, outHeight, { samples: 4, colorSpace: THREE.SRGBColorSpace });
    renderer.setRenderTarget(target);
    renderer.setClearColor(0x14120f, 1);
    renderer.clear(true, true, true);
    renderer.render(scene, camera);
    const pixels = new Uint8Array(outWidth * outHeight * 4);
    renderer.readRenderTargetPixels(target, 0, 0, outWidth, outHeight, pixels);
    renderer.setRenderTarget(null);
    target.dispose();
    viewport = saved;
    viewLevel = savedLevel; viewCut = savedCut;
    applyVisibility();
    const canvas = document.createElement('canvas');
    canvas.width = outWidth; canvas.height = outHeight;
    const context = canvas.getContext('2d');
    const image = context.createImageData(outWidth, outHeight);
    for (let row = 0; row < outHeight; row++) image.data.set(pixels.subarray((outHeight - 1 - row) * outWidth * 4, (outHeight - row) * outWidth * 4), row * outWidth * 4);
    context.putImageData(image, 0, 0);
    return canvas;
  },
};
window.Map3D = Map3D;
