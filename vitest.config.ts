import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./tests/setup/vitest.setup.tsx'],
    include: ['./tests/**/*.{test,spec}.{js,ts,jsx,tsx}'],
    exclude: ['**/node_modules/**', '**/dist/**', './tests/e2e/**'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './coverage',
      exclude: [
        '**/node_modules/**', 
        '**/dist/**', 
        '**/tests/**', 
        '**/*.d.ts',
        '**/*.config.{js,ts,mjs}',
        '**/mocks/**'
      ],
      include: ['src/**/*.{js,jsx,ts,tsx}'],
      all: true,
      thresholds: {
        statements: 10,
        branches: 50,
        functions: 50,
        lines: 10,
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
