import type { ComponentProps } from "react";
import { cn } from "../utils/utils";

interface Props extends ComponentProps<"div">{
  intent?: string
}

export const SectionPeeker = ({intent}: Props) => {
  console.log(intent);
  const classes = cn("absolute bottom-0 left-0 h-peek w-full px-32 flex justify-center text-white bg-dark rounded-t-3xl max-w-lg sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-8xl", {});
  return (
    <div className={classes}>
      
    </div>
  );
}