import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_with-header/webdev")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/webdev"!</div>;
}
