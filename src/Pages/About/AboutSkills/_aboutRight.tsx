"use client";
import React, { useState } from "react";
import RightSkill from "./__rightSkill";

const AboutRight = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
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
              I am a self-taught web developer with 
              <span className="text-primary"> 
                1+ year of professional experience 
              </span>{" "} 
              at <span className="text-primary">AetherZen</span>.
              <br />
              <br />I specialize in crafting high-performance, user-focused web
              applications with{" "} 
              <span className="text-primary"> reusable and efficient code </span>. 
              My work blends design, technology, and innovation, ensuring every
              project is impactful from concept to release.
              <br />
              <br />
              While focused on Frontend development, I am also exploring Backend
              technologies to grow as a versatile developer. I leverage
              cutting-edge tools and open-source solutions to deliver
              exceptional user experiences.
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
  );
};

export default AboutRight;
