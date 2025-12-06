import { createFileRoute } from "@tanstack/react-router";
import { Dialog } from "@/_components/BaseUI/Dialog";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="test">
      <div className="dot"></div>Hello
      <Dialog />
    </div>
  );
}
