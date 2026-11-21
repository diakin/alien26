import { chromium } from 'playwright-core';
const browser = await chromium.launch({ executablePath: process.env.CHROME || '/usr/bin/google-chrome' });
const page = await browser.newPage({ viewport: { width: 1280, height: 960 }, deviceScaleFactor: 1 });
await page.goto(`http://127.0.0.1:${process.env.PORT || 8766}/out_full/final.html`);
await page.waitForTimeout(800);
await page.screenshot({ path: 'out_full/final.png', clip: { x: 0, y: 0, width: 1280, height: 960 } });
await browser.close();
