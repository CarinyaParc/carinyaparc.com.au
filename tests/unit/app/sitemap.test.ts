import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import sitemap from '../../../src/app/sitemap';

describe('Sitemap Generation', () => {
  // Mock Date to ensure consistent test results
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2024-01-01'));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should generate the correct sitemap entries', () => {
    const sitemapResult = sitemap();

    // Check if sitemap is an array
    expect(Array.isArray(sitemapResult)).toBe(true);

    // Check if it has the expected number of entries
    expect(sitemapResult.length).toBe(4);

    // Check for specific URLs
    const urls = sitemapResult.map((entry) => entry.url);
    expect(urls).toContain('https://carinyaparc.com.au');
    expect(urls).toContain('https://carinyaparc.com.au/about');
    expect(urls).toContain('https://carinyaparc.com.au/blog');
    expect(urls).toContain('https://carinyaparc.com.au/regeneration');
  });

  it('should have the correct structure for each sitemap entry', () => {
    const sitemapResult = sitemap();

    sitemapResult.forEach((entry) => {
      expect(entry).toHaveProperty('url');
      expect(entry).toHaveProperty('lastModified');
      expect(entry).toHaveProperty('changeFrequency');
      expect(entry).toHaveProperty('priority');

      // Check types
      expect(typeof entry.url).toBe('string');
      expect(entry.lastModified instanceof Date).toBe(true);
      expect(['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never']).toContain(
        entry.changeFrequency,
      );
      expect(typeof entry.priority).toBe('number');
      expect(entry.priority).toBeGreaterThanOrEqual(0);
      expect(entry.priority).toBeLessThanOrEqual(1);
    });
  });

  it('should prioritize the homepage', () => {
    const sitemapResult = sitemap();

    // Find the homepage entry
    const homepageEntry = sitemapResult.find((entry) => entry.url === 'https://carinyaparc.com.au');

    // Check if homepage has the highest priority
    expect(homepageEntry).toBeDefined();
    expect(homepageEntry?.priority).toBe(1);

    // Check if other pages have lower priority
    const otherEntries = sitemapResult.filter(
      (entry) => entry.url !== 'https://carinyaparc.com.au',
    );
    otherEntries.forEach((entry) => {
      expect(entry.priority).toBeLessThan(1);
    });
  });
});
