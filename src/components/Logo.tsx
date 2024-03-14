// import logo from "../../public/logo.png";

import type { ComponentProps } from "react";
import { cn } from "../utils/utils";
import { Logo as CompanyLogo, WheelIcon, KeyIcon1 } from "../utils/svgComponents";

interface Props extends ComponentProps<"div">{};

export const Logo = ({className}: Props) => {
  const classes = cn("logo flex items-center  tracking-tight z-50", className);
  return (
    <div className={classes}>
      {/* <img src={logo} alt="DCG Logo" width={40} height={40} /> */}
      {/* <CompanyLogo className="w-6 h-6" /> */}
      {/* <WheelIcon className="w-6 h-6" /> */}
      {/* <KeyIcon1 className=" -translate-y-1 w-7 h-7 rotate-[295deg] -scale-x-100" /> */}
      <a href="#hero" className="text-primaryDark font-bold">Car<span className="text-primary font-semibold">Searcher</span></a>
    </div>
    );
}

// <span>.co.uk</span>