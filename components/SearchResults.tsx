import { ProductItem } from "./ProductItem";

type SearchResultsProps = {
  results: {
    id: number;
    price: number;
    title: string;
  }[];
};

export function SearchResults({ results }: SearchResultsProps) {
  return (
    <section>
      {results.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </section>
  );
}
