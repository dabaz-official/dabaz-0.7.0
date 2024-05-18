import Spotlights from "@/components/home/Spotlights";
import { GridBackground } from "@/components/home/GridBackground";

const Hero = () => {
  return (
    <div className="">
      <Spotlights />
      <GridBackground />
      <p className="text-[12rem] text-center -mb-12">
        DABAZ
      </p>
    </div>
  )
}

export default Hero;