const HeroSection = () => {
  return (
    <div className=" relative text-restaurant-neutral">
      <div className="absolute inset-0 bg-my-custom-image-3 bg-cover bg-center bg-no-repeat bg-fixed brightness-50"></div>
      <div className="relative z-10 h-[80vh] flex flex-col justify-center items-center p-4">
        <h1 className="text-5xl font-bold text-wrap my-3">
          Welcome to Recipe&Order
        </h1>
        <p className="text-lg text-balance text-center md:max-w-[60%] mt-6">
          We are a team of passionate food lovers who want to share our love for
          food with the world. We believe that food is more than just
          sustenance; it's an experience that should be enjoyed by everyone.
        </p>
        <p className="text-lg text-balance text-center md:max-w-[60%] mt-6">
          That's why we created Recipe&Order - a place where you can find
          delicious recipes, order ingredients, and have them delivered right to
          your door. So whether you're a seasoned chef or a novice cook, we've
          got you covered.
        </p>
        <button
          className="bg-restaurant-secondary text-restaurant-primary px-4 py-2 mt-6 rounded-md hover:bg-restaurant-accent"
         
        >Let's eat!</button>
      </div>
    </div>
  );
};
export default HeroSection;
