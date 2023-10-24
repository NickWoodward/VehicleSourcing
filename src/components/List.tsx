import type { ComponentProps } from "react";

import { cn } from '../utils/utils';

interface ListProps<T> extends ComponentProps<"div"> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  itemClassName?: string
}

interface HasId {
  id: number;
}

export const List = <T extends HasId>({
  className,
  items,
  renderItem,
  itemClassName
}: ListProps<T>): React.ReactNode => {
  const itemClasses = cn("", itemClassName);

  return (
    <ul className={className}>
      {items.map((item, index) => (
        <li className={cn(`item-${index}`, itemClasses)} key={item.id}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
};
