import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tolosauniversity.com',
  integrations: [
    sitemap({
      serialize(item) {
        // El generador de títulos es la página estrella a nivel SEO.
        if (new URL(item.url).pathname === '/generador/') {
          return { ...item, priority: 1.0, changefreq: 'monthly' };
        }
        return item;
      },
    }),
  ],
});
