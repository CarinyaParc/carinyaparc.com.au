# @repo/ui

UI component library for CarinyaParc

## Features

- Collection of reusable React components built with Radix UI and styled with Tailwind CSS
- Fully typed with TypeScript
- Accessible and customizable components
- Consistent design system

## Installation

This package is part of a monorepo and should be used as a workspace dependency:

```json
// package.json
"dependencies": {
  "@repo/ui": "workspace:*"
}
```

## Usage

### Importing Components

You can import components directly:

```tsx
import { Button } from '@repo/ui/button';
import { Card } from '@repo/ui/card';
```

Or import from the main entry point:

```tsx
import { Button, Card } from '@repo/ui';
```

### Importing Styles

Make sure to import the CSS styles in your application:

```tsx
// In your _app.tsx or layout.tsx
import '@repo/ui/styles.css';
```

### Example Usage

```tsx
import { Button } from '@repo/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui/card';

export default function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Card content goes here</p>
        <Button>Click Me</Button>
      </CardContent>
    </Card>
  );
}
```

## Available Components

The library includes the following components:

- Accordion
- Alert
- AlertDialog
- AspectRatio
- Avatar
- Badge
- Button
- Card
- Checkbox
- Collapsible
- Command
- Dialog
- DropdownMenu
- Form
- HoverCard
- Input
- Label
- Popover
- Progress
- Separator
- Sheet
- Skeleton
- Slider
- Switch
- Tabs
- Textarea
- Toast
- Toaster
- Toggle
- ToggleGroup
- Tooltip

## Development

To build the components:

```bash
pnpm build:components
```

To build the styles:

```bash
pnpm build:styles
```

Or build both:

```bash
pnpm build
```
