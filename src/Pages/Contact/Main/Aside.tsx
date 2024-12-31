import Link  from "next/link"
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Aside = () => {
  return (
    <aside className="w-full lg:w-[390px] lg:-mt-[320px] space-y-10 lg:space-y-16 xl:gap-20">
    <div className="bg-[#140613]  space-y-6 px-[30px] md:px-[60px] py-[50px] md:py-[80px] rounded-sm ">
      <div className="bg-[#13040B] p-8 rounded-sm space-y-4 md:text-lg">
        <p>Phone:</p>
        <p className="text-secondary">015221251146</p>
      </div>
      <div className="bg-[#13040B] p-8 rounded-sm space-y-4 md:text-lg">
        <p>Email:</p>
        <p className="text-secondary">mahbub0692@gmail.com</p>
      </div>
      <div className="bg-[#13040B] p-8 rounded-sm space-y-4 md:text-lg">
        <p>Website:</p>
        <Link href="http://localhost:3000" className="text-secondary hover:text-blue-900 hover:underline">portfolio@mahbub.com</Link>
      </div>
      <div className="bg-[#13040B] p-8 rounded-sm space-y-4 md:text-lg">
        <p>Address:</p>
        <p className="text-secondary">Dhaka, Bangladesh</p>
      </div>
    </div>

    <div className="bg-[#140613] border-2 border-[#20171f] p-8 rounded-sm md:text-lg px-[30px] md:px-[60px] py-[50px] md:py-[80px] space-y-8">
      <h3 className="text-4xl">Follow Me</h3>

      <div className="flex gap-4 text-lg">
        <Link
          href="https://www.linkedin.com/in/mahbub692"
          target="_blank"
          className="p-4 border-2 rounded-full border-gray-700 hover:bg-gray-700"
        >
          <FaLinkedinIn />
        </Link>
        <Link
          href="https://github.com/CodeSperk"
          target="_blank"
          className="p-4 border-2 rounded-full border-gray-700 hover:bg-gray-700"
        >
          <FaGithub />
        </Link>
        <Link
          href="https://www.facebook.com/mahbub0692"
          target="_blank"
          className="p-4 border-2 rounded-full border-gray-700 hover:bg-gray-700"
        >
          <FaFacebookF />
        </Link>
      </div>
    </div>
  </aside>
  );
};

export default Aside;