'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/looks', label: 'Looks' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/work-with-me', label: 'Work With Me' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/96 backdrop-blur-md border-b border-sand/80 shadow-sm'
          : 'bg-cream/85 backdrop-blur-sm border-b border-sand/40'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="group">
            <span className="font-display text-2xl md:text-3xl text-charcoal tracking-wide group-hover:text-rose transition-colors duration-300">
              Fashion <i>with</i> Falaq
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-9">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link font-body text-xs tracking-widest uppercase text-warm-gray hover:text-charcoal transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-6 py-2.5 border border-charcoal text-charcoal text-xs tracking-widest uppercase hover:bg-charcoal hover:text-cream transition-all duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-charcoal"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
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
          <div className="md:hidden py-6 border-t border-sand animate-slide-up space-y-1">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 text-xs tracking-widest uppercase text-warm-gray hover:text-charcoal transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block py-3 text-xs tracking-widest uppercase text-charcoal font-medium hover:text-rose transition-colors"
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
