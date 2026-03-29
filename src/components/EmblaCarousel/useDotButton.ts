import { useEffect, useState } from "react";
import type { EmblaCarouselType } from "embla-carousel";

interface UseDotButtonType {
  selectedIndex: number;
  scrollSnaps: Array<number>;
  onDotButtonClick: (index: number) => void;
}

export const useDotButton = (emblaApi: EmblaCarouselType | undefined): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<Array<number>>([]);

  const onDotButtonClick = (index: number) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
  };

  const onInit = (api: EmblaCarouselType) => {
    setScrollSnaps(api.scrollSnapList());
  };

  const onSelect = (api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
  };

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
    emblaApi.emit("reInit");

    return () => {
      emblaApi.off("reInit", onInit).off("reInit", onSelect).off("select", onSelect);
    };
  }, [emblaApi]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};
