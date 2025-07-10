import '@testing-library/jest-dom';
import { beforeAll, afterEach, afterAll, vi } from 'vitest';
import { setupServer } from 'msw/node';
import { handlers } from '../mocks/handlers';

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
global.IntersectionObserver = class IntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Setup MSW server for API mocking
export const server = setupServer(...handlers);

// Start MSW server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }));

// Clean up after each test case
afterEach(() => {
  document.body.innerHTML = '';
  server.resetHandlers();
});

// Clean up after all tests are done
afterAll(() => server.close());
