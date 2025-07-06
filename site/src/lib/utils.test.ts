import { describe, it, expect } from 'vitest';
import { cn, formatDate, truncateText } from './utils';

describe('cn', () => {
  it('combines class names correctly', () => {
    expect(cn('a', 'b')).toBe('a b');
  });
});

describe('formatDate', () => {
  it('formats dates correctly', () => {
    const date = formatDate('2023-01-01');
    expect(date).toContain('January');
    expect(date).toContain('2023');
  });
});

describe('truncateText', () => {
  it('truncates text when too long', () => {
    expect(truncateText('This is a long text', 10)).toBe('This is a...');
  });

  it('does not truncate short text', () => {
    expect(truncateText('Short', 10)).toBe('Short');
  });
});
