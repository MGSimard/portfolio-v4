import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <header>
      <nav className="flex justify-center items-center gap-4">
        <Link to="/" className="[view-transition-name:nav-home]" viewTransition>
          HOME
        </Link>
        <Link to="/webdev" className="[view-transition-name:nav-webdev]" viewTransition>
          WEBDEV
        </Link>
        <Link to="/gamedev" className="[view-transition-name:nav-gamedev]" viewTransition>
          GAMEDEV
        </Link>
      </nav>
    </header>
  );
}
