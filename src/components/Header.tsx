'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Leaf } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from '../app/navigation';

interface HeaderProps {
  navigation: NavItem[];
}

export default function Header({ navigation }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);
  
  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="bg-white/90 sticky top-0 z-50 backdrop-blur-sm border-b border-eucalyptus-100">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <Leaf className="h-8 w-8 text-eucalyptus-600" />
            <span className="text-2xl font-bold text-eucalyptus-600">Carinya Parc</span>
          </motion.div>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-eucalyptus-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation
            .filter((item) => item.visible !== false)
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium text-charcoal-500 hover:text-eucalyptus-600 ${
                  pathname === item.href ? 'text-eucalyptus-600' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
        </div>
        <div className="flex items-center justify-end gap-x-6 ml-6">
          <a
            href="#"
            className="rounded-md bg-eucalyptus-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-eucalyptus-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-eucalyptus-600"
          >
            Follow our Journey
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.nav 
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-xs bg-white shadow-lg p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <Leaf className="h-7 w-7 text-eucalyptus-600" />
                  <span className="text-xl font-bold text-eucalyptus-600">Carinya Parc</span>
                </div>
                <button
                  className="p-2 text-charcoal-500 hover:text-eucalyptus-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-1">
                {navigation
                  .filter((item) => item.visible !== false)
                  .map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={`block py-3 px-4 text-lg font-medium rounded-lg transition-colors ${
                          pathname === item.href
                            ? 'bg-eucalyptus-50 text-eucalyptus-600'
                            : 'text-charcoal-500 hover:text-eucalyptus-600 hover:bg-eucalyptus-50'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
              </div>
              
              <div className="mt-10 pt-6 border-t border-gray-200">
                <a
                  href="#"
                  className="block w-full text-center rounded-md bg-eucalyptus-600 py-3 px-4 text-md font-semibold text-white shadow-xs hover:bg-eucalyptus-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-eucalyptus-600"
                >
                  Follow our Journey
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
