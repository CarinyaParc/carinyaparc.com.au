import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Alert, AlertTitle, AlertDescription } from '../../../../src/components/ui/alert';

describe('Alert Component', () => {
  it('renders the alert component with default variant', () => {
    render(
      <Alert>
        <div>Alert content</div>
      </Alert>,
    );

    // Check if the alert renders
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();

    // Check for default styles
    expect(alert).toHaveClass('bg-background');
    expect(alert).toHaveClass('text-foreground');
    expect(alert).toHaveClass('rounded-lg');
    expect(alert).toHaveClass('border');

    // Check if children are rendered
    expect(screen.getByText('Alert content')).toBeInTheDocument();
  });

  it('renders the alert component with destructive variant', () => {
    render(
      <Alert variant="destructive">
        <div>Destructive alert</div>
      </Alert>,
    );

    // Check if the alert renders
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();

    // Check for destructive styles
    expect(alert).toHaveClass('border-destructive/50');
    expect(alert).toHaveClass('text-destructive');

    // Check if children are rendered
    expect(screen.getByText('Destructive alert')).toBeInTheDocument();
  });

  it('renders AlertTitle with correct styles', () => {
    render(
      <Alert>
        <AlertTitle>Alert Title</AlertTitle>
      </Alert>,
    );

    // Check if the title renders
    const title = screen.getByText('Alert Title');
    expect(title).toBeInTheDocument();

    // Check for title styles
    expect(title.tagName).toBe('H5');
    expect(title).toHaveClass('font-medium');
    expect(title).toHaveClass('mb-1');
    expect(title).toHaveClass('tracking-tight');
  });

  it('renders AlertDescription with correct styles', () => {
    render(
      <Alert>
        <AlertDescription>Alert description text</AlertDescription>
      </Alert>,
    );

    // Check if the description renders
    const description = screen.getByText('Alert description text');
    expect(description).toBeInTheDocument();

    // In the implementation, the text-sm class is on the div inside AlertDescription
    // not on the AlertDescription itself
    const descriptionDiv = description.closest('div');
    expect(descriptionDiv).toHaveClass('text-sm');
  });

  it('renders a complete alert with title and description', () => {
    render(
      <Alert>
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          Your password will expire in 5 days. Please change it soon.
        </AlertDescription>
      </Alert>,
    );

    // Check for all elements
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText('Warning')).toBeInTheDocument();
    expect(
      screen.getByText('Your password will expire in 5 days. Please change it soon.'),
    ).toBeInTheDocument();
  });

  it('applies custom className to Alert component', () => {
    render(
      <Alert className="custom-alert-class">
        <div>Alert with custom class</div>
      </Alert>,
    );

    // Check for custom class
    const alert = screen.getByRole('alert');
    expect(alert).toHaveClass('custom-alert-class');
  });

  it('applies custom className to AlertTitle component', () => {
    render(
      <Alert>
        <AlertTitle className="custom-title-class">Custom Title</AlertTitle>
      </Alert>,
    );

    // Check for custom class
    const title = screen.getByText('Custom Title');
    expect(title).toHaveClass('custom-title-class');
  });

  it('applies custom className to AlertDescription component', () => {
    render(
      <Alert>
        <AlertDescription className="custom-desc-class">Custom Description</AlertDescription>
      </Alert>,
    );

    // Custom class is on the div inside the AlertDescription component
    const description = screen.getByText('Custom Description');
    const descriptionDiv = description.closest('div');
    expect(descriptionDiv).toHaveClass('custom-desc-class');
  });
});
