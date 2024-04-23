const HeroSEction = () => {
  return <section className="relative  text-restaurant-neutral p-8">
    <div className="absolute inset-0 bg-my-custom-image bg-cover bg-center bg-no-repeat bg-fixed brightness-50"></div>
    <div className="relative z-10 h-[80vh] flex flex-col justify-center items-center p-4">
      <h1 className="text-5xl font-bold text-wrap my-3">Welcome to <span
        className="font-semibold text-6xl md:text-7xl"
      >Recipe & Order</span></h1>
      <p className="text-lg te">Order your favorite food from the comfort of your home</p>
      <button className="bg-restaurant-secondary hover:bg-restaurant-primary text-restaurant-primary hover:text-white border border-restaurant-primary hover:border-transparent rounded-lg px-6 py-2 mt-4 text-2xl">Order Now</button>
    </div>
  </section>;
};
export default HeroSEction;
