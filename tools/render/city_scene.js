// Город (MAP=city): текстуры и построители — классические фасады, отделка полов, покрытия земли, крыши,
// деревья, кусты, фонтан, детская площадка, уличная мебель, мебель помещений.
// Подключается из outpost_scene.js (стены, предметы, полы) и tileset.js (земля).
import * as THREE from 'three';
import { mulberry32, tileNoise, canvasTexture } from './lib.js';
import { TILE, LEVEL_H } from './outpost_layout.js';

const clampByte = (value) => Math.max(0, Math.min(255, Math.round(value)));
const V = (x, y, z) => new THREE.Vector3(x, y, z);
const cache = new Map();
const once = (key, make) => { if (!cache.has(key)) cache.set(key, make()); return cache.get(key); };
const standard = (key, options) => once('city_' + key, () => new THREE.MeshStandardMaterial(options));

function makeCanvas(width, height) {
  const canvas = document.createElement('canvas');
  canvas.width = width; canvas.height = height;
  return canvas;
}
function normalFromCanvas(heightCanvas, strength = 3, wrap = true) {
  const width = heightCanvas.width, height = heightCanvas.height;
  const source = heightCanvas.getContext('2d').getImageData(0, 0, width, height).data;
  const canvas = makeCanvas(width, height), context = canvas.getContext('2d');
  const image = context.createImageData(width, height);
  const at = (x, y) => {
    if (wrap) { x = (x + width) % width; y = (y + height) % height; } else { x = Math.max(0, Math.min(width - 1, x)); y = Math.max(0, Math.min(height - 1, y)); }
    return source[(y * width + x) * 4] / 255;
  };
  for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) {
    const dx = (at(x + 1, y) - at(x - 1, y)) * strength, dy = (at(x, y + 1) - at(x, y - 1)) * strength;
    const length = Math.hypot(dx, dy, 1), offset = (y * width + x) * 4;
    image.data[offset] = (-dx / length * 0.5 + 0.5) * 255;
    image.data[offset + 1] = (dy / length * 0.5 + 0.5) * 255;
    image.data[offset + 2] = (1 / length * 0.5 + 0.5) * 255;
    image.data[offset + 3] = 255;
  }
  context.putImageData(image, 0, 0);
  return canvasTexture(canvas, { srgb: false });
}
// заливка с шумом; period — текстура бесшовная (tileNoise)
function noisyFill(context, width, height, color, { seed = 1, grain = 10, dirt = 0.2, scale = 3, octaves = 4 } = {}) {
  const rng = mulberry32(seed);
  const image = context.createImageData(width, height);
  for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) {
    const blotch = tileNoise(x / width, y / height, scale, octaves, seed) * dirt;
    const tone = 1 + blotch + (rng() - 0.5) * grain / 255;
    const offset = (y * width + x) * 4;
    image.data[offset] = clampByte(color[0] * tone); image.data[offset + 1] = clampByte(color[1] * tone); image.data[offset + 2] = clampByte(color[2] * tone);
    image.data[offset + 3] = 255;
  }
  context.putImageData(image, 0, 0);
}
const rgb = (color, alpha = 1) => `rgba(${color[0]},${color[1]},${color[2]},${alpha})`;

// ================= фасады =================
// цвет штукатурки, наличников и тяг по фасаду
export const FACADE_COLORS = {
  ochre: { wall: [212, 168, 98], trim: [238, 228, 204], plinth: [150, 128, 104] },
  cream: { wall: [226, 212, 178], trim: [246, 240, 226], plinth: [148, 136, 118] },
  green: { wall: [164, 184, 150], trim: [236, 236, 222], plinth: [128, 130, 116] },
  pink: { wall: [222, 178, 166], trim: [244, 236, 226], plinth: [150, 128, 120] },
  bank: { wall: [206, 190, 156], trim: [222, 210, 182], plinth: [138, 128, 112] },
  police: { wall: [150, 70, 52], trim: [232, 226, 212], plinth: [118, 108, 100] },
};
export const isCityFacade = (style) => typeof style === 'string' && /^(ochre|cream|green|pink|bank|police)_[gut]$/.test(style);
export const facadeParts = (style) => { const [base, role] = style.split('_'); return { base, role, colors: FACADE_COLORS[base] }; };

// текстура стены 1,25 × 2,28 м: штукатурка, руст (горизонтальные швы), кирпич, камень банка
export function facadeTextures(style, variant) {
  const { base, role, colors } = facadeParts(style);
  const width = 512, height = 936, meter = height / 2.28;
  const yAt = (meters) => height - meters * meter;
  const canvas = makeCanvas(width, height), context = canvas.getContext('2d');
  const heightCanvas = makeCanvas(width, height), heightContext = heightCanvas.getContext('2d');
  noisyFill(context, width, height, colors.wall, { seed: 41 + variant * 5 + base.length * 3, grain: base === 'bank' ? 14 : 8, dirt: 0.08, scale: 3 });
  heightContext.fillStyle = '#808080'; heightContext.fillRect(0, 0, width, height);
  const rng = mulberry32(61 + variant * 11 + base.length);
  if (base === 'police' && role !== 'g') {
    // кирпич 25 × 6,5 см, перевязка через ряд
    const brickHeight = 0.075 * meter, brickWidth = 0.26 * meter;
    for (let rowIndex = 0; rowIndex * brickHeight < height; rowIndex++) {
      const y = height - (rowIndex + 1) * brickHeight, shift = rowIndex % 2 ? brickWidth / 2 : 0;
      for (let x = -shift; x < width; x += brickWidth) {
        const tone = 0.86 + rng() * 0.26;
        context.fillStyle = rgb(colors.wall.map((channel) => clampByte(channel * tone)));
        context.fillRect(x + 2, y + 2, brickWidth - 4, brickHeight - 4);
      }
      context.fillStyle = 'rgba(206,196,182,0.9)'; context.fillRect(0, y, width, 2.5);
      heightContext.fillStyle = '#505050'; heightContext.fillRect(0, y, width, 3);
      for (let x = -shift; x < width; x += brickWidth) { context.fillRect(x, y, 2.5, brickHeight); heightContext.fillRect(x, y, 3, brickHeight); }
    }
  }
  if (role === 'g' || base === 'bank') {
    // руст: швы через 0,32 м; у банка — ещё и вертикальные швы блоков вразбежку
    const course = 0.32;
    const stone = base === 'police' ? [212, 204, 188] : null;
    if (stone) noisyFill(context, width, height, stone, { seed: 71 + variant, grain: 10, dirt: 0.08, scale: 3 });
    for (let index = 1; index * course < 2.4; index++) {
      const y = yAt(index * course);
      context.fillStyle = 'rgba(60,50,40,0.55)'; context.fillRect(0, y - 2, width, 5);
      context.fillStyle = 'rgba(255,250,240,0.35)'; context.fillRect(0, y + 3, width, 2);
      heightContext.fillStyle = '#202020'; heightContext.fillRect(0, y - 3, width, 7);
      if (base === 'bank') {
        const blockLength = 0.62 * meter, shift = index % 2 ? blockLength / 2 : 0;
        for (let x = shift; x < width; x += blockLength) {
          context.fillStyle = 'rgba(60,50,40,0.45)'; context.fillRect(x - 1.5, y, 3, course * meter);
          heightContext.fillStyle = '#303030'; heightContext.fillRect(x - 2, y, 4, course * meter);
        }
      }
    }
  }
  // потёки и грязь у земли
  for (let streak = 0; streak < 8; streak++) {
    const x = rng() * width, length = 60 + rng() * 240, fade = context.createLinearGradient(0, 0, 0, length);
    fade.addColorStop(0, 'rgba(70,60,50,0.12)'); fade.addColorStop(1, 'rgba(70,60,50,0)');
    context.fillStyle = fade; context.fillRect(x, 0, 2 + rng() * 4, length);
  }
  if (role === 'g') {
    const gradient = context.createLinearGradient(0, yAt(0.9), 0, height);
    gradient.addColorStop(0, 'rgba(80,70,60,0)'); gradient.addColorStop(1, 'rgba(80,70,60,0.35)');
    context.fillStyle = gradient; context.fillRect(0, yAt(0.9), width, 0.9 * meter);
  }
  const map = canvasTexture(canvas);
  map.wrapS = map.wrapT = THREE.ClampToEdgeWrapping;
  return { map, normalMap: normalFromCanvas(heightCanvas, 4, false) };
}

// штукатурка помещений с деревянным плинтусом; стены хранилища — стальные листы
export function plasterTextures(variant, kind = 'plaster') {
  const width = 512, height = 936, meter = height / 2.28;
  const canvas = makeCanvas(width, height), context = canvas.getContext('2d');
  const heightCanvas = makeCanvas(width, height), heightContext = heightCanvas.getContext('2d');
  heightContext.fillStyle = '#808080'; heightContext.fillRect(0, 0, width, height);
  if (kind === 'vault') {
    noisyFill(context, width, height, [128, 134, 138], { seed: 91 + variant, grain: 12, dirt: 0.12, scale: 2 });
    context.fillStyle = 'rgba(30,32,34,0.8)'; heightContext.fillStyle = '#202020';
    for (const y of [0, height / 2]) { context.fillRect(0, y - 2, width, 4); heightContext.fillRect(0, y - 2, width, 4); }
    for (const x of [0, width]) { context.fillRect(x - 2, 0, 4, height); heightContext.fillRect(x - 2, 0, 4, height); }
    for (const y of [24, height / 2 - 24, height / 2 + 24, height - 24]) for (let x = 24; x < width; x += 58) {
      context.fillStyle = 'rgba(70,74,76,0.9)'; context.beginPath(); context.arc(x, y, 4, 0, Math.PI * 2); context.fill();
      heightContext.fillStyle = '#d0d0d0'; heightContext.beginPath(); heightContext.arc(x, y, 4, 0, Math.PI * 2); heightContext.fill();
    }
  } else {
    const colors = [[226, 218, 198], [214, 210, 192], [222, 206, 186]];
    noisyFill(context, width, height, colors[variant % 3], { seed: 81 + variant, grain: 6, dirt: 0.05, scale: 2 });
    // плинтус и пояс
    context.fillStyle = 'rgb(104,72,48)'; context.fillRect(0, height - 0.12 * meter, width, 0.12 * meter);
    heightContext.fillStyle = '#b0b0b0'; heightContext.fillRect(0, height - 0.12 * meter, width, 0.12 * meter);
    context.fillStyle = 'rgba(160,140,110,0.6)'; context.fillRect(0, height - 0.95 * meter, width, 6);
    heightContext.fillStyle = '#a0a0a0'; heightContext.fillRect(0, height - 0.95 * meter, width, 6);
  }
  const map = canvasTexture(canvas);
  map.wrapS = map.wrapT = THREE.ClampToEdgeWrapping;
  return { map, normalMap: normalFromCanvas(heightCanvas, 3, false) };
}

