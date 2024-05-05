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

      <div className="mt-16 grid max-w-4xl grid-rows-[auto_auto_auto] gap-8 md:grid-cols-3 md:gap-10">
        <div className="glass-container">
          
        </div>
      </div>
    </Bounded>
  );
};
