import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ProjectSection } from "@/components/ProjectSection";
import { projectsGamedev } from "@/data/projects-gamedev";
import { SITE_URL } from "@/lib/consts";
import { getProjectSlug, validateProjectSearch } from "@/lib/project-routing";

export const Route = createFileRoute("/_with-header/gamedev")({
  validateSearch: validateProjectSearch,
  head: () => ({
    links: [{ rel: "canonical", href: `${SITE_URL}/gamedev` }],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  const gamedevProjects = projectsGamedev.data;
  const { project } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });

  return (
    <>
      {gamedevProjects.map((projectGroup) => (
        <ProjectSection
          key={projectGroup.section}
          heading={projectGroup.section}
          projects={projectGroup.projects}
          activeProjectSlug={project}
          getProjectSlug={getProjectSlug}
          onProjectOpenChange={(projectSlug, open) => {
            void navigate({
              search: { project: open ? projectSlug : undefined },
            });
          }}
        />
      ))}
    </>
  );
}
