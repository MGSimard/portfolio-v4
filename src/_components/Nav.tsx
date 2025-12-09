import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/webdev">Webdev</Link>
        <Link to="/gamedev">Gamedev</Link>
      </nav>
    </header>
  );
}
