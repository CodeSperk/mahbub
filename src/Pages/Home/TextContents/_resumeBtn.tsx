import React from "react";
import { MdDownload } from "react-icons/md";

const ResumeBtn = () => {
  return (
    <div className="w-120px md:w-[150px] relative cursor-pointer">
      {/* Main button */}
      <button className="w-120px md:w-[150px] py-4 px-[30px] border-2 border-[#ffd700] hover:bg-[#ffd700] rounded-md uppercase duration-700">
        <a
          href="/mahbub.pdf"
          download="resume"
          className="flex items-center justify-center gap-2"
        >
          Resume <MdDownload size={16} />
        </a>
      </button>
    </div>
  );
};

export default ResumeBtn;
