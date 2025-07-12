import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';
import typography from '@tailwindcss/typography';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
    './mdx-components.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: 'var(--color-eucalyptus-600)',
              '&:hover': {
                color: 'var(--color-eucalyptus-500)',
              },
            },
            h1: {
              color: 'var(--color-eucalyptus-600)',
            },
            h2: {
              color: 'var(--color-charcoal-600)',
            },
          },
        },
        eucalyptus: {
          css: {
            '--tw-prose-body': 'var(--color-charcoal-600)',
            '--tw-prose-headings': 'var(--color-eucalyptus-600)',
            '--tw-prose-links': 'var(--color-eucalyptus-600)',
            '--tw-prose-bold': 'var(--color-charcoal-600)',
            '--tw-prose-counters': 'var(--color-eucalyptus-500)',
            '--tw-prose-bullets': 'var(--color-eucalyptus-500)',
            '--tw-prose-hr': 'var(--color-charcoal-200)',
            '--tw-prose-quotes': 'var(--color-eucalyptus-600)',
            '--tw-prose-quote-borders': 'var(--color-eucalyptus-300)',
            '--tw-prose-captions': 'var(--color-charcoal-500)',
            '--tw-prose-code': 'var(--color-charcoal-600)',
            '--tw-prose-pre-code': 'var(--color-charcoal-200)',
            '--tw-prose-pre-bg': 'var(--color-charcoal-600)',
          },
        },
      }),
    },
  },
  plugins: [animate, typography],
};

export default config;
