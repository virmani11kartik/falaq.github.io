import Link from 'next/link';

export const metadata = {
  title: 'Work With Me | Fashion Consulting Services',
  description: 'Personal styling and fashion consulting services to help you build a wardrobe you love and feel confident every day.',
};

const services = [
  {
    name: 'Personal Styling Session',
    duration: '2 hours',
    price: '$300',
    description:
      'One-on-one styling consultation to discover your personal style, assess your current wardrobe, and create a personalized style guide.',
    includes: [
      'Style assessment questionnaire',
      'Body shape and color analysis',
      'Wardrobe audit and organization tips',
      'Personalized lookbook with outfit ideas',
      'Shopping recommendations',
    ],
  },
  {
    name: 'Wardrobe Refresh',
    duration: '4 hours',
    price: '$550',
    description:
      'Comprehensive wardrobe overhaul to help you rediscover pieces you love, identify gaps, and create a cohesive, functional wardrobe.',
    includes: [
      'Complete closet audit',
      'Styling session with existing pieces',
      '10+ new outfit combinations',
      'Detailed shopping list with budget options',
      'Seasonal transition guide',
      '30 days of email support',
    ],
  },
  {
    name: 'Personal Shopping Experience',
    duration: '3 hours',
    price: '$400',
    description:
      'Curated shopping trip or virtual session to find pieces that fit your style, lifestyle, and budget perfectly.',
    includes: [
      'Pre-shopping consultation',
      'Curated store selection or online picks',
      'In-person or virtual shopping guidance',
      'Try-on session with honest feedback',
      'Alterations advice',
    ],
  },
  {
    name: 'Special Event Styling',
    duration: 'Flexible',
    price: 'From $250',
    description:
      'Look your best for weddings, parties, photoshoots, or any special occasion with professional styling assistance.',
    includes: [
      'Event style consultation',
      'Outfit selection and accessories',
      'Multiple look options',
      'Day-of styling support (if needed)',
      'Post-event photo review',
    ],
  },
];

const steps = [
  { step: '01', title: 'Contact', desc: 'Reach out via the contact form or email' },
  { step: '02', title: 'Consult', desc: 'Free 15-min call to discuss your needs and goals' },
  { step: '03', title: 'Schedule', desc: 'Book your session at a time that works for you' },
  { step: '04', title: 'Transform', desc: 'Your styling session plus ongoing support' },
];

export default function WorkWithMePage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* ── Header ── */}
      <div className="py-24 px-4 text-center border-b border-sand animate-fade-in">
        <span className="ornament mb-4 inline-flex">Services</span>
        <h1 className="font-display text-6xl md:text-7xl text-charcoal mt-4 mb-4 leading-none">
          Work With Me
        </h1>
        <p className="font-body text-sm tracking-wide text-warm-gray max-w-xl mx-auto">
          Personal styling services designed to help you feel confident, look amazing,
          and simplify your daily routine.
        </p>
      </div>

      {/* ── Why Work With Me ── */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="ornament mb-4 inline-flex">My Approach</span>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal mt-4 mb-4 leading-tight">
              Style that works for your life
            </h2>
            <div className="h-px w-10 bg-rose mb-6" />
            <p className="font-body text-warm-gray leading-relaxed mb-4">
              I believe style should make your life easier, not harder. My approach is
              personalized, practical, and judgment-free. Whether you're starting from
              scratch or refining an existing wardrobe, I'll help you create a style
              that feels authentically you.
            </p>
            <p className="font-body text-warm-gray leading-relaxed">
              All services include follow-up support because building great style is
              a journey. I'm here to support you every step of the way.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px bg-sand">
            {[
              { value: '200+', label: 'Clients Styled' },
              { value: '5+', label: 'Years Experience' },
              { value: '100%', label: 'Virtual Friendly' },
              { value: '★★★★★', label: 'Client Rating' },
            ].map((stat, i) => (
              <div key={i} className="bg-cream py-10 px-6 text-center">
                <div className="font-display text-3xl text-charcoal mb-1">{stat.value}</div>
                <div className="font-body text-xs tracking-widest uppercase text-taupe">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 px-4 bg-sand/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="ornament mb-4 inline-flex">Offerings</span>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal mt-4">Services</h2>
          </div>

          <div className="space-y-0 border border-sand">
            {services.map((service, index) => (
              <div
                key={index}
                className={`p-8 md:p-10 bg-cream ${index < services.length - 1 ? 'border-b border-sand' : ''}`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                  <div>
                    <h3 className="font-display text-3xl text-charcoal mb-3">{service.name}</h3>
                    <div className="flex flex-wrap gap-3 text-xs">
                      <span className="px-3 py-1.5 border border-sand text-warm-gray tracking-widest uppercase">
                        {service.duration}
                      </span>
                      <span className="px-3 py-1.5 bg-rose/15 text-rose tracking-widest uppercase font-medium">
                        {service.price}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="font-body text-warm-gray leading-relaxed mb-6">{service.description}</p>
                <div>
                  <p className="font-body text-xs tracking-widest uppercase text-charcoal mb-3 font-medium">
                    What's Included
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {service.includes.map((item, i) => (
                      <li key={i} className="flex items-start text-warm-gray text-sm gap-3">
                        <span className="text-rose mt-0.5 flex-shrink-0">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="ornament mb-4 inline-flex">The Process</span>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal mt-4">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-sand">
            {steps.map((item, index) => (
              <div
                key={index}
                className={`p-8 text-center bg-cream ${index < steps.length - 1 ? 'border-b md:border-b-0 md:border-r border-sand' : ''}`}
              >
                <div className="font-display text-4xl text-rose/60 mb-4">{item.step}</div>
                <h4 className="font-display text-xl text-charcoal mb-2">{item.title}</h4>
                <p className="text-warm-gray text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 px-4 bg-sand/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="ornament mb-4 inline-flex">Client Love</span>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal mt-4">What Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                quote:
                  '"Falaq completely transformed how I approach getting dressed. Her styling session gave me confidence I didn\'t know I was missing. Now I actually love my wardrobe!"',
                name: 'Sarah M.',
              },
              {
                quote:
                  '"The wardrobe refresh was worth every penny. Falaq helped me see potential in pieces I thought I\'d never wear again. Her advice is practical, honest, and genuinely helpful."',
                name: 'Jessica L.',
              },
            ].map((t, i) => (
              <div key={i} className="bg-cream p-8 border border-sand">
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-display text-lg text-charcoal italic leading-relaxed mb-5">{t.quote}</p>
                <p className="font-body text-xs tracking-widest uppercase text-taupe">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 px-4 bg-charcoal">
        <div className="max-w-3xl mx-auto text-center">
          <span className="ornament text-taupe mb-5 inline-flex">Get Started</span>
          <h2 className="font-display text-5xl md:text-6xl text-cream mt-4 mb-4 leading-tight">
            Ready to Transform Your Style?
          </h2>
          <div className="h-px w-10 bg-rose mx-auto mb-8" />
          <p className="font-body text-sand/70 mb-10 max-w-md mx-auto">
            Let's chat about how I can help you feel confident and look amazing every day.
            Book a free 15-minute consultation to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-4 bg-cream text-charcoal text-xs tracking-widest uppercase hover:bg-rose hover:text-white transition-all duration-300"
            >
              Book a Consultation
            </Link>
            <Link
              href="/looks"
              className="px-10 py-4 border border-cream/40 text-cream text-xs tracking-widest uppercase hover:bg-cream/10 transition-all duration-300"
            >
              Browse the Lookbook
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
