import { createFileRoute } from "@tanstack/react-router";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/_components/BaseUI/Dialog";
import { Button } from "@/_components/BaseUI/Button";
import { HotkeyButton } from "@/_components/BaseUI/HotkeyButton";
import ScrollArea from "@/_components/BaseUI/ScrollArea";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="test">
      Hello
      <Dialog>
        <DialogTrigger render={<Button type="button">Open Dialog</Button>} />
        <DialogContent className="w-2xl">
          <DialogHeader>
            <DialogTitle className="flex gap-2 justify-between">
              <h2>
                SIGNED IN AS <span className="text-accent-green">MGSIMARD</span>
              </h2>
              <span className="text-accent-red">STATUS</span>
            </DialogTitle>
            <DialogDescription>Description</DialogDescription>
          </DialogHeader>
          <ScrollArea className="h-34" />
          <div className="flex gap-8 justify-end">
            <HotkeyButton type="button" variant="outline" hotkey="H">
              HELP
            </HotkeyButton>
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
    </div>
  );
}
