"use client";
import React, { useState } from "react";
import Skills from "./__skills";

const AboutContent = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="lg:w-1/2 w-full">

      {/* tabs */}
      <div className="mb-8 inline-flex rounded-lg border-2 border-gray-400 bg-transparent">
        <button
          className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
            activeTab === "about"
              ? "bg-[#4d204d] text-white"
              : "text-secondary hover:text-[#FFB400]"
          }`}
          onClick={() => setActiveTab("about")}
        >
          About
        </button>
        <button
          className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
            activeTab === "skills"
              ? "bg-[#FFB400] text-white"
              : "text-secondary hover:text-[#4d204d]"
          }`}
          onClick={() => setActiveTab("skills")}
        >
          Skills
        </button>
      </div>
      
      {/* Contents */}
      <div className="lg:min-h-[396px]">
        {activeTab === "about" ? (
          <div className="prose prose-purple max-w-none">
            <p className="text-secondary leading-relaxed text-lg md:text-xl">
              I am a self-taught web developer with{" "}
              <span className="text-[#4d204d] font-bold">
                1+ year of professional experience.
              </span>{" "}
              <br />
              <br />I specialize in crafting high-performance, user-focused web
              applications with{" "}
              <span className="text-[#4d204d] font-bold">
                {" "}
                reusable and efficient code.{" "}
              </span>
               My work blends design, technology, and innovation, ensuring
              every project is impactful from concept to release.
              <br />
              <br />
              While focused on Frontend development, I am also exploring Backend
              technologies to grow as a Fullstack developer.
            </p>
          </div>
        ) : (
          <div className="flex flex-wrap lg:flex-nowrap justify-between gap-4">
            <Skills title="frontend" />
            <Skills title="backend" />
            <Skills title="tools" />
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutContent;
