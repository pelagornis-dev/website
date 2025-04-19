// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import node from '@astrojs/node';
import react from '@astrojs/react';
import compressor from "astro-compressor";
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';

import sentry from "@sentry/astro";

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://pelagornis.com',
  output: "server",
  adapter: node({
    mode: 'standalone',
  }),
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Inter",
        cssVariable: "--font-inter"
      }
    ]
  },
  integrations: [
    react(), 
    mdx(),
    compressor(),
    sitemap(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    sentry({
      dsn: "https://de2620d3871799df7be38ca4cd0cdf2b@o4509176995184640.ingest.us.sentry.io/4509177129861120",
      tracesSampleRate: 0,
      replaysSessionSampleRate: 0,
      replaysOnErrorSampleRate: 0,
      sourceMapsUploadOptions: {
        project: "website",
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    })
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ko"],
    routing: {
      prefixDefaultLocale: false
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});