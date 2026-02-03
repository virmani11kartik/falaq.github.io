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
    <div className="min-h-screen bg-cream py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-display text-5xl md:text-6xl text-charcoal mb-6">
            The Blog
          </h1>
          <p className="font-body text-xl text-warm-gray max-w-3xl mx-auto">
            Fashion tips, style guides, and honest advice to help you build a wardrobe you love.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex justify-center">
          <div className="flex flex-wrap gap-3 justify-center">
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

        {/* Results Count */}
        <p className="text-warm-gray mb-8">
          {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
        </p>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`group animate-scale-in stagger-${(index % 6) + 1}`}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-sand">
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center text-warm-gray">
                  <p className="text-center px-4">
                    {post.title}
                    <br />
                    <span className="text-sm text-taupe">({post.coverImage})</span>
                  </p>
                </div>
              </div>
              <span className="inline-block px-3 py-1 bg-sand rounded-full text-sm text-warm-gray mb-3">
                {post.category}
              </span>
              <h3 className="font-display text-2xl text-charcoal mb-3 group-hover:text-rose transition-colors">
                {post.title}
              </h3>
              <p className="font-body text-warm-gray line-clamp-3 mb-3">
                {post.excerpt}
              </p>
              <p className="text-taupe text-sm">
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
          <div className="text-center py-20">
            <p className="font-body text-xl text-warm-gray mb-6">
              No articles found in this category yet.
            </p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="px-6 py-3 bg-charcoal text-cream rounded-full hover:bg-rose transition-all"
            >
              View All Articles
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
