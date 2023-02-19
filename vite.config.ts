// eslint-disable-next-line @typescript-eslint/ban-ts-comment
/** @ts-ignore */
import { dependencies } from './package.json'

import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'

const vendors = [
  '@tiptap/core',
  '@tiptap/extension-code-block-lowlight',
  '@tiptap/extension-placeholder',
  '@tiptap/pm',
  '@tiptap/react',
  '@tiptap/starter-kit',
  'highlight.js',
  'lowlight'
]

function renderChunks(deps: Record<string, string>) {
  const chunks = {}

  Object.keys(deps).forEach((key) => {
    if (vendors.includes(key)) {
      chunks[key] = [key]
    }
  })
  return chunks
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': resolve(__dirname, './src') }
  },
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          ...renderChunks(dependencies)
        }
      }
    }
  }
})
