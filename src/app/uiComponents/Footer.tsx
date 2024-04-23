import Link from "next/link";

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import NewsletterInput from "./NewsletterInput";
import RecipeOfDay from "./RecipeOfDay";

export default function Footer() {
  return (
    <footer className="bg-restaurant-primary text-restaurant-neutral py-8 px-4">
      <div className="container mx-auto flex flex-col items-start gap-8 md:flex-row md:justify-between md:items-center">
        <RecipeOfDay />
        <NewsletterInput />
      </div>
      <div className="container mx-auto flex flex-col-reverse md:flex-row justify-between md:items-center my-3 gap-8">
        <div>
          <p className="text-sm">&copy; 2024 Recipe & Order</p>
          <nav aria-label="Footer Navigation">
            <ul className="flex gap-3 mt-2">
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Use</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div role="contentinfo">
          <h4 className="font-medium">Contact Us</h4>
          <a
            href="mailto:support@recipeandorder.com"
            className="text-restaurant-secondary hover:underline"
          >
            support@recipeandorder.com
          </a>
        </div>

        <div>
          <h4 className="font-medium">Follow Us</h4>
          <ul className="flex gap-4 mt-2">
            <li>
              <a
                href="https://www.facebook.com/yourprofile"
                className="text-restaurant-accent hover:text-restaurant-secondary"
                aria-label="Follow us on Facebook (opens in new tab)"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/yourprofile"
                className="text-restaurant-accent hover:text-restaurant-secondary"
                aria-label="Follow us on Instagram (opens in new tab)"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
