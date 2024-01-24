import type { ComponentProps } from "react";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "../utils/utils";


interface Props extends ComponentProps<"div">, VariantProps<typeof sectionVariants>{
  axis?: "h" | "v",
  contentClassName?: string,
  breakout?: boolean,
  children: React.ReactNode
}

export const sectionVariants = cva(" flex w-full", 
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
        default: "py-20 md:py-24",
        full: "h-[100svh]",
        sm: "py-8"
      },
      breakout: {
        true: "p-0",
        false: " sm:px-page-sm md:px-page-lg lg:px-16 xl:px-page-xl"
      },
      last: {
        true: "py-0"
      }

    },
    defaultVariants: {
      variant: "default",
      height: "default",
      headerOffset: false,
      breakout: false
    }
  }
);


// max-height: 100vh;
// overflow-y: scroll;
// scroll-snap-type: y mandatory;


export function Section({className, variant, axis = 'h',  height, contentClassName, headerOffset, breakout, last, children}:Props) {
  const contentClasses = cn("flex w-full h-full mx-auto", contentClassName, {
    "flex-col": axis === "v",
    "flex-row": axis === "h",
    // "lg:max-w-none": breakout
 });

  return (
    <div 
      className={cn(
        sectionVariants({ variant, height, headerOffset, breakout, last }), className
    )}>
      <div className={contentClasses}>
        {children}
      </div>
    </div>
  );
} 