"use client";
import useCartStore from "@/utils/store/cardStore";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import CartItem from "./components/CartItem";
const CartPage = () => {
  const cartItems = useCartStore((state) => state.items);
  const { isSignedIn } = useUser();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-my-custom-image-5 bg-cover bg-center bg-no-repeat bg-fixed brightness-50"></div>
      <div className="min-h-screen flex justify-center items-center relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-800">Your Cart</h2>
            <div className="mt-4">
              {cartItems.length === 0 ? (
                <div className="text-center">
                  <p className="text-gray-600">Your cart is empty.</p>
                  <Link
                    href="/menus"
                    className="bg-restaurant-accent block text-white px-4 py-2 mt-4 rounded-md hover:bg-restaurant-accent/90"
                  >
                    Browse Recipes
                  </Link>
                </div>
              ) : (
                <div>
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
            <div className="mt-8">
              <div className="flex justify-between items-center border-t pt-6">
                {total > 0 && (
                  <p className="text-lg">
                    Total: <span className="font-semibold">{total} EUR</span>
                  </p>
                )}
                <div>
                  {total > 0 && isSignedIn && (
                    <Link
                      href="/checkout"
                      className="bg-restaurant-secondary text-restaurant-primary px-4 py-2 mt-4 rounded-md "
                    >
                      Proceed to Checkout
                    </Link>
                  )}

                  {total > 0 && !isSignedIn && (
                    <Link
                      href="/sign-in"
                      className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-700"
                    >
                      Sign in to Checkout
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartPage;
