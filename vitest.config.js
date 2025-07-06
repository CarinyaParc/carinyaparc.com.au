import { defineConfig } from 'vitest/config';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

// Root-level vitest configuration
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup/vitest.setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['**/node_modules/**', '**/tests/**', '**/*.d.ts'],
    },
    include: ['./tests/**/*.{test,spec}.{ts,tsx}'],
    deps: {
      inline: [/\/testing-library\/react/, /\/testing-library\/user-event/],
    },
  },
  resolve: {
    alias: {
      '@site': resolve(__dirname, './site/src'),
    },
  },
});
