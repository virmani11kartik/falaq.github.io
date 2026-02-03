import Link from 'next/link';
import Image from 'next/image';
import { getAllLooks, getAllBlogPosts } from '@/lib/content';

export default function Home() {
  const looks = getAllLooks().slice(0, 6);
  const blogPosts = getAllBlogPosts().slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* <div className="absolute inset-0">
        <img 
          src="/images/hero/profile.jpg" 
          alt="Fashion with Falaq" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/10"></div>
        </div> */}
        <div className="absolute inset-0 bg-gradient-to-br from-sand/30 to-rose/20"></div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-charcoal mb-6 stagger-1 animate-slide-up">
            Fashion with Falaq
          </h1>
          <p className="font-body text-xl md:text-2xl text-warm-gray max-w-2xl mx-auto mb-8 stagger-2 animate-slide-up">
            Your guide to confident, personal style. Discover seasonal looks, styling tips, and fashion inspiration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center stagger-3 animate-slide-up">
            <Link
              href="/looks"
              className="px-8 py-4 bg-charcoal text-cream rounded-full hover:bg-rose hover:scale-105 transition-all font-medium"
            >
              Explore Looks
            </Link>
            <Link
              href="/blog"
              className="px-8 py-4 border-2 border-charcoal text-charcoal rounded-full hover:bg-charcoal hover:text-cream transition-all font-medium"
            >
              Read the Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Looks */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
              Latest Looks
            </h2>
            <p className="font-body text-lg text-warm-gray max-w-2xl mx-auto">
              Fresh outfit inspiration for every season and occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {looks.map((look, index) => (
              <Link
                key={look.slug}
                href={`/looks/${look.slug}`}
                className={`group animate-scale-in stagger-${index + 1}`}
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-sand">
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-block px-3 py-1 bg-rose rounded-full text-sm mb-2">
                      {look.category}
                    </span>
                  </div>
                </div>
                <h3 className="font-display text-2xl text-charcoal mb-2 group-hover:text-rose transition-colors">
                  {look.title}
                </h3>
                <p className="font-body text-warm-gray line-clamp-2">
                  {look.caption}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/looks"
              className="inline-block px-8 py-3 border-2 border-charcoal text-charcoal rounded-full hover:bg-charcoal hover:text-cream transition-all font-medium"
            >
              View All Looks
            </Link>
          </div>
        </div>
      </section>

      {/* About CTA */}
      <section className="py-20 px-4 bg-sand">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-6">
            Hi, I'm Falaq
          </h2>
          <p className="font-body text-lg text-warm-gray mb-4 leading-relaxed">
            I'm a fashion consultant and personal stylist on a mission to help you discover 
            your unique style. Through this blog, I share outfit inspiration, styling tips, 
            and honest fashion advice that actually works for real life.
          </p>
          <p className="font-body text-lg text-warm-gray mb-8 leading-relaxed">
            Whether you're looking for seasonal outfit ideas, help transitioning your wardrobe, 
            or just some fashion inspiration, you're in the right place.
          </p>
          <Link
            href="/about"
            className="inline-block px-8 py-3 bg-charcoal text-cream rounded-full hover:bg-rose hover:scale-105 transition-all font-medium"
          >
            Get to Know Me
          </Link>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
              From the Blog
            </h2>
            <p className="font-body text-lg text-warm-gray max-w-2xl mx-auto">
              Fashion tips, style guides, and honest advice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`group animate-scale-in stagger-${index + 1}`}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-sand">
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <span className="inline-block px-3 py-1 bg-sand rounded-full text-sm text-warm-gray mb-3">
                  {post.category}
                </span>
                <h3 className="font-display text-2xl text-charcoal mb-3 group-hover:text-rose transition-colors">
                  {post.title}
                </h3>
                <p className="font-body text-warm-gray line-clamp-3">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-block px-8 py-3 border-2 border-charcoal text-charcoal rounded-full hover:bg-charcoal hover:text-cream transition-all font-medium"
            >
              Read More Articles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose/20 to-sand/40">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-6">
            Need Personal Style Help?
          </h2>
          <p className="font-body text-lg text-warm-gray mb-8 leading-relaxed">
            I offer personalized styling consultations to help you discover your signature style, 
            build a functional wardrobe, and feel confident in what you wear every day.
          </p>
          <Link
            href="/work-with-me"
            className="inline-block px-8 py-4 bg-charcoal text-cream rounded-full hover:bg-rose hover:scale-105 transition-all font-medium text-lg"
          >
            Work With Me
          </Link>
        </div>
      </section>
    </div>
  );
}
