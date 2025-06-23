import { Montserrat } from 'next/font/google';

export const montserrat = Montserrat({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const fontClassNames = `${montserrat.variable} font-sans`;
