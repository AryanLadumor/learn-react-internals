import { useEffect, useState} from "react";
import {Link} from "react-router";
import RestaurentCard from "./RestaurentCard";
import { realTimeRestarantData } from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  let [restaurantsList, setRestaurantsList] = useState([]);
  let [filterredRestaurent, setFilterredRestaurent] = useState([]);

  let [searchText, setSearchText] = useState("");

  useEffect(() => {
    fectchData();
  }, []);

  const fectchData = async () => {
    // const data = await fetch("http://localhost:5000/api/restaurants");

    // const json = await data.json();

    // console.log(json);

    // setRestaurantsList(
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants,
    // );
    // setFilterredRestaurent(
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants,
    // );

    // here we are paling with mock data as real time api is complex to get 
    const data = realTimeRestarantData
    setRestaurantsList(data)
    setFilterredRestaurent(data)
  };

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);
              let filterredRes = restaurantsList.filter((o) =>
                o.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilterredRestaurent(filterredRes);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurent = restaurantsList.filter(
              (o) => o.info.avgRating > 4.5,
            );
            setRestaurantsList(filteredRestaurent);
          }}
        >
          Top rated restaurent
        </button>
      </div>

      {restaurantsList.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="res-container">
          {filterredRestaurent.length === 0 ? (
            <div>No Such Restaurent Found</div>
          ) : (
            filterredRestaurent.map((obj) => (
              <Link className="res-card-link" key={obj.info.id} to={"/restaurents/" + obj.info.number}>
              <RestaurentCard  resData={obj} />
              </Link>

            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Body;
