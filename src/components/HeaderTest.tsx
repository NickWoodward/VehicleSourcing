import type { ComponentProps } from "react";
import { Toaster } from "sonner";

interface Props extends ComponentProps<"div"> {}

export const HeaderTest = ({children}: Props) => {
  return (
    <div className="fixed z-50" >
      <div className="header-bg fixed bg-slate-50 opacity-0  flex items-center justify-center w-full h-headerHeight  shadow-2xl cursor-pointer z-50">
      </div>
      {children}
      <Toaster richColors position="bottom-right" className="" />
    </div>
  )
}