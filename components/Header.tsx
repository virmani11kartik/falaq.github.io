'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-sand">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="font-display text-2xl md:text-3xl text-charcoal group-hover:text-rose transition-colors">
              Fashion with Falaq
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/looks"
              className="font-body text-warm-gray hover:text-charcoal transition-colors"
            >
              Looks
            </Link>
            <Link
              href="/blog"
              className="font-body text-warm-gray hover:text-charcoal transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="font-body text-warm-gray hover:text-charcoal transition-colors"
            >
              About
            </Link>
            <Link
              href="/work-with-me"
              className="font-body text-warm-gray hover:text-charcoal transition-colors"
            >
              Work With Me
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2 bg-charcoal text-cream rounded-full hover:bg-rose hover:text-white transition-all"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-charcoal"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-sand animate-slide-up">
            <Link
              href="/looks"
              className="block py-3 text-warm-gray hover:text-charcoal transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Looks
            </Link>
            <Link
              href="/blog"
              className="block py-3 text-warm-gray hover:text-charcoal transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="block py-3 text-warm-gray hover:text-charcoal transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/work-with-me"
              className="block py-3 text-warm-gray hover:text-charcoal transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Work With Me
            </Link>
            <Link
              href="/contact"
              className="block py-3 text-charcoal font-medium hover:text-rose transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}