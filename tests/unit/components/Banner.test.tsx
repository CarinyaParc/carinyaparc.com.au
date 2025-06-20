import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Banner from '../../../src/components/Banner';

describe('Banner Component', () => {
  it('renders the banner', () => {
    render(<Banner />);
    
    // Check if the banner container exists - use container query instead of getByRole
    const bannerElement = screen.getByTestId('banner');
    expect(bannerElement).toBeInTheDocument();
    
    // Check for banner styles
    expect(bannerElement).toHaveClass('fixed');
    expect(bannerElement).toHaveClass('bg-eucalyptus-600');
  });

  it('has the correct positioning and z-index', () => {
    render(<Banner />);
    
    const bannerElement = screen.getByTestId('banner');
    expect(bannerElement).toHaveClass('top-0');
    expect(bannerElement).toHaveClass('left-0');
    expect(bannerElement).toHaveClass('right-0');
    expect(bannerElement).toHaveClass('z-50');
  });

  it('contains a paragraph element for content', () => {
    const { container } = render(<Banner />);
    
    // Use a more precise selector
    const paragraph = container.querySelector('p.text-center.w-full');
    expect(paragraph).toBeInTheDocument();
    expect(paragraph!.tagName.toLowerCase()).toBe('p');
    expect(paragraph).toHaveClass('text-center');
    expect(paragraph).toHaveClass('w-full');
  });
});
