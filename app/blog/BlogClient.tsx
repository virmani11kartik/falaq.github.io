'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import type { BlogPost } from '@/lib/content';

interface BlogClientProps {
  posts: BlogPost[];
  categories: string[];
}

export default function BlogClient({ posts, categories }: BlogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = useMemo(() => {
    return selectedCategory === 'All'
      ? posts
      : posts.filter(post => post.category === selectedCategory);
  }, [posts, selectedCategory]);

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="py-24 px-4 text-center border-b border-sand animate-fade-in">
        <span className="ornament mb-4 inline-flex">The Archive</span>
        <h1 className="font-display text-6xl md:text-7xl text-charcoal mt-4 mb-4 leading-none">
          The Blog
        </h1>
        <p className="font-body text-sm tracking-wide text-warm-gray max-w-xl mx-auto">
          Fashion tips, style guides, and honest advice to help you build a wardrobe you love.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="mb-10 flex justify-center">
          <div className="flex flex-wrap gap-2 justify-center">
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
        </div>

        {/* Results count */}
        <p className="text-warm-gray text-xs tracking-widest uppercase mb-10 text-center">
          {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
        </p>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {filteredPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`group animate-scale-in stagger-${(index % 6) + 1}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-5 bg-sand">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              </div>
              <span className="inline-block px-3 py-1 bg-sand text-warm-gray text-xs tracking-widest uppercase mb-3">
                {post.category}
              </span>
              <h3 className="font-display text-2xl text-charcoal mb-2 group-hover:text-rose transition-colors duration-300">
                {post.title}
              </h3>
              <p className="font-body text-warm-gray text-sm line-clamp-3 leading-relaxed mb-3">
                {post.excerpt}
              </p>
              <p className="text-taupe text-xs tracking-wider uppercase">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-24">
            <p className="font-display text-3xl text-charcoal mb-4">Nothing here yet.</p>
            <p className="font-body text-warm-gray mb-8 text-sm">Try a different category.</p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="px-8 py-3 border border-charcoal text-charcoal text-xs tracking-widest uppercase hover:bg-charcoal hover:text-cream transition-all duration-300"
            >
              View All Articles
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
