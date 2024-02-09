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

  const classes = twMerge(
    "header fixed inset-0 flex justify-between items-center h-headerHeight px-header-sm sm:px-header py-4 text-dark shadow z-50",
    className
  );

    return (<div className="z-50">
      <div className="header fixed flex justify-start items-center w-full top-0 left-0 h-headerHeight 3xl:h-headerHeight-lg  bg-blue-50  z-30">
      </div>
 
      <Logo className=" logo-light fixed top-0 left-0 h-headerHeight 3xl:h-headerHeight-lg  flex items-center pl-6 3xl:pl-header-lg  text-slate-50 text-[23px] 3xl:text-[30px] z-30" />
      <Logo className=" logo-dark fixed top-0 left-0 h-headerHeight 3xl:h-headerHeight-lg flex items-center pl-6 3xl:pl-header-lg text-slate-700 text-[23px] 3xl:text-[30px] z-30" />
      {children}
      {/* <MobileNav />
      <Navigation className="hidden md:flex md:justify-start md:items-center md:space-x-6" /> */}
    </div>);
};