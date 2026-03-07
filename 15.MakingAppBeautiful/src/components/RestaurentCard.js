import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  const { name, cuisines, costForTwo, avgRating, sla, cloudinaryImageId } =
    props.resData?.info;
  return (
    <div className="m-4 p-4 flex flex-col justify-center  items-center w-60 h-100 rounded-2xl  bg-gray-200 hover:bg-pink-200 hover:scale-105 transition duration-100 " >
      <img
        className="w-50 h-47 rounded-2xl mt-3"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
  
      <h3 className="font-bold text-2xl ">{name}</h3>
      <h4 className="p-1 m-2 font-semibold">{cuisines.join(", ")}</h4>
      <div className=" w-55 flex justify-between items-center">
      <h4 className="font-bold font-sans" >{costForTwo}</h4>
      <h4 className="bg-yellow-200 rounded-full w-20 h-7 align-middle mb-0" > &nbsp; {avgRating} stars</h4>
      </div>
      <h4  className="mt-4">delivery in {sla?.deliveryTime} min</h4>
      
    </div>
  );
};

export default RestaurentCard;
