import { Dialog as BaseDialog } from "@base-ui-components/react/dialog";
import { cn } from "@/_lib/utils";

function Dialog({ ...props }: React.ComponentProps<typeof BaseDialog.Root>) {
  return <BaseDialog.Root {...props} />;
}

function DialogTrigger({ ...props }: React.ComponentProps<typeof BaseDialog.Trigger>) {
  return <BaseDialog.Trigger {...props} />;
}

function DialogClose({ ...props }: React.ComponentProps<typeof BaseDialog.Close>) {
  return <BaseDialog.Close {...props} />;
}

function DialogTitle({ className, ...props }: React.ComponentProps<typeof BaseDialog.Title>) {
  return <BaseDialog.Title className={cn("text-lg font-medium uppercase", className)} {...props} />;
}

function DialogDescription({ className, ...props }: React.ComponentProps<typeof BaseDialog.Description>) {
  return <BaseDialog.Description className={cn("text-base text-muted", className)} {...props} />;
}

function DialogContent({ className, children, ...props }: React.ComponentProps<typeof BaseDialog.Popup>) {
  return (
    <BaseDialog.Portal>
      <BaseDialog.Backdrop className="fixed inset-0 min-h-dvh backdrop-blur-xs bg-[rgba(0,0,0,0.2)] transition-all duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-[-webkit-touch-callout:none]:absolute" />
      <BaseDialog.Popup
        className={cn(
          "fixed top-1/2 left-1/2 w-96 max-w-[calc(100vw-3rem)] max-h-[calc(100dvh-3rem)] -translate-x-1/2 -translate-y-1/2 flex flex-col gap-6 bg-background px-6 py-4 text-foreground outline-1 outline-border overflow-y-auto transition-all duration-150 data-ending-style:scale-90 data-ending-style:opacity-0 data-starting-style:scale-90 data-starting-style:opacity-0 [scrollbar-color:var(--color-border)_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent",
          className
        )}
        {...props}>
        {children}
      </BaseDialog.Popup>
    </BaseDialog.Portal>
  );
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex flex-col gap-1", className)} {...props} />;
}

export { Dialog, DialogClose, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogHeader };
