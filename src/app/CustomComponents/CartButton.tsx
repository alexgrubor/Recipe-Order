'use client'
import Link from "next/link";
import { IoMdCart } from "react-icons/io";
import useCartStore from "@/utils/store/cardStore";
const CartButton = () => {
  const cartItems = useCartStore((state) => state.items);
  return (
    <div className="fixed bottom-2 right-10 bg-restaurant-neutral p-2 rounded-full shadow-md shadow-black border-2 border-restaurant-primary/50">
      <Link href={'/cart'} className="flex items-center gap-3 relative p-2">
        <IoMdCart className="text-3xl text-restaurant-accent" />
        <span className="absolute top-[-0.3rem] right-[0.2rem]">
          {cartItems.length}
        </span>
      </Link>
    </div>
  );
};
export default CartButton;
