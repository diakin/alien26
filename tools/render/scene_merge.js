// Склейка неподвижной геометрии сцены по материалам (3D-осмотр базы, WebGL-карта в игре).
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// Склейка неподвижной геометрии по материалам: тысячи стен и предметов -> десятки вызовов отрисовки.
// Стены собраны из коробок с разными материалами граней — такие меши режутся по группам.
export function mergeStatic(root) {
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

export function disposeTree(root) {
  root.traverse((node) => { if (node.isMesh && node.geometry) node.geometry.dispose(); });
}
