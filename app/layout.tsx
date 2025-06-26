import type { Metadata } from 'next';
import { Oswald, Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import FloatingCallButton from '@/components/FloatingCallButton';

const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oswald',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default:
      "Schaeffer's Tank & Truck Service - ASME Certified Tank Repairs Since 1978",
    template: "%s | Schaeffer's Tank & Truck Service",
  },
  description:
    'Professional tank and trailer repair services in Ohio. ASME R-Stamp certified with 45+ years of experience. Emergency service available.',
  keywords: [
    'tank repair',
    'trailer repair',
    'ASME certified',
    'tank fabrication',
    'Ohio tank service',
    'emergency tank repair',
    'meter calibration',
    'tank testing',
  ],
  authors: [{ name: "Schaeffer's Tank & Truck Service" }],
  creator: "Schaeffer's Tank & Truck Service",
  publisher: "Schaeffer's Tank & Truck Service",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://schaeffertank.com',
    siteName: "Schaeffer's Tank & Truck Service",
    title: 'ASME Certified Tank & Trailer Repairs Since 1978',
    description:
      'Professional tank and trailer repair services in Ohio. ASME R-Stamp certified with 45+ years of experience.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Schaeffer's Tank & Truck Service",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ASME Certified Tank & Trailer Repairs Since 1978',
    description:
      'Professional tank and trailer repair services in Ohio. ASME R-Stamp certified with 45+ years of experience.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

// JSON-LD Schema for Local Business
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://schaeffertank.com',
  name: "Schaeffer's Tank & Truck Service",
  description: 'ASME-Certified Tank & Trailer Repairs Since 1978',
  url: 'https://schaeffertank.com',
  telephone: '330-296-7519',
  email: 'info@schaeffertank.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Industrial Drive',
    addressLocality: 'Wooster',
    addressRegion: 'OH',
    postalCode: '44691',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '40.8018',
    longitude: '-81.9354',
  },
  openingHours: ['Mo-Fr 07:00-17:00', 'Sa 08:00-12:00'],
  priceRange: '$$',
  servesCuisine: [],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '127',
  },
  sameAs: [
    'https://www.facebook.com/schaeffertank',
    'https://www.linkedin.com/company/schaeffertank',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${oswald.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <NavBar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}
