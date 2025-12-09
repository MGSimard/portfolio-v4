import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/_components/BaseUI/Dialog";
import { Button } from "@/_components/BaseUI/Button";
import { HotkeyButton } from "@/_components/BaseUI/HotkeyButton";
import ScrollArea from "@/_components/BaseUI/ScrollArea";

interface ProjectDialogProps {
  parent: string;
  title: string;
  label: string;
  thumbnail: string;
  features: Array<string>;
  type: string;
  author: string;
  description: React.ReactNode;
  carouselImages?: Array<{
    url: string;
    alt: string;
  }>;
  link?: URL;
}

export function ProjectDialog({
  parent,
  title,
  label,
  thumbnail,
  features,
  type,
  author,
  description,
  carouselImages,
  link,
}: ProjectDialogProps) {
  return (
    <Dialog>
      <DialogTrigger render={<Button type="button">Open Dialog</Button>} />
      <DialogContent className="w-4xl bg-transparent outline-none border-transparent gap-2">
        <DialogHeader className="bg-background/50 p-3">
          <DialogTitle className="flex gap-8 items-center justify-between">
            <h2 className="text-2xl font-bold">
              {parent} // <span className="text-accent-green">{title}</span>
            </h2>
            <div className="text-accent border border-accent px-4 py-1 text-sm font-normal">
              <span className="block mt-px">{label}</span>
            </div>
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-stretch">
          <div className="bg-background/50 p-3 flex flex-col gap-2">
            {/* TODO: Fallback image if fail to load */}
            <img src={thumbnail} alt="Project Image" className="w-full aspect-video object-cover max-h-48" />
            <h3 className="uppercase font-bold">KEY FEATURES</h3>
            <ul>
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="bg-background/50 p-3 flex flex-col gap-2">
            <h3 className="uppercase text-2xl font-bold">PROJECT DESCRIPTION</h3>
            <table className="text-left uppercase table-fixed w-full">
              <tbody>
                <tr>
                  <th className="font-medium">TYPE</th>
                  <td className="truncate">{type}</td>
                </tr>
                <tr>
                  <th className="font-medium">NAME</th>
                  <td className="truncate">{title}</td>
                </tr>
                <tr>
                  <th className="font-medium">AUTHOR</th>
                  <td className="truncate">{author}</td>
                </tr>
              </tbody>
            </table>
            <ScrollArea className="h-48 bg-transparent">{description}</ScrollArea>
          </div>
        </div>
        <div className="bg-background/50 p-3">TODO: Image carousel</div>
        <div className="flex gap-8 justify-end">
          {link && (
            <HotkeyButton type="button" variant="outline" hotkey="H">
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
