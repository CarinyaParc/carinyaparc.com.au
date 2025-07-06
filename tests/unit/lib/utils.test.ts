import { describe, it, expect } from 'vitest';
import { cn, formatDate, truncateText } from '../../../site/src/lib/utils';

describe('cn', () => {
  it('should combine class names correctly', () => {
    // Test with simple string classes
    expect(cn('class1', 'class2')).toBe('class1 class2');

    // Test with conditional classes
    expect(cn('base', true && 'visible', false && 'hidden')).toBe('base visible');

    // Test with class objects
    expect(cn('base', { visible: true, hidden: false })).toBe('base visible');

    // Test with array of classes
    expect(cn('base', ['extra', 'classes'])).toBe('base extra classes');
  });

  it('should merge tailwind classes correctly', () => {
    // Test class merging
    expect(cn('px-2 py-1', 'px-4')).toBe('py-1 px-4');

    // Test with conditional Tailwind classes
    expect(cn('text-red-500', true && 'text-blue-500')).toBe('text-blue-500');
  });
});

describe('formatDate', () => {
  it('should format dates correctly for Australian locale', () => {
    // Test with various date formats
    expect(formatDate('2025-05-20T10:00:00Z')).toMatch(/20 May 2025/);
    expect(formatDate('2024-01-01')).toMatch(/1 January 2024/);

    // Ensure correct format with different date inputs
    const result = formatDate('2023-12-25');
    expect(result).toContain('25');
    expect(result).toContain('December');
    expect(result).toContain('2023');
  });
});

describe('truncateText', () => {
  it('should truncate text exceeding max length', () => {
    const longText =
      'This is a very long text that should be truncated because it exceeds the maximum length set for the test.';

    // Test with default max length (150)
    expect(truncateText(longText)).toBe(longText);

    // Test with custom max length
    expect(truncateText(longText, 20)).toBe('This is a very long...');

    // Test with exact length
    expect(truncateText('Exactly twenty chars', 20)).toBe('Exactly twenty chars');

    // Test with shorter than max length
    expect(truncateText('Short text', 20)).toBe('Short text');
  });

  it('should not truncate text within max length', () => {
    const shortText = 'Short text';
    expect(truncateText(shortText, 20)).toBe(shortText);
  });
});
