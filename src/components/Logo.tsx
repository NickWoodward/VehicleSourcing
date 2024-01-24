// import logo from "../../public/logo.png";

import type { ComponentProps } from "react";
import { cn } from "../utils/utils";
import { Logo as CompanyLogo } from "../utils/svgComponents";

interface Props extends ComponentProps<"div">{};

export const Logo = ({className}: Props) => {
  const classes = cn("logo flex items-center text-dark font-medium tracking-tight", className);
  return (
    <div className="flex space-x-1.5">
      {/* <img src={logo} alt="DCG Logo" width={40} height={40} /> */}
      {/* <CompanyLogo className="w-6 h-6" /> */}
      <div className={classes}>Car<span className="text-primary">Searcher</span></div>
    </div>
    );
}

// <span>.co.uk</span>