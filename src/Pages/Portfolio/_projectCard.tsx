import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Project } from "@/Pages/Portfolio/__helper"

const ProjectCard = ({ project }: { project: Project }) => {
  if (!project) return null;
  const { id, img, title } = project;

  return (
    <div className="flex flex-col gap-8 justify-between cursor-pointer group">
      <div className="relative bg-cover bg-no-repeat overflow-hidden p-10 lg:p-12 xl:p-16 pb-0 h-[360px] lg:h-[444px] xl:h-[550px]">
        <div className="absolute -top-80 lg:-top-96 left-1/2 lg:left-3/5 -translate-x-1/2 xl:-translate-x-1/3 -rotate-[45deg] w-3/5 z-0">
          <Suspense
            fallback={
              <div className="animate-pulse bg-gray-200 w-full h-full" />
            }
          >
            <Image
              src={img[0]}
              alt="Project background"
              width={280}
              height={200}
              className="lg:w-[250px] xl:w-[280px]"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Suspense>
        </div>
        <div className="absolute inset-0 bg-black opacity-85"></div>

        <div className="relative z-10">
          <Suspense
            fallback={
              <div className="animate-pulse bg-gray-200 w-full h-full" />
            }
          >
            <Image
              src={img[0]}
              alt="Project preview"
              width={200}
              height={100}
              className="w-full opacity-90"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Suspense>
        </div>

        <div className="absolute z-10 top-0 left-0 bg-black w-full h-full opacity-80 duration-500 hidden group-hover:flex items-center justify-center ">
          <Link
            href={`/portfolio/${id}`} // Simplify the URL
            className="flex gap-2 flex-col justify-center items-center text-gray-400 hover:text-[#fefef5] mt-10"
          >
            <FaArrowCircleRight className="text-4xl" />
            <h4 className="text-xl">View Details</h4>
          </Link>
        </div>
      </div>

      <div className="space-y-2 pr-4">
        <h3 className="text-3xl font-bold">{title}</h3>
        <p className="text-secondary text-xl">
          Charity/ Fund Rising / Non profit
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
