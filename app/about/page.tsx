import Link from 'next/link';

export const metadata = {
  title: 'About Falaq | Fashion Consultant & Personal Stylist',
  description: 'Meet Falaq, fashion consultant and personal stylist. Learn about my journey in fashion and how I can help you discover your signature style.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* ── Page Header ── */}
      <div className="py-24 px-4 text-center border-b border-sand animate-fade-in">
        <span className="ornament mb-4 inline-flex">About Me</span>
        <h1 className="font-display text-6xl md:text-7xl text-charcoal mt-4 mb-4 leading-none">
          Falaq
        </h1>
        <p className="font-body text-sm tracking-widest uppercase text-warm-gray">
          Fashion Consultant & Personal Stylist
        </p>
      </div>

      {/* ── Profile + Story ── */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Portrait */}
          <div className="lg:col-span-2">
            <div className="relative aspect-[3/4] overflow-hidden animate-scale-in">
              <img
                src="/images/hero/profile2.jpg"
                alt="Falaq"
                className="w-full h-full object-cover"
                style={{ objectPosition: '80% 20%' }}
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-0 mt-8 border border-sand">
              {[
                { value: '200+', label: 'Styled Looks' },
                { value: '50+', label: 'Style Guides' },
                { value: '5+', label: 'Years' },
              ].map((stat, i) => (
                <div key={i} className={`text-center py-6 ${i < 2 ? 'border-r border-sand' : ''}`}>
                  <div className="font-display text-3xl text-charcoal">{stat.value}</div>
                  <div className="font-body text-xs tracking-wider uppercase text-taupe mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-3 animate-slide-up">
            <h2 className="font-display text-4xl text-charcoal mb-2">Hi, I'm Falaq</h2>
            <div className="h-px w-10 bg-rose mb-8" />

            <div className="space-y-5 font-body text-warm-gray leading-relaxed">
              <p>
                I'm a fashion consultant and personal stylist with a passion for helping
                people discover their unique style. Fashion should be fun, empowering, and
                authentically you — not stressful or intimidating.
              </p>
              <p>
                My journey in fashion started with a simple love for clothes and self-expression.
                Over the years, I've learned that great style isn't about following every trend or
                having an endless wardrobe — it's about understanding what works for you and feeling
                confident in what you wear.
              </p>
              <p>
                Through this blog, I share the styling tips, outfit inspiration, and honest fashion
                advice I wish I had when I was starting out. Whether you're looking for seasonal
                outfit ideas, help building a capsule wardrobe, or just some fashion inspiration,
                you're in the right place.
              </p>
              <p>
                When I'm not creating content or styling clients, you'll find me exploring vintage
                shops, testing new outfit combinations, and staying up too late browsing fashion
                archives. I'm constantly learning and evolving, and I love sharing that journey.
              </p>
            </div>

            {/* Philosophy box */}
            <div className="mt-10 p-8 border border-sand bg-sand/20">
              <h3 className="font-display text-2xl text-charcoal mb-1">My Philosophy</h3>
              <div className="h-px w-8 bg-rose mb-5" />
              <ul className="space-y-3 font-body text-warm-gray text-sm leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-rose mt-0.5">—</span>
                  <span><strong className="text-charcoal font-medium">Quality over quantity</strong> — Build a wardrobe you actually love and wear</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-rose mt-0.5">—</span>
                  <span><strong className="text-charcoal font-medium">Personal style over trends</strong> — What makes you feel confident matters most</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-rose mt-0.5">—</span>
                  <span><strong className="text-charcoal font-medium">Sustainable choices</strong> — Fashion that's better for you and the planet</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-rose mt-0.5">—</span>
                  <span><strong className="text-charcoal font-medium">Inclusivity</strong> — Style has no size, age, or budget requirements</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-rose mt-0.5">—</span>
                  <span><strong className="text-charcoal font-medium">Authenticity</strong> — Your wardrobe should reflect who you are</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-4 bg-charcoal">
        <div className="max-w-3xl mx-auto text-center">
          <span className="ornament text-taupe mb-5 inline-flex">Work Together</span>
          <h3 className="font-display text-4xl md:text-5xl text-cream mt-4 mb-4">
            Let's Build Your Dream Wardrobe
          </h3>
          <div className="h-px w-10 bg-rose mx-auto mb-8" />
          <p className="font-body text-sand/70 mb-10 max-w-md mx-auto">
            Interested in personal styling services? I'd love to help you discover your signature style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/work-with-me"
              className="px-9 py-3.5 bg-cream text-charcoal text-xs tracking-widest uppercase hover:bg-rose hover:text-white transition-all duration-300"
            >
              View Services
            </Link>
            <Link
              href="/contact"
              className="px-9 py-3.5 border border-cream/50 text-cream text-xs tracking-widest uppercase hover:bg-cream/10 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
