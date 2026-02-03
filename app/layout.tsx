import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Fashion with Falaq | Personal Style Blog & Lookbook',
  description: 'Fashion consultant and model Falaq shares styling tips, seasonal looks, and shoppable outfit inspiration.',
  keywords: 'fashion blog, style tips, lookbook, fashion consultant, outfit inspiration, seasonal style',
  authors: [{ name: 'Falaq' }],
  openGraph: {
    title: 'Fashion with Falaq',
    description: 'Personal style blog and shoppable lookbook',
    type: 'website',
    images: ['/images/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
