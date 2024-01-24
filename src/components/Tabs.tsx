import type { ComponentProps } from 'react';

interface TabProps extends ComponentProps<'div'> {
  selectedIndex: number;
}
export const Tabs = ({ selectedIndex, children }: TabProps) => {
  return <div className="tabs flex justify-start w-[92%] sm:justify-between  text-base font-medium xs:pr-[12%] sm:pr-0 items-center">{children}</div>;
};