export const CITY_MAT = {
  facade: (style, variant) => once(`facade_${style}_${variant}`, () => {
    const textures = facadeTextures(style, variant);
    return new THREE.MeshStandardMaterial({ map: textures.map, normalMap: textures.normalMap, roughness: 0.85, metalness: 0 });
  }),
  plaster: (variant) => once('plaster' + variant, () => { const textures = plasterTextures(variant); return new THREE.MeshStandardMaterial({ map: textures.map, normalMap: textures.normalMap, roughness: 0.9 }); }),
  vault: () => once('vaultWall', () => { const textures = plasterTextures(0, 'vault'); return new THREE.MeshStandardMaterial({ map: textures.map, normalMap: textures.normalMap, roughness: 0.45, metalness: 0.7 }); }),
  trim: (base) => standard('trim_' + base, { color: new THREE.Color().setRGB(...FACADE_COLORS[base].trim.map((channel) => (channel / 255) ** 2.2)), roughness: 0.75 }),
  plinth: (base) => standard('plinth_' + base, { color: new THREE.Color().setRGB(...FACADE_COLORS[base].plinth.map((channel) => (channel / 255) ** 2.2)), roughness: 0.9 }),
  glass: () => once('city_glass', () => new THREE.MeshPhysicalMaterial({ color: 0x1a2630, roughness: 0.06, metalness: 0.1, clearcoat: 1, envMapIntensity: 1.6 })),
  frame: () => standard('frame', { color: 0xf0ece2, roughness: 0.6 }),
  wood: () => standard('wood', { color: 0x5a3a24, roughness: 0.65 }),
  darkWood: () => standard('darkWood', { color: 0x3a2618, roughness: 0.6 }),
  lightWood: () => standard('lightWood', { color: 0xa87a4e, roughness: 0.7 }),
  greenDoor: () => standard('greenDoor', { color: 0x24402e, roughness: 0.55 }),
  iron: () => standard('iron', { color: 0x1c1d1e, roughness: 0.5, metalness: 0.6 }),
  fenceGreen: () => standard('fenceGreen', { color: 0x2e4a34, roughness: 0.5, metalness: 0.4 }),
  brass: () => standard('brass', { color: 0xb08a3a, roughness: 0.35, metalness: 0.9 }),
  steel: () => standard('steel', { color: 0x9aa0a6, roughness: 0.3, metalness: 0.85 }),
  stone: () => standard('stone', { color: 0xc8c0b0, roughness: 0.85 }),
  granite: () => standard('granite', { color: 0x8a8682, roughness: 0.8 }),
  ceiling: () => standard('ceiling', { color: 0xe6e2d8, roughness: 0.95 }),
  slabEdge: () => standard('slabEdge', { color: 0xb8b0a0, roughness: 0.9 }),
  lantern: () => standard('lantern', { color: 0xfff0c8, emissive: 0xffd890, emissiveIntensity: 1.6 }),
  fabric: (color) => standard('fabric' + color, { color, roughness: 0.95 }),
  paint: (color) => standard('paint' + color, { color, roughness: 0.6 }),
  water: () => once('city_water', () => new THREE.MeshPhysicalMaterial({ color: 0x3a6a82, roughness: 0.05, metalness: 0.1, clearcoat: 1, envMapIntensity: 1.4, transparent: true, opacity: 0.88 })),
  spray: () => once('city_spray', () => new THREE.MeshStandardMaterial({ color: 0xe8f4ff, roughness: 0.2, transparent: true, opacity: 0.45, depthWrite: false })),
  leaves: (seed) => once('leaves' + seed, () => new THREE.MeshStandardMaterial({ color: 0xffffff, vertexColors: true, roughness: 0.85 })),
  sand: () => standard('sandFill', { color: 0xd6c08a, roughness: 1 }),
};

// ================= полы =================
function floorCanvas(kind) {
  const size = 512;
  const canvas = makeCanvas(size, size), context = canvas.getContext('2d');
  const heightCanvas = makeCanvas(size, size), heightContext = heightCanvas.getContext('2d');
  heightContext.fillStyle = '#808080'; heightContext.fillRect(0, 0, size, size);
  const rng = mulberry32(kind.length * 17 + 3);
  if (kind === 'parquet') {
    // ёлочка: планки 0,5 × 0,1 м, клетка 1,25 м — 512 пикселей
    noisyFill(context, size, size, [150, 102, 62], { seed: 7, grain: 6, dirt: 0.05 });
    const plank = size / 2.5, plankWidth = plank / 5;
    for (let index = -12; index < 30; index++) for (let step = -2; step < 14; step++) {
      for (const side of [0, 1]) {
        const tone = 0.8 + rng() * 0.35;
        context.save();
        context.translate(index * plankWidth * 2 + step * 0 + side * plankWidth, step * plank - index * plankWidth * 0);
        context.rotate(side ? Math.PI / 4 : -Math.PI / 4);
        context.fillStyle = rgb([clampByte(158 * tone), clampByte(106 * tone), clampByte(64 * tone)]);
        context.fillRect(0, 0, plank * 0.7, plankWidth * 0.95);
        context.restore();
      }
    }
    context.strokeStyle = 'rgba(60,36,20,0.35)'; context.lineWidth = 1;
    for (let line = 0; line < size; line += plankWidth * 1.41) { context.beginPath(); context.moveTo(0, line); context.lineTo(size, line + size); context.stroke(); }
  } else if (kind === 'marble') {
    // шахматка белого и серого мрамора, плиты 0,625 м
    for (let tileY = 0; tileY < 2; tileY++) for (let tileX = 0; tileX < 2; tileX++) {
      const light = (tileX + tileY) % 2 === 0;
      context.fillStyle = light ? 'rgb(232,228,220)' : 'rgb(150,148,146)';
      context.fillRect(tileX * size / 2, tileY * size / 2, size / 2, size / 2);
    }
    for (let vein = 0; vein < 40; vein++) {
      context.strokeStyle = `rgba(110,106,100,${0.1 + rng() * 0.2})`; context.lineWidth = 0.6 + rng() * 1.4;
      context.beginPath();
      let x = rng() * size, y = rng() * size;
      context.moveTo(x, y);
      for (let step = 0; step < 6; step++) { x += (rng() - 0.3) * 60; y += (rng() - 0.5) * 50; context.lineTo(x, y); }
      context.stroke();
    }
    context.fillStyle = 'rgba(80,76,70,0.7)'; heightContext.fillStyle = '#404040';
    for (const line of [0, size / 2]) { context.fillRect(line - 1, 0, 2, size); context.fillRect(0, line - 1, size, 2); heightContext.fillRect(line - 1, 0, 2, size); heightContext.fillRect(0, line - 1, size, 2); }
  } else if (kind === 'tiles') {
    noisyFill(context, size, size, [196, 196, 186], { seed: 13, grain: 8, dirt: 0.05 });
    const count = 4;
    for (let tileY = 0; tileY < count; tileY++) for (let tileX = 0; tileX < count; tileX++) {
      const tone = 0.92 + rng() * 0.12;
      context.fillStyle = (tileX + tileY) % 2 ? `rgba(${clampByte(110 * tone)},${clampByte(116 * tone)},${clampByte(110 * tone)},1)` : `rgba(${clampByte(206 * tone)},${clampByte(204 * tone)},${clampByte(192 * tone)},1)`;
      context.fillRect(tileX * size / count + 1, tileY * size / count + 1, size / count - 2, size / count - 2);
    }
    heightContext.fillStyle = '#505050';
    for (let line = 0; line <= size; line += size / count) { heightContext.fillRect(line - 1, 0, 2, size); heightContext.fillRect(0, line - 1, size, 2); }
  } else {
    // сталь хранилища: рифлёные листы
    noisyFill(context, size, size, [118, 124, 128], { seed: 19, grain: 10, dirt: 0.12, scale: 2 });
    for (let y = 8; y < size; y += 16) for (let x = 8 + ((y / 16) % 2) * 8; x < size; x += 16) {
      context.save(); context.translate(x, y); context.rotate(((x + y) / 16) % 2 ? 0.8 : -0.8);
      context.fillStyle = 'rgba(170,176,178,0.5)'; context.fillRect(-5, -1.2, 10, 2.4); context.restore();
      heightContext.save(); heightContext.translate(x, y); heightContext.rotate(((x + y) / 16) % 2 ? 0.8 : -0.8);
      heightContext.fillStyle = '#b0b0b0'; heightContext.fillRect(-5, -1.2, 10, 2.4); heightContext.restore();
    }
  }
  return { map: canvasTexture(canvas), normalMap: normalFromCanvas(heightCanvas, 2) };
}
export function floorMaterial(kind) {
  return once('floor_' + kind, () => {
    const textures = floorCanvas(kind);
    return new THREE.MeshStandardMaterial({ map: textures.map, normalMap: textures.normalMap, roughness: kind === 'marble' ? 0.25 : kind === 'steel' ? 0.45 : 0.6, metalness: kind === 'steel' ? 0.6 : 0 });
  });
}

// ================= покрытия земли (период 4 клетки = 5 м, 1024 пикселя) =================
export const GROUND_PERIOD_CELLS = 4;
function groundCanvas(code) {
  const size = 1024, meter = size / (GROUND_PERIOD_CELLS * TILE);
  const canvas = makeCanvas(size, size), context = canvas.getContext('2d');
  const heightCanvas = makeCanvas(size, size), heightContext = heightCanvas.getContext('2d');
  heightContext.fillStyle = '#808080'; heightContext.fillRect(0, 0, size, size);
  const rng = mulberry32(300 + code * 31);
  const image = context.createImageData(size, size);
  const base = { 0: [176, 146, 112], 1: [74, 76, 80], 2: [168, 166, 158], 3: [92, 128, 64], 4: [186, 168, 132], 5: [150, 142, 132], 6: [214, 194, 146] }[code];
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const u = x / size, v = y / size;
    let tone = 1 + tileNoise(u, v, 3, 4, code * 7 + 1) * (code === 3 ? 0.22 : 0.1) + tileNoise(u, v, 24, 2, code * 7 + 5) * (code === 1 ? 0.12 : 0.06) + (rng() - 0.5) * (code === 1 ? 0.16 : 0.1);
    let red = base[0], green = base[1], blue = base[2];
    if (code === 3) { const dry = Math.max(0, tileNoise(u, v, 5, 3, 77)) * 0.6; red += 40 * dry; green += 18 * dry; blue += 6 * dry; }
    if (code === 1 && rng() < 0.03) tone *= 1.25 + rng() * 0.4;          // зёрна щебня в асфальте
    if (code === 4 && rng() < 0.08) tone *= 0.75 + rng() * 0.5;          // гравий
    const offset = (y * size + x) * 4;
    image.data[offset] = clampByte(red * tone); image.data[offset + 1] = clampByte(green * tone); image.data[offset + 2] = clampByte(blue * tone);
    image.data[offset + 3] = 255;
  }
  context.putImageData(image, 0, 0);
  if (code === 2) {
    // тротуарная плитка 0,5 × 0,5 м
    const slab = 0.5 * meter;
    for (let row = 0; row * slab < size; row++) for (let col = 0; col * slab < size; col++) {
      context.fillStyle = `rgba(${rng() < 0.5 ? '255,255,250' : '60,58,54'},${0.04 + rng() * 0.06})`;
      context.fillRect(col * slab, row * slab, slab, slab);
    }
    context.fillStyle = 'rgba(70,68,62,0.7)'; heightContext.fillStyle = '#303030';
    for (let line = 0; line <= size; line += slab) { context.fillRect(line - 1.5, 0, 3, size); context.fillRect(0, line - 1.5, size, 3); heightContext.fillRect(line - 2, 0, 4, size); heightContext.fillRect(0, line - 2, size, 4); }
  } else if (code === 5) {
    // гранитная брусчатка 0,2 × 0,1 м рядами
    const width = 0.2 * meter, height = 0.125 * meter;
    for (let row = 0; row * height < size; row++) {
      const shift = row % 2 ? width / 2 : 0;
      for (let x = -shift; x < size; x += width) {
        const tone = 0.8 + rng() * 0.35;
        context.fillStyle = `rgba(${clampByte(152 * tone)},${clampByte(144 * tone)},${clampByte(136 * tone)},0.85)`;
        context.fillRect(x + 1.5, row * height + 1.5, width - 3, height - 3);
        heightContext.fillStyle = '#a0a0a0'; heightContext.fillRect(x + 2, row * height + 2, width - 4, height - 4);
      }
    }
    heightContext.globalCompositeOperation = 'source-over';
  } else if (code === 1) {
    // трещины асфальта
    for (let crack = 0; crack < 14; crack++) {
      context.strokeStyle = `rgba(30,30,32,${0.3 + rng() * 0.3})`; context.lineWidth = 1 + rng() * 1.5;
      context.beginPath(); let x = rng() * size, y = rng() * size; context.moveTo(x, y);
      for (let step = 0; step < 8; step++) { x += (rng() - 0.5) * 50; y += (rng() - 0.5) * 50; context.lineTo(x, y); }
      context.stroke();
    }
  }
  return { map: canvasTexture(canvas), normalMap: normalFromCanvas(heightCanvas, 2) };
}
export function groundMaterialFor(code) {
  return once('ground_' + code, () => {
    const textures = groundCanvas(code);
    textures.map.wrapS = textures.map.wrapT = THREE.RepeatWrapping;
    textures.normalMap.wrapS = textures.normalMap.wrapT = THREE.RepeatWrapping;
    return new THREE.MeshStandardMaterial({ map: textures.map, normalMap: textures.normalMap, roughness: code === 1 ? 0.92 : 0.95 });
  });
}

