import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly heroSection: Locator;
  readonly newsletterSection: Locator;
  readonly emailInput: Locator;
  readonly subscribeButton: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.heroSection = page.locator('section').filter({ hasText: /Welcome to Carinya Parc/ });
    this.newsletterSection = page.locator('section').filter({ has: page.getByText(/subscribe/i) });
    this.emailInput = this.newsletterSection.getByRole('textbox', { name: /email/i });
    this.subscribeButton = this.newsletterSection.getByRole('button', { name: /subscribe/i });
  }
  
  async goto() {
    await this.page.goto('/');
  }
  
  async checkTitle() {
    await expect(this.page).toHaveTitle(/Carinya Parc/);
  }
  
  async checkHeroVisible() {
    await expect(this.heroSection).toBeVisible();
  }
  
  async subscribeToNewsletter(email: string) {
    await this.emailInput.fill(email);
    
    // Mock the API response
    await this.page.route('/api/subscribe', async route => {
      await route.fulfill({
        status: 200,
        body: JSON.stringify({ success: true }),
      });
    });
    
    await this.subscribeButton.click();
    
    // Check for success message
    await expect(this.page.getByText(/thank you/i)).toBeVisible({ timeout: 3000 });
  }
} 