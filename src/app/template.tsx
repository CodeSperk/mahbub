"use client"
import React, { useEffect } from "react";
import { animationPageIn} from "@/utils/animation"
import AnimateBG from "@/components/shared/AnimateBG";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animationPageIn();
  },[])

  return (
    <div>
      <div className="hidden md:block relative z-50">
        <AnimateBG id="banner-1" className="left-0"/>
        <AnimateBG id="banner-2" className="left-1/3"/>
        <AnimateBG id="banner-3" className="left-2/3"/>
      </div>
      {children}
    </div>
  );
}
