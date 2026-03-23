import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Injects <link rel="preload"> for the hero banner image into built HTML
function heroImagePreload() {
  return {
    name: 'hero-image-preload',
    enforce: 'post',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        if (!ctx.bundle) return html
        for (const key of Object.keys(ctx.bundle)) {
          if (key.includes('WhatsApp') && key.endsWith('.webp')) {
            return html.replace(
              '</head>',
              `  <link rel="preload" as="image" type="image/webp" href="/${key}" fetchpriority="high">\n  </head>`
            )
          }
        }
        return html
      },
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), heroImagePreload()],
  build: {
    target: 'es2020',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 2,
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-dom')) {
            return 'react-dom'
          }
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-router')) {
            return 'vendor'
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'icons'
          }
        },
      },
    },
    cssCodeSplit: true,
    chunkSizeWarningLimit: 600,
  },
})
