import type { ComponentProps } from "react";
import { cn } from "../utils/utils";
import { List } from "./List";
import { EngineIcon, PhoneIcon2, HomeIcon2,  } from "../utils/svgComponents";
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
    icon: HomeIcon2,
    description: "Is where your new car is"
  },
  {
    id: 2,
    label: "How it Works",
    altLabel: "How it Works",
    to: "/about",
    icon: EngineIcon,
    description: "3 Steps to your dream car"
  },
  {
    id: 3,
    label: "Masserati 3200",
    altLabel: "Contact Us",
    to: "/contact",
    icon: PhoneIcon2,
    description: "Talk to Us"
  },
];

export const Navigation = (props: Props) => {
  const { className, type = "desktop" } = props;
  const listClasses = cn("flex py-3", className);
  const itemClasses = cn("menu-item px-3 md:px-0 text-base font-light text-white  hover:text-primary hover:delay-0 cursor-pointer");

  const renderItem = (item: NavigationItemType) => {
    return (
      type==="mobile"? <NavigationItem item={item} /> : <div key={item.id} data-active={true} className="data-[active=true]:text-primary">{item.altLabel}</div>
    );
  };

  return (
    <List
      items={navOptions}
      renderItem={renderItem}
      itemClassName={itemClasses}
      className={listClasses}
    />      
  );
}
