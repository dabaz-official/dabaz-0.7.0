import Spotlights from "@/components/home/Spotlights";
import { GridBackground } from "@/components/home/GridBackground";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="">
      <Spotlights />
      <GridBackground />
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="tracking-tight text-4xl md:text-5xl lg:text-6xl text-center">
            I&apos;m DabAZ.
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="I'm an entrepreneur, ethical hacker, musician, designer, developer, and a problem solver. I love to build things that make a difference in people&apos;s lives."
          />

          <p className="text-center md:tracking-tight mb-4 text-sm md:text-lg lg:text-2xl">
            Connect
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero;