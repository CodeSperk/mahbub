export type Project = {
  id: string;
  title: string;
  category?: string;
  featured: boolean;
  description: string;
  features: string[];
  challenges: string[];
  clientRepo: string;
  serverRepo: string;
  liveLink: string;
  img: string[];
  technologies: string[];
  admin?: [string, string]; // Tuple type for [email, password]
};

export const projects: Project[] = [
  {
    id: "travel",
    title: "Travel",
    category: "Booking / MERN",
    featured: true,
    description: "Travel is a responsive full-stack website with secure authentication, spot management, and filtered categories for an enhanced experience.",
    features: [
      "Tourist Spot Management : Authenticated users can add, update, and delete tourist spots, with data stored in MongoDB database.",
      "Protected Routes: Ensures only authenticated users can access specific areas of the website.",
      "Spot Filtering and Categorization: Users can filter spots in different categories Like Country wise spots, all spots, popular spots etc",
    ],
    challenges: [
      "Ensuring smooth user experience with dynamic spot filtering and categorization",
    ],
    clientRepo: "https://github.com/CodeSperk/Travel-B9A10_Client",
    serverRepo: "https://github.com/CodeSperk/Travel-B9A10_Server",
    liveLink: "https://adventura-client.web.app",
    img: [
      "/projects/travel_full.png",
      "/projects/travel_small.jpg",
      "/projects/project-slider-img-1.webp"
    ],
    technologies: ["React", "Tailwind CSS", "MongoDB", "Firebase", "Express"]
  },
  {
    id: "technology-hub-002",
    featured: false,
    title: "TechSpot",
    category: "App Store / MERN / Dashboard",
    description: "A tech  platform with secure payments for premium features, advanced tag-based product search, and dynamic dashboards for users, moderators, and admins.",
    features: [
      "Secure Payment System: Integrated a secure payment system enabling users to unlock premium features for unlimited product uploads",
      "Enhanced Search Functionality: Implemented a robust search feature on the Products page, allowing users to search for products based on tags",
      "Dynamic Dashboard Routes: Created dynamic dashboard routes tailored for users, moderators, and admins.",
    ],
    challenges: [
      "Developing an efficient and accurate tag-based search functionality for large product datasets without compromising page load times",
    ],
    clientRepo: "https://github.com/CodeSperk/tech_spot-A12-client",
    serverRepo: "https://github.com/CodeSperk/tech_spot-A12_server",
    liveLink: "https://b9a12-final-project.web.app",
    img: [
      "/projects/tech_spot.jpg",
      "/projects/tech_spot.jpg",
      "/projects/tech_spot.jpg"
    ],
    technologies: ["React", "Material Tailwind", "Stripe", "MongoDB", "ExpresJS", "FireBase"],
    admin: ["admin1@gmail.com", "Admin123#"]
  },
  {
    id: "portfolio-003",
    featured: true,
    category: "Portfolio / MERN",
    title: "AetherZen",
    description: "A collaborative portfolio project for an startup agency. Building this project I got confident about github collaboration, How to resolve merge and conflict.",
    features: [
    ],
    challenges: [
      "Ensuring seamless real-time collaboration with minimal latency",
      "Managing complex task dependencies and timeline calculations",
      "Implementing efficient file version control system"
    ],
    clientRepo: "",
    serverRepo: "",
    liveLink: "https://aetherzen-psi.vercel.app",
    img: [
      "/projects/aetherzen.jpg",
      "/projects/aetherzen.jpg",
      "/projects/aetherzen.jpg",
    ],
    technologies: ["React", "tailwind CSS", "AOS", "React Helmet"],
    admin: ["***************", "********"]
  },
  {
    id: "furni-mart-004",
    featured: true,
    title: "Furni Mart",
    category: "Ecommerce",
    description: "Furni Mart website specializes in premium furniture, offering a wide range of stylish and functional pieces for every room. Customers can browse collections, filter by preferences such as material, color, and size, and enjoy a seamless shopping experience with secure payment options and fast delivery. Designed for comfort and quality, each product is carefully crafted to enhance the beauty and functionality of any space.",
    features: [
    ],
    challenges: [
    ],
    clientRepo: "",
    serverRepo: "",
    liveLink: "https://www.cb2.com",
    img: [
      "/projects/furni_mart.jpg",
      "/projects/furni_mart.jpg",
      "/projects/furni_mart.jpg",
    ],
    technologies: ["React", "Webpack", "MongoDB", "Express"],
    admin: ["********", "******"]
  }
]