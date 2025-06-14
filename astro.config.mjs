import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: 'https://buy7or.github.io/',
  integrations: [
    tailwind(),
    sitemap(),
    robotsTxt({
      policy: [{ userAgent: "*", allow: "/" }],
      sitemap: "https://buy7or.github.io/sitemap-index.xml", // lo anuncia en robots.txt
    }),
  ],
});