// ================= простые формы =================
export function box(width, height, depth, material, x, y, z) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), material);
  mesh.position.set(x, y, z);
  return mesh;
}
export function cylinder(radiusTop, radiusBottom, height, material, x, y, z, segments = 16) {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radiusTop, radiusBottom, height, segments), material);
  mesh.position.set(x, y, z);
  return mesh;
}
function lathe(points, material, x, y, z, segments = 32) {
  const mesh = new THREE.Mesh(new THREE.LatheGeometry(points.map(([radius, height]) => new THREE.Vector2(radius, height)), segments), material);
  mesh.position.set(x, y, z);
  return mesh;
}
// треугольная призма-фронтон: основание width, высота height, глубина depth, перпендикулярно оси z
function gable(width, height, depth, material) {
  const shape = new THREE.Shape();
  shape.moveTo(-width / 2, 0); shape.lineTo(width / 2, 0); shape.lineTo(0, height); shape.closePath();
  const geometry = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: false });
  geometry.translate(0, 0, -depth / 2);
  return new THREE.Mesh(geometry, material);
}
// балясина (точёная)
const BALUSTER = [[0, 0], [0.06, 0], [0.06, 0.06], [0.035, 0.1], [0.05, 0.28], [0.07, 0.42], [0.04, 0.6], [0.06, 0.66], [0.06, 0.7], [0, 0.7]];

// ================= стены города =================
// ctx: { wallBox, isIndoor, THICK, PANEL_H, doorLeaves, buildDoorLeaf }
// Наружная сторона стены — сторона, клетка которой не под крышей. Украшения строятся только с неё.
export function buildCityWall(orient, col, row, level, wall, cut, ctx) {
  const { wallBox, isIndoor, THICK, PANEL_H } = ctx;
  const group = new THREE.Group();
  const type = wall.type, style = wall.style;
  const full = cut ? 0.8 : PANEL_H;
  const extend = THICK / 2;
  const variant = ((col * 73856093) ^ (row * 19349663) ^ (level * 83492791)) >>> 0;
  const insideFront = isIndoor(level, col, row);
  const insideBack = orient === 'W' ? isIndoor(level, col - 1, row) : isIndoor(level, col, row - 1);
  const facade = isCityFacade(style) ? facadeParts(style) : null;
  const sideMaterial = (inside) => style === 'vault' ? CITY_MAT.vault() : (!facade || inside) ? CITY_MAT.plaster(variant % 3) : CITY_MAT.facade(style, variant % 3);
  const edge = facade ? CITY_MAT.trim(facade.base) : CITY_MAT.slabEdge();
  const front = sideMaterial(insideFront), back = sideMaterial(insideBack);
  const materials = orient === 'W' ? [front, back, edge, edge, edge, edge] : [edge, edge, edge, edge, front, back];
  const outsideSign = facade ? (insideFront ? -1 : 1) : 0;
  const base = level * LEVEL_H;
  // украшение на наружной стороне: along0..along1 вдоль грани, y0..y1 от пола уровня, out0..out1 — вынос от плоскости стены
  const deco = (along0, along1, y0, y1, out0, out1, material) => {
    const thickness = out1 - out0, offset = outsideSign * (THICK / 2 + (out0 + out1) / 2);
    const geometry = orient === 'W' ? new THREE.BoxGeometry(thickness, y1 - y0, along1 - along0) : new THREE.BoxGeometry(along1 - along0, y1 - y0, thickness);
    const mesh = new THREE.Mesh(geometry, material);
    if (orient === 'W') mesh.position.set(col * TILE + offset, base + (y0 + y1) / 2, row * TILE + (along0 + along1) / 2);
    else mesh.position.set(col * TILE + (along0 + along1) / 2, base + (y0 + y1) / 2, row * TILE + offset);
    group.add(mesh);
    return mesh;
  };
  // фигура в плоскости стены (u — вдоль грани, v — высота), выдавленная наружу от out0 до out1
  const relief = (shape, out0, out1, material) => {
    const geometry = new THREE.ExtrudeGeometry(shape, { depth: out1 - out0, bevelEnabled: false, curveSegments: 16 });
    // у грани W после поворота на −90° ось выдавливания z смотрит в −x: знак выноса меняется
    const positive = orient === 'W' ? outsideSign < 0 : outsideSign > 0;
    if (positive) geometry.translate(0, 0, THICK / 2 + out0); else geometry.translate(0, 0, -(THICK / 2 + out1));
    if (orient === 'W') geometry.rotateY(-Math.PI / 2);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(col * TILE, base, row * TILE);
    group.add(mesh);
    return mesh;
  };

  if (type === 'rail') {
    // кованые перила (лестничные проёмы) и ограда детской площадки
    const fence = style === 'fence';
    const material = fence ? CITY_MAT.fenceGreen() : CITY_MAT.iron();
    const height = fence ? 1.1 : 0.95;
    const solid = (along0, along1, y0, y1, thickness, mat = material) => group.add(wallBox(orient, col, row, level, along0, along1, y0, y1, Array(6).fill(mat), thickness));
    for (const along of [0, TILE]) solid(along - 0.03, along + 0.03, 0, height + 0.04, 0.06);
    solid(0, TILE, height - 0.04, height, 0.05, fence ? material : CITY_MAT.darkWood());
    solid(0, TILE, 0.08, 0.12, 0.035);
    if (fence) solid(0, TILE, height - 0.3, height - 0.27, 0.03);
    for (let along = 0.1; along < TILE - 0.05; along += 0.12) {
      solid(along - 0.009, along + 0.009, 0.1, height - (fence ? -0.06 : 0.02), 0.018);
      if (fence) solid(along - 0.02, along + 0.02, height + 0.02, height + 0.07, 0.025);
    }
    return group;
  }

  if (type === 'wall') {
    group.add(wallBox(orient, col, row, level, -extend, TILE + extend, 0, full, materials));
  } else if (type === 'door') {
    const width = 0.92, top = Math.min(2.1, full);
    const left = (TILE - width) / 2, right = (TILE + width) / 2;
    group.add(wallBox(orient, col, row, level, -extend, left, 0, full, materials));
    group.add(wallBox(orient, col, row, level, right, TILE + extend, 0, full, materials));
    if (full > top + 0.01) group.add(wallBox(orient, col, row, level, left, right, top, full, materials));
    // деревянная (у хранилища — стальная) коробка с обеих сторон и порог
    const frameMaterial = style === 'vault' ? CITY_MAT.steel() : CITY_MAT.wood();
    const frame = Array(6).fill(frameMaterial);
    const frameWidth = style === 'vault' ? 0.12 : 0.06;
    group.add(wallBox(orient, col, row, level, left - frameWidth, left, 0, top, frame, THICK + 0.05));
    group.add(wallBox(orient, col, row, level, right, right + frameWidth, 0, top, frame, THICK + 0.05));
    if (full > top + 0.01) group.add(wallBox(orient, col, row, level, left - frameWidth, right + frameWidth, top, top + frameWidth, frame, THICK + 0.05));
    group.add(wallBox(orient, col, row, level, left, right, 0, 0.03, Array(6).fill(CITY_MAT.stone()), THICK + 0.1));
    if (facade && !cut) {
      // наличник, карниз-сандрик на кронштейнах
      const trim = CITY_MAT.trim(facade.base);
      deco(left - 0.16, left - 0.04, 0, top + 0.1, 0, 0.05, trim);
      deco(right + 0.04, right + 0.16, 0, top + 0.1, 0, 0.05, trim);
      deco(left - 0.16, right + 0.16, top + 0.04, top + 0.16, 0, 0.05, trim);
      if (top + 0.42 < full) {
        deco(left - 0.26, right + 0.26, top + 0.26, top + 0.34, 0, 0.22, trim);
        for (const along of [left - 0.18, right + 0.18]) deco(along - 0.05, along + 0.05, top + 0.12, top + 0.26, 0, 0.16, trim);
      }
    }
  } else {
    // окно: проём, рама с переплётом, стекло; арочное — у первого этажа банка
    const arched = facade && facade.base === 'bank' && facade.role === 'g';
    const width = 0.78, sill = arched ? 0.62 : facade && facade.role === 'g' ? 0.75 : 0.7, top = arched ? 2.08 : 2.0;
    const left = (TILE - width) / 2, right = (TILE + width) / 2;
    const spring = arched ? top - width / 2 : top;
    if (cut) {
      group.add(wallBox(orient, col, row, level, -extend, TILE + extend, 0, full, materials));
    } else {
      group.add(wallBox(orient, col, row, level, -extend, left, 0, full, materials));
      group.add(wallBox(orient, col, row, level, right, TILE + extend, 0, full, materials));
      group.add(wallBox(orient, col, row, level, left, right, 0, sill, materials));
      group.add(wallBox(orient, col, row, level, left, right, top, full, materials));
      if (arched) {
        // заполнение углов над аркой: прямоугольник с полукруглым вырезом
        const shape = new THREE.Shape();
        shape.moveTo(left, spring); shape.lineTo(left, top); shape.lineTo(right, top); shape.lineTo(right, spring);
        shape.absarc(TILE / 2, spring, width / 2, 0, Math.PI, false);
        const geometry = new THREE.ExtrudeGeometry(shape, { depth: THICK, bevelEnabled: false, curveSegments: 16 });
        geometry.translate(0, 0, -THICK / 2);
        if (orient === 'W') geometry.rotateY(-Math.PI / 2);
        const mesh = new THREE.Mesh(geometry, outsideSign ? CITY_MAT.facade(style, variant % 3) : materials[orient === 'W' ? 0 : 4]);
        mesh.position.set(col * TILE, base, row * TILE);
        group.add(mesh);
      }
      const glass = Array(6).fill(CITY_MAT.glass()), frame = Array(6).fill(CITY_MAT.frame());
      group.add(wallBox(orient, col, row, level, left + 0.03, right - 0.03, sill, arched ? spring + width / 2 - 0.02 : top, glass, 0.03));
      group.add(wallBox(orient, col, row, level, left, left + 0.05, sill, spring, frame, 0.08));
      group.add(wallBox(orient, col, row, level, right - 0.05, right, sill, spring, frame, 0.08));
      group.add(wallBox(orient, col, row, level, left, right, sill, sill + 0.05, frame, 0.08));
      if (!arched) group.add(wallBox(orient, col, row, level, left, right, top - 0.05, top, frame, 0.08));
      group.add(wallBox(orient, col, row, level, TILE / 2 - 0.022, TILE / 2 + 0.022, sill, arched ? spring + width / 2 - 0.04 : top, frame, 0.06));   // импост
      group.add(wallBox(orient, col, row, level, left, right, sill + (spring - sill) * 0.68 - 0.02, sill + (spring - sill) * 0.68 + 0.02, frame, 0.06));
      if (facade) {
        const trim = CITY_MAT.trim(facade.base);
        // подоконник-полка, наличник
        deco(left - 0.1, right + 0.1, sill - 0.07, sill, 0, 0.1, trim);
        if (!arched) {
          deco(left - 0.1, left, sill, top + 0.08, 0, 0.04, trim);
          deco(right, right + 0.1, sill, top + 0.08, 0, 0.04, trim);
          deco(left - 0.1, right + 0.1, top, top + 0.08, 0, 0.04, trim);
        }
        const pedimented = (facade.role === 'u' && ['bank', 'pink', 'cream'].includes(facade.base)) || (facade.role === 't' && facade.base === 'bank');
        if (pedimented) {
          // треугольный сандрик
          const shape = new THREE.Shape();
          shape.moveTo(left - 0.16, top + 0.1); shape.lineTo(right + 0.16, top + 0.1); shape.lineTo(TILE / 2, top + 0.27); shape.closePath();
          relief(shape, 0, 0.1, trim);
        } else if (facade.role === 'u' || facade.role === 't') {
          deco(left - 0.15, right + 0.15, top + 0.1, top + 0.17, 0, 0.12, trim);       // прямой сандрик
        } else if (facade.role === 'g' && !arched) {
          deco(TILE / 2 - 0.07, TILE / 2 + 0.07, top - 0.02, top + 0.16, 0, 0.06, trim);  // замковый камень
        }
        if (arched) {
          // архивольт, замковый камень, решётка
          const ring = new THREE.Shape();
          ring.absarc(TILE / 2, spring, width / 2 + 0.1, 0, Math.PI, false);
          ring.lineTo(left, spring);
          ring.absarc(TILE / 2, spring, width / 2, Math.PI, 0, true);
          ring.closePath();
          relief(ring, 0, 0.05, trim);
          deco(TILE / 2 - 0.07, TILE / 2 + 0.07, top - 0.06, top + 0.14, 0, 0.08, trim);
          deco(left - 0.1, left, sill, spring, 0, 0.05, trim);
          deco(right, right + 0.1, sill, spring, 0, 0.05, trim);
          const iron = CITY_MAT.iron();
          for (let bar = 1; bar < 6; bar++) {
            const along = left + bar * width / 6, height = Math.sqrt(Math.max(0, (width / 2) ** 2 - (along - TILE / 2) ** 2));
            deco(along - 0.01, along + 0.01, sill, spring + height - 0.03, -0.06, -0.04, iron);
          }
          for (const height of [sill + 0.35, sill + 0.8]) deco(left + 0.02, right - 0.02, height, height + 0.02, -0.065, -0.035, iron);
        }
        if (facade.role !== 'g' && facade.base === 'bank') {
          // кованый балкончик-ограждение
          const iron = CITY_MAT.iron();
          deco(left - 0.08, right + 0.08, sill - 0.12, sill - 0.07, 0, 0.32, CITY_MAT.stone());
          deco(left - 0.06, right + 0.06, sill + 0.42, sill + 0.45, 0.28, 0.31, iron);
          for (let bar = 0; bar <= 8; bar++) { const along = left - 0.04 + bar * (width + 0.08) / 8; deco(along - 0.008, along + 0.008, sill - 0.07, sill + 0.43, 0.285, 0.305, iron); }
        }
      }
    }
  }
  if (facade && !cut) {
    const trim = CITY_MAT.trim(facade.base);
    // цоколь, межэтажная тяга (закрывает торец перекрытия), карниз верхнего этажа
    if (facade.role === 'g') deco(-extend, TILE + extend, 0, 0.5, 0, 0.05, CITY_MAT.plinth(facade.base));
    if (facade.role === 't') {
      deco(-extend - 0.02, TILE + extend + 0.02, PANEL_H - 0.16, PANEL_H + 0.02, 0, 0.08, trim);
      deco(-extend - 0.06, TILE + extend + 0.06, PANEL_H + 0.02, PANEL_H + 0.12, 0, 0.18, trim);
      deco(-extend - 0.1, TILE + extend + 0.1, PANEL_H + 0.12, PANEL_H + 0.24, 0, 0.32, trim);
      for (let along = 0.16; along < TILE; along += 0.31) deco(along - 0.04, along + 0.04, PANEL_H - 0.02, PANEL_H + 0.12, 0.08, 0.26, trim);   // сухарики
    } else {
      deco(-extend - 0.02, TILE + extend + 0.02, PANEL_H - 0.08, PANEL_H + 0.24, 0, 0.06, trim);
      deco(-extend - 0.03, TILE + extend + 0.03, PANEL_H + 0.18, PANEL_H + 0.24, 0, 0.1, trim);
    }
  } else if (facade && cut && facade.role === 'g') {
    deco(-extend, TILE + extend, 0, 0.5, 0, 0.05, CITY_MAT.plinth(facade.base));
  }
  return group;
}

