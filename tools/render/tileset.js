// Набор тайлов карты «База на плато»: каждый элемент клетки рендерится отдельно той же камерой,
// что и карта целиком. Игра собирает картинку из тайлов, как в UFO (пол, стена W, стена N, предметы).
//
// Тайл привязан к углу своей клетки (col, row) на высоте пола уровня: при камере с шагом клетки
// ровно (61, 35) пикселей один и тот же тайл встаёт в любую клетку уровня без сдвига на доли пикселя.
// Одинаковые элементы (по подписи) рендерятся один раз. Крупные предметы режутся по клеткам
// плоскостями отсечения, чтобы юнит рядом перекрывался правильно.
//
// На каждый тайл три прохода: цвет (с затенением GTAO и собственными тенями), маска силуэта и тень
// на плоскости земли (элемент невидим, но отбрасывает тень). Тени в игре объединяются в один слой.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { mulberry32, tileNoise, rockGeometry, setEnvIntensity, canvasTexture } from './lib.js';
import { bladeGeometry, grassMaterial } from './world.js';
import { TILE, TILES, LEVELS, LEVEL_H, FLOOR, MAP_NAME } from './outpost_layout.js';
import { TILTROTOR } from './vehicles.js';
import {
  layout, V, CENTER, SS, renderer, scene, sun, MAT, PART, hashTile, isIndoor, insideConcrete,
  buildWall, buildDoorLeaf, floorTile, buildStairs, buildLadder, buildObject, buildTower, facadeDetails, resetDoorLeaves,
} from './outpost_scene.js';
import { groundBumpTexture } from './outpost_textures.js';

// ---------------- камера с целым шагом клетки ----------------
// шаг клетки на экране ровно (61, 35): угол камеры asin(35/61) = 35,01°, масштаб 69,01 пикселя на метр
const STEP_X = 61, STEP_Y = 35;
const PIXELS_PER_METER = STEP_X / (TILE * Math.SQRT1_2);
const ELEVATION = Math.asin(STEP_Y / STEP_X);
const UP_PIXELS = PIXELS_PER_METER * Math.cos(ELEVATION);     // пикселей на метр высоты
const DOWN = new THREE.Vector2((0 + 1) * Math.SQRT1_2, (1 - 0) * Math.SQRT1_2);   // toXZ(0, 1) из world.js
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 300);
camera.position.set(CENTER.x + DOWN.x * Math.cos(ELEVATION) * 120, Math.sin(ELEVATION) * 120, CENTER.z + DOWN.y * Math.cos(ELEVATION) * 120);
camera.lookAt(CENTER);
camera.updateMatrixWorld(true);

// пиксель точки мира относительно пикселя anchor (в масштабе x1)
function pixelOf(point, anchorCamera) {
  const local = point.clone().applyMatrix4(camera.matrixWorldInverse);
  return [(local.x - anchorCamera.x) * PIXELS_PER_METER, -(local.y - anchorCamera.y) * PIXELS_PER_METER];
}

// ---------------- материалы прохода маски и тени ----------------
const WHITE = new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false });
const GRAY = new THREE.Color(0x808080), BLACK = new THREE.Color(0x000000), WHITE_BG = new THREE.Color(0xffffff);
renderer.localClippingEnabled = true;
const receiver = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), new THREE.ShadowMaterial({ opacity: 1 }));
receiver.rotation.x = -Math.PI / 2;
receiver.position.set(CENTER.x, 0, CENTER.z);
receiver.receiveShadow = true;
const SUN_DIRECTION = new THREE.Vector3().subVectors(sun.position, sun.target.position).normalize();

// ---------------- земля: бесшовные текстуры с периодом 4 клетки ----------------
const PERIOD_CELLS = 4, PERIOD = PERIOD_CELLS * TILE;
const SEAM = 0.02;              // нахлёст на соседнюю клетку, м
const smoothstep = (edge0, edge1, value) => { const t = Math.max(0, Math.min(1, (value - edge0) / (edge1 - edge0))); return t * t * (3 - 2 * t); };
const clampByte = (value) => Math.max(0, Math.min(255, Math.round(value)));

