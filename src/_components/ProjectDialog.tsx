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
// const SLIDES = [
//   {
//     url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
//     alt: "Image 1",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
//     alt: "Image 2",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop",
//     alt: "Image 3",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
//     alt: "Image 4",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600&fit=crop",
//     alt: "Image 5",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop",
//     alt: "Image 6",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop",
//     alt: "Image 7",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&h=600&fit=crop",
//     alt: "Image 8",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800&h=600&fit=crop",
//     alt: "Image 9",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop",
//     alt: "Image 10",
//   },
// ];

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
                    "before:content-[''] before:absolute before:inset-0 before:bg-trim-idle group-hover:before:bg-trim-enabled group-focus-visible:before:bg-trim-enabled"
                  )}>
                  <span className="marquee-text inline-block font-medium whitespace-nowrap uppercase">{title}</span>
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
