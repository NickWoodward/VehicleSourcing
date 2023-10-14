import useEmblaCarousel, { EmblaCarouselType, EmblaEventType } from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useState, useCallback, type ComponentProps, useEffect, useRef } from 'react';
import { cva } from 'class-variance-authority';
import {gsap} from "gsap";

import { cn } from '../utils/utils';
import { Button } from '../components/Button';
import { ChevronRight, ChevronLeft } from '../utils/svgComponents';

interface Props extends ComponentProps<"div">{
  slides: React.ReactNode[];
  axis?: "x" | "y";
  autoplayOptions?: {delay: number, rootNode: (emblaRoot: HTMLElement) => HTMLElement | null;};
  options?: { loop: boolean, duration: number, watchDrag: boolean };
  markers?: boolean;
}

export const EmblaCarousel = ({slides, className, axis = "x", autoplayOptions, options, markers}:Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ axis, ...options}, [Autoplay(autoplayOptions)]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const sliderRef = useRef([]);

  const classes = cn("embla px-1 relative space-y-8", className);  
  
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
    "relative flex flex-none justify-center  lg:pr-10 basis-full lg:basis-auto mr-6": axis === "x", 
    "flex flex-none justify-center lg:justify-end basis-1/2 mt-4": axis === "y",
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

  const onSelect = useCallback((emblaApi: EmblaCarouselType, eventName: EmblaEventType) => {
    console.log(`Previous ${emblaApi.previousScrollSnap()}`);

    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
    console.log(`Embla just triggered ${eventName}!. Current index is ${emblaApi.selectedScrollSnap()}`);

  }, []);

  useEffect(() => {
    if(!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi, "select");
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <>
      <div className={classes}>

        <div className="embla__viewport lg:hidden" ref={emblaRef}>
          <div className={cn("flex",carouselVariants({axis}))}>
            <div className={cn(slideClasses, `slide-0`)}>{slides[0]}</div>
            <div className={cn(slideClasses, `slide-1`)}>{slides[1]}</div>
            <div className={cn(slideClasses, `slide-2`)}>{slides[2]}</div>
          </div>
        </div>
        <div className=" -translate-x-2  relative flex justify-start items-center space-x-3">
          <Button size="none" className="embla__prev text-dark bg-transparent rounded" onClick={scrollPrev}>        
            <ChevronLeft className="w-4" />    
          </Button>  
          {markers? <div className="embla__dots  z-50 flex justify-end gap-2.5 text-sm lg:py-4 lg:px-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={cn("embla__dot h-8 w-8 rounded bg-gray-300", {
                "embla__dot--selected bg-primary": index === selectedIndex,
              })}
              onClick={() => scrollTo(index)}
            >{index + 1}</button>
          ))}
        </div> : null}    
          <Button size="none" className="embla__next text-dark bg-transparent rounded" onClick={scrollNext}>        
            <ChevronRight className="w-4" />     
          </Button>
        </div>
      </div>
    </>
  )
}

