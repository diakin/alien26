// Границы стран и контуры суши для глобуса: node borders.mjs <папка вывода>
// Источник — world-atlas (Natural Earth 1:50m, общественное достояние).
// borders.json — линии сухопутных границ между странами [lon, lat, lon, lat, …] с точностью 0,05°;
// land.geojson — полигоны суши (маска для затемнения океана на текстуре).
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import * as topojson from 'topojson-client';

const require = createRequire(import.meta.url);
const out = process.argv[2] || '.';
const countries = require('world-atlas/countries-50m.json');
const land = require('world-atlas/land-50m.json');

const mesh = topojson.mesh(countries, countries.objects.countries, (first, second) => first !== second);
const round = (value) => Math.round(value * 20) / 20;
const lines = [];
let points = 0;
for (const line of mesh.coordinates) {
  const flat = [];
  let lastLon = null, lastLat = null;
  for (const [lon, lat] of line) {
    const roundLon = round(lon), roundLat = round(lat);
    if (roundLon === lastLon && roundLat === lastLat) continue;
    flat.push(roundLon, roundLat);
    lastLon = roundLon; lastLat = roundLat;
  }
  if (flat.length >= 4) { lines.push(flat); points += flat.length / 2; }
}
fs.writeFileSync(path.join(out, 'borders.json'), JSON.stringify(lines));
fs.writeFileSync(path.join(out, 'land.geojson'), JSON.stringify(topojson.feature(land, land.objects.land)));
console.log('borders: lines', lines.length, 'points', points);