function periodicGroundTexture(concrete) {
  const size = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const context = canvas.getContext('2d');
  const image = context.createImageData(size, size);
  const rng = mulberry32(concrete ? 211 : 101);
  const sand = [176, 146, 112], sandDark = [128, 102, 78], sandRed = [168, 118, 84], gravel = [116, 106, 96], grey = [150, 148, 140];
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const u = x / size, v = y / size;
      const large = tileNoise(u, v, 1.6, 3, 3.1), medium = tileNoise(u, v, 4, 4, 8.3), fine = tileNoise(u, v, 14, 3, 12.7);
      let red = sand[0], green = sand[1], blue = sand[2];
      const redness = smoothstep(-0.1, 0.4, large);
      red += (sandRed[0] - red) * redness * 0.6; green += (sandRed[1] - green) * redness * 0.6; blue += (sandRed[2] - blue) * redness * 0.6;
      const dark = smoothstep(0.05, 0.45, medium) * 0.55;
      red += (sandDark[0] - red) * dark; green += (sandDark[1] - green) * dark; blue += (sandDark[2] - blue) * dark;
      const gravelAmount = smoothstep(0.15, 0.5, fine) * 0.5;
      red += (gravel[0] - red) * gravelAmount; green += (gravel[1] - green) * gravelAmount; blue += (gravel[2] - blue) * gravelAmount;
      let tone = 0.92 + fine * 0.18 + (rng() - 0.5) * 0.16;
      if (rng() < 0.012) tone *= 0.6 + rng() * 0.6;
      if (concrete) {
        // плиты 2,5 м (две на период), швы, пятна
        const worldX = u * PERIOD, worldZ = v * PERIOD;
        const slabX = Math.floor(worldX / 2.5) % 2, slabZ = Math.floor(worldZ / 2.5) % 2;
        const slabTone = 0.9 + ((slabX * 73856093 ^ slabZ * 19349663) >>> 0) % 1000 / 1000 * 0.16;
        const seamX = Math.abs(worldX / 2.5 - Math.round(worldX / 2.5)) * 2.5, seamZ = Math.abs(worldZ / 2.5 - Math.round(worldZ / 2.5)) * 2.5;
        const seam = Math.min(seamX, seamZ) < 0.012 ? 0.55 : 1;
        const stain = 1 - smoothstep(0.1, 0.5, medium) * 0.2;
        const concreteTone = slabTone * seam * stain * (0.95 + fine * 0.08) + (rng() - 0.5) * 0.07;
        red = grey[0] * concreteTone / tone; green = grey[1] * concreteTone / tone; blue = grey[2] * concreteTone / tone;
      }
      const offset = (y * size + x) * 4;
      image.data[offset] = clampByte(red * tone);
      image.data[offset + 1] = clampByte(green * tone);
      image.data[offset + 2] = clampByte(blue * tone);
      image.data[offset + 3] = 255;
    }
  }
  context.putImageData(image, 0, 0);
  const texture = canvasTexture(canvas);
  texture.flipY = false;
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.anisotropy = 8;
  return texture;
}
const groundMaterials = {};
function groundMaterial(concrete) {
  const key = concrete ? 'concrete' : 'dirt';
  if (!groundMaterials[key]) {
    const bump = groundBumpTexture();
    bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
    bump.repeat.set(PERIOD_CELLS, PERIOD_CELLS);           // период рельефа — одна клетка
    groundMaterials[key] = new THREE.MeshStandardMaterial({ map: periodicGroundTexture(concrete), bumpMap: bump, bumpScale: 1.6, roughness: 0.95 });
  }
  return groundMaterials[key];
}

// квадрат земли клетки с запасом overlap: UV по мировым координатам, поэтому соседние клетки стыкуются
function groundPlane(col, row, concrete, overlap) {
  const x0 = col * TILE - overlap, x1 = (col + 1) * TILE + overlap, z0 = row * TILE - overlap, z1 = (row + 1) * TILE + overlap;
  const geometry = new THREE.BufferGeometry();
  const positions = [x0, 0, z0, x1, 0, z0, x1, 0, z1, x0, 0, z1];
  const uvs = [];
  for (let index = 0; index < 4; index++) uvs.push(positions[index * 3] / PERIOD, positions[index * 3 + 2] / PERIOD);
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setAttribute('normal', new THREE.Float32BufferAttribute([0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0], 3));
  geometry.setIndex([0, 2, 1, 0, 3, 2]);
  const mesh = new THREE.Mesh(geometry, groundMaterial(concrete));
  mesh.receiveShadow = true;
  return mesh;
}

