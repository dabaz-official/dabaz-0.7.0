import { Spotlight } from "@/components/ui/Spotlight";

export default function Spotlights() {
  return (
    <div>
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="#c084fc" />
      <Spotlight className="top-12 left-40 h-[160vh] w-[100vw]" fill="#60a5fa" />
    </div>
  )
};
