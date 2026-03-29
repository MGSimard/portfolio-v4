import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { NotFound } from "@/components/NotFound";
import { ThemeProvider } from "@/components/ThemeProvider";

export const getRouter = () => {
  const router = createRouter({
    routeTree,
    defaultPreload: "intent",
    defaultViewTransition: true,
    scrollRestoration: true,
    defaultErrorComponent: (err) => <p>{err.error.stack}</p>,
    defaultNotFoundComponent: () => <NotFound />,
    Wrap: ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider defaultTheme="system">{children}</ThemeProvider>
    ),
  });

  return router;
};
