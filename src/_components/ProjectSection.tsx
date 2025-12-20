import type { Project } from "@/_lib/types";
import { ProjectDialog } from "@/_components/ProjectDialog";

interface ProjectSectionProps {
  heading: string;
  projects: Array<Project>;
}

export function ProjectSection({ heading, projects }: ProjectSectionProps) {
  return (
    <section>
      <h2 className="text-4xl font-bold uppercase">{heading}</h2>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-4">
        {projects.map((project) => (
          <li key={project.title}>
            <ProjectDialog project={project} section={heading} />
          </li>
        ))}
      </ul>
    </section>
  );
}
