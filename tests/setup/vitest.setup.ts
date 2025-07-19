import '@testing-library/jest-dom';
import { beforeAll, afterEach, afterAll, vi } from 'vitest';
import { setupServer } from 'msw/node';
import { handlers } from '../mocks/handlers';

// Mock Next.js modules
vi.mock('next/headers', () => ({
  headers: vi.fn(),
  cookies: vi.fn(),
}));

vi.mock('@sentry/nextjs', () => ({
  captureException: vi.fn(),
  withSentry: (handler: any) => handler,
  init: vi.fn(),
}));

// Mock browser APIs not available in jsdom
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock IntersectionObserver
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  unobserve: vi.fn(),
}));

// Setup MSW server for API mocking
export const server = setupServer(...handlers);

// Start MSW server before all tests
let serverStarted = false;
beforeAll(() => {
  if (!serverStarted) {
    try {
      server.listen({ onUnhandledRequest: 'warn' });
      serverStarted = true;
    } catch (error) {
      // Server already started, ignore
    }
  }
});

// Clean up after each test case
afterEach(() => {
  document.body.innerHTML = '';
  server.resetHandlers();
});

// Clean up after all tests are done
afterAll(() => {
  if (serverStarted) {
    try {
      server.close();
      serverStarted = false;
    } catch (error) {
      // Server already closed, ignore
    }
  }
});
