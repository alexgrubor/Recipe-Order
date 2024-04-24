import { useState, useEffect } from "react";
import axios from "axios";
export interface Recipe {
    idMeal: string;
    strMeal: string;
    strCategory: string;
    strArea: string;
    strMealThumb: string;
  }
const useFetchRandomRecipe = () => {
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const res = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
          if (res.data.meals && res.data.meals.length > 0) {
            setRecipe(res.data.meals[0]);
          } else {
            setError("Recipe data not found");
          }
        } catch (error) {
          setError("Error fetching recipe");
          console.error(error); 
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    return { recipe, isLoading, error };
  };

export default useFetchRandomRecipe;