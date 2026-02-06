import Link from 'next/link';

export const metadata = {
  title: 'Work With Me | Fashion Consulting Services',
  description: 'Personal styling and fashion consulting services to help you build a wardrobe you love and feel confident every day.',
};

export default function WorkWithMePage() {
  const services = [
    {
      name: 'Personal Styling Session',
      duration: '2 hours',
      price: '$300',
      description: 'One-on-one styling consultation to discover your personal style, assess your current wardrobe, and create a personalized style guide.',
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
      description: 'Comprehensive wardrobe overhaul to help you rediscover pieces you love, identify gaps, and create a cohesive, functional wardrobe.',
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
      description: 'Curated shopping trip or virtual shopping session to find pieces that fit your style, lifestyle, and budget perfectly.',
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
      price: 'Starting at $250',
      description: 'Look your best for weddings, parties, photoshoots, or any special occasion with professional styling assistance.',
      includes: [
        'Event style consultation',
        'Outfit selection and accessories',
        'Multiple look options',
        'Day-of styling support (if needed)',
        'Post-event photo review',
      ],
    },
  ];

  return (
    // <div className="min-h-screen bg-cream py-20 px-4">
    //   <div className="max-w-6xl mx-auto">
    //     {/* Header */}
    //     <div className="text-center mb-16 animate-fade-in">
    //       <h1 className="font-display text-5xl md:text-6xl text-charcoal mb-6">
    //         Work With Me
    //       </h1>
    //       <p className="font-body text-xl text-warm-gray max-w-3xl mx-auto">
    //         Personal styling services designed to help you feel confident, 
    //         look amazing, and simplify your daily routine.
    //       </p>
    //     </div>

    //     {/* Intro Section */}
    //     <div className="mb-20 p-8 bg-gradient-to-br from-rose/10 to-sand/40 rounded-2xl animate-slide-up">
    //       <h2 className="font-display text-3xl text-charcoal mb-4">Why Work With Me?</h2>
    //       <p className="font-body text-lg text-warm-gray mb-4 leading-relaxed">
    //         I believe style should make your life easier, not harder. My approach is personalized, 
    //         practical, and judgment-free. Whether you're starting from scratch or refining an existing 
    //         wardrobe, I'll help you create a style that feels authentically you.
    //       </p>
    //       <p className="font-body text-lg text-warm-gray leading-relaxed">
    //         All services include follow-up support because building great style is a journey, not a 
    //         one-time event. I'm here to support you every step of the way.
    //       </p>
    //     </div>

    //     {/* Services */}
    //     <div className="space-y-8 mb-20">
    //       {services.map((service, index) => (
    //         <div
    //           key={index}
    //           className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow animate-scale-in stagger-${index + 1}`}
    //         >
    //           <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
    //             <div>
    //               <h3 className="font-display text-3xl text-charcoal mb-2">
    //                 {service.name}
    //               </h3>
    //               <div className="flex flex-wrap gap-3 text-sm text-warm-gray">
    //                 <span className="px-3 py-1 bg-sand rounded-full">{service.duration}</span>
    //                 <span className="px-3 py-1 bg-rose/20 text-rose rounded-full font-medium">
    //                   {service.price}
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
              
    //           <p className="font-body text-warm-gray mb-6 leading-relaxed">
    //             {service.description}
    //           </p>

    //           <div className="mb-6">
    //             <h4 className="font-medium text-charcoal mb-3">What's Included:</h4>
    //             <ul className="space-y-2">
    //               {service.includes.map((item, i) => (
    //                 <li key={i} className="flex items-start text-warm-gray">
    //                   <svg className="w-5 h-5 text-rose mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
    //                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    //                   </svg>
    //                   {item}
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //         </div>
    //       ))}
    //     </div>

    //     {/* Custom Packages */}
    //     <div className="bg-charcoal text-cream rounded-2xl p-8 mb-20 animate-fade-in">
    //       <h3 className="font-display text-3xl mb-4">Custom Packages</h3>
    //       <p className="font-body text-sand mb-6 leading-relaxed">
    //         Don't see exactly what you're looking for? I offer custom packages tailored to your specific 
    //         needs. Whether it's ongoing styling support, seasonal wardrobe updates, or something unique, 
    //         let's create a package that works for you.
    //       </p>
    //       <Link
    //         href="/contact"
    //         className="inline-block px-6 py-3 bg-rose text-white rounded-full hover:bg-white hover:text-charcoal transition-all font-medium"
    //       >
    //         Discuss Custom Options
    //       </Link>
    //     </div>

    //     {/* Process */}
    //     <div className="mb-20">
    //       <h2 className="font-display text-4xl text-charcoal text-center mb-12">
    //         How It Works
    //       </h2>
    //       <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
    //         {[
    //           { step: '1', title: 'Contact', desc: 'Reach out via the contact form or email' },
    //           { step: '2', title: 'Consult', desc: 'We discuss your needs and goals in a free 15-min call' },
    //           { step: '3', title: 'Schedule', desc: 'Book your session at a time that works for you' },
    //           { step: '4', title: 'Transform', desc: 'Experience your styling session and ongoing support' },
    //         ].map((item, index) => (
    //           <div key={index} className={`text-center animate-slide-up stagger-${index + 1}`}>
    //             <div className="w-16 h-16 bg-rose text-white rounded-full flex items-center justify-center font-display text-2xl mx-auto mb-4">
    //               {item.step}
    //             </div>
    //             <h4 className="font-display text-xl text-charcoal mb-2">{item.title}</h4>
    //             <p className="text-warm-gray text-sm">{item.desc}</p>
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     {/* Testimonials */}
    //     <div className="mb-20">
    //       <h2 className="font-display text-4xl text-charcoal text-center mb-12">
    //         Client Love
    //       </h2>
    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    //         <div className="bg-white p-8 rounded-2xl shadow-sm">
    //           <div className="flex text-rose mb-4">
    //             {[...Array(5)].map((_, i) => (
    //               <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    //                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    //               </svg>
    //             ))}
    //           </div>
    //           <p className="text-warm-gray mb-4 italic">
    //             "Falaq completely transformed how I approach getting dressed. Her styling session gave me 
    //             confidence I didn't know I was missing. Now I actually love my wardrobe!"
    //           </p>
    //           <p className="font-medium text-charcoal">— Sarah M.</p>
    //         </div>
    //         <div className="bg-white p-8 rounded-2xl shadow-sm">
    //           <div className="flex text-rose mb-4">
    //             {[...Array(5)].map((_, i) => (
    //               <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    //                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    //               </svg>
    //             ))}
    //           </div>
    //           <p className="text-warm-gray mb-4 italic">
    //             "The wardrobe refresh was worth every penny. Falaq helped me see potential in pieces I 
    //             thought I'd never wear again. Her advice is practical, honest, and genuinely helpful."
    //           </p>
    //           <p className="font-medium text-charcoal">— Jessica L.</p>
    //         </div>
    //       </div>
    //     </div>

    //     {/* CTA */}
    //     <div className="text-center bg-gradient-to-br from-sand/50 to-rose/10 rounded-2xl p-12">
    //       <h2 className="font-display text-4xl text-charcoal mb-4">
    //         Ready to Transform Your Style?
    //       </h2>
    //       <p className="font-body text-lg text-warm-gray mb-8 max-w-2xl mx-auto">
    //         Let's chat about how I can help you feel confident and look amazing every day. 
    //         Book a free 15-minute consultation to get started.
    //       </p>
    //       <Link
    //         href="/contact"
    //         className="inline-block px-8 py-4 bg-charcoal text-cream rounded-full hover:bg-rose hover:scale-105 transition-all font-medium text-lg"
    //       >
    //         Get Started Today
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
}
