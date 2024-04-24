'use client'
import useFetchByCategory from "../../../hooks/useFetchByCategory";
import { useState } from "react";
import Link from "next/link";
import { Recipe } from "../../../hooks/useFetchRandomRecipe";
import Marquee from "react-fast-marquee";
const CATEGORIES = [
  "Side",
  "Beef",
  "Dessert",
  "Lamb",
  "Pasta",
  "Pork",
  "Vegan",
  "Seafood",
  "Chicken",
  "Breakfast",
  "Starter",
  "Goat",
  "Sauce",
  "Vegetarian",
  "Miscellaneous",
  "Pasta",
  "Pork",
  "Beef",
  "Seafood",
  "Chicken",
  "Starter",
  "Miscellaneous",
  "Goat",
  "Sauce",
  "Breakfast",
];

const MenusBYCategory = () => {
  const [category, setCategory] = useState("Side");
  const { recipes, isLoading, error } = useFetchByCategory(category);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-8">Menus By Category</h1>
      <div className="flex justify-center p-2 py-4 bg-restaurant-secondary">
        <Marquee
          gradient={false}
          speed={30}
          pauseOnHover={true}
          pauseOnClick={true}

        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`${
                category === cat
                  ? "bg-restaurant-accent text-white"
                  : "bg-gray-200 text-gray-800"
              } px-4 py-2 m-2 rounded-lg`}
            >
              {cat}
            </button>
          ))}
        </Marquee>
      </div>
      <div className="flex flex-wrap justify-center p-4 my-4">
        {isLoading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-500">Error: {error}</p>}
        {recipes.map((recipe: Recipe) => (
          <Link
            key={recipe.idMeal}
            className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 hover:scale-110 transition-all ease-in-out duration-500"
            href={`/menus/${recipe.idMeal}`}
          >
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{recipe.strMeal}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default MenusBYCategory;
