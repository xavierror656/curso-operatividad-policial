// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Publicado en GitHub Pages: https://xavierror656.github.io/curso-operatividad-policial/
  site: 'https://xavierror656.github.io',
  base: '/curso-operatividad-policial',
  vite: {
    plugins: [tailwindcss()]
  }
});
