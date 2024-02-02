import React, { useState, useEffect } from "react";
import { swiggyFaqs } from "../../utils/constants";
import FAQItem from "./FAQItem";
import { nanoid } from "nanoid";
import SpinnerEffect from "../SpinnerEffect/SpinnerEffect";
const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(-1);
      return;
    }
    setActiveIndex(index);
  };

  return isLoading ? (
    <SpinnerEffect />
  ) : (
    <div className="flex justify-center flex-col space-y-5 w-full container mx-auto place-items-center mt-[130px]">
      <div className="select-none text-3xl font-bold text-black p-2 rounded-md md:text-4xl">
        FAQs <span className="font-berkshire text-[#d74112]">Hunger Hero</span>
      </div>
      {swiggyFaqs.map((faq, index) => (
        <FAQItem
          key={nanoid()}
          index={index}
          question={faq.question}
          answer={faq.answer}
          activeIndex={activeIndex}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

export default FAQs;
