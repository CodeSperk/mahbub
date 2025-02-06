export type Project = {
  id: string;
  title: string;
  featured: boolean;
  description: string;
  features: string[];
  challenges: string[];
  clientRepo: string;
  serverRepo: string;
  liveLink: string;
  img: string[];
  technologies: string[];
  admin?: [string, string];
};