# E2E and Cross-Browser Testing Documentation

## Overview

This document covers the end-to-end (E2E) and cross-browser testing setup for the Carinya Parc website using [Playwright](https://playwright.dev/), a modern testing framework that enables testing on all modern rendering engines including Chromium, WebKit, and Firefox.

## Testing Infrastructure

### Tools Used

- **Playwright**: Main testing framework for E2E testing
- **GitHub Actions**: CI/CD platform for running tests automatically
- **Page Object Model**: Design pattern for improving test maintenance and reducing code duplication

### Browser Coverage

The testing setup includes the following browsers:

1. **Desktop browsers**:

   - Chromium (Chrome/Edge)
   - Firefox
   - WebKit (Safari)

2. **Mobile browsers**:
   - Mobile Chrome (Pixel 5 viewport)
   - Mobile Safari (iPhone 12 viewport)

## Running Tests Locally

Tests can be run locally with the following commands:

```bash
# Install dependencies (if not already installed)
pnpm install

# Install browsers
npx playwright install

# Run all tests
pnpm test:e2e

# Run with UI mode
pnpm test:e2e:ui

# Run on specific browsers
pnpm test:e2e:chromium
pnpm test:e2e:firefox
pnpm test:e2e:webkit
pnpm test:e2e:mobile
```

## CI Testing

Tests run automatically in GitHub Actions when:

- Code is pushed to the main or next branch
- A pull request is created that modifies source code or tests

The CI configuration is defined in `.github/workflows/e2e-tests.yml`.

## Test Structure

### Directory Structure

```
tests/
  ├── e2e/                   # E2E tests directory
  │   ├── page-objects/      # Page object models
  │   │   └── HomePage.ts    # Home page object model
  │   ├── homepage.spec.ts   # Homepage tests
  │   ├── navigation.spec.ts # Navigation tests
  │   ├── accessibility.spec.ts # Accessibility tests
  │   └── homepage-pom.spec.ts # Homepage tests using Page Object Model
  └── README.md              # E2E testing documentation
```

### Test Categories

1. **Functional Tests**: Verify that features work as expected
2. **Navigation Tests**: Verify that navigation works across the site
3. **Responsive Design Tests**: Verify that the site works on different viewport sizes
4. **Accessibility Tests**: Basic checks for accessibility compliance
5. **Cross-Browser Tests**: Verify consistent behavior across different browsers

## Page Object Model

The Page Object Model (POM) pattern is used to create a separation between test code and page-specific code. Example:

```typescript
// Example of Page Object for HomePage
import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly heroSection: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heroSection = page.locator('section').filter({ hasText: /Welcome to Carinya Parc/ });
  }

  async goto() {
    await this.page.goto('/');
  }

  async checkHeroVisible() {
    await expect(this.heroSection).toBeVisible();
  }
}
```

## Best Practices

1. **Use Page Objects**: Create page objects for complex pages to improve maintainability
2. **Test Cross-Browser**: Don't rely on testing in just one browser
3. **Test Responsiveness**: Test on both desktop and mobile viewports
4. **Isolation**: Ensure tests are isolated and don't depend on each other's state
5. **Mock External Dependencies**: Use Playwright's request interception to mock API calls
6. **Visual Testing**: Consider adding visual regression tests for critical components
7. **Accessibility**: Include basic accessibility checks in test suites

## Future Enhancements

- **Visual Regression Testing**: Add visual comparison capabilities
- **Performance Testing**: Add performance metrics collection
- **API Testing**: Add dedicated API testing
- **Test Data Management**: Improve test data handling
- **Test Reports**: Enhance test reporting

## Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Page Object Model](https://playwright.dev/docs/pom)
- [Playwright Test Configuration](https://playwright.dev/docs/test-configuration)
