"use client";

import React, { useState, ChangeEvent, MouseEvent } from "react";
import SearchSelect from "../Select/Select";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation"

interface ProductTypes {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    attribute_value: {}[];
    images: {
      image: string;
      image_id: number;
    }[];
    id: number;
    is_available: boolean;
    other_detail: string;
    price: string;
    price_with_discount: string | null;
    product: number;
    quantity: number;
    title: string;
  }[];
}

const LargeSearch: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<ProductTypes | null>(null);
  const [showResults, setShowResults] = useState<boolean>(false);
  const router = useRouter()

  const handleSearch = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (query.trim()) {
      try {
        const response = await fetch(`http://135.181.108.207/product_variant/?search=${encodeURIComponent(query)}`);
        const data: ProductTypes = await response.json();
        setResults(data);
        setShowResults(true);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setShowResults(false);
  };
  const handleNav = (id: number)=> {
    router.push(`/products/${id}`)
    setQuery("")
    setShowResults(false)
  }

  return (
    <div className="relative">
      <div className="flex items-center bg-primary rounded-full p-[2px] gap-2 max-w-[600px] h-[52px]">
        <div className="flex items-center bg-white rounded-tl-full rounded-bl-full pl-2 py-1">
          <SearchSelect />
          <Input
            value={query}
            onChange={handleChange}
            placeholder="Search products..."
            className="border-0 bg-transparent mr-[150px]"
          />
        </div>
        <button onClick={handleSearch} className="bg-transparent px-4">
          Search
        </button>
      </div>
      {showResults && (
        <div className="absolute top-[50px] left-0 bg-white border border-gray-200 rounded-lg w-full max-w-[600px] max-h-[600px] overflow-y-scroll mt-2 z-10">
          {results && results.count > 0 ? (
            <ul className="flex flex-col gap-3">
              {results.results.map((result) => (
                <button onClick={()=>handleNav(result.id)}><li key={result.id} className="p-2 border-b last:border-b-0 flex gap-3 items-center">
                  <img src={result?.images[0].image} alt={result.title} className="w-[100px] h-[100px] object-contain"/>
                {result.title}
              </li></button>
              ))}
            </ul>
          ) : (
            <p className="p-2">No results found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default LargeSearch;
