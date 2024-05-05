import home from "@/config/home";
import Bounded from "@/components/layout/Bounded";

export default function BlogSection() {
  return (
    <Bounded>
      <h2 className="text-balance text-center text-4xl font-medium md:text-6xl">
        {home.blog.heading}
        <br />
        <span className="bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
          {home.blog.heading2}
        </span>
        {home.blog.heading3}
      </h2>
      <div className="mx-auto mt-6 max-w-lg text-center">
        <p className="text-balance text-slate-300 text-xl md:text-2xl">
        {home.blog.description}
        </p>
      </div>

      <div className="mt-16 grid max-w-4xl grid-rows-[auto_auto_auto] gap-8 md:grid-cols-3 md:gap-10">
        <div className="glass-container">
          
        </div>
      </div>
    </Bounded>
  );
};
