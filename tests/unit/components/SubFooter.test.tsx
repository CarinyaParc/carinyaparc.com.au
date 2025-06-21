import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import SubFooter from '../../../src/components/SubFooter';

// Mock Next.js Link component
vi.mock('next/link', () => ({
  default: ({ children, ...props }: any) => {
    return <a {...props}>{children}</a>;
  },
}));

describe('SubFooter Component', () => {
  // Mock the Date constructor
  beforeEach(() => {
    // Mock Date to return a consistent date
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2024, 0, 1)); // January 1, 2024
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders the copyright notice with current year', () => {
    render(<SubFooter />);

    const copyright = screen.getByText(/© 2024 Carinya Parc. All rights reserved./i);
    expect(copyright).toBeInTheDocument();
  });

  it('renders the privacy and terms links', () => {
    render(<SubFooter />);

    const privacyLink = screen.getByRole('link', { name: /privacy/i });
    const termsLink = screen.getByRole('link', { name: /terms/i });

    expect(privacyLink).toBeInTheDocument();
    expect(privacyLink).toHaveAttribute('href', '/privacy-policy');

    expect(termsLink).toBeInTheDocument();
    expect(termsLink).toHaveAttribute('href', '/terms');
  });

  it('renders social media links with proper attributes', () => {
    render(<SubFooter />);

    // Check for all social links
    const socialLinks = screen.getAllByRole('link', { name: /social link/i });
    expect(socialLinks.length).toBeGreaterThanOrEqual(4); // At least 4 social links

    // Check for specific links
    const youtubeLink = screen.getByRole('link', { name: /YouTube social link/i });
    const githubLink = screen.getByRole('link', { name: /GitHub social link/i });

    expect(youtubeLink).toHaveAttribute('href', 'https://www.youtube.com/@carinyaparc');
    expect(youtubeLink).toHaveAttribute('target', '_blank');
    expect(youtubeLink).toHaveAttribute('rel', 'noopener noreferrer');

    expect(githubLink).toHaveAttribute('href', 'https://github.com/CarinyaParc');
  });

  it('has the correct background color', () => {
    render(<SubFooter />);

    // Check container background color
    const container = screen.getByText(/© 2024 Carinya Parc/i).closest('div')
      ?.parentElement?.parentElement;
    expect(container).toHaveClass('bg-eucalyptus-600');
  });

  it('has responsive layout classes', () => {
    render(<SubFooter />);

    // Check container layout classes for responsiveness
    const innerContainer = screen.getByText(/© 2024 Carinya Parc/i).closest('div')?.parentElement;
    expect(innerContainer).toHaveClass('md:flex');
    expect(innerContainer).toHaveClass('md:items-center');
    expect(innerContainer).toHaveClass('md:justify-between');
  });
});
