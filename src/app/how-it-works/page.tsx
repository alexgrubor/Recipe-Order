import HowItWorks from "../(home)/components/HowItWorks";
import NewsletterInput from "../uiComponents/NewsletterInput";
import SingleRandomRecipe from "../uiComponents/SingleRandomRecipe";
import Faqs from "./components/Faqs";
import HeroSection from "./components/HeroSection";
import HowItWorksFullContent from "./components/HowItWorksFullContent";
import ReasonsWhyWe from "./components/ReasonsWhyWe";

const page = () => {
  return (
    <>
      <HeroSection />
      <HowItWorksFullContent />
      <SingleRandomRecipe title="Recipe of the week" />
      <ReasonsWhyWe />
      <Faqs />
      <div className="container mx-auto p-6">
        <NewsletterInput />
      </div>
    </>
  );
};
export default page;
