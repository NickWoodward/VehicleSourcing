
import { useStore } from "@nanostores/react"; 
import { isMenuOpen } from "../store/store";

import { DesktopMenu } from "./DesktopMenu"
import { MobileBurger } from "./MobileBurger"
import { MobileMenu } from "./MobileMenu"
import { cn } from "../utils/utils";
import { Modal } from "./Modal";

interface Props {
  className: string,
}

export const Navigation = ({className}: Props) => {
  const $isMenuOpen = useStore(isMenuOpen);

  const navItems = [
    {name: "About", to: "/#about"},
    {name: "Why Us", to: "/#testimonials"},
    {name: "Contact", to: "/#contact"},

  ];

  const toggleMenu = (event: React.MouseEvent) => {
    event.stopPropagation();
    isMenuOpen.set(!$isMenuOpen);
  }

  const mobileItemClasses = "cursor-pointer";
  const desktopItemClasses = "cursor-pointer";
  const classes = cn("nav fixed top-0 right-0 flex flex-col h-headerHeight justify-center mr-4 z-50", className);
  return <div className={classes}>
    <MobileBurger onClick={toggleMenu} />
    {
      $isMenuOpen && 
      <Modal onClick={(e) => toggleMenu(e)}>
        <MobileMenu items={navItems} itemClassName={mobileItemClasses} />
      </Modal>
    }
    <DesktopMenu items={navItems} itemClassName={desktopItemClasses} />
  </div>
}


// import type { ComponentProps } from "react";
// import { cn } from "../utils/utils";
// import { List } from "./List";
// import { EngineIcon, PhoneIcon2, HomeIcon2,  } from "../utils/svgComponents";
// import { NavigationItem, type NavigationItemType } from "./NavigationItem";

// interface Props extends ComponentProps<"div">{
//   linkClasses?: string;
//   type?: string;
//   // onToggle: () => void;
// }

// const navOptions = [
//   {
//     id: 1,
//     label: "Home",
//     altLabel: "Home",
//     to: "#hero",
//     icon: HomeIcon2,
//     description: "Is where your new car is"
//   },
//   {
//     id: 2,
//     label: "How it Works",
//     altLabel: "How it Works",
//     to: "#about",
//     icon: EngineIcon,
//     description: "3 Steps to your dream car"
//   },
//   {
//     id: 3,
//     label: "Masserati 3200",
//     altLabel: "Contact Us",
//     to: "#contact",
//     icon: PhoneIcon2,
//     description: "Talk to Us"
//   },
// ];

// export const Navigation = (props: Props) => {
//   const { className, type = "desktop" } = props;
//   const listClasses = cn("nav flex py-3", className);
//   const itemClasses = cn("menu-item px-3 md:px-0 font-light text-textDark font-medium  hover:text-primary hover:delay-0 cursor-pointer");

//   const renderItem = (item: NavigationItemType) => {
//     return (
//       type==="mobile"? <NavigationItem item={item} /> : <a key={item.id} href={item.to} data-active={false} className="data-[active=true]:text-primary">{item.altLabel}</a>
//     );
//   };

//   return (
//     <List
//       items={navOptions}
//       renderItem={renderItem}
//       itemClassName={itemClasses}
//       className={listClasses}
//     />      
//   );
// }
