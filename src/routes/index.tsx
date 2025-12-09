import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <section className="grow text-center flex flex-col items-center justify-center">
      <h1 className="text-7xl font-bold text-transparent [-webkit-text-stroke:1px_var(--color-foreground)]">
        MGSIMARD
      </h1>
      <ul>
        <li>
          <Link to="/" className="[view-transition-name:nav-home]" viewTransition>
            HOME
          </Link>
        </li>
        <li>
          <Link to="/webdev" className="[view-transition-name:nav-webdev]" viewTransition>
            WEBDEV
          </Link>
        </li>
        <li>
          <Link to="/gamedev" className="[view-transition-name:nav-gamedev]" viewTransition>
            GAMEDEV
          </Link>
        </li>
      </ul>
    </section>
  );
}
