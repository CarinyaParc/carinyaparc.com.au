import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from '../../../../src/components/ui/input';
import userEvent from '@testing-library/user-event';

describe('Input Component', () => {
  it('renders the input element with default properties', () => {
    render(<Input placeholder="Enter text" />);

    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'undefined'); // Default when type is not specified
  });

  it('renders the input with specific type', () => {
    render(<Input type="email" placeholder="Enter email" />);

    const input = screen.getByPlaceholderText('Enter email');
    expect(input).toHaveAttribute('type', 'email');
  });

  it('applies default styling classes', () => {
    render(<Input placeholder="Test" />);

    const input = screen.getByPlaceholderText('Test');
    expect(input).toHaveClass('flex');
    expect(input).toHaveClass('h-10');
    expect(input).toHaveClass('w-full');
    expect(input).toHaveClass('rounded-md');
    expect(input).toHaveClass('border');
  });

  it('applies custom className', () => {
    render(<Input placeholder="Test" className="custom-class" />);

    const input = screen.getByPlaceholderText('Test');
    expect(input).toHaveClass('custom-class');
    expect(input).toHaveClass('flex'); // Still has default classes
  });

  it('accepts and updates value', async () => {
    const onChange = vi.fn();
    render(<Input placeholder="Test" onChange={onChange} />);

    const input = screen.getByPlaceholderText('Test');
    await userEvent.type(input, 'Hello');

    expect(onChange).toHaveBeenCalledTimes('Hello'.length);
    expect(input).toHaveValue('Hello');
  });

  it('forwards other props correctly', () => {
    render(
      <Input
        placeholder="Test"
        id="test-input"
        name="test-name"
        data-testid="test-input"
        aria-label="Test input"
      />,
    );

    const input = screen.getByTestId('test-input');
    expect(input).toHaveAttribute('id', 'test-input');
    expect(input).toHaveAttribute('name', 'test-name');
    expect(input).toHaveAttribute('aria-label', 'Test input');
  });

  it('renders as disabled when disabled prop is true', () => {
    render(<Input placeholder="Disabled input" disabled />);

    const input = screen.getByPlaceholderText('Disabled input');
    expect(input).toBeDisabled();
    expect(input).toHaveClass('disabled:opacity-50');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input ref={ref} placeholder="Ref test" />);

    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('INPUT');
    expect(screen.getByPlaceholderText('Ref test')).toBe(ref.current);
  });

  it('handles focus and blur events', () => {
    const onFocus = vi.fn();
    const onBlur = vi.fn();

    render(<Input placeholder="Focus test" onFocus={onFocus} onBlur={onBlur} />);

    const input = screen.getByPlaceholderText('Focus test');

    // Trigger focus
    fireEvent.focus(input);
    expect(onFocus).toHaveBeenCalledTimes(1);

    // Trigger blur
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });
});
