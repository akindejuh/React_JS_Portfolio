import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'akindejuh',
  description: "Akindeju Oluwagbemiga's portfolio website",
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
