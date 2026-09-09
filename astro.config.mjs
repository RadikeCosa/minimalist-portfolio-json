import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://ramirocosa.is-a.dev",
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
