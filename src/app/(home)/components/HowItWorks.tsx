import HowItWorksStep from "./HowItworksStep";
import Image from "next/image";
const HowItWorks = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
      <div className="flex flex-col  md:justify-center">
        <HowItWorksStep
          number={1}
          title="Find a Recipe"
          description="Browse our delicious selection of recipes or search for your favorite dish."
          imageUrl="/images/how-it-works-recipe.png"
        />

        <HowItWorksStep
          number={2}
          title="Order Ingredients"
          description="We'll automatically generate a shopping list, so you can easily get all the ingredients you need."
          imageUrl="/images/how-it-works-ingredients.png"
        />

        <HowItWorksStep
          number={3}
          title="We Deliver"
          description="Sit back, relax, and we'll deliver your fresh ingredients right to your doorstep."
          imageUrl="/images/how-it-works-delivery.png"
        />

        <HowItWorksStep
          number={4}
          title="Cook & Enjoy"
          description="Follow our step-by-step instructions and create a culinary masterpiece in your own kitchen."
          imageUrl="/images/how-it-works-cook.png"
        />
        <div className="flex justify-center">
          <Image
            src={`/images/plate.png`}
            alt="Plate"
            width={200}
            height={150}
            className="animate-spin animate-infinite animate-duration-[5000ms] animate-ease-linear  "
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
