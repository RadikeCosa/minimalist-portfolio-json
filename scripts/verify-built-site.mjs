import { readFile, stat } from "node:fs/promises";
import { join } from "node:path";

const pages = [
  "index.html",
  "en/index.html",
  "sobre-mi/index.html",
  "en/about/index.html",
  "proyectos/plataforma-clinica/index.html",
  "en/projects/clinical-platform/index.html",
  "proyectos/landing-kinesiologia/index.html",
  "en/projects/home-rehabilitation-landing/index.html",
  "proyectos/juegos-familiares/index.html",
  "en/projects/family-games/index.html",
  "proyectos/fira-estudio/index.html",
  "en/projects/fira-estudio/index.html",
];

const failures = [];

const sitemap = await readFile(join("dist", "sitemap.xml"), "utf8");
const sitemapUrls = [...sitemap.matchAll(/<loc>/g)].length;
if (sitemapUrls !== pages.length) {
  failures.push(`sitemap.xml: se esperaban ${pages.length} rutas, hay ${sitemapUrls}`);
}
if (/\/(?:en\/)?(?:servicios|services)\//i.test(sitemap)) {
  failures.push("sitemap.xml: contiene una ruta de Servicios retirada");
}
for (const route of ["/proyectos/juegos-familiares/", "/en/projects/family-games/"]) {
  if (!sitemap.includes(route)) failures.push(`sitemap.xml: falta la ruta ${route}`);
}
if (/\/(?:en\/projects|proyectos)\/impostor\//.test(sitemap)) {
  failures.push("sitemap.xml: contiene una ruta anterior de Juegos Familiares");
}

const redirects = JSON.parse(await readFile("vercel.json", "utf8")).redirects || [];
for (const expected of [
  { source: "/servicios", destination: "/", statusCode: 307 },
  { source: "/servicios/", destination: "/", statusCode: 307 },
  { source: "/servicios/:path*", destination: "/", statusCode: 307 },
  { source: "/en/services", destination: "/en/", statusCode: 307 },
  { source: "/en/services/", destination: "/en/", statusCode: 307 },
  { source: "/en/services/:path*", destination: "/en/", statusCode: 307 },
  { source: "/proyectos/impostor", destination: "/proyectos/juegos-familiares/", statusCode: 301 },
  { source: "/proyectos/impostor/", destination: "/proyectos/juegos-familiares/", statusCode: 301 },
  { source: "/en/projects/impostor", destination: "/en/projects/family-games/", statusCode: 301 },
  { source: "/en/projects/impostor/", destination: "/en/projects/family-games/", statusCode: 301 },
]) {
  if (!redirects.some((redirect) => Object.entries(expected).every(([key, value]) => redirect[key] === value))) {
    failures.push(`vercel.json: falta la redirección ${expected.source} → ${expected.destination} (${expected.statusCode})`);
  }
}

