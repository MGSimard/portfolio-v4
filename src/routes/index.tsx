import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/_components/Card";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div>
      <Card />
    </div>
  );
}
