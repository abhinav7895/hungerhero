import { useEffect, useState } from "react";
import { RESTAURANT_API_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  console.log(RESTAURANT_API_URL + resId);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      RESTAURANT_API_URL+resId
    );

    const json = await data.json();
    console.log(json);
    setResInfo(json?.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
