import { defineConfig } from 'astro/config'

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pavel.yarmak.me',
  output: 'static',
  base: '/',

  markdown: {
    draft: false,
  },

  vite: {
    optimizeDeps: {
      include: ['astro-leaflet > leaflet'],
    }
  },

  integrations: [sitemap()],
})