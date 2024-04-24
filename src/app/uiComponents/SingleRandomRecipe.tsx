"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { RecipeFromAPI } from "@/utils/types";
import Image from "next/image";
interface SingleRandomRecipeProps {
  title: string;
}

const SingleRandomRecipe = ({ title }: SingleRandomRecipeProps) => {
  const [recipe, setRecipe] = useState<RecipeFromAPI | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const url = "https://www.themealdb.com/api/json/v1/1/random.php";

  useEffect(() => {
    const fetchRandomRecipe = async () => {
      try {
        const { data } = await axios.get(url);
        setRecipe(data.meals[0]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchRandomRecipe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center p-6 bg-restaurant-primary text-restaurant-neutral"> 
    <h2 className="text-3xl font-bold mb-4">{title}</h2>
    {loading && (
      <div className="animate-pulse flex items-center"> 
        Loading... <span className="ml-2 font-medium text-restaurant-secondary">.</span><span>.</span><span>.</span>
      </div>
    )}


    {error && (
      <div className="text-center text-restaurant-accent">
        There was an error. Please try again later.
      </div>
    )}


    {recipe && (
      <div className="opacity-0 transition-opacity duration-300" style={{ opacity: recipe ? 1 : 0 }}> 
        <div className="relative">
          <Image
            className="rounded-lg"
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            width={250}
            height={150}
          
          />
        </div>
        <h3 className="text-2xl  my-4">{recipe.strMeal}</h3>
        <button 
          className="bg-restaurant-secondary text-restaurant-neutral py-2 px-4 rounded-md hover:bg-restaurant-accent transition-colors"
        >
          <a href={`/menus/${recipe.idMeal}`}>View Recipe</a>
        </button>
      </div>
    )}
  </div>
  );
};
export default SingleRandomRecipe;
