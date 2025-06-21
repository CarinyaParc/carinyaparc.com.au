import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from '../../../src/app/page';

// Mock Next.js components
vi.mock('next/link', () => ({
  default: ({ children, ...props }: any) => <a {...props}>{children}</a>,
}));

vi.mock('next/image', () => ({
  default: ({ alt, src, ...props }: any) => (
    <img
      alt={alt}
      src={src}
      {...props}
      data-testid={`mock-image-${alt.replace(/\s+/g, '-').toLowerCase()}`}
    />
  ),
}));

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

// Mock UI components
vi.mock('@/components/ui/button', () => ({
  Button: ({ children, asChild, ...props }: any) => {
    if (asChild) {
      return React.cloneElement(React.Children.only(children), props);
    }
    return <button {...props}>{children}</button>;
  },
}));

vi.mock('@/components/ui/card', () => ({
  Card: ({ children, ...props }: any) => (
    <div {...props} data-testid="mock-card">
      {children}
    </div>
  ),
  CardContent: ({ children, ...props }: any) => (
    <div {...props} data-testid="mock-card-content">
      {children}
    </div>
  ),
}));

// Mock Hero components
vi.mock('@/components/Hero', () => ({
  Hero: ({ children }: any) => <div data-testid="mock-hero">{children}</div>,
  HeroContent: ({ children }: any) => <div data-testid="mock-hero-content">{children}</div>,
  HeroImage: ({ children }: any) => <div data-testid="mock-hero-image">{children}</div>,
  HeroTitle: ({ children }: any) => <h1 data-testid="mock-hero-title">{children}</h1>,
  HeroText: ({ children }: any) => <p data-testid="mock-hero-text">{children}</p>,
  HeroLocation: ({ children }: any) => <div data-testid="mock-hero-location">{children}</div>,
  HeroActions: ({ children }: any) => <div data-testid="mock-hero-actions">{children}</div>,
  HeroButton: ({ children, href }: any) => (
    <a href={href} data-testid="mock-hero-button">
      {children}
    </a>
  ),
  HeroLink: ({ children, href }: any) => (
    <a href={href} data-testid="mock-hero-link">
      {children}
    </a>
  ),
}));

describe('HomePage Component', () => {
  it('renders the hero section with correct content', () => {
    render(<HomePage />);

    // Check if hero components are rendered
    expect(screen.getByTestId('mock-hero')).toBeInTheDocument();
    expect(screen.getByTestId('mock-hero-content')).toBeInTheDocument();
    expect(screen.getByTestId('mock-hero-image')).toBeInTheDocument();
    expect(screen.getByTestId('mock-hero-title')).toBeInTheDocument();
    expect(screen.getByTestId('mock-hero-text')).toBeInTheDocument();
    expect(screen.getByTestId('mock-hero-location')).toBeInTheDocument();
    expect(screen.getByTestId('mock-hero-actions')).toBeInTheDocument();

    // Check hero content
    expect(screen.getByText(/Restoring the Land/i)).toBeInTheDocument();
    expect(screen.getByText(/Nurturing the Future/i)).toBeInTheDocument();
    expect(screen.getByText(/Welcome to Carinya Parc/i)).toBeInTheDocument();
    expect(screen.getByText(/315 Warraba Road, The Branch NSW 2425/i)).toBeInTheDocument();

    // Check hero image
    const heroImage = screen.getByTestId('mock-image-carinya-parc-landscape');
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('alt', 'Carinya Parc landscape');
    expect(heroImage).toHaveAttribute('src', '/images/hero_image.jpg');

    // Check hero buttons/links
    const learnButton = screen.getByTestId('mock-hero-button');
    expect(learnButton).toBeInTheDocument();
    expect(learnButton).toHaveAttribute('href', '/our-farm');
    expect(learnButton).toHaveTextContent('Learn Our Story');

    const projectLink = screen.getByTestId('mock-hero-link');
    expect(projectLink).toBeInTheDocument();
    expect(projectLink).toHaveAttribute('href', '/regeneration');
    expect(projectLink).toHaveTextContent('View Our Project');
  });

  it('renders the features section with three features', () => {
    render(<HomePage />);

    // Check section title
    expect(screen.getByText('Our Mission')).toBeInTheDocument();

    // Check for three feature cards
    const featureTitles = ['Land Regeneration', 'Environmental Care', 'Community Impact'];
    featureTitles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });

    // Check feature descriptions
    expect(screen.getByText(/Restoring soil health and biodiversity/i)).toBeInTheDocument();
    expect(screen.getByText(/Protecting and enhancing natural habitats/i)).toBeInTheDocument();
    expect(screen.getByText(/Building connections with local communities/i)).toBeInTheDocument();
  });

  it('renders the latest updates section with blog posts', () => {
    render(<HomePage />);

    // Check section title
    expect(screen.getByText('Latest from the Land')).toBeInTheDocument();

    // Check for blog post titles
    const postTitles = ['Soil Testing Complete', 'Native Tree Planting', 'Water System Planning'];
    postTitles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });

    // Check dates
    expect(screen.getByText('March 2024')).toBeInTheDocument();
    expect(screen.getByText('February 2024')).toBeInTheDocument();
    expect(screen.getByText('January 2024')).toBeInTheDocument();

    // Check "View All Updates" link
    const viewAllLink = screen.getByText('View All Updates');
    expect(viewAllLink).toBeInTheDocument();
    expect(viewAllLink.closest('a')).toHaveAttribute('href', '/blog');
  });
});
