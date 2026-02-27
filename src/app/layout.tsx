import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  metadataBase: new URL('https://akindejuh.netlify.app'),
  title: 'Akindeju Oluwagbemiga | Software Engineer — React Native, React.js, Node.js',
  description:
    'Akindeju Oluwagbemiga is a Software Engineer at Benmore Technologies with 4+ years building scalable mobile and web applications. Shipped 15+ apps to 3M+ users across fintech and enterprise. Specializes in React Native, React.js, Node.js, and TypeScript.',
  keywords: [
    'Akindeju',
    'Akindeju Oluwagbemiga',
    'akindejuh',
    'Software Engineer Nigeria',
    'React Native Developer',
    'React Developer',
    'Node.js Developer',
    'TypeScript Developer',
    'Benmore Technologies',
    'Mobile App Developer Nigeria',
    'Full Stack Developer',
  ],
  authors: [{ name: 'Akindeju Oluwagbemiga', url: 'https://akindejuh.netlify.app' }],
  creator: 'Akindeju Oluwagbemiga',
  openGraph: {
    type: 'website',
    title: 'Akindeju Oluwagbemiga | Software Engineer',
    description:
      'Software Engineer with 4+ years crafting high-performance mobile & web applications that scale. React Native, React.js, Node.js, TypeScript.',
    url: 'https://akindejuh.netlify.app',
    siteName: 'Akindeju Oluwagbemiga',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Akindeju Oluwagbemiga — Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akindeju Oluwagbemiga | Software Engineer',
    description:
      'Software Engineer with 4+ years crafting high-performance mobile & web applications that scale.',
    creator: '@akindejuh',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://akindejuh.netlify.app',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/logo.ico',
    apple: '/logo.jpg',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
