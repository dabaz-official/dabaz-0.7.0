import { Metadata } from "next";

import { seo } from "@/config/seo";

export const metadata: Metadata = {
  title: seo.blog.title,
  description: seo.blog.description,

  openGraph: {
    title: seo.blog.title,
    description: seo.blog.description,
    url: "https://dabaz.me/blog",
    images: [
      {
        url: seo.blog.imageSrc,
        width: 1920,
        height: 1080,
        alt: seo.blog.imageAlt,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    creator: "@dabaz_official",
    title: seo.blog.title,
    description: seo.blog.description,
    images: seo.blog.imageSrc,
  },
};

export default function BlogPage() {
  return (
    <div>
      
    </div>
  );
};