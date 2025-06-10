import { defineConfig } from 'astro/config';
import tailwind from "@tailwindcss/vite";

import sitemap from '@astrojs/sitemap';

import compressor from 'astro-compressor';

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: "https://alexcreates.fr",
  integrations: [
    sitemap(),
    compressor(),
  ],
  vite: {
    plugins: [
      tailwind()
    ]
  }
});
