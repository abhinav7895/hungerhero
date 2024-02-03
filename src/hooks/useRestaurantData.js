import { useEffect, useState } from 'react'
import { SWIGGY_API_URL } from "../utils/constants";

function useRestaurantData() {
    const [restaurantData, setRestaurantData] = useState([]);
    const [carouselCards, setCarouselCards] = useState([]);

    useEffect(() => {
        const getRestaurantData = async () => {
            try {
                const response = await fetch(SWIGGY_API_URL);

                if (!response.ok) {
                    throw new Error("Network response was not ok, check out the API URL");
                }
                const data = await response.json();
                const restaurantData =
                    data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
                        (restaurant) => {

                            return {
                                id: restaurant?.info?.id,
                                name: restaurant?.info?.name,
                                imgId: restaurant?.info?.cloudinaryImageId,
                                rating: restaurant?.info?.avgRating,
                                cuisines: restaurant?.info?.cuisines,
                                location: restaurant?.info?.locality,
                            };
                        }
                    ) || data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
                        (restaurant) => {
                            return {
                                id: restaurant?.info?.id,
                                name: restaurant?.info?.name,
                                imgId: restaurant?.info?.cloudinaryImageId,
                                rating: restaurant?.info?.avgRating,
                                cuisines: restaurant?.info?.cuisines,
                                location: restaurant?.info?.locality,
                            };
                        }
                    );

                    // carousel response
                    const carouselData = data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;
                    console.log(carouselData);
                setCarouselCards(
                    carouselData
                );
                setRestaurantData(restaurantData);
            } catch (error) {
                console.error("Error", error);
            }
        };
        getRestaurantData();
    }, []);
    return {restaurantData, carouselCards};
}

export default useRestaurantData;