for (const [file, expectedProjects] of [
  ["cv.json", ["Aplicación clínica", "Landing para", "Juegos Familiares", "Fira Estudio"]],
  ["cv-en.json", ["Clinical App", "Home Rehabilitation", "Juegos Familiares", "Fira Estudio"]],
]) {
  const data = JSON.parse(await readFile(file, "utf8"));
  if (data.projects?.length !== expectedProjects.length) {
    failures.push(`${file}: se esperaban cuatro casos en el CV`);
  }
  for (const [index, expected] of expectedProjects.entries()) {
    if (!data.projects?.[index]?.name?.startsWith(expected)) {
      failures.push(`${file}: el caso ${index + 1} debe ser ${expected}`);
    }
  }
  for (const project of data.projects || []) {
    if (project.image) {
      try {
        await stat(join("dist", project.image.replace(/^\//, "")));
      } catch {
        failures.push(`${file}: falta la imagen del proyecto ${project.name}`);
      }
    }
  }
}

const casePairs = [
  ["proyectos/plataforma-clinica/index.html", "en/projects/clinical-platform/index.html"],
  ["proyectos/landing-kinesiologia/index.html", "en/projects/home-rehabilitation-landing/index.html"],
  ["proyectos/juegos-familiares/index.html", "en/projects/family-games/index.html"],
  ["proyectos/fira-estudio/index.html", "en/projects/fira-estudio/index.html"],
];
for (const pair of casePairs) {
  const rendered = await Promise.all(pair.map((page) => readFile(join("dist", page), "utf8")));
  for (const [index, html] of rendered.entries()) {
    const labels = index === 0 ? ["Problema", "Aporte", "Decisión clave"] : ["Problem", "Contribution", "Key decision"];
    if (!html.includes("case-summary") || !html.includes("case-status")) {
      failures.push(`${pair[index]}: falta el resumen del caso o su estado`);
    }
    for (const label of labels) {
      if (!new RegExp(`<dt\\b[^>]*>${label}</dt>`).test(html)) failures.push(`${pair[index]}: falta el campo ${label}`);
    }
  }
  const fieldCounts = rendered.map((html) => (html.match(/<dt>/g) || []).length);
  if (fieldCounts[0] !== fieldCounts[1]) failures.push(`${pair.join(" / ")}: los campos del resumen no tienen paridad`);
}

for (const [page, title] of [
  ["proyectos/juegos-familiares/index.html", "Juegos Familiares"],
  ["en/projects/family-games/index.html", "Family Games"],
]) {
  const html = await readFile(join("dist", page), "utf8");
  if (!html.includes(`<title>${title} | Ramiro Nicolás Cosa</title>`)) failures.push(`${page}: título de caso incorrecto`);
  if (!html.includes(`property="og:title" content="${title} | Ramiro Nicolás Cosa"`)) failures.push(`${page}: título Open Graph incorrecto`);
  if (!html.includes(`name="twitter:title" content="${title} | Ramiro Nicolás Cosa"`)) failures.push(`${page}: título Twitter incorrecto`);
  if (!html.includes("Tutti Frutti")) failures.push(`${page}: falta Tutti Frutti`);
  if (html.includes("Juegos Familiares — Impostor")) failures.push(`${page}: conserva el título anterior`);
  if (!html.includes(`"name":"${title} | Ramiro Nicolás Cosa"`)) failures.push(`${page}: nombre JSON-LD incorrecto`);
}

for (const page of ["index.html", "en/index.html"]) {
  const html = await readFile(join("dist", page), "utf8");
  const order = ["name-family-games", "name-fira-estudio", "name-clinical-app"].map(id => html.indexOf(`id="${id}"`));
  if (order.some(i => i < 0) || order.some((i,n) => n > 0 && i <= order[n-1])) failures.push(`${page}: orden de destacados incorrecto`);
  for (const id of ["top", "projects", "approach", "about", "skills", "contact"]) {
    if (!html.includes(`id="${id}"`)) failures.push(`${page}: falta ancla ${id}`);
  }
  if (!html.includes("secondary-project")) failures.push(`${page}: falta proyecto complementario`);
}
for (const [page, intro] of [["sobre-mi/index.html", "Desarrollo productos web desde 2020."], ["en/about/index.html", "I have been building web products since 2020."]]) {
  const html = await readFile(join("dist", page), "utf8");
  if (!html.includes(intro)) failures.push(`${page}: falta presentación personal`);
  for (const id of ["approach", "experience", "languages"]) if (!html.includes(`id="${id}"`)) failures.push(`${page}: falta sección ${id}`);
  if (!html.includes("Full Stack Open") || !html.includes("2004") || !html.includes("2024")) failures.push(`${page}: recorrido incompleto`);
}
const homeChecks = [
  ["index.html", "Desarrollo web. Del problema al producto.", "Ver proyectos"],
  ["en/index.html", "Web development. From problem to product.", "View projects"],
];
for (const [page, ...expected] of homeChecks) {
  const html = await readFile(join("dist", page), "utf8");
  for (const text of expected) {
    if (!html.replace(/<br\b[^>]*>/g, " ").replace(/<[^>]*>/g, "").replace(/\s+/g, " ").includes(text)) failures.push(`${page}: falta texto principal "${text}"`);
  }
}

for (const page of pages) {
  const path = join("dist", page);
  let html;
  try {
    html = await readFile(path, "utf8");
  } catch {
    failures.push(`${page}: archivo faltante`);
    continue;
  }

  if (!html.includes('class="site-header no-print"') || !html.includes('class="site-footer no-print"')) failures.push(`${page}: falta navegación compartida`);
  if (html.includes('id="theme-toggle"') || html.includes('localStorage.getItem("theme")')) failures.push(`${page}: conserva lógica de tema oscuro`);
  if (!/<link rel="preload"[^>]+as="font"/.test(html)) failures.push(`${page}: falta precarga de fuente`);
  const h1Count = (html.match(/<h1(?:\s|>)/g) || []).length;
  if (h1Count !== 1) failures.push(`${page}: ${h1Count} títulos h1`);
  if (!/<link rel="canonical" href="https:\/\/ramirocosa\.is-a\.dev\//.test(html)) {
    failures.push(`${page}: canonical ausente o inválido`);
  }
  if ((html.match(/<link\b[^>]*hreflang=/g) || []).length !== 3) {
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
