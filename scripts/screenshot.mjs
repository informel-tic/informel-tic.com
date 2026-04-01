import { chromium } from 'playwright';

// Smoothly scroll the whole page to trigger IntersectionObservers
async function scrollToBottom(page) {
  await page.evaluate(async () => {
    const delay = (ms) => new Promise(r => setTimeout(r, ms));
    const step = 400;
    const totalHeight = document.body.scrollHeight;
    for (let y = 0; y < totalHeight; y += step) {
      window.scrollTo(0, y);
      await delay(120);
    }
    window.scrollTo(0, 0);
    await delay(300);
  });
}

const PAGES = [
  { name: 'home-full', url: '/', fullPage: true },
  { name: 'home-hero', url: '/', scrollY: 0 },
  { name: 'home-stats', url: '/', scrollY: 800 },
  { name: 'home-cta-bottom', url: '/', scrollY: 99999 },
  { name: 'pros', url: '/pros', fullPage: true },
  { name: 'particuliers', url: '/particuliers', fullPage: true },
  { name: 'home-mobile', url: '/', fullPage: true, mobile: true },
];

const browser = await chromium.launch();

// Desktop
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

for (const p of PAGES.filter(p => !p.mobile)) {
  await page.goto(`http://localhost:5175${p.url}`, { waitUntil: 'networkidle' });
  // Dismiss cookie banner if present
  try { await page.click('text=Accepter', { timeout: 1000 }); } catch {}
  await scrollToBottom(page);
  if (p.scrollY) await page.evaluate((y) => window.scrollTo(0, Math.min(y, document.body.scrollHeight)), p.scrollY);
  await page.waitForTimeout(800);
  await page.screenshot({ path: `scripts/screenshots/${p.name}.png`, fullPage: !!p.fullPage });
  console.log(`✓ ${p.name}`);
}
await ctx.close();

// Mobile
const mobileCtx = await browser.newContext({ viewport: { width: 390, height: 844 } });
const mobilePage = await mobileCtx.newPage();
for (const p of PAGES.filter(p => p.mobile)) {
  await mobilePage.goto(`http://localhost:5175${p.url}`, { waitUntil: 'networkidle' });
  try { await mobilePage.click('text=Accepter', { timeout: 1000 }); } catch {}
  await scrollToBottom(mobilePage);
  await mobilePage.waitForTimeout(600);
  await mobilePage.screenshot({ path: `scripts/screenshots/${p.name}.png`, fullPage: !!p.fullPage });
  console.log(`✓ ${p.name} (mobile)`);
}
await mobileCtx.close();

await browser.close();
console.log('Done');
