import { useState, useEffect } from "react";
import axios from "axios";


const useFetchByCategory = (category: string) => {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const fetchRecipes = async () => {
        setIsLoading(true);
    
        try {
            const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    
            if (res.data.meals) {
            setRecipes(res.data.meals);
            } else {
            setError("Recipes not found");
            }
        } catch (error) {
            setError("Error fetching recipes");
            console.error(error);
        } finally {
            setIsLoading(false);
        }
        };
    
        fetchRecipes();
    }, [category]);
    
    return { recipes, isLoading, error };
}

export default useFetchByCategory;