// створка двери города: двустворчатая деревянная с филёнками; у хранилища — стальная с колесом-штурвалом
export function buildCityDoorLeaf(orient, col, row, level, left, right, top, kind, ctx) {
  const { wallBox } = ctx;
  const group = new THREE.Group();
  const height = top - 0.01;
  if (kind === 'vault') {
    const steel = Array(6).fill(CITY_MAT.steel());
    group.add(wallBox(orient, col, row, level, left - 0.02, right + 0.02, 0.01, height, steel, 0.2));
    const mid = (left + right) / 2;
    for (const thickness of [0.26]) group.add(wallBox(orient, col, row, level, mid - 0.3, mid + 0.3, height * 0.45, height * 0.45 + 0.04, Array(6).fill(CITY_MAT.brass()), thickness));
    group.add(wallBox(orient, col, row, level, mid - 0.02, mid + 0.02, height * 0.45 - 0.28, height * 0.45 + 0.32, Array(6).fill(CITY_MAT.brass()), 0.26));
    group.add(wallBox(orient, col, row, level, left + 0.05, left + 0.1, 0.2, height - 0.2, Array(6).fill(CITY_MAT.iron()), 0.24));
    return group;
  }
  const outer = kind === 'outer';
  const leaf = Array(6).fill(outer ? CITY_MAT.greenDoor() : CITY_MAT.wood());
  const molding = Array(6).fill(outer ? CITY_MAT.darkWood() : CITY_MAT.darkWood());
  const mid = (left + right) / 2;
  group.add(wallBox(orient, col, row, level, left - 0.02, right + 0.02, 0.01, height, leaf, 0.06));
  group.add(wallBox(orient, col, row, level, mid - 0.01, mid + 0.01, 0.01, height, molding, 0.075));
  for (const [panel0, panel1] of [[left + 0.06, mid - 0.06], [mid + 0.06, right - 0.06]]) {
    if (height > 1.0) group.add(wallBox(orient, col, row, level, panel0, panel1, 0.15, Math.min(0.85, height - 0.1), molding, 0.072));
    if (height > 1.9) {
      if (outer) group.add(wallBox(orient, col, row, level, panel0 + 0.02, panel1 - 0.02, 1.05, height - 0.15, Array(6).fill(CITY_MAT.glass()), 0.074));
      else group.add(wallBox(orient, col, row, level, panel0, panel1, 1.0, height - 0.15, molding, 0.072));
    }
  }
  for (const side of [-1, 1]) group.add(wallBox(orient, col, row, level, mid + side * 0.06 - 0.015, mid + side * 0.06 + 0.015, Math.min(1.0, height - 0.1), Math.min(1.12, height - 0.05), Array(6).fill(CITY_MAT.brass()), 0.09));
  return group;
}

// лестница в домах: каменные ступени, деревянная проступь, кованые перила с деревянным поручнем
export const STAIR_MATERIALS = () => ({ body: CITY_MAT.stone(), tread: CITY_MAT.lightWood(), nosing: CITY_MAT.darkWood(), rail: CITY_MAT.iron(), handrail: CITY_MAT.darkWood() });

// ================= крыши =================
function roofTileTexture(kind) {
  const width = 512, height = 512;
  const canvas = makeCanvas(width, height), context = canvas.getContext('2d');
  const heightCanvas = makeCanvas(width, height), heightContext = heightCanvas.getContext('2d');
  const rng = mulberry32(kind === 'slate' ? 501 : 503);
  // текстура на 2 × 2 м: черепица 0,25 × 0,2 м, шифер 0,2 × 0,14 м
  const tileWidth = width / (kind === 'slate' ? 10 : 8), tileHeight = height / (kind === 'slate' ? 14 : 10);
  const base = kind === 'slate' ? [92, 98, 106] : [176, 82, 50];
  context.fillStyle = rgb(base); context.fillRect(0, 0, width, height);
  for (let rowIndex = 0; rowIndex < height / tileHeight; rowIndex++) {
    const shift = rowIndex % 2 ? tileWidth / 2 : 0;
    for (let x = -shift; x < width; x += tileWidth) {
      const tone = 0.8 + rng() * 0.32;
      const y = rowIndex * tileHeight;
      const gradient = heightContext.createLinearGradient(0, y, 0, y + tileHeight);
      gradient.addColorStop(0, '#404040'); gradient.addColorStop(1, '#c8c8c8');
      heightContext.fillStyle = gradient; heightContext.fillRect(x + 1, y, tileWidth - 2, tileHeight);
      context.fillStyle = rgb(base.map((channel) => clampByte(channel * tone)));
      if (kind === 'slate') context.fillRect(x + 1, y + 1, tileWidth - 2, tileHeight - 1);
      else { context.beginPath(); context.moveTo(x + 1, y); context.lineTo(x + tileWidth - 1, y); context.lineTo(x + tileWidth - 1, y + tileHeight * 0.75); context.quadraticCurveTo(x + tileWidth / 2, y + tileHeight * 1.05, x + 1, y + tileHeight * 0.75); context.fill(); }
      context.fillStyle = 'rgba(0,0,0,0.25)'; context.fillRect(x, y + tileHeight - 2, tileWidth, 2);
    }
  }
  for (let blotch = 0; blotch < 40; blotch++) {
    const x = rng() * width, y = rng() * height, radius = 10 + rng() * 40, gradient = context.createRadialGradient(x, y, 0, x, y, radius);
    gradient.addColorStop(0, kind === 'slate' ? 'rgba(140,150,140,0.15)' : 'rgba(70,60,40,0.18)'); gradient.addColorStop(1, 'rgba(0,0,0,0)');
    context.fillStyle = gradient; context.fillRect(x - radius, y - radius, radius * 2, radius * 2);
  }
  const map = canvasTexture(canvas), normalMap = normalFromCanvas(heightCanvas, 3);
  for (const texture of [map, normalMap]) { texture.wrapS = texture.wrapT = THREE.RepeatWrapping; }
  return { map, normalMap };
}
const roofMaterial = (kind) => once('roofMat_' + kind, () => { const textures = roofTileTexture(kind); return new THREE.MeshStandardMaterial({ map: textures.map, normalMap: textures.normalMap, roughness: kind === 'slate' ? 0.55 : 0.8, metalness: kind === 'slate' ? 0.15 : 0, side: THREE.DoubleSide }); });

