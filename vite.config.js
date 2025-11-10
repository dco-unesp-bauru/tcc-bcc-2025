import { fileURLToPath, URL } from 'node:url'
import { writeFileSync } from 'node:fs'
import { join } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// Plugin para criar .nojekyll no build
function createNojekyllPlugin() {
  return {
    name: 'create-nojekyll',
    closeBundle() {
      const nojekyllPath = join(process.cwd(), 'dist', '.nojekyll')
      writeFileSync(nojekyllPath, '')
      console.log('✓ Arquivo .nojekyll criado')
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    createNojekyllPlugin(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  base: '/tcc-bcc-2025/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Otimizações para deploy
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue']
        }
      }
    }
  },
})
