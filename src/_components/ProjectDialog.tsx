import ReactMarkdown from "react-markdown";
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
import { cn } from "@/_lib/utils";

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
        <DialogHeader className="flex flex-row gap-8 items-center justify-between p-3 bg-background/80">
          <DialogTitle className="text-2xl font-bold">
            {section} // <span className="text-accent-green">{title}</span>
          </DialogTitle>
          <div className="text-accent border border-accent px-4 py-1 text-sm font-normal">
            <span className="block mt-px">{label}</span>
          </div>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-stretch">
          <div className="bg-background/50 p-3 flex flex-col gap-2">
            {/* TODO: Fallback image if fail to load */}
            <img src={thumbnail} alt="Project Image" className="w-full aspect-video object-cover max-h-48" />
            <h3 className="uppercase font-bold">KEY FEATURES</h3>
            {features.length > 0 && (
              <ul className="list-disc list-inside">
                {/* TODO: SQUARE BULLET POINTS */}
                {features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="bg-background/50 p-3 flex flex-col gap-2">
            <h3 className="uppercase text-2xl font-bold">PROJECT OVERVIEW</h3>
            <table className="text-left uppercase table-fixed w-full">
              <tbody>
                <tr className="align-baseline">
                  <th className="font-medium">TITLE</th>
                  <td>{title}</td>
                </tr>
                <tr className="align-baseline">
                  <th className="font-medium">AUTHOR</th>
                  <td>{author}</td>
                </tr>
                <tr className="align-baseline">
                  <th className="font-medium">STACK</th>
                  <td className="leading-tight">{stack}</td>
                </tr>
              </tbody>
            </table>
            <ScrollArea className="h-48 bg-transparent">
              <ReactMarkdown>{description}</ReactMarkdown>
            </ScrollArea>
          </div>
        </div>
        <div className="bg-background/50 p-3">TODO: Image carousel</div>
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
