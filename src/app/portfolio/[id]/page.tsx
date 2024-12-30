// components/ProjectDetailsView.tsx
import GlowingBtn from "@/components/shared/GlowingBtn";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const project = {
  id: "tech-hub-001",
  title: "Technology Hub ecommerce",
  description:
    "A comprehensive electronics marketplace enabling users to browse, compare, and purchase latest tech gadgets with secure payment integration and real-time inventory management.",
  features: [
    "User authentication system with multiple social login options and secure password recovery",
    "Advanced product filtering & search functionality with customizable category hierarchies",
    "Enterprise-grade secure payment gateway integration with multiple currency support",
    "Comprehensive admin dashboard with real-time analytics and reporting capabilities",
    "Automated inventory tracking system with low stock alerts and reorder notifications",
  ],
  challenges: [
    "Implementing real-time inventory synchronization across multiple warehouses",
    "Optimizing search performance for large product catalogs",
    "Managing secure payment processing with multiple gateway integrations",
  ],
  clientRepo: "https://github.com/CodeSperk/tech_spot-A12-client",
  serverRepo: "https://github.com/CodeSperk/tech_spot-A12_server",
  liveLink: "https://b9a12-final-project.web.app",
  img: [
    "/projects/aetherzen.png",
    "/projects/project-slider-img-1.webp",
    "/projects/project-slider-img-1.webp",
  ],
  technologies: [
    "React",
    "Tailwind",
    "MongoDB",
    "Firebase",
    "Node.js",
    "Express",
  ],
  admin: ["admin@techhub.com", "admin123"],
};

const ProjectDetailsView = () => {
  return (
    <div className="min-h-screen page-bg py-10">
    <div className="max-width">
      <header className="overflow-hidden w-full h-[40vh] md:h-[60vh] lg:h-[70vh] text-white ">
        <Image
          src={project.img[0]}
          alt={project.title}
          width={800}
          height={450}
          className="rounded-md w-full"
          priority
        />
      </header>

      <div className="">
        <div className="py-6">
          <h1 className="text-4xl font-bold text-white mb-8">
            {project.title}
          </h1>

          {/* Links and Credentials Section */}
          <div className="flex flex-col gap-4 mb-8">
            {/* Source Links */}
            <div className="flex flex-wrap gap-4">
             
              <GlowingBtn
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-row px-10"
              icon={<FaExternalLinkAlt/>}
              >
                Live Demo
              </GlowingBtn>
              <Link
                href={project.clientRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <FaGithub className="w-5 h-5" />
                Client Source
              </Link>
              <Link
                href={project.serverRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <FaGithub className="w-5 h-5" />
                Server Source
              </Link>
            </div>

            {/* Admin Credentials */}
            <div className="p-4 bg-gray-800 rounded-lg">
              <h3 className="text-white font-semibold mb-2">
                Admin Credentials
              </h3>
              <div className="space-y-1">
                <p className="text-gray-300">
                  Email: <span className="text-white">{project.admin[0]}</span>
                </p>
                <p className="text-gray-300">
                  Password:{" "}
                  <span className="text-white">{project.admin[1]}</span>
                </p>
              </div>
            </div>
          </div>
          <hr />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mt-10">
          <div className="text-white space-y-8">
            {/* Overview Section */}
            <div>
              <h2 className="text-3xl font-semibold mb-3 border-l-4 border-[#FFB400] pl-4">Overview</h2>
              <p className="text-xl text-secondary leading-relaxed">{project.description}</p>
            </div>

             {/* Technologies Used Section */}
             {project.technologies?.length > 0 && (
              <div>
                <h2 className="text-3xl font-semibold mb-3 border-l-4 border-[#FFB400] pl-4">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-2 text-secondary">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Features Section */}
            {project.features?.length > 0 && (
              <div>
                <h2 className="text-3xl font-semibold mb-3 border-l-4 border-[#FFB400] pl-4">Features ✨</h2>
                <ul className="list-disc list-inside space-y-2 text-secondary text-xl">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Challenges Section */}
            {project.challenges?.length > 0 && (
              <div>
                <h2 className="text-3xl font-semibold mb-3 border-l-4 border-[#FFB400] pl-4">Challenges</h2>
                <ul className="list-disc list-inside space-y-2 text-secondary text-xl">
                  {project.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>
            )}

           
          </div>

          <div className="">
            <Image
              src={project.img[0]}
              alt={project.title}
              width={800}
              height={450}
              className="rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProjectDetailsView;
