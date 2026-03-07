import { useParams } from "react-router";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";

const RestaurentMenu = () => {

  //!part-3 here which index restaurent will be open  given by default 1st category is opened
  const [showIndex , setShowIndex] = useState(0)

  const para = useParams();
  const resInfo = useRestaurentMenu(para.resId);


  if (!resInfo) return <h1>Loading</h1>;

  const { name, costForTwoMessage, cuisines } = resInfo[2]?.card?.card?.info;
  const { cards } = resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR;

  //! part-2 making menu list by filtering only Item Ctegory
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

      {/*
       //!part-2 making Menu Section here we will work with data and ui layer
       here we have to make accordian for this things  let create a diff componet for it where it fetches all categories restaurant has
       */}
      {itemCategory.map((category,index) => {
        return (
          // now this being an controlled component
          <RestaurantCategories
            key={category?.card?.card?.categoryId}
            data={category?.card?.card}
            showItems={ index===showIndex? true : false /* //! part-3  look here we giving control of state to parent*/ } 
            setShowIndex = {()=>{setShowIndex(index)}} /* passing out setShowIndex show chicld can inderetly change state of parent state */ 
          />
        );
      })}
    </div>
  );
};

export default RestaurentMenu;
