import { describe, it, expect } from 'vitest';
import { navigation } from '../../../src/app/navigation';

describe('Navigation Configuration', () => {
  it('should contain the correct navigation items', () => {
    // Check if navigation is an array
    expect(Array.isArray(navigation)).toBe(true);
    
    // Check if it has the expected number of items
    expect(navigation.length).toBe(4);
    
    // Check for specific navigation items
    expect(navigation).toContainEqual({ label: 'Home', href: '/', visible: false });
    expect(navigation).toContainEqual({ label: 'Our Farm', href: '/about', visible: true });
    expect(navigation).toContainEqual({ label: 'Regeneration Project', href: '/regeneration', visible: true });
    expect(navigation).toContainEqual({ label: 'Life on the Land', href: '/blog', visible: false });
  });

  it('should have the correct structure for each navigation item', () => {
    // Each navigation item should have label, href, and visible properties
    navigation.forEach(item => {
      expect(item).toHaveProperty('label');
      expect(item).toHaveProperty('href');
      expect(item).toHaveProperty('visible');
      
      // Check types
      expect(typeof item.label).toBe('string');
      expect(typeof item.href).toBe('string');
      expect(typeof item.visible).toBe('boolean');
    });
  });

  it('should have visible items for main navigation', () => {
    // At least one item should be visible for navigation
    const visibleItems = navigation.filter(item => item.visible === true);
    expect(visibleItems.length).toBeGreaterThan(0);
  });
}); 