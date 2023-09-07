import { type ComponentProps, useLayoutEffect, useState, useRef } from "react";
import { gsap } from 'gsap';
import { twMerge } from "tailwind-merge";
import { Burger } from "../utils/svgComponents";
import { Modal } from "./Modal";
import { Navigation } from "./Navigation";

interface Props extends ComponentProps<"div">{}

export const MobileNav = ({className }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const scope = useRef<HTMLDivElement>(null);
  const tl = useRef(gsap.timeline({ paused:true }));
  const classes = twMerge(
    "md:hidden cursor-pointer",
    className
  );

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const lines = Array.from<HTMLElement>(
        document.querySelectorAll(".burger-line")
      );
      gsap.set(modalRef.current, { xPercent: -100 });
      tl.current
        .to(modalRef.current, { xPercent: 0 })
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
      <Burger onToggle={toggleMenu} />
      <Modal ref={modalRef} closeModal={toggleMenu} modalClasses="flex-col modal absolute top-0 left-0 w-10/12 h-full bg-white">
        <Navigation onToggle={toggleMenu} />
      </Modal>
    </div>
  );
}