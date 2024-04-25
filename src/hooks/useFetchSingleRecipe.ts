import axios from "axios";
import { useState, useEffect } from "react";


export interface Recipe {
    idMeal: string;
    strMeal: string;
    strDrinkAlternate: string | null;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
    strTags: string | null;
    strYoutube: string;
    ingredients: { name: string; measure: string }[];
    strSource: string;
    strImageSource: string | null;
    strCreativeCommonsConfirmed: string | null;
    dateModified: string | null;
  }

  const useFetchSingleRecipe = (id: string) => {
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchRecipe = async () => {
        setIsLoading(true);
  
        try {
          const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  
          if (res.data.meals && res.data.meals.length > 0) {
            const meal = res.data.meals[0];
            const ingredients: { name: string; measure: string }[] = Object.entries(meal)
              .filter(([key, value]) => key.includes("strIngredient") && value)
              .map(([key, value]) => {
                const ingredientNumber = key.split("strIngredient")[1];
                const measure = meal[`strMeasure${ingredientNumber}`] as string;
                return {
                  name: value as string,
                  measure,
                };
              });
  
            setRecipe({
                idMeal: meal.idMeal,
                strMeal: meal.strMeal,
                strDrinkAlternate: meal.strDrinkAlternate,
                strCategory: meal.strCategory,
                strArea: meal.strArea,
                strInstructions: meal.strInstructions,
                strMealThumb: meal.strMealThumb,
                strTags: meal.strTags,
                strYoutube: meal.strYoutube,
                ingredients,
                strSource: meal.strSource,
                strImageSource: meal.strImageSource,
                strCreativeCommonsConfirmed: meal.strCreativeCommonsConfirmed,
                dateModified: meal.dateModified,
            });
          } else {
            setError("Recipe not found");
          }
        } catch (error) {
          setError("Error fetching recipe");
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchRecipe();
    }, [id]);
  
    return { recipe, isLoading, error };
  };

    export default useFetchSingleRecipe;