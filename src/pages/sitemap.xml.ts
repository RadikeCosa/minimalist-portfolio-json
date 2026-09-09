import type { APIRoute } from "astro";

const routes = [
  "/",
  "/en/",
  "/proyectos/plataforma-clinica/",
  "/en/projects/clinical-platform/",
  "/proyectos/impostor/",
  "/en/projects/impostor/",
  "/proyectos/fira-estudio/",
  "/en/projects/fira-estudio/",
];

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    throw new Error("The Astro site URL is required to generate the sitemap.");
  }

  const urls = routes
    .map((route) => `  <url><loc>${new URL(route, site).toString()}</loc></url>`)
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
      },
    },
  );
};
