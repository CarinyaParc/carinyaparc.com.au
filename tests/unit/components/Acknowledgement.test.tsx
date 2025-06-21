import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Acknowledgement from '../../../src/components/Acknowledgement';

describe('Acknowledgement Component', () => {
  it('renders the acknowledgement component', () => {
    render(<Acknowledgement />);

    const content = screen.getByText(/Carinya Parc acknowledges/i);
    expect(content).toBeInTheDocument();
  });

  it('contains text acknowledging Traditional Owners', () => {
    render(<Acknowledgement />);

    const content = screen.getByText(/acknowledges the Traditional Owners/i);
    expect(content).toBeInTheDocument();
    // Test against text that actually exists in the component
    expect(content).toHaveTextContent(/pay our respects to Elders/i);
  });

  it('has the correct background and text colors', () => {
    render(<Acknowledgement />);

    // Get the main container div which has the bg-charcoal-500 class
    const container = screen.getByText(/Carinya Parc acknowledges/i).closest('div');
    const parentContainer = container?.parentElement?.parentElement;
    expect(parentContainer).toHaveClass('bg-charcoal-500');
    expect(parentContainer).toHaveClass('text-charcoal-200');
  });

  it('has a paragraph with responsive text alignment', () => {
    render(<Acknowledgement />);

    const paragraph = screen.getByText(/Carinya Parc acknowledges/i);
    expect(paragraph).toHaveClass('text-center');
    expect(paragraph).toHaveClass('md:text-left');
  });

  it('mentions Aboriginal and Torres Strait Islander peoples', () => {
    render(<Acknowledgement />);

    const content = screen.getByText(/Aboriginal and Torres Strait Islander peoples/i);
    expect(content).toBeInTheDocument();
  });
});
