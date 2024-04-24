"use client";
import { useState } from "react";
import { MdOutlineArrowDownward } from "react-icons/md";

const FAQItmes = [
  {
    question: "How do I place an order?",
    answer:
      "Placing an order is easy! Browse our recipes, add your desired ingredients to your cart, and checkout securely.",
  },
  {
    question: "Where do you deliver?",
    answer: "We deliver to all addresses nationwide – at your preferred time.",
  },
  {
    question: "What if I'm not home for delivery?",
    answer:
      "No problem! Simply select 'leave at door' during checkout. Our insulated boxes keep ingredients fresh until the evening.",
  },
  {
    question: "How do the ingredients stay cool?",
    answer:
      "Our innovative, recyclable packaging ensures your ingredients arrive fresh and top-quality. Plus, we've reduced plastic usage by 50% compared to last year!",
  },
  {
    question: "What if I'm not happy with my delivery?",
    answer:
      "We strive for 100% satisfaction! If there's any issue with your delivery, please contact our customer support immediately, and we'll make it right. We offer replacements or adjustments to ensure you have a positive experience.",
  },
  {
    question: "How do I get a refund?",
    answer:
      "Refunds are handled on a case-by-case basis.  Please contact our customer support team with your order details, and we'll assess the situation and determine the best course of action.",
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-3 text-center">
        Frequently Asked Questions
      </h2>
      {FAQItmes.map((item, index) => {
        return (
          <div
            key={index}
            className=" border-b border-gray-200 py-4 p-4 text-xl cursor-pointer transition-all duration-300   ease-in-out  hover:bg-gray-100 "
          >
            <div className="" onClick={() => handleToggle(index)}>
              <h3>{item.question}</h3>
            </div>
            {activeIndex === index && (
              <div className=" mt-2 text-gray-700 transition-all duration-300 ease-in-out pl-4 text-lg">
                <p>* {item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default Faqs;
