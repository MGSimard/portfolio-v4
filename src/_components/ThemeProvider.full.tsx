/** CUSTOM THEME PROVIDER - SSR Compatible with FOUC Prevention
 * - Server-side rendering support with hydration safety
 * - Zero FOUC via inline script execution
 * - Transition disabling during theme changes
 * - Cross-tab synchronization via storage events
 * - Real-time system theme change detection
 * - Uses React 19's use() hook as useContext is now deprecated
 * - Proper colorScheme CSS property setting for browser integration
 * - Theme validation to prevent invalid states
 */
import { createContext, use, useEffect, useState, useSyncExternalStore } from "react";
import { ScriptOnce } from "@tanstack/react-router";

type ResolvedTheme = "light" | "dark";
type Theme = ResolvedTheme | "system";

interface ThemeContextTypes {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextTypes | null>(null);

const STORAGE_KEY = "theme";
export const THEMES = ["light", "dark", "system"] as const;
const isBrowser = typeof window !== "undefined";

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

export function ThemeProvider({ children, defaultTheme = "system", storageKey = STORAGE_KEY }: ThemeProviderProps) {
  // Return defaultTheme on server, sync stored value on client
  const [theme, setTheme] = useState<Theme>(() => {
    if (!isBrowser) return defaultTheme;
    try {
      const stored = localStorage.getItem(storageKey);
      return stored && isValidTheme(stored) ? stored : defaultTheme;
    } catch {
      return defaultTheme;
    }
  });

  const fallbackResolvedTheme: ResolvedTheme = defaultTheme === "dark" ? "dark" : "light";

  const getSystemResolvedTheme = (): ResolvedTheme => {
    if (!isBrowser) return fallbackResolvedTheme;
    try {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    } catch {
      return fallbackResolvedTheme;
    }
  };

  const systemTheme = useSyncExternalStore(subscribeToSystemTheme, getSystemResolvedTheme, () => fallbackResolvedTheme);
  const resolvedTheme: ResolvedTheme = theme === "system" ? systemTheme : theme;

  const updateTheme = (newTheme: Theme) => {
    if (isBrowser) {
      const enableTransitions = disableTransitions();
      setTheme(newTheme);
      try {
        localStorage.setItem(storageKey, newTheme);
      } catch (error) {
        console.error("ERROR: Failed to save theme preference:", error);
      }
      requestAnimationFrame(enableTransitions);
    } else {
      setTheme(newTheme);
    }
  };

  useEffect(() => {
    if (!isBrowser) return;
    const root = document.documentElement;
    root.setAttribute("data-theme", resolvedTheme);
    root.style.colorScheme = resolvedTheme;
  }, [resolvedTheme]);

  useEffect(() => {
    if (!isBrowser) return;
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === storageKey && e.newValue && isValidTheme(e.newValue)) {
        const enableTransitions = disableTransitions();
        setTheme(e.newValue);
        requestAnimationFrame(enableTransitions);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [storageKey]);

  return (
    <ThemeContext value={{ theme, resolvedTheme, setTheme: updateTheme }}>
      <ScriptOnce>
        {`(function(storageKey) {
          try {
            const themes = ['light', 'dark', 'system'];
            const stored = localStorage.getItem(storageKey);
            const isValid = stored && themes.includes(stored) ? stored : null;
            const prefersDark = typeof window !== 'undefined' &&
              typeof window.matchMedia === 'function' &&
              window.matchMedia('(prefers-color-scheme: dark)').matches;
            const systemTheme = prefersDark ? 'dark' : 'light';
            const resolvedPreference = isValid ?? 'system';
            const resolved = resolvedPreference === 'system' ? systemTheme : resolvedPreference;
            const applied = resolved === 'dark' ? 'dark' : 'light';
            const root = document.documentElement;
            root.setAttribute('data-theme', applied);
            root.style.colorScheme = applied;
          } catch {}
        })(${JSON.stringify(storageKey)})`}
      </ScriptOnce>
      {children}
    </ThemeContext>
  );
}

export function useTheme() {
  const context = use(ThemeContext);
  if (!context) {
    throw new Error("ERROR: useTheme must be used within ThemeProvider.");
  }
  return context;
}

function isValidTheme(value: string): value is Theme {
  return THEMES.includes(value as Theme);
}

function subscribeToSystemTheme(onChange: () => void) {
  if (!isBrowser || typeof window.matchMedia !== "function") {
    return () => undefined;
  }

  try {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    if (typeof mediaQuery.addEventListener !== "function") {
      return () => undefined;
    }

    const handler = () => onChange();
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  } catch {
    return () => undefined;
  }
}

function disableTransitions() {
  const root = document.documentElement;
  root.dataset.disableTransitions = "";
  // Force a reflow
  // Regarding getComputedStyle vs requestAnimationFrame: https://paco.me/writing/disable-theme-transitions
  void window.getComputedStyle(root).opacity;
  return () => {
    delete root.dataset.disableTransitions;
  };
}
