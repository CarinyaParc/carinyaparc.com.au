'use client';

import Link from 'next/link';

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
    { name: 'The Property', href: '/about/property' },
  ],
  FooterList2: [
    { name: 'Regeneration Project', href: '/regenerate' },
    { name: 'Future Produce', href: '/products' },
  ],
  FooterList3: [{ name: 'Read Life on Pasture', href: '/blog' }],
  FooterList4: [{ name: 'Subscribe', href: '/subscribe' }],
};

export default function Footer() {
  return (
    <footer className="bg-eucalyptus-600">
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
    </footer>
  );
}
