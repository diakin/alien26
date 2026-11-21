// Рендер набора спрайтов: node spriterun.mjs out_dir spec.json
import { chromium } from 'playwright-core';
import fs from 'node:fs';
const [outDir, specFile] = process.argv.slice(2);
const specs = JSON.parse(fs.readFileSync(specFile, 'utf8'));
fs.mkdirSync(outDir, { recursive: true });
const browser = await chromium.launch({ executablePath: process.env.CHROME || '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 400, height: 400 } });
page.on('pageerror', (error) => console.log('pageerror', error.message));
page.on('console', (message) => { if (message.type() === 'error' || (message.type() === 'warning' && !message.text().includes('GPU stall'))) console.log(message.type(), message.text().slice(0, 300)); });
await page.goto(`http://127.0.0.1:${process.env.PORT || 8766}/sprites.html`);
await page.waitForFunction(() => window.ready, null, { timeout: 120000 });
const index = {};
for (const spec of specs) {
  for (const direction of spec.directions ?? [0, 1, 2, 3, 4, 5, 6, 7]) {
    const result = await page.evaluate(([options, dir]) => window.renderSprite(options, dir), [spec.options, direction]);
    const base = `${outDir}/${spec.name}_d${direction}`;
    for (const pass of ['color', 'mask', 'shadow']) fs.writeFileSync(`${base}_${pass}.png`, Buffer.from(result[pass].split(',')[1], 'base64'));
    index[`${spec.name}_d${direction}`] = { anchor: result.anchor, width: result.width, height: result.height, scale: result.scale };
  }
  console.log('done', spec.name);
}
fs.writeFileSync(`${outDir}/index.json`, JSON.stringify(index, null, 1));
await browser.close();
