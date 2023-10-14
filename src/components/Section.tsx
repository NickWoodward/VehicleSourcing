import type { ComponentProps } from "react";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "../utils/utils";


interface Props extends ComponentProps<"div">, VariantProps<typeof sectionVariants>{
  axis?: "h" | "v",
  peek?: boolean,
  contentClassName?: string,
  breakout?: boolean,
  children: React.ReactNode
}

export const sectionVariants = cva("flex  w-full", 
  {
    variants: {
      variant: {
        default: "flex-col bg-white text-dark",
        dark: "flex-col bg-dark text-white",
        darker: "flex-col bg-darker",
        gray: "bg-slate-100 text-white"
      },
      headerOffset: {
        true: "mt-headerHeight"
      },
      height: {
        default: "h-auto",
        full: "xs-v:py-[4vh] py-[8vh] h-dvh",
        sm: "min-h-footerHeight"
      },
      breakout: {
        true: "xs:px-page-sm sm:px-page-sm lg:px-10 xl:px-20",
        false: "xs:px-page-sm sm:px-page-sm md:px-page-lg lg:px-16 xl:px-page-xl"
      },
      justify: {
        center: "justify-center",
        start: "justify-start",
        end: "justify-end",
        between: "justify-between",
        around: "justify-around",
        evenly: "justify-evenly"
      },
      scroll: {
        default: "",
        fullscreen: "h-full"
      },

    },
    defaultVariants: {
      variant: "default",
      height: "default",
      headerOffset: false,
      justify: "center",
      breakout: false
    }
  }
);


// max-height: 100vh;
// overflow-y: scroll;
// scroll-snap-type: y mandatory;


export function Section({className, variant, axis = 'v', justify = 'start', height, contentClassName, headerOffset, breakout, children}:Props) {
  const contentClasses = cn("flex md:justify-start h-full w-full max-w-lg sm:max-w-xl md:max-w-3xl lg:max-w-8xl mx-auto", contentClassName, {
    "flex-col": axis === "v",
    "flex-row": axis === "h",
    "xl:max-w-9xl": breakout
 });

  return (
    <div 
      className={cn(
        sectionVariants({ variant, justify, height, headerOffset, breakout }), className
    )}>
      <div className={contentClasses}>
        {children}
      </div>
    </div>
  );
} 