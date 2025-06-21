import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../../../../src/components/ui/accordion';

// Mock the lucide-react ChevronDown component
vi.mock('lucide-react', async () => {
  const actual = await vi.importActual('lucide-react');
  return {
    ...actual,
    ChevronDown: () => <div data-testid="chevron-down-icon" />,
  };
});

describe('Accordion Component', () => {
  it('renders accordion with single item', () => {
    const { container } = render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Accordion Title</AccordionTrigger>
          <AccordionContent>Accordion Content</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    // Check for the title which should be visible
    expect(screen.getByText('Accordion Title')).toBeInTheDocument();

    // Check for content div which might be hidden but still in DOM
    const contentDiv = container.querySelector('[data-state="closed"]');
    expect(contentDiv).toBeInTheDocument();
  });

  it('expands and collapses accordion item when clicked', () => {
    const { container } = render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Accordion Title</AccordionTrigger>
          <AccordionContent>Accordion Content</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    // Initially the content is not expanded
    const trigger = screen.getByRole('button', { name: /accordion title/i });

    // Find the content container by its role attribute
    const contentContainer = container.querySelector('[role="region"]');
    expect(contentContainer).toBeInTheDocument();

    // Verify initial state
    expect(contentContainer).toHaveAttribute('data-state', 'closed');
    expect(contentContainer).toHaveAttribute('hidden');

    // Click to expand
    fireEvent.click(trigger);

    // Verify expanded state
    expect(contentContainer).toHaveAttribute('data-state', 'open');
    expect(contentContainer).not.toHaveAttribute('hidden');

    // Click to collapse
    fireEvent.click(trigger);

    // Verify collapsed state
    expect(contentContainer).toHaveAttribute('data-state', 'closed');
  });

  it('renders multiple accordion items', () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>First Item</AccordionTrigger>
          <AccordionContent>First Content</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Second Item</AccordionTrigger>
          <AccordionContent>Second Content</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    // Check that the titles are rendered
    expect(screen.getByText('First Item')).toBeInTheDocument();
    expect(screen.getByText('Second Item')).toBeInTheDocument();

    // We don't check for content text as it's hidden
  });

  it('allows only one item to be expanded in "single" type', () => {
    const { container } = render(
      <Accordion type="single" defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>First Item</AccordionTrigger>
          <AccordionContent>First Content</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Second Item</AccordionTrigger>
          <AccordionContent>Second Content</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    // Find all region elements (the content containers)
    const regions = container.querySelectorAll('[role="region"]');
    expect(regions.length).toBe(2);

    // First item should be expanded initially
    expect(regions[0]).toHaveAttribute('data-state', 'open');
    expect(regions[0]).not.toHaveAttribute('hidden');

    // Second item should be collapsed initially
    expect(regions[1]).toHaveAttribute('data-state', 'closed');
    expect(regions[1]).toHaveAttribute('hidden');

    // Click to expand the second item
    fireEvent.click(screen.getByText('Second Item'));

    // Second item should now be expanded
    expect(regions[1]).toHaveAttribute('data-state', 'open');
    expect(regions[1]).not.toHaveAttribute('hidden');

    // First item should now be collapsed (only one can be open at a time)
    expect(regions[0]).toHaveAttribute('data-state', 'closed');
  });

  it('applies custom className to AccordionItem', () => {
    const { container } = render(
      <Accordion type="single">
        <AccordionItem value="test" className="custom-class">
          <AccordionTrigger>Title</AccordionTrigger>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    // Find the accordion item element directly by data orientation attribute
    const item = container.querySelector('[data-orientation="vertical"][data-state="closed"]');
    expect(item).toHaveClass('custom-class');
    expect(item).toHaveClass('border-b'); // Default class
  });

  it('applies custom className to AccordionTrigger', () => {
    render(
      <Accordion type="single">
        <AccordionItem value="test">
          <AccordionTrigger className="custom-trigger">Title</AccordionTrigger>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    // Find the trigger and check for the custom class
    const trigger = screen.getByRole('button');
    expect(trigger).toHaveClass('custom-trigger');
  });

  it('applies custom className to AccordionContent', () => {
    const { container } = render(
      <Accordion type="single" defaultValue="test">
        <AccordionItem value="test">
          <AccordionTrigger>Title</AccordionTrigger>
          <AccordionContent className="custom-content">Content</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    // Find the inner content div by first getting the region and then its child div
    const region = container.querySelector('[role="region"]');
    const contentDiv = region?.querySelector('div');
    expect(contentDiv).toHaveClass('custom-content');
  });
});
