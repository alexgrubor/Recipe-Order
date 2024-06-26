import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./CustomComponents/Footer";
import Header from "./CustomComponents/Header";
import CartButton from "./CustomComponents/CartButton";
import { ClerkProvider } from '@clerk/nextjs'


export const metadata: Metadata = {
  title: "Recipe & Order",
  description: "Food delivery app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={'bg-restaurant-neutral'}>
        <Header />
        <main className="min-h-screen bg-restaurant-neutral">{children}</main>
        <Footer />
        <CartButton/>
      </body>
    </html>
    </ClerkProvider>
  );
}
