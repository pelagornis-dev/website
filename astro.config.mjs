// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Enable React to support React JSX components.
  integrations: [
    react(), 
    mdx(),
    sitemap(),
    partytown({
      config: { debug: false }
    })
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});