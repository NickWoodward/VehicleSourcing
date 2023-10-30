import type { ComponentProps } from "react";

import { EmblaCarousel as Carousel } from "./Carousel";

import { cn } from "../utils/utils";
import { PinPointIcon, ContactIcon, ArrowTopRight, CarIcon2, KeyIcon } from "../utils/svgComponents"
import networks from "../assests/networks.jpeg";
import phone from "../assests/phone.jpeg";
import enjoy from "../assests/enjoy.jpeg";


interface Props extends ComponentProps<"div">{}
const slides = [
  {
    icon: <ContactIcon className="w-12 h-12 bg-slate-300 rounded-full" />, 
    title: "Get in Touch", 
    content:"Give one of our friendly experts a no-obligation call, or contact us below to discuss your perfect vehicle",
    image: phone,
    id:1,
    to:"#contact",
    linkText: "Contact Us"
  },
  {
    icon: <PinPointIcon className="w-12 h-12 bg-slate-300 rounded-full" />, 
    title: "Leave it to Us", 
    content:"We'll use our extensive networks to vet and narrow 1000s of vehicles down to that special one",
    image: networks,
    id:2,
    to:"#contact",
    linkText: "Find Out More"
  },
  {
    icon: <KeyIcon className="w-12 h-12 bg-slate-300 rounded-full" />, 
    title: "Drive away in your new vehicle", 
    content:"Safe in the knowledge that your new car has made it past our thorough team of mechanics",
    image: enjoy,
    id:3,
    to:"#contact",
    linkText: "Get Started"
  }
]

export const WhyUs = ({className}: Props) => {
  const classes = cn(
    "flex md:flex md:justify-center",
    className
  );

  const createCard = ({icon, title, content, image, id, linkText}: {icon: React.ReactNode, title: string, content: string, image: string, id: number, linkText: string}) => {
    return (
      <article key={id} className="card md:w-[45%] relative sm:overflow-hidden md:overflow-visible sm:rounded-xl space-y-3 flex flex-col items-start sm:justify-end sm:items-center lg:justify-start   md:rounded-b-md  text-sm sm:text-lg  text-white ">
        <img src={image} alt="" className="card__image rounded-2xl shadow-md md:hidden" />

        <div className="card__content w-full space-y-3 sm:space-y-1 xs:px-2 pt-6 sm:pt-4 pb-8 sm:pb-6 sm:absolute lg:relative flex flex-col items-start lg:w-full  bg-slate-50/95 rounded-2xl sm:rounded-xl  shadow-md sm:shadow-none sm:rounded-t-none z-30">
          <div className=" flex w-full items-center  pl-4 pr-6 lg:pl-2 sm:py-1 gap-x-4 text-slate-600 text-lg font-semibold  ">
            <div className="flex items-center justify-center rounded-full border-3 border-slate-300">{icon}</div>
            <div className="">
              {title}
            </div>
          </div>
          <div className="pl-7 lg:pl-3 pr-5 text-base text-gray-500">{content}</div>
          <a className="flex w-full justify-end space-x-1  pl-7 lg:pl-3 pr-7 font-medium text-primary">
            <div>{linkText}</div>
            <ArrowTopRight className="text-primary w-3 h-3" />
          </a>
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
        {/* <Carousel slides={cards} axis="x" markers className="carousel lg:hidden" />
        <div className="not-carousel hidden lg:flex lg:space-x-8 xl:space-x-24">{cards}</div> */}
      <div className="cards flex flex-col space-y-12 md:flex-row md:flex-wrap md:justify-between md:w-full lg:flex-row lg:space-x-6 xl:space-x-12 lg:space-y-0 lg:max-w-none">{cards}</div>
    </div>
  )
}