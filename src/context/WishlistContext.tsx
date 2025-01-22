
"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/types";

interface WishlistContextValue {
  wishlistItems: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
}

const WishlistContext = createContext<WishlistContextValue | undefined>(undefined);

interface Props {
  children: React.ReactNode;
}


export const WishlistProvider = ({ children }: Props) => {
  const [wishlistItems, setWishlistItems] = useState<Product[]>(() => {
    if (typeof window !== "undefined") {
      const savedWishlist = localStorage.getItem("wishlist");
      return savedWishlist ? JSON.parse(savedWishlist) : [];
    }
    return [];
  });

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
    }
  }, [wishlistItems]);

  // Add a product to the wishlist
  const addToWishlist = (product: Product) => {
    setWishlistItems((prevItems) => {
      if (prevItems.some((item) => item._id === product._id)) {
        return prevItems; // Product already in wishlist
      }
      return [...prevItems, product];
    });
  };

  // Remove a product from the wishlist
  const removeFromWishlist = (productId: string) => {
    setWishlistItems((prevItems) =>
      prevItems.filter((item) => item._id !== productId)
    );
  };

  return (
    <WishlistContext.Provider
      value={{ wishlistItems, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

// Custom hook to use the WishlistContext
export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};