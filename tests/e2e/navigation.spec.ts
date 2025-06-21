import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate through all main pages', async ({ page }) => {
    await page.goto('/');
    
    // Navigate to About
    await page.getByRole('link', { name: /about/i }).first().click();
    await expect(page).toHaveURL(/about/);
    
    // Navigate to Blog
    await page.getByRole('link', { name: /blog/i }).first().click();
    await expect(page).toHaveURL(/blog/);
    
    // Navigate to Regeneration
    await page.getByRole('link', { name: /regeneration/i }).first().click();
    await expect(page).toHaveURL(/regeneration/);
    
    // Navigate back to Home
    await page.getByRole('link', { name: /home/i }).first().click();
    await expect(page).toHaveURL(/\/$/); // Root URL
  });

  test('should show mobile menu on small screens', async ({ page }) => {
    // Set viewport to mobile size
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Check if hamburger menu is visible
    const menuButton = page.getByRole('button', { name: /menu/i });
    await expect(menuButton).toBeVisible();
    
    // Open mobile menu
    await menuButton.click();
    
    // Check if navigation links are visible in the opened menu
    await expect(page.getByRole('navigation').getByRole('link', { name: /about/i })).toBeVisible();
    await expect(page.getByRole('navigation').getByRole('link', { name: /blog/i })).toBeVisible();
  });

  test('should show desktop menu on large screens', async ({ page }) => {
    // Set viewport to desktop size
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/');
    
    // Check if navigation links are visible without clicking any hamburger icon
    await expect(page.getByRole('navigation').getByRole('link', { name: /about/i })).toBeVisible();
    await expect(page.getByRole('navigation').getByRole('link', { name: /blog/i })).toBeVisible();
    
    // Hamburger should not be visible on desktop
    const menuButton = page.getByRole('button', { name: /menu/i });
    await expect(menuButton).not.toBeVisible();
  });
}); 