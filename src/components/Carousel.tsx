import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useState, useCallback, type ComponentProps, useEffect } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../utils/utils';
// import { cn } from '../utils/utils';

interface Props extends ComponentProps<"div">{
  slides: React.ReactNode[];
  axis?: "x" | "y";
  autoplayOptions?: {delay: number, rootNode: (emblaRoot: HTMLElement) => HTMLElement | null;};
  options?: { loop: boolean, duration: number, watchDrag: boolean };
  markers?: boolean;
}

export const EmblaCarousel = ({slides, axis = "x", autoplayOptions, options, markers}:Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ axis, ...options}, [Autoplay(autoplayOptions)]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const carouselVariants = cva("embla__container flex", {
    variants: {
      axis: {
        x: "flex-row",
        y: "flex-col justify-start h-[400px]",
      },
    },
    defaultVariants: {
      axis: "x",
    }
  });

  const slideClasses = cn("embla__slide", {
    "flex-none basis-full mr-1": axis === "x", 
    "flex-none basis-1/2 mt-4": axis === "y",
  })

  const scrollPrev = useCallback(() => {    
    emblaApi && emblaApi.scrollPrev()  
  }, [emblaApi]);

  const scrollNext = useCallback(() => {    
    emblaApi && emblaApi.scrollNext()  
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if(!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="embla mt-3">
      {markers? <div className="embla__dots flex justify-end gap-2 text-sm p-2 ">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={cn("embla__dot w-7 h-1 bg-", {
              "embla__dot--selected bg-primary": index === selectedIndex,
            })}
            onClick={() => scrollTo(index)}
          ></button>
        ))}
      </div> : null}
      <div className="embla__viewport" ref={emblaRef}>
        <div className={cn("flex",carouselVariants({axis}))}>
          <div className={slideClasses}>{slides[0]}</div>
          <div className={slideClasses}>{slides[1]}</div>
          <div className={slideClasses}>{slides[2]}</div>
        </div>
      </div>
      
      {/* <button className="embla__prev" onClick={scrollPrev}>        
        Prev      
      </button>      
      <button className="embla__next" onClick={scrollNext}>        
        Next      
      </button> */}
    </div>
  )
}

