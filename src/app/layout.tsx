import { Metadata } from "next";
import { PrismicPreview } from "@prismicio/next";

import { repositoryName } from "@/prismicio";
import { seo } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: seo.url,
  title: {
    template: '%s | DabAZ',
    default: seo.title,
  },
  description: seo.description,

  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
  },

  referrer: 'origin-when-cross-origin',
  keywords: ['personal website', 'technology', 'entrepreneurship', 'innovation', 'networking', 'community', 'artificial intelligence', '3D printing', 'software development', 'startup tips', 'music production', 'rapper', 'front-end development', 'DabAZ', 'Diebold Dai', 'dabaz_official'],
  authors: [
    { name: 'DabAZ', url: 'https://dabaz.me' }
  ],
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': 15,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    title: seo.title,
    description: seo.description,
    url: 'https://dabaz.me',
    siteName: seo.siteName,
    images: [
      {
        url: seo.imageSrc,
        width: 1920,
        height: 1080,
        alt: seo.imageAlt,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    creator: '@dabaz_official',
    title: seo.title,
    description: seo.description,
    images: [seo.imageSrc],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
