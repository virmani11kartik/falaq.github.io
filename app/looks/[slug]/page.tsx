import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getLookBySlug, getAllLooks } from '@/lib/content';
import Image from "next/image";


export async function generateStaticParams() {
  const looks = getAllLooks();
  return looks.map((look) => ({
    slug: look.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const look = getLookBySlug(params.slug);
  
  if (!look) {
    return {
      title: 'Look Not Found',
    };
  }

  return {
    title: `${look.title} | Fashion with Falaq`,
    description: look.caption,
    openGraph: {
      title: look.title,
      description: look.caption,
      images: [look.coverImage],
    },
  };
}

export default function LookDetailPage({ params }: { params: { slug: string } }) {
  const look = getLookBySlug(params.slug);

  if (!look) {
    notFound();
  }

  const relatedLooks = getAllLooks()
    .filter((l) => l.slug !== look.slug && (l.category === look.category || l.season === look.season))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Link
          href="/looks"
          className="inline-flex items-center text-warm-gray hover:text-charcoal transition-colors mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Looks
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Title and Meta */}
            <div className="mb-8 animate-fade-in">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block px-4 py-1.5 bg-rose text-white rounded-full text-sm font-medium">
                  {look.category}
                </span>
                {look.season && look.season !== look.category && (
                  <span className="inline-block px-4 py-1.5 bg-sand text-charcoal rounded-full text-sm font-medium">
                    {look.season}
                  </span>
                )}
              </div>
              <h1 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
                {look.title}
              </h1>
              <p className="font-body text-lg text-warm-gray mb-4">
                {look.caption}
              </p>
              <p className="text-taupe text-sm">
                {new Date(look.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>

            {/* Gallery */}
            <div className="mb-12 space-y-6 animate-slide-up">
              {look.galleryImages.map((image, index) => (
                <div key={image} className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-sand">
                  <Image
                    src={image}
                    alt={`${look.title} photo ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>

            {/* Content */}
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: look.content }} />

            {/* Tags */}
            {look.tags && look.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-sand">
                <h3 className="font-display text-xl text-charcoal mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {look.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-sand text-warm-gray rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Shop The Look */}
              {look.shopItems && look.shopItems.length > 0 && (
                <div className="bg-white rounded-2xl p-6 shadow-sm mb-6 animate-scale-in">
                  <h3 className="font-display text-2xl text-charcoal mb-6">Shop The Look</h3>
                  <div className="space-y-4">
                    {look.shopItems.map((item, index) => (
                      <div key={index} className="border-b border-sand pb-4 last:border-0 last:pb-0">
                        <h4 className="font-medium text-charcoal mb-1">{item.itemName}</h4>
                        <p className="text-sm text-warm-gray mb-2">{item.storeName}</p>
                        {item.price && (
                          <p className="text-sm font-medium text-rose mb-2">{item.price}</p>
                        )}
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="inline-block text-sm text-charcoal hover:text-rose transition-colors underline"
                        >
                          Shop Now →
                        </a>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-taupe mt-6">
                    Links may be affiliate links. I earn a small commission at no extra cost to you.
                  </p>
                </div>
              )}

              {/* Styling Tips */}
              <div className="bg-gradient-to-br from-rose/10 to-sand/30 rounded-2xl p-6 animate-scale-in stagger-2">
                <h3 className="font-display text-xl text-charcoal mb-4">💡 Falaq's Tips</h3>
                <p className="text-warm-gray text-sm leading-relaxed">
                  Want more personalized styling advice? I offer one-on-one consultations to help you 
                  build a wardrobe that works for your lifestyle.
                </p>
                <Link
                  href="/work-with-me"
                  className="inline-block mt-4 px-5 py-2 bg-charcoal text-cream rounded-full hover:bg-rose transition-all text-sm font-medium"
                >
                  Work With Me
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Looks */}
        {relatedLooks.length > 0 && (
          <div className="mt-20">
            <h2 className="font-display text-3xl text-charcoal mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedLooks.map((relatedLook, index) => (
                <Link
                  key={relatedLook.slug}
                  href={`/looks/${relatedLook.slug}`}
                  className={`group animate-scale-in stagger-${index + 1}`}
                >
                  {/* <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-sand">
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="inline-block px-3 py-1 bg-rose rounded-full text-sm mb-2">
                        {relatedLook.category}
                      </span>
                    </div>
                  </div> */}

                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-sand">
                    <Image
                      src={relatedLook.coverImage}
                      alt={relatedLook.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="inline-block px-3 py-1 bg-rose rounded-full text-sm mb-2">
                        {relatedLook.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-display text-xl text-charcoal mb-2 group-hover:text-rose transition-colors">
                    {relatedLook.title}
                  </h3>
                  <p className="font-body text-warm-gray text-sm line-clamp-2">
                    {relatedLook.caption}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
