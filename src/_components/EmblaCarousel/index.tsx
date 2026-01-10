import useEmblaCarousel from "embla-carousel-react";
import { usePrevNextButtons } from "./usePrevNext";
import { useDotButton } from "./useDotButton";
import type { EmblaOptionsType } from "embla-carousel";
import { cn, getThumbnailUrl } from "@/_lib/utils";

interface EmblaCarouselProps {
  slides: Array<{
    url: string;
    alt: string;
  }>;
  options?: EmblaOptionsType;
  onSlideClick?: (index: number) => void;
}

export function EmblaCarousel(props: EmblaCarouselProps) {
  const { slides, options, onSlideClick } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <section>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-2 touch-pan-y touch-pinch-zoom select-none">
          {slides.map((image, index) => (
            <button
              key={image.url}
              type="button"
              onClick={() => onSlideClick?.(index)}
              className="flex-[0_0_calc(25%-0.375rem)] aspect-square min-w-0 border cursor-pointer hover:border-secondary focus-visible:border-secondary transition-colors">
              <img
                className="w-full h-full object-cover object-center pointer-events-none"
                src={getThumbnailUrl(image.url)}
                alt={image.alt}
                loading="lazy"
                draggable={false}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center gap-4 mt-2">
        <div className="flex gap-2 items-center">
          <button
            type="button"
            className="group w-12 h-8 p-px bg-border-idle touch-manipulation text-secondary disabled:saturate-0 active:text-background disabled:text-muted hover:enabled:bg-border-enabled focus-visible:enabled:bg-border-enabled [clip-path:polygon(0_0,100%_0,100%_100%,10px_100%,0_calc(100%-10px))]"
            onClick={onPrevButtonClick}
            aria-label="Previous slide"
            disabled={prevBtnDisabled}>
            <div className="relative w-full h-full bg-card-background grid place-items-center [clip-path:polygon(0_0,100%_0,100%_100%,10px_100%,0_calc(100%-10px))] before:content-[''] before:absolute before:inset-0 before:bg-transparent group-enabled:active:before:bg-card-clicked group-enabled:hover:before:bg-card-hover group-enabled:focus-visible:before:bg-card-hover">
              <svg className="w-[35%] h-[35%] z-1" viewBox="0 0 532 532">
                <path
                  fill="currentColor"
                  d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
                />
              </svg>
            </div>
          </button>
          <button
            type="button"
            className="group w-12 h-8 p-px bg-border-idle touch-manipulation text-secondary disabled:saturate-0 active:text-background disabled:text-muted hover:enabled:bg-border-enabled focus-visible:enabled:bg-border-enabled [clip-path:polygon(0_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%)]"
            onClick={onNextButtonClick}
            aria-label="Next slide"
            disabled={nextBtnDisabled}>
            <div className="relative w-full h-full bg-card-background grid place-items-center [clip-path:polygon(0_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%)] before:content-[''] before:absolute before:inset-0 before:bg-transparent group-enabled:active:before:bg-card-clicked group-enabled:hover:before:bg-card-hover group-enabled:focus-visible:before:bg-card-hover">
              <svg className="w-[35%] h-[35%] z-1" viewBox="0 0 532 532">
                <path
                  fill="currentColor"
                  d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
                />
              </svg>
            </div>
          </button>
        </div>

        <div className="flex flex-wrap justify-end items-center">
          {scrollSnaps.map((snap, index) => (
            <button
              type="button"
              key={snap}
              onClick={() => onDotButtonClick(index)}
              className={cn(
                "w-6 h-6 bg-transparent touch-manipulation grid place-items-center rounded-full after:content-[''] after:w-2 after:h-2 after:grid after:place-items-center after:rounded-full after:border after:border-secondary",
                index === selectedIndex ? "after:bg-secondary" : "after:bg-secondary/30"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