// камешки и сухие кустики внутри клетки (не заходят на соседние): вариант зависит от места в периоде
const stoneGeometry = rockGeometry(1, 3, { flatten: 0.6, roughness: 0.4, detail: 1 });
const stoneMaterial = new THREE.MeshStandardMaterial({ color: 0xb09276, roughness: 0.95 });
function groundDetails(col, row, concrete) {
  const group = new THREE.Group();
  const rng = mulberry32(1000 + (col % PERIOD_CELLS) * 37 + (row % PERIOD_CELLS) * 101 + (concrete ? 7 : 0));
  const count = concrete ? Math.floor(rng() * 2) : 3 + Math.floor(rng() * 4);
  const stones = new THREE.InstancedMesh(stoneGeometry, stoneMaterial, count);
  const matrix = new THREE.Matrix4(), quaternion = new THREE.Quaternion(), scale = new THREE.Vector3(), position = new THREE.Vector3(), color = new THREE.Color();
  for (let index = 0; index < count; index++) {
    const size = rng() < 0.05 ? 0.07 + rng() * 0.12 : 0.02 + rng() * 0.04;
    const margin = size * 1.5;
    position.set(col * TILE + margin + rng() * (TILE - 2 * margin), size * 0.2, row * TILE + margin + rng() * (TILE - 2 * margin));
    quaternion.setFromEuler(new THREE.Euler(rng() * 0.5, rng() * 6.3, rng() * 0.5));
    scale.set(size * (0.8 + rng() * 0.6), size, size * (0.8 + rng() * 0.6));
    matrix.compose(position, quaternion, scale);
    stones.setMatrixAt(index, matrix);
    const tone = 0.7 + rng() * 0.45;
    stones.setColorAt(index, color.setRGB(tone, tone * (0.92 + rng() * 0.08), tone * (0.84 + rng() * 0.1)));
  }
  stones.castShadow = stones.receiveShadow = true;
  group.add(stones);
  if (!concrete && rng() < 0.3) {
    const bladeCount = 25 + Math.floor(rng() * 50);
    const blades = new THREE.InstancedMesh(bladeGeometry(), grassMaterial(), bladeCount);
    const radius = 0.08 + rng() * 0.14, height = 0.12 + rng() * 0.2;
    const centerX = col * TILE + 0.35 + rng() * (TILE - 0.7), centerZ = row * TILE + 0.35 + rng() * (TILE - 0.7);
    const euler = new THREE.Euler(0, 0, 0, 'YXZ');
    for (let blade = 0; blade < bladeCount; blade++) {
      const angle = rng() * Math.PI * 2, distance = Math.sqrt(rng()) * radius;
      position.set(centerX + Math.cos(angle) * distance, 0, centerZ + Math.sin(angle) * distance);
      euler.set(0.2 + distance / radius * 0.6, angle + Math.PI / 2, (rng() - 0.5) * 0.3);
      quaternion.setFromEuler(euler);
      scale.set(0.9, height * (0.5 + rng() * 0.7), 1);
      matrix.compose(position, quaternion, scale);
      blades.setMatrixAt(blade, matrix);
      blades.setColorAt(blade, color.setRGB(0.52 + rng() * 0.2, 0.44 + rng() * 0.15, 0.24 + rng() * 0.1));
    }
    blades.receiveShadow = true;
    group.add(blades);
  }
  return group;
}

// цоколь корпусов (как в groundFloorPlates): клетка целиком под ним, частично или вне
const plinths = layout.buildings.filter((building) => building.levels && !building.base).map((building) => [
  building.col0 * TILE - 0.25, (building.col1 + 1) * TILE + 0.25, building.row0 * TILE - 0.25, (building.row1 + 1) * TILE + 0.25]);
function plinthCover(col, row) {
  let result = 'none';
  for (const [x0, x1, z0, z1] of plinths) {
    const overlapX = Math.min(x1, (col + 1) * TILE) - Math.max(x0, col * TILE), overlapZ = Math.min(z1, (row + 1) * TILE) - Math.max(z0, row * TILE);
    if (overlapX <= 0 || overlapZ <= 0) continue;
    if (overlapX >= TILE - 1e-6 && overlapZ >= TILE - 1e-6) return 'full';
    result = 'part';
  }
  return result;
}

// цоколь корпусов и пол помещения первого этажа (как groundFloorPlates), но плита пола чуть шире клетки,
// чтобы на стыке соседних плит не просвечивал цоколь
function plinthAndPlate(col, row, plate) {
  const group = new THREE.Group();
  for (const [x0, x1, z0, z1] of plinths) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(x1 - x0, 0.08, z1 - z0), MAT.concrete());
    mesh.position.set((x0 + x1) / 2, 0, (z0 + z1) / 2);
    group.add(mesh);
  }
  if (plate) {
    const size = TILE + 2 * SEAM;
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(size, 0.04, size), MAT.interiorFloor());
    mesh.position.set((col + 0.5) * TILE, 0.025, (row + 0.5) * TILE);     // верх на 5 мм выше цоколя: без мерцания совпадающих граней
    group.add(mesh);
  }
  group.traverse((node) => { if (node.isMesh) node.castShadow = node.receiveShadow = true; });
  return group;
}

