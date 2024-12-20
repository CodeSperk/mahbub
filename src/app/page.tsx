import AnimatedText from "@/components/HomePage/AnimatedText";
import FloatingIcons from "@/components/HomePage/FloatingIcons";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GoRocket } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";

const HomePage = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background image with overlay */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url('/bg.jpeg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>

      <div>
        <FloatingIcons />
      </div>

      <section className="max-width text-[#fefef5]  py-20 flex flex-col h-screen justify-center gap-6">
        <div className="relative">
          <div className="absolute top-0 left-0 -ml-10 -mt-4 -z-10">
            <Image
              height={100}
              width={100}
              className="hidden lg:block w-36 h-36"
              alt="dotted bg"
              src="/dottedBg.svg"
            />
          </div>
          <h5 className="text-primary text-[28px] leading-none">
            Hey there!, I&apos;m-
          </h5>
          <h1 className="text-5xl md:text-7xl lg:text-[96px] xl:text-[116px] font-bold capitalize leading-none">
            Mahbub Rahman
          </h1>
        </div>
        <h5 className="text-[28px] lg:text-[36px] font-bold leading-[40px]">
          Software Engineer.{" "}
          <span className="text-gray-400">
            A Self-taught developer with an <br /> interest in MERN Stack
            Development
          </span>
        </h5>

        <div className="flex gap-2 items-center text-[28px] lg:text-[36px]">
          <GoRocket />
          <AnimatedText />
        </div>

        <div className="flex gap-4">
          <Link target="_blank" href="https://github.com/CodeSperk">
            <div className="flex gap-2 items-center bg-[#1a0712] hover:bg-[#3e102b] border border-[#2a0c1e] p-2 px-4 rounded-md text-lg">
              <FaGithub className="text-primary" />
              <button>Github</button>
            </div>
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/in/mahbub692">
          <div className="flex gap-2 items-center bg-[#1a0712] hover:bg-[#3e102b] border border-[#2a0c1e] p-2 px-4 rounded-md text-lg">
            <FaLinkedin className="text-primary" />
            <button>LinkedIn</button>
          </div>
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/in/mahbub692">
          <div className="flex gap-2 items-center bg-[#1a0712] hover:bg-[#3e102b] border border-[#2a0c1e] p-2 px-4 rounded-md text-lg">
            <MdOutlineEmail className="text-primary" />
            <button>Email</button>
          </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
