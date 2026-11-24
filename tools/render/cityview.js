// Быстрый просмотр участка города (без тайлов): cityview.html?map=city&area=c0,r0,c1,r1&level=3
// Строит землю, стены, полы, лестницы и предметы участка теми же построителями, что и тайлы, и рендерит
// ортокамерой под углом игры. Для проверки вида зданий до полного рендера тайлов.
import * as THREE from 'three';
import { layout, renderer, scene, sun, buildWall, floorTile, buildObject, buildStairs, getDoorLeaves, resetDoorLeaves } from './outpost_scene.js';
import { TILE, LEVELS, LEVEL_H, FLOOR } from './outpost_layout.js';
import { groundMaterialFor, cityGroundExtras } from './city_scene.js';

const params = new URLSearchParams(location.search);
const [col0, row0, col1, row1] = (params.get('area') || '34,0,62,30').split(',').map(Number);
const viewLevel = Number(params.get('level') ?? LEVELS - 1);
const width = Number(params.get('w') || 1600), height = Number(params.get('h') || 1000);
const world = new THREE.Group();
scene.add(world);
const inside = (col, row) => col >= col0 && col <= col1 && row >= row0 && row <= row1;
resetDoorLeaves();
for (let row = row0; row <= row1; row++) for (let col = col0; col <= col1; col++) {
  const plane = new THREE.Mesh(new THREE.PlaneGeometry(TILE, TILE), groundMaterialFor(layout.surface[row][col]));
  plane.rotation.x = -Math.PI / 2;
  plane.position.set((col + 0.5) * TILE, 0, (row + 0.5) * TILE);
  const map = plane.material.map;
  // UV по миру (период 5 м)
  const uv = plane.geometry.attributes.uv;
  for (let index = 0; index < uv.count; index++) uv.setXY(index, (col + (index % 2)) / 4, 1 - (row + Math.floor(index / 2)) / 4);
  plane.receiveShadow = true;
  world.add(plane);
  void map;
  world.add(cityGroundExtras(col, row, {}, layout.marking[row][col]));
}
for (let level = 0; level <= viewLevel; level++) {
  for (let row = row0; row <= row1 + 1; row++) for (let col = col0; col <= col1 + 1; col++) {
    for (const orient of ['W', 'N']) {
      const wall = (orient === 'W' ? layout.wallW : layout.wallN)[level][row][col];
      if (!wall || wall.type === 'hull') continue;
      if (!inside(Math.min(col, col1), Math.min(row, row1))) continue;
      world.add(buildWall(orient, col, row, level, wall, false));
    }
    if (level > 0 && inside(col, row) && [FLOOR.interior, FLOOR.roof].includes(layout.floor[level][row][col])) world.add(floorTile(col, row, level, layout.floor[level][row][col]));
  }
}
world.add(getDoorLeaves());
for (const item of layout.objects) {
  if (item.level > viewLevel || !inside(item.col, item.row) || item.kind === 'tiltrotor') continue;
  const group = buildObject(item, viewLevel);
  if (group) world.add(group);
}
for (const stair of layout.stairs) if (stair.level <= viewLevel && inside(stair.col, stair.row)) world.add(buildStairs(stair));
// камера: как в игре — азимут 45°, наклон 35°
const center = new THREE.Vector3((col0 + col1 + 1) / 2 * TILE, 0, (row0 + row1 + 1) / 2 * TILE);
const span = Math.max(col1 - col0 + 1, row1 - row0 + 1) * TILE;
const aspect = width / height, half = span * 0.62;
const camera = new THREE.OrthographicCamera(-half * aspect, half * aspect, half, -half, 1, 600);
const elevation = Math.asin(35 / 61), direction = new THREE.Vector3(Math.SQRT1_2, 0, Math.SQRT1_2);
camera.position.copy(center).addScaledVector(direction, Math.cos(elevation) * 200).add(new THREE.Vector3(0, Math.sin(elevation) * 200, 0));
camera.lookAt(center.clone().add(new THREE.Vector3(0, 3, 0)));
sun.position.add(center.clone().sub(sun.target.position)); sun.target.position.copy(center); sun.target.updateMatrixWorld();
Object.assign(sun.shadow.camera, { left: -span, right: span, top: span, bottom: -span, far: 300 }); sun.shadow.camera.updateProjectionMatrix();
renderer.setSize(width, height);
renderer.setPixelRatio(1);
renderer.render(scene, camera);
window.shot = renderer.domElement.toDataURL('image/png');
window.ready = true;
