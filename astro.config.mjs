import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import sitemap from '@astrojs/sitemap';

import compressor from 'astro-compressor';

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: "https://alexcreates.fr",
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
    compressor(),
  ]
});
