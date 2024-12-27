export type Project = {
  id: string;
  title: string;
  description: string;
  features: string[];
  challenges: string[];
  clientRepo: string;
  serverRepo: string;
  liveLink: string;
  img: string[];
  technologies: string[];
  admin: [string, string]; // Tuple type for [email, password]
};

export const projects: Project[] = [
  {
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
  },
  {
    id: "food-finder-002",
    title: "FoodFinder Restaurant App",
    description: "A dynamic restaurant discovery platform where users can find local eateries, read reviews, make reservations and track their delivery orders in real-time.",
    features: [
      "Intelligent restaurant search algorithm with personalized recommendations based on user preferences",
      "Streamlined online ordering system with real-time kitchen integration and updates",
      "Comprehensive review system with photo uploads and verified purchase badges",
      "Smart table booking system with automatic availability updates and reminder notifications",
      "Advanced live order tracking with GPS integration and estimated delivery times"
    ],
    challenges: [
      "Developing accurate delivery time estimation system considering multiple variables",
      "Building a scalable real-time order tracking system",
      "Implementing a fair and spam-proof review verification system"
    ],
    clientRepo: "https://github.com/CodeSperk/food-finder-client",
    serverRepo: "https://github.com/CodeSperk/food-finder-server",
    liveLink: "https://food-finder-app.web.app",
    img: [
      "/projects/project-slider-img-1.webp",
      "/projects/project-slider-img-1.webp",
      "/projects/project-slider-img-1.webp"
    ],
    technologies: ["React", "Material UI", "PostgreSQL", "AWS", "Express", "Redis"],
    admin: ["admin@foodfinder.com", "food123admin"]
  },
  {
    id: "task-master-003",
    title: "TaskMaster Project Management",
    description: "A collaborative project management tool featuring task assignment, progress tracking, timeline visualization, and team communication capabilities.",
    features: [
      "Comprehensive task management system with dependencies tracking and automated workflows",
      "Real-time team collaboration tools with integrated chat and video conferencing",
      "Secure file sharing system with version control and access management",
      "Automated progress reports generation with customizable templates and scheduling options",
      "Smart calendar integration with multiple timezone support and conflict detection"
    ],
    challenges: [
      "Ensuring seamless real-time collaboration with minimal latency",
      "Managing complex task dependencies and timeline calculations",
      "Implementing efficient file version control system"
    ],
    clientRepo: "https://github.com/CodeSperk/taskmaster-client",
    serverRepo: "https://github.com/CodeSperk/taskmaster-server",
    liveLink: "https://taskmaster-pm.web.app",
    img: [
      "/projects/project-slider-img-1.webp",
      "/projects/project-slider-img-1.webp",
      "/projects/project-slider-img-1.webp"
    ],
    technologies: ["Vue.js", "Vuetify", "MongoDB", "Socket.io", "Express", "JWT"],
    admin: ["admin@taskmaster.com", "task456admin"]
  },
  {
    id: "health-track-004",
    title: "HealthTrack Fitness App",
    description: "A comprehensive fitness tracking application that helps users monitor workouts, nutrition, and health metrics with personalized goal setting and progress analysis.",
    features: [
      "Advanced workout tracking system with AI-powered form correction and recommendations",
      "Personalized meal planning with nutritional analysis and grocery list generation",
      "Detailed progress analytics with visual representations and trend analysis reports",
      "Smart goal setting system with milestone tracking and achievement rewards",
      "Active community features with challenges, group activities, and social sharing"
    ],
    challenges: [
      "Creating accurate workout recognition algorithms for different exercise types",
      "Developing personalized nutrition recommendations based on user goals",
      "Implementing secure health data storage and compliance measures"
    ],
    clientRepo: "https://github.com/CodeSperk/healthtrack-client",
    serverRepo: "https://github.com/CodeSperk/healthtrack-server",
    liveLink: "https://healthtrack-fitness.web.app",
    img: [
      "/projects/project-slider-img-1.webp",
      "/projects/project-slider-img-1.webp",
      "/projects/project-slider-img-1.webp"
    ],
    technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "Express"],
    admin: ["admin@healthtrack.com", "health789admin"]
  },
  {
    id: "edu-learn-005",
    title: "EduLearn Learning Platform",
    description: "An interactive e-learning platform offering course creation, student enrollment, progress tracking, and integrated video conferencing for virtual classrooms.",
    features: [
      "Intuitive course management system with multimedia content support and scheduling",
      "High-quality video lecture platform with interactive elements and closed captions",
      "Advanced quiz system with automatic grading and detailed performance analytics",
      "Comprehensive student progress tracking with personalized learning path recommendations",
      "Reliable live class platform with recording and interactive whiteboard features"
    ],
    challenges: [
      "Optimizing video streaming performance for different network conditions",
      "Building a scalable system for handling multiple concurrent live sessions",
      "Implementing secure assessment system to prevent cheating"
    ],
    clientRepo: "https://github.com/CodeSperk/edulearn-client",
    serverRepo: "https://github.com/CodeSperk/edulearn-server",
    liveLink: "https://edulearn-platform.web.app",
    img: [
      "/projects/project-slider-img-1.webp",
      "/projects/project-slider-img-1.webp",
      "/projects/project-slider-img-1.webp"
    ],
    technologies: ["Next.js", "Typescript", "PostgreSQL", "Docker", "GraphQL"],
    admin: ["admin@edulearn.com", "edu101admin"]
  },
  {
    id: "real-estate-006",
    title: "RealEstate Property Manager",
    description: "A comprehensive real estate platform for property listing, virtual tours, appointment scheduling, and document management for buyers, sellers, and agents.",
    features: [
      "Advanced property listings with detailed filtering and comparative market analysis",
      "Immersive virtual tours with 360-degree views and interactive floorplans",
      "Secure document handling system with electronic signatures and version control",
      "Comprehensive agent portal with lead management and performance tracking",
      "Real-time analytics dashboard with market trends and prediction models"
    ],
    challenges: [
      "Implementing smooth 360-degree virtual tour functionality with minimal loading time",
      "Creating secure digital signature system for legal documents",
      "Developing accurate property valuation algorithms based on market data"
    ],
    clientRepo: "https://github.com/CodeSperk/realestate-client",
    serverRepo: "https://github.com/CodeSperk/realestate-server",
    liveLink: "https://realestate-manager.web.app",
    img: [
      "/projects/project-slider-img-1.webp",
      "/projects/project-slider-img-1.webp",
      "/projects/project-slider-img-1.webp"
    ],
    technologies: ["React", "Redux", "MongoDB", "AWS S3", "Express", "Stripe"],
    admin: ["admin@realestate.com", "estate202admin"]
  }
]