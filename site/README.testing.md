# Testing Strategy for CarinyaParc

This document outlines the simplified testing approach for the CarinyaParc project.

## Setup

We use the following tools for testing:

- Vitest: Fast test runner with React support
- React Testing Library: For testing React components
- JSDOM: For simulating a browser environment

## Test Types

- **Unit Tests**: Test individual functions and components
- **API Tests**: Test API routes and services
- **Component Tests**: Test React components in isolation

## Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode (during development)
pnpm test:watch

# Generate test coverage report
pnpm test:coverage
```

## Test File Naming Convention

Place test files next to the implementation files with a `.test.ts` or `.test.tsx` extension:

```
src/
  components/
    Button.tsx
    Button.test.tsx
  lib/
    utils.ts
    utils.test.ts
```

## Writing Tests

### Basic Component Test

```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('renders button with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeTruthy();
  });
});
```

### Testing Hooks

```tsx
import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';

describe('useCounter Hook', () => {
  it('increments count', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });
});
```

### Testing API Routes

```tsx
import { describe, it, expect, vi } from 'vitest';
import { NextRequest, NextResponse } from 'next/server';
import { GET } from './route';

describe('API Route', () => {
  it('returns expected data', async () => {
    const request = new NextRequest('http://localhost:3000/api/data');
    const response = await GET(request);
    const data = await response.json();
    expect(data).toHaveProperty('success');
  });
});
```

## Mocking Dependencies

Use Vitest's mocking capabilities:

```tsx
import { vi } from 'vitest';

// Mock a module
vi.mock('./database', () => ({
  getUser: vi.fn().mockResolvedValue({ id: 1, name: 'Test User' }),
}));

// Mock browser APIs
Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: vi.fn(() => null),
    setItem: vi.fn(() => null),
  },
});
```

## Best Practices

1. Keep tests simple and focused
2. Test behavior, not implementation details
3. Use realistic test data
4. Clean up after each test
5. Start with simple tests and add complexity as needed
