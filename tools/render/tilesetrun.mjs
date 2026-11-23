// Рендер набора тайлов карты базы. Карта — переменная окружения MAP (outpost по умолчанию, big — 48×48).
//   node tilesetrun.mjs plan out_dir          — только план: список тайлов и их места (plan.json, layout.json)
//   node tilesetrun.mjs render out_dir [from] [to] — план и проходы тайлов (уже готовые пропускаются)
import { chromium } from 'playwright-core';
import fs from 'node:fs';
const [mode, output, fromArg = '0', toArg = '100000'] = process.argv.slice(2);
const browser = await chromium.launch({ executablePath: process.env.CHROME || '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--js-flags=--max-old-space-size=4096'] });
const page = await browser.newPage();
page.on('pageerror', (error) => console.log('pageerror', error.message));
page.on('console', (message) => { if (message.type() === 'error') console.log('console', message.text().slice(0, 300)); });
await page.goto(`http://127.0.0.1:${process.env.PORT || 8766}/tileset.html?map=${process.env.MAP || 'outpost'}`);
await page.waitForFunction(() => window.ready, null, { timeout: 600000 });
fs.mkdirSync(output, { recursive: true });
const plan = await page.evaluate(() => window.tilesetPlan());
fs.writeFileSync(`${output}/plan.json`, JSON.stringify(plan));
fs.writeFileSync(`${output}/layout.json`, JSON.stringify(await page.evaluate(() => window.tilesetLayout())));
console.log('tiles', plan.jobs.length, 'camera', JSON.stringify(await page.evaluate(() => window.cameraCheck)));
const save = (file, url) => fs.writeFileSync(file, Buffer.from(url.split(',')[1], 'base64'));
if (mode === 'render') {
  const started = Date.now();
  const last = Math.min(plan.jobs.length, Number(toArg));
  for (let id = Number(fromArg); id < last; id++) {
    const metaFile = `${output}/t${id}.json`;
    if (fs.existsSync(metaFile)) continue;
    const result = await page.evaluate((tileId) => window.renderTile(tileId), id);
    if (!result.empty) {
      save(`${output}/t${id}_c.png`, result.color);
      save(`${output}/t${id}_m.png`, result.mask);
      if (result.shadow) save(`${output}/t${id}_s.png`, result.shadow);
    }
    fs.writeFileSync(metaFile, JSON.stringify({ empty: !!result.empty, frame: result.frame, shadowFrame: result.shadowFrame }));
    if (id % 20 === 0) console.log(id, '/', last, Math.round((Date.now() - started) / 1000), 's');
  }
  console.log('done', Math.round((Date.now() - started) / 1000), 's');
}
await browser.close();
