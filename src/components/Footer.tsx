'use client';

import Link from 'next/link';
import Image from 'next/image';

const navigation = {
  FooterList1: [],
  FooterList2: [
    { name: 'Our Farm', href: '/about' },
    { name: 'Land Regeneration', href: '/regeneration' },
    { name: 'Life on the Land', href: '/blog' },
  ],
  FooterList3: [
    { name: 'Resource A', href: '#' },
    { name: 'Resource B', href: '#' },
  ],
  FooterList4: [
    { name: 'YouTube', href: 'https://www.youtube.com/@carinyaparc' },
    { name: 'Instagram', href: 'https://www.instagram.com/carinyaparc/' },
    { name: 'Facebook', href: 'https://www.facebook.com/carinyaparc/' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-charcoal-600 border-t border-charcoal-200 dark:border-charcoal-200">
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
              <h3 className="text-xl font-semibold text-eucalyptus-600 dark:text-eucalyptus-600">
                Carinya Parc
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 max-w-xs">
              A regenerative farm focused on restoring the land and sustainable agricultural
              practices.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-eucalyptus-600 dark:text-eucalyptus-600">
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.FooterList1.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-600 hover:text-eucalyptus-600 dark:text-gray-300 dark:hover:text-eucalyptus-600"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-eucalyptus-600 dark:text-eucalyptus-600">
                  Explore
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.FooterList2.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-600 hover:text-eucalyptus-600 dark:text-gray-300 dark:hover:text-eucalyptus-600"
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
                <h3 className="text-sm font-semibold text-eucalyptus-600 dark:text-eucalyptus-600">
                  Resources
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.FooterList3.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-600 hover:text-eucalyptus-600 dark:text-gray-300 dark:hover:text-eucalyptus-600"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-eucalyptus-600 dark:text-eucalyptus-600">
                  Community
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.FooterList4.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-600 hover:text-eucalyptus-600 dark:text-gray-300 dark:hover:text-eucalyptus-600"
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
