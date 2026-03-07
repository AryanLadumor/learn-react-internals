import { useEffect, useState } from "react";
import { restaurentMenus } from "../utils/mockData";
import { useParams } from "react-router";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const RestaurentMenu = () => {
  const para = useParams();

  const resInfo = useRestaurentMenu(para.resId);

  if (!resInfo) return <h1>Loading</h1>;

  const { name, costForTwoMessage, cuisines } = resInfo[2]?.card?.card?.info;
  const { offers } = resInfo[3]?.card?.card?.gridElements?.infoWithStyle;
  const { cards } = resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Restaurant Header */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-6 transition hover:shadow-2xl">
        <h1 className="text-3xl font-bold text-gray-800">{name}</h1>

        <h2 className="text-gray-600 mt-2">
          {cuisines.join(", ")} • {costForTwoMessage}
        </h2>
      </div>

      {/* Offers Section */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-6">
        <h2 className="text-xl font-semibold mb-3 text-yellow-700">
          🎉 Offers
        </h2>

        <ol className="space-y-3">
          {offers.map((o) => (
            <li
              key={o.info.offerIds[0]}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold">{o.info.header}</h3>
              <p className="text-sm text-gray-500">
                Coupon: {o.info.couponCode}
              </p>
            </li>
          ))}
        </ol>
      </div>

      {/* Menu Section */}
      <h2 className="text-2xl font-bold mb-4">🍽 Menu</h2>

      {/* First Category */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3">
          {cards[3]?.card?.card?.title}
        </h3>

        <ul className="space-y-3">
          {cards[3]?.card?.card?.itemCards?.map((menu) => (
            <li
              key={menu?.card?.info?.id}
              className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition hover:scale-105"
            >
              <span className="font-medium">{menu?.card?.info?.name}</span>

              <span className="text-green-600 font-semibold">
                ₹{menu?.card?.info?.price / 100}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Second Category */}
      <div>
        <h3 className="text-xl font-semibold mb-3">
          {cards[4]?.card?.card?.title}
        </h3>

        <ul className="space-y-3">
          {cards[4]?.card?.card?.itemCards?.map((menu) => (
            <li
              key={menu?.card?.info?.id}
              className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition hover:scale-[1.02]"
            >
              <span className="font-medium">{menu?.card?.info?.name}</span>

              <span className="text-green-600 font-semibold">
                ₹{menu?.card?.info?.price / 100}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurentMenu;
