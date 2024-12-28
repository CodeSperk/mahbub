import { Suspense } from "react";
import LazyVideo from "./__layyVideo";
import TechIcons from "./_techIcons";

const TechStack = () => {
  return (
    <section className="relative section-gap text-white ">
      {/* Video with overlay */}
      <Suspense
        fallback={<div className="animate-pulse bg-gray-200 w-full h-full" />}
      >
        <LazyVideo />
      </Suspense>

      <div className="absolute inset-0 bg-gradient-to-r from-[#0F050E] via-[#341b2690] to-[#0F050E] pointer-events-none"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4">
        {/* Think better with Next.js 15 badge */}
        <div
          className="-mt-4 mb-8 px-6 py-3 bg-[#10060F] border border-[#4d204d] rounded-full text-sm md:text-base flex items-center gap-2 text-[#8f408f] font-bold"
          style={{
            boxShadow:
              "0 0 6px 2px #632b63, 0 0 6px 2px #632b63, 0 0 6px 2px #632b63",
          }}
        >
          <div className="w-6 h-6 bg-[#4d204d] rounded-full flex items-center justify-center text-white">
            ✦
          </div>
          Think better with Next.js 15
        </div>

        {/* heading */}
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-4">
            Building web apps with modern technologies
          </h1>

          <p className="text-xl text-white/80 text-center">
            with a focus on creativity, functionality, and impact.
          </p>
        </div>

        <TechIcons />
      </div>
    </section>
  );
};

export default TechStack;
