import type { ComponentProps } from "react";
import { cn } from "../utils/utils";

interface Props extends ComponentProps<"div"> {}

export const Space = ({className}: Props) => {
  const classes = cn("", className);

  return (
    <div className={classes}></div>
  );
};