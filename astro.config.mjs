// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import offline from './integrations/offline.mjs';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages publica este proyecto desde la raíz del dominio personalizado.
  site: 'https://cruz.floresjavier.com',
  integrations: [offline({ name: 'Operatividad policial · Curso 3', shortName: 'Curso 3' })],
  vite: {
    plugins: [tailwindcss()]
  }
});
