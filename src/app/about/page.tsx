"use client"
import PageTitle from "@/components/shared/Heading";
import RightSkill from "@/Pages/About/AboutSkills/__rightSkill";
import TechStack from "@/Pages/About/TechStack/TechStack";
import Image from "next/image";
import React, { useState } from "react";

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="page-bg min-h-screen">
      <div className="max-width">
        <PageTitle bg="Resume" title1="About" title2="Me" />

        <div className="max-width section-gap flex flex-col lg:flex-row gap-20 items-center justify-center ">
          {/* about left */}
          <div className="lg:w-1/2 space-y-6 mx-auto text-center lg:ml-6 mb-6">
            <div className="relative w-60 md:w-80 h-72 md:h-96 group">
              {/* Straight card that becomes angled on hover */}
              <div className="absolute inset-0 page-bg rounded-lg transition-transform duration-500 ease-in-out rotate-[8deg] group-hover:rotate-0 border-2 shadow-lg shadow-purple-300" />

              {/* Angled card that becomes straight on hover */}
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
          </div>

          {/* about right */}
          <div className="lg:w-1/2 w-full">
            <div className="mb-8 inline-flex rounded-lg border border-gray-200 p-1 bg-gray-50">
              <button
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "about"
                    ? "bg-[#FFB400] text-white"
                    : "text-gray-600 hover:text-[#FFB400]"
                }`}
                onClick={() => setActiveTab("about")}
              >
                About
              </button>
              <button
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "skills"
                    ? "bg-[#FFB400] text-white"
                    : "text-gray-600 hover:text-[#FFB400]"
                }`}
                onClick={() => setActiveTab("skills")}
              >
                Skills
              </button>
            </div>

            <div className="min-h-[300px]">
              {activeTab === "about" ? (
                <div className="prose prose-purple max-w-none">
                  <p className="text-secondary leading-relaxed text-lg md:text-xl">
                    I am a self-taught web developer with{" "}
                    <span className="text-primary">
                      1+ year of professional experience.
                    </span>{" "}
                    <br />
                    <br />I specialize in crafting high-performance,
                    user-focused web applications with{" "}
                    <span className="text-primary">
                      {" "}
                      reusable and efficient code{" "}
                    </span>
                    . My work blends design, technology, and innovation,
                    ensuring every project is impactful from concept to release.
                    <br />
                    <br />
                    While focused on Frontend development, I am also exploring
                    Backend technologies to grow as a Fullstack developer.
                  </p>
                </div>
              ) : (
                <div className="flex flex-wrap lg:flex-nowrap justify-between gap-4">
                  <RightSkill title="frontend" />
                  <RightSkill title="backend" />
                  <RightSkill title="tools" />
                </div>
              )}
            </div>
          </div>
        </div>

        <TechStack />
      </div>
    </div>
  );
};

export default AboutPage;
