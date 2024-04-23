"use client";
import { useState } from "react";

const NewsletterInput = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  //Simulation on API call until backend is ready
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };
  return (
    <div className="mt-4">
      <fieldset> 
        <legend className="text-2xl font-medium">Sign up for our newsletter</legend> 
        <form onSubmit={handleSubmit} className="flex gap-2 mt-2">
          <label htmlFor="newsletter-email" className="sr-only">Enter your email</label> {/* Visually hidden label */}
          <input
            id="newsletter-email" 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="border border-gray-300 px-3 py-2 rounded w-full focus:outline-none focus:border-restaurant-secondary"
          />
          <button
            type="submit"
            className="bg-restaurant-accent text-white px-4 py-2 rounded hover:bg-restaurant-secondary disabled:opacity-50"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Submitting..." : "Subscribe"}
          </button>
        </form>

        <div aria-live="polite"> 
          {status === "success" && (
            <p className="text-green-500 mt-2">Thanks for subscribing!</p>
          )}
          {status === "error" && (
            <p className="text-red-500 mt-2" role="alert">
              An error occurred. Please try again.
            </p>
          )}
        </div>
      </fieldset>
    </div>
  );
};
export default NewsletterInput;
