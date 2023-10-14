import type { ComponentProps } from "react"
import { HeroCTA } from "./HeroCTA"
import { cn } from "../utils/utils"

interface Props extends ComponentProps<"div">{}

export const HeroText = (props: Props) => {
  const classes = cn(
    "relative rounded lg:max-w-none",
    props.className
  )
  return (
    <div {...props} className={classes}>
      <h2 className="subtitle animate-text invisible opacity-0  mb-1 xs:mb-0 text-base xs:text-lg sm:text-lg xl:text-2xl font-medium text-primary">Tagline Here</h2>
      <h1 className="title animate-text invisible opacity-0  text-2xl   sm:text-3xl lg:text-4xl xl:text-6xl font-semibold  tracking-tighter text-gray-700">
        Hassle Free Purchasing
      </h1>
      <p className="tagline animate-text invisible opacity-0  mt-3 sm:mt-5 max-w-sm text-base xs:text-lg sm:text-xl lg:text-xl xl:text-2xl text-gray-600">
        Discover an effortless way to buy your dream vehicle
      </p>
      <HeroCTA />

    </div>
  )
} 