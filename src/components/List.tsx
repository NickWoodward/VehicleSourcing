import type { ComponentProps } from "react";

import { cn } from '../utils/utils';

interface ListProps<T> extends ComponentProps<"div"> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  itemName?: string
}

interface HasId {
  id: number;
}

export const List = <T extends HasId>({
  className,
  items,
  renderItem,
  itemName
}: ListProps<T>): React.ReactNode => {
  const itemClasses = cn("w-full", itemName);

  return (
    <ul className={className}>
      {items.map((item) => (
        <li className={itemClasses} key={item.id}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
};
