import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ProjectSection } from "@/components/ProjectSection";
import { projectsWebdev } from "@/data/projects-webdev";
import { SITE_URL } from "@/lib/consts";
import { getProjectSlug, validateProjectSearch } from "@/lib/project-routing";

export const Route = createFileRoute("/_with-header/webdev")({
  validateSearch: validateProjectSearch,
  head: () => ({
    links: [{ rel: "canonical", href: `${SITE_URL}/webdev` }],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  const webdevProjects = projectsWebdev.data;
  const { project } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });

  return (
    <>
      {webdevProjects.map((projectGroup) => (
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
