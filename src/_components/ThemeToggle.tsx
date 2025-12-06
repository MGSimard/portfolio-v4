import { Check, Moon, Sun } from "lucide-react";

import { Button } from "@/_components/shadcnui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/_components/shadcnui/dropdown-menu";
import { THEMES, useTheme } from "@/_components/ThemeProvider";
import { cn } from "@/_lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme: activeTheme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className={cn("shrink-0", className)}>
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {THEMES.map((themeOption) => {
          const isActive = activeTheme === themeOption;
          return (
            <DropdownMenuItem
              key={themeOption}
              onClick={() => setTheme(themeOption)}
              className="capitalize cursor-pointer flex items-center gap-2"
              aria-current={isActive ? "true" : undefined}>
              <span
                aria-hidden="true"
                className={cn("inline-flex justify-center text-primary", isActive ? "opacity-100" : "opacity-0")}>
                <Check className="size-4 mt-0.5" />
              </span>
              {themeOption}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
