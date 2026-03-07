import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  const { name, cuisines, costForTwo, avgRating, sla, cloudinaryImageId } =
    props.resData?.info;
  return (
    <div className="m-4 p-4 flex flex-col justify-center  items-center w-60 h-100 rounded-2xl  bg-gray-200 hover:bg-pink-200 " >
      <img
        className="w-50 h-47 rounded-2xl mt-3"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
  
      <h3 className="font-bold text-xl ">{name}</h3>
      <h4 className="p-1 m-2 text-mist-700 text-center font-semibold">{cuisines.join(", ")}</h4>
      <div className=" w-55 flex justify-between items-center">
      <h4 className="font-bold font-sans" >{costForTwo}</h4>
      <h4 className="bg-yellow-200 rounded-full w-20 h-7 align-middle mb-0" > &nbsp; {avgRating} stars</h4>
      </div>
      <h4  className="mt-4 text-mist-500">delivery in {sla?.deliveryTime} min</h4>
      
    </div>
  );
};



//! part-1
//? Higher Order COmponent which takes restocard and enhcanc eit and return it
 //input-> restaurent Card , output card --> card with free delvery tag 
export const cardWithFreedeliveryTag = (RestaurentCard) =>{ //TODO can we do both named and simple export 
    //returning a component which return JSX
    return (props)=>{
    return (
        <div className=" hover:scale-105 transition duration-100">
          <label className="absolute bg-amber-500 text-amber-50 text-lg text-center rounded-sm mt-1 ml-3 w-30 h-7 ">Free Delivery</label>
        <RestaurentCard {...props} />
        </div>
    )
  }
}

export default RestaurentCard;
