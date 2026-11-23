// Рендер тем музыки в WAV: node musicrun.mjs <папка> [calm:32] [battle:32]
import { chromium } from 'playwright-core';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const folder = process.argv[2] || 'music_out';
const jobs = process.argv.slice(3).length ? process.argv.slice(3) : ['calm:32', 'battle:32'];
fs.mkdirSync(folder, { recursive: true });
const browser = await chromium.launch({ executablePath: process.env.CHROME || '/usr/bin/google-chrome', args: ['--autoplay-policy=no-user-gesture-required'] });
const page = await browser.newPage();
const errors = [];
page.on('pageerror', (error) => errors.push(String(error)));
page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
const here = path.dirname(fileURLToPath(import.meta.url));
await page.goto(pathToFileURL(path.join(here, 'musicrender.html')).href);
for (const job of jobs) {
  const [name, bars, solo] = job.split(':');
  const started = Date.now();
  const result = await page.evaluate(([themeName, barCount, soloTag]) => window.renderTheme(themeName, barCount, soloTag), [name, Number(bars || 32), solo || null]);
  const file = path.join(folder, name + (solo ? '_' + solo : '') + '.wav');
  fs.writeFileSync(file, Buffer.from(result.wav, 'base64'));
  console.log(file, 'peak', result.peak.toFixed(3), ((Date.now() - started) / 1000).toFixed(1) + ' s');
}
if (errors.length) console.log('errors:', errors.join('\n'));
await browser.close();
