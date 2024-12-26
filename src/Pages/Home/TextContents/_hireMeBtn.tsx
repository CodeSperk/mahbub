"use client"
import React from "react";
import "@/styles/animations.css"; 
import Link from "next/link";

const HireMeBtn: React.FC = () => {
  return (
     <Link href="/contact" download className="glow-button w-120px md:w-[150px]">
      <span className="button text-center text-xl font-bold">Hire Me</span>
     </Link> 
  );
};

export default HireMeBtn;
