import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const Header: React.FC<Props> = ({ children, className }) => {
  const classes = twMerge(
    "fixed inset-0 flex justify-between items-center h-headerHeight px-4 py-4 bg-dark text-white shadow z-50",
    className
  );

  return <div className={classes}>{children}</div>;
};