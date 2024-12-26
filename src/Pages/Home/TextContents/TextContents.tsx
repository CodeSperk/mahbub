import { GoRocket } from "react-icons/go";
import AnimatedText from "./_animatedText";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import HireMeBtn from "./_hireMeBtn";
import ResumeBtn from "./_resumeBtn";

const TextContents = () => {
  return (
    <section className="max-width min-h-screen text-[#fefef5] py-28 flex flex-col justify-center gap-4 xl:gap-5 text-center lg:text-start">
      <div className="leading-none">
        <h5 className="text-primary text-2xl md:text-[28px]">
          Hey there!, I&apos;m-
        </h5>
        <h1 className="text-[48px] md:text-7xl xl:text-[96px] font-bold">
          Mahbub Rahman
        </h1>
      </div>

      <h5 className="text-2xl md:text-[28px] xl:text-[36px] leading-[40px]">
        Software Engineer .{" "}
        <span className="text-secondary">
          A Self-taught developer with an <br className="hidden md:block" />{" "}
          interest in MERN Stack Development
        </span>
      </h5>

      <div className="flex gap-2 items-center justify-center lg:justify-start text-2xl md:text-[28px] xl:text-[36px] ">
        <GoRocket className="hidden lg:block" />
        <AnimatedText />
      </div>

      {/* Social links */}
      <div className="flex justify-center lg:justify-start items-center gap-6 text-3xl text-primary mt-6">
        <a href="https://github.com/CodeSperk" target="_blank">
          <FaGithub className="hover:scale-125 duration-500" />
        </a>
        <a href="https://www.linkedin.com/in/mahbub692" target="_blank">
          {" "}
          <FaLinkedin className="hover:scale-125 duration-500" />
        </a>
        <FaFacebook className="hover:scale-125 duration-500" />
      </div>
      <div className="flex gap-4 justify-center lg:justify-start ">
        <ResumeBtn />
        <HireMeBtn />
      </div>
    </section>
  );
};

export default TextContents;
