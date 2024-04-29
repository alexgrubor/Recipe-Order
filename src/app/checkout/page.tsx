"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import useCartStore from "@/utils/store/cardStore";
import { useUser } from "@clerk/nextjs";
import { loadStripe } from "@stripe/stripe-js";
import { redirect } from "next/navigation";

const CheckOut = () => {
  const cartItems = useCartStore((state) => state.items);

  const { isSignedIn } = useUser();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [checkoutStatus, setCheckoutStatus] = useState<string | null>(null);

  if (checkoutStatus === "success") {
    alert("Payment was successful");
    useCartStore.getState().clearCart();

    redirect("/");
  } else if (checkoutStatus === "cancel") {
    alert("Payment was cancelled");
  }

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
  );

  useEffect(() => {
    const url = new URL(window.location.href);
    const status = url.searchParams.get("status");
    setCheckoutStatus(status);
  }, []);

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post("/api/checkout", {
        cartItems: cartItems,
      });

      const stripe = await stripePromise;
      const { id: sessionId } = response.data.result;

      if (stripe) {
        const redirectResult = await stripe.redirectToCheckout({ sessionId });
        if (redirectResult.error) {
          throw new Error(redirectResult.error.message);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (cartItems.length === 0 || !isSignedIn) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {cartItems.map((item) => (
        <div key={item.id}>
          {item.name} - {item.price} (Quantity: {item.quantity})
        </div>
      ))}
      <button onClick={handleSubmit} disabled={isSubmitting}>
        {isSubmitting ? "Processing..." : "Proceed to Checkout"}
      </button>
    </div>
  );
};

export default CheckOut;
