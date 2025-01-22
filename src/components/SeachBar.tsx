"use client";

import React, { useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

// Define the product type
interface Product {
  _id: string;
  productName: string;
  price: string; // Price stored as string in the database
  imageUrl: string;
  category: string;
}

const ProductSearch: React.FC = () => {
  const [query, setQuery] = useState<string>(""); // Search input state
  const [results, setResults] = useState<Product[]>([]); // Search results state
  const [isOpen, setIsOpen] = useState<boolean>(false); // Control for showing/hiding results

  // Handle search input changes
  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setResults([]);
      setIsOpen(false);
      return;
    }

    try {
      // Define the query
      const sanityQuery = `*[_type == "product" && productName match $searchQuery + "*"] {
        _id,
        productName,
        price,
        "imageUrl": image.asset->url,
        category
      }`;

      // Fetch results from Sanity
      const fetchedResults: Product[] = await client.fetch(sanityQuery, {
        searchQuery: value,
      });

      setResults(fetchedResults);
      setIsOpen(true); // Open results dropdown
    } catch (error) {
      console.error("Error fetching search results:", error);
      setResults([]);
    }
  };

  // Close the search dropdown
  const handleClose = () => {
    setQuery(""); // Clear search input
    setResults([]); // Clear results
    setIsOpen(false); // Close dropdown
  };

  return (
    <div className="relative container mx-auto p-4">
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search for products..."
          className="w-full max-w-xl border border-gray-300 rounded-full py-2 px-4 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        {query && (
          <button
            className="absolute right-4 top-2.5 text-gray-500 cursor-pointer"
            onClick={handleClose}
          >
            ✕
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && (
        <div className="absolute z-10 bg-white shadow-lg rounded-lg w-full max-w-xl mt-2">
          <div className="p-4 max-h-96 overflow-y-auto">
            {results.length > 0 ? (
              results.map((product) => (
                <Link
                  key={product._id}
                  href={`/product/${product._id}`}
                  passHref
                >
                  <div className="flex items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                    <div className="w-16 h-16 relative">
                      <Image
                        src={product.imageUrl || "/placeholder.png"}
                        alt={product.productName}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-semibold text-gray-800">
                        {product.productName}
                      </h3>
                      <p className="text-xs text-gray-500">{product.category}</p>
                      <p className="text-sm font-bold text-neutral-200">
                        ₹{product.price}
                      </p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-center text-gray-500">No products found.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSearch;