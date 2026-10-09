import { defineConfig } from "astro/config";
import { satteri } from "@astrojs/markdown-satteri";
import decorativeHeadings from "./scripts/decorative-headings.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://ramirocosa.is-a.dev",
  markdown: { processor: satteri({ hastPlugins: [decorativeHeadings] }) },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
