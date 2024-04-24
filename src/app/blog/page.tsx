import { Metadata } from "next";

import { seo } from "@/config/seo";
import Bounded from "@/components/layout/Bounded";
import home from "@/config/home";

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
    <Bounded>
      <div className="relative">
        <h1 className="text-balance text-center text-5xl font-medium md:text-7xl">
          {home.blog.heading} {home.blog.heading2}{home.blog.heading3} 
        </h1>
        <div className="mx-auto mt-6 max-w-lg text-center">
          <p className="text-balance text-slate-300 text-xl md:text-2xl">
            {home.blog.description}
          </p>
        </div>
      </div>
    </Bounded>
  );
};