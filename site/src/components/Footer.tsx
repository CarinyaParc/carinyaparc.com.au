'use client';

import Link from 'next/link';
import Image from 'next/image';

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
    { name: 'Our Vision', href: '/about/vision' },
  ],
  FooterList2: [
    { name: 'Farm Tours', href: '/our-farm' },
    { name: 'Regeneration', href: '/regeneration' },
    { name: 'Future Produce', href: '/products' },
  ],
  FooterList3: [
    { name: 'Cook From the Hearth', href: '/recipes' },
    { name: 'Read Out to Pasture', href: '/blog' },
  ],
  FooterList4: [
    { name: 'Get Involved', href: '/get-involved' },
    { name: 'Subscribe', href: '/subscribe' },
    { name: 'YouTube', href: 'https://www.youtube.com/@carinyaparc' },
    { name: 'Instagram', href: 'https://www.instagram.com/carinyaparc/' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-eucalyptus-600">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Carinya Parc"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
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
