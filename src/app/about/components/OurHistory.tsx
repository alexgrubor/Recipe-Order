import Image from "next/image";
import React from "react";

const OurHistory = () => {
  return (
    <section className="container mx-auto p-4 py-16 " >
      <h2 className="text-4xl font-bold text-center mb-8 text-restaurant-primary">
        Our History
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <Image
            src="https://images.pexels.com/photos/4451364/pexels-photo-4451364.jpeg"
            alt="Our History"
            width={600}
            height={400}
          />
        </div>

        <div className="order-1 md:order-2">
          <h3 className="text-2xl font-semibold mb-4 text-restaurant-secondary">
            A Passion for Freshness
          </h3>
          <p className="text-lg mb-4">
            The idea for Recipe&Order blossomed from our love of cooking and the
            joy of sharing food with others. We've built a space for passionate
            cooks to discover exciting recipes, connect with like-minded
            foodies, and streamline the process from inspiration to delicious
            meals.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
       
        <div className="order-2 md:order-1">
          <Image
            src="https://images.pexels.com/photos/4259140/pexels-photo-4259140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Expanding Our Reach"
            width={600}
            height={400}
          />
        </div>
        <div className="">
          <h3 className="text-2xl font-semibold mb-4 text-restaurant-secondary">
            Expanding Our Reach
          </h3>
          <p className="text-lg mb-4 pr-5">
            Driven by positive feedback and a desire to make our platform
            accessible to everyone, we launched the Recipe&Order app. This
            opened a whole new world of convenience, bringing our recipe
            inspiration and streamlined ordering directly to your fingertips.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
        <div className="order-2 md:order-1">
          <Image
            src="https://images.pexels.com/photos/5593081/pexels-photo-5593081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Today and Beyond"
            width={600}
            height={400}
          />
        </div>
        <div className="order-1 md:order-2">
      <h3 className="text-2xl font-semibold mb-4 text-restaurant-secondary">
        Today & Beyond
      </h3>
      <p className="text-lg mb-4">
       Recipe&Order is an ongoing project. We're committed to continuously enhancing our platform, adding exciting new recipes, and making the process of discovering and creating amazing meals even easier and more enjoyable. 
       As we continue growing, we are always on
        the lookout for new ways to inspire and connect with our community of
        food lovers.
      </p>
    </div>
      </div>
    </section>
  );
};

export default OurHistory;
