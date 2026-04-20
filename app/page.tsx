import Link from 'next/link';
import { getAllLooks, getAllBlogPosts } from '@/lib/content';

export default function Home() {
  const looks = getAllLooks().slice(0, 6);
  const blogPosts = getAllBlogPosts().slice(0, 3);

  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative h-[75vh] md:h-[88vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero/profile.jpg"
            alt="Fashion with Falaq"
            className="w-full h-full object-cover object-[80%_40%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/10" />
        </div>

        <div className="relative z-10 text-center px-4 animate-fade-in">
          <span className="ornament text-cream/70 mb-8 inline-flex">The Lookbook</span>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-cream mb-5 leading-none tracking-wide stagger-1 animate-slide-up">
            Fashion <i>with</i> Falaq
          </h1>
          <p className="font-body text-base md:text-lg text-cream/80 max-w-xl mx-auto mb-10 tracking-wide stagger-2 animate-slide-up">
            Your guide to confident, personal style — seasonal looks, styling tips, and honest fashion advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center stagger-3 animate-slide-up">
            <Link
              href="/looks"
              className="px-9 py-3.5 bg-cream text-charcoal text-xs tracking-widest uppercase hover:bg-rose hover:text-white transition-all duration-300"
            >
              Explore Looks
            </Link>
            <Link
              href="/blog"
              className="px-9 py-3.5 border border-cream/80 text-cream text-xs tracking-widest uppercase hover:bg-cream/10 transition-all duration-300"
            >
              Read the Blog
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/50 animate-fade-in stagger-6">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── Latest Looks ── */}
      <section className="py-24 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="ornament mb-4 inline-flex">The Lookbook</span>
            <h2 className="font-display text-5xl md:text-6xl text-charcoal mt-3">
              Latest Looks
            </h2>
            <p className="font-body text-sm tracking-wide text-warm-gray mt-4 max-w-lg mx-auto">
              Fresh outfit inspiration for every season and occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {looks.map((look, index) => (
              <Link
                key={look.slug}
                href={`/looks/${look.slug}`}
                className={`group animate-scale-in stagger-${index + 1}`}
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-5 bg-sand">
                  <img
                    src={look.coverImage}
                    alt={look.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                    <span className="inline-block px-3 py-1 bg-rose/90 text-white text-xs tracking-widest uppercase">
                      {look.category}
                    </span>
                  </div>
                </div>
                <h3 className="font-display text-2xl text-charcoal mb-1.5 group-hover:text-rose transition-colors duration-300">
                  {look.title}
                </h3>
                <p className="font-body text-warm-gray text-sm line-clamp-2 leading-relaxed">
                  {look.caption}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/looks"
              className="inline-block px-10 py-3.5 border border-charcoal text-charcoal text-xs tracking-widest uppercase hover:bg-charcoal hover:text-cream transition-all duration-300"
            >
              View All Looks
            </Link>
          </div>
        </div>
      </section>

      {/* ── About (editorial split layout) ── */}
      <section className="py-24 px-4 bg-sand/40">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Portrait */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src="/images/hero/profile2.jpg"
              alt="Falaq"
              className="w-full h-full object-cover object-[80%_40%] transform scale-[0.55] origin-top"
              style={{ transform: 'scale(1.0)', objectPosition: '80% 20%' }}
            />
          </div>

          {/* Text */}
          <div>
            <span className="ornament mb-4 inline-flex">Meet Falaq</span>
            <h2 className="font-display text-5xl md:text-6xl text-charcoal mt-4 mb-6 leading-tight">
              Hi, I'm Falaq
            </h2>
            <div className="h-px w-10 bg-rose mb-8" />
            <p className="font-body text-warm-gray leading-relaxed mb-5">
              I'm a fashion consultant and personal stylist on a mission to help you discover
              your unique style. Fashion should be fun, empowering, and authentically you —
              not stressful or intimidating.
            </p>
            <p className="font-body text-warm-gray leading-relaxed mb-10">
              Whether you're looking for seasonal outfit ideas, help transitioning your wardrobe,
              or just some fashion inspiration, you're in the right place.
            </p>
            <Link
              href="/about"
              className="inline-block px-9 py-3.5 bg-charcoal text-cream text-xs tracking-widest uppercase hover:bg-rose transition-all duration-300"
            >
              Get to Know Me
            </Link>
          </div>
        </div>
      </section>

      {/* ── From the Blog ── */}
      <section className="py-24 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="ornament mb-4 inline-flex">The Archive</span>
            <h2 className="font-display text-5xl md:text-6xl text-charcoal mt-3">
              From the Blog
            </h2>
            <p className="font-body text-sm tracking-wide text-warm-gray mt-4 max-w-lg mx-auto">
              Fashion tips, style guides, and honest advice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            {blogPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`group animate-scale-in stagger-${index + 1}`}
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
                <p className="font-body text-warm-gray text-sm line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/blog"
              className="inline-block px-10 py-3.5 border border-charcoal text-charcoal text-xs tracking-widest uppercase hover:bg-charcoal hover:text-cream transition-all duration-300"
            >
              Read More Articles
            </Link>
          </div>
        </div>
      </section>

      {/* ── Services CTA ── */}
      <section className="py-28 px-4 bg-charcoal">
        <div className="max-w-3xl mx-auto text-center">
          <span className="ornament text-taupe mb-6 inline-flex">Services</span>
          <h2 className="font-display text-5xl md:text-6xl text-cream mt-4 mb-6 leading-tight">
            Need Personal Style Help?
          </h2>
          <div className="h-px w-10 bg-rose mx-auto mb-8" />
          <p className="font-body text-sand/70 mb-10 leading-relaxed max-w-xl mx-auto">
            Personalized styling consultations to help you discover your signature style,
            build a functional wardrobe, and feel confident every day.
          </p>
          <Link
            href="/work-with-me"
            className="inline-block px-10 py-4 border border-cream/60 text-cream text-xs tracking-widest uppercase hover:bg-cream hover:text-charcoal transition-all duration-300"
          >
            Work With Me
          </Link>
        </div>
      </section>
    </div>
  );
}
