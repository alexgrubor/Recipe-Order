"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { CartItem } from "@/utils/store/cardStore";

interface Order {
  id: string;
  status: string;
  items: CartItem[];
}

const Order = () => {
  const user = useUser();
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    axios.get("/api/order").then((res) => {
      setOrders(res.data);
    });
  }, []);

  return (
    <div className="relative text-restaurant-neutral">
      <div className="absolute inset-0 bg-my-custom-image-4 bg-cover bg-center bg-no-repeat bg-fixed brightness-50"></div>

      <div className="relative z-10 min-h-screen flex pt-32  justify-center items-center px-4 md:px-8 lg:px-16">
        <div className="flex gap-5 flex-wrap justify-center">
          {orders.map((order: Order) => (
            <div
              key={order.id}
              className="bg-restaurant-neutral text-restaurant-primary p-3 rounded-md hover:scale-110 transition duration-300 ease-in-out"
            >
              <h3>Order ID: {order.id}</h3>
              <p
                className={`${
                  order.status === "pending"
                    ? "text-restaurant-accent"
                    : order.status === "delivered"
                    ? "text-restaurant-secondary"
                    : "text-restaurant-primary"
                }`}
              >
                Status: {order.status}
              </p>
              <ul>
                Items:
                {order.items.map((item: CartItem) => (
                  <li key={item.id} className="
                  my-2">
                    {item.name} x {item.quantity}
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      height={200}
                      width={200}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Order;
