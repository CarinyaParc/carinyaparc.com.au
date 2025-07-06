import { describe, it, expect, beforeAll, afterEach, afterAll } from 'vitest';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

// Since we don't have a direct API service file to import, we'll create a mock service for testing
class ApiService {
  static async fetchPosts() {
    const response = await fetch('/api/posts');
    if (!response.ok) throw new Error('Failed to fetch posts');
    return response.json();
  }

  static async subscribe(email: string) {
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) throw new Error('Failed to subscribe');
    return response.json();
  }
}

// Set up MSW server for mocking API responses
const server = setupServer(
  // Mock successful posts endpoint
  http.get('/api/posts', () => {
    return HttpResponse.json({
      posts: [
        { id: 1, title: 'First Post', content: 'Content of first post' },
        { id: 2, title: 'Second Post', content: 'Content of second post' },
      ],
    });
  }),

  // Mock successful subscribe endpoint
  http.post('/api/subscribe', async ({ request }) => {
    const body = await request.json();
    if (!body.email) {
      return new HttpResponse(JSON.stringify({ error: 'Email is required' }), { status: 400 });
    }

    return HttpResponse.json({
      success: true,
      message: 'Subscription successful',
    });
  }),

  // Mock failed API requests
  http.get('/api/posts/error', () => {
    return new HttpResponse(null, { status: 500 });
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('API Service', () => {
  describe('fetchPosts', () => {
    it('should fetch posts successfully', async () => {
      // Act
      const result = await ApiService.fetchPosts();

      // Assert
      expect(result).toHaveProperty('posts');
      expect(result.posts.length).toBe(2);
      expect(result.posts[0].title).toBe('First Post');
    });

    it('should throw an error when the request fails', async () => {
      // Arrange - Override the handler to return an error
      server.use(
        http.get('/api/posts', () => {
          return new HttpResponse(null, { status: 500 });
        }),
      );

      // Act & Assert
      await expect(ApiService.fetchPosts()).rejects.toThrow('Failed to fetch posts');
    });
  });

  describe('subscribe', () => {
    it('should subscribe successfully with valid email', async () => {
      // Act
      const result = await ApiService.subscribe('test@example.com');

      // Assert
      expect(result).toHaveProperty('success', true);
      expect(result).toHaveProperty('message', 'Subscription successful');
    });

    it('should throw an error when the email is missing', async () => {
      // Act & Assert
      await expect(ApiService.subscribe('')).rejects.toThrow();
    });

    it('should throw an error when the request fails', async () => {
      // Arrange - Override the handler to return an error
      server.use(
        http.post('/api/subscribe', () => {
          return new HttpResponse(null, { status: 500 });
        }),
      );

      // Act & Assert
      await expect(ApiService.subscribe('test@example.com')).rejects.toThrow('Failed to subscribe');
    });
  });
});
