import fs from 'fs';
import path from 'path';

export function getCriticalCSS(): string {
  try {
    const criticalCSSPath = path.join(process.cwd(), 'src', 'styles', 'critical.css');
    return fs.readFileSync(criticalCSSPath, 'utf8');
  } catch (error) {
    console.error('Failed to load critical CSS:', error);
    return '';
  }
}
