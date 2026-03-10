import { useParams } from "react-router";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";

const RestaurentMenu = () => {


  const [showIndex , setShowIndex] = useState(0)

  const para = useParams();
  const resInfo = useRestaurentMenu(para.resId);


  if (!resInfo) return <h1>Loading</h1>;

  const { name, costForTwoMessage, cuisines } = resInfo[2]?.card?.card?.info;
  const { cards } = resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR;

  
  console.log(cards);
  const itemCategory = cards.filter(
    (c) =>
      c.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
  );
  console.log(itemCategory);

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Restaurant Header */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-6 transition hover:shadow-2xl">
        <h1 className="text-3xl font-bold text-gray-800">{name}</h1>

        <h2 className="text-gray-600 mt-2">
          {cuisines.join(", ")} • {costForTwoMessage}
        </h2>
      </div>

      <h2 className="text-2xl font-bold mb-4"> Menu</h2>

     
      {itemCategory.map((category,index) => {
        return (
          // now this being an controlled component
          <RestaurantCategories
            key={category?.card?.card?.categoryId}
            data={category?.card?.card}
            showItems={ index===showIndex? true : false } 
            setShowIndex = {()=>{setShowIndex(index)}} 
          />
        );
      })}
    </div>
  );
};

export default RestaurentMenu;
