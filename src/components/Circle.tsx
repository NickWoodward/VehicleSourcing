import type { ComponentProps } from "react";
import { cn } from "../utils/utils";
import { CircleIcon } from "../utils/svgComponents";

interface Props extends ComponentProps<"div">{
  className?: string
}
export const Circle = ({className}:Props) => {
  return (
    <div className={cn("", className)}>
      <CircleIcon />
    </div>
  );
}