import { setupServer } from 'msw/node';
import { HttpHandler } from 'msw';
import { handlers } from './handlers';

// Setup MSW server with default handlers
export const server = setupServer(...handlers);

// Export a function to reset handlers (useful for tests that need to override handlers)
export const resetHandlers = () => server.resetHandlers();

// Export a function to add custom handlers for specific tests
export const addHandlers = (...customHandlers: HttpHandler[]) => {
  server.use(...customHandlers);
};
