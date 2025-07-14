import { describe, it, expect } from 'vitest';
import type { SessionPayload } from '../../../site/src/lib/definitions';

describe('definitions', () => {
  it('should be able to import SessionPayload type', () => {
    // Test that we can create an object matching the SessionPayload interface
    const payload: SessionPayload = {
      id: '123',
      email: 'test@example.com',
      name: 'Test User',
      role: 'user',
      iat: Date.now(),
      exp: Date.now() + 3600000,
    };

    expect(payload.id).toBe('123');
    expect(payload.email).toBe('test@example.com');
  });

  it('should allow partial SessionPayload', () => {
    // Test that optional fields are indeed optional
    const minimalPayload: SessionPayload = {
      id: '456',
    };

    expect(minimalPayload.id).toBe('456');
    expect(minimalPayload.email).toBeUndefined();
    expect(minimalPayload.name).toBeUndefined();
  });
});
