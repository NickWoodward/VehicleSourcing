import type { ComponentProps } from "react";

import { EmblaCarousel as Carousel } from "./Carousel";

import { cn } from "../utils/utils";
import { PinPointIcon, ContactIcon, ArrowTopRight, CarIcon2, KeyIcon } from "../utils/svgComponents"
import mechanic from "../assests/mechanic.jpeg";
import contact from "../assests/contact.jpeg";
import m3 from "../assests/m3.jpeg";


interface Props extends ComponentProps<"div">{}
const slides = [
  {
    icon: <ContactIcon className="w-12 h-12 bg-slate-300 rounded-full" />, 
    title: "Get in Touch", 
    content:"Give one of our friendly experts a no-obligation call, or contact us below to discuss your perfect vehicle",
    image: contact,
    id:1,
    to:"#contact",
    linkText: "Contact Us"
  },
  {
    icon: <PinPointIcon className="w-12 h-12 bg-slate-300 rounded-full" />, 
    title: "Leave it to Us", 
    content:"We'll use our extensive networks to vet and narrow 1000s of vehicles down to that special one",
    image: mechanic,
    id:2,
    to:"#contact",
    linkText: "Find Out More"
  },
  {
    icon: <KeyIcon className="w-12 h-12 bg-slate-300 rounded-full" />, 
    title: "Drive away in your new vehicle", 
    content:"Safe in the knowledge that your new car has made it past our thorough team of mechanics",
    image: m3,
    id:3,
    to:"#contact",
    linkText: "Get Started"
  },
]

const NUM_CARDS = slides.length;

