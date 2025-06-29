import 'next';

// Fix for Next.js 15 params typing issue
declare module 'next' {
  export interface PageProps {
    params?: Record<string, string>;
    searchParams?: Record<string, string>;
  }
}
