import type { ComponentProps } from "react";
import { cn } from "../utils/utils";
import { List } from "./List";
import { aboutIcon } from "../utils/svgComponents";
import { NavigationItem, NavigationItemType } from "./NavigationItem";

interface Props extends ComponentProps<"div">{
  linkClasses?: string;
  onToggle: () => void;
}

const navOptions = [
  {
    id: 1,
    label: "Home",
    to: "/",
    icon: aboutIcon
  },
  {
    id: 2,
    label: "About",
    to: "/about",
    icon: aboutIcon
  },
  {
    id: 3,
    label: "Contact",
    to: "/contact",
    icon: aboutIcon
  },
];

export const Navigation = ({className}: Props) => {

  const classes = cn(className, "");

  const renderItem = (item: NavigationItemType) => {
    return (
      <NavigationItem item={item} />
    );
  };

  return (
    <List
      className={classes}
      items={navOptions}
      renderItem={renderItem}
    />
  );
}