export const WhyUs = ({className}: Props) => {
  // const classes = cn(
  //   "border cards flex flex-col space-y-12 md:h-full md:flex-row md:flex-wrap md:justify-between md:items-start lg:space-x-6 xl:space-x-12 lg:max-w-none",
  //   className
  // );
  const classes = cn(
    // "cards flex flex-col md:flex-row md:flex-wrap md:justify-between gap-y-10 md:gap-y-10 md:gap-x-4 ",
    "cards flex flex-col h-full lg:flex-row items-end lg:items-start  gap-y-10  sm:gap-y-28 md:gap-x-4 lg:gap-x-8 lg:gap-y-0",
    
    className
  );
  // const createCard = ({icon, title, content, image, id, linkText}: {icon: React.ReactNode, title: string, content: string, image: string, id: number, linkText: string}) => {
  //   return (
  //     <article key={id} className="card relative sm:overflow-hidden sm:rounded-xl space-y-3  flex flex-col items-start sm:justify-end sm:items-center lg:justify-start md:w-[48%] md:rounded-b-md md:shadow-md md:bg-white text-sm sm:text-lg  text-white ">
  //        <img src={image} alt="" className="card__image rounded-xl shadow-md md:hidden" />

  //       <div className="card__content w-full space-y-3 sm:space-y-1 xs:px-2 pt-6 sm:pt-4 pb-8 sm:pb-6 sm:absolute md:relative flex flex-col items-start lg:w-full  bg-slate-50/95 rounded-xl sm:rounded-xl  shadow-md sm:shadow-none sm:rounded-t-none  z-30">
  //         <div className=" flex w-full items-center  pl-4 pr-6 lg:pl-2 sm:py-1 gap-x-4 text-slate-600 text-lg font-semibold  ">
  //           <div className="flex items-center justify-center rounded-full border-3 border-slate-300">{icon}</div>
  //           <div className="">
  //             {title}
  //           </div>
  //         </div>
  //         <div className="pl-7 lg:pl-3 pr-5 text-base text-gray-500">{content}</div> 
  //         <a className="flex w-full justify-end space-x-1  pl-7 lg:pl-3 pr-7 font-medium text-primary">
  //           <div>{linkText}</div>
  //           <ArrowTopRight className="text-primary w-3 h-3" />
  //         </a>
  //       </div>
  //     </article>
  //   )
  // }



  // const createCard = ({icon, title, content, image, id, linkText}: {icon: React.ReactNode, title: string, content: string, image: string, id: number, linkText: string}) => {
  //   return (
  //     <article key={id} data-direction={id===NUM_CARDS ? "horizontal":"vertical"} className="card flex flex-col data-[direction=horizontal]:md:flex-row data-[direction=horizontal]:lg:flex-col data-[direction=vertical]:md:w-[48%] data-[direction=vertical]:lg:w-[31%] data-[direction=horizontal]:lg:w-[31%]  data-[direction=horizontal]:md:w-full data-[direction=horizontal]:md:translate-x-14 data-[direction=horizontal]:md:h-[24rem] data-[direction=horizontal]:md:ml-64 data-[direction=vertical]:md:mx-auto space-y-5">
  //       <img src={image} alt="" className="card__image rounded shadow" />

  //       <div data-direction={id===NUM_CARDS ? "horizontal":"vertical"} className="card__content data-[direction=horizontal]:md:absolute data-[direction=horizontal]:lg:relative data-[direction=horizontal]:md:max-w-[48%] data-[direction=horizontal]:md:opacity-95 data-[direction=horizontal]:lg:max-w-none data-[direction=horizontal]:md:-translate-x-32 data-[direction=horizontal]:lg:-translate-x-0 flex flex-col pb-8 pt-6 lg:px-4 xl:px-8 space-y-3 shadow rounded bg-slate-50 grow">
  //         <div className=" flex items-center  pl-4 pr-6 lg:pl-2 sm:py-1 gap-x-4 leading-7 text-gray-600 text-lg font-semibold  ">
  //           <div className="flex items-center justify-center rounded-full border-3 border-slate-300">{icon}</div>
  //           <div className="">
  //             {title}
  //           </div>
  //         </div>
  //         <div className="pl-7 lg:pl-3 pr-5 text-base lg:text-lg text-gray-600">{content}</div> 
  //         <a className="flex grow justify-end items-end space-x-1  pl-7 lg:pl-3 pr-7 font-medium  text-primary">
  //           <div className="flex gap-2">
  //             <div>{linkText}</div>
  //             <ArrowTopRight className="text-primary w-3 h-3" />
  //           </div>
  //         </a>
  //       </div>
  //     </article>
  //   )
  // }


  const createCard = ({icon, title, content, image, id, linkText}: {icon: React.ReactNode, title: string, content: string, image: string, id: number, linkText: string}) => {
    return (
      <article key={id}  className="card relative h-full  grid lg:flex lg:flex-col sm:grid-cols-16 lg:grid-cols-1  gap-y-6 sm:gap-y-0 lg:gap-y-6 w-full">
        <img data-flip={id==1} data-left={id%2===0} src={image} alt="" className="card__image w-full data-[flip=true]:-scale-x-100 data-[left=false]:sm:col-start-3 data-[left=false]:md:col-start-7 data-[left=false]:lg:col-start-1 data-[left=true]:sm:col-start-1  data-[left=true]:md:col-start-1 data-[left=true]:lg:col-start-1 sm:col-span-14 md:col-span-11 lg:col-span-1 sm:row-start-1 sm:row-span-2 lg:row-span-1 data-[left=true]:sm:rounded-l-none data-[left=false]:sm:rounded-r-none rounded shadow  " />

        <div data-left={id%2!==0} className="card__content sm:-translate-y-10 lg:translate-y-0 data-[left=true]:sm:col-start-1 data-[left=true]:md:col-start-2 data-[left=true]:lg:col-start-1 data-[left=true]:sm:rounded-r-none data-[left=false]:sm:rounded-l-none data-[left=false]:sm:col-start-9 data-[left=false]:md:col-start-8 data-[left=false]:lg:col-start-1 sm:col-span-8 md:col-span-8 lg:col-span-1 sm:row-start-1 lg:row-start-2 flex flex-col pb-8 pt-6 lg:px-4 xl:px-8 space-y-3 shadow rounded bg-slate-50 grow">
          <div className=" flex items-center  pl-4 pr-6 lg:pl-2 sm:py-1 gap-x-4 leading-7 text-gray-600 text-lg  font-semibold  ">
            <div className="flex items-center justify-center rounded-full ">{icon}</div>
            <div className="">
              {title}
            </div>
          </div>
          <div className="pl-7 lg:pl-3 pr-5 text-base md:text-lg md:leading-7 text-gray-600">{content}</div> 
          <a className="flex grow justify-end items-end space-x-1  pl-7 lg:pl-3 pr-7 font-medium  text-primary">
            <div className="flex gap-2">
              <div>{linkText}</div>
              <ArrowTopRight className="text-primary w-3 h-3" />
            </div>
          </a>
        </div>
      </article>
    )
  }

  const cards = slides.map((slide) => {
    return createCard(slide);
  }); 

  return (
      <div className={classes}>
        {cards}
        <div className="hidden  w-[48%] justify-center items-center text-slate-600 shadow text-lg font-semibold">
          07473 283 499
        </div>
      </div>
  )
}