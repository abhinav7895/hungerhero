import React, { useState } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import Search from "../Search/Search";
import Shimmer from "../Shimmer/Shimmer";
import useOnline from "../../hooks/useOnline";
import useRestaurantData from "../../hooks/useRestaurantData";
import Footer from "../Footer/Footer";
function Body() {
  const restaurants = useRestaurantData();
  const [filteredRestaurantList, setFilteredRestaurantList] = useState(restaurants);
  const [carouselCards, setCarouselCards] = useState([]);
  const isOnline = useOnline();

  // shimmer are shown, while data is being fetched
  if (!restaurants) return <Shimmer />;

  return (
    <>
      <Search
        setFilteredRestaurantList={setFilteredRestaurantList}
        mainRestaurantList={restaurants}
        filteredRestaurantList={filteredRestaurantList}
      />
      <h1 className="text-center mt-7">
        <span className="font-berkshire text-[#d74112] select-none text-4xl md:text-6xl ">
          Hunger Hero
        </span>
      </h1>
      <h2 className="text-center text-2xl font-semibold mt-4">
        Restaurants with online food delivery in Lucknow
      </h2>

      {restaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="mx-auto container my-9">
          <div className="container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center my-9 gap-y-16">
            {filteredRestaurantList.length !== 0 ? (
              filteredRestaurantList.map((restaurant, index) => (
                <RestaurantCard key={index} data={restaurant} />
              ))
            ) : (
              <h1 className="text-2xl md:text-4xl">
                No Restaurants to match your Filter, please search in available Restaurants
              </h1>
            )}
          </div>
        </div>
      )}

      {/* Footer  */}
      <Footer />

      {/* connection error message, while offline */}
      <div className={`bottom-2 mx-auto sticky container w-[330px] ${!isOnline ? "show" : "hidden"}`}>
        <div className="bg-red-600 text-white py-2 px-4 text-[12px]">
          <span className="text-[14px]">Connection Error</span> <br /> Please check your internet connection and try again.
        </div>
      </div>
    </>
  );
}

export default Body;
