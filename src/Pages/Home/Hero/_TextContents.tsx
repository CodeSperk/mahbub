import { GoRocket } from "react-icons/go";
import { FaGithub, FaLinkedin, FaLongArrowAltRight } from "react-icons/fa";
import AnimatedText from "./__animatedText";
import GlowingBtn from "../../../components/shared/GlowingBtn";

const TextContents = () => {
  return (
    <section className="max-width min-h-screen py-28 flex flex-col justify-center gap-4 xl:gap-5 text-center md:text-start">
      <div className="leading-none">
        <h5 className="text-2xl md:text-[28px]">
          Hey there!, I&apos;m-
        </h5>
        <h1 className="text-[48px] md:text-7xl xl:text-[96px] font-bold">
          Mahbub Rahman
        </h1>
      </div>

      <div className="flex gap-2 items-center justify-center md:justify-start text-2xl md:text-[28px] xl:text-[36px] ">
        <GoRocket className="hidden lg:block" />
        <AnimatedText />
      </div>

      <h5 className="text-2xl md:text-[28px] xl:text-[36px] leading-[40px]">
        Software Engineer .{" "}
        <span className="">
          A Self-taught web developer <br className="hidden md:block" /> with an
          interest in MERN Stack Development
        </span>
      </h5>

      <div className="flex gap-6 justify-center md:justify-start items-center mt-4">
        <a
          href="https://github.com/CodeSperk"
          target="_blank"
          className="p-2 text-2xl bg-icon-bg rounded-md hover:bg-icon-hover-bg hover:scale-105 duration-300"
        >
          <FaGithub className="duration-500" />
        </a>
        <GlowingBtn icon={<FaLongArrowAltRight />} href="/contact" className="">
          Hire Me
        </GlowingBtn>
        <a
          href="https://www.linkedin.com/in/mahbub692"
          target="_blank"
          className="p-2 text-2xl bg-icon-bg rounded-md hover:bg-icon-hover-bg hover:scale-105  duration-300"
        >
          <FaLinkedin className="duration-500" />
        </a>
      </div>
    </section>
  );
};

export default TextContents;
