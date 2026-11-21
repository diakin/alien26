// Рендер портретов и оружия: node portraitrun.mjs out_dir
import { chromium } from 'playwright-core';
import fs from 'node:fs';
const outDir = process.argv[2] || 'ui_out';
fs.mkdirSync(outDir, { recursive: true });
const browser = await chromium.launch({ executablePath: process.env.CHROME || '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage();
page.on('pageerror', (error) => console.log('pageerror', error.message));
await page.goto(`http://127.0.0.1:${process.env.PORT || 8766}/portrait.html`);
await page.waitForFunction(() => window.ready, null, { timeout: 120000 });
for (const camo of ['black', 'green', 'alien', 'mech']) {
  for (const kind of (camo === 'alien' || camo === 'mech') ? ['Portrait'] : ['Portrait', 'Weapon']) {
    const url = await page.evaluate(([fn, c]) => window['render' + fn](c), [kind, camo]);
    fs.writeFileSync(`${outDir}/${kind.toLowerCase()}_${camo}.png`, Buffer.from(url.split(',')[1], 'base64'));
  }
}
await browser.close();
