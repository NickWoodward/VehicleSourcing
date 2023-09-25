import type { ComponentProps } from "react";

interface IconProps extends ComponentProps<"div">{};

export type NavigationItemType = {
  id: number;
  label: string;
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
      <div key={item.id} className="group relative flex justify-end gap-x-6 rounded-lg p-4 hover:bg-gray-50">
  
        <div className="text-end">
          <a className="text-end font-semibold text-gray-900">
            {item.label}
            <span className="absolute inset-0" />
          </a>
          <p className="mt-1 text-gray-600">{item.description}</p>
        </div>
        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
            <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
        </div>
      </div>
       
      {/* <a className="text-red-900" key={item.id}>{item.label}</a> */}
    </>

  )
}