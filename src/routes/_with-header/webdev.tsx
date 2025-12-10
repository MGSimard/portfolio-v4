import { createFileRoute } from "@tanstack/react-router";
import { ProjectSection } from "@/_components/ProjectSection";
import { projectsWebdev } from "@/_data/projects-webdev";

export const Route = createFileRoute("/_with-header/webdev")({
  component: RouteComponent,
});

function RouteComponent() {
  const webdevProjects = projectsWebdev.data;

  return (
    <>
      {webdevProjects.map((projectGroup) => (
        <ProjectSection key={projectGroup.section} heading={projectGroup.section} projects={projectGroup.projects} />
      ))}
    </>
  );
}
