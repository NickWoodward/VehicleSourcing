import type { ComponentProps, ReactNode } from "react";

import { cn } from "../utils/utils";
import { Button } from "./Button";
import { PinPointIcon, ContactIcon, ChevronRight, KeyIcon } from "../utils/svgComponents"

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
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      justify:"right",
      image: contactImage,
      to:"#contact",
      linkText: "Contact Us"
    },
    {
      icon: <PinPointIcon className="w-10  h-10 " />, 
      title: "Leave it to Us", 
      content:"We'll use our extensive networks to vet and narrow 1000s of vehicles down to that special one",
      justify:"left",
      image: mechanicImage,
      id:2,
      to:"#contact",
      linkText: "Find Out More"
    },
    {
      icon: <KeyIcon className="w-10  h-10 " />, 
      title: "Enjoy your Car", 
      content:"Safe in the knowledge that it's made it past our thorough team of mechanics",
      justify:"right",
      image: m3Image,
      id:3,
      to:"#contact",
      linkText: "Get Started"
    },
  ]

  const classes = cn(
    "cards grid w-full lg:grid-cols-9 lg:px-header lg:py-header  md:grid-cols-3 lg:grid-rows-1 sm:mx-auto  gap-y-8 xs:gap-y-14  sm:gap-y-8 md:gap-x-5 lg:gap-x-6 lg:gap-x-6",
    
    className
  );


  const createCard = ({title, content, image, id, to}: CardProps) => {
    
    return <article key={id} className="card flex flex-col sm:flex-row md:flex-col max-w-[300px] sm:max-w-none  mx-auto sm:gap-x-3 md:gap-y-3 rounded ">
        <div className="card__image flex object-cover rounded-t sm:rounded sm:rounded-l  overflow-hidden shadow-2xl aspect-[3/2] sm:max-w-[240px] md:max-w-none">
          {image} 
        </div>
        <div className="grow flex flex-col bg-offWhite shadow-2xl sm:rounded   pt-5 pb-3.5 px-6 ">
          <div className="title font-semibold text-sm md:text-base text-primary">{title}</div>
          <div className="content mt-1 ml-0.5 text-sm md:text-base text-textDark leading-5">{content}</div>
          <ChevronRight className="grow flex items-end ml-auto w-4 h-4 mt-2 text-primary" />
        </div>
    </article>
  };

  // const createCard = ({icon, title, content, justify="left", image, id, to, linkText}: {icon: React.ReactNode, title: string, justify: string, content: string, image: ReactNode, to: string, id: number, linkText: string}) => {
   
  //   const contentClasses = cn(" card__content  bg-slate-500 lg:  xs:row-start-6 sm:row-start-5 md:row-start-1 opacity-[97%] xs:row-span-4 md:row-span-3 lg:row-span-1   flex flex-col pb-6 xs:pb-5 pt-5 xs:pt-6 lg:pt-2  lg:px-4 lg:px-6 lg:pb-6 space-y-2.5 sm:space-y-1.5 lg:space-y-1 shadow lg:shadow-none rounded-lg bg-slate-50 lg:bg-transparent grow ", {
  //     "xs:col-start-1  xs:col-span-7 lg:col-start-1 lg:col-span-12": justify === "left",
  //     "xs:col-start-2 xs:col-span-7  md:col-span-7 md:col-end-13 lg:col-start-1 lg:col-span-12": justify === "right",
  //   });

  //   const imageClasses = cn(" card__image flex  md:bg-slate-50  data-[flip=true]:-scale-x-100   object-cover aspect-[3/2]   rounded-lg shadow lg:shadow-none lg:z-50", {
  //     "xs:col-start-1 xs:col-span-7 md:col-start-1 md:col-span-10 lg:col-start-1 lg:col-span-12 xs:row-start-1 md:row-start-2 lg:row-start-1 xs:row-span-6": justify === "right",
  //     "xs:col-start-2 xs:col-span-7 md:col-start-3 md:col-span-10 lg:col-start-1 lg:col-span-11 xs:row-start-1 xs:row-span-6  md:row-start-2 lg:row-start-1": justify === "left",
  //   });

  //   return (
  //     <article key={id} data-key={id} data-justify={justify} className="card data-[justify='right']:justify-self-end lg:data-[justify='right']:justify-self-auto lg:data-[key='1']:col-start-1 lg:data-[key='2']:col-start-4 lg:data-[key='3']:col-start-7 lg:col-span-3 relative grid lg:flex lg:flex-col xs:grid-cols-8 md:grid-cols-12 xs:auto-rows-auto  gap-y-3 xs:gap-y-0 sm:gap-y-0 lg:gap-y-6  w-full xs:max-w-md sm:max-w-lg md:max-w-3 lg:bg-slate-50 lg:shadow lg:rounded-xl">
      
  //       <div className={imageClasses}>
  //         {image} 
  //       </div>
  //       <div className={contentClasses}>
  //         <div className=" flex items-center pl-8 lg:pl-0 pr-5 gap-x-1 xs:gap-x-2 md:gap-x-3.5 leading-7 text-gray-700 text-lg sm:text-lg  font-semibold  ">
  //           <div className="flex items-center justify-center -translate-x-0.5">{icon}</div>
  //           <div className="">
  //             {title}
  //           </div>
  //         </div>
  //         <div className="grow  pl-8 lg:pl-3 pr-6 text-base font-light  sm:text-lg md:text-lg sm:leading-7 lg:leading-[30px] text-gray-600">{content}</div> 
  //         <a className="flex justify-end items-end  space-x-1 py-3 pt-1  pl-7 pr-6  font-medium  text-primary">
  //           <div className="flex gap-x-2 ">
  //             <div className="sm:flex">{linkText}</div>
  //             <ArrowTopRight className=" text-primary w-3 h-3" />
  //           </div>
  //         </a>
  //       </div>
  //     </article>
  //   )
  // }

  const cards = slides.map((slide) => {
    return createCard(slide);
  }); 

  return (
      <div className={classes}>
        {cards}
        <Button   
          className="cta-btn--about invisible opacity-0 px-4 py-2.5 max-w-[300px] sm:max-w-none mx-auto w-full sm:w-auto sm:mr-auto sm:ml-0 space-x-3"
          rounded="md"
          size="sm"
        >
          <span className="text-base">Get Started</span>
          {/* <SearchIcon flip={true} className="h-5 w-5 flex-none" /> */}
        </Button>
      </div>
  )
}