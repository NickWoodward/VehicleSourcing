import type { ComponentProps } from 'react';

interface TabProps extends ComponentProps<'div'> {
  selectedIndex: number;
}
export const Tabs = ({ selectedIndex, children }: TabProps) => {
  return <div className=" tabs flex flex-col flex-wrap items-start justify-start md:items-start w-[98%]  md:w-auto lg:w-full  font-medium xs:pr-[12%] sm:pr-0">{children}</div>;
};
