// components/ProjectDetailsView.tsx
import Image from 'next/image'
import { Suspense } from 'react';

const project = {
  id: "tech-hub-001",
  title: "Technology Hub ecommerce",
  description: "A comprehensive electronics marketplace enabling users to browse, compare, and purchase latest tech gadgets with secure payment integration and real-time inventory management.",
  features: [
    "User authentication system with multiple social login options and secure password recovery",
    "Advanced product filtering & search functionality with customizable category hierarchies",
    "Enterprise-grade secure payment gateway integration with multiple currency support",
    "Comprehensive admin dashboard with real-time analytics and reporting capabilities",
    "Automated inventory tracking system with low stock alerts and reorder notifications"
  ],
  challenges: [
    "Implementing real-time inventory synchronization across multiple warehouses",
    "Optimizing search performance for large product catalogs",
    "Managing secure payment processing with multiple gateway integrations"
  ],
  clientRepo: "https://github.com/CodeSperk/tech_spot-A12-client",
  serverRepo: "https://github.com/CodeSperk/tech_spot-A12_server",
  liveLink: "https://b9a12-final-project.web.app",
  img: [
    "/projects/project-slider-img-1.webp",
    "/projects/project-slider-img-1.webp",
    "/projects/project-slider-img-1.webp"
  ],
  technologies: ["React", "Tailwind", "MongoDB", "Firebase", "Node.js", "Express"],
  admin: ["admin@techhub.com", "admin123"]
}

const ProjectDetailsView = () => {
  return (
    <div className="min-h-screen page-bg">
      <div className="max-width py-20">
        <h1 className="text-4xl font-bold text-white mb-8">{project.title}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Suspense 
              fallback={
                <div className="animate-pulse bg-gray-200 aspect-video rounded-lg" />
              }
            >
              <Image
                src={project.img[0]}
                alt={project.title}
                width={800}
                height={450}
                className="rounded-lg"
                priority
              />
            </Suspense>
            
            {/* Image gallery */}
            <div className="grid grid-cols-3 gap-4">
              {project.img.slice(1).map((img, index) => (
                <Suspense 
                  key={index}
                  fallback={
                    <div className="animate-pulse bg-gray-200 aspect-square rounded" />
                  }
                >
                  <Image
                    src={img}
                    alt={`${project.title} preview ${index + 2}`}
                    width={200}
                    height={200}
                    className="rounded"
                    loading="lazy"
                  />
                </Suspense>
              ))}
            </div>
          </div>
          
          <div className="text-white space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Project Description</h2>
              <p>{project.description}</p>
            </div>
            
            {project.technologies && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div className="flex gap-4">
              {project.liveLink && (
                <a 
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  View Live
                </a>
              )}
              {project.clientRepo && (
                <a 
                  href={project.clientRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailsView;