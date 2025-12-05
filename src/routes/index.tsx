import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import indexCss from "./index.css?url";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      {
        rel: "stylesheet",
        href: indexCss,
      },
    ],
  }),
  component: App,
});

function App() {
  return (
    <div>
      <h1>MGSIMARD</h1>
      <motion.button className="test" initial={{ scale: 0 }} animate={{ scale: 1 }} />
    </div>
  );
}
