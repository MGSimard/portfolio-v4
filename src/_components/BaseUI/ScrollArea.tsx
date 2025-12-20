import { ScrollArea as BaseScrollArea } from "@base-ui-components/react/scroll-area";

export default function ScrollArea({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseScrollArea.Root> & { children: React.ReactNode }) {
  return (
    <BaseScrollArea.Root className={className} {...props}>
      <BaseScrollArea.Viewport className="h-full overscroll-contain outline outline-border focus-visible:outline-2">
        <div className="flex flex-col gap-2 py-3 pr-6 pl-4 text-sm leading-5.5 text-foreground [&_h4]:font-semibold [&_h4]:mt-2 [&_h4]:mb-1 [&_p]:mb-2 [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
          {children}
        </div>
      </BaseScrollArea.Viewport>
      <BaseScrollArea.Scrollbar className="m-1 flex w-1 justify-center opacity-0 transition-opacity pointer-events-none data-hovering:opacity-100 data-hovering:delay-0 data-hovering:pointer-events-auto data-scrolling:opacity-100 data-scrolling:duration-0 data-scrolling:pointer-events-auto">
        <BaseScrollArea.Thumb className="w-full bg-border" />
      </BaseScrollArea.Scrollbar>
    </BaseScrollArea.Root>
  );
}
