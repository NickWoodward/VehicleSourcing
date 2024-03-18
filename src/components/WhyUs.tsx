import type { ComponentProps, ReactNode } from "react";


import { cn } from "../utils/utils";
import { Button } from "./Button";
import { PinPointIcon, ContactIcon, KeyIcon,  ArrowIcon } from "../utils/svgComponents"

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
      content:"We'll use our network to vet and narrow 1000s of vehicles down to that special one.",
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
    "cards  grid w-full  grid-cols-1 xl:grid-cols-3 xl:grid-rows-1    xs:place-items-center sm:place-items-start lg:place-items-center  gap-y-8 xs:gap-y-14  sm:gap-y-6 lg:gap-y-8 xl:gap-y-0 md:gap-x-3 lg:gap-x-8 xl:gap-x-10 2xl:gap-x-16",
    className
  );

  const createCard = ({title, content, image, id}: CardProps) => {
    
    return <article key={id} className=" card flex flex-col sm:flex-row xl:flex-col xl:justify-start odd:sm:flex-row-reverse odd:xl:flex-col sm:space-x-4 lg:space-x-5 odd:sm:space-x-reverse odd:xl:space-x-0   xl:space-x-0 space-y-2.5 sm:space-y-0 max-w-[350px] sm:max-w-none   lg:max-w-[1000px] xl:w-full xl:h-full sm:h-[210px] md:h-[190px]  ">
         <div className="w-full sm:w-1/2 xl:w-auto xl:h-[260px] ">
          {image} 
        </div>
        {/*<div className="w-1/3 px-8 py-8 bg-offWhite">
          <div className="title font-semibold text-sm xs:text-base md:text-lg xl:text-xl text-primary">{title}</div>
          <div className="">{content}</div>
          <ChevronRight className="grow flex items-end ml-auto w-4 h-4 " />
        </div> */}


        <div data-even={id % 2 === 0} className="relative w-full space-y-2  sm:w-1/2 xl:w-full flex flex-col  xl:min-h-[250px]  bg-blue-50 shadow-2xl  rounded-b-none data-[even=false]:rounded-bl-2xl data-[even=true]:rounded-br-2xl px-6 pt-6 md:pt-7 pb-9 xs:pb-9  sm:pb-10  xl:pt-8 xl:pb-5  sm:px-8 md:pl-10 ">
          <div className="relative  flex">
            <div className="title text-lg font-semibold xs:text-base xl:text-xl text-primaryDark">{title}</div>
          </div>

          <div className="content  ml-0.5 text-base   xl:text-xl text-textGray leading-6 ">{content}</div>
          <ArrowIcon className="absolute right-6 bottom-5 text-primary w-4 h-4 mx-2 mt-3 ml-auto sm:mt-5 translate-x-3 " />

          {/* <ChevronRight className="grow flex items-end ml-auto w-4 h-4 xl:w-5 xl:h-5 mt-2 text-primary" /> */}
        </div>
    </article>
  };

  const cards = slides.map((slide) => {
    return createCard(slide);
  }); 

  return (
      <div className={classes}>
        {cards}
       
      </div>
  )
}