// ---------------- срезы по клеткам ----------------
// призма клетки (и, если задано, слой уровня по высоте). Чуть шире к соседям, которые рисуются раньше
// (меньше col и row): более поздний срез перекрывает стык, и шов не просвечивает.
function sliceBox(slice) {
  const y0 = slice.levelCut ? slice.level * LEVEL_H + 0.05 : -100;
  const y1 = slice.levelCut ? (slice.level + 1) * LEVEL_H + 0.05 : slice.top !== undefined ? slice.top : 100;
  return new THREE.Box3(V(slice.col * TILE - SEAM, y0, slice.row * TILE - SEAM), V((slice.col + 1) * TILE, y1, (slice.row + 1) * TILE));
}
function slicePlanes(slice) {
  const box = sliceBox(slice);
  const planes = [
    new THREE.Plane(V(1, 0, 0), -box.min.x), new THREE.Plane(V(-1, 0, 0), box.max.x),
    new THREE.Plane(V(0, 0, 1), -box.min.z), new THREE.Plane(V(0, 0, -1), box.max.z),
  ];
  if (slice.levelCut) planes.push(new THREE.Plane(V(0, 1, 0), -box.min.y), new THREE.Plane(V(0, -1, 0), box.max.y));
  else if (slice.top !== undefined) planes.push(new THREE.Plane(V(0, -1, 0), slice.top));
  return planes;
}

// клетки и уровни, которые задевает группа (по рамкам отдельных мешей)
function touchedSlices(group, levelCut, baseLevel) {
  group.updateMatrixWorld(true);
  const found = new Map();
  group.traverse((node) => {
    if (!node.isMesh) return;
    const box = new THREE.Box3().setFromObject(node);
    if (box.isEmpty()) return;
    const col0 = Math.max(0, Math.floor(box.min.x / TILE)), col1 = Math.min(TILES - 1, Math.floor((box.max.x - 1e-6) / TILE));
    const row0 = Math.max(0, Math.floor(box.min.z / TILE)), row1 = Math.min(TILES - 1, Math.floor((box.max.z - 1e-6) / TILE));
    const level0 = levelCut ? Math.max(0, Math.floor((box.min.y - 0.05) / LEVEL_H)) : baseLevel;
    const level1 = levelCut ? Math.min(LEVELS - 1, Math.floor((box.max.y - 0.05 - 1e-6) / LEVEL_H)) : baseLevel;
    for (let level = level0; level <= level1; level++) for (let row = row0; row <= row1; row++) for (let col = col0; col <= col1; col++) found.set(`${col},${row},${level}`, { col, row, level, levelCut });
  });
  return [...found.values()];
}

// ---------------- план: уникальные тайлы и их места на карте ----------------
const jobs = [];
const jobBySignature = new Map();
function job(signature, info, build) {
  if (jobBySignature.has(signature)) return jobBySignature.get(signature);
  const id = jobs.length;
  jobs.push({ id, signature, build, ...info });
  jobBySignature.set(signature, id);
  return id;
}
const cellIndex = (col, row) => row * TILES + col;
const stride = TILES + 1;

const plan = {
  tiles: TILES, levels: LEVELS,
  ground: new Array(TILES * TILES).fill(-1),
  floor: Array.from({ length: LEVELS }, () => new Array(TILES * TILES).fill(-1)),
  wallW: Array.from({ length: LEVELS }, () => new Array(stride * stride).fill(-1)),
  wallN: Array.from({ length: LEVELS }, () => new Array(stride * stride).fill(-1)),
  cutOf: {},          // тайл стены -> тайл той же стены, срезанной до пояса
  objects: [],        // [тайл, col, row, level]
  doors: [],          // [col, row, level, 'W'|'N', тайл створки, тайл створки при срезе]
};

// земля (под землёй, MAP=base: только плита пола в помещениях, вне их — темнота)
const UNDERGROUND = MAP_NAME === 'base';
for (let row = 0; row < TILES; row++) {
  for (let col = 0; col < TILES; col++) {
    if (UNDERGROUND) {
      if (layout.floor[0][row][col] !== FLOOR.interior) continue;
      plan.ground[cellIndex(col, row)] = job('ground|base', { part: PART.ground, level: 0, col, row, shadow: false, slice: null }, () => plinthAndPlate(col, row, true));
      continue;
    }
    const concrete = insideConcrete((col + 0.5) * TILE, (row + 0.5) * TILE);
    // плита пола — только под зданиями (на цоколе); салон конвертоплана тоже «внутри», но пол у него свой
    const cover = plinthCover(col, row), plate = layout.indoor[0][row][col] === 1 && cover !== 'none';
    let signature;
    if (cover === 'full') signature = `ground|full|${plate}`;
    else if (cover === 'part') signature = `ground|part|${col}|${row}`;
    else signature = `ground|${concrete ? 'c' : 'd'}|${col % PERIOD_CELLS}|${row % PERIOD_CELLS}|${plate}`;
    plan.ground[cellIndex(col, row)] = job(signature, { part: PART.ground, level: 0, col, row, shadow: false, slice: cover !== 'none' ? { col, row, level: 0, levelCut: false } : null }, () => {
      const group = new THREE.Group();
      group.add(groundPlane(col, row, concrete, 0.03));
      if (cover !== 'full') group.add(groundDetails(col, row, concrete));
      if (cover !== 'none' || plate) group.add(plinthAndPlate(col, row, plate));
      return group;
    });
  }
}

