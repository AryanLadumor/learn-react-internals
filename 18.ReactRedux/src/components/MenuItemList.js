import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";
const MenuItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //Dispatch An Action
    dispatch(addItem(item)); //this funtion is taking action.payload which is 2nd argumrnt in reducers item.e action
    /*
    so its like action : {
      payload : item==> {Object of item}
    }
      and this will be passed as 2nd argument in addItem funtino
    */
  };

  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className=" h-30 flex justify-between items-center  border-gray-200 border-b-3  hover:shadow-lg hover:scale-[1.01] transition duration-100"
          >
            <div className="w-10/12">
              <div className=" p-2  flex ">
                {/* Title  */}
                <span className="font-semibold">
                  {item.card.info.name} for &nbsp;
                </span>
                {/* price */}
                <span className="font-semibold text-green-500">
                  ₹{" "}
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </span>
              </div>
              {/* discription */}
              <p className=" text-xs text-left ml-6 mb-2 text-gray-600">
                {item.card.info.description}
              </p>
            </div>

            <div className="w-2/12">
              {/* Button on image */}
              <div className="absolute mt-17 ml-12 hover:scale-110 transition duration-100  ">
                <button
                  onClick={() => handleAddItem(item) /*addingItem on card.*/}
                  className=" w-17 h-7  bg-rose-400 rounded-lg text-black font-semibold text-center align-middle cursor-pointer"
                >
                  Add +
                </button>
              </div>
              {/* image */}
              <img
                className="w-40 h-25 rounded-lg"
                src={CDN_URL + item?.card?.info?.imageId}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuItemList;
