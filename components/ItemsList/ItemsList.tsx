import React from "react";

interface ItemsListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  className: string;
}

const ItemsList: React.FC<T> = (props: ItemsListProps<T>) => {
  return (
    <div className={props.className}>{props.items.map(props.renderItem)}</div>
  );
};

export default ItemsList;
