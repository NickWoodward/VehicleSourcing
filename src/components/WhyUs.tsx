import type { ComponentProps } from "react";

import { EmblaCarousel as Carousel } from "./Carousel";

import { cn } from "../utils/utils";
import { BMWLogo, VWLogo, MercedesLogo, PhoneIcon, StackIcon } from "../utils/svgComponents"
import networks from "../assests/networks.jpeg";
import phone from "../assests/phone.jpeg";
import enjoy from "../assests/enjoy.jpeg";


interface Props extends ComponentProps<"div">{}
const slides = [
  {
    icon: <PhoneIcon className="w-7 sm:w-9 p-1.5 bg-primary rounded-lg text-white" />, 
    title: "Get in Touch", 
    content:"Give one of our friendly experts a no-obligation call to discuss your perfect vehicle",
    image: phone,
    id:1
  },
  {
    icon: <StackIcon className="w-7 sm:w-9 p-1.5 bg-primary rounded-lg text-white" />, 
    title: "Leave it to Us", 
    content:"We'll use our extensive networks to vet and narrow 1000s of vehicles down to that special one",
    image: networks,
    id:2
  },
  {
    icon: <PhoneIcon className="w-7 sm:w-9 p-1.5 bg-primary rounded-lg text-white" />, 
    title: "Enjoy your Vehicle", 
    content:"Safe in the knowledge that your new car has made it past our thorough team of mechanics",
    image: enjoy,
    id:3
  }
]

export const WhyUs = ({className}: Props) => {
  const classes = cn(
    "flex md:flex md:justify-center  px-2 lg:px-0",
    className
  );

  const createCard = ({icon, title, content, image, id}: {icon: React.ReactNode, title: string, content: string, image: string, id: number}) => {
    return (
      <article key={id} className="relative space-y-3 flex flex-col items-start sm:justify-end sm:items-center lg:justify-start  md:max-w-xl md:rounded-b-md  text-sm sm:text-lg  text-white ">
        <img src={image} alt="" className="rounded-md shadow-md" />

        <div className="sm:absolute lg:relative flex flex-col items-start lg:w-full pt-1.5 pb-2 bg-slate-50/90 rounded-md shadow sm:shadow-none sm:rounded-t-none z-30">
          <div className=" flex w-full items-end  pl-4 pr-6 lg:pl-2  py-3 sm:py-3 gap-3 sm:gap-4 text-slate-700 font-semibold  ">
            <div className="">{icon}</div>
            <div className="">
              {title}
            </div>
          </div>
          <div className="pl-7 lg:pl-3 pr-5 pt-0 pb-5 text-slate-900">{content}</div>
        </div>
{/* 
        <div className="flex flex-col items-start p-4 sm:p-6 z-30">
          <div className="flex items-center justify-start bg-dark/90 rounded-md gap-4 p-3 pr-6 mt-0">
            {icon}
            <h2 className="sm:text-lg font-medium tracking-tight text-white">{title}</h2>
          </div>
          <p className="ml-0 mt-3  bg-dark/90 rounded-md p-3 px-6">{content}</p>
        </div> */}
      </article>
    )
  }

//   <div className="absolute -bottom-full translate-y-100  flex flex-col items-start p-4 sm:p-6 z-30">
//   <div className="flex items-center justify-start bg-dark/90 rounded-md gap-4 p-3 pr-6 mt-0">
//     {icon}
//     <h2 className="sm:text-lg font-medium tracking-tight text-white">{title}</h2>
//   </div>
//   <p className="ml-0 mt-3  bg-dark/90 rounded-md p-3 px-6">{content}</p>
// </div>

  const cards = slides.map((slide) => createCard(slide)); 

  return (
    <div className={classes}>
        <Carousel slides={cards} axis="x" markers className="lg:hidden" />
        <div className="hidden animate-text invisible  lg:flex lg:space-x-8 xl:space-x-24">{cards}</div>

      {/* <div className=" mt-[20%] px-2 text-white">
        <div className="flex justify-start space-x-10">
          <BMWLogo className="w-14" />
          <MercedesLogo className="w-14" />
          <VWLogo className="w-14" />
        </div>
        <div className="flex justify-between">
        </div>
      </div> */}
    </div>
  )
}