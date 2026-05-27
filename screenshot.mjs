import puppeteer from 'puppeteer';
import { execSync } from 'child_process';
import { readdirSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { startServer, PORT } from './serve.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '3-screenshot-loop');

if (!existsSync(OUT)) mkdirSync(OUT);

// Version = git commit count
let version = 'v0';
try {
  version = 'v' + execSync('git rev-list --count HEAD', { cwd: __dirname }).toString().trim();
} catch {}

// Sequence = max existing seq + 1
let maxSeq = 0;
for (const f of readdirSync(OUT)) {
  const m = f.match(/_(\d{3})_/);
  if (m) maxSeq = Math.max(maxSeq, parseInt(m[1]));
}
const seq = String(maxSeq + 1).padStart(3, '0');

// Timestamp  2026-05-27T14-30-00
const ts = new Date().toISOString().replace(/\.\d+Z$/, '').replace(/:/g, '-');

const PAGES = [
  { name: 'homepage',           path: '/index.html' },
  { name: 'case-studies',       path: '/case-studies.html' },
  { name: 'case-study-detail',  path: '/case-studies/detail.html' },
  { name: 'contact',            path: '/contact.html' },
  { name: 'services-web',       path: '/services/web-mobile.html' },
];

console.log(`\n📸  Screenshot run  ${ts}  ${version}  seq ${seq}`);

const server = await startServer();

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

for (const page of PAGES) {
  const tab = await browser.newPage();
  await tab.setViewport({ width: 1440, height: 900 });
  try {
    await tab.goto(`http://127.0.0.1:${PORT}${page.path}`, { waitUntil: 'networkidle0', timeout: 15000 });
    const filename = `${ts}_${version}_${seq}_${page.name}.png`;
    await tab.screenshot({ path: join(OUT, filename) });
    console.log(`  ✓  ${filename}`);
  } catch (e) {
    console.error(`  ✗  ${page.name}: ${e.message}`);
  }
  await tab.close();
}

await browser.close();
server.close();
console.log('Done.\n');
