import HeroSection from "./(home)/components/HeroSection";
import HowItWorks from "./(home)/components/HowItWorks";
import RecipeCarousel from "./(home)/components/RecipeCarousel";
import Testimonials from "./(home)/components/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <RecipeCarousel />
      <Testimonials />
    </>
  );
}
