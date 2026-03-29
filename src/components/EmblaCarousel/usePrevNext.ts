import { useEffect, useState } from "react";
import type { EmblaCarouselType } from "embla-carousel";

interface UsePrevNextButtonsType {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
}

export const usePrevNextButtons = (emblaApi: EmblaCarouselType | undefined): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = () => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  };

  const onNextButtonClick = () => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  };

  const onSelect = (api: EmblaCarouselType) => {
    setPrevBtnDisabled(!api.canScrollPrev());
    setNextBtnDisabled(!api.canScrollNext());
  };

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("reInit", onSelect).on("select", onSelect);
    emblaApi.emit("select");

    return () => {
      emblaApi.off("reInit", onSelect).off("select", onSelect);
    };
  }, [emblaApi]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};
