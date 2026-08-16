// Graba el panel animado del hero (#hero-panel) tal cual corre en el
// navegador y lo deja como .webm en shots/video-raw/. La conversión a
// GIF/MP4 final se hace después con ffmpeg (recorte a la caja del panel).
//
// Uso: node scripts/record-hero-panel.mjs <url> <segundos>

import { chromium } from "playwright";
import { mkdirSync, writeFileSync, readdirSync, renameSync } from "fs";

const [, , url, secondsArg] = process.argv;
const seconds = Number(secondsArg || 9);
const outDir = "shots/video-raw";
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  recordVideo: { dir: outDir, size: { width: 1440, height: 900 } },
});
const page = await context.newPage();

// "networkidle" nunca llega en next dev (el socket de HMR sigue activo),
// lo que alargaba la grabación ~20s de más. "load" + esperar el propio
// panel es suficiente y mucho más rápido.
await page.goto(url, { waitUntil: "load" });
const panel = page.locator("#hero-panel");
await panel.waitFor({ state: "visible" });
// El panel se anima sin parar (animate-float), así que nunca lo Playwright
// considera "estable" para scrollIntoViewIfNeeded — hacemos el scroll a
// mano en el DOM en su lugar.
await panel.evaluate((el) =>
  el.scrollIntoView({ block: "center", inline: "center" }),
);
await page.waitForTimeout(300);
const box = await panel.boundingBox();
writeFileSync(`${outDir}/panel-box.json`, JSON.stringify(box));

await page.waitForTimeout(seconds * 1000);

await context.close();
await browser.close();

// Playwright nombra el archivo con un hash; lo renombramos a algo fijo.
const files = readdirSync(outDir).filter((f) => f.endsWith(".webm"));
const latest = files[files.length - 1];
renameSync(`${outDir}/${latest}`, `${outDir}/raw.webm`);

console.log("Grabación guardada:", `${outDir}/raw.webm`);
console.log("Caja del panel:", JSON.stringify(box));
