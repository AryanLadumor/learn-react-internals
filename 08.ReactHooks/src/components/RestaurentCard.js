import {CDN_URL} from "../utils/constants"
const cardStyle = {
  background: "#f0f0f0",
};

const RestaurentCard = (props) => {
  // console.log(props);
  // console.log(props.resData);

  const { name, cuisines, costForTwo, avgRating, sla, cloudinaryImageId } = props.resData?.info;
  return (
    <div className="res-card" style={cardStyle}>
      <img
        className="res-Card-img"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
      <h4>delivery in {sla?.deliveryTime} min</h4>
    </div>
  );
};

export default  RestaurentCard;