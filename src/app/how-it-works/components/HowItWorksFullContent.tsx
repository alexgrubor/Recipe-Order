import StepsHowItWorks from "./StepsHowItWorks";
import Image from "next/image";
const HowItWorksFullContent = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      <h2 className="text-3xl text-center font-bold">Recipe to table</h2>
      <p></p>
      <div className="flex flex-wrap md:justify-center">
        <StepsHowItWorks
          title="Find Your Inspiration"
          description="Explore our vast collection of mouthwatering recipes, curated to satisfy every taste and skill level. Search for specific cuisines, dietary needs, or simply browse until your next culinary adventure catches your eye"
          imageUrl="/images/how-it-works-ingredients.png"
        />

        <StepsHowItWorks
          title="Your Perfect Portions & Easy Ordering"
          description="Tell us how many people you're cooking for, and we'll tailor your shopping list perfectly.  Order the ingredients you need, and we'll handle the rest – including fresh delivery right to your doorstep.          "
          imageUrl="/images/how-it-works-delivery.png"
        />

        <StepsHowItWorks
          title="Freshness Delivered"
          description="Sit back and let us handle the heavy lifting. We'll source high-quality ingredients and deliver them right to your doorstep, ensuring peak freshness for your culinary creation."
          imageUrl="/images/how-it-works-cook.png"
        />

        <StepsHowItWorks
          title="Masterchef Moments"
          description="Unleash your inner chef! Our easy-to-follow instructions and accompanying video tutorials will guide you through every step. Discover the joy of cooking and savor the delicious results."
          imageUrl="/images/chef.png"
        />
      </div>
    </section>
  );
};

export default HowItWorksFullContent;
