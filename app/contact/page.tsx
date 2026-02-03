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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-cream py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-display text-5xl md:text-6xl text-charcoal mb-6">
            Get in Touch
          </h1>
          <p className="font-body text-xl text-warm-gray max-w-2xl mx-auto">
            Have a question, collaboration idea, or want to work together? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm animate-scale-in">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-rose/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl text-charcoal mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-warm-gray">
                    Thank you for reaching out. I'll get back to you within 24-48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-charcoal font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-sand border-none focus:ring-2 focus:ring-rose outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-charcoal font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-sand border-none focus:ring-2 focus:ring-rose outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-charcoal font-medium mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-sand border-none focus:ring-2 focus:ring-rose outline-none transition-all"
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
                    <label htmlFor="message" className="block text-charcoal font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-sand border-none focus:ring-2 focus:ring-rose outline-none transition-all resize-none"
                      placeholder="Tell me more about what you're looking for..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-charcoal text-cream rounded-full hover:bg-rose hover:scale-105 transition-all font-medium text-lg"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Email */}
            <div className="bg-gradient-to-br from-sand/50 to-rose/10 rounded-2xl p-6 animate-scale-in stagger-2">
              <h3 className="font-display text-xl text-charcoal mb-3">Email Me</h3>
              <a
                href="mailto:hello@fashionwithfalaq.com"
                className="text-warm-gray hover:text-rose transition-colors break-all"
              >
                hello@fashionwithfalaq.com
              </a>
              <p className="text-sm text-taupe mt-3">
                I typically respond within 24-48 hours
              </p>
            </div>

            {/* Social */}
            <div className="bg-white rounded-2xl p-6 shadow-sm animate-scale-in stagger-3">
              <h3 className="font-display text-xl text-charcoal mb-4">Follow Along</h3>
              <div className="space-y-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-warm-gray hover:text-rose transition-colors"
                >
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @fashionwithfalaq
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-warm-gray hover:text-rose transition-colors"
                >
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                  </svg>
                  @fashionwithfalaq
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-warm-gray hover:text-rose transition-colors"
                >
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                  @fashionwithfalaq
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-sm animate-scale-in stagger-4">
              <h3 className="font-display text-xl text-charcoal mb-3">Business Hours</h3>
              <p className="text-warm-gray text-sm">
                Monday - Friday<br />
                9:00 AM - 6:00 PM EST
              </p>
              <p className="text-taupe text-xs mt-3">
                *Styling sessions available by appointment, including evenings and weekends
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <h2 className="font-display text-3xl text-charcoal text-center mb-12">
            Quick Answers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-sand/50 rounded-2xl p-6">
              <h4 className="font-display text-lg text-charcoal mb-2">
                How quickly will you respond?
              </h4>
              <p className="text-warm-gray text-sm">
                I typically respond to all inquiries within 24-48 hours during business days.
              </p>
            </div>
            <div className="bg-sand/50 rounded-2xl p-6">
              <h4 className="font-display text-lg text-charcoal mb-2">
                Do you offer virtual consultations?
              </h4>
              <p className="text-warm-gray text-sm">
                Yes! All styling services are available both in-person and virtually.
              </p>
            </div>
            <div className="bg-sand/50 rounded-2xl p-6">
              <h4 className="font-display text-lg text-charcoal mb-2">
                What are your rates?
              </h4>
              <p className="text-warm-gray text-sm">
                Visit the <a href="/work-with-me" className="text-rose hover:underline">Work With Me</a> page 
                for detailed pricing on all services.
              </p>
            </div>
            <div className="bg-sand/50 rounded-2xl p-6">
              <h4 className="font-display text-lg text-charcoal mb-2">
                Are you available for collaborations?
              </h4>
              <p className="text-warm-gray text-sm">
                Yes! I'm always open to brand partnerships and creative collaborations. 
                Please include details in your message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
