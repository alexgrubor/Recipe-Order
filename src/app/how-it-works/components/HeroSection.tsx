const HeroSection = () => {
  return (
    <div className=" relative text-restaurant-neutral">
    <div className="absolute inset-0 bg-my-custom-image-2 bg-cover bg-center bg-no-repeat bg-fixed brightness-50"></div>
     <div className="relative z-10 h-[80vh] flex flex-col justify-center items-center p-4">
       <h1 className="text-5xl font-bold text-wrap my-3">
         How it Works
       </h1>
       <p className="text-lg te">
         Order your favorite food from the comfort of your home
       </p>
     </div>
   </div>
  )
}
export default HeroSection