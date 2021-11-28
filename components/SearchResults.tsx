import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

type SearchResultsProps = {
  results: {
    id: number;
    price: number;
    title: string;
  }[];
  onAddToWishlist: (id: number) => Promise<void>;
};

export function SearchResults({
  results,
  onAddToWishlist,
}: SearchResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price;
    }, 0);
  }, [results]);

  return (
    <section>
      <h2>{totalPrice}</h2>

      {results.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToWishlist={onAddToWishlist}
        />
      ))}
    </section>
  );
}
