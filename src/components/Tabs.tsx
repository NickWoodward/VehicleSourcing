import type { ComponentProps } from 'react';

interface TabProps extends ComponentProps<'div'> {
  selectedIndex: number;
}
export const Tabs = ({ children }: TabProps) => {
  return <div className=" tabs absolute top-1.5 px-1 left-0  flex   w-full font-medium  sm:pr-0  ">{children}</div>;
};
