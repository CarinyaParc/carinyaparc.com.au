import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../helpers/renderWithProviders';
import Hero from '../../../src/components/Hero';

// Mock Next.js components
vi.mock('next/image', () => ({
  default: ({ alt, ...props }: any) => {
    return <img alt={alt} {...props} data-testid="hero-image" />;
  },
}));

vi.mock('next/link', () => ({
  default: ({ children, ...props }: any) => {
    return <a {...props}>{children}</a>;
  },
}));

describe('Hero Component', () => {
  it('renders the hero section with heading and image', () => {
    renderWithProviders(<Hero />);

    // Check for main heading
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();

    // Check for hero image
    const heroImage = screen.getByTestId('hero-image');
    expect(heroImage).toBeInTheDocument();
  });

  it('displays compelling headline text', () => {
    renderWithProviders(<Hero />);

    // The hero should contain key messaging about Carinya Parc
    const headingText = screen.getByRole('heading', { level: 1 }).textContent?.toLowerCase() || '';

    // Check for key terms that should be in the heading (adjust based on actual content)
    expect(
      headingText.includes('carinya') ||
        headingText.includes('sustainable') ||
        headingText.includes('regenerative') ||
        headingText.includes('farm'),
    ).toBeTruthy();
  });

  it('includes a call-to-action button or link', () => {
    renderWithProviders(<Hero />);

    // The hero should have a prominent CTA
    const ctaButton = screen.getByRole('link') || screen.getByRole('button');
    expect(ctaButton).toBeInTheDocument();

    // CTA text should be action-oriented
    const ctaText = ctaButton.textContent?.toLowerCase() || '';
    expect(
      ctaText.includes('learn') ||
        ctaText.includes('discover') ||
        ctaText.includes('explore') ||
        ctaText.includes('visit') ||
        ctaText.includes('join'),
    ).toBeTruthy();
  });

  it('has proper image accessibility attributes', () => {
    renderWithProviders(<Hero />);

    // Check image has proper alt text
    const heroImage = screen.getByTestId('hero-image');
    expect(heroImage).toHaveAttribute('alt');
    expect(heroImage.getAttribute('alt')).not.toBe('');
  });

  it('contains descriptive subheading or supporting text', () => {
    renderWithProviders(<Hero />);

    // Look for paragraph text that describes the farm or mission
    const paragraphs = screen
      .getAllByText(/.+/i)
      .filter((element) => element.tagName.toLowerCase() === 'p');

    // Should have at least one paragraph with descriptive text
    expect(paragraphs.length).toBeGreaterThan(0);

    // Combined text should be substantial enough to describe the farm
    const combinedText = paragraphs.map((p) => p.textContent).join(' ');
    expect(combinedText.length).toBeGreaterThan(20);
  });
});
