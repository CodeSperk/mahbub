import { GoRocket } from "react-icons/go";
import { FaGithub, FaLinkedin, FaLongArrowAltRight } from "react-icons/fa";
import AnimatedText from "./__animatedText";
import GlowingBtn from "../../../components/shared/GlowingBtn";
import Link from "next/link";

const TextContents = () => {
  return (
    <section className="max-width min-h-screen py-10 lg:py-20 flex flex-col justify-center gap-4 xl:gap-5 text-center md:text-start">
      <div className="leading-none">
        <h5>
          Hey there!, I&apos;m-
        </h5>
        <h1>
          Mahbub Rahman
        </h1>
      </div>

      <div className="flex gap-2 items-center justify-center md:justify-start">
        <GoRocket className="hidden lg:block" />
        <AnimatedText />
      </div>

      <h4 className="text-secondary">
        Software Engineer .{" "}
        <span className="">
          A Self-taught web developer <br className="hidden md:block" /> with an
          interest in MERN Stack Applications
        </span>
      </h4>

      <div className="flex gap-6 justify-center md:justify-start items-center mt-4">
        <Link
          href="https://github.com/CodeSperk"
          target="_blank"
          className="p-2 text-2xl bg-icon-bg rounded-md bg-button hover:bg-button-hover hover:scale-110 duration-300"
        >
          <FaGithub className="duration-500" />
        </Link>
        <GlowingBtn icon={<FaLongArrowAltRight />} href="/contact" className="text-lg">
          Hire Me
        </GlowingBtn>
        <Link
          href="https://www.linkedin.com/in/mahbub692"
          target="_blank"
          className="p-2 text-2xl bg-icon-bg rounded-md bg-button hover:bg-button-hover hover:scale-110 duration-300"
        >
          <FaLinkedin className="duration-500" />
        </Link>
      </div>
    </section>
  );
};

export default TextContents;
