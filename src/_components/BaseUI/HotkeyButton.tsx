import { Button as BaseButton } from "@base-ui-components/react/button";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { cn } from "@/_lib/utils";

const buttonVariants = cva(
  "flex items-center overflow-hidden justify-center whitespace-nowrap outline-0 border font-inherit text-[0.75em] font-medium leading-6 select-none focus-visible:outline-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-foreground group-hover:bg-primary/90",
        destructive: "bg-accent-red text-white group-hover:bg-accent-red/90",
        outline: "border bg-transparent group-hover:bg-primary/90",
      },
      size: {
        default: "size-9",
        sm: "size-8",
        lg: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
export function HotkeyButton({
  className,
  variant,
  size,
  hotkey,
  children,
  ...props
}: React.ComponentProps<typeof BaseButton> &
  VariantProps<typeof buttonVariants> & { hotkey: string; children: React.ReactNode }) {
  return (
    <BaseButton className={cn("group flex items-center gap-2", className)} {...props}>
      <div className={cn(buttonVariants({ variant, size, className }))}>
        <span className="mt-0.75">{hotkey}</span>
      </div>
      <span className="mt-0.75">{children}</span>
    </BaseButton>
  );
}
