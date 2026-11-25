import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://astro.build/config
export default defineConfig({
  site: 'https://codapixel.com',
  // Pages are served as /page/ (directory format). Keep URLs, canonicals and the
  // sitemap on the trailing-slash version so nothing points at a redirect.
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/privacy/'),
    }),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: 'static',
  server: {
    host: true,
    port: 8080,
  },
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      cssCodeSplit: true,
      cssMinify: true,
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks(id) {
            // Split vendor chunks for better caching
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom')) {
                return 'react-vendor';
              }
              if (id.includes('framer-motion')) {
                return 'framer-motion';
              }
              if (id.includes('@radix-ui')) {
                return 'ui-vendor';
              }
              return 'vendor';
            }
          },
        },
      },
    },
    css: {
      devSourcemap: false,
      postcss: {
        plugins: [],
      },
    },
  },
});

