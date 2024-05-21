"use client"
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface ProductTypes {
  attribute_value: {}[];
  images: {}[];
  id: number;
  is_available: boolean;
  other_detail: string;
  price: string;
  price_with_discount: string | null;
  product: number;
  quantity: number;
  title: string;
}

const SearchResults: React.FC = () => {
  const router = useRouter();
  const { query } = router.query;
  const [results, setResults] = useState<ProductTypes[]>([]);

  useEffect(() => {
    if (query) {
      fetch(`http://135.181.108.207/product_variant/?search=${encodeURIComponent(query as string)}`)
        .then((response) => response.json())
        .then((data) => setResults(data))
        .catch((error) => console.error('Error fetching search results:', error));
    }
  }, [query]);

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      {results.length > 0 ? (
        <ul>
          {results.map((result) => (
            <li key={result.id}>{result.title}</li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchResults;
