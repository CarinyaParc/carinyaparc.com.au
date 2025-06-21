import { test, expect } from '@playwright/test';
import { HomePage } from './page-objects/HomePage';

test.describe('Homepage with Page Object Model', () => {
  test('should have the correct title', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.checkTitle();
  });

  test('should show the hero section', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.checkHeroVisible();
  });

  test('should be able to subscribe to newsletter', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.subscribeToNewsletter('test@example.com');
  });
});
