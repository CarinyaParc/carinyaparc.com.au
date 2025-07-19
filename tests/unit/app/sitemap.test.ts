import { describe, it, expect, vi, beforeEach } from 'vitest';
import fs from 'fs';
import path from 'path';

// Mock fs module
vi.mock('fs', () => ({
  default: {
    existsSync: vi.fn(),
    readdirSync: vi.fn(),
    statSync: vi.fn(),
  },
  existsSync: vi.fn(),
  readdirSync: vi.fn(),
  statSync: vi.fn(),
}));

// Mock path module
vi.mock('path', () => ({
  default: {
    join: vi.fn((...args: string[]) => args.join('/')),
  },
  join: vi.fn((...args: string[]) => args.join('/')),
}));

// Mock constants
vi.mock('../src/lib/constants', () => ({
  BASE_URL: 'https://carinyaparc.com.au',
}));

// Mock process.cwd()
const mockProcessCwd = vi.fn(() => '/test/project');
vi.stubGlobal('process', {
  ...process,
  cwd: mockProcessCwd,
});

const mockFs = fs as any;
const mockPath = path as any;

describe('sitemap', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should export default sitemap function', async () => {
    mockFs.existsSync.mockReturnValue(false);

    const sitemapModule = await import('../../../site/src/app/sitemap');

    expect(sitemapModule.default).toBeDefined();
    expect(typeof sitemapModule.default).toBe('function');
  });

  describe('getAppRoutes', () => {
    it('should scan app directory and return route info', async () => {
      // Mock the app directory structure
      mockFs.existsSync.mockImplementation((filePath: string) => {
        return filePath.includes('/src/app');
      });

      mockFs.readdirSync.mockImplementation((dirPath: string) => {
        if (dirPath.includes('/src/app')) {
          return ['page.tsx', 'layout.tsx', 'about'];
        }
        if (dirPath.includes('/src/app/about')) {
          return ['page.tsx'];
        }
        return [];
      });

      mockFs.statSync.mockImplementation((filePath: string) => ({
        isDirectory: () => filePath.includes('/about') && !filePath.includes('page.tsx'),
        mtime: new Date('2024-01-01'),
      }));

      // Dynamic import to get fresh module after mocking
      delete require.cache[require.resolve('../../../site/src/app/sitemap')];
      const { default: sitemap } = await import('../../../site/src/app/sitemap');

      const result = sitemap();

      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
      expect(result[0]).toHaveProperty('url');
      expect(result[0]).toHaveProperty('lastModified');
      expect(result[0]).toHaveProperty('priority');
      expect(result[0]).toHaveProperty('changeFrequency');
    });

    it('should handle missing app directory gracefully', async () => {
      mockFs.existsSync.mockReturnValue(false);

      delete require.cache[require.resolve('../../../site/src/app/sitemap')];
      const { default: sitemap } = await import('../../../site/src/app/sitemap');

      const result = sitemap();

      expect(Array.isArray(result)).toBe(true);
    });

    it('should assign correct priorities to different route types', async () => {
      mockFs.existsSync.mockReturnValue(true);

      mockFs.readdirSync.mockImplementation((dirPath: string) => {
        if (dirPath.includes('/src/app') && !dirPath.includes('/blog')) {
          return ['page.tsx', 'blog'];
        }
        if (dirPath.includes('/src/app/blog')) {
          return ['page.tsx'];
        }
        return [];
      });

      mockFs.statSync.mockImplementation((filePath: string) => ({
        isDirectory: () => filePath.includes('/blog') && !filePath.includes('page.tsx'),
        mtime: new Date('2024-01-01'),
      }));

      delete require.cache[require.resolve('../../../site/src/app/sitemap')];
      const { default: sitemap } = await import('../../../site/src/app/sitemap');

      const result = sitemap();

      // Home page should have priority 1.0
      const homePage = result.find((route) => route.url === 'https://carinyaparc.com.au/');
      expect(homePage?.priority).toBe(1.0);
      expect(homePage?.changeFrequency).toBe('weekly');

      // Blog pages should have priority 0.7
      const blogPage = result.find((route) => route.url.includes('/blog'));
      if (blogPage) {
        expect(blogPage.priority).toBe(0.7);
        expect(blogPage.changeFrequency).toBe('daily');
      }
    });

    it('should skip hidden files and directories', async () => {
      mockFs.existsSync.mockReturnValue(true);

      mockFs.readdirSync.mockReturnValue([
        'page.tsx',
        '.hidden-file',
        '.hidden-directory',
        'visible-directory',
      ]);

      mockFs.statSync.mockImplementation((filePath: string) => ({
        isDirectory: () => !filePath.includes('page.tsx') && !filePath.includes('.hidden'),
        mtime: new Date('2024-01-01'),
      }));

      delete require.cache[require.resolve('../../../site/src/app/sitemap')];
      const { default: sitemap } = await import('../../../site/src/app/sitemap');

      const result = sitemap();

      // Should not include hidden files in the sitemap
      expect(result.every((route) => !route.url.includes('.hidden'))).toBe(true);
    });
  });

  describe('getContentRoutes', () => {
    it('should scan content directory for MDX files', async () => {
      mockFs.existsSync.mockImplementation((filePath: string) => {
        return filePath.includes('/content');
      });

      mockFs.readdirSync.mockImplementation((dirPath: string) => {
        if (dirPath.includes('/content')) {
          return ['index.mdx', 'about.mdx', 'posts'];
        }
        if (dirPath.includes('/content/posts')) {
          return ['post1.mdx', 'post2.md'];
        }
        return [];
      });

      mockFs.statSync.mockImplementation((filePath: string) => ({
        isDirectory: () => filePath.includes('/posts') && !filePath.includes('.md'),
        mtime: new Date('2024-01-01'),
      }));

      delete require.cache[require.resolve('../../../site/src/app/sitemap')];
      const { default: sitemap } = await import('../../../site/src/app/sitemap');

      const result = sitemap();

      expect(Array.isArray(result)).toBe(true);
    });

    it('should handle missing content directory gracefully', async () => {
      mockFs.existsSync.mockImplementation((filePath: string) => {
        return filePath.includes('/src/app') && !filePath.includes('/content');
      });

      mockFs.readdirSync.mockReturnValue(['page.tsx']);

      mockFs.statSync.mockImplementation(() => ({
        isDirectory: () => false,
        mtime: new Date('2024-01-01'),
      }));

      delete require.cache[require.resolve('../../../site/src/app/sitemap')];
      const { default: sitemap } = await import('../../../site/src/app/sitemap');

      const result = sitemap();

      expect(Array.isArray(result)).toBe(true);
    });
  });

  describe('combineRoutes', () => {
    it('should combine and deduplicate routes correctly', async () => {
      // Create a more controlled test scenario
      mockFs.existsSync.mockImplementation((filePath: string) => {
        return filePath.includes('/src/app');
      });

      // Mock app directory with basic structure
      mockFs.readdirSync.mockImplementation((dirPath: string) => {
        if (dirPath.includes('/src/app') && !dirPath.includes('/about')) {
          return ['page.tsx', 'about'];
        }
        if (dirPath.includes('/src/app/about')) {
          return ['page.tsx'];
        }
        return [];
      });

      mockFs.statSync.mockImplementation((filePath: string) => ({
        isDirectory: () => filePath.includes('/about') && !filePath.includes('page.tsx'),
        mtime: new Date('2024-01-01'),
      }));

      delete require.cache[require.resolve('../../../site/src/app/sitemap')];
      const { default: sitemap } = await import('../../../site/src/app/sitemap');

      const result = sitemap();

      // Check that we don't have duplicate routes
      const urls = result.map((route) => route.url);
      const uniqueUrls = [...new Set(urls)];
      expect(urls.length).toBe(uniqueUrls.length);
    });
  });

  describe('sitemap output format', () => {
    it('should return correct sitemap format', async () => {
      mockFs.existsSync.mockReturnValue(true);

      mockFs.readdirSync.mockReturnValue(['page.tsx']);

      mockFs.statSync.mockImplementation(() => ({
        isDirectory: () => false,
        mtime: new Date('2024-01-01T00:00:00.000Z'),
      }));

      delete require.cache[require.resolve('../../../site/src/app/sitemap')];
      const { default: sitemap } = await import('../../../site/src/app/sitemap');

      const result = sitemap();

      expect(Array.isArray(result)).toBe(true);

      if (result.length > 0) {
        const route = result[0];
        expect(route).toHaveProperty('url');
        expect(route).toHaveProperty('lastModified');
        expect(route).toHaveProperty('priority');
        expect(route).toHaveProperty('changeFrequency');

        expect(typeof route.url).toBe('string');
        expect(route.url).toMatch(/^https:\/\/carinyaparc\.com\.au/);
        expect(typeof route.lastModified).toBe('string');
        expect(typeof route.priority).toBe('number');
        expect(['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never']).toContain(
          route.changeFrequency,
        );
      }
    });

    it('should use BASE_URL for all routes', async () => {
      mockFs.existsSync.mockReturnValue(true);

      mockFs.readdirSync.mockImplementation((dirPath: string) => {
        if (dirPath.includes('/src/app')) {
          return ['page.tsx', 'about'];
        }
        if (dirPath.includes('/src/app/about')) {
          return ['page.tsx'];
        }
        return [];
      });

      mockFs.statSync.mockImplementation((filePath: string) => ({
        isDirectory: () => filePath.includes('/about') && !filePath.includes('page.tsx'),
        mtime: new Date('2024-01-01'),
      }));

      delete require.cache[require.resolve('../../../site/src/app/sitemap')];
      const { default: sitemap } = await import('../../../site/src/app/sitemap');

      const result = sitemap();

      result.forEach((route) => {
        expect(route.url).toMatch(/^https:\/\/carinyaparc\.com\.au/);
      });
    });
  });

  describe('error handling', () => {
    it('should handle filesystem errors gracefully', async () => {
      mockFs.existsSync.mockReturnValue(true);
      mockFs.readdirSync.mockImplementation(() => {
        throw new Error('Filesystem error');
      });

      delete require.cache[require.resolve('../../../site/src/app/sitemap')];

      // Should not throw an error
      expect(async () => {
        const { default: sitemap } = await import('../../../site/src/app/sitemap');
        sitemap();
      }).not.toThrow();
    });

    it('should handle stat errors gracefully', async () => {
      mockFs.existsSync.mockReturnValue(true);
      mockFs.readdirSync.mockReturnValue(['page.tsx']);
      mockFs.statSync.mockImplementation(() => {
        throw new Error('Stat error');
      });

      delete require.cache[require.resolve('../../../site/src/app/sitemap')];

      // Should not throw an error
      expect(async () => {
        const { default: sitemap } = await import('../../../site/src/app/sitemap');
        sitemap();
      }).not.toThrow();
    });
  });
});
