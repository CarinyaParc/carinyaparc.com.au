import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should have the correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Carinya Parc/);
  });

  test('should show the hero section', async ({ page }) => {
    await page.goto('/');
    const heroSection = page.locator('section').filter({ hasText: /Welcome to Carinya Parc/ });
    await expect(heroSection).toBeVisible();
  });

  test('should navigate to About page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /about/i }).first().click();
    await expect(page).toHaveURL(/about/);
  });

  test('should be able to subscribe to newsletter', async ({ page }) => {
    await page.goto('/');
    const newsletterSection = page.locator('section').filter({ has: page.getByText(/subscribe/i) });
    await expect(newsletterSection).toBeVisible();

    const emailInput = newsletterSection.getByRole('textbox', { name: /email/i });
    await emailInput.fill('test@example.com');

    const subscribeButton = newsletterSection.getByRole('button', { name: /subscribe/i });

    // Mock the API response
    await page.route('/api/subscribe', async (route) => {
      await route.fulfill({
        status: 200,
        body: JSON.stringify({ success: true }),
      });
    });

    await subscribeButton.click();

    // Check for success message
    await expect(page.getByText(/thank you/i)).toBeVisible({ timeout: 3000 });
  });
});