// стены, полы, створки дверей
for (let level = 0; level < LEVELS; level++) {
  for (let row = 0; row <= TILES; row++) {
    for (let col = 0; col <= TILES; col++) {
      for (const orient of ['W', 'N']) {
        const wall = (orient === 'W' ? layout.wallW : layout.wallN)[level][row][col];
        if (!wall || !wall.type || wall.type === 'hull') continue;      // обшивку конвертоплана рисует его модель
        const backCol = orient === 'W' ? col - 1 : col, backRow = orient === 'W' ? row : row - 1;
        const front = wall.style === 'inner' || isIndoor(level, col, row), back = wall.style === 'inner' || isIndoor(level, backCol, backRow);
        const simple = wall.type === 'rail' || wall.type === 'barrier';
        const ids = [false, true].map((cut) => {
          const usesCut = wall.type === 'wall' || wall.type === 'door' || wall.type === 'window';
          const signature = simple ? `wall|${orient}|${level}|${wall.type}`
            : `wall|${orient}|${level}|${wall.type}|${wall.style}|${front}|${back}|${hashTile(col, row, level) % 3}|${usesCut && cut}`;
          return job(signature, { part: orient === 'W' ? PART.wallW : PART.wallN, level, col, row, shadow: true, slice: null },
            () => buildWall(orient, col, row, level, wall, usesCut && cut));
        });
        (orient === 'W' ? plan.wallW : plan.wallN)[level][row * stride + col] = ids[0];
        if (ids[1] !== ids[0]) plan.cutOf[ids[0]] = ids[1];
        if (wall.type === 'door') {
          const leaves = [false, true].map((cut) => job(`door|${orient}|${level}|${cut}`, { part: orient === 'W' ? PART.doorW : PART.doorN, level, col, row, shadow: false, slice: null }, () => {
            const width = 0.92, top = Math.min(2.1, cut ? 0.8 : LEVEL_H - 0.22);
            return buildDoorLeaf(orient, col, row, level, (TILE - width) / 2, (TILE + width) / 2, top);
          }));
          plan.doors.push([col, row, level, orient, leaves[0], leaves[1]]);
        }
      }
      if (level > 0 && row < TILES && col < TILES) {
        const type = layout.floor[level][row][col];
        if (type === FLOOR.interior || type === FLOOR.roof || type === FLOOR.deck) {
          plan.floor[level][cellIndex(col, row)] = job(`floor|${level}|${type}`, { part: PART.floor, level, col, row, shadow: true, slice: null }, () => {
            // плита чуть шире клетки: соседние плиты перекрываются, шов не просвечивает
            const pivot = new THREE.Group();
            pivot.position.set((col + 0.5) * TILE, 0, (row + 0.5) * TILE);
            const tile = floorTile(col, row, level, type);
            tile.position.set(-(col + 0.5) * TILE, 0, -(row + 0.5) * TILE);
            pivot.add(tile);
            pivot.scale.set(1 + 2 * SEAM / TILE, 1, 1 + 2 * SEAM / TILE);
            return pivot;
          });
        }
      }
    }
  }
}

