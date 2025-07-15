
Based on my comprehensive scan, here's the **CSS optimization strategy** for Carinya Parc:

## 🚨 **Critical Issues Found:**

### **1. Scattered CSS Definitions (6+ locations)**
- `src/styles/globals.css` - Color system & theme
- `src/styles/ui-components.css` - Basic animations  
- `tailwind.config.ts` - Typography & theme extensions
- `mdx-components.tsx` - Inline component styles
- `src/app/sentry/page.tsx` - Hardcoded `<style>` tags
- Components - 50+ hardcoded color classes

### **2. Hardcoded Color Usage**
- `text-eucalyptus-600` used 40+ times across components
- `bg-charcoal-600` scattered throughout
- No semantic tokens (`text-primary` vs `text-eucalyptus-600`)
- Brand colors tightly coupled to components

### **3. Bundle Bloat**
- All CSS loads globally (typography, prose, animations)
- No conditional loading for specialized pages
- Duplicate definitions in config and components
- No critical CSS extraction

---

## 🎯 **Optimization Strategy:**

### **Phase 1: Consolidate & Organize**

#### **Proposed `styles/` Directory Structure:**
```
src/styles/
├── index.css                 # Main entry point
├── critical.css              # Above-the-fold styles
├── tokens/
│   ├── colors.css            # Design tokens
│   ├── typography.css        # Font & text styles
│   └── spacing.css           # Layout tokens
├── base/
│   ├── reset.css            # Browser normalization
│   ├── fonts.css            # Font loading
│   └── globals.css          # Global styles
├── components/
│   ├── ui.css               # Shared UI components
│   ├── navigation.css       # Header/footer
│   └── forms.css            # Form components
├── pages/
│   ├── blog.css             # Blog-specific styles
│   ├── legal.css            # Legal pages prose
│   └── recipes.css          # Recipe-specific styles
└── utilities/
    ├── animations.css       # Transitions & animations
    └── helpers.css          # Utility classes
```

### **Phase 2: Design Token System**

#### **Semantic Color Tokens:**
```css
/* Instead of: text-eucalyptus-600 */
/* Use: text-primary-600 */

:root {
  /* Semantic tokens */
  --color-primary-50: var(--color-eucalyptus-50);
  --color-primary-600: var(--color-eucalyptus-600);
  --color-secondary-600: var(--color-harvest-600);
  --color-neutral-600: var(--color-charcoal-600);
  
  /* Context tokens */
  --color-text-primary: var(--color-primary-600);
  --color-text-body: var(--color-neutral-600);
  --color-bg-primary: var(--color-primary-600);
  --color-border-subtle: var(--color-neutral-100);
}
```

### **Phase 3: Conditional Loading**

#### **Page-Specific CSS Implementation:**
```typescript
// blog/[post]/page.tsx
import '@/styles/pages/blog.css';

// legal/[slug]/page.tsx  
import '@/styles/pages/legal.css';

// recipes/[recipe]/page.tsx
import '@/styles/pages/recipes.css';
```

### **Phase 4: Critical CSS Inlining**

#### **Above-the-fold Optimization:**
```css
/* styles/critical.css */
/* Header, hero, navigation styles */
/* Loaded inline in <head> */
```

---

## 📋 **Implementation Recommendations:**

### **1. Immediate Actions:**

#### **Remove Inline Styles:**
- Extract Sentry page `<style>` tags to proper CSS files
- Convert hardcoded colors to semantic tokens
- Consolidate typography definitions

#### **Create Token System:**
- Map all `eucalyptus-*` → `primary-*`
- Map all `charcoal-*` → `neutral-*`
- Map all `harvest-*` → `secondary-*`

### **2. Bundle Optimization:**

#### **Tree-Shaking Strategy:**
- Split CSS by feature/page
- Use CSS modules for component-specific styles
- Implement dynamic imports for specialized styles

#### **Critical CSS Setup:**
```javascript
// next.config.mjs
export default {
  experimental: {
    optimizeCss: true,
    crazyHeading: true
  }
};
```

### **3. Performance Improvements:**

#### **Tailwind Configuration:**
```javascript
// tailwind.config.ts
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  safelist: [], // Remove unused classes
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        neutral: 'var(--color-neutral)'
      }
    }
  }
};
```

#### **PostCSS Optimization:**
```javascript
// postcss.config.mjs
plugins: [
  'tailwindcss',
  'autoprefixer',
  ['purgecss', { content: ['./src/**/*.{js,ts,jsx,tsx}'] }],
  'cssnano'
]
```

---

## 🎨 **Design Token Migration:**

### **Color System Refactor:**
```css
/* Current: */
.text-eucalyptus-600 { color: var(--color-eucalyptus-600); }

/* Proposed: */
.text-primary { color: var(--color-text-primary); }
.text-primary-600 { color: var(--color-primary-600); }
.bg-primary { background-color: var(--color-bg-primary); }
```

### **Typography Consolidation:**
```css
/* styles/tokens/typography.css */
.heading-1 { @apply text-3xl md:text-4xl font-bold text-primary mb-4; }
.heading-2 { @apply text-2xl font-bold mb-4; }
.body-text { @apply mb-4; }
.prose-link { @apply text-primary hover:text-primary-500 underline; }
```

---

## 📊 **Expected Improvements:**

### **Bundle Size Reduction:**
- **30-40%** CSS reduction through tree-shaking
- **50-60%** reduction in unused styles per page
- **Critical CSS** reduces initial load by 70%

### **Performance Gains:**
- **Faster initial paint** with critical CSS
- **Reduced CLS** with proper font loading
- **Better caching** with organized structure

### **Developer Experience:**
- **Consistent tokens** across all components
- **Easier maintenance** with centralized styles
- **Better debugging** with organized structure

---

## 🚀 **Implementation Priority:**

1. **Phase 1** (Week 1): Consolidate existing CSS into `styles/` directory
2. **Phase 2** (Week 2): Create semantic token system
3. **Phase 3** (Week 3): Implement conditional loading
4. **Phase 4** (Week 4): Add critical CSS inlining

This strategy will resolve the scattered CSS issues, reduce bundle bloat, and create a maintainable, performant system using semantic design tokens.