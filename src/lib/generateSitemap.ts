import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import { BASE_URL, APP_DIR } from './constants';

type RouteInfo = {
  route: string;
  lastModified: string;
  priority?: number;
};

/**
 * Scans the app directory to discover routes
 */
function getAppRoutes(): RouteInfo[] {
  const routes: RouteInfo[] = [];

  // Helper function to recursively scan directories
  function scanDirectory(currentPath: string, routePath: string = '') {
    const items = fs.readdirSync(currentPath);

    for (const item of items) {
      // Skip special files and directories
      if (item.startsWith('_') || item.startsWith('.') || item === 'api' || item === 'favicon.ico')
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
          const newPath = path.join(routePath, item);
          scanDirectory(itemPath, newPath);
        }
      } else if (item === 'page.tsx' || item === 'page.js') {
        // Found a page - add its route
        routes.push({
          route: routePath === '' ? '/' : `/${routePath}`,
          lastModified: new Date(stats.mtime).toISOString(),
          priority: routePath === '' ? 1.0 : 0.8,
        });
      }
    }
  }

  scanDirectory(APP_DIR);
  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = getAppRoutes();

  return routes.map(({ route, lastModified, priority }) => ({
    url: `${BASE_URL}${route}`,
    lastModified,
    priority,
  }));
}
