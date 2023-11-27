import { createPortal } from "react-dom";
import { ComponentProps, forwardRef, useEffect } from "react";
import { Transition } from "react-transition-group";
import { gsap } from "gsap";
import { cn } from "../utils/utils";

interface Props extends ComponentProps<"div"> {
  modalClasses?: string;
  contentClasses?: string;
  close: () => void;
  show: boolean,
  children: React.ReactNode;
  position?: {right: string, top: string}
}

export const Modal = forwardRef<HTMLDivElement, Props>(function Modal(
  { modalClasses, contentClasses, close, show = false, children, position }: Props,
  ref
) {
  const modalClassName = cn("flex cursor-pointer z-50", 
    modalClasses
  );
  
  const divStyle = position? {
    top: position.top,
  }:undefined;
  

  const contentClassName = cn("cursor-auto", contentClasses);
  // @TODO: Either the animation should be lifted out of this component, so that it can involve non-generic
  // items (menuItems vs overlay/modal in this case), or those items should be passed into the modal
  return createPortal(
    <Transition
      mountOnEnter
      unmountOnExit
      in={show}
      addEndListener={(node: HTMLElement, done: () => void) => {
        const ctx = gsap.context(() => {
          const menuItems = gsap.utils.toArray(".menu-item");

          if (show) {
            console.log(menuItems);
            gsap.set(menuItems, { xPercent : 110 });
            gsap
              .timeline({ onComplete: done })
              .to("#overlay", { autoAlpha: 0.75, duration: 0.1 })
              .to("#modal", { autoAlpha: 1, y: 0, duration: 0.25 }, 0)
              .to(menuItems, { xPercent: 0, stagger: 0.1}, 0);
          } else {
            gsap
              .timeline({ onComplete: done })
              .to(menuItems, { xPercent: 110, stagger: 0.1})
              .to("#modal", { autoAlpha: 0, duration: 0.25 }, ">-=0.25")
              .to("#overlay", { autoAlpha: 0, duration: 0.1 }, ">-=0.1");
          }
        }, node);

        // document.body.classList.toggle("overflow-hidden");
      }}
    >
      <div ref={ref} style={divStyle} className={modalClassName}>
        <div
          id="overlay"
          className="h-full w-full absolute inset-0 bg-dark opacity-0 cursor-pointer"
          onClick={() => { close() }}
        />
        {children}
      </div>
    </Transition>,
    // <div ref={ref} style={divStyle} onClick={close} className={modalClassName}>
    //   <div  onClick={(e) => e.stopPropagation()} className={contentClassName}>
    //     {children}
    //   </div>
    // </div>,
    document.body
  );
});



