import Image from "next/image";
import Link from "next/link";
import { Project } from "@/Pages/Portfolio/__helper";

const ProjectCard = ({ project }: { project: Project }) => {
  if (!project) return null;
  const { id, img, title } = project;

  return (
    <div
      className="flex flex-col gap-8  justify-start shadow-md shadow-button"
    >
      <div className="relative bg-cover bg-no-repeat overflow-hidden p-12 lg:p-16 xl:p-20 pb-0 h-[360px] md:h-[300px] lg:h-[360px] xl:h-[440px]">
        <div className="absolute -top-80 lg:-top-96 left-1/2 lg:left-3/5 -translate-x-1/2 xl:-translate-x-1/3 -rotate-[45deg] w-3/5 z-0">
          <Image
            src={img[0]}
            alt="Project background"
            width={280}
            height={200}
            className="w-full"
          />
        </div>

        <div className="absolute inset-0 bg-black opacity-85"></div>

        <Link href={`/portfolio/${id}`}>
          <div className="relative z-0">
            <Image
              src={img[0]}
              alt="Project preview"
              width={200}
              height={100}
              className="w-full opacity-90"
            />
          <div className="absolute z-10 top-0 left-0 bg-page-bg w-full h-full opacity-10 hover:opacity-40 duration-500">
            
          </div>
          </div>
          </Link>
      </div>

      <div className="space-y-2 pr-4 mb-8 px-12 lg:px-16 xl:px-20">
        <Link href={`/portfolio/${id}`}>
        <h3 className="text-2xl font-bold hover:text-highlight">{title}</h3>
        </Link>
        <p className="text-xl">
          Charity/ Fund Rising / Non profit
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
