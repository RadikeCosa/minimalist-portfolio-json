import { chromium, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const baseURL = process.env.PORTFOLIO_URL || 'http://127.0.0.1:4323';
const output = process.env.QA_OUTPUT || '/tmp/bauhaus-browser-qa';
const browser = await chromium.launch({ headless: true, ...(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}) });
const paths = ['/', '/en/', '/sobre-mi/', '/en/about/', '/proyectos/plataforma-clinica/', '/en/projects/clinical-platform/', '/proyectos/landing-kinesiologia/', '/en/projects/home-rehabilitation-landing/', '/proyectos/juegos-familiares/', '/en/projects/family-games/', '/proyectos/fira-estudio/', '/en/projects/fira-estudio/'];
const widths = [360, 390, 768, 1024, 1440];
const failures = [];
const results = [];
await mkdir(output, { recursive: true });
const context = await browser.newContext();
const page = await context.newPage();
page.on('pageerror', error => failures.push(`browser: ${error.message}`));
async function inspect(label) {
  const metrics = await page.evaluate(() => {
    const h1 = document.querySelector('h1');
    const range = document.createRange(); range.selectNodeContents(h1);
    const rects = [...range.getClientRects()];
    const overflow = [...document.querySelectorAll('main *')].filter(el => {
      if (getComputedStyle(el).position === 'absolute') return false;
      const rect = el.getBoundingClientRect();
      return rect.width > 0 && (rect.right > innerWidth + 1 || rect.left < -1);
    }).map(el => `${el.tagName}.${el.className}`).slice(0,8);
    return {
      viewport: innerWidth, scrollWidth: document.documentElement.scrollWidth,
      headerHeight: document.querySelector('.site-header').getBoundingClientRect().height,
      titleSize: parseFloat(getComputedStyle(h1).fontSize), titleOverflow: rects.some(r => r.right > innerWidth || r.left < 0), overflow,
      font: getComputedStyle(h1).fontFamily,
    };
  });
  results.push({ label, ...metrics });
  if (metrics.scrollWidth > metrics.viewport || metrics.overflow.length || metrics.titleOverflow) failures.push(`${label}: horizontal overflow ${JSON.stringify(metrics)}`);
  return metrics;
}
try {
  for (const path of paths) {
    for (const width of widths) {
      await page.setViewportSize({ width, height: 900 });
      const response = await page.goto(new URL(path, baseURL).href);
      if (response.status() !== 200) failures.push(`${path}: HTTP ${response.status()}`);
      await page.evaluate(() => document.fonts.ready);
      const metrics = await inspect(`${path} @ ${width}`);
      if (width === 360 && metrics.headerHeight > 120) failures.push(`${path}: mobile header ${metrics.headerHeight}px`);
      if (['/', '/en/'].includes(path) && metrics.titleSize < 36) failures.push(`${path}: hero below 36px`);
      if (width === 360) {
        if (['/', '/en/'].includes(path)) {
          const wordFits = await page.evaluate(word => {
            const walker=document.createTreeWalker(document.querySelector('h1'),NodeFilter.SHOW_TEXT);
            let node;
            while((node=walker.nextNode())) { const start=node.textContent.toLowerCase().indexOf(word); if(start>=0) {const range=document.createRange();range.setStart(node,start);range.setEnd(node,start+word.length);return range.getClientRects().length===1;} }
            return false;
          }, path === '/' ? 'desarrollo' : 'development');
          if (!wordFits) failures.push(`${path}: long hero word wraps with Archivo`);
        }
        const targets = await page.locator('.site-header a, .button, .contact-links a, .case-links a, .case-footer a').evaluateAll(els => els.filter(el => el.getBoundingClientRect().height < 44).map(el => el.textContent));
        if (targets.length) failures.push(`${path}: touch targets ${targets.join(', ')}`);
        const accessibility = await new AxeBuilder({ page }).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa']).analyze();
        for (const violation of accessibility.violations) failures.push(`${path}: axe ${violation.id}: ${violation.nodes.map(n=>n.target.join(' ')).join(', ')}`);
      }
      // Every route gets a mobile and desktop visual artifact; load lazy figures before capturing.
      if (width === 360 || width === 1440) {
        await page.evaluate(async () => {
          await Promise.all([...document.images].map(async img => { img.loading='eager'; try { await img.decode(); } catch {} }));
        });
        const broken = await page.locator('img').evaluateAll(images => images.filter(img => !img.complete || img.naturalWidth===0).map(img => img.src));
        if(broken.length) failures.push(`${path}: broken images ${broken.join(', ')}`);
        await page.screenshot({ path: join(output, `${path.replaceAll('/','_') || 'home'}-${width}.png`), fullPage: true });
      }
    }
    // 200% browser zoom is equivalent to half the layout viewport at the same physical size.
    await page.setViewportSize({ width:720, height:500 });
    await page.goto(new URL(path,baseURL).href);
    await inspect(`${path} @ 200% layout viewport`);
    // Text-only zoom catches fixed-height and navigation wrapping failures independently.
    await page.evaluate(() => {
      const elements = [...document.querySelectorAll('h1,h2,h3,h4,p,li,dt,dd,a,span')];
      const sizes = elements.map(el => parseFloat(getComputedStyle(el).fontSize));
      elements.forEach((el,i) => el.style.fontSize = `${sizes[i]*2}px`);
    });
    await inspect(`${path} @ 200% text sizes`);
  }
  for (const path of ['/', '/en/']) {
    await page.setViewportSize({width:360,height:900});
    await page.route('**/*.woff2', route => route.abort());
    await page.goto(new URL(path,baseURL).href);
    await page.addStyleTag({content:'* { font-family: \"Archivo Fallback\", Arial, sans-serif !important; }'});
    await inspect(`${path} @ 360 fallback font`);
    const wordFits = await page.evaluate(word => {
      const walker=document.createTreeWalker(document.querySelector('h1'),NodeFilter.SHOW_TEXT);
      let node;
      while ((node=walker.nextNode())) {
        const start=node.textContent.toLowerCase().indexOf(word);
        if(start>=0) { const range=document.createRange();range.setStart(node,start);range.setEnd(node,start+word.length);return range.getClientRects().length===1; }
      }
      return false;
    }, path === '/' ? 'desarrollo' : 'development');
    if (!wordFits) failures.push(`${path}: long hero word wraps with fallback font`);
    await page.unroute('**/*.woff2');
  }
  await page.goto(baseURL);
  await page.keyboard.press('Tab');
  if (await page.locator(':focus').getAttribute('href') !== '#main-content') failures.push('skip link is not first keyboard target');
  await page.keyboard.press('Enter');
  if (!await page.locator('#main-content').evaluate(el => el === document.activeElement)) failures.push('skip link does not move focus to main');
  const navLink = page.locator('.site-nav a').first();
  await navLink.hover();
  try {
    await expect.poll(() => navLink.evaluate(el => getComputedStyle(el,'::after').transform)).toBe('matrix(1, 0, 0, 1, 0, 0)');
  } catch { failures.push('navigation: hover underline does not become visible'); }
  if (await navLink.evaluate(el => getComputedStyle(el).textDecorationLine) !== 'none') failures.push('navigation: duplicate underline on hover');
  const card = page.locator('.project-card').first();
  await page.emulateMedia({reducedMotion:'reduce'}); await card.hover();
  if (await card.evaluate(el=>getComputedStyle(el).transform) !== 'none') failures.push('reduced motion: project card still moves');
  if (await card.locator('.project-cta span').evaluate(el=>getComputedStyle(el).transform) !== 'none') failures.push('reduced motion: project arrow still moves');
  if (await navLink.evaluate(el=>getComputedStyle(el,'::after').transitionDuration) !== '0s') failures.push('reduced motion: navigation underline still animates');
  const focus = page.locator('.button').first(); await focus.focus();
  if (await focus.evaluate(el => getComputedStyle(el).outlineStyle) === 'none') failures.push('missing keyboard focus outline');
  await page.emulateMedia({media:'print'});
  if (await page.locator('.site-header').isVisible()) failures.push('print: header should be hidden');
  if (await page.locator('.site-frame').evaluate(el=>getComputedStyle(el).boxShadow) !== 'none') failures.push('print: frame shadow remains');
  if (await page.locator('.project-heading').first().evaluate(el=>getComputedStyle(el).color) !== 'rgb(18, 18, 18)') failures.push('print: project headings need dark text without backgrounds');
  await page.pdf({path:join(output,'home-print.pdf'),format:'A4',printBackground:false});
  // Touch devices should never acquire a hover transform after tapping and releasing.
  const touch = await browser.newContext({hasTouch:true,isMobile:true,viewport:{width:390,height:844}});
  const touchPage = await touch.newPage(); await touchPage.goto(baseURL);
  await touchPage.locator('.button').first().tap();
  try { await expect(touchPage.locator('.button').first()).toHaveCSS('transform', 'none', {timeout:1000}); } catch { failures.push('touch: sticky hover transform after active transition'); }
  await touch.close();
  const cold = await browser.newContext({ viewport: { width:360, height:900 } });
  const coldPage = await cold.newPage();
  await coldPage.addInitScript(() => {
    window.fontLayoutShift = 0;
    new PerformanceObserver(list => { for(const entry of list.getEntries()) if(!entry.hadRecentInput) window.fontLayoutShift += entry.value; }).observe({type:'layout-shift',buffered:true});
  });
  await coldPage.route('**/*.woff2', async route => { await new Promise(resolve=>setTimeout(resolve,500)); await route.continue(); });
  await coldPage.goto(baseURL); await coldPage.evaluate(()=>document.fonts.ready);
  const cls = await coldPage.evaluate(()=>window.fontLayoutShift);
  results.push({label:'Cold mobile font load', layoutShift:cls});
  if(cls>0.1) failures.push(`cold font load: CLS ${cls} exceeds 0.1`);
  await cold.close();
} finally {
  await writeFile(join(output,'report.json'),JSON.stringify({baseURL,results,failures},null,2));
  await browser.close();
}
if (failures.length) { console.error(failures.join('\n')); process.exitCode=1; }
else console.log(`Browser checks passed: ${paths.length} routes, ${widths.length} widths, axe, fallback fonts, keyboard, reduced motion, touch and print. Artifacts: ${output}`);
