'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
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
    <div className="min-h-screen bg-cream py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-display text-5xl md:text-6xl text-charcoal mb-6">
            Lookbook
          </h1>
          <p className="font-body text-xl text-warm-gray max-w-3xl mx-auto">
            Browse my collection of styled looks for every season and occasion. 
            Click any look for styling notes and shop the pieces.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Category Filter */}
          <div className="w-full md:w-auto">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-charcoal text-cream'
                      : 'bg-sand text-warm-gray hover:bg-taupe hover:text-charcoal'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <span className="text-warm-gray text-sm">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-full bg-sand text-charcoal border-none focus:ring-2 focus:ring-rose outline-none"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <p className="text-warm-gray mb-8">
          Showing {filteredLooks.length} {filteredLooks.length === 1 ? 'look' : 'looks'}
        </p>

        {/* Looks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLooks.map((look, index) => (
            <Link
              key={look.slug}
              href={`/looks/${look.slug}`}
              className={`group animate-scale-in stagger-${(index % 6) + 1}`}
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-sand">
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="inline-block px-3 py-1 bg-rose rounded-full text-sm">
                      {look.category}
                    </span>
                    {look.season && look.season !== look.category && (
                      <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm">
                        {look.season}
                      </span>
                    )}
                  </div>
                  <p className="text-sm opacity-90">{look.caption}</p>
                </div>
              </div>
              <h3 className="font-display text-2xl text-charcoal mb-2 group-hover:text-rose transition-colors">
                {look.title}
              </h3>
              <p className="font-body text-warm-gray text-sm">
                {new Date(look.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredLooks.length === 0 && (
          <div className="text-center py-20">
            <p className="font-body text-xl text-warm-gray mb-6">
              No looks found in this category yet.
            </p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="px-6 py-3 bg-charcoal text-cream rounded-full hover:bg-rose transition-all"
            >
              View All Looks
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