// предметы, лестницы, вышка, фасад — срезы по клеткам
function addSliced(signature, part, baseLevel, levelCut, build, shadow = true) {
  const probe = build();
  if (!probe) return;
  for (const slice of touchedSlices(probe, levelCut, baseLevel)) {
    const id = job(`${signature}|${slice.col - probe.userData.col0}|${slice.row - probe.userData.row0}|${slice.level}`,
      { part, level: slice.level, col: slice.col, row: slice.row, shadow, slice }, build);
    plan.objects.push([id, slice.col, slice.row, slice.level]);
  }
}
const RANDOM_KINDS = new Set(['console', 'desk', 'rack', 'crate', 'rock']);
// Конвертоплан: три слоя модели — пол салона, рампа и сиденья (до юнитов), дальние стенки салона (до юнитов,
// после пола) и корпус с крышей (после юнитов). У кусков корпуса над салоном и перед ним (col ≥ c0, row ≥ r0:
// крыша, правый борт с дверью, корма, передние винты) есть вариант, срезанный на высоте пола салона + 0,8 м:
// он показывается, когда уровень обзора срезан (боец внутри). Нос, левый борт и переборка стоят за салоном
// и юнитов не закрывают — остаются целыми, как дальние стены в разрезе.
const TILTROTOR_LAYERS = [['floor', PART.floor, false], ['back', PART.wallW, false], ['shell', PART.object, true]];
const TILTROTOR_CUT = TILTROTOR.floor + 0.8;
function addTiltrotor(item) {
  for (const [layer, part, hasCut] of TILTROTOR_LAYERS) {
    const build = () => { const group = buildObject({ ...item, layer }, LEVELS - 1); group.userData.col0 = item.col; group.userData.row0 = item.row; return group; };
    for (const slice of touchedSlices(build(), false, item.level)) {
      const key = `tiltrotor|${layer}|${slice.col - item.col}|${slice.row - item.row}`;
      const id = job(key, { part, level: slice.level, col: slice.col, row: slice.row, shadow: layer !== 'floor', slice }, build);
      if (hasCut && slice.col >= item.col && slice.row >= item.row) {
        const cutSlice = { ...slice, top: TILTROTOR_CUT };
        const cutId = job(key + '|cut', { part, level: slice.level, col: slice.col, row: slice.row, shadow: false, slice: cutSlice }, build);
        plan.cutOf[id] = cutId;
      }
      plan.objects.push([id, slice.col, slice.row, slice.level]);
    }
  }
}
// Скала вокруг помещений базы: на каждый уровень, который задевает блок, — свой закрытый блок от пола уровня
// до его верха (у отсечённого по высоте блока срез был бы полым, и сквозь него видны грани соседей). У каждого
// слоя есть вариант для среза стен: блок до пола уровня + 0,8 м, как срезанные стены. Тайл не зависит от клетки:
// подпись — по виду блока и уровню.
const ROCK_CUT = 0.8;
function addRock(item) {
  const build = (bottom, top) => () => { const group = buildObject({ ...item, bottom, top }, LEVELS - 1); group.userData.col0 = item.col; group.userData.row0 = item.row; return group; };
  for (const slice of touchedSlices(build(0, undefined)(), true, item.level)) {
    if (slice.col !== item.col || slice.row !== item.row) continue;     // только своя клетка
    const bottom = slice.level * LEVEL_H;
    const info = { part: PART.object, level: slice.level, col: slice.col, row: slice.row, shadow: true, slice };
    const id = job(`rock|${item.type}|${slice.level}`, info, build(bottom, Math.min(item.height, bottom + LEVEL_H)));
    const cutId = job(`rock|${item.type}|${slice.level}|cut`, { ...info, shadow: false }, build(bottom, bottom + ROCK_CUT));
    plan.cutOf[id] = cutId;
    plan.objects.push([id, slice.col, slice.row, slice.level]);
  }
}
for (const item of layout.objects) {
  if (item.kind === 'towerLeg') continue;
  if (item.kind === 'tiltrotor') { addTiltrotor(item); continue; }
  if (item.kind === 'rockFill') { addRock(item); continue; }
  const ladder = item.kind === 'ladder', paint = item.kind === 'paint' || item.kind === 'liftPlatform';
  const unique = ladder || RANDOM_KINDS.has(item.kind);
  const signature = `object|${item.kind}|${item.level}|${item.cols}x${item.rows}|${item.color || ''}|${item.type || ''}|${item.flip ? 'flip' : ''}|${item.rotation || 0}` + (unique ? `|${item.col}|${item.row}` : '');
  // приставная лестница: после стены своей клетки (часть 2 и 3), но до юнита (3,5) — он стоит перед ней;
  // разметка краской — как пол (юниты ходят по ней)
  addSliced(signature, ladder ? 3.2 : paint ? PART.floor : PART.object, item.level, ladder, () => {
    const group = ladder ? buildLadder(item, LEVELS * LEVEL_H) : buildObject(item, LEVELS - 1);
    if (group) { group.userData.col0 = item.col; group.userData.row0 = item.row; }
    return group;
  }, !paint);
}
layout.stairs.forEach((stair, index) => {
  addSliced(`stairs|${index}`, PART.floor, stair.level, false, () => { const group = buildStairs(stair); group.userData.col0 = 0; group.userData.row0 = 0; return group; });
});
layout.buildings.forEach((building, index) => {
  if (building.style !== 'tower') return;
  addSliced(`tower|${index}`, PART.object, 0, true, () => { const group = buildTower(building, LEVELS - 1); group.userData.col0 = 0; group.userData.row0 = 0; return group; });
});
// фасад (труба, кабель-канал, кондиционер): высота зависит от среза стен, поэтому у срезов есть срезанный вариант
if (layout.buildings.some((building) => building.name === 'hab')) {
  const build = (viewLevel, cut) => () => { const group = facadeDetails(viewLevel, cut); group.userData.col0 = 0; group.userData.row0 = 0; return group; };
  const probe = build(LEVELS - 1, false)();
  for (const slice of touchedSlices(probe, true, 0)) {
    const id = job(`facade|${slice.col}|${slice.row}|${slice.level}`, { part: PART.object, level: slice.level, col: slice.col, row: slice.row, shadow: true, slice }, build(LEVELS - 1, false));
    const cutId = job(`facade|${slice.col}|${slice.row}|${slice.level}|cut`, { part: PART.object, level: slice.level, col: slice.col, row: slice.row, shadow: true, slice }, build(slice.level, true));
    plan.cutOf[id] = cutId;
    plan.objects.push([id, slice.col, slice.row, slice.level]);
  }
}

