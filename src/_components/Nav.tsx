import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <header className="select-none py-4">
      <nav className="flex justify-center items-center gap-16 text-lg">
        <Link to="/" className="font-medium [view-transition-name:nav-home]" aria-label="Home" viewTransition>
          <span aria-hidden>MGSIMARD</span>
        </Link>
        <Link
          to="/webdev"
          className="[view-transition-name:nav-webdev] group hover:text-foreground"
          activeProps={{ className: "font-medium text-accent" }}
          inactiveProps={{ className: "text-muted" }}
          aria-label="Web Development"
          viewTransition>
          [ <span className="group-hover:underline">WEBDEV</span> ]
        </Link>
        <Link
          to="/gamedev"
          className="[view-transition-name:nav-gamedev] group hover:text-foreground"
          activeProps={{ className: "font-medium" }}
          inactiveProps={{ className: "text-muted" }}
          aria-label="Game Development"
          viewTransition>
          [ <span className="group-hover:underline">GAMEDEV</span> ]
        </Link>
      </nav>
    </header>
  );
}
