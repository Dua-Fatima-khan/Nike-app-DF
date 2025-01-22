"use client";
import { useWishlist } from "@/context/WishlistContext";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

export default function Cart() {
  const { cartItems, removeFromCart, updateCartItemQuantity } = useCart();
  const { wishlistItems, removeFromWishlist } = useWishlist();

  // Calculate the total price of all items in the cart
  const calculateTotal = () =>
    cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  // Handle quantity change
  const handleQuantityChange = (productId: string, quantity: number) => {
    if (quantity < 1) return; // Ensure quantity is at least 1
    updateCartItemQuantity(productId, quantity);
  };

  return (
    <main className="flex p-5 flex-wrap w-full justify-between overflow-x-hidden">
      {/* Left: Cart Items and Wishlist */}
      <div className="w-full lg:w-[70%] xl:w-[70%]">
        {/* Cart Items */}
        <div>
          <h1 className="text-xl font-semibold text-gray-800 py-5">Bag</h1>
          {cartItems.length === 0 ? (
            <p>Your cart is empty!</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.product._id} // Use product._id as the key
                className="flex flex-wrap gap-5 justify-between px-2 py-5 border-b border-gray-200"
              >
                {/* Left box */}
                <div className="flex gap-5">
                  <div>
                    <Image
                      src={item.product.image}
                      alt={item.product.productName}
                      width={150}
                      height={150}
                      className="shadow-md"
                    />
                  </div>
                  <div>
                    <h2 className="text-gray-700 font-semibold">
                      {item.product.productName}
                    </h2>
                    <div className="text-sm text-gray-600 space-y-1 py-2">
                      <p>{item.product.category}</p>
                      <div className="flex items-center gap-2">
                        <p>Quantity:</p>
                        <input
                          type="number"
                          value={item.quantity}
                          min="1"
                          onChange={(e) =>
                            handleQuantityChange(
                              item.product._id,
                              parseInt(e.target.value)
                            )
                          }
                          className="w-16 border border-gray-300 rounded-md px-2 py-1 text-sm"
                        />
                      </div>
                    </div>
                    <div className="flex gap-10 py-5">
                      <FaRegHeart size={20} className="cursor-pointer" />
                      <RiDeleteBin5Line
                        size={20}
                        onClick={() => removeFromCart(item.product._id)} // Use product._id
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <p>Price: ₹{item.product.price * item.quantity}</p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Wishlist Section */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-800 py-5">Wishlist</h2>
          {wishlistItems.length === 0 ? (
            <p>Your wishlist is empty!</p>
          ) : (
            wishlistItems.map((item) => (
              <div
                key={item._id} // Use item._id as the key
                className="flex justify-between items-center py-4 border-b"
              >
                <div className="flex gap-4">
                  <Image
                    src={item.image}
                    alt={item.productName}
                    width={100}
                    height={100}
                    className="shadow-md"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.productName}</h3>
                    <p className="text-sm text-gray-600">{item.category}</p>
                  </div>
                </div>
                <Button
                  onClick={() => removeFromWishlist(item._id)} // Use item._id
                  className="text-red-600 hover:text-red-800 bg-white"
                >
                  <RiDeleteBin5Line size={20} />
                </Button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Right: Order Summary */}
      <div className="w-full lg:w-[25%] xl:w-[25%]">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 py-5">Summary</h2>
        </div>
        <div>
          <div className="w-full flex justify-between gap-24 text-sm mt-2 text-gray-600">
            <span>Subtotal</span>
            <span>₹{calculateTotal()}</span>
          </div>
          <div className="w-full flex justify-between gap-24 text-sm mt-2 text-gray-600">
            <span>Delivery</span>
            <span>Free</span>
          </div>
          <div className="w-full flex justify-between gap-24 text-sm mt-2 text-gray-800 py-4 border-b border-t">
            <span>Total</span>
            <span>₹{calculateTotal()}</span>
          </div>
        </div>

        {/* Checkout Button */}
        <Button
          className="w-full rounded-full"
          onClick={() => alert("Proceed to checkout")}
        >
          Checkout
        </Button>
      </div>
    </main>
  );
}