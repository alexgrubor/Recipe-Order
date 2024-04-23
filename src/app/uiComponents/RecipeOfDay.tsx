"use client";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";
import { RecipeFromAPI } from "@/utils/types";
const RecipeOfDay = () => {
  const [recipe, setRecipe] = useState(null as unknown as RecipeFromAPI);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setRecipe(response.data.meals[0]);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center gap-6">
      <div>
        <h4 className="font-medium text-2xl">Recipe of the Day</h4>
        {loading && (
          <div role="status" aria-live="polite">
            <p className="flex items-center">
              Loading...{" "}
              <span>
                <svg
                  className="animate-spin h-5 w-5 mr-3 ..."
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#D4AF37"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0c4.418 0 8 3.582 8 8s-3.582 8-8 8V4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              </span>
            </p>
          </div>
        )}

        {error && (
          <p className="text-red-500" role="alert">
            Error fetching recipe data.
          </p>
        )}

        {!loading && recipe && (
          <>
            <h5 className="text-restaurant-secondary font-extrabold text-2xl my-3">
              {recipe.strMeal}
            </h5>
            <a
              href={`menus/${recipe.idMeal}`}
              className="text-restaurant-accent text-xl hover:underline"
            >
              View Recipe
            </a>
          </>
        )}
      </div>

      {recipe && (
        <Image
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          width={200}
          height={100}
          className="rounded-lg shadow-md"
        />
      )}
    </div>
  );
};
export default RecipeOfDay;
