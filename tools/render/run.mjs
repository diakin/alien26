// Рендер сцены в headless Chrome и сохранение кадров.
import { chromium } from 'playwright-core';
import fs from 'node:fs';
const query = process.argv[2] || '';
const outDir = process.argv[3] || 'out';
fs.mkdirSync(outDir, { recursive: true });
const browser = await chromium.launch({ executablePath: process.env.CHROME || '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--js-flags=--max-old-space-size=4096'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 700 } });
page.on('pageerror', (error) => console.log('pageerror', error.message));
page.on('console', (message) => { if (message.type() === 'error' || (message.type() === 'warning' && !message.text().includes('GPU stall'))) console.log(message.type(), message.text().slice(0, 300)); });
const started = Date.now();
await page.goto(`http://127.0.0.1:${process.env.PORT || 8766}/index.html${query}`);
await page.waitForFunction(() => window.ready, null, { timeout: 600000 });
console.log('scene built in', ((Date.now() - started) / 1000).toFixed(1), 's');
const result = await page.evaluate(() => window.renderAll());
console.log('rendered in', ((Date.now() - started) / 1000).toFixed(1), 's');
const save = (name, url) => fs.writeFileSync(`${outDir}/${name}.png`, Buffer.from(url.split(',')[1], 'base64'));
save('main', result.main);
if (result.portrait) { save('portrait', result.portrait); save('weapon', result.weapon); save('minimap', result.minimap.url); }
fs.writeFileSync(`${outDir}/meta.json`, JSON.stringify({ points: result.points, markers: result.minimap?.markers }, null, 1));
await browser.close();