// скат: многоугольник в мире; UV — u вдоль карниза, v вверх по скату (2 м на текстуру)
function slopeMesh(points, eaveDirection, material) {
  const geometry = new THREE.BufferGeometry();
  const origin = points[0];
  const along = eaveDirection.clone().normalize();
  const normal = new THREE.Vector3().subVectors(points[1], points[0]).cross(new THREE.Vector3().subVectors(points[2], points[0])).normalize();
  const upSlope = new THREE.Vector3().crossVectors(normal, along).normalize();
  const positions = [], uvs = [];
  for (const point of points) {
    positions.push(point.x, point.y, point.z);
    const offset = new THREE.Vector3().subVectors(point, origin);
    uvs.push(offset.dot(along) / (2 * TILE), offset.dot(upSlope) / (2 * TILE));
  }
  const indices = [];
  for (let index = 1; index < points.length - 1; index++) indices.push(0, index, index + 1);
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return new THREE.Mesh(geometry, material);
}
// вальмовая крыша над прямоугольником [x0, x1] × [z0, z1] на высоте y0, уклон pitch; возвращает высоту конька
function hipRoof(group, x0, z0, x1, z1, y0, pitch, material) {
  const width = x1 - x0, depth = z1 - z0;
  const half = Math.min(width, depth) / 2, height = half * Math.tan(pitch);
  const along = width >= depth;
  const ridge = along
    ? [V(x0 + half, y0 + height, (z0 + z1) / 2), V(x1 - half, y0 + height, (z0 + z1) / 2)]
    : [V((x0 + x1) / 2, y0 + height, z0 + half), V((x0 + x1) / 2, y0 + height, z1 - half)];
  const corner = { nw: V(x0, y0, z0), ne: V(x1, y0, z0), se: V(x1, y0, z1), sw: V(x0, y0, z1) };
  if (along) {
    group.add(slopeMesh([corner.sw, corner.se, ridge[1], ridge[0]], V(1, 0, 0), material));
    group.add(slopeMesh([corner.ne, corner.nw, ridge[0], ridge[1]], V(-1, 0, 0), material));
    group.add(slopeMesh([corner.se, corner.ne, ridge[1]], V(0, 0, -1), material));
    group.add(slopeMesh([corner.nw, corner.sw, ridge[0]], V(0, 0, 1), material));
  } else {
    group.add(slopeMesh([corner.se, corner.ne, ridge[0], ridge[1]], V(0, 0, -1), material));
    group.add(slopeMesh([corner.nw, corner.sw, ridge[1], ridge[0]], V(0, 0, 1), material));
    group.add(slopeMesh([corner.sw, corner.se, ridge[1]], V(1, 0, 0), material));
    group.add(slopeMesh([corner.ne, corner.nw, ridge[0]], V(-1, 0, 0), material));
  }
  // конёк и рёбра
  const ridgeMaterial = material;
  const tube = (from, to) => { const direction = new THREE.Vector3().subVectors(to, from); const mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, direction.length(), 8), ridgeMaterial); mesh.position.copy(from).addScaledVector(direction, 0.5); mesh.quaternion.setFromUnitVectors(V(0, 1, 0), direction.normalize()); group.add(mesh); };
  tube(ridge[0], ridge[1]);
  tube(corner.nw, ridge[0]); tube(corner.sw, ridge[0]); tube(corner.ne, ridge[1]); tube(corner.se, ridge[1]);
  return { height, along, half };
}
// слуховое окно на скате: фронт в плоскости (x, z) смотрит по направлению facing
function dormer(group, x, z, y, facing, frameMaterial, roofMat, scale = 1) {
  const holder = new THREE.Group();
  const width = 1.0 * scale, height = 1.15 * scale, depth = 1.6 * scale;
  holder.add(box(width, height, depth, frameMaterial, 0, height / 2, -depth / 2));
  holder.add(box(width * 0.56, height * 0.6, 0.04, CITY_MAT.glass(), 0, height * 0.45, 0.01));
  holder.add(box(width * 0.66, 0.06, 0.06, CITY_MAT.frame(), 0, height * 0.14, 0.02));
  holder.add(box(0.04, height * 0.6, 0.05, CITY_MAT.frame(), 0, height * 0.45, 0.02));
  const roofPiece = gable(width + 0.24, 0.55 * scale, depth + 0.15, roofMat);
  roofPiece.position.set(0, height, -depth / 2 + 0.07);
  holder.add(roofPiece);
  const front = gable(width + 0.1, 0.5 * scale, 0.06, frameMaterial);
  front.position.set(0, height + 0.01, 0.03);
  holder.add(front);
  holder.position.set(x, y, z);
  holder.rotation.y = Math.atan2(facing.x, facing.z);
  group.add(holder);
}
// План крыши: контур карниза, слуховые окна и трубы — по центрам клеток, чтобы одинаковые куски скатов
// совпадали (tileset.js рендерит их один раз, roofCellKey). Координаты — от угла предмета, м.
const cellCenter = (index) => (index + 0.5) * TILE;
export function roofPlan(item) {
  const width = item.cols * TILE, depth = item.rows * TILE;
  if (item.type === 'mansard') {
    const outer = { x0: -0.2, z0: -0.2, x1: width + 0.2, z1: depth + 0.2 };
    const pedimentX = (47 - item.col) * TILE + TILE / 2;
    const dormers = [], run = 0.75 * 0.36;
    for (let index = 1; index < item.cols - 1; index += 2) {
      const x = cellCenter(index);
      if (Math.abs(x - pedimentX) < 5.2) continue;
      dormers.push({ x, z: outer.z1 - run, facing: 'S' }, { x, z: outer.z0 + run, facing: 'N' });
    }
    for (let index = 1; index < item.rows - 1; index += 2) dormers.push({ x: outer.x1 - run, z: cellCenter(index), facing: 'E' }, { x: outer.x0 + run, z: cellCenter(index), facing: 'W' });
    const chimneys = [[0.22, 0.3], [0.78, 0.3], [0.5, 0.62]].map(([fx, fz]) => ({ x: cellCenter(Math.floor(item.cols * fx)), z: cellCenter(Math.floor(item.rows * fz)) }));
    return { ...outer, width, depth, dormers, chimneys, pediment: { x0: pedimentX - 5.4, x1: pedimentX + 5.4, z0: depth - 1.0 } };
  }
  const overhang = 0.42, run = 1.5;
  const rect = { x0: -overhang, z0: -overhang, x1: width + overhang, z1: depth + overhang };
  const along = rect.x1 - rect.x0 >= rect.z1 - rect.z0;
  const dormers = [];
  if (along) {
    for (let index = 0; index < item.cols; index++) {
      const x = cellCenter(index);
      if (index % 3 !== 1 || x < rect.x0 + run + 1.0 || x > rect.x1 - run - 0.9) continue;
      dormers.push({ x, z: rect.z1 - run, facing: 'S' }, { x, z: rect.z0 + run, facing: 'N' });
    }
  } else {
    for (let index = 0; index < item.rows; index++) {
      const z = cellCenter(index);
      if (index % 3 !== 1 || z < rect.z0 + run + 1.0 || z > rect.z1 - run - 0.9) continue;
      dormers.push({ x: rect.x1 - run, z, facing: 'E' }, { x: rect.x0 + run, z, facing: 'W' });
    }
  }
  const chimneys = [0, 1, 2].map((index) => ({ x: cellCenter(Math.floor(item.cols * (0.25 + index * 0.25))), z: cellCenter(Math.floor(item.rows * (0.42 + (index % 2) * 0.16))) }));
  return { ...rect, width, depth, along, run, dormers, chimneys, pediment: null };
}
// Подпись куска крыши над клеткой (i, j) от угла предмета: куски одного ската на одном расстоянии от карниза
// (и с той же фазой текстуры, период 2 клетки) одинаковы, если рядом нет окон, труб, фронтона и рёбер ската.
// null — кусок особый, подпись по месту.
export function roofCellKey(item, i, j) {
  const plan = roofPlan(item);
  const cx0 = i * TILE, cx1 = (i + 1) * TILE, cz0 = j * TILE, cz1 = (j + 1) * TILE;
  // рамка в плане пересекает клетку (с запасом на тень)
  const touches = (x0, x1, z0, z1, margin) => x1 + margin > cx0 && x0 - margin < cx1 && z1 + margin > cz0 && z0 - margin < cz1;
  const dormerBox = (dormer) => {
    const half = 0.62, back = 1.75, front = 0.12;
    if (dormer.facing === 'S') return [dormer.x - half, dormer.x + half, dormer.z - back, dormer.z + front];
    if (dormer.facing === 'N') return [dormer.x - half, dormer.x + half, dormer.z - front, dormer.z + back];
    if (dormer.facing === 'E') return [dormer.x - back, dormer.x + front, dormer.z - half, dormer.z + half];
    return [dormer.x - front, dormer.x + back, dormer.z - half, dormer.z + half];
  };
  if (plan.chimneys.some((chimney) => touches(chimney.x - 0.36, chimney.x + 0.36, chimney.z - 0.3, chimney.z + 0.3, 0.9))) return null;
  if (plan.pediment && cz1 > plan.pediment.z0 - 1.5 && cx1 > plan.pediment.x0 - 0.5 && cx0 < plan.pediment.x1 + 0.5) return null;
  // ближайший карниз — один и тот же для всех углов клетки (с запасом 0,15 м: рёбра ската — особые куски)
  const sides = [[cx0, cz0], [cx1, cz0], [cx0, cz1], [cx1, cz1]].map(([x, z]) => {
    const distances = { W: x - plan.x0, E: plan.x1 - x, N: z - plan.z0, S: plan.z1 - z };
    const sorted = Object.entries(distances).sort((first, second) => first[1] - second[1]);
    return sorted[1][1] - sorted[0][1] > 0.15 ? sorted[0][0] : null;
  });
  if (sides.some((side) => side !== sides[0]) || !sides[0]) return null;
  const side = sides[0];
  const distance = side === 'S' ? plan.z1 - cz1 : side === 'N' ? cz0 - plan.z0 : side === 'E' ? plan.x1 - cx1 : cx0 - plan.x0;
  const alongIndex = side === 'S' || side === 'N' ? i : j;
  const phase = alongIndex % 2;
  // слуховые окна своего ската в этой и соседних клетках вдоль карниза (они повторяются с шагом клеток);
  // окно чужого ската рядом — кусок особый
  const ownFacing = (dormer) => dormer.facing === side;
  if (plan.dormers.some((dormer) => !ownFacing(dormer) && touches(...dormerBox(dormer), 0.5))) return null;
  let mask = '';
  for (let offset = -1; offset <= 1; offset++) {
    const center = cellCenter(alongIndex + offset);
    mask += plan.dormers.some((dormer) => ownFacing(dormer) && Math.abs((side === 'S' || side === 'N' ? dormer.x : dormer.z) - center) < 0.01) ? '1' : '0';
  }
  return `${item.type}|${item.level}|${side}|${Math.round(distance * 100)}|${phase}|${mask}`;
}

