import { Button as BaseButton } from "@base-ui/react/button";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { cn } from "@/_lib/utils";

const buttonVariants = cva(
  "flex items-center justify-center whitespace-nowrap outline-0 border font-inherit text-base font-medium leading-6 select-none focus-visible:outline-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-foreground hover:bg-primary/90",
        destructive: "bg-accent-red text-white hover:bg-accent-red/90",
        outline: "border bg-transparent hover:bg-primary/90",
        ghost: "hover:bg-border border-transparent",
        link: "underline-offset-4 hover:underline border-transparent",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
export function Button({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof BaseButton> & VariantProps<typeof buttonVariants>) {
  return <BaseButton className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}
