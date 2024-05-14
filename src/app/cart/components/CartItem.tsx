
import Image from "next/image";
import { motion } from "framer-motion";
import { FaTrash } from "react-icons/fa6";
interface CartItemProps {
  item: {
    id: number | string;
    imageUrl: string;
    name: string;
    price: number;
    quantity: number;
  };
  useCartStore: any;
}

const CartItem = ({ item, useCartStore }: CartItemProps) => {

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity <= 0) {
      useCartStore.getState().removeItem(item.id);
      return;
    }
    useCartStore.getState().updateQuantity(item.id, newQuantity);
  };
  return (
    <motion.div
      key={item.id}
      className="border border-gray-200 p-4 rounded-md"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-4">
        <Image
          src={item.imageUrl}
          width={100}
          height={100}
          alt={item.name}
          className="object-cover rounded"
        />
        <div>
          <h2 className="font-medium">{item.name}</h2>
          <p className="text-gray-600">&euro;{item.price}</p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <p>Quantity:</p>
        <div className="flex items-center border border-gray-300 rounded">
          <motion.button
            className="px-3 py-2 hover:bg-gray-100"
            onClick={() => handleQuantityChange(Math.max(item.quantity - 1, 0))}
            whileTap={{ scale: 0.8 }}
          >
            -
          </motion.button>
          <span className="px-3">{item.quantity}</span>
          <motion.button
            className="px-3 py-2 hover:bg-gray-100"
            onClick={() => handleQuantityChange(item.quantity + 1)}
            whileTap={{ scale: 1.3 }}
          >
            +
          </motion.button>
        </div>
        <p className="ml-4">
          Total: &euro;{(item.price * item.quantity).toFixed(2)}
        </p>
        <motion.button
          className="ml-4 bg-restaurant-accent text-white px-3 py-2 rounded hover:bg-red-800"
          onClick={() => useCartStore.getState().removeItem(item.id)}
          whileTap={{ scale: 0.95 }}
        >
          <FaTrash size={23} />
        </motion.button>
      </div>
    </motion.div>
  );
};
export default CartItem;
