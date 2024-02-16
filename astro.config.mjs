import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
   site: 'https://profwilliamarte.github.io',
   base: '/astro2',
   build: {
      assets: 'astro' /// muy importante
   }
});