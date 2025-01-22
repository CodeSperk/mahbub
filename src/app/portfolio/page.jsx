import React, { Suspense } from "react";
import ProjectCard from "../../components/shared/ProjectCard";
import dynamic from "next/dynamic";

const PageTitle = dynamic(() => import("@/components/shared/Heading"), {
  loading: () => <div className="h-20" />,
});

const useProjects = () => {
  const { projects } = require("@/Pages/Portfolio/__helper");
  return projects;
};

const PortfolioPage = () => {
  const projects = useProjects();

  return (
    <div className="bg-page-bg min-h-screen pt-6">
      <div className="max-width">
        <PageTitle bg="Portfolio" title1="My" title2="Projects" />

        <section className="pt-4 md:pt-10 grid gap-12 lg:gap-16 grid-cols-1 md:grid-cols-2 ">
          {projects?.map((project) => (
            <Suspense
              key={project?.id}
              fallback={
                <div className="animate-pulse bg-gray-200 h-[960px] lg:h-[444px] xl:h-[550px]" />
              }
            >
              <ProjectCard project={project} />
            </Suspense>
          ))}
        </section>
      </div>
    </div>
  );
};

export default PortfolioPage;
