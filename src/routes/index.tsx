import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <main className="grow flex flex-col gap-12 max-w-7xl mx-auto w-full py-12">
      <section className="grow text-center flex flex-col items-center justify-center select-none">
        <h1 className="text-7xl font-bold text-transparent [-webkit-text-stroke:1px_var(--color-foreground)] [view-transition-name:nav-home]">
          MGSIMARD
        </h1>
        <ul>
          <li>
            <Link to="/webdev" className="[view-transition-name:nav-webdev] group" viewTransition>
              [ <span className="group-hover:underline">WEBDEV</span> ]
            </Link>
          </li>
          <li>
            <Link to="/gamedev" className="[view-transition-name:nav-gamedev] group" viewTransition>
              [ <span className="group-hover:underline">GAMEDEV</span> ]
            </Link>
          </li>
          <li>
            {/* DRAWER? MODAL? DIALOG? */}[ <span className="group-hover:underline">ABOUT</span> ]
          </li>
        </ul>
      </section>
    </main>
  );
}
