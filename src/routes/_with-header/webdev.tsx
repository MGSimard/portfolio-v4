import { createFileRoute } from "@tanstack/react-router";
import { ProjectSection } from "@/components/ProjectSection";
import { projectsWebdev } from "@/data/projects-webdev";
import { SITE_URL } from "@/lib/consts";

export const Route = createFileRoute("/_with-header/webdev")({
  head: () => ({
    links: [{ rel: "canonical", href: `${SITE_URL}/webdev` }],
  }),
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
