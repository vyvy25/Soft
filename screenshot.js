const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const PAGES = [
  { file: 'website/index.html', name: 'homepage' },
  { file: 'website/case-studies.html', name: 'case-studies' },
  { file: 'website/case-studies/detail.html', name: 'case-study-detail' },
];

const BASE_DIR = 'D:/My work - Vy/SoftFlex';
const OUT_DIR = path.join('D:/My work - Vy/SoftFlex', '3. screenshot loop');

async function takeScreenshots() {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--allow-file-access-from-files'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  for (const p of PAGES) {
    const fileUrl = `file:///${BASE_DIR}/${p.file}`.replace(/ /g, '%20');
    await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 15000 });
    await new Promise(r => setTimeout(r, 800));

    const filename = `${timestamp}_${p.name}.png`;
    const outPath = path.join(OUT_DIR, filename);
    await page.screenshot({ path: outPath, fullPage: true });
    console.log('Saved:', filename);
  }

  await browser.close();
  console.log('Done.');
}

takeScreenshots().catch(err => { console.error(err); process.exit(1); });
