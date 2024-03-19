import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'hybrid',
  adapter: vercel(),
  integrations: [react(), tailwind({
    applyBaseStyles: false
  })],
  server: { port: 1234, host: true}
});