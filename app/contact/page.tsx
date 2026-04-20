'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('https://formspree.io/f/xeelglrv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="py-24 px-4 text-center border-b border-sand animate-fade-in">
        <span className="ornament mb-4 inline-flex">Say Hello</span>
        <h1 className="font-display text-6xl md:text-7xl text-charcoal mt-4 mb-4 leading-none">
          Get in Touch
        </h1>
        <p className="font-body text-sm tracking-wide text-warm-gray max-w-xl mx-auto">
          Have a question, collaboration idea, or want to work together? I'd love to hear from you.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-2 animate-scale-in">
            {submitted ? (
              <div className="h-full flex items-center justify-center py-20 border border-sand">
                <div className="text-center px-8">
                  <div className="w-14 h-14 border border-rose flex items-center justify-center mx-auto mb-6">
                    <svg className="w-6 h-6 text-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-3xl text-charcoal mb-3">Message Sent</h3>
                  <p className="text-warm-gray text-sm">
                    Thank you for reaching out. I'll get back to you within 24–48 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs tracking-widest uppercase text-charcoal mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-transparent border border-sand text-charcoal placeholder-taupe focus:border-charcoal focus:ring-0 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs tracking-widest uppercase text-charcoal mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-transparent border border-sand text-charcoal placeholder-taupe focus:border-charcoal focus:ring-0 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs tracking-widest uppercase text-charcoal mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-sand text-charcoal focus:border-charcoal focus:ring-0 outline-none transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="styling-inquiry">Styling Services Inquiry</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="press">Press / Media</option>
                    <option value="question">General Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs tracking-widest uppercase text-charcoal mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={7}
                    placeholder="Tell me more about what you're looking for..."
                    className="w-full px-4 py-3 bg-transparent border border-sand text-charcoal placeholder-taupe focus:border-charcoal focus:ring-0 outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-8 py-4 bg-charcoal text-cream text-xs tracking-widest uppercase hover:bg-rose transition-all duration-300 disabled:opacity-60"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="border border-sand p-6 animate-scale-in stagger-2">
              <h3 className="font-display text-xl text-charcoal mb-1">Email Me</h3>
              <div className="h-px w-6 bg-rose mb-4 mt-2" />
              <a
                href="mailto:hello@fashionwithfalaq.com"
                className="text-warm-gray hover:text-rose transition-colors text-sm break-all"
              >
                hello@fashionwithfalaq.com
              </a>
              <p className="text-xs text-taupe mt-3 tracking-wide">
                Response within 24–48 hours
              </p>
            </div>

            <div className="border border-sand p-6 animate-scale-in stagger-3">
              <h3 className="font-display text-xl text-charcoal mb-1">Follow Along</h3>
              <div className="h-px w-6 bg-rose mb-4 mt-2" />
              <div className="space-y-3">
                {[
                  {
                    href: 'https://instagram.com',
                    label: 'Instagram',
                    handle: '@fashionwithfalaq',
                    icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
                  },
                  {
                    href: 'https://pin.it/2AQwPHGcQ',
                    label: 'Pinterest',
                    handle: '@fashionwithfalaq',
                    icon: 'M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z',
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-warm-gray hover:text-rose transition-colors text-sm gap-3"
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                    {social.handle}
                  </a>
                ))}
              </div>
            </div>

            <div className="border border-sand p-6 animate-scale-in stagger-4">
              <h3 className="font-display text-xl text-charcoal mb-1">Business Hours</h3>
              <div className="h-px w-6 bg-rose mb-4 mt-2" />
              <p className="text-warm-gray text-sm leading-relaxed">
                Monday – Friday<br />9:00 AM – 6:00 PM EST
              </p>
              <p className="text-taupe text-xs mt-3">
                Styling sessions available by appointment, including evenings and weekends.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-24">
          <div className="text-center mb-14">
            <span className="ornament mb-4 inline-flex">FAQ</span>
            <h2 className="font-display text-4xl text-charcoal mt-4">Quick Answers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-sand">
            {[
              {
                q: 'How quickly will you respond?',
                a: 'I typically respond to all inquiries within 24–48 hours during business days.',
              },
              {
                q: 'Do you offer virtual consultations?',
                a: 'Yes! All styling services are available both in-person and virtually.',
              },
              {
                q: 'What are your rates?',
                a: 'Visit the Work With Me page for detailed pricing on all services.',
              },
              {
                q: 'Are you available for collaborations?',
                a: "Yes! I'm always open to brand partnerships and creative collaborations. Please include details in your message.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-cream p-8">
                <h4 className="font-display text-xl text-charcoal mb-3">{faq.q}</h4>
                <p className="text-warm-gray text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
