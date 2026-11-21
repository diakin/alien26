// Рендер карты базы.
//   node outpostrun.mjs preview out.png [level] [cut] [width]  — уменьшенный общий вид
//   node outpostrun.mjs variant out_dir level cut               — куски цвет+ID одного варианта
//   node outpostrun.mjs info out_dir                             — проекция и разметка (JSON)
import { chromium } from 'playwright-core';
import fs from 'node:fs';
const [mode, output, levelArg = '3', cutArg = '0', widthArg = '1600'] = process.argv.slice(2);
const browser = await chromium.launch({ executablePath: process.env.CHROME || '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--js-flags=--max-old-space-size=4096'] });
const page = await browser.newPage();
page.on('pageerror', (error) => console.log('pageerror', error.message));
page.on('console', (message) => { if (message.type() === 'error') console.log('console', message.text().slice(0, 300)); });
await page.goto(`http://127.0.0.1:${process.env.PORT || 8766}/outpost.html`);
await page.waitForFunction(() => window.ready, null, { timeout: 600000 });
const save = (file, url) => fs.writeFileSync(file, Buffer.from(url.split(',')[1], 'base64'));
const started = Date.now();
if (mode === 'info') {
  fs.mkdirSync(output, { recursive: true });
  const info = await page.evaluate(() => window.outpostInfo());
  const layout = await page.evaluate(() => window.layoutData());
  fs.writeFileSync(`${output}/info.json`, JSON.stringify(info));
  fs.writeFileSync(`${output}/layout.json`, JSON.stringify(layout));
  console.log(JSON.stringify(info));
} else if (mode === 'preview') {
  console.log(JSON.stringify(await page.evaluate(([level, cut]) => window.setupVariant(level, cut), [Number(levelArg), cutArg === '1'])));
  save(output, await page.evaluate((width) => window.renderPreview(width), Number(widthArg)));
} else if (mode === 'variant') {
  const level = Number(levelArg), cut = cutArg === '1';
  const dir = `${output}/v${level}${cut ? 'c' : 'f'}`;
  fs.mkdirSync(dir, { recursive: true });
  await page.evaluate(([viewLevel, cutWalls]) => window.setupVariant(viewLevel, cutWalls), [level, cut]);
  const info = await page.evaluate(() => window.outpostInfo());
  const CHUNK = 720, MARGIN = 24;
  const chunks = [];
  for (let y = 0; y < info.height; y += CHUNK) {
    for (let x = 0; x < info.width; x += CHUNK) {
      const result = await page.evaluate(([cx, cy, size, margin]) => window.renderChunk(cx, cy, size, size, margin), [x, y, CHUNK, MARGIN]);
      save(`${dir}/c_${x}_${y}.png`, result.color);
      save(`${dir}/i_${x}_${y}.png`, result.id);
      chunks.push({ x, y, size: CHUNK, margin: MARGIN });
    }
  }
  fs.writeFileSync(`${dir}/chunks.json`, JSON.stringify({ level, cut, chunks, width: info.width, height: info.height }));
}
console.log('done', mode, Math.round((Date.now() - started) / 1000), 's');
await browser.close();
