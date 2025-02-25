"use client";
import React, { useState } from "react";
import Skills from "./__skills";

const AboutContent = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="lg:w-1/2 w-full">

      {/* tabs */}
      <div className="mb-8 inline-flex rounded-lg border-2 border-[#4d204d] bg-transparent">
        <button
          className={`px-6 py-2 rounded-md text-sm md:text-base font-medium transition-colors ${
            activeTab === "about"
              ? "bg-[#4d204d]"
              : "hover:text-[#4d204d]"
          }`}
          onClick={() => setActiveTab("about")}
        >
          About
        </button>
        <button
          className={`px-6 py-2 rounded-md text-sm md:text-base font-medium transition-colors ${
            activeTab === "skills"
              ? "bg-[#4d204d]"
              : "hover:text-[#4d204d]"
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
            <p>
              I am a self-taught web developer with{" "}
              <span className="text-highlight font-bold">
                1+ year of professional experience.
              </span>{" "}
              <br />
              <br />I specialize in crafting high-performance, user-focused web
              applications with{" "}
              <span className="text-highlight font-bold">
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
