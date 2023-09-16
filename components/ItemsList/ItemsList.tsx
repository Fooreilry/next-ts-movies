import { FullMovieData } from "@/types/Responses";

interface ItemsListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  className: string;
}

const ItemsList = (props: ItemsListProps<FullMovieData>) => {
  return (
    <div className={props.className}>{props.items.map(props.renderItem)}</div>
  );
};

export default ItemsList;
