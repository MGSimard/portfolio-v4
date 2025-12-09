import { Outlet, createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/_components/Nav";

export const Route = createFileRoute("/_with-header")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}
