'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        console.log('Successfully subscribed');
        setStatus('success');
        setEmail('');
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
    <div className="bg-harvest-600 py-12 sm:py-18 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="lg:col-span-7">
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Subscribe to our newsletter
          </h2>
          <p className="mt-4 text-lg text-harvest-100">
            Stay updated with the latest news and events from Carinya Parc.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-md lg:col-span-5 lg:pt-2">
          <div className="flex gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === 'loading'}
              placeholder="Enter your email address"
              autoComplete="email"
              className="min-w-0 flex-auto rounded-md bg-white/10 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/75 focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-harvest-600 shadow-xs hover:bg-harvest-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:opacity-70"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
          
          {status === 'success' && (
            <p className="mt-3 text-sm font-medium text-green-100">
              Thank you for subscribing! You'll receive our updates soon.
            </p>
          )}
          
          {status === 'error' && (
            <p className="mt-3 text-sm font-medium text-red-300">
              {errorMessage}
            </p>
          )}
          
          <p className="mt-4 text-sm/6 text-harvest-100">
            We care about your data. Read our{' '}
            <Link href="/privacy-policy" className="font-semibold hover:text-white">
              privacy&nbsp;policy
            </Link>
            .
          </p>
        </form>
      </div>
    </div>
  );
}
