import type { ComponentProps } from "react"
import { HeroCTA } from "./HeroCTA"
import { cn } from "../utils/utils"

interface Props extends ComponentProps<"div">{}

export const HeroText = (props: Props) => {
  const classes = cn(
    "relative flex flex-col  lg:max-w-none lg:pt-6",
    props.className
  )
  return (
    <div {...props} className={classes}>
      <h2 className="mb-1 text-sm xs:text-base lg:text-xl font-semibold tracking-tight text-primary">KYANEES</h2>
      <h1 className="text-2xl xs:text-3xl sm:text-4xl font-semibold  tracking-tight text-gray-700">
        Hassle Free Vehicle Purchasing
      </h1>
      <p className="mt-3 max-w-sm text-base xs:text-lg md:text-xl lg:text-2xl text-gray-600">
        Discover an effortless way to buy your dream vehicle
      </p>
      <HeroCTA />

    </div>
  )
} 