import HeroSection from "./components/HeroSection";
import OurHistory from "./components/OurHistory";
import OurMission from "./components/OurMission";
import OurPartners from "./components/OurPartners";
import OurTeam from "./components/OurTeam";

const page = () => {
  return (
    <div>
      <HeroSection />
      <OurHistory />
      <OurMission />
      <OurTeam />
      <OurPartners />
    </div>
  );
};
export default page;
