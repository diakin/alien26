// node previewrun.mjs out.png '{"yaw":0.6}' ['{"yaw":3}' ...] — рендеры склеиваются по горизонтали отдельными файлами out_0.png ...
import { chromium } from 'playwright-core';
import fs from 'node:fs';
const [output, ...specs] = process.argv.slice(2);
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage();
page.on('pageerror', (error) => console.log('pageerror', error.message));
page.on('console', (message) => { if (message.type() === 'error' || message.type() === 'warning') console.log(message.type(), message.text().slice(0, 400)); });
await page.goto(`http://127.0.0.1:${process.env.PORT || 8766}/preview.html`);
await page.waitForFunction(() => window.ready, null, { timeout: 120000 });
for (const [index, spec] of specs.entries()) {
  const started = Date.now();
  const url = await page.evaluate((options) => window.renderPreview(options), JSON.parse(spec));
  fs.writeFileSync(output.replace('.png', `_${index}.png`), Buffer.from(url.split(',')[1], 'base64'));
  console.log('done', index, Date.now() - started, 'ms');
}
await browser.close();
