import { useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantItems from "./RestaurantItems";
import SpinnerEffect from "../SpinnerEffect/SpinnerEffect";
import useRestaurantMenu from "../../hooks/useRestaurantMenu";
import { MdOutlineTimelapse } from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";

function RestaurantsMenu() {
  const { id } = useParams();
  const [veg, setVeg] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleLabelClick = (newIndex) => {
    if(newIndex === activeIndex) {
      setActiveIndex(-1);
      return;
    }
    setActiveIndex(newIndex);
  }

  const resInfo = useRestaurantMenu(id);
  if (resInfo === null) {
    return <SpinnerEffect/>
  }

  const {
    areaName,
    avgRatingString,
    costForTwoMessage,
    cuisines,
    name,
    sla,
    totalRatingsString,
  } = resInfo?.cards[0]?.card?.card?.info || resInfo?.cards[2]?.card?.card?.info;


  const categoryFiltered =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) ||    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    
  return (
    <>
      <div className="container px-5 mx-auto mt-[140px] mb-10">
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">{name}</h1>
            <p className="text-gray-600">{cuisines.join(",")}</p>
            <p className="text-gray-600">{areaName}</p>
          </div>
          <div>
            <div className="border rounded py-1 px-2 text-gray-700 flex flex-col items-center">
              <h4 className="text-lg font-semibold flex items-center gap-1">
                {avgRatingString}{" "}
                <span className="text-xl text-green-500">&#9734;</span>
              </h4>
              <div className="border-[0.5px] w-full my-2"></div>
              <p className="text-sm">{totalRatingsString}</p>
            </div>
          </div>
        </div>
        <div className="border-dashed	w-full my-6 border"></div>
        <div>
          <p className="flex gap-4 font-semibold text-[#3e4152]">
            <span className="flex items-center gap-2 ">
              <span className="border border-black rounded-full p-[2px]">
                <FaIndianRupeeSign size={'1rem'} />
              </span>
              {costForTwoMessage}
            </span>{" "}
          </p>
        </div>
        <div className="border-dashed	w-full my-6 border"></div>
        {/* Restaurant Items */}
        <ul className="flex flex-col gap-4 mt-5">
          {categoryFiltered?.map((c, index) => {
            return (
              <RestaurantItems
                key={c?.card?.card?.title}
                vegOption={veg}
                resData={c?.card?.card}
                index={index}
                activeIndex={activeIndex}
                handleLabelClick={handleLabelClick}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default RestaurantsMenu;
