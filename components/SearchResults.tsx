import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

type SearchResultsProps = {
  results: {
    id: number;
    price: number;
    title: string;
  }[];
};

export function SearchResults({ results }: SearchResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price;
    }, 0);
  }, [results]);

  return (
    <section>
      <h2>{totalPrice}</h2>

      {results.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </section>
  );
}
