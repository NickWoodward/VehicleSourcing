import { useContext, type ComponentProps } from "react";
import { cn } from "../utils/utils";
import { CloseIcon } from "../utils/svgComponents";
import { produce } from "immer";
import { FormStateContext } from "./FormContainer";

interface TabProps extends ComponentProps<'div'> {
  onSelect: () => void;
  "data-last": boolean;
  "data-selectable": boolean;
  "data-active": boolean;
  closeable?: boolean;
}

export const Tab = ({ onSelect, children, className, "data-active":dataActive, "data-selectable":dataSelectable, "data-last":dataLast, closeable }: TabProps) => {
  const { setForm } = useContext(FormStateContext);
  const classes = cn("relative tab flex items-center data-[selectable=true]:cursor-pointer data-[active=true]:text-primary py-2 px-3", className)
  
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
      data-last={dataLast}
      data-active={dataActive}
      data-selectable={dataSelectable}
      >
      {children}
      {closeable && <span className="absolute top-[10%] right-0 translate-x-full flex items-center justify-center w-4 h-4 rounded-full ">
       <CloseIcon 
          className="text-red-500 cursor-pointer" 
          onClick={closeHandler}
        />
      </span>}
    </div>
  );
};
