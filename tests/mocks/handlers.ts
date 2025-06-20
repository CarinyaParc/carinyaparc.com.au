import { http, HttpResponse } from 'msw';

// Define the default API request handlers for testing
export const handlers = [
  // Mock the newsletter subscription endpoint
  http.post('/api/subscribe', () => {
    // Simulate successful subscription
    return HttpResponse.json({ success: true }, { status: 200 });
  }),

  // You can add more API handlers here as needed
];

// Sample error handlers that can be imported and used in specific tests
export const errorHandlers = {
  // Simulates a server error during subscription
  subscriptionServerError: http.post('/api/subscribe', () => {
    return HttpResponse.json({ error: 'Internal server error' }, { status: 500 });
  }),

  // Simulates validation error during subscription
  subscriptionValidationError: http.post('/api/subscribe', () => {
    return HttpResponse.json(
      {
        error: 'Validation failed',
        errors: { email: ['Invalid email format'] },
      },
      { status: 422 }
    );
  }),

  // Simulates network error during subscription
  subscriptionNetworkError: http.post('/api/subscribe', () => {
    return HttpResponse.error();
  }),
};
