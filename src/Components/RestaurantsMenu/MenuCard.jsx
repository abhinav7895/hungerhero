import { IMG_CDN } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../utils/cartSlice";
import { useEffect, useState } from "react";
import VEG_IMG from "../../../assets/icons8-veg-48.png";
import NON_VEG_IMG from "../../../assets/icons8-non-veg-48.png";

const MenuCard = (props) => {
  const { dishData } = props;
  const cartItems = useSelector(store => store.cart.items);
  const {id, name, price, description, imageId,itemAttribute, defaultPrice } =
    dishData?.card?.info;
  const {vegClassifier} = itemAttribute;



  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const itemInfo = cartItems.filter((item) => id === item.id);
    setItemCount(itemInfo[0]?.quantity ? itemInfo[0]?.quantity : 0);
  }, [])

  const imageSource = IMG_CDN + imageId;
  const dispatch = useDispatch();

  const handleClick = (item) => {
    const itemInfo = { ...item.card.info, quantity: 1 };

    setItemCount(itemCount + 1);
    dispatch(addItem(itemInfo));
  };

  const removeItemClick = (item) => {
    if (itemCount === 0) {
      return;
    }
    const itemInfo = { ...item.card.info, quantity: 1 };
    setItemCount(itemCount - 1);
    dispatch(removeItem(itemInfo));
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-md flex md:flex-row justify-between border">
      <div className="">
        <img src={vegClassifier === "VEG" ? VEG_IMG : NON_VEG_IMG} alt="veg-img" className="w-5" />
        <h3 className="md:text-lg font-semibold text-gray-800">{name}</h3>
        <h4 className="text-m">₹{price / 100 || defaultPrice / 100}</h4>
        <p className="text-sm text-gray-500 ">{description}</p>
      </div>

      <div className="ml-4 mt-4 ">
        <div className={`w-[80px] h-[70px] md:w-[118px]  relative md:h-[96px] ${imageSource.includes("undefined") ? "h-[40px] md:h-[45px]" : "" }`}>
          {!imageSource.includes("undefined") && <img
            className="w-full h-full object-cover rounded-md border"
            src={imageSource}
            alt={name}
          />}
          <div className={`px-1 py-[1px]  absolute bottom-1 md:px-2 md:py-[3px] rounded-full flex justify-center left-0 right-0 ${imageSource.includes("undefined") ? "top-0" : "" }`}>
            <div className={`bg-white px-[6px] rounded-xl flex items-center space-x-2 ${imageSource.includes("undefined") ? "border" : "" }`}>
            <button
              onClick={() => removeItemClick(dishData)}
              className="text-sm"
            >
              -
            </button>
            <span className=" text-[13px] md:text-base text-green-500 font-semibold w-7 flex items-center justify-center">
              {itemCount === 0 ? "ADD" : itemCount}
            </span>
            <button onClick={() => handleClick(dishData)} className="text-sm">
              +
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
