import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { POST } from '../../../../../src/app/api/subscribe/route';
import { NextResponse } from 'next/server';

// Create a clean fetch mock for each test
const createFetchMock = () => {
  return vi.fn();
};

// Mock NextResponse
vi.mock('next/server', () => ({
  NextResponse: {
    json: vi.fn((data, options) => ({ data, options })),
  },
}));

describe('Newsletter Subscription API Route', () => {
  // Setup fetch mock before each test
  beforeEach(() => {
    // Create a new mock for each test
    global.fetch = createFetchMock();

    // Mock environment variables
    vi.stubEnv('MAILERLITE_API_KEY', 'test-api-key');
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.resetAllMocks();
  });

  it('returns success response when subscription succeeds', async () => {
    // Mock successful API response
    (global.fetch as any).mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ success: true }),
    });

    // Create mock request
    const request = new Request('https://example.com/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'test@example.com' }),
    });

    // Call the API route
    await POST(request);

    // Verify fetch was called with correct parameters
    expect(global.fetch).toHaveBeenCalledWith(
      'https://connect.mailerlite.com/api/subscribers',
      expect.objectContaining({
        method: 'POST',
        headers: expect.objectContaining({
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Bearer test-api-key',
        }),
        body: JSON.stringify({ email: 'test@example.com' }),
      }),
    );

    // Verify the response
    expect(NextResponse.json).toHaveBeenCalledWith({ success: true });
  });

  it('returns error response when API key is missing', async () => {
    // Remove API key from environment
    vi.stubEnv('MAILERLITE_API_KEY', '');

    // Create mock request
    const request = new Request('https://example.com/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'test@example.com' }),
    });

    // Call the API route
    await POST(request);

    // Verify error response
    expect(NextResponse.json).toHaveBeenCalledWith(
      { error: expect.stringContaining('not configured') },
      { status: 500 },
    );

    // Verify fetch was not called
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it('returns error response when MailerLite API returns an error', async () => {
    // Mock failed API response
    (global.fetch as any).mockResolvedValue({
      ok: false,
      status: 422,
      json: async () => ({
        message: 'Validation failed',
        errors: { email: ['Invalid email format'] },
      }),
    });

    // Create mock request
    const request = new Request('https://example.com/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'invalid@example' }),
    });

    // Call the API route
    await POST(request);

    // Verify error response
    expect(NextResponse.json).toHaveBeenCalledWith(
      { error: expect.stringContaining('Validation failed') },
      { status: 422 },
    );
  });

  it('handles network errors when calling MailerLite API', async () => {
    // Mock network error
    (global.fetch as any).mockRejectedValue(new Error('Network error'));

    // Create mock request
    const request = new Request('https://example.com/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'test@example.com' }),
    });

    // Call the API route
    await POST(request);

    // Verify error response
    expect(NextResponse.json).toHaveBeenCalledWith(
      { error: expect.stringContaining('Network error') },
      { status: 500 },
    );
  });

  it('handles invalid JSON in request body', async () => {
    // Create mock request with invalid JSON
    const request = new Request('https://example.com/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // @ts-ignore - Intentionally passing a non-JSON string
      body: 'invalid-json',
    });

    // Call the API route and make sure it handles the error
    await POST(request);

    // Verify error response
    expect(NextResponse.json).toHaveBeenCalledWith(
      { error: expect.stringContaining('Failed to process request') },
      { status: 400 },
    );
  });
});
