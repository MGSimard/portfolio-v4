export interface Project {
  title: string;
  thumbnail: string;
  features: Array<string>;
  label: string;
  stack: string;
  author: string;
  description: string;
  carouselImages?: Array<{
    url: string;
    alt: string;
  }>;
  link: string;
  githubRepo?: string;
}

export interface Section {
  section: string;
  more: string;
  projects: Array<Project>;
}

export interface ProjectsData {
  name: string;
  description: string;
  author: string;
  data: Array<Section>;
}
