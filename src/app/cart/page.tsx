"use client"
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useCart } from "@/context/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();

  const calculateTotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <main className="p-10 flex w-full justify-between">
      {/* Left */}
      <div>
        <div>
          <h1 className="text-xl font-semibold text-gray-800 py-5">Bag</h1>
        </div>

        {cartItems.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex w-[700px] justify-between px-2 py-5"
            >
              {/* Left box */}
              <div className="flex gap-5">
                <div>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={150}
                    height={150}
                    className="shadow-md"
                  />
                </div>
                <div>
                  <h2 className="text-gray-700 font-semibold">{item.name}</h2>
                  <div className="text-sm text-gray-600 space-y-1 py-2">
                    <p>{item.description}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                  <div className="flex gap-10 py-5">
                    <FaRegHeart size={20} />
                    <RiDeleteBin5Line
                      size={20}
                      onClick={() => removeFromCart(item.id)}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
              <div>
                <p>Price: ₹{item.price}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Right Summary */}
      <div className="w-[300px]">
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
      </div>
    </main>
  );
}
