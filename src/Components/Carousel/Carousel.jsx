import React, { useEffect, useRef, useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { CARD_URL } from "../../utils/constants";
import logo from "../../../assets/logo.svg";


const Carousel = ({ carouselCards }) => {
  if (!carouselCards) return null; // for mobile devices

  const carouselRef = useRef();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [maxIdx, setMaxIdx] = useState(0);

  const moveNext = (e) => {
    const element = carouselRef.current;
    setMaxIdx(Math.floor(element.scrollWidth / element.offsetWidth) - 1);

    if (currentIdx <= maxIdx) {
      setCurrentIdx((prevIdx) => prevIdx + 1);
    }

  };

  const movePrev = (e) => {
    if (currentIdx > 0) {
      setCurrentIdx((prevIdx) => prevIdx - 1);
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft =
        carouselRef.current.offsetWidth * currentIdx;
    }
  }, [currentIdx]);

  return (
    <div className="hidden container my-10 md:flex flex-col ">
      {/* buttons, heading */}
      <div className=" w-full flex items-center justify-between">
        <h3 className="font-semibold text-2xl pl-4 p-5">
          What's on your mind?
        </h3>
        <div className="flex gap-4">
          <button
            disabled={currentIdx === 0}
            onClick={movePrev}
            className="bg-gray-200 rounded-full p-1 hover:opacity-70"
          >
            <GoArrowLeft className="text-2xl" />
          </button>
          <button
            disabled={currentIdx > maxIdx}
            onClick={moveNext}
            className="bg-gray-200 rounded-full p-1 hover:opacity-70"
          >
            <GoArrowRight className="text-2xl" />
          </button>
        </div>
      </div>
      {/* cards carousels */}
      <div className="w-full h-52">
        <div
          ref={carouselRef}
          className="h-full flex gap-8 overflow-hidden scroll-smooth"
        >
          {carouselCards.map((item) => (
            <img
              key={item.id}
              src={CARD_URL + item.imageId}
              alt={item.accessibility.altText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;



          
