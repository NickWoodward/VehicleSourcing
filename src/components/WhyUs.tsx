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
    image: phone
  },
  {
    icon: <StackIcon className="w-7 sm:w-9 p-1.5 bg-primary rounded-lg text-white" />, 
    title: "Leave it to Us", 
    content:"We'll use our extensive networks to vet and narrow 1000s of vehicles down to that special one",
    image: networks
  },
  {
    icon: <PhoneIcon className="w-7 sm:w-9 p-1.5 bg-primary rounded-lg text-white" />, 
    title: "Enjoy your Vehicle", 
    content:"Safe in the knowledge that your new car has made it past our thorough team of mechanics",
    image: enjoy
  }
]

export const WhyUs = ({className}: Props) => {
  const classes = cn(
    "md:flex md:justify-center ",
    className
  );

  const createCard = ({icon, title, content, image}: {icon: React.ReactNode, title: string, content: string, image: string}) => {
    return (
      <article className="relative space-y-4 flex flex-col items-start sm:justify-end sm:items-center lg:justify-start  md:max-w-2xl md:rounded-b-md  text-base sm:text-lg  text-white ">
        <img src={image} alt="" className="rounded-t-md md:rounded-b-md" />

        <div className="sm:absolute lg:relative flex flex-col items-start lg:w-full  space-y-0.5  z-30">
          <div className="flex  items-center rounded-md  pl-2 lg:pl-6 pr-4 py-3 gap-3   bg-dark/90">
            <div>{icon}</div>
            <div>
              {title}
            </div>
          </div>
          <div className="py-4 px-4  bg-dark/90 rounded-b-md ">{content}</div>
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

  const cards = slides.map(slide => createCard(slide)); 

  return (
    <div className={classes}>
      <div>
        <Carousel slides={cards} axis="x" markers className="lg:hidden" />
        <div className="hidden lg:flex lg:space-x-20">{cards}</div>
      </div>

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