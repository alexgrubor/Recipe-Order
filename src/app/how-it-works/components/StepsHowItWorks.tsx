"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

interface StepProps {
  title: string;
  description: string;
  imageUrl?: string;
}

const StepsHowItWorks = ({ title, description, imageUrl }: StepProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const stepRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });

    if (stepRef.current) {
      observer.observe(stepRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div
      ref={stepRef}
      className={`flex flex-col md:max-w-[50%] items-center text-center my-8 p-4 ${
        isVisible ? "animate-fade-up animate-once animate-ease-in-out" : ""
      }`}
      aria-label={`Step ${title}`}
    >
      {imageUrl && (
        <div className="mb-6">
          <Image src={imageUrl} width={200} height={150} alt={title} />
        </div>
      )}

      <h5 className="text-2xl font-semibold mt-6">{title}</h5>
      <p className="text-gray-600 mt-2 p-3 max-w-[80%]">{description}</p>
    </div>
  );
};

export default StepsHowItWorks;
