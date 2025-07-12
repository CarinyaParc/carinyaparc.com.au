import { Raleway } from 'next/font/google';

export const raleway = Raleway({
  weight: ['400', '700'], // 400 for body, 700 for sub-heads
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

export const fontClassNames = `${raleway.variable} font-sans`;
