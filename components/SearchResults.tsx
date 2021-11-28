import { AutoSizer, List, ListRowRenderer } from "react-virtualized";
import { ProductItem } from "./ProductItem";

type SearchResultsProps = {
  results: {
    id: number;
    price: number;
    title: string;
    priceFormatted: string;
  }[];
  totalPrice: number;
  onAddToWishlist: (id: number) => Promise<void>;
};

export function SearchResults({
  totalPrice,
  results,
  onAddToWishlist,
}: SearchResultsProps) {
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          product={results[index]}
          onAddToWishlist={onAddToWishlist}
        />
      </div>
    );
  };

  return (
    <section>
      <h2>{totalPrice}</h2>

      {/*{results.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToWishlist={onAddToWishlist}
        />
      ))}*/}
      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
    </section>
  );
}
