import '@testing-library/jest-dom';
import { beforeAll, afterEach, afterAll, vi } from 'vitest';
import { setupServer } from 'msw/node';

// Mock browser APIs not available in jsdom
Object.defineProperty(window, 'matchMedia', {
  value: vi.fn(() => {
    return {
      matches: false,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    };
  }),
});

// Setup MSW server for API mocking
export const server = setupServer();

// Start MSW server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }));

// Clean up after each test case
afterEach(() => {
  document.body.innerHTML = '';
  server.resetHandlers();
});

// Clean up after all tests are done
afterAll(() => server.close());
