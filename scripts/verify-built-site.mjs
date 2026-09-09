import { readFile, stat } from "node:fs/promises";
import { join } from "node:path";

const pages = [
  "index.html",
  "en/index.html",
  "sobre-mi/index.html",
  "en/about/index.html",
  "servicios/index.html",
  "en/services/index.html",
  "proyectos/plataforma-clinica/index.html",
  "en/projects/clinical-platform/index.html",
  "proyectos/impostor/index.html",
  "en/projects/impostor/index.html",
  "proyectos/fira-estudio/index.html",
  "en/projects/fira-estudio/index.html",
];

const failures = [];

for (const page of pages) {
  const path = join("dist", page);
  let html;
  try {
    html = await readFile(path, "utf8");
  } catch {
    failures.push(`${page}: archivo faltante`);
    continue;
  }

  const h1Count = (html.match(/<h1(?:\s|>)/g) || []).length;
  if (h1Count !== 1) failures.push(`${page}: ${h1Count} títulos h1`);
  if (!/<link rel="canonical" href="https:\/\/ramirocosa\.is-a\.dev\//.test(html)) {
    failures.push(`${page}: canonical ausente o inválido`);
  }
  if ((html.match(/hreflang=/g) || []).length !== 3) {
    failures.push(`${page}: alternates de idioma incompletos`);
  }
  if (!/og:image:width" content="1200"/.test(html) || !/og:image:height" content="630"/.test(html)) {
    failures.push(`${page}: imagen social incompleta`);
  }
  if (/[ÃÂ]|â€/.test(html)) failures.push(`${page}: posible texto mal codificado`);

  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(match[1]);
    } catch {
      failures.push(`${page}: JSON-LD inválido`);
    }
  }
}

for (const image of ["portfolio-es.png", "portfolio-en.png"]) {
  try {
    const info = await stat(join("dist", "og", image));
    if (info.size === 0) failures.push(`${image}: imagen vacía`);
  } catch {
    failures.push(`${image}: imagen social faltante`);
  }
}

if (failures.length) {
  console.error(`Validación fallida:\n- ${failures.join("\n- ")}`);
  process.exit(1);
}

console.log(`Validación completa: ${pages.length} rutas, metadatos, i18n y recursos sociales.`);
