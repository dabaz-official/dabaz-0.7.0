import Image from "next/image";

import Bounded from "@/components/layout/Bounded";
import GridBackground from "@/components/home/GridBackground";
import homeTexts from "@/config/home-texts";

export default function Hero() {
  return (
    <Bounded>
      <div className="relative">
        <GridBackground />
        <h1 className="text-balance text-center text-5xl font-medium md:text-7xl">
          {homeTexts.hero.heading}
        </h1>
        <div className="mx-auto mt-6 max-w-lg text-center">
          <p className="text-balance text-neutral-300 text-xl md:text-2xl">
            {homeTexts.hero.description}
          </p>
        </div>
        <div className="glass-container mt-16 w-96 mx-auto">
          <Image
            src="/images/home/avatar.jpg"
            alt="DabAZ is standing on a beach, posing."
            width={1208}
            height={1208}
            className="rounded-2xl"
          />
        </div>
      </div>
    </Bounded>
  );
};
