import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
import { auth } from "@clerk/nextjs/server";
import pg from "pg";

import { CartItem } from "@/utils/store/cardStore";

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const { userId }: { userId: string | null } = auth();

    // 1. Extract cartItems from the request body
    const { cartItems } = await request.json();

   

    // 2. Map cartItems to Stripe's line_items format
    const lineItems = cartItems.map((item: CartItem) => ({
      price_data: {
        currency: "EUR", // Adjust currency as needed
        product_data: {
          name: item.name,
          images: [item.imageUrl],
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    // 3. Create the Stripe Checkout Session
    const checkoutSession: Stripe.Checkout.Session =
      await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: `${process.env.NEXT_BASE_URL}/checkout?status=success`,
        cancel_url: `${process.env.NEXT_BASE_URL}/checkout?status=cancel`,
        metadata: {
          userId: userId as string,
        },
      });

    const { Pool } = pg;
    const pool = new Pool({
      connectionString: process.env.POSTGRES_URL,
    });
    const client = await pool.connect();

    try {
      await client.query(
        'INSERT INTO "Order" (userId, sessionId, items, status) VALUES ($1, $2, $3, $4)',
        [userId, checkoutSession.id, JSON.stringify(cartItems), "pending"] 
      );
    } catch (error) {
      console.error("Error saving order:", error);
      throw error;
    } finally {
      client.release();
    }

    return NextResponse.json({ result: checkoutSession, ok: true });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Server", { status: 500 });
  }
}
