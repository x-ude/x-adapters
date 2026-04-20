import { defineConfig } from 'vite';

export default defineConfig({
  server: { host: '127.0.0.1', port: 5173 },
  optimizeDeps: {
    // Workspace packages ship dist/ — let Vite resolve the built output directly.
    exclude: ['@x-ude/sdk', '@x-ude/adapter-stackblitz-editor'],
  },
});
