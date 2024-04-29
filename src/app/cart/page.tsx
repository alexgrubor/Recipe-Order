"use client";
import useCartStore from "@/utils/store/cardStore";
import Link from "next/link";
import { useUser } from '@clerk/nextjs';

import CartItem from "./components/CartItem";
const Cartpage = () => {
  const cartItems = useCartStore((state) => state.items);
  const { isSignedIn } = useUser();
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-my-custom-image-5 bg-cover bg-center bg-no-repeat bg-fixed brightness-50"></div>
      <div className="min-h-screen flex justify-center items-center relative z-10 container mx-auto p-6">
        <div className="bg-restaurant-neutral p-3">
          <h1>Cart Page</h1>
          <div>
            {cartItems.length === 0 ? (
              <div className="mt-6 flex flex-col items-center">
                <p className="text-lg text-gray-700">Your cart is empty.</p>
                <Link
                  href="/menus"
                  className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-700"
                >
                  Browse Recipes
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    useCartStore={useCartStore}
                  />
                ))}
              </div>
            )}
          </div>
          <div className=" mt-6 flex justify-between items-center border-t border-gray-200 pt-6  ">
            <p className="text-lg mt-6 p-4">
              Total: &euro;
              {cartItems.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
              )}
            </p>
            <p>{
              isSignedIn ? (
                <Link
                  href="/checkout"
                  className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-700"
                >
                  Proceed to Checkout
                </Link>
              ) : (
                <Link
                  href="/sign-in"
                  className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-700"
                >
                  Sign in to Checkout
                </Link>
              )
              }</p>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};
export default Cartpage;
