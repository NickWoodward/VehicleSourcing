import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import type { ComponentProps } from 'react';
// import { cn } from '../utils/utils';

interface Props extends ComponentProps<"div">{
  slides: React.ReactNode[];
}

export const EmblaCarousel = ({slides}:Props) => {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className="embla " ref={emblaRef}>
      <div className="embla__container space-y-4 mt-6">
        <div className="embla__slide">{slides[0]}</div>
        <div className="embla__slide">{slides[1]}</div>
        <div className="embla__slide">{slides[2]}</div>
      </div>
    </div>
  )
}
