'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export interface FormData {
  email: string;
  name: string;
  interests: string;
}

export default function SubscribeForm() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    name: '',
    interests: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        console.log('Successfully subscribed');
        setStatus('success');
        setFormData({ email: '', name: '', interests: '' });
      } else {
        console.error('Subscription failed:', data.error);
        setStatus('error');
        setErrorMessage(data.error || 'Failed to subscribe. Please try again later.');
      }
    } catch (err) {
      console.error('Error:', err);
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="px-6 py-8">
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-charcoal-600">
              Email Address*
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={status === 'loading'}
                placeholder="you@example.com"
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-eucalyptus-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="name" className="block text-sm/6 font-semibold text-charcoal-600">
              Your Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="First & last name"
                autoComplete="name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-charcoal-600 outline-1 -outline-offset-1 outline-charcoal-300 placeholder:text-charcoal-400 focus:outline-2 focus:-outline-offset-2 focus:outline-eucalyptus-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="interests" className="block text-sm/6 font-semibold text-charcoal-600">
              What interests you most about Carinya Parc?
            </label>
            <div className="mt-2.5">
              <select
                name="interests"
                id="interests"
                value={formData.interests}
                onChange={handleInputChange}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-charcoal-600 outline-1 -outline-offset-1 outline-charcoal-300 placeholder:text-charcoal-400 focus:outline-2 focus:-outline-offset-2 focus:outline-eucalyptus-600"
              >
                <option value="">Select your main interest</option>
                <option value="regeneration">Ecological restoration</option>
                <option value="farming">Regenerative farming</option>
                <option value="community">Community involvement</option>
                <option value="produce">Future produce</option>
                <option value="learning">Learning opportunities</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col">
          <button
            type="submit"
            disabled={status === 'loading'}
            className="rounded-md bg-eucalyptus-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-eucalyptus-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-eucalyptus-600 disabled:opacity-70"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe to Our Newsletter'}
          </button>

          {status === 'success' && (
            <p className="mt-3 text-sm font-medium text-eucalyptus-600">
              Thank you for subscribing! You'll receive our updates soon.
            </p>
          )}

          {status === 'error' && (
            <p className="mt-3 text-sm font-medium text-red-600">{errorMessage}</p>
          )}

          <p className="mt-4 text-sm/6 text-gray-500">
            We value your privacy and promise to respect your inbox. Read our{' '}
            <Link
              href="/legal/privacy-policy"
              className="font-semibold text-eucalyptus-600 hover:text-eucalyptus-500"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </form>
  );
}
