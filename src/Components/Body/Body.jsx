import React, { useState } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import Search from "../Search/Search";
import Shimmer from "../Shimmer/Shimmer";
import useOnline from "../../hooks/useOnline";
import useRestaurantData from "../../hooks/useRestaurantData";
import Footer from "../Footer/Footer";
import Carousel from "../Carousel/Carousel";
function Body() {
  const { restaurantData, carouselCards } = useRestaurantData();
  const [filteredRestaurantList, setFilteredRestaurantList] =
    useState(restaurantData);
  const isOnline = useOnline();

  // shimmer are shown, while data is being fetched
  if (!restaurantData) return <Shimmer />;

  return (
    <>
      <Search
        setFilteredRestaurantList={setFilteredRestaurantList}
        mainRestaurantList={restaurantData}
        filteredRestaurantList={filteredRestaurantList}
      />


      {restaurantData.length === 0 ? (
        <Shimmer />
      ) : (
        <>
          <Carousel carouselCards={carouselCards} />
        <div className="mx-auto container my-9">
          <h2 className="text text-lg text-center md:text-start  md:text-3xl font-semibold pl-6 ">
            Restaurants with online food delivery in Lucknow
          </h2>
          <div className="container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center my-9 gap-y-16">
            {filteredRestaurantList.length !== 0 ? (
              filteredRestaurantList.map((restaurant, index) => (
                <RestaurantCard key={index} data={restaurant} />
              ))
            ) : (
              <h1 className="text-2xl md:text-4xl">
                No Restaurants to match your Filter, please search in available
                Restaurants
              </h1>
            )}
          </div>
        </div>
        </>
      )}

      {/* Footer  */}
      <Footer />

      {/* connection error message, while offline */}
      <div
        className={`bottom-2 mx-auto sticky container w-[330px] ${
          !isOnline ? "show" : "hidden"
        }`}
      >
        <div className="bg-red-600 text-white py-2 px-4 text-[12px]">
          <span className="text-[14px]">Connection Error</span> <br /> Please
          check your internet connection and try again.
        </div>
      </div>
    </>
  );
}

export default Body;
