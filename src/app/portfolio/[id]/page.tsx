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

const linkStyles =
  "px-4 py-2 font-bold rounded-md bg-button hover:bg-button-hover transition-colors flex items-center gap-2 text-sm";

const ProjectDetailsView = () => {
  return (
    <div className="min-h-screen bg-page-bg py-10">
      <div className="max-width">
        <header className="overflow-hidden w-full h-[320px] md:h-[480px] lg:h-[70vh]">
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
            <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
              <div>
                <h1 className="text-4xl font-bold mb-8">{project.title}</h1>
                <div className="flex items-center flex-wrap gap-4">
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    className={linkStyles}
                  >
                    Live Link
                    <FaExternalLinkAlt className="w-5 h-5" />
                  </Link>

                  <Link
                    href={project.clientRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkStyles}
                  >
                    <FaGithub className="w-5 h-5" />
                    Client
                  </Link>

                  <Link
                    href={project.serverRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkStyles}
                  >
                    <FaGithub className="w-5 h-5" />
                    Server
                  </Link>
                </div>
              </div>

              {/* Admin Credentials */}
              <div className="p-4 bg-card-bg rounded-lg">
                <h3 className="font-semibold mb-2">Admin Credentials</h3>
                <div className="space-y-1">
                  <p className="">
                    Email: <span className="">{project.admin[0]}</span>
                  </p>
                  <p className="0">
                    Password: <span className="">{project.admin[1]}</span>
                  </p>
                </div>
              </div>
            </div>
            <hr />
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="space-y-10 md:space-y-12">
              {/* Overview Section */}
              <div>
                <h2 className="text-3xl font-semibold mb-3 border-l-4 border-highlight pl-4">
                  Overview
                </h2>
                <p className="text-xl leading-relaxed pt-2">{project.description}</p>
              </div>

              {/* Technologies Used Section */}
              {project.technologies?.length > 0 && (
                <div>
                  <h2 className="text-3xl font-semibold mb-3 border-l-4 border-highlight pl-4">
                    Technologies Used
                  </h2>
                  <div className="flex flex-wrap gap-4 pt-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-1 shadow-sm border-t border-highlight shadow-highlight rounded-full"
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
                  <h2 className="text-3xl font-semibold mb-3 border-l-4 border-highlight pl-4">
                    Features ✨
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-xl pl-6 pt-2">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Challenges Section */}
              {project.challenges?.length > 0 && (
                <div>
                  <h2 className="text-3xl font-semibold mb-3 border-l-4 border-highlight pl-4">
                    Challenges
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-xl pl-6 pt-2">
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
