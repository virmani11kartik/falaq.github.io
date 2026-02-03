export const metadata = {
  title: 'Privacy Policy & Disclaimer | Fashion with Falaq',
  description: 'Privacy policy, terms of use, and affiliate disclosure for Fashion with Falaq.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cream py-20 px-4">
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h1 className="font-display text-5xl text-charcoal mb-8">
          Privacy Policy & Disclaimer
        </h1>
        
        <p className="text-warm-gray">
          Last updated: February 2024
        </p>

        <section className="mt-12">
          <h2 className="font-display text-3xl text-charcoal">Privacy Policy</h2>
          
          <h3 className="font-display text-2xl text-charcoal">Information We Collect</h3>
          <p className="text-warm-gray">
            When you contact us through the contact form or subscribe to our newsletter, we collect 
            your name and email address. This information is used solely to respond to your inquiries 
            and provide you with requested content.
          </p>

          <h3 className="font-display text-2xl text-charcoal">How We Use Your Information</h3>
          <p className="text-warm-gray">
            Your personal information is used to:
          </p>
          <ul className="text-warm-gray">
            <li>Respond to your inquiries and provide customer service</li>
            <li>Send you newsletters and updates (if you've subscribed)</li>
            <li>Improve our website and content</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h3 className="font-display text-2xl text-charcoal">Cookies and Analytics</h3>
          <p className="text-warm-gray">
            We use cookies and similar technologies to improve your browsing experience and analyze 
            website traffic. You can control cookies through your browser settings.
          </p>

          <h3 className="font-display text-2xl text-charcoal">Third-Party Services</h3>
          <p className="text-warm-gray">
            We may use third-party services like Google Analytics to understand how visitors use our 
            site. These services may collect information about your device and browsing behavior.
          </p>

          <h3 className="font-display text-2xl text-charcoal">Your Rights</h3>
          <p className="text-warm-gray">
            You have the right to:
          </p>
          <ul className="text-warm-gray">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Unsubscribe from marketing communications at any time</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-3xl text-charcoal">Affiliate Disclosure</h2>
          <p className="text-warm-gray">
            Fashion with Falaq participates in affiliate marketing programs. This means when you click 
            on certain links and make a purchase, I may receive a small commission at no extra cost to you.
          </p>
          <p className="text-warm-gray">
            These affiliate relationships do not influence my content or recommendations. I only recommend 
            products and services I genuinely believe in and think will be valuable to my audience. All 
            opinions expressed are my own honest thoughts.
          </p>
          <p className="text-warm-gray">
            Affiliate links help support this blog and allow me to continue creating free content. Thank 
            you for your support!
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-3xl text-charcoal">Disclaimer</h2>
          
          <h3 className="font-display text-2xl text-charcoal">Fashion Advice</h3>
          <p className="text-warm-gray">
            The styling tips and fashion advice provided on this website are for informational and 
            entertainment purposes only. Results may vary based on individual preferences, body types, 
            and personal style.
          </p>

          <h3 className="font-display text-2xl text-charcoal">Product Recommendations</h3>
          <p className="text-warm-gray">
            While I strive to recommend quality products, I cannot guarantee the quality, availability, 
            or pricing of third-party products. Please review products carefully before purchasing.
          </p>

          <h3 className="font-display text-2xl text-charcoal">External Links</h3>
          <p className="text-warm-gray">
            This website contains links to external sites. I am not responsible for the content, privacy 
            practices, or availability of these external sites.
          </p>

          <h3 className="font-display text-2xl text-charcoal">Professional Advice</h3>
          <p className="text-warm-gray">
            The information on this site is not intended to replace professional styling, shopping, or 
            fashion consulting services. For personalized advice, please consider booking a consultation.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-3xl text-charcoal">Image Copyright</h2>
          <p className="text-warm-gray">
            All images on this website are either original photography, properly licensed stock photos, 
            or used with permission. Unauthorized use or reproduction of images is prohibited.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-3xl text-charcoal">Changes to This Policy</h2>
          <p className="text-warm-gray">
            I reserve the right to update this privacy policy and disclaimer at any time. Changes will 
            be posted on this page with an updated date.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-3xl text-charcoal">Contact</h2>
          <p className="text-warm-gray">
            If you have questions about this privacy policy or how your information is used, please 
            contact me at{' '}
            <a href="mailto:hello@fashionwithfalaq.com" className="text-rose hover:underline">
              hello@fashionwithfalaq.com
            </a>
          </p>
        </section>

        <div className="mt-16 p-6 bg-sand/50 rounded-2xl">
          <p className="text-center text-warm-gray text-sm">
            By using this website, you agree to this privacy policy and disclaimer. 
            If you do not agree with any part of this policy, please do not use this website.
          </p>
        </div>
      </div>
    </div>
  );
}
