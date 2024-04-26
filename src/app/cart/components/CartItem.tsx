import Image from "next/image";

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
  return (
    <div key={item.id} className="border border-gray-200 p-4 rounded-md">
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
          <button
            className="px-3 py-2 hover:bg-gray-100"
            onClick={() =>
              useCartStore
                .getState()
                .updateQuantity(item.id, Math.max(item.quantity - 1, 0))
            }
          >
            -
          </button>
          <span className="px-3">{item.quantity}</span>
          <button
            className="px-3 py-2 hover:bg-gray-100"
            onClick={() =>
              useCartStore.getState().updateQuantity(item.id, item.quantity + 1)
            }
          >
            +
          </button>
        </div>
        <p className="ml-4">
          Total: &euro;{(item.price * item.quantity).toFixed(2)}
        </p>
        <button
          className="ml-4 bg-restaurant-accent text-white px-3 py-2 rounded hover:bg-red-800"
          onClick={() => useCartStore.getState().removeItem(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
export default CartItem;
