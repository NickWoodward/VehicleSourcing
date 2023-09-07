import type { ComponentProps } from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "../utils/utils";

interface Props extends ComponentProps<"div">, VariantProps<typeof sectionVariants>{
  children: React.ReactNode
}

export const sectionVariants = cva("container flex px-5 py-[15%] sm:px-6 lg:px-8", {
  variants: {
    variant: {
      default: "flex-col items-center bg-white text-dark",
      dark: "bg-dark text-white",
      darker: "bg-slate-700"
    },
    headerOffset: {
      true: "mt-headerHeight"
    },
    height: {
      full: "min-h-dvhMinusHeader",
      sm: "min-h-footerHeight"
    },
    axis: {
      vertical: "flex-col",
      horizontal: "flex-row"
    }
  },
  defaultVariants: {
    variant: "default",
    height: "full",
    headerOffset: false,
    axis: "vertical"
  }
}
);

// max-height: 100vh;
// overflow-y: scroll;
// scroll-snap-type: y mandatory;


export function Section({className, variant, height, headerOffset, children}:Props) {

  return <div className={cn(
    sectionVariants({ variant, height, headerOffset, className })
  )}>{children}</div>
}