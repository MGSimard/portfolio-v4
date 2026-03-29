import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { ThemeToggle } from "@/components/ThemeToggle";

import { configLinks, configMeta, favIcons, fontPreloads, misc, openGraph, styles, twitter } from "@/lib/head";

export const Route = createRootRoute({
  head: () => ({
    meta: [...configMeta, ...openGraph, ...twitter, ...misc],
    links: [...configLinks, ...favIcons, ...fontPreloads, ...styles],
  }),
  shellComponent: RootDocument,
});

const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='system')?stored:'system';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='system'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.setAttribute('data-theme-preference',mode);root.classList.toggle('dark',resolved==='dark');root.style.colorScheme=resolved;}catch(e){}})();`;

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme-preference="system" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <HeadContent />
      </head>
      <body>
        <div id="root" className="flex min-h-dvh flex-col px-4">
          {children}
          <ThemeToggle />
        </div>
        <TanStackDevtools
          config={{
            position: "bottom-left",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
