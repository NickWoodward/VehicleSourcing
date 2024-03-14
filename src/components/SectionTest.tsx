import type { ComponentProps, ReactNode } from "react";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "../utils/utils";


interface Props extends ComponentProps<"div">, VariantProps<typeof sectionVariants>{
  breakout?: boolean,
  children: React.ReactNode
  intent?: "default" | "gray" | "dark",
  headerOffset?: boolean,
  bgImage?: ReactNode,
  height?: "full",
}
// Background blend modes
// darken zinc-700, or stone-600. brightness 30 teal-700
// multiply teal 700 75%
// multiply cyan-700 50%
// dodge cyan-600 20% / or 800 30
// hard-light sky-200 50%
// multiply sky-300 60
// hard-light blue-300 20
// soft-light slate-600 55 /gray better?
// *** gray better
export const sectionVariants = cva("w-full", 
  {
    variants: {
      intent: {
        default: "text-dark",
        dark: "text-white",
        gray: "text-white"
      },
      headerOffset: {
        true: "pt-headerHeight"
      },
      height: {
        full: "h-svh ",
      },
      yPad: {
        none: "py-0",
      },
    },
    defaultVariants: {
      intent: "default",
      headerOffset: false,
      yPad: "none",
    }
  }
);

export function SectionTest({className, bgImage, id, intent, height, headerOffset, breakout, yPad, children}:Props) {
  const sectionClasses = cn("SECTION", className);

  return (
    <div 
      id={id}
      className={cn(
        sectionVariants({ intent, yPad, headerOffset, height }), sectionClasses
    )}
    >
      {bgImage && bgImage}
      {children}
    </div>
  );
} 