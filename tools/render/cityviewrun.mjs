// node cityviewrun.mjs out.png c0,r0,c1,r1 [level]
import { chromium } from 'playwright-core';
import fs from 'node:fs';
const [output, area = '34,0,62,30', level = '3'] = process.argv.slice(2);
const browser = await chromium.launch({ executablePath: process.env.CHROME || '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage();
page.on('pageerror', (error) => console.log('pageerror', error.message, error.stack));
await page.goto(`http://127.0.0.1:${process.env.PORT || 8766}/cityview.html?map=city&area=${area}&level=${level}&w=${process.env.W || 1600}&h=${process.env.H || 1000}`);
await page.waitForFunction(() => window.ready, null, { timeout: 600000 });
fs.writeFileSync(output, Buffer.from((await page.evaluate(() => window.shot)).split(',')[1], 'base64'));
await browser.close();
