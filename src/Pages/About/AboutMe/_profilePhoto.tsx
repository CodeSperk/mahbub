import GlowingBtn from "@/components/shared/GlowingBtn";
import Image from "next/image";
import React from "react";
import { FaDownload } from "react-icons/fa";

const ProfilePhoto = () => {
  return (
    <div className="lg:w-1/2 space-y-6 mx-auto text-center lg:ml-6 mb-6">
      <div className="relative w-60 md:w-80 h-72 md:h-96 group">
        {/* Angled card that becomes straight on hover */}
        <div className="absolute inset-0 page-bg rounded-lg transition-transform duration-500 ease-in-out rotate-[8deg] group-hover:rotate-0 border-2 shadow-lg shadow-purple-300" />

        {/* Straight card that becomes angled on hover */}
        <div className="absolute inset-0 page-bg rounded-lg transition-transform duration-500 ease-in-out group-hover:rotate-[8deg] border-2" />

        {/* Image container */}
        <div className="relative w-full h-full p-1">
          <div className="w-full h-full relative overflow-hidden rounded-lg">
            <Image
              alt="Profile Picture"
              src="/pp.png"
              height={200}
              width={200}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="w-60 md:w-80 pt-6">
      <GlowingBtn
          icon={<FaDownload />}
          href="/mahbub.pdf"
          target="_blank"
          download="Mahbubur_Rahman_Resume"
          className="w-full"
        >
          Resume
        </GlowingBtn>
      </div>
    </div>
  );
};

export default ProfilePhoto;
