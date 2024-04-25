import { IoMdCart } from "react-icons/io";
const CartButton = () => {
  return (
    <div className="fixed bottom-2 right-10 bg-restaurant-neutral p-2 rounded-full shadow-md shadow-black border-2 border-restaurant-primary">
     <button className="flex items-center gap-3 relative p-2">
         <IoMdCart className="text-3xl text-restaurant-accent" />
         <span className="absolute top-[-0.3rem] right-[0.2rem]">0</span>
     </button>
    </div>
  )
}
export default CartButton