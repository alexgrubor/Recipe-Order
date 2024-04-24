import Marquee from "react-fast-marquee";
import partnerImages from "../../../../public/images/partners/index";
import Image from "next/image";
const OurPartners = () => {
  return (
    <div>
      <h2 className="text-3xl text-center my-3 text-restaurant-secondary">Our Partners</h2>
      <Marquee gradient={false} speed={40} pauseOnHover={true}>
        {partnerImages.map((partner, index) => (
          <div key={index} className="mx-2">
            <Image src={partner} alt="partner" width={200} height={150} />
          </div>
        ))}
      </Marquee>
    </div>
  );
};
export default OurPartners;
