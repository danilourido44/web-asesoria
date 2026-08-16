// Utilidad rápida de QA visual: hace una captura de página completa (y opcionalmente
// de un selector concreto) contra un servidor ya en marcha.
//
// Uso:
//   node scripts/screenshot.mjs <url> <archivo-salida.png> [selector] [espera-ms]
//
// Ejemplo:
//   node scripts/screenshot.mjs http://localhost:3000 shots/home.png
//   node scripts/screenshot.mjs http://localhost:3000 shots/servicios.png "#servicios"
//   node scripts/screenshot.mjs http://localhost:3000 shots/hero.png "#inicio" 2500

import { chromium } from "playwright";

const [, , url, outPath, selector, waitMs] = process.argv;

if (!url || !outPath) {
  console.error("Uso: node scripts/screenshot.mjs <url> <salida.png> [selector]");
  process.exit(1);
}

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

const errors = [];
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(msg.text());
});
page.on("pageerror", (err) => errors.push(String(err)));

await page.goto(url, { waitUntil: "networkidle" });

if (waitMs) {
  await page.waitForTimeout(Number(waitMs));
}

if (selector) {
  await page.locator(selector).screenshot({ path: outPath });
} else {
  await page.screenshot({ path: outPath, fullPage: true });
}

await browser.close();

console.log(`Captura guardada en ${outPath}`);
if (errors.length) {
  console.log("Errores de consola detectados:");
  for (const e of errors) console.log(" -", e);
}
