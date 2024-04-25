"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import useFetchSingleRecipe from "@/hooks/useFetchSingleRecipe";
import generateRandomPrice from "@/utils/generateRandomPrice";
import { useState, useEffect } from "react";
import useCartStore from "@/utils/store/cardStore";
const SingleMenu = () => {
  const { id } = useParams();
  const recipeId = Array.isArray(id) ? id[0] : id;

  const { recipe, isLoading, error } = useFetchSingleRecipe(recipeId ?? "");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    generateRandomPrice(recipe, setPrice);
  }, [recipe]);

  return (
    <div className="min-h-screen bg-restaurant-primary flex flex-col justify-center items-center pt-28 pb-4">
      {isLoading && (
        <p className="text-restaurant-neutral text-center">Loading...</p>
      )}
      {error && (
        <p className="text-red-500 text-center text-xl">Error: {error}</p>
      )}

      {recipe && (
        <div className="container mx-auto max-w-4xl p-8 rounded-lg shadow-lg bg-restaurant-neutral text-restaurant-primary">
          <h1 className="text-4xl font-bold mb-6">{recipe.strMeal}</h1>

          <div className="flex flex-col md:flex-row items-start">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-8">
              <Image
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                height={400}
                width={300}
              />
            </div>

            <div className="w-full md:w-1/2">
              <div className="mb-4">
                <p className="font-semibold">Category:</p>
                <p>{recipe.strCategory}</p>
              </div>

              <div className="mb-4">
                <p className="font-semibold">Cousine:</p>
                <p>{recipe.strArea}</p>
              </div>

              {recipe.strTags && (
                <div className="mb-4">
                  <p className="font-semibold my-3">Tags:</p>
                  <p>
                    {recipe.strTags.split(",").map((tag, index) => (
                      <span
                        key={index}
                        className="bg-restaurant-accent text-restaurant-neutral py-1 px-2 rounded-full my-3 mr-2"
                      >
                        #{tag}
                      </span>
                    ))}
                  </p>
                </div>
              )}

              <div className="mb-6">
                <p className="font-semibold">Instructions:</p>
                <p className="text-ellipsis overflow-hidden">
                  {recipe.strInstructions}
                </p>
              </div>

              <div>
                <button
                  className="bg-restaurant-accent text-restaurant-neutral py-3 px-6 rounded font-medium hover:bg-restaurant-neutral hover:border-2 hover:text-restaurant-accent hover:border-restaurant-accent"
                  onClick={() => {
                    useCartStore.getState().addItem({
                      id: recipe.idMeal,
                      name: recipe.strMeal,
                      price: price,
                    });
                  }}
                >
                  {`Added to Cart:  ${price}€`}
                </button>
                <button className="border-2 border-restaurant-accent text-restaurant-accent py-3 px-6 rounded font-medium hover:bg-restaurant-accent hover:text-white ml-4">
                  <a href={recipe.strYoutube} target="_blank" rel="noreferrer">
                    Watch on YouTube
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="mb-2">
                  {ingredient.name} - {ingredient.measure}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
export default SingleMenu;
