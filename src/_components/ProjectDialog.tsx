import ReactMarkdown from "react-markdown";
import type { Project } from "@/_lib/types";
import type { EmblaOptionsType } from "embla-carousel";
import { EmblaCarousel } from "@/_components/EmblaCarousel";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/_components/BaseUI/Dialog";
import { HotkeyButton } from "@/_components/BaseUI/HotkeyButton";
import { cn } from "@/_lib/utils";

interface ProjectDialogProps {
  project: Project;
  section: string;
}

const OPTIONS: EmblaOptionsType = { slidesToScroll: "auto" };

export function ProjectDialog({ project, section }: ProjectDialogProps) {
  const { title, thumbnail, features, label, stack, overview, description, link, githubRepo, carouselImages } = project;
  return (
    <Dialog>
      <DialogTrigger
        render={
          <button
            type="button"
            className="relative w-full aspect-[1/1.4] bg-border-idle p-px group hover:bg-border-enabled focus-visible:bg-border-enabled [clip-path:polygon(0_10px,10px_0,calc(100%-6px)_0,calc(100%-4px)_2px,calc(100%-4px)_20px,100%_24px,100%_100%,20px_100%,0_calc(100%-20px))]">
            <div className="relative flex flex-col gap-0.5 h-full w-full bg-card-background [clip-path:polygon(0_10px,10px_0,calc(100%-6px)_0,calc(100%-4px)_2px,calc(100%-4px)_20px,100%_24px,100%_100%,20px_100%,0_calc(100%-20px))]">
              <div className="shrink-0 h-12 pb-px bg-border-idle [clip-path:polygon(0_0,100%_0,100%_100%,calc(50%+20px)_100%,calc(50%+14px)_calc(100%-6px),calc(50%-14px)_calc(100%-6px),calc(50%-20px)_100%,0_100%)]">
                <div
                  className={cn(
                    "relative w-full h-full bg-background marquee-container grid place-items-center px-2",
                    "[clip-path:polygon(0_0,100%_0,100%_100%,calc(50%+20px)_100%,calc(50%+14px)_calc(100%-6px),calc(50%-14px)_calc(100%-6px),calc(50%-20px)_100%,0_100%)]",
                    "before:content-[''] before:absolute before:inset-0 before:bg-trim-idle group-hover:before:bg-trim-enabled group-focus-visible:before:bg-trim-enabled",
                    "group-active:before:bg-card-clicked"
                  )}>
                  <span className="marquee-text inline-block font-medium whitespace-nowrap uppercase group-active:text-background">
                    {title}
                  </span>
                </div>
              </div>
              <img
                src={thumbnail}
                alt="Project Thumbnail"
                className="h-full w-full object-cover object-center border-t border-trim-idle"
              />
            </div>
          </button>
        }
      />
      <DialogContent
        className="w-xl"
        actions={
          <>
            {githubRepo && (
              <HotkeyButton hotkey="G" render={<a href={githubRepo} target="_blank" rel="noopener noreferrer" />}>
                GITHUB
              </HotkeyButton>
            )}
            {link && (
              <HotkeyButton hotkey="H" render={<a href={link} target="_blank" rel="noopener noreferrer" />}>
                VIEW
              </HotkeyButton>
            )}
            <DialogClose
              render={
                <HotkeyButton type="button" hotkey="ESC">
                  CLOSE
                </HotkeyButton>
              }
            />
          </>
        }>
        <DialogBody>
          <DialogHeader className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <DialogTitle className="text-2xl text-accent-green truncate">{title}</DialogTitle>
              <span className="text-lg">{section}</span>
            </div>
            <div className="shrink-0 text-secondary bg-secondary/25 border border-secondary px-2 py-1 leading-none text-md uppercase">
              <span className="block mt-px">{label}</span>
            </div>
          </DialogHeader>
          <div className="w-full border-b border-border-idle" />
          <EmblaCarousel slides={carouselImages} options={OPTIONS} />
          <p className="text-wrap">{overview}</p>
          {features.length > 0 && (
            <>
              <div className="w-full border-b border-border-idle" />
              <h3 className="font-medium uppercase">KEY FEATURES</h3>
              <ul className="list-[square] pl-4 text-secondary">
                {features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </>
          )}
          <div className="w-full border-b border-border-idle" />
          <h3 className="font-medium uppercase">PROJECT DETAILS</h3>
          <p className="text-sm text-flavour">{stack}</p>
          <ReactMarkdown
            components={{
              a({ href, children }) {
                return (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-secondary focus-visible:text-secondary">
                    {children}
                  </a>
                );
              },
            }}>
            {description}
          </ReactMarkdown>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
}
