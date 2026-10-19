// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import offline from './integrations/offline.mjs';

// https://astro.build/config
export default defineConfig({
  // Publicado en GitHub Pages: https://xavierror656.github.io/curso-operatividad-policial/
  site: 'https://xavierror656.github.io',
  base: '/curso-operatividad-policial',
  integrations: [offline({ name: 'Operatividad policial · Curso 3', shortName: 'Curso 3' })],
  vite: {
    plugins: [tailwindcss()]
  }
});
