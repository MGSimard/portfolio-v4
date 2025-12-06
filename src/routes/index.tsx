import { createFileRoute } from "@tanstack/react-router";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/_components/BaseUI/Dialog";
import { Button } from "@/_components/BaseUI/Button";
import { HotkeyButton } from "@/_components/BaseUI/HotkeyButton";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="test">
      Hello
      <Dialog>
        <DialogTrigger render={<Button type="button">Open Dialog</Button>} />
        <DialogContent>
          <DialogTitle className="flex gap-2 justify-between">
            <h2>
              SIGNED IN AS <span className="text-accent-green">RENZ WARD</span>
            </h2>
            <span className="text-accent-red">STATUS</span>
          </DialogTitle>
          <DialogDescription>Description</DialogDescription>
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
