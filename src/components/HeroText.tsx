import type { ComponentProps } from "react"
import { HeroCTA } from "./HeroCTA"
import { cn } from "../utils/utils"

interface Props extends ComponentProps<"div">{}

export const HeroText = (props: Props) => {
  const classes = cn(
    "relative flex flex-col mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6",
    props.className
  )
  return (
    <div {...props} className={classes}>
      <h2 className="mb-1 text-base font-semibold tracking-tight text-primary">KYANEES</h2>
      <h1 className="text-4xl font-semibold tracking-tight text-gray-700">
        Love Fresh Love Tasty
      </h1>
      <p className="mt-3 md:mt-6 text-lg text-gray-600">
        Discover an effortless way to buy your dream vehicle
      </p>
      <HeroCTA />

    </div>
  )
} 