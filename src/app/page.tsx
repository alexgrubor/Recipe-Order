import HeroSection from "./(home)/components/HeroSection";
import HowItWorks from "./(home)/components/HowItWorks";
import PopularRecipes from "./(home)/components/PopularRecipes";
import Testimonials from "./(home)/components/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <PopularRecipes />
      <Testimonials />
    </>
  );
}
