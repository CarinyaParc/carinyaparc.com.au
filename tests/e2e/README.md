# E2E Testing with Playwright

This directory contains end-to-end tests using [Playwright](https://playwright.dev/), a powerful testing framework that enables cross-browser testing.

## Available Tests

- **Homepage**: Tests for homepage functionality, including hero section visibility and newsletter subscription
- **Navigation**: Tests for site navigation and responsive menu behavior
- **Accessibility**: Basic accessibility tests for the site

## Running Tests

Run E2E tests using the following npm scripts:

```bash
# Run all tests across all configured browsers
pnpm test:e2e

# Run tests with UI mode (interactive)
pnpm test:e2e:ui

# Debug tests
pnpm test:e2e:debug

# View test report
pnpm test:e2e:report

# Run tests on specific browsers
pnpm test:e2e:chromium
pnpm test:e2e:firefox
pnpm test:e2e:webkit

# Run tests on mobile configurations
pnpm test:e2e:mobile
```

## Browser Support

The E2E tests run on the following browsers:
- Chromium (Desktop)
- Firefox (Desktop)
- WebKit (Safari) (Desktop)
- Mobile Chrome (Pixel 5)
- Mobile Safari (iPhone 12)

## CI Integration

Tests are automatically run in GitHub Actions for each pull request and push to main branches. The workflow is configured in `.github/workflows/e2e-tests.yml`.

## Adding New Tests

To add new tests:

1. Create a new file named `feature-name.spec.ts` in this directory
2. Import the Playwright test utilities:
   ```typescript
   import { test, expect } from '@playwright/test';
   ```
3. Write your tests using the Playwright API
4. Run your tests locally to validate them before pushing

## Best Practices

1. Keep tests independent and avoid dependencies between tests
2. Use page objects or fixtures for commonly used page interactions
3. Test across multiple browsers to ensure compatibility
4. Test responsive design with different viewport sizes
5. Include accessibility checks
6. Mock external dependencies when appropriate

## Configuration

The Playwright configuration is in `playwright.config.ts` in the project root. It includes:
- Browser configurations
- Viewport sizes
- Reporter settings
- Screenshot and trace options

For more details, refer to the [official Playwright documentation](https://playwright.dev/docs/intro). 