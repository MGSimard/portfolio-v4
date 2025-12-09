import { createFileRoute } from "@tanstack/react-router";
import { ProjectDialog } from "@/_components/ProjectDialog";
import { projectsWebdev } from "@/_data/projects-webdev";

export const Route = createFileRoute("/_with-header/webdev")({
  component: RouteComponent,
});

function RouteComponent() {
  const webdevProjects = projectsWebdev.data;

  return (
    <div>
      {webdevProjects.map((section) => (
        <div key={section.section}>
          <h2>{section.section}</h2>
          {section.projects.map((project) => (
            <ProjectDialog key={project.title} project={project} section={section.section} label="Web Development" />
          ))}
        </div>
      ))}
    </div>
  );
}
