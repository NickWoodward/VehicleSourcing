import type { ComponentProps } from "react";
import { cn } from "../utils/utils";
import { List } from "./List";
import { CarIcon, PhoneIcon, HomeIcon } from "../utils/svgComponents";
import { NavigationItem, NavigationItemType } from "./NavigationItem";

interface Props extends ComponentProps<"div">{
  linkClasses?: string;
  type?: string;
  // onToggle: () => void;
}

const navOptions = [
  {
    id: 1,
    label: "Home",
    altLabel: "Home",
    to: "/",
    icon: HomeIcon,
    description: "Is where your new car is"
  },
  {
    id: 2,
    label: "How it Works",
    altLabel: "How it Works",
    to: "/about",
    icon: CarIcon,
    description: "3 Steps to your dream car"
  },
  {
    id: 3,
    label: "Masserati 3200",
    altLabel: "Contact Us",
    to: "/contact",
    icon: PhoneIcon,
    description: "Talk to Us"
  },
];

export const Navigation = (props: Props) => {
  const { className, type = "desktop" } = props;
  const listClasses = cn("", className);
  const itemClasses = cn("menu-item flex border-b border-transparent px-3 py-2 text-base font-light text-white  hover:text-primary hover:delay-0 cursor-pointer");

  const renderItem = (item: NavigationItemType) => {
    return (
      type==="mobile"? <NavigationItem item={item} /> : <div>{item.altLabel}</div>
    );
  };

  return (
    <List
      items={navOptions}
      renderItem={renderItem}
      itemClassNameName={itemClasses}
      className={listClasses}
    />      
  );
}
