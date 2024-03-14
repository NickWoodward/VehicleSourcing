import type { ComponentProps } from 'react';

interface TabProps extends ComponentProps<'div'> {
  selectedIndex: number;
}
export const Tabs = ({ children }: TabProps) => {
  return <div className=" tabs flex  flex-wrap items-start justify-between md:items-start w-full  md:w-auto lg:w-full space-x-2 font-medium xs:pr-[12%] sm:pr-0 shadow bg-slate-50 rounded py-3 px-2">{children}</div>;
};
