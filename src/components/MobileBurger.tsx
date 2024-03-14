import type { ComponentProps } from "react"
import { cn } from "../utils/utils"

interface Props extends ComponentProps<"div"> {}

export const MobileBurger = (props: Props) => {
  const classes = cn("burger relative h-full flex sm:hidden flex-col justify-between w-8 h-4  cursor-pointer", props.className)
  return (
    <div 
      {...props}
      className={classes}
    >
      
      <div className="line w-full h-[2px] bg-slate-400"></div>
      <div className="line w-full h-[2px] bg-slate-400"></div>
      <div className="line w-full h-[2px] bg-slate-400"></div>

      <div className="line-wrapper absolute top-0 left-0 flex items-center h-full w-full">
        <div className="line hidden w-full h-[2px] bg-slate-500"></div>
      </div>
    </div>
  )
}

