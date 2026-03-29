import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/BaseUI/Button";
import { IconBolt, IconBoltOff, IconDeviceDesktop } from "@tabler/icons-react";

const NEXT_THEME = {
  light: "dark",
  dark: "system",
  system: "light",
} as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      type="button"
      size="icon"
      variant="ghost"
      onClick={() => setTheme(NEXT_THEME[theme])}
      className="fixed right-4 bottom-4 grid place-items-center text-primary/50 outline-none [grid-template-areas:'stack'] hover:text-primary focus-visible:text-primary focus-visible:ring-1">
      <IconBolt strokeWidth={1} data-theme-icon="light" className="[grid-area:stack]" />
      <IconBoltOff strokeWidth={1} data-theme-icon="dark" className="[grid-area:stack]" />
      <IconDeviceDesktop strokeWidth={1} data-theme-icon="system" className="[grid-area:stack]" />
    </Button>
  );
}
