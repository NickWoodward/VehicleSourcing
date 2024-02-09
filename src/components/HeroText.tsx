import type { ComponentProps } from "react"
import { HeroCTA } from "./HeroCTA"
import { cn } from "../utils/utils"
import { TypeAnimation } from "react-type-animation"

interface Props extends ComponentProps<"div">{}

export const HeroText = (props: Props) => {
  const classes = cn(
    " relative flex justify-start items-start  rounded",
    props.className
  )
  return (
    <div {...props} className={classes}>
      {/* <h2 className="subtitle animate-text invisible opacity-0  mb-1 xs:mb-0  text-base xs:text-lg sm:text-lg xl:text-2xl 3xl:text-xl font-semibold text-primary">Find your Perfect</h2> */}
      
      <h1 className="title animate-text invisible opacity-0 xl:mt-1 3xl:mt-2 text-2xl  sm:text-3xl lg:text-3xl xl:text-4xl 3xl:text-5xl font-bold lg:font-semibold 3xl:font-bold tracking-tighter 3xl:leading-[3.5rem] text-gray-700">
        {/* Hassle Free Purchasing */}
        Find your Perfect
        <br/>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            'BMW',
            5000,
            'Mercedes',
            5000,
            'WhiteLink Ferry',
            5000,
            'Ford',
            5000,
            'Audi',
            5000,
            'Volkswagen',
            5000,
          ]}
          speed={50}
          // style={{ display:"inline-block", fontSize: '2em' }}
          className={"inline-block text-primary"}
          repeat={Infinity}
        />
        {/* Find your Perfect Volvo */}
      </h1>
      <p className="tagline animate-text invisible opacity-0 xxs-v:mt-0 mt-2.5 xl:mt-3 3xl:mt-4 text-base text-medium xs:text-lg sm:text-xl lg:text-xl xl:text-2xl 3xl:text-2xl text-textGray">
        {/* Discover an effortless way to buy your dream vehicle */}
        Discover an effortless way to buy your dream vehicle
      </p>
      <HeroCTA />

    </div>
  )
} 