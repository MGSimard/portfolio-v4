import { Dialog as BaseDialog } from "@base-ui-components/react/dialog";
import { ScrollArea } from "@base-ui-components/react/scroll-area";
import { cn } from "@/_lib/utils";

function Dialog({ ...props }: React.ComponentProps<typeof BaseDialog.Root>) {
  return <BaseDialog.Root {...props} />;
}

function DialogTrigger({ ...props }: React.ComponentProps<typeof BaseDialog.Trigger>) {
  return <BaseDialog.Trigger {...props} />;
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={className} {...props} />;
}

function DialogTitle({ className, ...props }: React.ComponentProps<typeof BaseDialog.Title>) {
  return <BaseDialog.Title className={cn("text-lg font-medium uppercase", className)} {...props} />;
}

function DialogDescription({ className, ...props }: React.ComponentProps<typeof BaseDialog.Description>) {
  return <BaseDialog.Description className={cn("text-base text-muted", className)} {...props} />;
}

function DialogClose({ ...props }: React.ComponentProps<typeof BaseDialog.Close>) {
  return <BaseDialog.Close {...props} />;
}

interface DialogContentProps extends React.ComponentProps<typeof BaseDialog.Popup> {
  actions?: React.ReactNode;
}

function DialogContent({ className, children, actions, ...props }: DialogContentProps) {
  return (
    <BaseDialog.Portal>
      <BaseDialog.Backdrop className="fixed inset-0 min-h-dvh backdrop-blur-2xl bg-[rgba(0,0,0,0.7)] transition-all duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-[-webkit-touch-callout:none]:absolute" />
      <BaseDialog.Popup
        className={cn(
          "fixed flex flex-col top-1/2 left-1/2 w-96 max-w-[calc(100vw-3rem)] max-h-[calc(100dvh-3rem)] outline-0 -translate-x-1/2 -translate-y-1/2 transition-all duration-150 data-ending-style:scale-90 data-ending-style:opacity-0 data-starting-style:scale-90 data-starting-style:opacity-0",
          className
        )}
        {...props}>
        {children}
        {actions && <div className="shrink-0 flex gap-8 justify-end pt-4">{actions}</div>}
      </BaseDialog.Popup>
    </BaseDialog.Portal>
  );
}

function DialogBody({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex-1 min-h-0 flex flex-col bg-primary p-px overflow-hidden",
        "[clip-path:polygon(0_6px,2px_4px,20px_4px,24px_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,10px_100%,0_calc(100%-10px))]",
        className
      )}
      {...props}>
      <div className="flex flex-1 min-h-0 gap-0.5 bg-background [clip-path:polygon(0_6px,2px_4px,20px_4px,24px_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,10px_100%,0_calc(100%-10px))]">
        <div className="shrink-0 w-10 pr-px bg-border-idle [clip-path:polygon(0_0,100%_0,100%_30px,calc(100%-3px)_33px,calc(100%-3px)_calc(100%-30px),100%_calc(100%-27px),100%_100%,0_100%)]">
          <div
            className={cn(
              "relative w-full h-full bg-background [clip-path:polygon(0_0,100%_0,100%_29.5px,calc(100%-3px)_32.5px,calc(100%-3px)_calc(100%-29.5px),100%_calc(100%-26.5px),100%_100%,0_100%)]",
              "before:content-[''] before:absolute before:inset-0 before:bg-trim-idle",
              "after:content-[''] after:absolute after:top-1/2 after:left-0 after:w-5 after:h-1 after:border-t after:border-r after:border-b after:border-border-idle after:translate-y-[-50%]"
            )}></div>
        </div>
        <ScrollArea.Root className="flex-1 min-w-0 min-h-0 border-l border-border-idle">
          <ScrollArea.Viewport className="h-full overscroll-contain">
            <div className="p-4 flex flex-col gap-2">{children}</div>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar className="m-1 flex w-1 justify-center opacity-0 transition-opacity pointer-events-none data-hovering:opacity-100 data-hovering:delay-0 data-hovering:pointer-events-auto data-scrolling:opacity-100 data-scrolling:duration-0 data-scrolling:pointer-events-auto">
            <ScrollArea.Thumb className="w-full rounded-full bg-border-idle" />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </div>
    </div>
  );
}

export { Dialog, DialogClose, DialogTrigger, DialogContent, DialogBody, DialogTitle, DialogDescription, DialogHeader };
