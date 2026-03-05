import { useEffect, useState } from "react";
import { restaurentMenus } from "../utils/mockData";
import {useParams} from "react-router"
import useRestaurentMenu from "../utils/useRestaurentMenu";

const RestaurentMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const para = useParams();

  //! part1 making our custom hook
  //? why we making cumstom hookk? like we have 2 things up here1st is to fetch data and 2nd is to display data 
  //? so it should only worry about displaying data and should not worry about where data is coming from what is that api calling it 
  //? for eg we have here use useparam and we do not worry how its wrting we just using it 
  //So now we make hook for fetchig data and this component should not care about those useEffect and fetching data and also manage it own state
  
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = restaurentMenus;
  //   setResInfo(data[para.resId]);
  // };

  //! creating hook
  //so giving resid to the hook and somehow it will fetching using this 
  //so how to get data is abstracted
  //now if hooks are utility funtion we will crat them in utils an
  const resInfo = useRestaurentMenu(para.resId);
  
  


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
