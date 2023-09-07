import type { ComponentProps } from "react";

import { EmblaCarousel as Carousel } from "./Carousel";
import { BMWLogo, VWLogo, MercedesLogo, PhoneIcon, SearchIcon } from "../utils/svgComponents"

interface Props extends ComponentProps<"div">{}

export const WhyUs = (props: Props) => {

  const slides = [
    {
      icon: <PhoneIcon className="w-9 p-1.5 bg-primary rounded-full text-white" />, 
      title: "Get in Touch", 
      content:"Give one of our friendly experts a no-obligation call to discuss your perfect vehicle"
    },
    {
      icon: <SearchIcon className="w-9 p-1.5 bg-primary rounded-full text-white" />, 
      title: "Leave it to Us", 
      content:"We'll use our extensive networks to vet and narrow 1000s of vehicles down to that special one"
    },
    {
      icon: <PhoneIcon className="w-9 p-1.5 bg-primary rounded-full text-white" />, 
      title: "Enjoy your Vehicle", 
      content:"Safe in the knowledge that your new car has made it past our thorough team of mechanics"
    }
  ]

  const createCard = ({icon, title, content}: {icon: React.ReactNode, title: string, content: string}) => {
    return (
      <article className="text-lg text-gray-400 rounded bg-darker p-5">
        <div className="flex items-center gap-5">
          {icon}
          <h2 className="text-lg font-medium tracking-tight text-gray-300">{title}</h2>
        </div>
        <p className="ml-0">{content}</p>
      </article>
    )
  }

  const cards = slides.map(slide => createCard(slide)); 

  return (
    <div className="">
      <div className="justify-start mt-[5%]">
        <Carousel slides={cards} />
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