// крыша дома (type 'tile') или мансарда банка ('mansard'); item.cols × item.rows клеток, низ — пол уровня item.level
function buildRoof(item) {
  const plan = roofPlan(item);
  const facingVector = { S: V(0, 0, 1), N: V(0, 0, -1), E: V(1, 0, 0), W: V(-1, 0, 0) };
  const group = new THREE.Group();
  const width = item.cols * TILE, depth = item.rows * TILE;
  const overhang = 0.42;
  const rng = mulberry32(item.col * 31 + item.row * 17);
  const trim = CITY_MAT.trim(item.facade || 'cream');
  if (item.type === 'mansard') {
    // нижний крутой скат до 2,3 м с отступом 0,75 м, над ним — пологая вальма; слуховые окна по кругу, фронтон над центром
    const slate = roofMaterial('slate'), inset = 0.75, lowHeight = 2.3, y0 = 0.24;
    const outer = { x0: -0.2, z0: -0.2, x1: width + 0.2, z1: depth + 0.2 };
    const inner = { x0: outer.x0 + inset, z0: outer.z0 + inset, x1: outer.x1 - inset, z1: outer.z1 - inset };
    const at = (x, y, z) => V(x, y, z);
    const top = y0 + lowHeight;
    group.add(slopeMesh([at(outer.x0, y0, outer.z1), at(outer.x1, y0, outer.z1), at(inner.x1, top, inner.z1), at(inner.x0, top, inner.z1)], V(1, 0, 0), slate));
    group.add(slopeMesh([at(outer.x1, y0, outer.z0), at(outer.x0, y0, outer.z0), at(inner.x0, top, inner.z0), at(inner.x1, top, inner.z0)], V(-1, 0, 0), slate));
    group.add(slopeMesh([at(outer.x1, y0, outer.z1), at(outer.x1, y0, outer.z0), at(inner.x1, top, inner.z0), at(inner.x1, top, inner.z1)], V(0, 0, -1), slate));
    group.add(slopeMesh([at(outer.x0, y0, outer.z0), at(outer.x0, y0, outer.z1), at(inner.x0, top, inner.z1), at(inner.x0, top, inner.z0)], V(0, 0, 1), slate));
    hipRoof(group, inner.x0, inner.z0, inner.x1, inner.z1, top, 0.07, slate);
    group.add(box(inner.x1 - inner.x0 + 0.1, 0.1, 0.12, CITY_MAT.steel(), (inner.x0 + inner.x1) / 2, top + 0.05, inner.z1));
    group.add(box(inner.x1 - inner.x0 + 0.1, 0.1, 0.12, CITY_MAT.steel(), (inner.x0 + inner.x1) / 2, top + 0.05, inner.z0));
    // слуховые окна в нижнем скате: через клетку, под фронтоном окон нет (roofPlan)
    const dormerY = y0 + 0.35;
    for (const item of plan.dormers) dormer(group, item.x, item.z, dormerY, facingVector[item.facing], trim, slate, 0.95);
    // фронтон над парадным входом (центр — клетка 47 от начала банка 36): тимпан, карниз, медальон, акротерии
    const centerX = (47 - item.col) * TILE + TILE / 2, frontZ = depth + 0.12;
    const pediment = gable(9.2, 2.3, 0.5, trim); pediment.position.set(centerX, y0 - 0.02, frontZ - 0.05); group.add(pediment);
    const tympanum = gable(8.2, 1.85, 0.12, CITY_MAT.facade('bank_u', 1)); tympanum.position.set(centerX, y0 + 0.16, frontZ + 0.22); group.add(tympanum);
    const angle = Math.atan2(2.3, 4.6), slopeLength = Math.hypot(4.6, 2.3) + 0.3;
    for (const side of [-1, 1]) {
      const cornice = box(slopeLength, 0.2, 0.7, trim, centerX + side * 2.3, y0 + 1.15, frontZ + 0.02);
      cornice.rotation.z = -side * angle; group.add(cornice);
    }
    group.add(box(9.6, 0.22, 0.75, trim, centerX, y0 + 0.02, frontZ + 0.02));
    const medallion = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.12, 32), CITY_MAT.brass());
    medallion.rotation.x = Math.PI / 2; medallion.scale.set(1, 1, 0.72); medallion.position.set(centerX, y0 + 0.85, frontZ + 0.32); group.add(medallion);
    for (const side of [-4.6, 0, 4.6]) group.add(lathe([[0, 0], [0.18, 0], [0.18, 0.12], [0.1, 0.2], [0.16, 0.45], [0.05, 0.6], [0, 0.65]], trim, centerX + side, side ? y0 + 0.2 : y0 + 2.4, frontZ + 0.05, 12));
    // трубы
    for (const { x, z } of plan.chimneys) {
      group.add(box(0.7, 1.3, 0.5, CITY_MAT.facade('bank_t', 0), x, top + 0.6, z));
      group.add(box(0.84, 0.12, 0.64, trim, x, top + 1.28, z));
    }
  } else {
    // вальмовая черепичная крыша с выносом, подшивка карниза, слуховые окна, трубы
    const tile = roofMaterial('tile');
    const x0 = -overhang, z0 = -overhang, x1 = width + overhang, z1 = depth + overhang, y0 = 0.22;
    const info = hipRoof(group, x0, z0, x1, z1, y0, 0.52, tile);
    group.add(box(x1 - x0, 0.14, 0.06, CITY_MAT.darkWood(), (x0 + x1) / 2, y0 - 0.04, z1)); group.add(box(x1 - x0, 0.14, 0.06, CITY_MAT.darkWood(), (x0 + x1) / 2, y0 - 0.04, z0));
    group.add(box(0.06, 0.14, z1 - z0, CITY_MAT.darkWood(), x1, y0 - 0.04, (z0 + z1) / 2)); group.add(box(0.06, 0.14, z1 - z0, CITY_MAT.darkWood(), x0, y0 - 0.04, (z0 + z1) / 2));
    group.add(box(x1 - x0, 0.03, z1 - z0, CITY_MAT.darkWood(), (x0 + x1) / 2, y0 - 0.1, (z0 + z1) / 2));          // подшивка свеса
    // водостоки
    for (const z of [z0, z1]) { const gutter = cylinder(0.06, 0.06, x1 - x0, CITY_MAT.iron(), (x0 + x1) / 2, y0 - 0.02, z, 8); gutter.rotation.z = Math.PI / 2; group.add(gutter); }
    const slope = Math.tan(0.52);
    const run = plan.run;
    for (const item of plan.dormers) dormer(group, item.x, item.z, y0 + (run - 0.75) * slope, facingVector[item.facing], trim, tile);
    for (let chimney = 0; chimney < plan.chimneys.length; chimney++) {
      const { x, z } = plan.chimneys[chimney];
      const ground = y0 + Math.min(Math.min(x - x0, x1 - x), Math.min(z - z0, z1 - z)) * slope;
      const brick = CITY_MAT.facade('police_u', chimney % 3);
      group.add(box(0.6, info.height - (ground - y0) + 1.1, 0.5, brick, x, ground + (info.height - (ground - y0) + 1.1) / 2 - 0.2, z));
      group.add(box(0.72, 0.1, 0.62, CITY_MAT.stone(), x, y0 + info.height + 0.95, z));
    }
  }
  return group;
}

// ================= деревья и кусты =================
function blobGeometry(radius, seed, detail = 2) {
  const geometry = new THREE.IcosahedronGeometry(radius, detail);
  const position = geometry.attributes.position;
  const rng = mulberry32(seed);
  const colors = [];
  const phase = rng() * 10;
  for (let index = 0; index < position.count; index++) {
    const point = V(position.getX(index), position.getY(index), position.getZ(index));
    const bump = 1 + 0.18 * Math.sin(point.x * 5 + phase) * Math.sin(point.y * 4.3 + phase * 0.7) * Math.sin(point.z * 4.7) + (rng() - 0.5) * 0.12;
    point.multiplyScalar(bump);
    position.setXYZ(index, point.x, point.y, point.z);
    const light = 0.75 + 0.25 * (point.y / radius) + (rng() - 0.5) * 0.25;
    colors.push(light, light, light);
  }
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geometry.computeVertexNormals();
  return geometry;
}
function leafMaterial(tint) {
  return once('leafTint' + tint, () => new THREE.MeshStandardMaterial({ color: tint, vertexColors: true, roughness: 0.9, flatShading: true }));
}
function buildTree(item, cx, cz) {
  const group = new THREE.Group();
  const rng = mulberry32(item.col * 13 + item.row * 7 + (item.type === 'chestnut' ? 5 : 0));
  const chestnut = item.type === 'chestnut';
  const trunkHeight = chestnut ? 2.1 : 2.4;
  const bark = standard('bark', { color: 0x4a3a2c, roughness: 0.95 });
  group.add(cylinder(0.11, 0.17, trunkHeight + 0.6, bark, cx, (trunkHeight + 0.6) / 2, cz, 10));
  for (let branch = 0; branch < 3; branch++) {
    const angle = rng() * Math.PI * 2;
    const limb = cylinder(0.04, 0.07, 1.2, bark, cx + Math.cos(angle) * 0.3, trunkHeight + 0.6, cz + Math.sin(angle) * 0.3, 6);
    limb.rotation.set(Math.sin(angle) * 0.6, 0, -Math.cos(angle) * 0.6);
    group.add(limb);
  }
  const material = leafMaterial(chestnut ? 0x5e8a40 : 0x4a7a3a);
  const blobs = chestnut ? 7 : 6;
  for (let blob = 0; blob < blobs; blob++) {
    const angle = blob / blobs * Math.PI * 2 + rng(), distance = blob === 0 ? 0 : 0.55 + rng() * 0.35;
    const radius = blob === 0 ? 1.15 : 0.7 + rng() * 0.35;
    const mesh = new THREE.Mesh(blobGeometry(radius, item.col * 101 + blob * 17 + item.row), material);
    mesh.position.set(cx + Math.cos(angle) * distance, trunkHeight + 1.25 + (blob === 0 ? 0.4 : (rng() - 0.3) * 0.9), cz + Math.sin(angle) * distance);
    group.add(mesh);
  }
  return group;
}
function buildHedge(width, depth, seed) {
  const group = new THREE.Group();
  const material = leafMaterial(0x46703a);
  for (let blob = 0; blob < 3; blob++) {
    const mesh = new THREE.Mesh(blobGeometry(0.5, seed * 7 + blob, 2), material);
    mesh.scale.set(width / 2.4, 0.95, depth / 1.25);
    mesh.position.set(width * (0.2 + blob * 0.3), 0.5, depth / 2);
    group.add(mesh);
  }
  return group;
}

