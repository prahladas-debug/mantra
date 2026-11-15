const { chromium } = require('playwright'); const fs = require('fs');
(async () => { const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1024, height: 1024 } });
for (const [svg, out, size, transparent] of [['icon.svg','icon.png',1024,false],['fg.svg','android-icon-foreground.png',1024,true],['bg.svg','android-icon-background.png',1024,false],['mono.svg','android-icon-monochrome.png',1024,true],['splash.svg','splash-icon.png',1024,true],['icon.svg','favicon.png',48,false]]) {
  await p.setViewportSize({ width: size, height: size });
  await p.setContent(`<html><body style="margin:0;background:transparent"><img src="data:image/svg+xml;base64,${fs.readFileSync(svg).toString('base64')}" width="${size}" height="${size}"></body></html>`);
  await p.screenshot({ path: out, omitBackground: transparent, clip: { x: 0, y: 0, width: size, height: size } });
} await b.close(); })();