// ---------------- рендер одного тайла ----------------
const composers = new Map();
function composerFor(width, height) {
  const key = width + 'x' + height;
  if (!composers.has(key)) {
    if (composers.size >= 6) {
      const [oldKey, old] = composers.entries().next().value;
      old.passes.forEach((pass) => pass.dispose && pass.dispose());
      old.dispose();
      composers.delete(oldKey);
    }
    const composer = new EffectComposer(renderer);
    composer.setSize(width, height);
    composer.addPass(new RenderPass(scene, camera));
    const gtao = new GTAOPass(scene, camera, width, height);
    gtao.updateGtaoMaterial({ radius: 0.45, distanceExponent: 1.5, thickness: 1.2, scale: 1.2, samples: 16 });
    gtao.blendIntensity = 0.9;
    composer.addPass(gtao);
    composer.addPass(new OutputPass());
    composers.set(key, composer);
  }
  return composers.get(key);
}

// кадр (x1): прямоугольник в пикселях относительно anchor, с запасом, размер кратен 16
function frameFor(pixels, pad) {
  const xs = pixels.map((point) => point[0]), ys = pixels.map((point) => point[1]);
  const left = Math.floor(Math.min(...xs)) - pad, top = Math.floor(Math.min(...ys)) - pad;
  const width = Math.ceil((Math.ceil(Math.max(...xs)) + pad - left) / 16) * 16, height = Math.ceil((Math.ceil(Math.max(...ys)) + pad - top) / 16) * 16;
  return { left, top, width, height };
}
function aimCamera(frame, anchorCamera) {
  camera.left = anchorCamera.x + frame.left / PIXELS_PER_METER;
  camera.right = anchorCamera.x + (frame.left + frame.width) / PIXELS_PER_METER;
  camera.top = anchorCamera.y - frame.top / PIXELS_PER_METER;
  camera.bottom = anchorCamera.y - (frame.top + frame.height) / PIXELS_PER_METER;
  camera.updateProjectionMatrix();
}
function boxCorners(box) {
  const points = [];
  for (const x of [box.min.x, box.max.x]) for (const y of [box.min.y, box.max.y]) for (const z of [box.min.z, box.max.z]) points.push(V(x, y, z));
  return points;
}
function contentBox(group, slice) {
  const box = new THREE.Box3();
  group.updateMatrixWorld(true);
  group.traverse((node) => { if (node.isMesh) box.union(new THREE.Box3().setFromObject(node)); });
  if (slice) box.intersect(sliceBox(slice));
  return box;
}
const capture = () => renderer.domElement.toDataURL('image/png');

window.renderTile = (id) => {
  const item = jobs[id];
  resetDoorLeaves();
  const group = item.build();
  setEnvIntensity(group, 0.28);
  scene.add(group);
  const box = contentBox(group, item.slice);
  if (box.isEmpty()) { scene.remove(group); return { empty: true }; }
  // область карты теней (±27 м) — вокруг элемента: на карте 48×48 края дальше 27 м от центра; направление то же
  const center = box.getCenter(V(0, 0, 0));
  sun.position.add(V(center.x, 0, center.z).sub(sun.target.position));
  sun.target.position.set(center.x, 0, center.z);
  sun.target.updateMatrixWorld();
  const anchorCamera = V(item.col * TILE, item.level * LEVEL_H, item.row * TILE).applyMatrix4(camera.matrixWorldInverse);
  const planes = item.slice ? slicePlanes(item.slice) : [];
  const result = {};

  // 1. цвет и 2. маска
  const frame = frameFor(boxCorners(box).map((point) => pixelOf(point, anchorCamera)), 6);
  aimCamera(frame, anchorCamera);
  renderer.setSize(frame.width * SS, frame.height * SS);
  renderer.clippingPlanes = planes;
  scene.background = GRAY;
  composerFor(frame.width * SS, frame.height * SS).render();
  result.color = capture();
  scene.background = BLACK;
  scene.overrideMaterial = WHITE;
  renderer.render(scene, camera);
  scene.overrideMaterial = null;
  result.mask = capture();
  renderer.clippingPlanes = [];
  result.frame = frame;

  // 3. тень на плоскости земли: элемент невидим для камеры, отбрасывает тень только своим срезом
  if (item.shadow) {
    const corners = boxCorners(box);
    const projected = corners.map((point) => point.clone().addScaledVector(SUN_DIRECTION, -point.y / SUN_DIRECTION.y));
    const shadowFrame = frameFor([...corners.map((point) => V(point.x, 0, point.z)), ...projected].map((point) => pixelOf(point, anchorCamera)), 12);
    aimCamera(shadowFrame, anchorCamera);
    renderer.setSize(shadowFrame.width * SS, shadowFrame.height * SS);
    const invisible = new THREE.MeshBasicMaterial({ colorWrite: false, depthWrite: false, clippingPlanes: planes, clipShadows: true });
    const saved = [];
    group.traverse((node) => { if (node.isMesh) { saved.push([node, node.material]); node.material = invisible; } });
    scene.add(receiver);
    scene.background = WHITE_BG;
    renderer.render(scene, camera);
    result.shadow = capture();
    result.shadowFrame = shadowFrame;
    scene.remove(receiver);
    for (const [node, material] of saved) node.material = material;
    invisible.dispose();
  }
  scene.remove(group);
  group.traverse((node) => { if (node.isMesh && node.geometry !== stoneGeometry) node.geometry.dispose(); });
  return result;
};

