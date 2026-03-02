import { useEffect, useState } from "react";
import { restaurentMenus } from "../utils/mockData";
import {useParams} from "react-router"

//! part-1
// this is where more details of specific restaurent will be provided
//here we offcourse have to make this page reusable

const RestaurentMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const para = useParams();
  console.log(para)
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    // const data = await fetch("http://localhost:5000/api/restaurents/menus")
    // const json =await data.json()
    const data = restaurentMenus;
    setResInfo(data[para.resId]);
  };

  if (!resInfo) return <h1>Loading</h1>; //TODO why needed and error thrown up if this is not implemented

  const { name, costForTwoMessage, cuisines } = resInfo[2]?.card?.card?.info;
  const { offers } = resInfo[3]?.card?.card?.gridElements?.infoWithStyle;
  const { cards } = resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR;


  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>
        {cuisines.join(", ")} - {costForTwoMessage}{" "}
      </h2>
      <hr />
      <div>
        <h2>Offers:</h2>
        <ol>
          {offers.map((o) => (
            <li key={o.info.offerIds[0]}>
              <h3>{o.info.header}</h3>
              <p>{o.info.couponCode}</p>
            </li>
          ))}
        </ol>
        <hr />
        <h2>Menus</h2>
      </div>
      <ul>
        <li key="1">
          <h1>{cards[3].card.card.title}</h1>
        </li>

          {cards[3]?.card?.card?.itemCards?.map(menu=>{
            return (<li  key={menu?.card?.info?.id}>
              <h3>{menu?.card?.info?.name} for Rs. {menu?.card?.info?.price/100}</h3>
            </li>)
          })}


          <li key="2">
          <h1>{cards[4]?.card?.card?.title}</h1>
          </li>

          {cards[4]?.card?.card?.itemCards?.map(menu=>{
            return (<li key={menu?.card?.info?.id}>
              <h3>{menu?.card?.info?.name} for Rs. {menu?.card?.info?.price/100}</h3>
            </li>)
          })}
      </ul> 
    </div>
  );
};

export default RestaurentMenu;
