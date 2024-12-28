import React from "react";
import "@/styles/animations.css";
import { MdDownload } from "react-icons/md";
import Link from "next/link";

const ResumeBtn = () => {
  return (
    <Link
      href="/mahbub.pdf"
      target="_blank"
      download="resume"
      className="glow-button flex items-center justify-center gap-2"
    >
      <p className="text-xl">Resume </p>
      <MdDownload />
    </Link>
  );
};

export default ResumeBtn;
