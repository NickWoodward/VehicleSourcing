import type { ComponentProps } from "react";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "../utils/utils";


interface Props extends ComponentProps<"div">, VariantProps<typeof sectionVariants>{
  axis?: "h" | "v",
  peek?: boolean,
  children: React.ReactNode
}

export const sectionVariants = cva("flex items-center w-full px-6 xs:px-8 sm:px-14 md:px-12 lg:px-16 xl:px-36", 
  {
    variants: {
      variant: {
        default: "flex-col bg-white text-dark",
        dark: "flex-col bg-dark text-white",
        darker: "bg-darker",
        gray: "bg-slate-100 text-white"
      },
      headerOffset: {
        true: "mt-headerHeight"
      },
      height: {
        default: "h-auto",
        full: "py-[7vh] h-dvh",
        sm: "min-h-footerHeight"
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
    }
  }
);


// max-height: 100vh;
// overflow-y: scroll;
// scroll-snap-type: y mandatory;


export function Section({className, variant, axis = 'v', justify = 'start', height,  headerOffset, children}:Props) {
  
  const contentClasses = cn("flex md:justify-start h-full w-full max-w-lg sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-8xl", {
    "flex-col": axis === "v",
    "flex-row": axis === "h",
    "justify-center": justify === "center",
    "justify-start": justify === "start",
    "justify-end": justify === "end",
    "justify-between": justify === "between",
    "justify-around": justify === "around",
 });

  return (
    <div 
      className={cn(
        sectionVariants({ variant, justify, height, headerOffset, className })
    )}>
      <div className={contentClasses}>
        {children}
      </div>
      {/* {peek? <SectionPeeker /> : null} */}

    </div>
  );
} 