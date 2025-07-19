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
      exclude: [
        '**/node_modules/**',
        '**/tests/**',
        '**/*.d.ts',
        '**/.next/**',
        '**/coverage/**',
        '**/*.config.*',
        '**/site/.next/**',
      ],
    },
    include: ['./tests/**/*.{test,spec}.{ts,tsx}'],
    exclude: ['./tests/security/**', '**/node_modules/**'],
    server: {
      deps: {
        external: ['@sentry/nextjs'],
      },
    },
  },
  resolve: {
    alias: {
      '@site': resolve(__dirname, './site/src'),
      '@': resolve(__dirname, './site'),
      '@/src': resolve(__dirname, './site/src'),
    },
  },
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
    jsxInject: `import React from 'react'`,
  },
});
