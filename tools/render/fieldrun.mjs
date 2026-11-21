// Рендер фона-поля кусками и склейка: node fieldrun.mjs out_dir [tiles]
import { chromium } from 'playwright-core';
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
const [outDir = 'field_out', tiles = '20'] = process.argv.slice(2);
const port = process.env.PORT || 8766;
fs.mkdirSync(`${outDir}/chunks`, { recursive: true });
const browser = await chromium.launch({ executablePath: process.env.CHROME || '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage();
page.on('pageerror', (error) => console.log('pageerror', error.message));
await page.goto(`http://127.0.0.1:${port}/field.html?tiles=${tiles}`);
await page.waitForFunction(() => window.ready, null, { timeout: 600000 });
const info = await page.evaluate(() => window.fieldInfo());
console.log(JSON.stringify(info));
const CHUNK = 640;
const chunks = [];
for (let y = 0; y < info.height; y += CHUNK) {
  for (let x = 0; x < info.width; x += CHUNK) {
    const width = Math.min(CHUNK, info.width - x), height = Math.min(CHUNK, info.height - y);
    const url = await page.evaluate(([cx, cy, cw, ch]) => window.renderChunk(cx, cy, cw, ch), [x, y, width, height]);
    const file = `${outDir}/chunks/c_${x}_${y}.png`;
    fs.writeFileSync(file, Buffer.from(url.split(',')[1], 'base64'));
    chunks.push({ file, x, y, width, height });
  }
}
fs.writeFileSync(`${outDir}/field.json`, JSON.stringify({ ...info, chunks }, null, 1));
await browser.close();
execFileSync('python3', ['fieldstitch.py', outDir], { stdio: 'inherit' });
