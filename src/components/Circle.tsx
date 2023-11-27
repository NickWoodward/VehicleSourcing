import type { ComponentProps } from "react";
import { cn } from "../utils/utils";
import { CircleBG, CircleReversedBG } from "../utils/svgComponents";

interface Props extends ComponentProps<"div">{
  reversed?: boolean
}
export const Circle = ({className, reversed}:Props) => {
  return (
    <div className={cn("", className)}>
      {reversed? <CircleReversedBG/>:<CircleBG />}
    </div>
  );
}