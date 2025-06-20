import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import SubFooter from '../../../src/components/SubFooter';

// Mock Next.js Link component
vi.mock('next/link', () => ({
  default: ({ children, ...props }: any) => {
    return <a {...props}>{children}</a>;
  },
}));

// Mock the current date to ensure consistent testing
const mockDate = new Date('2024-01-01');
vi.spyOn(global, 'Date').mockImplementation(() => mockDate);

describe('SubFooter Component', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('renders the copyright notice with current year', () => {
    render(<SubFooter />);

    // Check if copyright notice exists with the correct year
    const copyrightText = screen.getByText(/© 2024 Carinya Parc. All rights reserved./i);
    expect(copyrightText).toBeInTheDocument();
  });

  it('renders the privacy and terms links', () => {
    render(<SubFooter />);

    // Check for privacy policy link
    const privacyLink = screen.getByRole('link', { name: 'Privacy' });
    expect(privacyLink).toBeInTheDocument();
    expect(privacyLink).toHaveAttribute('href', '/privacy-policy');
    expect(privacyLink).toHaveClass('text-eucalyptus-100');
    expect(privacyLink).toHaveClass('hover:text-white');

    // Check for terms link
    const termsLink = screen.getByRole('link', { name: 'Terms' });
    expect(termsLink).toBeInTheDocument();
    expect(termsLink).toHaveAttribute('href', '/terms');
    expect(termsLink).toHaveClass('text-eucalyptus-100');
    expect(termsLink).toHaveClass('hover:text-white');
  });

  it('renders social media links with proper attributes', () => {
    render(<SubFooter />);

    // Check for social media links
    const socialLinks = [
      { name: 'Facebook', href: '#' },
      { name: 'Instagram', href: '#' },
      { name: 'X', href: '#' },
      { name: 'YouTube', href: 'https://www.youtube.com/@carinyaparc' },
      { name: 'GitHub', href: 'https://github.com/CarinyaParc' },
    ];

    socialLinks.forEach((link) => {
      const linkElement = screen.getByLabelText(`${link.name} social link`);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', link.href);
      expect(linkElement).toHaveAttribute('target', '_blank');
      expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
      expect(linkElement).toHaveClass('text-eucalyptus-100');
      expect(linkElement).toHaveClass('hover:text-white');

      // Check for screen reader only text
      const srOnlyText = screen.getByText(link.name);
      expect(srOnlyText).toBeInTheDocument();
      expect(srOnlyText).toHaveClass('sr-only');
    });
  });

  it('has the correct background color', () => {
    render(<SubFooter />);

    // Check the container has the right background color
    const container = screen.getByText(/© 2024/i).closest('div')?.parentElement;
    expect(container).toHaveClass('bg-eucalyptus-600');
    expect(container).toHaveClass('text-white');
  });

  it('has responsive layout classes', () => {
    render(<SubFooter />);

    // Check container has responsive layout
    const innerContainer = screen.getByText(/© 2024/i).closest('div')
      ?.parentElement?.firstElementChild;
    expect(innerContainer).toHaveClass('mx-auto');
    expect(innerContainer).toHaveClass('md:flex');
  });
});
