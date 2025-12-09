import { createFileRoute } from "@tanstack/react-router";
import { ProjectDialog } from "@/_components/ProjectDialog";

export const Route = createFileRoute("/_with-header/webdev")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello "/webdev"!
      <ProjectDialog
        parent="WebDev"
        title="WebDev"
        label="WebDev"
        thumbnail="https://via.placeholder.com/150"
        features={["Feature 1", "Feature 2", "Feature 3"]}
        type="FULLSTACK DEVELOPMENT"
        author="John Doe"
        description="This is a description of the project"
      />
    </div>
  );
}
