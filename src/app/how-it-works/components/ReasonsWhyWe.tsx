import Reason from "./Reason";
import { IoHappyOutline } from "react-icons/io5";
import { MdDeliveryDining, MdAttachMoney } from "react-icons/md";
import { RiMentalHealthLine } from "react-icons/ri";
import { FaBowlFood } from "react-icons/fa6";
import { SiIfood } from "react-icons/si";
const ReasonsWhyWe = () => {
  return (
    <div className="my-3">
      <h2 className="text-center text-3xl text-restaurant-accent font-semibold">6 Reasons for Recipe&Order</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        <Reason
          Icon={IoHappyOutline}
          title="Easy to use"
          description="Our app is very easy to use, you can order your food with just a few clicks."
        />
        <Reason
        Icon={MdDeliveryDining}
          title="Fast delivery"
          description="We have a fast delivery system, you can get your food in less than 30 minutes."
        />
        <Reason
         Icon={MdAttachMoney}
          title="Affordable prices"
          description="We offer the best prices in the market, you can get your food for as low as $5."
        />
        <Reason
        Icon={RiMentalHealthLine}
          title="Healthy food"
          description="We offer a wide range of healthy food options, you can choose from salads, smoothies, and more."
        />
        <Reason
         Icon={FaBowlFood}
          title="Wide variety"
          description="We have a wide variety of food options, you can choose from burgers, pizzas, sandwiches, and more."
        />
        <Reason
          Icon={SiIfood}
          title="Quality food"
          description="We offer the best quality food, all our ingredients are fresh and locally sourced."
        />


      </div>
    </div>
  );
};
export default ReasonsWhyWe;
