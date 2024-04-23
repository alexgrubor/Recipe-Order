"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

interface StepProps {
  number: number;
  title: string;
  description: string;
  imageUrl?: string;
}

const HowItWorksStep = ({
  number,
  title,
  description,
  imageUrl,
}: StepProps) => {
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
      className={`flex flex-col items-center text-center my-8 p-4 ${
        isVisible ? "animate-fade-up animate-once animate-ease-in-out" : ""
      }`}
      aria-label={`Step ${number}: ${title}`}
    >
      {imageUrl && (
        <div className="mb-6">
          <Image src={imageUrl} width={200} height={150} alt={title} />
        </div>
      )}
      <div className="relative w-20 h-20 rounded-full bg-restaurant-accent flex items-center justify-center shadow-sm shadow-restaurant-primary">
        <span className="text-3xl font-bold text-white">{number}</span>
        {number > 1 && (
          <div className="absolute top-[-2rem] w-2 h-8 bg-restaurant-accent"></div>
        )}

        {number < 4 && (
          <div className="absolute bottom-[-0.4rem] w-2 h-8 bg-restaurant-accent -mb-2"></div>
        )}
      </div>
      <h5 className="text-2xl font-semibold mt-6">{title}</h5>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default HowItWorksStep;