// ================= предметы города =================
// поворот предмета: rotation × 90° вокруг центра; 0 — «спиной» к меньшим row (к северу)
function rotated(group, item, cx, cz) {
  const holder = new THREE.Group();
  holder.add(group);
  group.position.set(-cx, 0, -cz);
  holder.rotation.y = -(item.rotation || 0) * Math.PI / 2;
  holder.position.set(cx, 0, cz);
  return holder;
}

export function buildCityObject(item) {
  const width = item.cols * TILE, depth = item.rows * TILE;
  const cx = width / 2, cz = depth / 2;
  const group = new THREE.Group();
  const add = (mesh) => { group.add(mesh); return mesh; };
  const rng = mulberry32(item.col * 977 + item.row * 131 + item.level * 7);
  switch (item.kind) {
    case 'roof': return buildRoof(item);
    case 'tree': return buildTree(item, cx, cz);
    case 'hedge': return buildHedge(width, depth, item.col + item.row * 3);
    case 'bench': {
      const local = new THREE.Group();
      for (const x of [0.18, TILE - 0.18]) {
        local.add(box(0.05, 0.45, 0.42, CITY_MAT.iron(), x, 0.22, 0.45));
        local.add(box(0.05, 0.5, 0.05, CITY_MAT.iron(), x, 0.7, 0.26));
      }
      for (let slat = 0; slat < 4; slat++) local.add(box(TILE - 0.12, 0.035, 0.08, CITY_MAT.lightWood(), TILE / 2, 0.46, 0.32 + slat * 0.1));
      for (let slat = 0; slat < 3; slat++) local.add(box(TILE - 0.12, 0.08, 0.03, CITY_MAT.lightWood(), TILE / 2, 0.62 + slat * 0.12, 0.25));
      return rotated(local, item, cx, cz);
    }
    case 'bin':
      add(lathe([[0, 0], [0.16, 0], [0.18, 0.05], [0.2, 0.6], [0.24, 0.66], [0.24, 0.7], [0, 0.7]], CITY_MAT.iron(), cx, 0, cz, 16));
      return group;
    case 'streetLamp': {
      add(lathe([[0, 0], [0.22, 0], [0.22, 0.12], [0.12, 0.3], [0.09, 0.9], [0.06, 1.0], [0.05, 3.4], [0.08, 3.5], [0, 3.5]], CITY_MAT.iron(), cx, 0, cz, 12));
      add(lathe([[0, 0], [0.1, 0], [0.18, 0.45], [0.2, 0.5], [0, 0.5]], CITY_MAT.lantern(), cx, 3.5, cz, 6));
      add(lathe([[0, 0], [0.24, 0], [0.12, 0.16], [0.03, 0.26], [0, 0.32]], CITY_MAT.iron(), cx, 4.0, cz, 6));
      return group;
    }
    case 'column': {
      // колонна под балконом: база, ствол с каннелюрами, капитель; высота — до пола уровня 1
      add(box(0.66, 0.16, 0.66, CITY_MAT.stone(), cx, 0.08, cz + 0.05));
      add(lathe([[0, 0], [0.3, 0], [0.3, 0.06], [0.26, 0.12], [0, 0.12]], CITY_MAT.stone(), cx, 0.16, cz + 0.05, 24));
      add(cylinder(0.21, 0.24, LEVEL_H - 0.62, CITY_MAT.stone(), cx, 0.28 + (LEVEL_H - 0.62) / 2, cz + 0.05, 20));
      add(lathe([[0, 0], [0.22, 0], [0.3, 0.12], [0.3, 0.16], [0, 0.16]], CITY_MAT.stone(), cx, LEVEL_H - 0.34, cz + 0.05, 24));
      add(box(0.7, 0.18, 0.7, CITY_MAT.stone(), cx, LEVEL_H - 0.09, cz + 0.05));
      return group;
    }
    case 'balcony': {
      // балкон над входом: плита на консолях, балюстрада по краю; вынос 1,05 м от стены (стена — на грани row клетки)
      const out = 1.05;
      add(box(width, 0.18, out, CITY_MAT.stone(), cx, 0.09, out / 2));
      add(box(width + 0.1, 0.06, out + 0.06, CITY_MAT.stone(), cx, 0.2, out / 2 + 0.03));
      for (let along = 0.15; along < width; along += 0.22) add(lathe(BALUSTER, CITY_MAT.stone(), along, 0.23, out - 0.1, 10));
      for (let along = 0.15; along < out - 0.1; along += 0.22) { add(lathe(BALUSTER, CITY_MAT.stone(), 0.08, 0.23, along, 10)); add(lathe(BALUSTER, CITY_MAT.stone(), width - 0.08, 0.23, along, 10)); }
      add(box(width, 0.08, 0.16, CITY_MAT.stone(), cx, 0.97, out - 0.1));
      add(box(0.16, 0.08, out, CITY_MAT.stone(), 0.08, 0.97, out / 2)); add(box(0.16, 0.08, out, CITY_MAT.stone(), width - 0.08, 0.97, out / 2));
      // вывеска над дверями
      add(box(3.4, 0.36, 0.06, CITY_MAT.darkWood(), cx, -0.3, 0.12));
      add(box(3.1, 0.2, 0.02, CITY_MAT.brass(), cx, -0.3, 0.155));
      return group;
    }
    case 'fountain': {
      // круглая чаша радиусом 5,3 м, вода, двухъярусная ваза со струями
      const radius = 5.3;
      add(lathe([[radius - 0.4, 0], [radius + 0.05, 0], [radius + 0.05, 0.42], [radius - 0.05, 0.55], [radius - 0.35, 0.55], [radius - 0.4, 0.5], [radius - 0.4, 0]], CITY_MAT.granite(), cx, 0, cz, 72));
      const water = new THREE.Mesh(new THREE.CircleGeometry(radius - 0.38, 64), CITY_MAT.water());
      water.rotation.x = -Math.PI / 2; water.position.set(cx, 0.36, cz); add(water);
      add(new THREE.Mesh(new THREE.CircleGeometry(radius - 0.38, 64), CITY_MAT.granite())).rotation.x = -Math.PI / 2;
      group.children[group.children.length - 1].position.set(cx, 0.05, cz);
      add(lathe([[0, 0], [0.75, 0], [0.75, 0.3], [0.35, 0.45], [0.25, 1.1], [0.35, 1.2], [1.7, 1.35], [1.75, 1.5], [1.6, 1.55], [0.3, 1.45], [0.18, 2.0], [0.28, 2.1], [1.0, 2.25], [1.05, 2.36], [0.9, 2.4], [0.16, 2.3], [0.1, 2.9], [0.2, 3.0], [0.06, 3.3], [0, 3.35]], CITY_MAT.stone(), cx, 0, cz, 48));
      const upper = new THREE.Mesh(new THREE.CircleGeometry(0.9, 32), CITY_MAT.water()); upper.rotation.x = -Math.PI / 2; upper.position.set(cx, 2.33, cz); add(upper);
      const lower = new THREE.Mesh(new THREE.CircleGeometry(1.6, 32), CITY_MAT.water()); lower.rotation.x = -Math.PI / 2; lower.position.set(cx, 1.48, cz); add(lower);
      // струи: падающая вода с чаш и центральная струя
      add(new THREE.Mesh(new THREE.CylinderGeometry(1.62, 1.95, 1.1, 32, 1, true), CITY_MAT.spray())).position.set(cx, 0.92, cz);
      add(new THREE.Mesh(new THREE.CylinderGeometry(0.95, 1.6, 0.85, 32, 1, true), CITY_MAT.spray())).position.set(cx, 1.92, cz);
      add(new THREE.Mesh(new THREE.ConeGeometry(0.12, 1.1, 12, 1, true), CITY_MAT.spray())).position.set(cx, 3.9, cz);
      for (let jet = 0; jet < 8; jet++) {
        const angle = jet / 8 * Math.PI * 2;
        const spout = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.05, 1.6, 6, 1, true), CITY_MAT.spray());
        spout.position.set(cx + Math.cos(angle) * (radius - 1.2), 0.9, cz + Math.sin(angle) * (radius - 1.2));
        spout.rotation.set(Math.sin(angle) * 0.6, 0, -Math.cos(angle) * 0.6);
        add(spout);
      }
      return group;
    }
    case 'playhouse': {
      const wall = CITY_MAT.paint(0xd8c08a), roofPaint = CITY_MAT.paint(0xb03a2a);
      add(box(width - 0.3, 0.1, depth - 0.3, CITY_MAT.lightWood(), cx, 0.05, cz));
      for (const [x, z, w, d] of [[cx, 0.2, width - 0.3, 0.06], [0.2, cz, 0.06, depth - 0.3], [width - 0.2, cz, 0.06, depth - 0.3]]) add(box(w, 1.3, d, wall, x, 0.75, z));
      add(box(0.8, 1.3, 0.06, wall, 0.55, 0.75, depth - 0.2)); add(box(0.7, 1.3, 0.06, wall, width - 0.5, 0.75, depth - 0.2));
      add(box(0.5, 0.45, 0.07, CITY_MAT.glass(), 0.2, 0.95, cz)).rotation.y = Math.PI / 2;
      const roofLeft = box(width * 0.62, 0.06, depth - 0.1, roofPaint, width * 0.3, 1.75, cz); roofLeft.rotation.z = 0.6; add(roofLeft);
      const roofRight = box(width * 0.62, 0.06, depth - 0.1, roofPaint, width * 0.7, 1.75, cz); roofRight.rotation.z = -0.6; add(roofRight);
      for (const z of [0.2, depth - 0.2]) { const end = gable(width - 0.3, 0.75, 0.06, wall); end.position.set(cx, 1.4, z); add(end); }
      return group;
    }
    case 'slide': {
      const red = CITY_MAT.paint(0xc2402e), blue = CITY_MAT.paint(0x3a6aa8);
      add(box(0.9, 0.08, 0.9, CITY_MAT.lightWood(), cx, 1.5, 0.55));
      for (const [x, z] of [[cx - 0.4, 0.15], [cx + 0.4, 0.15], [cx - 0.4, 0.95], [cx + 0.4, 0.95]]) add(cylinder(0.04, 0.04, 2.3, blue, x, 1.15, z, 8));
      for (const x of [cx - 0.4, cx + 0.4]) add(box(0.05, 0.05, 0.9, blue, x, 2.25, 0.55));
      for (let step = 0; step < 5; step++) add(box(0.6, 0.04, 0.12, CITY_MAT.lightWood(), cx, 0.3 + step * 0.27, 0.05 - step * 0.0)).position.z = 0.08;
      const chute = box(0.62, 0.05, 2.4, red, cx, 0.82, 2.05); chute.rotation.x = 0.62; add(chute);
      for (const side of [-1, 1]) { const rail = box(0.05, 0.16, 2.4, red, cx + side * 0.32, 0.9, 2.05); rail.rotation.x = 0.62; add(rail); }
      return group;
    }
    case 'swing': {
      const frameMat = CITY_MAT.paint(0x3a6aa8);
      for (const x of [0.15, width - 0.15]) for (const side of [-1, 1]) { const leg = cylinder(0.045, 0.045, 2.5, frameMat, x, 1.18, cz + side * 0.45, 8); leg.rotation.x = side * 0.38; add(leg); }
      const beam = cylinder(0.05, 0.05, width - 0.2, frameMat, cx, 2.35, cz, 8); beam.rotation.z = Math.PI / 2; add(beam);
      for (const x of [width * 0.3, width * 0.7]) {
        for (const side of [-0.22, 0.22]) add(cylinder(0.01, 0.01, 1.75, CITY_MAT.steel(), x + side, 1.45, cz, 4));
        add(box(0.5, 0.05, 0.22, CITY_MAT.paint(0xd8a020), x, 0.55, cz));
      }
      return group;
    }
    case 'sandbox': {
      for (const [x, z, w, d] of [[cx, 0.1, width - 0.2, 0.18], [cx, depth - 0.1, width - 0.2, 0.18], [0.1, cz, 0.18, depth], [width - 0.1, cz, 0.18, depth]]) add(box(w, 0.3, d, CITY_MAT.lightWood(), x, 0.15, z));
      add(box(width - 0.3, 0.12, depth - 0.3, CITY_MAT.sand(), cx, 0.06, cz));
      add(box(0.2, 0.18, 0.2, CITY_MAT.paint(0xc2402e), cx - 0.6, 0.2, cz + 0.3));
      add(cylinder(0.12, 0.08, 0.16, CITY_MAT.paint(0x3a6aa8), cx + 0.5, 0.2, cz - 0.4, 12));
      return group;
    }
    case 'carousel': {
      add(cylinder(1.1, 1.1, 0.1, CITY_MAT.paint(0xc2402e), cx, 0.25, cz, 32));
      add(cylinder(0.08, 0.1, 0.9, CITY_MAT.steel(), cx, 0.7, cz, 10));
      for (let spoke = 0; spoke < 4; spoke++) {
        const angle = spoke * Math.PI / 2;
        const bar = box(1.9, 0.04, 0.04, CITY_MAT.paint(0xd8a020), cx, 0.95, cz); bar.rotation.y = angle; add(bar);
        add(cylinder(0.03, 0.03, 0.7, CITY_MAT.paint(0xd8a020), cx + Math.cos(angle) * 0.95, 0.6, cz + Math.sin(angle) * 0.95, 6));
      }
      return group;
    }
    case 'busStop': {
      for (const x of [0.15, width - 0.15]) add(box(0.08, 2.4, 0.08, CITY_MAT.iron(), x, 1.2, 0.2));
      add(box(width, 0.08, 1.2, CITY_MAT.iron(), cx, 2.42, 0.6));
      add(box(width - 0.3, 1.9, 0.03, CITY_MAT.glass(), cx, 1.2, 0.18));
      add(box(width - 0.6, 0.06, 0.4, CITY_MAT.lightWood(), cx, 0.48, 0.42));
      add(box(0.9, 0.6, 0.06, CITY_MAT.paint(0x2a5a9a), width - 0.6, 2.0, 0.2));
      return group;
    }
    case 'counter': {
      const local = new THREE.Group();
      local.add(box(TILE, 1.05, 0.6, CITY_MAT.darkWood(), TILE / 2, 0.52, 0.55));
      local.add(box(TILE + 0.02, 0.05, 0.7, CITY_MAT.stone(), TILE / 2, 1.07, 0.55));
      local.add(box(TILE, 0.55, 0.02, CITY_MAT.glass(), TILE / 2, 1.4, 0.4));
      local.add(box(0.04, 0.6, 0.04, CITY_MAT.brass(), 0.04, 1.4, 0.4));
      return rotated(local, item, cx, cz);
    }
    case 'deposits': {
      const local = new THREE.Group();
      local.add(box(TILE - 0.02, 2.1, 0.45, CITY_MAT.steel(), TILE / 2, 1.05, 0.24));
      for (let rowIndex = 0; rowIndex < 9; rowIndex++) for (let colIndex = 0; colIndex < 4; colIndex++) {
        const x = 0.12 + colIndex * 0.3, y = 0.15 + rowIndex * 0.22;
        local.add(box(0.27, 0.19, 0.02, CITY_MAT.paint(0x8a9298), x + 0.14, y + 0.1, 0.475));
        local.add(box(0.03, 0.03, 0.02, CITY_MAT.brass(), x + 0.14, y + 0.1, 0.49));
      }
      return rotated(local, item, cx, cz);
    }
    case 'plant':
      add(lathe([[0, 0], [0.2, 0], [0.26, 0.45], [0.28, 0.5], [0, 0.5]], CITY_MAT.paint(0x9a5a3a), cx, 0, cz, 16));
      for (let blob = 0; blob < 4; blob++) { const mesh = new THREE.Mesh(blobGeometry(0.32, item.col * 3 + blob), leafMaterial(0x3e6a30)); mesh.position.set(cx + (rng() - 0.5) * 0.3, 0.9 + blob * 0.22, cz + (rng() - 0.5) * 0.3); add(mesh); }
      return group;
    case 'bed': {
      const local = new THREE.Group();
      local.add(box(width - 0.2, 0.35, depth - 0.25, CITY_MAT.wood(), cx, 0.18, cz + 0.05));
      local.add(box(width - 0.3, 0.18, depth - 0.35, CITY_MAT.fabric(0xe8e2d4), cx, 0.44, cz + 0.05));
      local.add(box(width * 0.6, 0.06, depth - 0.3, CITY_MAT.fabric(0x6a3a4a), cx + width * 0.17, 0.55, cz + 0.05));
      local.add(box(0.45, 0.14, depth - 0.5, CITY_MAT.fabric(0xf4f0e8), 0.45, 0.6, cz + 0.05));
      local.add(box(0.08, 1.0, depth - 0.25, CITY_MAT.darkWood(), 0.12, 0.5, cz + 0.05));
      return rotated(local, item, cx, cz);
    }
    case 'wardrobe': {
      const local = new THREE.Group();
      local.add(box(TILE - 0.15, 2.0, 0.6, CITY_MAT.wood(), TILE / 2, 1.0, 0.36));
      local.add(box(TILE - 0.05, 0.1, 0.68, CITY_MAT.darkWood(), TILE / 2, 2.05, 0.36));
      local.add(box(0.02, 1.8, 0.02, CITY_MAT.darkWood(), TILE / 2, 1.0, 0.67));
      for (const side of [-1, 1]) local.add(box(0.03, 0.12, 0.03, CITY_MAT.brass(), TILE / 2 + side * 0.06, 1.05, 0.68));
      return rotated(local, item, cx, cz);
    }
    case 'bookcase': {
      const local = new THREE.Group();
      local.add(box(TILE - 0.15, 2.0, 0.4, CITY_MAT.darkWood(), TILE / 2, 1.0, 0.26));
      const colors = [0x7a2a22, 0x2f4a66, 0x4f5638, 0xa8946a, 0x3a3e42, 0x8a5a2a];
      for (let shelf = 0; shelf < 5; shelf++) {
        let x = 0.14;
        while (x < TILE - 0.2) {
          const bookWidth = 0.04 + rng() * 0.05, bookHeight = 0.22 + rng() * 0.1;
          local.add(box(bookWidth - 0.005, bookHeight, 0.25, CITY_MAT.fabric(colors[Math.floor(rng() * colors.length)]), x + bookWidth / 2, 0.12 + shelf * 0.38 + bookHeight / 2, 0.36));
          x += bookWidth;
        }
      }
      return rotated(local, item, cx, cz);
    }
    case 'table': {
      add(box(width - 0.3, 0.05, depth - 0.3, CITY_MAT.wood(), cx, 0.76, cz));
      for (const [x, z] of [[0.25, 0.25], [width - 0.25, 0.25], [0.25, depth - 0.25], [width - 0.25, depth - 0.25]]) add(box(0.06, 0.74, 0.06, CITY_MAT.darkWood(), x, 0.37, z));
      for (let chair = 0; chair < Math.max(2, item.cols); chair++) {
        const x = (chair + 0.5) * width / Math.max(2, item.cols);
        for (const z of [0.05, depth - 0.05]) {
          add(box(0.4, 0.05, 0.4, CITY_MAT.darkWood(), x, 0.45, z));
          add(box(0.4, 0.5, 0.04, CITY_MAT.darkWood(), x, 0.72, z < cz ? z - 0.18 : z + 0.18));
        }
      }
      return group;
    }
    case 'sofa': {
      const local = new THREE.Group();
      const fabric = CITY_MAT.fabric([0x6a2a2a, 0x2f4a3a, 0x4a4a6a][(item.col + item.row) % 3]);
      local.add(box(width - 0.2, 0.42, 0.8, fabric, cx, 0.21, 0.6));
      local.add(box(width - 0.2, 0.5, 0.2, fabric, cx, 0.65, 0.3));
      for (const x of [0.15, width - 0.15]) local.add(box(0.18, 0.6, 0.8, fabric, x, 0.3, 0.6));
      return rotated(local, item, cx, cz);
    }
    default:
      return null;
  }
}

