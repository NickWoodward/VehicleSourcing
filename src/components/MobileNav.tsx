import { type ComponentProps, useLayoutEffect, useState, useRef, useEffect } from "react";
import { gsap } from 'gsap';
import { twMerge } from "tailwind-merge";
import { Burger } from "../utils/svgComponents";
import { Modal } from "./Modal";
import { Navigation } from "./Navigation";

interface Props extends ComponentProps<"div">{}

export const MobileNav = ({className }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({top:"0", right:"0"});

  const modalRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLDivElement>(null);
  const scope = useRef<HTMLDivElement>(null);
  const tl = useRef(gsap.timeline({ paused:true }));
  
  const classes = twMerge(
    "relative md:hidden cursor-pointer",
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

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const lines = Array.from<HTMLElement>(
        document.querySelectorAll(".burger-line")
      );

      gsap.set(modalRef.current, { yPercent: 0 });
      tl.current
        .to(modalRef.current, { yPercent: 0-100 })
        .to(lines[0] || null, { y: 144, ease: "power3.out" }, "<")
        .to(lines[2] || null, { y: -144, ease: "power3.out" }, "<")
        .to(lines[1] || null, { opacity: 0, ease: "power3.out" }, "<.2")
        .to(
          lines[0] || null,
          { rotate: 45, transformOrigin: "center", ease: "power3.inOut" },
          ">"
        )
        .to(
          lines[2] || null,
          { rotate: 135, transformOrigin: "center", ease: "power3.inOut" },
          "<"
        );    
      }, scope);

      return () => ctx.revert();
  }, []);

  const toggleMenu = () => {
    setIsOpen((currState) => {
      if (currState) tl.current.reverse();
      else tl.current.play(0);
      return !currState;
    });
  };

  return (
    <div ref={scope} className={classes}>
      <Burger ref={burgerRef} className="burger flex w-6" onToggle={toggleMenu} />
      <Modal position={menuPosition} ref={modalRef} closeModal={toggleMenu} modalClasses="fixed flex-col modal w-11/12 mx-auto bg-white z-40">
        <Navigation onToggle={toggleMenu} />
      </Modal>
    </div>
  );
}