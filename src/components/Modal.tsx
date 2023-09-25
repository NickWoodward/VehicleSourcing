import { createPortal } from "react-dom";
import { ComponentProps, forwardRef, useEffect } from "react";
import { cn } from "../utils/utils";

interface Props extends ComponentProps<"div"> {
  modalClasses?: string;
  contentClasses?: string;
  closeModal: () => void;
  children: React.ReactNode;
  position?: {right: string, top: string}
}

export const Modal = forwardRef<HTMLDivElement, Props>(function Modal(
  { modalClasses, contentClasses, closeModal, children, position }: Props,
  ref
) {
  const modalClassName = cn("flex cursor-pointer z-50", 
    modalClasses
  );
  
  const divStyle = position? {
    top: position.top,
  }:undefined;
  

  const contentClassName = cn("cursor-auto", contentClasses);
  
  return createPortal(
    <div ref={ref} style={divStyle} onClick={closeModal} className={modalClassName}>
      <div onClick={(e) => e.stopPropagation()} className={contentClassName}>
        {children}
      </div>
    </div>,
    document.body
  );
});



