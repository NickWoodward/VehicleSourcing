import type { ComponentProps } from "react";
import { cn } from "../utils/utils";

interface TabProps extends ComponentProps<'div'> {
  onSelect: () => void;
  "data-last": boolean;
}

export const Tab = ({ onSelect, children, className, "data-last":dataLast }: TabProps) => {
  const classes = cn("tab flex items-center px-3 ", className)
  return (
    <div 
      className={classes} 
      onClick={onSelect}
        data-last={dataLast}
      >
      {children}
    </div>
  );
};
