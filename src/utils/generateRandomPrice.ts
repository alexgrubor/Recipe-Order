import { Recipe } from "@/hooks/useFetchSingleRecipe";

const generateRandomPrice = (recipe : Recipe | null, setPrice: (price: number) => void) => {
    if (!recipe) return;
    let price = 0;

    const basePrice = 5;
    const pricePerIngredient = 0.5;

    const numIngredients = recipe.ingredients.length;
    price = basePrice + numIngredients * pricePerIngredient;

    price = Math.max(price, 1);

    setPrice(price);
};

export default generateRandomPrice;
