import type { ComponentProps } from "react";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "../utils/utils";


interface Props extends ComponentProps<"div">, VariantProps<typeof sectionVariants>{
  axis?: "h" | "v",
  contentClassName?: string,
  breakout?: boolean,
  children: React.ReactNode
}

export const sectionVariants = cva("flex w-full", 
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
        default: "xs-v:py-12 py-20",
        full: "xs-v:py-12 py-24 h-dvh",
        sm: "min-h-footerHeight"
      },
      breakout: {
        true: "xs:px-page-sm sm:px-page-sm lg:px-10 xl:px-20",
        false: "xs:px-page-sm sm:px-page-sm md:px-page-lg lg:px-16 xl:px-page-xl"
      },


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


export function Section({className, variant, axis = 'h',  height, contentClassName, headerOffset, breakout, children}:Props) {
  const contentClasses = cn("flex w-full h-full lg:max-w-8xl mx-auto", contentClassName, {
    "flex-col": axis === "v",
    "flex-row": axis === "h",
    "xl:max-w-9xl": breakout
 });

  return (
    <div 
      className={cn(
        sectionVariants({ variant, height, headerOffset, breakout }), className
    )}>
      <div className={contentClasses}>
        {children}
      </div>
    </div>
  );
} 