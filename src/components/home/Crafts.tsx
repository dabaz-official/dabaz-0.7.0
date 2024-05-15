import Image from "next/image";
import Link from "next/link";

import home from "@/config/home";
import Bounded from "@/components/layout/Bounded";

export default function Crafts() {
  return (
    <Bounded>
      <h2 className="text-balance text-center text-5xl font-medium md:text-7xl bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
        {home.crafts.heading}
      </h2>
      <div className="mx-auto mt-6 max-w-lg text-center">
        <p className="text-balance text-slate-300 text-xl md:text-2xl">
        {home.crafts.description}
        </p>
      </div>

      <div className="mt-16 grid grid-rows-[auto_auto_auto] gap-8 md:grid-cols-3 md:gap-10">
        <Link
          href={home.crafts.links.}
          className="glass-container group"
        >
          <Image
            src={home.hero.imgSrc}
            alt={home.hero.imgAlt}
            width={1208}
            height={1208}
            className="rounded-2xl group-hover:scale-110 transition-transform duration-500"
          />
        </Link>
      </div>
    </Bounded>
  );
};
