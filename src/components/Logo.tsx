// import logo from "../../public/logo.png";

import type { ComponentProps } from "react";
import { cn } from "../utils/utils";

interface Props extends ComponentProps<"div">{};

export const Logo = ({className}: Props) => {
  const classes = cn("flex items-center text-xl font-base tracking-tight", className);
  return (
    <>
      {/* <img src={logo} alt="DCG Logo" width={40} height={40} /> */}
      <div className={classes}>Vehicle<span className="text-primary">Searcher</span></div>
    </>
    );
}

// <span>.co.uk</span>