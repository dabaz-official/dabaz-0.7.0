"use client";

import { Send } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Spotlights from "@/components/home/Spotlights";
import { GridBackground } from "@/components/home/GridBackground";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import MagicButton from "@/components/ui/MagicButton";

const Hero = () => {
  const container = useRef(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.fromTo(".hero-heading", {
      y: 80,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.7
    })

    tl.fromTo(".hero-body", {
      y: 80,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.7
    })

    tl.fromTo(".hero-button", {
      y: 80,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1.2
    })
  });

  return (
    <div className="h-screen justify-center items-center flex flex-col">
      <Spotlights />
      <GridBackground />
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="tracking-tight text-4xl md:text-5xl lg:text-6xl text-center hero-heading opacity-0">
            I&apos;m DabAZ.
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl hero-body opacity-0"
            words="I'm an entrepreneur, ethical hacker, musician, designer, developer, and a problem solver. I love to build things that make a difference in people&apos;s lives."
          />
          <a href="mailto:dabaz@dabaz.me" className="mt-10 hero-button opacity-0">
            <MagicButton
              title="Get in touch"
              icon={<Send />}
              position="left"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero;