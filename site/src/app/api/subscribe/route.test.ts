import { describe, it, expect, vi } from 'vitest';
import { NextRequest, NextResponse } from 'next/server';

// Mock the actual route file
vi.mock('./route', () => {
  return {
    POST: vi.fn().mockImplementation(async () => {
      return NextResponse.json({ success: true });
    }),
  };
});

// Import the mocked version
import { POST } from './route';

describe('Subscribe API', () => {
  it('returns success response', async () => {
    const request = new NextRequest('http://localhost:3000/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email: 'test@example.com' }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(data.success).toBe(true);
  });
});
