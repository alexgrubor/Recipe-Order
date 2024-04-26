import { SignIn } from "@clerk/nextjs";
const page = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 bg-my-custom-image-2 bg-cover">
  
      <SignIn path="/sign-in"  />
    </div>
  );
};
export default page;
