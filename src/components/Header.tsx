import { twMerge } from "tailwind-merge";
import { useStore } from '@nanostores/react'

import { $section } from '../store/store';

// export const Test = () => {
//   const open = useStore($isOpen);
//   console.log('dickhead',open);
//   return <div>Hello {open}</div>
// }

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const Header: React.FC<Props> = ({ children, className }) => {
  const section = useStore($section);
  const classes = twMerge(
    "fixed inset-0 flex justify-between items-center h-headerHeight px-header py-4 bg-dark text-white shadow z-50",
    className
  );

  return <div className={classes}>
    <div className="flex justify-between w-full xl:max-w-9xl mx-auto">
      {children}
    </div>
  </div>
};