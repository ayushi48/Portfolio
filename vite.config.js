// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// // import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // optional: cleaner imports like '@/components/Chat'
    },
  },
  build: {
    chunkSizeWarningLimit: 1000, // Optional: increases warning limit to 1MB (not a fix, just avoids noise)
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Separate heavy node_modules libs
          if (id.includes('node_modules')) {
            if (id.includes('three')) return 'three'
            if (id.includes('react')) return 'vendor'
          }
        },
      },
    },
  },
})
