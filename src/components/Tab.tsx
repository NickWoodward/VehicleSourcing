import { useContext, type ComponentProps } from "react";
import { cn } from "../utils/utils";
import { CloseIcon } from "../utils/svgComponents";
import { produce } from "immer";
import { FormStateContext } from "./FormContainer";

interface TabProps extends ComponentProps<'div'> {
  onSelect: () => void;
  "data-selectable": boolean;
  "data-active": boolean;
  "data-last": boolean;
  closeable?: boolean;
}

export const Tab = ({ onSelect, children, className, "data-active":dataActive, "data-selectable":dataSelectable, "data-last":dataLast, closeable }: TabProps) => {
  const { setForm } = useContext(FormStateContext);
  const classes = cn("relative w-1/3 data-[active=false]:data-[selectable=true]:text-primary data-[active=true]:border-b data-[active=true]:bg-blue-50  data-[active=false]:border-t-0 border-l-0 data-[active=false]:border-l-0 data-[active=true]:border-b-2 data-[active=true]:border-primary data-[active=false]:data-[selectable=false]:text-slate-300 tab flex  items-start justify-center px-1 py-3.5 text-sm data-[selectable=true]:cursor-pointer data-[active=true]:text-primary ", className)
  
  const closeHandler = (): void => {
    setForm(
      produce((form) => {
        form.px = false
      })
    )
  }

  return (
    <div 
      className={classes} 
      onClick={onSelect}
      data-active={dataActive}
      data-selectable={dataSelectable}
      data-last={dataLast}
      >
      {children}
      {closeable && <span className="absolute top-1 right-2  flex items-center justify-center w-3 h-3 ">
       <CloseIcon 
          className="text-red-500 cursor-pointer" 
          onClick={closeHandler}
        />
      </span>}
    </div>
  );
};
