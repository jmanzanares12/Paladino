import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite'; 
import icon from 'astro-icon';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'static',
  adapter: vercel({
    imageService: true, 
  }),
  integrations: [
    icon(), 
  ],
  vite: {
    plugins: [tailwind()],
  },
});