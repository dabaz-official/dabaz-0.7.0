import Image from "next/image";

import Bounded from "@/components/layout/Bounded";
import StarGrid from "@/components/home/StarGrid";
import home from "@/config/home";

export default function Hero() {
  return (
    <div>
      <StarGrid />
      <Bounded>
        <div className="relative">
          <h1 className="text-balance text-center text-5xl md:text-7xl">
            {home.hero.heading}
          </h1>
          <div className="mx-auto mt-6 max-w-lg text-center">
            <p className="text-balance text-slate-300 text-xl md:text-2xl">
              {home.hero.description}
            </p>
          </div>
          <div className="glass-container mt-16 w-80 mx-auto">
            <div className="absolute inset-0 -z-10 bg-blue-500/30 blur-2xl filter" />
            <Image
              src={home.hero.imgSrc}
              alt={home.hero.imgAlt}
              width={1208}
              height={1208}
              className="rounded-2xl"
            />
          </div>
        </div>
      </Bounded>
    </div>
  );
};
