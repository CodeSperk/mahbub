import React from "react";
import { Project } from "@/types/types";
import ProjectCard from "@/components/shared/ProjectCard";
import Link from "next/link";
import { projects } from "@/Pages/Portfolio/__helper";

const FeaturedProjects = () => {
  const featuredProjects = projects.filter(
    (project: Project) => project.featured
  );

  return (
    <section className="page-bg py-2">
    <div className="max-width section-gap text-white w-full space-y-10 md:space-y-0 md:grid  md:grid-cols-2 grid-rows-4 gap-12 xl:gap-20">
      <div className="">
        <h2 className="text-5xl font-bold text-primary">Notable Projects from My Journey</h2>
        <p className="text-secondary mt-4 text-xl">
          Here are some of my projects that I have worked on.
        </p>
        <Link
          href="/portfolio"
          className="text-primary hover:text-[#95762e] flex items-center gap-2 mt-4 transition-colors text-xl"
        >
          Explore more
          <span className="text-xl">→</span>
        </Link>
      </div>

      {/* Projects Grid */}
      {featuredProjects.map((project: Project, index: number) => (
        <div
          key={project.id}
          className={`
              ${index === 0 && "md:col-start-2 md:row-span-2"} 
              ${index === 1 && "md:row-start-2 md:row-span-2"}
              ${index === 2 && "md:row-start-3 md:col-start-2 md:row-span-2"}
            `}
        >
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
    </section>
  );
};

export default FeaturedProjects;
