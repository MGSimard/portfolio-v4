import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <header className="select-none py-4">
      <nav className="flex justify-center items-center gap-8 md:gap-16 text-lg font-medium">
        <Link to="/" className="font-medium [view-transition-name:nav-home]" aria-label="Home" viewTransition>
          <span className="md:before:content-['MGSIMARD'] before:content-['//']" aria-hidden></span>
        </Link>
        <Link
          to="/webdev"
          className="[view-transition-name:nav-webdev] group hover:text-primary focus-visible:text-primary outline-none text-nowrap"
          activeProps={{ className: "text-secondary" }}
          inactiveProps={{ className: "text-primary/50" }}
          aria-label="Web Development"
          viewTransition>
          [ <span className="group-hover:underline group-focus-visible:underline">WEBDEV</span> ]
        </Link>
        <Link
          to="/gamedev"
          className="[view-transition-name:nav-gamedev] group hover:text-primary focus-visible:text-primary outline-none text-nowrap"
          activeProps={{ className: "text-secondary" }}
          inactiveProps={{ className: "text-primary/50" }}
          aria-label="Game Development"
          viewTransition>
          [ <span className="group-hover:underline group-focus-visible:underline">GAMEDEV</span> ]
        </Link>
      </nav>
    </header>
  );
}
