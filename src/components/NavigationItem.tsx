import type { ComponentProps } from "react";

interface IconProps extends ComponentProps<"div">{};

export type NavigationItemType = {
  id: number;
  label: string;
  altLabel: string;
  to: string;
  icon: (props:IconProps) => React.ReactNode;
  description?: React.ReactNode;
};

interface Props extends ComponentProps<"div"> {
  item: NavigationItemType;
}

export const NavigationItem = ({item}: Props) => {
  return (
    <>
      <div key={item.id} className=" group relative w-full flex items-center  gap-x-6  md:w-5/6  pl-12 shadow-lg shadow-dark rounded-lg p-4 bg-white hover:bg-gray-50">
  
        <div className="flex flex-col justify-start text-end">
          <a className="text-base font-medium text-dark">
            {item.label}
            {/* <span className="absolute inset-0" /> */}
          </a>
          <p className="text-base text-gray-600">{item.description}</p>
        </div>
        <div className="flex flex-none items-center justify-center rounded-lg  text-white group-hover:bg-white group-hover:bg-primary group-hover:border-primary">
            <item.icon className="h-8 w-8 text-white group-hover:text-white" aria-hidden="true" />
        </div>
      </div> 
    </>
  )
}