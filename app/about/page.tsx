import Link from 'next/link';

export const metadata = {
  title: 'About Falaq | Fashion Consultant & Personal Stylist',
  description: 'Meet Falaq, fashion consultant and personal stylist. Learn about my journey in fashion and how I can help you discover your signature style.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-display text-5xl md:text-6xl text-charcoal mb-6">
            About Me
          </h1>
          <p className="font-body text-xl text-warm-gray">
            Fashion consultant, stylist, and your guide to confident personal style
          </p>
        </div>

        {/* Profile Image */}
        <div className="relative w-64 h-64 mx-auto mb-12 rounded-full bg-sand overflow-hidden animate-scale-in">
          <div className="absolute inset-0 flex items-center justify-center text-warm-gray">
            <p className="text-center">Falaq Profile Photo</p>
          </div>
        </div>

        {/* Content */}
        <div className="prose max-w-none animate-slide-up">
          <div className="space-y-6 text-center md:text-left">
            <p className="font-body text-lg text-warm-gray leading-relaxed">
              Hi, I'm Falaq! I'm a fashion consultant and personal stylist with a passion for helping 
              people discover their unique style. Fashion should be fun, empowering, and authentically you—
              not stressful or intimidating.
            </p>

            <p className="font-body text-lg text-warm-gray leading-relaxed">
              My journey in fashion started with a simple love for clothes and self-expression. Over the 
              years, I've learned that great style isn't about following every trend or having an endless 
              wardrobe—it's about understanding what works for you and feeling confident in what you wear.
            </p>

            <p className="font-body text-lg text-warm-gray leading-relaxed">
              Through this blog, I share the styling tips, outfit inspiration, and honest fashion advice 
              I wish I had when I was starting out. Whether you're looking for seasonal outfit ideas, 
              help building a capsule wardrobe, or just some fashion inspiration, you're in the right place.
            </p>

            <div className="my-12 p-8 bg-gradient-to-br from-rose/10 to-sand/40 rounded-2xl">
              <h2 className="font-display text-3xl text-charcoal mb-4">My Philosophy</h2>
              <p className="font-body text-lg text-warm-gray leading-relaxed">
                Fashion should simplify your life, not complicate it. I believe in:
              </p>
              <ul className="mt-4 space-y-3 text-warm-gray">
                <li>✨ <strong>Quality over quantity</strong> – Build a wardrobe you actually love and wear</li>
                <li>✨ <strong>Personal style over trends</strong> – What makes you feel confident matters most</li>
                <li>✨ <strong>Sustainable choices</strong> – Fashion that's better for you and the planet</li>
                <li>✨ <strong>Inclusivity</strong> – Style has no size, age, or budget requirements</li>
                <li>✨ <strong>Authenticity</strong> – Your wardrobe should reflect who you are</li>
              </ul>
            </div>

            <p className="font-body text-lg text-warm-gray leading-relaxed">
              When I'm not creating content or styling clients, you'll find me exploring vintage shops, 
              testing new outfit combinations, and staying up too late browsing fashion archives. I'm 
              constantly learning and evolving my own style, and I love sharing that journey with you.
            </p>

            <p className="font-body text-lg text-warm-gray leading-relaxed">
              This blog is more than just outfit photos—it's a space for real conversations about fashion, 
              practical styling advice, and building confidence through personal style. I'm so glad you're here!
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h3 className="font-display text-3xl text-charcoal mb-6">
              Let's Work Together
            </h3>
            <p className="font-body text-lg text-warm-gray mb-8">
              Interested in personal styling services? I'd love to help you discover your signature style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/work-with-me"
                className="px-8 py-4 bg-charcoal text-cream rounded-full hover:bg-rose hover:scale-105 transition-all font-medium"
              >
                View Services
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-charcoal text-charcoal rounded-full hover:bg-charcoal hover:text-cream transition-all font-medium"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Social Proof / Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-sand rounded-2xl">
              <div className="font-display text-4xl text-charcoal mb-2">200+</div>
              <div className="text-warm-gray">Styled Looks</div>
            </div>
            <div className="text-center p-6 bg-sand rounded-2xl">
              <div className="font-display text-4xl text-charcoal mb-2">50+</div>
              <div className="text-warm-gray">Style Guides</div>
            </div>
            <div className="text-center p-6 bg-sand rounded-2xl">
              <div className="font-display text-4xl text-charcoal mb-2">5+</div>
              <div className="text-warm-gray">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
