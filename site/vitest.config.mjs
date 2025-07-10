import { defineConfig } from 'vitest/config';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['../tests/setup/vitest.setup.ts'],
    include: [
      '../tests/unit/**/*.test.{ts,tsx}',
      '../tests/integration/**/*.test.{ts,tsx}',
      '../tests/smoke/**/*.test.{ts,tsx}',
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'tests/setup/', 'tests/mocks/'],
      thresholds: {
        statements: 90,
        branches: 90,
        functions: 90,
        lines: 90,
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      'test-utils': resolve(__dirname, '../tests/helpers/renderWithProviders.tsx'),
    },
  },
});
