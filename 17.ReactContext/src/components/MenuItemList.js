import React from "react";
import { CDN_URL } from "../utils/constants";

const MenuItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
     
        {/* Mapping into all specific category's item */}
      {items.map((i) => {
        return (
          <div
            key={i.card.info.id}
            className= " h-30 flex justify-between items-center  border-gray-200 border-b-3 hover:bg-pink-200 hover:shadow-lg hover:scale-[1.01] transition duration-100"
          >
            <div className="w-9/12">

              <div className=" p-2  flex ">
            {/* Title  */}
                <span className="font-semibold">
                  {i.card.info.name} for &nbsp;
                </span>
                {/* price */}
                <span className="font-semibold text-green-500">
                  ₹{" "}
                  {i?.card?.info?.price / 100 ||
                    i?.card?.info?.defaultPrice / 100}
                </span>
              </div>
              {/* discription */}
              <p className=" text-xs text-left ml-6 mb-2 text-gray-600">
                {i.card.info.description}
              </p>
            </div>

            <div className="w-3/12">
              {/* Button on image */}
              <div className="absolute mt-17 ml-12 hover:scale-110 transition duration-100  ">
              <button className=" w-17 h-7  bg-rose-400 rounded-lg text-black font-semibold text-center align-middle cursor-pointer">Add +</button>
              </div>
                {/* image */}
              <img
                className="w-40 h-25 rounded-lg"
                src={CDN_URL + i?.card?.info?.imageId}
              />

            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuItemList;
