export interface Project {
  title: string;
  thumbnail: string;
  label: string;
  carouselImages: Array<{
    url: string;
    alt: string;
  }>;
  overview: string;
  features: Array<string>;
  stack: string;
  description: string;
  link: string | null;
  githubRepo: string | null;
}

export interface Section {
  section: string;
  more: string | null;
  projects: Array<Project>;
}

export interface ProjectsData {
  name: string;
  description: string;
  author: string;
  data: Array<Section>;
}
