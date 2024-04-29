"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { CartItem } from "@/utils/store/cardStore";

interface Order {
  id: string;
  status: string;
  items: CartItem;
}

const Order = () => {
  const user = useUser();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("/api/order").then((res) => {
      setOrders(res.data);
    });
  }, []);

  return (
    <div>
    {orders.map((order: Order) => (
        <div key={order.id}>
            <h3>Order ID: {order.id}</h3>
            <p>Status: {order.status}</p>
            <p>
                Items:{" "}
                {order.items.map((item: CartItem) => (
                    <li key={item.id}>
                        {item.name} x {item.quantity}
                        <Image src={item.imageUrl} alt={item.name} height={200} width={200} />
                    </li>
                ))}
            </p>
        </div>
    ))}
    </div>
  );
};
export default Order;
