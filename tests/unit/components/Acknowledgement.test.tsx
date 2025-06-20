import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Acknowledgement from '../../../src/components/Acknowledgement';

describe('Acknowledgement Component', () => {
  it('renders the acknowledgement component', () => {
    render(<Acknowledgement />);

    // Check if the component renders
    const acknowledgement = screen.getByText(/Carinya Parc acknowledges/i);
    expect(acknowledgement).toBeInTheDocument();
  });

  it('contains text acknowledging Traditional Owners', () => {
    render(<Acknowledgement />);

    // Check for specific acknowledgement content
    const content = screen.getByText(/acknowledges the Traditional Owners/i);
    expect(content).toBeInTheDocument();
    expect(content).toHaveTextContent(/pays our respects to Elders/i);
  });

  it('has the correct background and text colors', () => {
    render(<Acknowledgement />);

    // Get the container element
    const container = screen.getByText(/Carinya Parc acknowledges/i).closest('div');
    expect(container).toHaveClass('bg-charcoal-500');
    expect(container).toHaveClass('text-charcoal-200');
  });

  it('has a paragraph with responsive text alignment', () => {
    render(<Acknowledgement />);

    const paragraph = screen.getByText(/Carinya Parc acknowledges/i);
    expect(paragraph).toHaveClass('text-center');
    expect(paragraph).toHaveClass('text-sm');
    expect(paragraph).toHaveClass('md:text-left');
  });

  it('mentions Aboriginal and Torres Strait Islander peoples', () => {
    render(<Acknowledgement />);

    // Check for specific cultural references
    const content = screen.getByText(/Aboriginal and Torres Strait Islander/i);
    expect(content).toBeInTheDocument();
  });
});
