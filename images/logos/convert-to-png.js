#!/usr/bin/env node
// Willis Advocacy Group — Logo PNG Converter
// Renders all SVG logos to PNG at every required size using Puppeteer
//
// Setup (run once):
//   cd images/logos && npm install puppeteer
//
// Run:
//   node convert-to-png.js
//
// Output: ./png/ folder with every size you'll ever need

const puppeteer = require('puppeteer');
const fs        = require('fs');
const path      = require('path');

// ── Output directory ──────────────────────────────────────
const OUT_DIR = path.join(__dirname, 'png');
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

// ── Logo definitions ──────────────────────────────────────
// Each entry: { file, sizes: [{ w, h, suffix }], bg }
// bg: hex string for background fill (null = transparent)

const LOGOS = [
  {
    // Standalone shield — icon sizes
    file: 'logo-icon.svg',
    bg: null,
    sizes: [
      { w: 32,   h: 37,   suffix: '32'   },
      { w: 64,   h: 74,   suffix: '64'   },
      { w: 128,  h: 147,  suffix: '128'  },
      { w: 256,  h: 294,  suffix: '256'  },
      { w: 512,  h: 589,  suffix: '512'  },
      { w: 1024, h: 1178, suffix: '1024' },
    ],
  },
  {
    // Icon on teal — social profile photo
    file: 'logo-icon-teal.svg',
    bg: null,
    sizes: [
      { w: 200,  h: 200,  suffix: '200'  },
      { w: 400,  h: 400,  suffix: '400'  },
      { w: 512,  h: 512,  suffix: '512'  },
      { w: 800,  h: 800,  suffix: '800'  },
      { w: 1024, h: 1024, suffix: '1024' },
    ],
  },
  {
    // Horizontal light — hero/print
    file: 'logo-light.svg',
    bg: '#FAF7F2',
    sizes: [
      { w: 340,  h: 80,  suffix: '340'  },
      { w: 500,  h: 118, suffix: '500'  },
      { w: 680,  h: 160, suffix: '680'  },  // 2x retina
      { w: 1000, h: 235, suffix: '1000' },
    ],
  },
  {
    // Horizontal dark — on navy
    file: 'logo-dark.svg',
    bg: '#0C1B2E',
    sizes: [
      { w: 340,  h: 80,  suffix: '340'  },
      { w: 500,  h: 118, suffix: '500'  },
      { w: 680,  h: 160, suffix: '680'  },
      { w: 1000, h: 235, suffix: '1000' },
    ],
  },
  {
    // Nav logo — compact
    file: 'logo-nav.svg',
    bg: null,
    sizes: [
      { w: 260, h: 48,  suffix: '260'   },
      { w: 520, h: 96,  suffix: '520-2x' }, // 2x retina
    ],
  },
  {
    // Social media square
    file: 'logo-social.svg',
    bg: '#0C1B2E',
    sizes: [
      { w: 400,  h: 400,  suffix: '400'  },
      { w: 800,  h: 800,  suffix: '800'  },
      { w: 1080, h: 1080, suffix: '1080' }, // Instagram optimal
    ],
  },
  {
    // Favicon
    file: 'logo-favicon.svg',
    bg: null,
    sizes: [
      { w: 16,  h: 16,  suffix: '16'  },
      { w: 32,  h: 32,  suffix: '32'  },
      { w: 48,  h: 48,  suffix: '48'  },
      { w: 64,  h: 64,  suffix: '64'  },
      { w: 96,  h: 96,  suffix: '96'  },
      { w: 180, h: 180, suffix: '180' }, // Apple Touch Icon
      { w: 192, h: 192, suffix: '192' }, // Android
      { w: 512, h: 512, suffix: '512' }, // PWA
    ],
  },
  {
    // Email signature
    file: 'logo-email.svg',
    bg: '#FFFFFF',
    sizes: [
      { w: 220, h: 60,  suffix: '220'   },
      { w: 440, h: 120, suffix: '440-2x' }, // 2x retina for email
    ],
  },
];

// ── Main conversion ───────────────────────────────────────
async function convertAll() {
  console.log('Willis Advocacy Group — Logo PNG Converter');
  console.log('='.repeat(46));

  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page    = await browser.newPage();

  // Allow Google Fonts to load
  await page.setExtraHTTPHeaders({ 'Accept-Language': 'en-US' });

  let totalFiles = 0;

  for (const logo of LOGOS) {
    const svgPath  = path.join(__dirname, logo.file);
    const baseName = path.basename(logo.file, '.svg');

    if (!fs.existsSync(svgPath)) {
      console.warn(`  ⚠  ${logo.file} not found — skipping`);
      continue;
    }

    const svgContent = fs.readFileSync(svgPath, 'utf8');

    for (const size of logo.sizes) {
      const outFile = path.join(OUT_DIR, `${baseName}-${size.suffix}.png`);

      // Build HTML wrapper
      const bg     = logo.bg || 'transparent';
      const html   = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body {
    width: ${size.w}px; height: ${size.h}px;
    overflow: hidden;
    background: ${bg};
  }
  svg {
    width: ${size.w}px;
    height: ${size.h}px;
    display: block;
  }
</style>
</head>
<body>${svgContent}</body>
</html>`;

      await page.setContent(html, { waitUntil: 'networkidle0', timeout: 15000 });
      await page.setViewport({ width: size.w, height: size.h, deviceScaleFactor: 1 });

      // Small delay for fonts
      await page.waitForTimeout(300);

      await page.screenshot({
        path: outFile,
        clip: { x: 0, y: 0, width: size.w, height: size.h },
        omitBackground: bg === 'transparent',
      });

      console.log(`  ✓  ${baseName}-${size.suffix}.png  (${size.w}×${size.h})`);
      totalFiles++;
    }
  }

  await browser.close();

  console.log('='.repeat(46));
  console.log(`Done — ${totalFiles} PNG files in ./png/`);
  console.log('');
  console.log('Next steps:');
  console.log('  1. Copy png/logo-favicon-*.png  → website root + images/');
  console.log('  2. Copy png/logo-email-440-2x.png → upload to willisadvocacygroup.com/images/');
  console.log('  3. Add favicon lines to index.html <head> (see LOGO-USAGE-GUIDE.md)');
}

convertAll().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
