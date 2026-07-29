export type ProjectItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  challenges?: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  imageAlt?: string;
};
