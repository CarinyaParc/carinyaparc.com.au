import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import { BASE_URL } from '../lib/constants';

type RouteInfo = {
  route: string;
  lastModified: string;
  priority?: number;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
};

/**
 * Scans the app directory to discover routes
 */
function getAppRoutes(): RouteInfo[] {
  const routes: RouteInfo[] = [];
  const appDirectory = path.join(process.cwd(), 'src/app');

  // Helper function to recursively scan directories
  function scanDirectory(currentPath: string, routePath: string = '') {
    const items = fs.readdirSync(currentPath);

    for (const item of items) {
      // Skip special files and directories
      if (
        item.startsWith('_') ||
        item.startsWith('.') ||
        item === 'api' ||
        item === 'sitemap.ts' ||
        item === 'favicon.ico'
      )
        continue;

      const itemPath = path.join(currentPath, item);
      const stats = fs.statSync(itemPath);

      if (stats.isDirectory()) {
        // Handle route groups (directories with parentheses)
        if (item.startsWith('(') && item.endsWith(')')) {
          // For route groups, don't add to the path but scan inside
          scanDirectory(itemPath, routePath);
        } else {
          // Regular directory - add to path and scan
          const newPath = routePath === '' ? item : path.join(routePath, item);
          scanDirectory(itemPath, newPath);
        }
      } else if (item === 'page.tsx' || item === 'page.js' || item === 'page.mdx') {
        // Found a page - add its route
        const isHomePage = routePath === '';

        routes.push({
          route: isHomePage ? '/' : `/${routePath}`,
          lastModified: new Date(stats.mtime).toISOString(),
          priority: isHomePage ? 1.0 : routePath.includes('blog') ? 0.7 : 0.8,
          changeFrequency: isHomePage ? 'weekly' : routePath.includes('blog') ? 'daily' : 'monthly',
        });
      }
    }
  }

  scanDirectory(appDirectory);
  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = getAppRoutes();

  // Convert to the expected MetadataRoute.Sitemap format
  return routes.map(({ route, lastModified, priority, changeFrequency }) => ({
    url: `${BASE_URL}${route}`,
    lastModified,
    priority,
    changeFrequency,
  }));
}
