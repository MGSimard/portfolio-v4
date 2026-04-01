import type { Project } from "@/lib/types";
import { ProjectDialog } from "@/components/ProjectDialog";

interface ProjectSectionProps {
  heading: string;
  projects: Array<Project>;
  activeProjectSlug?: string;
  getProjectSlug: (project: Project) => string;
  onProjectOpenChange: (projectSlug: string, open: boolean) => void;
}

export function ProjectSection({ heading, projects, activeProjectSlug, getProjectSlug, onProjectOpenChange }: ProjectSectionProps) {
  return (
    <section>
      <h2 className="text-2xl font-medium uppercase mb-4">{heading}</h2>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] md:grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-4">
        {projects.map((project) => {
          const projectSlug = getProjectSlug(project);

          return (
            <li key={project.title}>
              <ProjectDialog
                project={project}
                section={heading}
                open={activeProjectSlug === projectSlug}
                onOpenChange={(open) => onProjectOpenChange(projectSlug, open)}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
