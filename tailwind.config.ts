import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "restaurant-primary": "#232323",
        "restaurant-secondary": "#D4AF37",
        "restaurant-accent": "#9E2B25",
        "restaurant-neutral": "#FFFFFF",
      },
      backgroundImage: {
        "my-custom-image": "url('/images/home-header.jpg')",
        "my-custom-image-2": "url('/images/how-it-works-header.jpg')",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
export default config;
