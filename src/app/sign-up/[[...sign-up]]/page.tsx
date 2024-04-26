import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 bg-my-custom-image-2 bg-cover">
      <SignUp path="/sign-up" />
    </div>
  );
}
