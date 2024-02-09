import type { ComponentProps, ReactNode } from "react";

import { cn } from "../utils/utils";
import { Button } from "./Button";
import { PinPointIcon, ContactIcon, ChevronRight, KeyIcon, Plane } from "../utils/svgComponents"

interface Props extends ComponentProps<"div">{
  contactImage?: ReactNode,
  m3Image?: ReactNode,
  mechanicImage?: ReactNode
}

interface CardProps {
  title: string,
  content: string,
  image: ReactNode,
  id: number,
  to: string
}

export const WhyUs = ({className, contactImage, m3Image, mechanicImage}: Props) => {

  const slides = [
    {
      id:1,
      icon: <ContactIcon className="w-10 h-10 " />, 
      title: "Get in Touch", 
      // content:"Give one of our friendly experts a no-obligation call, or contact us below to discuss your perfect vehicle",
      content:"Give one of our friendly experts a no-obligation call, or contact us below to discuss exactly what you're after.",
      justify:"right",
      image: contactImage,
      to:"#contact",
      linkText: "Contact Us"
    },
    {
      icon: <PinPointIcon className="w-10  h-10 " />, 
      title: "Leave it to Us", 
      content:"We'll use our extensive networks to vet and narrow 1000s of vehicles down to that special one.",
      justify:"left",
      image: mechanicImage,
      id:2,
      to:"#contact",
      linkText: "Find Out More"
    },
    {
      icon: <KeyIcon className="w-10  h-10 " />, 
      title: "Enjoy your Car", 
      content:"Drive away with peace of mind. We only pick cars that meet the highest standards.",
      justify:"right",
      image: m3Image,
      id:3,
      to:"#contact",
      linkText: "Get Started"
    },
  ]

  const classes = cn(
    "cards grid w-full grid-cols-1 3xl:px-8 lg:grid-cols-3  sm:mx-auto  gap-y-8 xs:gap-y-14  sm:gap-y-8 lg:gap-y-12 md:gap-x-3 lg:gap-x-8 xl:gap-x-16",
    className
  );

  const createCard = ({title, content, image, id, to}: CardProps) => {
    
    return <article key={id} className="card flex flex-col sm:flex-row lg:flex-col max-w-[300px] sm:max-w-none md:max-w-[800px]  mx-auto sm:gap-x-3 md:gap-y-3 rounded ">
        <div className="card__image flex object-cover rounded-t sm:rounded sm:rounded-l  overflow-hidden shadow-2xl aspect-[3/2] sm:max-w-[240px] md:max-w-[320px] lg:max-w-none">
          {image} 
        </div>
        <div className=" grow flex flex-col bg-offWhite shadow-2xl rounded-b sm:rounded   pt-5 pb-3.5 sm:pt-8 sm:pb-6 md:pb-8 md:pt-9 xl:pt-10 xl:pb-5 px-6 sm:px-8 md:pl-10 ">
          <div className="title font-semibold text-sm xs:text-base md:text-lg xl:text-xl text-primary">{title}</div>
          <div className="content mt-1 xl:mt-2.5 ml-0.5 text-sm xs:text-base md:text-lg xl:text-xl text-textDark leading-5 md:leading-7">{content}</div>
          <ChevronRight className="grow flex items-end ml-auto w-4 h-4 xl:w-5 xl:h-5 mt-2 text-primary" />
        </div>
    </article>
  };

  const cards = slides.map((slide) => {
    return createCard(slide);
  }); 

  return (
      <div className={classes}>
        {cards}
        <Button   
          className="cta-btn--about invisible opacity-0 px-4 py-2.5 md:py-3 xl:py-4 max-w-[300px] sm:max-w-none mx-auto w-full sm:w-auto sm:ml-auto sm:mr-4 lg:col-start-3 space-x-3"
          rounded="md"
          size="sm"
        >
          <span className="text-base xl:text-xl">Get Started</span>
          <Plane flip={true} className="h-5 w-5 flex-none" />
        </Button>
      </div>
  )
}