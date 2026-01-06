import { Link } from "@tanstack/react-router";
import { cn } from "@/_lib/utils";

export function NotFound() {
  return (
    <main className="grow relative flex flex-col items-center justify-center">
      <Link
        to="/"
        className={cn(
          "group outline-none inline-grid min-h-24 w-fit gap-0.5",
          "animate-[expand-right_300ms_ease-out_forwards]"
        )}>
        <div className="shrink-0 p-px w-6 bg-border-idle group-hover:bg-border-enabled group-focus-visible:bg-border-enabled [clip-path:polygon(0_0,100%_0,100%_100%,0_100%,0_calc(100%-13px),3px_calc(100%-16px),3px_calc(100%-38px),0_calc(100%-41px))]">
          <div
            className={cn(
              "relative w-full h-full bg-card-background [clip-path:polygon(0_0,100%_0,100%_100%,0_100%,0_calc(100%-11px),3px_calc(100%-14px),3px_calc(100%-38px),0_calc(100%-41px))]",
              "before:content-[''] before:absolute before:inset-0 before:bg-transparent group-active:before:bg-card-clicked group-hover:before:bg-card-hover group-focus-visible:before:bg-card-hover"
            )}></div>
        </div>
        <div className="min-w-0 overflow-hidden p-px bg-border-idle group-hover:bg-border-enabled group-focus-visible:bg-border-enabled [clip-path:polygon(0_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%)]">
          <div
            className={cn(
              "relative flex flex-col gap-2 items-center justify-center w-full h-full py-2 px-4 bg-card-background [clip-path:polygon(0_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%)]",
              "before:content-[''] before:absolute before:inset-0 before:bg-transparent group-hover:before:bg-card-hover group-focus-visible:before:bg-card-hover",
              "group-active:text-background group-active:before:bg-card-clicked"
            )}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 117.34 107.22"
              stroke="none"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 animate-[fade-in-svg_200ms_ease-out_forwards] max-h-[80%] h-full z-1">
              <path d="m116.89,101.98l-16.84-30.58-2.63,1.45-21.41-38.9,2.65-1.45L61.77,1.83c-1.35-2.43-4.86-2.43-6.2,0l-16.91,30.73,2.64,1.45-21.41,38.9-2.64-1.45L.44,101.98c-1.3,2.36.4,5.24,3.1,5.24h33.88v-2.75h42.5v2.75h33.86c2.7,0,4.4-2.88,3.1-5.24Zm-106.71-4.65l33.86-61.5,12.25-22.43c1.01-1.85,3.66-1.85,4.67,0l46.16,83.85c.98,1.77-.31,3.95-2.33,3.95l-92.27.08c-2.03,0-3.31-2.17-2.34-3.95Zm51.9-63.93v21.2c0,10.38-.73,19.97-.73,19.97h-5.41s-.73-9.59-.73-19.97v-21.2h6.86Zm-9.25,52.76c0-3.37,2.61-6.11,5.82-6.11s5.82,2.73,5.82,6.11-2.61,6.11-5.82,6.11-5.82-2.73-5.82-6.11Z" />
            </svg>
            <h1 className="font-medium text-2xl text-secondary uppercase z-1 opacity-0 animate-[fade-in-text_200ms_ease-out_forwards_200ms] truncate">
              CODE 404: NOT FOUND
            </h1>
            <span className="font-medium uppercase z-1 opacity-0 animate-[fade-in-text_200ms_ease-out_forwards_200ms] truncate">
              RETURN HOME &gt;&gt;
            </span>
          </div>
        </div>
      </Link>
    </main>
  );
}
