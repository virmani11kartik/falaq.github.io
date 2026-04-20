'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Look } from '@/lib/content';

interface LooksClientProps {
  looks: Look[];
  categories: string[];
}

export default function LooksClient({ looks, categories }: LooksClientProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');

  const filteredLooks = useMemo(() => {
    let filtered = selectedCategory === 'All'
      ? looks
      : looks.filter(look => look.category === selectedCategory || look.season === selectedCategory);

    if (sortBy === 'oldest') {
      filtered = [...filtered].reverse();
    }

    return filtered;
  }, [looks, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="py-24 px-4 text-center border-b border-sand animate-fade-in">
        <span className="ornament mb-4 inline-flex">Browse</span>
        <h1 className="font-display text-6xl md:text-7xl text-charcoal mt-4 mb-4 leading-none">
          Look Book
        </h1>
        <p className="font-body text-sm tracking-wide text-warm-gray max-w-xl mx-auto">
          Styled looks for every season and occasion — click any look for notes and shop the pieces.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filters */}
        <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 text-xs tracking-widest uppercase font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-charcoal text-cream'
                    : 'bg-transparent border border-sand text-warm-gray hover:border-charcoal hover:text-charcoal'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-warm-gray text-xs tracking-widest uppercase">Sort</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-transparent border border-sand text-charcoal text-sm focus:ring-0 focus:border-charcoal outline-none transition-colors"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>

        {/* Results count */}
        <p className="text-warm-gray text-xs tracking-widest uppercase mb-10">
          {filteredLooks.length} {filteredLooks.length === 1 ? 'look' : 'looks'}
        </p>

        {/* Looks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {filteredLooks.map((look, index) => (
            <Link key={look.slug} href={`/looks/${look.slug}`} className="group">
              <div className="relative aspect-[3/4] overflow-hidden mb-5 bg-sand">
                <Image
                  src={look.coverImage}
                  alt={look.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 6}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/65 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="px-3 py-1 bg-rose/90 text-white text-xs tracking-widest uppercase">
                      {look.category}
                    </span>
                    {look.season && look.season !== look.category && (
                      <span className="px-3 py-1 bg-white/20 text-white text-xs tracking-widest uppercase">
                        {look.season}
                      </span>
                    )}
                  </div>
                  <p className="text-cream/90 text-sm leading-snug">{look.caption}</p>
                </div>
              </div>
              <h3 className="font-display text-2xl text-charcoal mb-1.5 group-hover:text-rose transition-colors duration-300">
                {look.title}
              </h3>
              <p className="font-body text-taupe text-xs tracking-wider uppercase">
                {new Date(look.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                })}
              </p>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredLooks.length === 0 && (
          <div className="text-center py-24">
            <p className="font-display text-3xl text-charcoal mb-4">No looks here yet.</p>
            <p className="font-body text-warm-gray mb-8 text-sm">Try a different category.</p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="px-8 py-3 border border-charcoal text-charcoal text-xs tracking-widest uppercase hover:bg-charcoal hover:text-cream transition-all duration-300"
            >
              View All Looks
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
