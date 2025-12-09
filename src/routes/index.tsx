import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <section className="home fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center -z-1 flex flex-col">
      <h1 className="text-7xl font-bold text-transparent [-webkit-text-stroke:1px_var(--color-foreground)]">
        MGSIMARD
      </h1>
    </section>
  );
}
