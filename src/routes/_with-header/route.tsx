import { Outlet, createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/_components/Nav";
import { Footer } from "@/_components/Footer";

export const Route = createFileRoute("/_with-header")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Nav />
      <main className="grow flex flex-col gap-12 max-w-7xl mx-auto w-full py-12">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
