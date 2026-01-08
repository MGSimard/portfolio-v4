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
import { IconGithub, IconGlobe, IconMail, IconX } from "@/_components/Icons";

export function AboutDialog() {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <button type="button" className="group outline-none text-nowrap [view-transition-name:nav-about]">
            [ <span className="group-hover:underline group-focus-visible:underline">ABOUT</span> ]
          </button>
        }
      />
      <DialogContent
        className="w-xl"
        actions={
          <>
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
              <DialogTitle className="text-2xl text-accent-green truncate">MGSIMARD</DialogTitle>
              <span className="text-lg">Canada, QC</span>
            </div>
            <div className="shrink-0 text-secondary bg-secondary/25 border border-secondary px-2 py-1 leading-none text-md uppercase">
              <span className="block mt-px">FULLSTACK DEVELOPER</span>
            </div>
          </DialogHeader>
          <div className="w-full border-b border-border-idle" />
          <p className="text-wrap">
            Worked professionally in Freelance QA, UI/UX and Usability Testing for web apps & video games. Level
            Designer & Environmental Artist primarily through level editors — conventionally referred to as a "Mapper".
          </p>
          <div className="w-full border-b border-border-idle" />
          <h3 className="font-medium uppercase">CORE WEBDEV STACK</h3>
          <ul className="list-[square] pl-4 text-secondary">
            <li>HTML, JavaScript & TypeScript, CSS & Tailwind CSS</li>
            <li>React, TanStack Start, Next.js, Astro</li>
            <li>CSS & Tailwind CSS</li>
            <li>PostgreSQL & Drizzle ORM</li>
          </ul>
          <p>
            More @{" "}
            <a
              href="https://mgs-recs.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline focus-visible:underline">
              https://mgs-recs.netlify.app/
            </a>
          </p>
          <div className="w-full border-b border-border-idle" />
          <h3 className="font-medium uppercase">SOCIALS</h3>
          <ul>
            <li className="flex items-center gap-2">
              <IconGlobe className="w-4 h-4" />
              <a
                href="https://mgsimard.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline focus-visible:underline">
                mgsimard.dev
              </a>
            </li>
            <li className="flex items-center gap-2">
              <IconGithub className="w-4 h-4" />
              <a
                href="https://github.com/MGSimard"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline focus-visible:underline">
                MGSimard
              </a>
            </li>
            <li className="flex items-center gap-2">
              <IconX className="w-4 h-4" />
              <a
                href="https://x.com/MGSimard"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline focus-visible:underline">
                MGSimard
              </a>
            </li>
            <li className="flex items-center gap-2">
              <IconMail className="w-4 h-4" />
              <a href="mailto:mgsimard.dev@gmail.com" className="hover:underline focus-visible:underline">
                mgsimard.dev@gmail.com
              </a>
            </li>
          </ul>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
}
