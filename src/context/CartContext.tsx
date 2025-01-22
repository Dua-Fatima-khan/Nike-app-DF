"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { CartItem, Product } from "@/types";

interface CartContextValue {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateCartItemQuantity: (productId: string, quantity: number) => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

interface Props {
  children: React.ReactNode;
}

export const CartProvider = ({ children }: Props) => {
  // Load cart items from localStorage on initial render
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  // Add a product to the cart
  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingCartItemIndex = prevItems.findIndex(
        (item) => item.product._id === product._id
      );

      if (existingCartItemIndex !== -1) {
        // If the product already exists, update its quantity
        const updatedCartItems = [...prevItems];
        updatedCartItems[existingCartItemIndex] = {
          ...updatedCartItems[existingCartItemIndex],
          quantity: updatedCartItems[existingCartItemIndex].quantity + 1,
        };
        return updatedCartItems;
      } else {
        // If the product is not in the cart, add it with quantity 1
        return [...prevItems, { product, quantity: 1 }];
      }
    });
  };

  // Remove a product from the cart
  const removeFromCart = (productId: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.product._id !== productId)
    );
  };

  // Update the quantity of a product in the cart
  const updateCartItemQuantity = (productId: string, quantity: number) => {
    setCartItems((prevItems) => {
      const existingCartItemIndex = prevItems.findIndex(
        (item) => item.product._id === productId
      );

      if (existingCartItemIndex !== -1) {
        const updatedCartItems = [...prevItems];
        updatedCartItems[existingCartItemIndex] = {
          ...updatedCartItems[existingCartItemIndex],
          quantity,
        };
        return updatedCartItems;
      }
      return prevItems;
    });
  };

  // Calculate the total price of all items in the cart
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  // Calculate the total number of items in the cart
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};