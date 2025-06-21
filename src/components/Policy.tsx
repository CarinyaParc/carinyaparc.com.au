'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CookiePolicy() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (cookieConsent) {
      setIsVisible(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6 z-50">
      <div className="pointer-events-auto ml-auto max-w-xl rounded-xl bg-white p-6 shadow-lg ring-1 ring-gray-900/10">
        <p className="text-sm/6 text-charcoal-600">
          This website uses cookies to supplement a balanced diet and provide a much deserved reward
          to the senses after consuming bland but nutritious meals. Accepting our cookies is
          optional but recommended, as they are delicious. See our{' '}
          <Link href="/privacy-policy" className="font-semibold text-eucalyptus-600">
            cookie policy
          </Link>
          .
        </p>
        <div className="mt-4 flex items-center gap-x-5">
          <button
            type="button"
            onClick={handleAccept}
            className="rounded-md bg-charcoal-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-charcoal-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal-600"
          >
            Accept all
          </button>
          <button
            type="button"
            onClick={handleReject}
            className="text-sm/6 font-semibold text-charcoal-600"
          >
            Reject all
          </button>
        </div>
      </div>
    </div>
  );
}