// рамки отдельных деталей с пометкой solid (корпус конвертоплана), каждая — по клеткам: салон внутри свободен
function preciseBoxes(group, level) {
  const boxes = [], round = (value) => Math.round(value * 1000) / 1000;
  group.traverse((node) => {
    if (!node.isMesh || !node.userData.solid) return;
    const whole = new THREE.Box3().setFromObject(node);
    const col0 = Math.max(0, Math.floor(whole.min.x / TILE)), col1 = Math.min(TILES - 1, Math.floor((whole.max.x - 1e-6) / TILE));
    const row0 = Math.max(0, Math.floor(whole.min.z / TILE)), row1 = Math.min(TILES - 1, Math.floor((whole.max.z - 1e-6) / TILE));
    for (let row = row0; row <= row1; row++) for (let col = col0; col <= col1; col++) {
      const box = whole.clone().intersect(new THREE.Box3(V(col * TILE, -100, row * TILE), V((col + 1) * TILE, 100, (row + 1) * TILE)));
      if (box.isEmpty() || box.max.y - box.min.y < 0.05) continue;
      boxes.push([level, col, row, round(box.min.x / TILE), round(box.min.z / TILE), round(box.max.x / TILE), round(box.max.z / TILE), round(box.min.y), round(box.max.y)]);
    }
  });
  return boxes;
}

// Препятствия для пуль: рамки предметов по клеткам и уровням (без лестниц, вышки и мелочей фасада —
// они тонкие или висят на стенах). [уровень, col, row, x0, z0, x1, z1, y0, y1]: x и z в клетках, y в метрах.
function solidBoxes() {
  const boxes = [];
  for (const item of layout.objects) {
    if (item.kind === 'towerLeg' || item.kind === 'ladder') continue;
    if (item.kind === 'paint' || item.kind === 'liftPlatform') continue;
    const group = buildObject(item, LEVELS - 1);
    if (!group) continue;
    group.updateMatrixWorld(true);
    if (item.kind === 'tiltrotor') { boxes.push(...preciseBoxes(group, item.level)); continue; }
    for (const slice of touchedSlices(group, false, item.level)) {
      const box = new THREE.Box3();
      group.traverse((node) => { if (node.isMesh) box.union(new THREE.Box3().setFromObject(node)); });
      box.intersect(new THREE.Box3(V(slice.col * TILE, -100, slice.row * TILE), V((slice.col + 1) * TILE, 100, (slice.row + 1) * TILE)));
      if (box.isEmpty() || box.max.y - box.min.y < 0.05) continue;
      const round = (value) => Math.round(value * 1000) / 1000;
      boxes.push([slice.level, slice.col, slice.row, round(box.min.x / TILE), round(box.min.z / TILE), round(box.max.x / TILE), round(box.max.z / TILE), round(box.min.y), round(box.max.y)]);
    }
  }
  return boxes;
}

window.tilesetPlan = () => ({
  solids: solidBoxes(),
  jobs: jobs.map(({ id, signature, part, level, col, row, shadow, slice }) => ({ id, signature, part, level, col, row, shadow, slice })),
  plan,
  projection: { stepX: STEP_X, stepY: STEP_Y, pixelsPerMeter: PIXELS_PER_METER, upPixels: UP_PIXELS, elevation: ELEVATION, tile: TILE, levelHeight: LEVEL_H },
});

// проверка камеры: шаг клетки на экране должен быть целым
{
  const origin = V(0, 0, 0).applyMatrix4(camera.matrixWorldInverse);
  const colStep = pixelOf(V(TILE, 0, 0), origin), rowStep = pixelOf(V(0, 0, TILE), origin);
  window.cameraCheck = { colStep, rowStep, up: pixelOf(V(0, 1, 0), origin) };
}
window.tilesetLayout = () => layout;
window.ready = true;
