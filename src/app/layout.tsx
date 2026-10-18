import type { Metadata, Viewport } from 'next';
import { Geist } from 'next/font/google';
import './globals.scss';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
});

const SITE = 'https://akindejuh.netlify.app';
const DESCRIPTION =
  'Michael Akindeju (Akindeju Oluwagbemiga) is a Senior Software Engineer (Full Stack) at Benmore Technologies who builds mobile, web and backend products end to end. 5+ years, 15+ apps shipped to 3M+ users, 2,800+ GitHub contributions, and Wòjú, a video calling and chat app built in two days with AI agents.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: 'Michael Akindeju — Senior Software Engineer',
  description: DESCRIPTION,
  keywords: [
    'Akindeju',
    'Michael Akindeju',
    'Akindeju Oluwagbemiga Michael',
    'Akindeju Oluwagbemiga',
    'akindejuh',
    'Software Engineer Nigeria',
    'React Native Developer',
    'Full Stack Developer',
    'Go Developer',
    'AI-assisted development',
    'Benmore Technologies',
    'Wòjú',
  ],
  authors: [{ name: 'Akindeju Oluwagbemiga', url: SITE }],
  creator: 'Akindeju Oluwagbemiga',
  openGraph: {
    type: 'website',
    title: 'Michael Akindeju — Senior Software Engineer',
    description:
      'Mobile, web and backend, shipped fast. AI writes the code; every diff is reviewed by hand.',
    url: SITE,
    siteName: 'Michael Akindeju',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Michael Akindeju — Senior Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Michael Akindeju — Senior Software Engineer',
    description:
      'Mobile, web and backend, shipped fast. AI writes the code; every diff is reviewed by hand.',
    creator: '@akindejuh',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: SITE },
  robots: { index: true, follow: true },
  icons: { icon: '/logo.png', apple: '/logo.jpg' },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbfbfd' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Akindeju Oluwagbemiga',
  alternateName: [
    'akindejuh',
    'Michael Akindeju',
    'Akindeju Oluwagbemiga Michael',
    'Akindeju',
  ],
  url: SITE,
  image: `${SITE}/logo.jpg`,
  jobTitle: 'Software Engineer',
  worksFor: { '@type': 'Organization', name: 'Benmore Technologies' },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Federal University of Technology, Akure',
  },
  knowsAbout: [
    'React Native',
    'React',
    'Next.js',
    'Node.js',
    'Go',
    'TypeScript',
    'Mobile App Development',
    'AI-assisted development',
  ],
  sameAs: [
    'https://github.com/akindejuh',
    'https://linkedin.com/in/michael-akindeju-004b95225',
    'https://twitter.com/akindejuh',
  ],
};

// Runs before paint so the chosen theme never flashes.
// Default is dark; only an explicit saved choice of light overrides it.
const themeScript = `var t='dark';try{if(localStorage.getItem('theme')==='light')t='light'}catch(e){}document.documentElement.dataset.theme=t`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={geist.variable}
      data-theme="dark"
      suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
