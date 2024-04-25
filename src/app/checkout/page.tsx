"use client";
import useCartStore from "@/utils/store/cardStore";
import Link from "next/link";
const Cartpage = () => {
  const cartItems = useCartStore((state) => state.items);
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-my-custom-image-5 bg-cover bg-center bg-no-repeat bg-fixed brightness-50"></div>
      <div className="min-h-screen flex justify-center items-center relative z-10">
        <div className="bg-restaurant-neutral p-3">
          <h1>Cart Page</h1>
          {cartItems.length === 0 && (
            <>
              <p>No items in cart</p>
              <Link
                href={"/menus"}
                className="bg-restaurant-secondary block text-restaurant-primary px-4 py-2 mt-6 rounded-md hover:bg-restaurant-accent"
              >
                Search for recipes
              </Link>
            </>
          )}
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-4">
              <div>
                <h2>{item.name}</h2>
                <p>{item.price} €</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Cartpage;
