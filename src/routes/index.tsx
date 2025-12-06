import { createFileRoute } from "@tanstack/react-router";
import { Dialog } from "@/_components/BaseUI/Dialog";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="test">
      Hello
      <Dialog />
      <img src="" alt="" />
      <picture>
        <source srcSet="" type="image/webp" />
        <img src="" alt="" />
      </picture>
      <video src="" />
      <canvas />
      <svg />
    </div>
  );
}
