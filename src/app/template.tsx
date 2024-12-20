"use client"
import React, { useEffect } from "react";
import { animationPageIn} from "@/utils/animation"

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animationPageIn();
  },[])

  return (
    <div >
      <div className="hidden md:block">
      <div
        id="banner-1"
        className="min-h-screen bg-gradient-to-b from-[#0F050E] via-[#0F050E] to-[#1C0611] z-10 fixed top-0 left-0 w-1/3"
      />
      <div
        id="banner-2"
        className="min-h-screen bg-gradient-to-b from-[#0F050E] via-[#0F050E] to-[#1C0611] z-10 fixed top-0 left-1/3 w-1/3"
      />
      <div
        id="banner-3"
        className="min-h-screen bg-gradient-to-b from-[#0F050E] via-[#0F050E] to-[#1C0611] z-10 fixed top-0 left-2/3 w-1/3"
      />
      </div>
      {children}
    </div>
  );
}
