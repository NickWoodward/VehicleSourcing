import type { ComponentProps } from 'react';

interface TabProps extends ComponentProps<'div'> {
  selectedIndex: number;
}
export const Tabs = ({ selectedIndex, children }: TabProps) => {
  return <div className="tabs flex justify-start w-[98%] md:w-[65%] lg:w-full sm:justify-between  font-medium xs:pr-[12%] sm:pr-0 items-center">{children}</div>;
};
