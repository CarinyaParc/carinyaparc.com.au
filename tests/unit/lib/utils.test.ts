import { describe, it, expect } from 'vitest';
import { cn } from '../../../src/lib/utils';

describe('Utility Functions', () => {
  describe('cn (classname utility)', () => {
    it('combines multiple class names', () => {
      const result = cn('class1', 'class2', 'class3');
      expect(result).toBe('class1 class2 class3');
    });

    it('handles conditional classes', () => {
      const isActive = true;
      const result = cn('base-class', isActive ? 'active' : 'inactive');
      expect(result).toBe('base-class active');
    });

    it('ignores falsy values', () => {
      const result = cn('class1', false && 'class2', null, undefined, 0, '', 'class3');
      expect(result).toBe('class1 class3');
    });

    it('handles objects with conditional keys', () => {
      const result = cn('base-class', {
        'is-active': true,
        'is-disabled': false,
        'is-loading': true,
      });
      expect(result).toContain('base-class');
      expect(result).toContain('is-active');
      expect(result).not.toContain('is-disabled');
      expect(result).toContain('is-loading');
    });

    it('handles arrays of class names', () => {
      const result = cn('base', ['class1', 'class2']);
      expect(result).toBe('base class1 class2');
    });

    it('handles nested arrays and objects', () => {
      const result = cn('base', ['class1', { class2: true, class3: false }], { class4: true });
      expect(result).toContain('base');
      expect(result).toContain('class1');
      expect(result).toContain('class2');
      expect(result).not.toContain('class3');
      expect(result).toContain('class4');
    });

    it('deduplicates class names', () => {
      const result = cn('base', 'base', 'unique');
      expect(result).toBe('base unique');
    });

    it('handles tailwind class merging', () => {
      const result = cn('p-4 text-red-500', 'p-6 text-blue-500');
      // The exact behavior depends on tailwind-merge implementation
      // but generally the last conflicting class should win
      expect(result).toContain('p-6'); // The last 'p-' value should win
      expect(result).toContain('text-blue-500'); // The last 'text-' value should win
      expect(result).not.toContain('p-4'); // This should be overridden
      expect(result).not.toContain('text-red-500'); // This should be overridden
    });
  });

  // Add tests for other utility functions as needed
});
