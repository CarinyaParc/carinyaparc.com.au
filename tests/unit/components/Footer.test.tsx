import { describe, it, expect, vi, beforeEach } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../helpers/renderWithProviders';
import Footer from '../../../src/components/Footer';

// Mock Next.js Link and Image components
vi.mock('next/link', () => ({
  default: ({ children, ...props }: any) => {
    return <a {...props}>{children}</a>;
  },
}));

vi.mock('next/image', () => ({
  default: ({ alt, ...props }: any) => {
    return <img alt={alt} {...props} />;
  },
}));

describe('Footer Component', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('renders the footer with logo and site name', () => {
    renderWithProviders(<Footer />);

    // Check if the logo is rendered
    const logoElement = screen.getByAltText('Carinya Parc');
    expect(logoElement).toBeInTheDocument();

    // Check if the site name is rendered
    const siteName = screen.getByText('Carinya Parc');
    expect(siteName).toBeInTheDocument();
  });

  it('renders the site description', () => {
    renderWithProviders(<Footer />);

    // Check if the site description is present
    const descriptionElement = screen.getByText(/regenerative farm/i);
    expect(descriptionElement).toBeInTheDocument();
  });

  it('renders navigation sections with correct headings', () => {
    renderWithProviders(<Footer />);

    // Check for navigation section headings
    const exploreHeading = screen.getByText('Explore');
    expect(exploreHeading).toBeInTheDocument();

    const resourcesHeading = screen.getByText('Resources');
    expect(resourcesHeading).toBeInTheDocument();

    const communityHeading = screen.getByText('Community');
    expect(communityHeading).toBeInTheDocument();
  });

  it('renders all navigation links in the Explore section', () => {
    renderWithProviders(<Footer />);

    // Check for links in the Explore section
    const aboutLink = screen.getByRole('link', { name: 'Our Farm' });
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute('href', '/about');

    const regenerationLink = screen.getByRole('link', { name: 'Land Regeneration' });
    expect(regenerationLink).toBeInTheDocument();
    expect(regenerationLink).toHaveAttribute('href', '/regeneration');

    const blogLink = screen.getByRole('link', { name: 'Life on the Land' });
    expect(blogLink).toBeInTheDocument();
    expect(blogLink).toHaveAttribute('href', '/blog');
  });

  it('renders all navigation links in the Resources section', () => {
    renderWithProviders(<Footer />);

    // Check for links in the Resources section
    const resourceALink = screen.getByRole('link', { name: 'Resource A' });
    expect(resourceALink).toBeInTheDocument();
    expect(resourceALink).toHaveAttribute('href', '#');

    const resourceBLink = screen.getByRole('link', { name: 'Resource B' });
    expect(resourceBLink).toBeInTheDocument();
    expect(resourceBLink).toHaveAttribute('href', '#');
  });

  it('renders all navigation links in the Community section', () => {
    renderWithProviders(<Footer />);

    // Check for links in the Community section
    const youtubeLink = screen.getByRole('link', { name: 'YouTube' });
    expect(youtubeLink).toBeInTheDocument();
    expect(youtubeLink).toHaveAttribute('href', 'https://www.youtube.com/@carinyaparc');

    const instagramLink = screen.getByRole('link', { name: 'Instagram' });
    expect(instagramLink).toBeInTheDocument();
    expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/carinyaparc/');

    const facebookLink = screen.getByRole('link', { name: 'Facebook' });
    expect(facebookLink).toBeInTheDocument();
    expect(facebookLink).toHaveAttribute('href', 'https://www.facebook.com/carinyaparc/');
  });
});
