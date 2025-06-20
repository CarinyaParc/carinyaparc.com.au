# Carinya Parc Website - Test Suite

This directory contains all the tests for the Carinya Parc website.

## Test Structure

```
tests/
├── unit/                           # Isolated, fast-running tests
├── integration/                    # Tests exercising multiple modules/components
├── e2e/                            # End-to-end browser flow tests
├── smoke/                          # Lightweight sanity checks
├── fixtures/                       # Static test data (JSON, HTML, snapshots)
├── mocks/                          # Custom HTTP or module mocks
├── helpers/                        # Reusable test utilities & custom matchers
└── setup/                          # Global setup & teardown code
```

## Running Tests

```bash
# Run unit tests only
npm run test:unit

# Run unit tests with coverage
npm run test:unit:coverage

# Run integration tests
npm run test:integration

# Run all tests
npm run test

# Run all tests with coverage
npm run test:coverage
```

## Writing Tests

### Unit Tests

Unit tests should be fast, isolated, and test a single module or component. They should not rely on external services or databases.

```typescript
// Example unit test
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MyComponent from '@/components/MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('My Component')).toBeInTheDocument();
  });
});
```

### Integration Tests

Integration tests should exercise multiple modules together. They may use mocked external services but should use real internal code.

```typescript
// Example integration test
import { describe, it, expect } from 'vitest';
import { renderWithProviders } from '../helpers/renderWithProviders';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsletterSection from '@/components/NewsletterSection';

describe('Newsletter Flow', () => {
  it('allows user to subscribe and shows success message', async () => {
    renderWithProviders(<NewsletterSection />);

    await userEvent.type(screen.getByLabelText(/email/i), 'test@example.com');
    await userEvent.click(screen.getByRole('button', { name: /subscribe/i }));

    await waitFor(() => {
      expect(screen.getByText(/thank you for subscribing/i)).toBeInTheDocument();
    });
  });
});
```

## Best Practices

1. Keep tests deterministic by resetting state between tests
2. Use the Arrange-Act-Assert pattern
3. Test component behavior, not implementation details
4. Mock external dependencies, not internal code
5. Write clear test descriptions
6. Keep each test focused on a single behavior
7. Use fixtures for test data
8. Use descriptive assertions
