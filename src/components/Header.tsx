import { twMerge } from "tailwind-merge";

import { MobileNav } from "./MobileNav";
import { Navigation } from "./Navigation";
import { Logo } from "../components/Logo";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const Header: React.FC<Props> = ({ children, className }) => {
  // return <div className={classes}>
  //   <div className="w-full h-full bg-red-500"></div>
  //   <div className="flex justify-between w-full xl:max-w-9xl">
  //     {children}
  //   </div>
  // </div>

 
    return (<div className="z-40">

      {children}
      {/* <MobileNav />
      <Navigation className="hidden md:flex md:justify-start md:items-center md:space-x-6" /> */}
    </div>);
};