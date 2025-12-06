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
          <DialogTitle>Title</DialogTitle>
          <DialogDescription>Description</DialogDescription>
          <DialogClose
            render={
              <Button type="button" variant="link">
                Close
              </Button>
            }
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
