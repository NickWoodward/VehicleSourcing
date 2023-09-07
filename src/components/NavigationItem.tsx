import type { ComponentProps } from "react";

interface IconProps extends ComponentProps<"div">{};

export type NavigationItemType = {
  id: number;
  label: string;
  to: string;
  icon: (props:IconProps) => React.ReactNode;
  contents?: React.ReactNode;
};

interface Props extends ComponentProps<"div"> {
  item: NavigationItemType;
}

export const NavigationItem = ({item}: Props) => {
  return (
    <>
      <a className="text-red-900" key={item.id}>{item.label}</a>
    </>

  )
}