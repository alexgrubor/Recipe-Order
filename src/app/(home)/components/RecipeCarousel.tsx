"use client";
import useFetchByCategory from "@/hooks/useFetchByCategory";
import { RecipeFromAPI } from "@/utils/types";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const RecipeCarousel = () => {
  const { recipes, isLoading, error } = useFetchByCategory("Vegetarian");
  const recipeToDisplay = recipes.slice(0, 5);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div>
        <h2 className="text-center text-3xl font-bold mb-4">
            Top 5 recipes this week
        </h2>
      </div>
      <div className="container mx-auto flex justify-center p-4 px-7">
        <Carousel opts={{ align: "start", loop: true }} className="w-[80%] md:w-full max-w-sm">
          <CarouselContent>
            {recipeToDisplay.map((recipe: RecipeFromAPI) => (
              <CarouselItem key={recipe.idMeal} className="">
                <Card >
                  <Image
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    width={400}
                    height={400}
                  />
                  <h2 className="text-center p-3 text-3xl font-thin italic">{recipe.strMeal}</h2>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious>Previous</CarouselPrevious>
          <CarouselNext>Next</CarouselNext>
        </Carousel>
      </div>
    </>
  );
};
export default RecipeCarousel;
