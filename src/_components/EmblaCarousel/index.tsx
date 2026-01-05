import useEmblaCarousel from "embla-carousel-react";
import { usePrevNextButtons } from "./usePrevNext";
import { useDotButton } from "./useDotButton";
import type { EmblaOptionsType } from "embla-carousel";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/_lib/utils";

interface EmblaCarouselProps {
  slides: Array<{
    url: string;
    alt: string;
  }>;
  options?: EmblaOptionsType;
}

export function EmblaCarousel(props: EmblaCarouselProps) {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <section>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-2 touch-pan-y touch-pinch-zoom select-none">
          {slides.map((image) => (
            <img
              key={image.url}
              className="flex-[0_0_calc(25%-0.375rem)] aspect-square min-w-0 border object-cover object-center"
              src={image.url}
              alt={image.alt}
              loading="lazy"
            />
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center gap-4 mt-2">
        <div className="flex gap-2 items-center">
          <ArrowButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}>
            <svg className="w-[35%] h-[35%]" viewBox="0 0 532 532">
              <path
                fill="currentColor"
                d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
              />
            </svg>
          </ArrowButton>
          <ArrowButton onClick={onNextButtonClick} disabled={nextBtnDisabled}>
            <svg className="w-[35%] h-[35%]" viewBox="0 0 532 532">
              <path
                fill="currentColor"
                d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
              />
            </svg>
          </ArrowButton>
        </div>

        <div className="flex flex-wrap justify-end items-center">
          {scrollSnaps.map((snap, index) => (
            <button
              type="button"
              key={snap}
              onClick={() => onDotButtonClick(index)}
              className={cn(
                "w-6 h-6 bg-transparent touch-manipulation grid place-items-center rounded-full after:content-[''] after:w-2 after:h-2 after:grid after:place-items-center after:rounded-full after:border after:border-cyan ",
                index === selectedIndex && "after:bg-primary"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { children, ...restProps } = props;

  return (
    <button
      type="button"
      className="grid place-items-center w-8 h-8 bg-transparent border touch-manipulation text-primary disabled:text-muted"
      {...restProps}>
      {children}
    </button>
  );
}
