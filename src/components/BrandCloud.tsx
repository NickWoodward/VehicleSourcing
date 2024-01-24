import type { ComponentProps } from "react";

import { MercedesLogo, BMWLogo, VWLogo, FordLogo, PeugeotLogo, AbarthLogo, AudiLogo, MiniLogo, SeatLogo } from "../utils/svgComponents";
import { cn } from "../utils/utils";

interface Props extends ComponentProps<"div">{}

export const BrandCloud = (props: Props) => {
  const classes = cn("brand-cloud w-full flex pl-8 sm:px-page-sm md:px-page-lg lg:px-16 xl:px-page-xl", props.className);
  return (
    <div className={classes}>
      <ul
        role="list"
        className="overflow-hidden flex   items-center space-x-14   text-gray-400"
      >

          <li className="brand-logo"><MercedesLogo className="h-10 xs:h-12 md:h-14  aspect-square" /></li>
          <li className="brand-logo"><BMWLogo className="h-10 xs:h-12 md:h-14  aspect-square" /></li>
          <li className="brand-logo"><VWLogo className="flex h-10 xs:h-12 md:h-14  aspect-square"/></li>
          <li className="brand-logo"><MiniLogo className="flex h-9 md:h-14  "/></li>
          <li className="brand-logo -translate-x-1"><SeatLogo className="flex h-9 xs:h-11 md:h-12 aspect-square" /></li> 
          <li className="brand-logo hidden sm:flex"><AudiLogo className="flex h-7 xs:h-9 md:h-10 " /></li>

          <li className="brand-logo"><MercedesLogo className="h-10 xs:h-12 md:h-14  aspect-square" /></li>
          <li className="brand-logo"><BMWLogo className="h-10 xs:h-12 md:h-14  aspect-square" /></li>
          <li className="brand-logo"><VWLogo className="flex h-10 xs:h-12 md:h-14  aspect-square"/></li>
          <li className="brand-logo"><MiniLogo className="flex h-9 md:h-14  "/></li>
          <li className="brand-logo -translate-x-1"><SeatLogo className="flex h-9 xs:h-11 md:h-12 aspect-square" /></li> 
          <li className="brand-logo hidden sm:flex"><AudiLogo className="flex h-7 xs:h-9 md:h-10 " /></li>
          {/* <li className="brand-logo"><PeugeotLogo className="h-20 aspect-square"/></li> 
           <li className="brand-logo"><AbarthLogo className="h-20 aspect-square" /></li> */}
      
      </ul>
      {/* <ul
        role="list"
        className="flex items-center gap-12 w-full text-slate-600"
      >          
        <li className="brand-logo"><AudiLogo className="flex align-center w-24 aspect-auto" /></li>
        <li className="brand-logo"><MiniLogo className="w-24 aspect-auto" /></li>
      </ul> */}
    </div>
  );
}