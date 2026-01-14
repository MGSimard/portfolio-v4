import { createFileRoute } from "@tanstack/react-router";
import { ProjectSection } from "@/_components/ProjectSection";
import { projectsGamedev } from "@/_data/projects-gamedev";
import { SITE_URL } from "@/_lib/consts";

export const Route = createFileRoute("/_with-header/gamedev")({
  head: () => ({
    links: [{ rel: "canonical", href: `${SITE_URL}/gamedev` }],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  const gamedevProjects = projectsGamedev.data;

  return (
    <>
      {gamedevProjects.map((projectGroup) => (
        <ProjectSection key={projectGroup.section} heading={projectGroup.section} projects={projectGroup.projects} />
      ))}
    </>
  );
}
