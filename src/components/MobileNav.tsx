import { type ComponentProps, useLayoutEffect, useState, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { Burger } from "../utils/svgComponents";
import { Modal } from "./Modal";
import { Navigation } from "./Navigation";

interface Props extends ComponentProps<"div">{}

export const MobileNav = ({className }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({top:"0", right:"0"});

  // const modalRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLDivElement>(null);
  // const scope = useRef<HTMLDivElement>(null);
  // const tl = useRef(gsap.timeline({ paused:true }));
  
  const classes = twMerge(
    "relative flex md:hidden cursor-pointer",
    className
  );

  useLayoutEffect(() => {
    const headerHeight = getComputedStyle(document.documentElement)
    .getPropertyValue('--header-height');

    setMenuPosition((currState) => {
      if(burgerRef.current) {
        const position = burgerRef.current.getBoundingClientRect();
        console.log(position.right, position.width);
        return {right: `${position.right }px`, top: headerHeight}
      } else {
        return currState
      }
    });
  }, []);

  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const lines = Array.from<HTMLElement>(
  //       document.querySelectorAll(".burger-line")
  //     );
  //     const menuItems = Array.from<HTMLElement>(
  //       document.querySelectorAll(".menu-item")
  //     );

  //     // gsap.set(modalRef.current, { yPercent: 0 });
  //     gsap.set(modalRef.current, { opacity: 0 });

  //     tl.current
  //       // .to(modalRef.current, { yPercent: -100 })
  //       .to(modalRef.current, { opacity: 1 })
  //       .fromTo(menuItems, {xPercent: 100}, { stagger: .1, xPercent: 0 }, '<')

  //       .to(lines[0] || null, { y: 144, ease: "power3.out" }, "<")
  //       .to(lines[2] || null, { y: -144, ease: "power3.out" }, "<")
  //       .to(lines[1] || null, { opacity: 0, ease: "power3.out" }, "<.2")
  //       .to(
  //         lines[0] || null,
  //         { rotate: 45, transformOrigin: "center", ease: "power3.inOut" },
  //         ">"
  //       )
  //       .to(
  //         lines[2] || null,
  //         { rotate: 135, transformOrigin: "center", ease: "power3.inOut" },
  //         "<"
  //       );    
  //     }, scope);

  //     return () => ctx.revert();
  // }, []);

  const toggleMenu = () => {
    setIsOpen(curr => !curr);
  };

  return (
    <div className={classes}>
      <Burger 
        ref={burgerRef} 
        // animate={isOpen}
        className="burger flex w-6" 
        onClick={toggleMenu} />
      <Modal 
        position={menuPosition} 
        show={isOpen} 
        close={toggleMenu} 
        modalClasses=" fixed flex justify-end w-full h-full mx-auto z-50"
      >
        <Navigation id="modal" type="mobile" className="flex-col space-y-3" onClick={toggleMenu} />
      </Modal>
    </div>
  );
}