import type { ComponentProps } from "react"
import { HeroCTA } from "./HeroCTA"
import { cn } from "../utils/utils"

interface Props extends ComponentProps<"div">{}

export const HeroText = (props: Props) => {
  const classes = cn(
    " relative flex justify-start items-start  rounded",
    props.className
  )
  return (
    <div {...props} className={classes}>
      <h2 className="subtitle animate-text invisible opacity-0  mb-1 xs:mb-0 xxs-v:leading-4 text-base xs:text-lg sm:text-lg xl:text-2xl font-semibold text-primary">Tagline Here</h2>
      <h1 className="title animate-text invisible opacity-0 xl:mt-2 xxs-v:text-xl  text-2xl  sm:text-3xl lg:text-3xl  font-bold lg:font-semibold  tracking-tighter text-gray-700">
        {/* Hassle Free Purchasing */}
        Lorem, Ipsum Dolor
      </h1>
      <p className="tagline animate-text invisible opacity-0 xxs-v:mt-0 mt-2.5 xl:max-w-lg text-base text-medium xs:text-lg sm:text-xl lg:text-xl xl:text-2xl text-textGray">
        {/* Discover an effortless way to buy your dream vehicle */}
        Lorem ipsum dolor sit amet dodlor adipisicing elit.
      </p>
      <HeroCTA />

    </div>
  )
} 