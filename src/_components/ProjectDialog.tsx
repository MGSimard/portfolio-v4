import ReactMarkdown from "react-markdown";
import { Carousel } from "./Carousel";
import type { Project } from "@/_lib/types";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/_components/BaseUI/Dialog";
import { HotkeyButton } from "@/_components/BaseUI/HotkeyButton";
import ScrollArea from "@/_components/BaseUI/ScrollArea";

interface ProjectDialogProps {
  project: Project;
  section: string;
}

export function ProjectDialog({ project, section }: ProjectDialogProps) {
  const { title, thumbnail, features, label, stack, author, description, link, githubRepo, carouselImages } = project;
  return (
    <Dialog>
      <DialogTrigger
        render={
          <button
            type="button"
            className="relative w-full overflow-hidden group aspect-video border border-border bg-border/50">
            <img
              src={thumbnail}
              alt="Project Thumbnail"
              className="w-full h-full object-cover group-hover:opacity-0 group-focus-visible:opacity-0 transition-opacity duration-150"
            />
            <span className="absolute text-wrap font-medium top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-150">
              {title}
            </span>
          </button>
        }
      />
      <DialogContent className="w-4xl bg-transparent outline-none border-transparent gap-2">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-accent-green truncate">
            <span className="text-foreground">{section} // </span>
            {title}
          </DialogTitle>
          <div className="text-accent border border-accent px-4 py-1 text-sm font-normal shrink-0">
            <span className="block mt-px">{label}</span>
          </div>
        </DialogHeader>
        <div className="project-dialog-content grid grid-rows-[1fr] overflow-hidden transition-all duration-200">
          <div className="bg-background/50 p-3 flex flex-col gap-2 overflow-hidden">
            <img src={thumbnail} alt="Project Thumbnail" className="w-full aspect-video object-cover max-h-48 mb-2" />
            {features.length > 0 && (
              <ul className="list-[square] pl-4">
                {features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            )}
          </div>
          {title}
          {author}
          {stack}
          <ScrollArea className="h-56 bg-transparent">
            <ReactMarkdown>{description}</ReactMarkdown>
          </ScrollArea>
          <Carousel />
        </div>
        <div className="flex gap-8 justify-end">
          {githubRepo && (
            <HotkeyButton
              variant="outline"
              hotkey="G"
              render={<a href={githubRepo} target="_blank" rel="noopener noreferrer" />}>
              GITHUB REPO
            </HotkeyButton>
          )}
          {link && (
            <HotkeyButton
              variant="outline"
              hotkey="H"
              render={<a href={link} target="_blank" rel="noopener noreferrer" />}>
              VIEW PROJECT
            </HotkeyButton>
          )}
          <DialogClose
            render={
              <HotkeyButton type="button" hotkey="ESC">
                CLOSE
              </HotkeyButton>
            }
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
