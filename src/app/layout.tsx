import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import { seo } from "@/config/seo";
import "@/styles/tailwind.css";
import "@/styles/styles.css";
import Header from "@/components/layout/Header";
import { fontSans, fontMono, fontSerif } from "./fonts";
import { cn } from "@/lib/utils";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: seo.home.url,
  title: {
    template: "%s | DabAZ",
    default: seo.home.title,
  },
  description: seo.home.description,

  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },

  referrer: "origin-when-cross-origin",
  keywords: [
    "personal website",
    "technology",
    "entrepreneurship",
    "innovation",
    "networking",
    "community",
    "artificial intelligence",
    "3D printing",
    "software development",
    "startup tips",
    "music production",
    "rapper",
    "front-end development",
    "DabAZ",
    "Diebold Dai",
    "dabaz_official",
  ],
  authors: [{ name: "DabAZ", url: "https://dabaz.me" }],
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
      "max-video-preview": 15,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: seo.home.title,
    description: seo.home.description,
    url: "https://dabaz.me",
    siteName: seo.home.siteName,
    images: [
      {
        url: seo.home.imageSrc,
        width: 1920,
        height: 1080,
        alt: seo.home.imageAlt,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    creator: "@dabaz_official",
    title: seo.home.title,
    description: seo.home.description,
    images: seo.home.imageSrc,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "m-0 h-full bg-[#070815] p-0 font-sans text-white antialiased",
        fontSans.variable, fontMono.variable, fontSerif.variable
      )}
    >
      <body className="flex h-full flex-col">
        <Header />
        <main className="mt-[4.2rem] sm:mt-[4.4rem]">
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
