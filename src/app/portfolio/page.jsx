import React, { Suspense } from "react";
import ProjectCard from "../../components/shared/ProjectCard";
import dynamic from "next/dynamic";

const PageTitle = dynamic(() => import("@/components/shared/Heading"), {
  loading:() => <div className="h-20"/>
})

const useProjects = () => {
  const { projects } = require("@/Pages/Portfolio/__helper");
  return projects;
}

const PortfolioPage = () => {
  const projects = useProjects();

  return (
    <div className="page-bg min-h-screen">
    <div className="max-width">
    <Suspense fallback={<div className="h-20" />}>
          <PageTitle bg="Works" title1="My" title2="Portfolio" />
        </Suspense>

      <section className="section-gap text-white grid gap-12 grid-cols-1 md:grid-cols-2 ">
        {projects?.map((project) =>(
          <Suspense 
            key={project?.id}
            fallback={
              <div className="animate-pulse bg-gray-200 h-[960px] lg:h-[444px] xl:h-[550px]"/>
            }
            >

            <ProjectCard project={project}/>
          </Suspense>
          
        )
        )}

      </section>
    </div>
    </div>
  );
};

export default PortfolioPage;
