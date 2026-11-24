// Данные карты для игры из разметки, без рендера тайлов (быстрая проверка правок базы).
//   node baselogic.mjs ../../game            — карта base (MAP=... — другая карта из тайлов)
// Обновляет в game/js/maps/outpost_tiles_<карта>.js всё, кроме картинки: проходимость, стены, двери, места высадки,
// препятствия для пуль. Атлас тайлов остаётся прежним (помечается tilesStale: картинку даёт WebGL-карта, js/map3d.js);
// тайлы створок переносятся по месту двери, у новых дверей тайла нет. Полный рендер — tilesetrun.mjs и tilesetbuild.py.
import { chromium } from 'playwright-core';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const gameDir = path.resolve(process.argv[2] || path.join(here, '../../game'));
const mapName = process.env.MAP || 'base';
const mapFile = path.join(gameDir, 'js/maps', `outpost_tiles_${mapName}.js`);

// простой статический сервер для модулей tools/render (по file:// Chrome их не грузит)
const TYPES = { '.js': 'text/javascript', '.mjs': 'text/javascript', '.html': 'text/html', '.json': 'application/json' };
const server = http.createServer((request, response) => {
  const file = path.join(here, decodeURIComponent(new URL(request.url, 'http://local').pathname));
  if (!file.startsWith(here) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { response.writeHead(404); response.end(); return; }
  response.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
  fs.createReadStream(file).pipe(response);
});
await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
const port = server.address().port;

const browser = await chromium.launch({ executablePath: process.env.CHROME || '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage();
page.on('pageerror', (error) => console.log('pageerror', error.message));
const started = Date.now();
await page.goto(`http://127.0.0.1:${port}/baselogic.html?map=${mapName}`);
await page.waitForFunction(() => window.ready, null, { timeout: 300000 });
const logic = await page.evaluate(() => window.logicData());
await browser.close();
server.close();

const text = fs.readFileSync(mapFile, 'utf8');
const match = /var MAP = (\{.*\});/s.exec(text);
const oldMap = JSON.parse(match[1]);
// тайлы створок — по месту двери
const oldDoorTiles = new Map();
(oldMap.doors || []).forEach((door, index) => oldDoorTiles.set(door.join('|'), oldMap.tileset ? oldMap.tileset.doors[index] : -1));
const differences = Object.keys(logic).filter((key) => JSON.stringify(oldMap[key]) !== JSON.stringify(logic[key]));
if (!differences.length) {
  console.log(`${path.relative(process.cwd(), mapFile)}: без изменений (дверей ${logic.doors.length}, препятствий ${logic.solids.length})`);
  process.exit(0);
}
const newMap = { ...logic };
newMap.minimap = oldMap.minimap;
if (oldMap.tileset) {
  newMap.tileset = { ...oldMap.tileset, doors: logic.doors.map((door) => (oldDoorTiles.has(door.join('|')) ? oldDoorTiles.get(door.join('|')) : -1)) };
}
newMap.tilesStale = true;
const header = text.slice(0, match.index);
fs.writeFileSync(mapFile, header + 'var MAP = ' + JSON.stringify(newMap) + ';\n');
console.log(`${path.relative(process.cwd(), mapFile)}: изменено: ${differences.join(', ')}`,
  `(дверей ${logic.doors.length}, препятствий ${logic.solids.length}, ${Math.round((Date.now() - started) / 1000)} с)`);
