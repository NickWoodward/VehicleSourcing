import type { ComponentProps } from "react";
import { cn } from "../utils/utils";
import { List } from "./List";
import { CarIcon, PhoneIcon, HomeIcon } from "../utils/svgComponents";
import { NavigationItem, NavigationItemType } from "./NavigationItem";

interface Props extends ComponentProps<"div">{
  linkClasses?: string;
  // onToggle: () => void;
}

const navOptions = [
  {
    id: 1,
    label: "Home",
    to: "/",
    icon: HomeIcon,
    description: "Is where your new car is"
  },
  {
    id: 2,
    label: "How it Works",
    to: "/about",
    icon: CarIcon,
    description: "3 Steps to your dream car"
  },
  {
    id: 3,
    label: "Masserati 3200",
    to: "/contact",
    icon: PhoneIcon,
    description: "Talk to Us"
  },
];

export const Navigation = (props: Props) => {
  const { className } = props;

  const classes = cn(className, "space-y-3");

  const renderItem = (item: NavigationItemType) => {
    return (
      <NavigationItem item={item} />
    );
  };

  return (
      <div 
        className=" w-full ml-auto flex-auto overflow-hidden rounded-3xl text-sm leading-6  lg:max-w-3xl"
        {...props}>
          <div className="p-4">
            <List
              className={classes}
              items={navOptions}
              renderItem={renderItem}
              itemName="menu-item"
            />      
          </div>
      </div>
  );
}

{/* <div className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
  <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 lg:max-w-3xl">
    <div className="grid grid-cols-1 gap-x-6 gap-y-1 p-4 lg:grid-cols-2">
      {solutions.map((item) => (
        <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
          <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
            <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
          </div>
          <div>
            <a href={item.href} className="font-semibold text-gray-900">
              {item.name}
              <span className="absolute inset-0" />
            </a>
            <p className="mt-1 text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="bg-gray-50 px-8 py-6">
      <div className="flex items-center gap-x-3">
        <h3 className="text-sm font-semibold leading-6 text-gray-900">Enterprise</h3>
        <p className="rounded-full bg-indigo-600/10 px-2.5 py-1.5 text-xs font-semibold text-indigo-600">New</p>
      </div>
      <p className="mt-2 text-sm leading-6 text-gray-600">
        Empower your entire team with even more advanced tools.
      </p>
    </div>
  </div>
</div> */}