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
    "fixed inset-0 flex justify-between items-center h-headerHeight px-4 py-4 bg-dark text-white shadow z-50",
    className
  );

  return <div className={classes}>{section}{children}</div>;
};