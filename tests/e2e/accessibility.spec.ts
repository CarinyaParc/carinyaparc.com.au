import { test, expect } from '@playwright/test';

test.describe('Accessibility', () => {
  test('homepage should not have accessibility violations', async ({ page }) => {
    await page.goto('/');
    
    // Check for alt text on images
    const images = await page.locator('img').all();
    for (const img of images) {
      const alt = await img.getAttribute('alt');
      expect(alt, 'Image should have alt text').not.toBeNull();
    }
    
    // Check for proper heading structure
    const h1Count = await page.locator('h1').count();
    expect(h1Count, 'Page should have exactly one h1 element').toBe(1);
    
    // Check for form labeling in newsletter section
    const newsletterSection = page.locator('section').filter({ has: page.getByText(/subscribe/i) });
    const emailInput = newsletterSection.getByRole('textbox', { name: /email/i });
    expect(await emailInput.getAttribute('aria-label') || await emailInput.getAttribute('id'), 
      'Email input should be properly labeled').not.toBeNull();
  });

  test('focus should be visible when tabbing', async ({ page }) => {
    await page.goto('/');
    
    // Focus the first focusable element
    await page.keyboard.press('Tab');
    
    // Get the active element and check if it has a visible focus style
    const hasFocusStyle = await page.evaluate(() => {
      const activeElement = document.activeElement;
      if (!activeElement) return false;
      
      const styles = window.getComputedStyle(activeElement);
      const outlineStyle = styles.getPropertyValue('outline-style');
      const outlineWidth = styles.getPropertyValue('outline-width');
      const boxShadow = styles.getPropertyValue('box-shadow');
      
      return (
        (outlineStyle !== 'none' && parseInt(outlineWidth, 10) > 0) ||
        boxShadow !== 'none'
      );
    });
    
    expect(hasFocusStyle, 'Focused element should have visible focus styles').toBe(true);
  });

  test('color contrast should be sufficient', async ({ page }) => {
    // This is a basic check - ideally you would use a proper accessibility audit tool
    await page.goto('/');
    
    // Check contrast for main navigation links
    const navigationLinks = page.getByRole('navigation').getByRole('link');
    
    for (const link of await navigationLinks.all()) {
      const hasValidContrast = await page.evaluate(element => {
        const styles = window.getComputedStyle(element);
        const bgColor = styles.backgroundColor;
        const color = styles.color;
        
        // This is a simplified check - in a real test you'd calculate actual contrast ratio
        return bgColor !== color;
      }, link);
      
      expect(hasValidContrast, 'Navigation links should have sufficient contrast').toBe(true);
    }
  });
}); 