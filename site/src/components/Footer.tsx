'use client';

import Link from 'next/link';
import { Heart } from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
}

const navigation: {
  FooterList1: NavigationItem[];
  FooterList2: NavigationItem[];
  FooterList3: NavigationItem[];
  FooterList4: NavigationItem[];
} = {
  FooterList1: [
    { name: 'Our Story', href: '/about' },
    { name: 'Meet Jonathan', href: '/about/jonathan' },
    { name: 'The Property', href: '/about/the-property' },
  ],
  FooterList2: [
    { name: 'Regeneration Project', href: '/regenerate' },
    { name: 'Future Produce', href: '/products' },
  ],
  FooterList3: [{ name: 'Read Life on Pasture', href: '/blog' }],
  FooterList4: [{ name: 'Subscribe', href: '/subscribe' }],
};

// Social links from SubFooter component
const socialLinks = [
  {
    name: 'Facebook',
    href: '#',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@carinyaparc',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/CarinyaParc',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      {/* Main Footer */}
      <div className="bg-eucalyptus-600">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <h3 className="text-xl font-semibold text-white">Carinya Parc</h3>
              </div>
              <p className="text-sm text-eucalyptus-100 max-w-xs">
                A regenerative farm focused on restoring the land and sustainable agricultural
                practices.
              </p>
              <p className="text-sm text-eucalyptus-100 max-w-xs">
                <span>
                  Made with &nbsp;
                  <Heart className="inline-block h-4 w-4" />
                  &nbsp; in Australia
                </span>
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-white">About Carinya Parc</h3>
                  <ul role="list" className="mt-4 space-y-3">
                    {navigation.FooterList1.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm text-eucalyptus-100 hover:text-charcoal-600 dark:text-gray-300 dark:hover:text-eucalyptus-600"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold text-white">Explore</h3>
                  <ul role="list" className="mt-4 space-y-3">
                    {navigation.FooterList2.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm text-eucalyptus-100 hover:text-charcoal-600 dark:text-gray-300 dark:hover:text-eucalyptus-600"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-white">Resources</h3>
                  <ul role="list" className="mt-4 space-y-3">
                    {navigation.FooterList3.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm text-eucalyptus-100 hover:text-charcoal-600 dark:text-gray-300 dark:hover:text-eucalyptus-600"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold text-white">Community</h3>
                  <ul role="list" className="mt-4 space-y-3">
                    {navigation.FooterList4.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm text-eucalyptus-100 hover:text-charcoal-600 dark:text-gray-300 dark:hover:text-eucalyptus-600"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SubFooter */}
      <div className="bg-eucalyptus-600 text-white">
        <div className="mx-auto max-w-7xl px-6 py-8 md:flex md:items-center md:justify-between lg:px-8 border-t border-eucalyptus-400">
          <div className="md:flex md:items-center md:order-1">
            <p className="text-center text-sm text-eucalyptus-100 md:text-left">
              &copy; {currentYear} Carinya Parc. All rights reserved.
            </p>
            <div className="ml-0 mt-4 md:ml-6 md:mt-0 flex justify-center md:justify-start space-x-4 text-sm">
              <Link href="/legal/privacy-policy" className="text-eucalyptus-100 hover:text-white">
                Privacy
              </Link>
              <Link href="/legal/terms-of-service" className="text-eucalyptus-100 hover:text-white">
                Terms
              </Link>
            </div>
          </div>
          <div className="flex justify-center mt-4 md:mt-0 md:order-2">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-eucalyptus-100 hover:text-white mx-2 transition-colors"
                aria-label={`${item.name} social link`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Acknowledgement */}
      <div className="bg-charcoal-500 text-charcoal-200">
        <div className="mx-auto max-w-7xl px-6 py-8 md:flex md:items-center md:justify-between lg:px-8">
          <div className="md:flex md:items-center md:order-1">
            <p className="text-center text-sm md:text-left">
              Carinya Parc acknowledges the Traditional Owners and Custodians of Country across
              Australia. We recognise their enduring connection to land, waterways and community. We
              pay our respects to Elders past, present and emerging, and celebrate the enduring
              cultures, knowledge and resilience of Aboriginal and Torres Strait Islander peoples.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
