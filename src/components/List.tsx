import type { ComponentProps } from "react";

interface ListProps<T> extends ComponentProps<"div"> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

interface HasId {
  id: number;
}

export const List = <T extends HasId>({
  className,
  items,
  renderItem,
}: ListProps<T>): React.ReactNode => {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li className="w-full" key={item.id}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
};
