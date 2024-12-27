import { FaCss3Alt, FaHtml5, FaReact, FaShopify } from "react-icons/fa";
import TeactStackIcons from "./_teactStackIcons";
import { IoLogoNodejs } from "react-icons/io";
import { SiExpress, SiMongodb, SiMui, SiTailwindcss } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { RiJavascriptFill, RiNextjsFill } from "react-icons/ri";
import { BiLogoFirebase, BiLogoTypescript } from "react-icons/bi";
import { Suspense } from "react";
import LazyVideo from "./__layyVideo";

const TechStack = () => {
  return (
    <div className="relative section-gap text-white ">
      {/* Video with overlay */}
      <Suspense
        fallback={<div className="animate-pulse bg-gray-200 w-full h-full" />}
      >
        <LazyVideo />
      </Suspense>

      <div className="absolute inset-0 bg-gradient-to-r from-[#0F050E] via-[#341b2690] to-[#0F050E] pointer-events-none"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4">
        {/* Think better with Next.js 15 badge */}
        <div className="mb-4 px-4 py-2 bg-[#10060F] border border-[#FFB400] rounded-full text-sm md:text-base flex items-center gap-2 shadow-lg shadow-yellow-300/60 text-yellow-300">
          <div className="w-6 h-6 bg-yellow-500/50 rounded-full flex items-center justify-center">
            ✦
          </div>
          Think better with Next.js 15
        </div>

        {/* Main heading */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-4">
          Building web apps with modern technologies
        </h1>

        {/* Subheading */}
        <p className="text-lg text-white/80 text-center">
          with a focus on creativity, functionality, and impact.
        </p>

        {/* Technology grid */}
        <div className="mt-12 md:mt-16 flex flex-wrap justify-center gap-5 lg:gap-6 max-w-4xl">
          {/* Row 1 */}

          <TeactStackIcons Icon={RiNextjsFill} />
          <TeactStackIcons Icon={FaReact} />
          <TeactStackIcons Icon={RiJavascriptFill} />
          <TeactStackIcons Icon={SiTailwindcss} />
          <TeactStackIcons Icon={BiLogoTypescript} />
          <TeactStackIcons Icon={SiExpress} />
          <TeactStackIcons Icon={IoLogoNodejs} />
          <TeactStackIcons Icon={SiMui} />
        </div>

        {/* Second row of icons */}
        <div className="flex flex-wrap justify-center gap-5 lg:gap-6 mt-6 max-w-2xl">
          <TeactStackIcons Icon={FaHtml5} />
          <TeactStackIcons Icon={FaCss3Alt} />
          <TeactStackIcons Icon={SiMongodb} />
          <TeactStackIcons Icon={TbSql} />
          <TeactStackIcons Icon={BiLogoFirebase} />
          <TeactStackIcons Icon={FaShopify} />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
