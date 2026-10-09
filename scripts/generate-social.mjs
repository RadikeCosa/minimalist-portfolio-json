import { readFile, writeFile } from 'node:fs/promises';
import { chromium } from '@playwright/test';
const font = await readFile(new URL('../node_modules/@fontsource-variable/archivo/files/archivo-latin-wght-normal.woff2',import.meta.url));
const mark = await readFile(new URL('../public/brand-mark.svg',import.meta.url),'utf8');
const markContent = mark.match(/<svg\b[^>]*>([\s\S]*)<\/svg>/)?.[1];
if (!markContent) throw new Error('Invalid brand mark SVG');
// The small monochrome favicon has its own optically adjusted drawing.
const browser = await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH ? {executablePath:process.env.CHROMIUM_PATH} : {})});
try {
  const page = await browser.newPage({viewport:{width:1200,height:630},deviceScaleFactor:1});
  for (const [lang, label, first, second] of [
    ['es','DESARROLLO WEB','DEL PROBLEMA','AL PRODUCTO.'],
    ['en','WEB DEVELOPMENT','FROM PROBLEM','TO PRODUCT.'],
  ]) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-labelledby="title description">
<title id="title">Ramiro Nicolás Cosa — ${label}</title>
<desc id="description">${first} ${second} ramirocosa.is-a.dev</desc>
<style>@font-face{font-family:Archivo;src:url(data:font/woff2;base64,${font.toString('base64')}) format('woff2');font-weight:400 900;font-display:swap}text{font-family:Archivo,Arial,sans-serif}</style>
<rect width="1200" height="630" fill="#F0F0F0"/>
<rect x="42" y="42" width="1120" height="554" fill="#121212"/>
<rect x="34" y="34" width="1120" height="554" fill="#F0F0F0" stroke="#121212" stroke-width="4"/>
<path d="M34 122H1154" stroke="#121212" stroke-width="4"/>
<text x="72" y="91" font-size="30" font-weight="900">Ramiro Cosa.</text>
<text x="72" y="196" font-size="18" font-weight="700" letter-spacing="2">${label}</text>
<text x="66" y="306" font-size="76" font-weight="900" letter-spacing="-2">${first}</text>
<text x="66" y="392" font-size="76" font-weight="900" letter-spacing="-2" fill="#1040C0">${second}</text>
<svg x="844" y="236" width="266" height="144" viewBox="0 0 208 112">${markContent}</svg>
<text x="72" y="535" font-size="24" font-weight="600">ramirocosa.is-a.dev</text>
</svg>`;
    const target = new URL(`../public/og/portfolio-${lang}`,import.meta.url);
    await writeFile(new URL(`${target.href}.svg`),svg+'\n');
    await page.setContent(`<html><body style="margin:0">${svg}</body></html>`);
    await page.evaluate(()=>document.fonts.ready);
    await page.screenshot({path:new URL(`${target.href}.png`).pathname});
  }
} finally { await browser.close(); }
