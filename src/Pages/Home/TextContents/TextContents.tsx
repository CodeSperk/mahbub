import { GoRocket } from "react-icons/go";
import AnimatedText from "./_animatedText";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Button from "@/components/shared/Button";

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
      <div className="flex gap-4 justify-center lg:justify-start mt-6">
        <Link target="_blank" href="https://github.com/CodeSperk">
          <Button icon={FaGithub} title="Github" />
        </Link>
        <Link target="_blank" href="https://www.linkedin.com/in/mahbub692">
          <Button icon={FaLinkedin} title="LinkedIn" />
        </Link>
        <Link target="_blank" href="https://www.linkedin.com/in/mahbub692">
          <Button icon={MdOutlineEmail} title="Email" className="hidden md:flex" />
        </Link>
      </div>
    </section>
  );
};

export default TextContents;
