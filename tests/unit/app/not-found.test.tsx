import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import NotFound from '../../../src/app/not-found';

// Mock Next.js components
vi.mock('next/link', () => ({
  default: ({ children, ...props }: any) => <a {...props}>{children}</a>,
}));

vi.mock('next/image', () => ({
  default: ({ alt, ...props }: any) => <img alt={alt} {...props} data-testid="not-found-image" />,
}));

describe('NotFound Component', () => {
  it('renders the 404 page with correct elements', () => {
    render(<NotFound />);
    
    // Check for 404 text
    expect(screen.getByText('404')).toBeInTheDocument();
    
    // Check for page title
    expect(screen.getByText('Page not found')).toBeInTheDocument();
    expect(screen.getByText('Page not found').tagName).toBe('H1');
    
    // Check for descriptive text
    expect(screen.getByText(/Sorry, we couldn't find the page/i)).toBeInTheDocument();
    
    // Check for return home link
    const homeLink = screen.getByText(/Return Home/i).closest('a');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('includes a background image', () => {
    render(<NotFound />);
    
    // Check for background image
    const backgroundImage = screen.getByTestId('not-found-image');
    expect(backgroundImage).toBeInTheDocument();
    expect(backgroundImage).toHaveAttribute('alt', ''); // Decorative image has empty alt text
    expect(backgroundImage).toHaveClass('absolute');
    expect(backgroundImage).toHaveClass('inset-0');
    expect(backgroundImage).toHaveClass('-z-10');
  });

  it('has appropriate styling for error page', () => {
    render(<NotFound />);
    
    // Check for main container
    const mainElement = screen.getByRole('main');
    expect(mainElement).toHaveClass('relative');
    expect(mainElement).toHaveClass('isolate');
    expect(mainElement).toHaveClass('min-h-full');
    
    // Check for content container
    const contentContainer = screen.getByText('Page not found').closest('div');
    expect(contentContainer).toHaveClass('mx-auto');
    expect(contentContainer).toHaveClass('max-w-7xl');
    expect(contentContainer).toHaveClass('text-center');
  });
}); 