import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/content';

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Fashion with Falaq Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getAllBlogPosts()
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link
          href="/blog"
          className="inline-flex items-center text-warm-gray hover:text-charcoal transition-colors mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        {/* Header */}
        <article className="animate-fade-in">
          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 bg-sand text-charcoal rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>
            <h1 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
              {post.title}
            </h1>
            <p className="text-taupe text-sm">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>

          {/* Cover Image */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-sand mb-12">
            <div className="absolute inset-0 flex items-center justify-center text-warm-gray">
              <p className="text-center px-4">
                {post.title}
                <br />
                <span className="text-sm text-taupe">({post.coverImage})</span>
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

          {/* Author Bio */}
          <div className="mt-16 p-8 bg-gradient-to-br from-sand/50 to-rose/10 rounded-2xl">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-full bg-taupe flex-shrink-0"></div>
              <div>
                <h3 className="font-display text-2xl text-charcoal mb-2">Falaq</h3>
                <p className="text-warm-gray mb-4">
                  Fashion consultant and personal stylist helping people discover their unique style. 
                  When I'm not styling clients or creating content, you'll find me exploring vintage 
                  shops and testing new outfit combinations.
                </p>
                <Link
                  href="/about"
                  className="inline-block text-charcoal hover:text-rose transition-colors font-medium"
                >
                  Learn more about me →
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-20">
            <h2 className="font-display text-3xl text-charcoal mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className={`group animate-scale-in stagger-${index + 1}`}
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-sand">
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <span className="inline-block px-3 py-1 bg-sand rounded-full text-sm text-warm-gray mb-2">
                    {relatedPost.category}
                  </span>
                  <h3 className="font-display text-xl text-charcoal mb-2 group-hover:text-rose transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="font-body text-warm-gray text-sm line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-20 p-8 bg-charcoal text-cream rounded-2xl text-center">
          <h3 className="font-display text-2xl mb-4">Want More Style Tips?</h3>
          <p className="text-sand mb-6">
            Subscribe to get the latest fashion advice and lookbook updates straight to your inbox.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-rose text-white rounded-full hover:bg-white hover:text-charcoal transition-all font-medium"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
