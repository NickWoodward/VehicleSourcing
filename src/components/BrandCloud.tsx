import type { ComponentProps } from "react";

import { MercedesLogo, BMWLogo, VWLogo, FordLogo, PeugeotLogo, AbarthLogo, AudiLogo, MiniLogo, SeatLogo } from "../utils/svgComponents";
import { cn } from "../utils/utils";

interface Props extends ComponentProps<"div">{}

export const BrandCloud = (props: Props) => {
  const classes = cn("brand-cloud max-w-[280px] h-full flex flex-col justify-around", props.className);
  return (
    <div className={classes}>
      <ul
        role="list"
        className="flex justify-between w-full gap-x-12 text-slate-600"
      >
          <li className="brand-logo"><MercedesLogo className="h-14 aspect-square" /></li>
          <li className="brand-logo"><BMWLogo className="h-14 aspect-square" /></li>
          <li className="brand-logo"><VWLogo className="flex h-14 "/></li>

          {/* <li className="brand-logo"><PeugeotLogo className="h-20 aspect-square"/></li> 
           <li className="brand-logo"><AbarthLogo className="h-20 aspect-square" /></li> */}
      
      </ul>
      <ul
        role="list"
        className=" flex items-center gap-8 w-full text-slate-600"
      >          
        <li className="brand-logo"><AudiLogo className="flex align-center w-24 aspect-auto" /></li>
        <li className="brand-logo"><MiniLogo className="w-24 aspect-auto" /></li>
      </ul>
    </div>
  );
}