// ================= земля города: клетка покрытия с бордюрами и разметкой =================
// curbs: { N, S, W, E } — 'curb' (высокий бордюр у проезжей части) | 'edge' (низкий поребрик у газона) | null
export function cityGroundExtras(col, row, curbs, mark) {
  const group = new THREE.Group();
  const x0 = col * TILE, z0 = row * TILE;
  const granite = CITY_MAT.granite();
  for (const [side, kind] of Object.entries(curbs)) {
    if (!kind) continue;
    const height = kind === 'curb' ? 0.13 : 0.06, thickness = kind === 'curb' ? 0.16 : 0.08;
    const material = kind === 'curb' ? granite : CITY_MAT.stone();
    if (side === 'N') group.add(box(TILE, height, thickness, material, x0 + TILE / 2, height / 2, z0 + thickness / 2));
    if (side === 'S') group.add(box(TILE, height, thickness, material, x0 + TILE / 2, height / 2, z0 + TILE - thickness / 2));
    if (side === 'W') group.add(box(thickness, height, TILE, material, x0 + thickness / 2, height / 2, z0 + TILE / 2));
    if (side === 'E') group.add(box(thickness, height, TILE, material, x0 + TILE - thickness / 2, height / 2, z0 + TILE / 2));
  }
  const paint = standard('roadPaint', { color: 0xe8e6dc, roughness: 0.7 });
  if (mark === 'dash') group.add(box(TILE, 0.012, 0.14, paint, x0 + TILE / 2, 0.006, z0 + 0.07));
  if (mark === 'zebra') {
    // полосы шириной 0,5 м через 0,5 м по z (глобально), длина — вся клетка по x
    for (let stripe = Math.floor(z0 / 1.0) * 1.0; stripe < z0 + TILE; stripe += 1.0) {
      const start = Math.max(z0, stripe), end = Math.min(z0 + TILE, stripe + 0.5);
      if (end - start > 0.01) group.add(box(TILE - 0.02, 0.012, end - start, paint, x0 + TILE / 2, 0.006, (start + end) / 2));
    }
  }
  group.traverse((node) => { if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; } });
  return group;
}
