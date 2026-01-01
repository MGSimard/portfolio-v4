import { Button as BaseButton } from "@base-ui-components/react/button";
import { cn } from "@/_lib/utils";

export function HotkeyButton({
  className,
  hotkey,
  children,
  ...props
}: React.ComponentProps<typeof BaseButton> & { hotkey: string; children: React.ReactNode }) {
  return (
    <BaseButton className={cn("group flex items-center gap-2 outline-0", className)} {...props}>
      <div className="shrink-0 flex size-8 items-center overflow-hidden justify-center whitespace-nowrap outline-0 rounded-full border-2 border-secondary font-inherit text-[0.75em] font-medium leading-6 select-none focus-visible:outline-2 bg-transparent text-secondary  group-focus-visible:bg-secondary group-hover:bg-secondary group-focus-visible:text-background group-hover:text-background group-focus-visible:outline-2">
        <span className="mt-px text-base font-semibold">{hotkey}</span>
      </div>
      <span className="font-medium">{children}</span>
    </BaseButton>
  );
}
