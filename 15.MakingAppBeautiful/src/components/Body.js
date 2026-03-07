import { useEffect, useState} from "react";
import {Link} from "react-router";
import RestaurentCard from "./RestaurentCard";
import { realTimeRestarantData } from "../utils/mockData";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  let [restaurantsList, setRestaurantsList] = useState([]);
  let [filterredRestaurent, setFilterredRestaurent] = useState([]);

  let [searchText, setSearchText] = useState("");


  let onlineStatus = useOnlineStatus();

  useEffect(() => {
    fectchData();
  }, []);

  const fectchData = async () => {
    // here we are paling with mock data as real time api is complex to get 
    const data = realTimeRestarantData
    setRestaurantsList(data)
    setFilterredRestaurent(data)
  };

  if(!onlineStatus) return <h1>Please check you internet connection</h1>

  return (
    <div className="body">
      <div className="flex justify-center items-center ">
        <div className="ml-1 p-4">
          <input
            type="text"
            className="border m-4 p-1  w-3xs h-10"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
          className="text-xl p-3 bg-pink-400/50 rounded-xl  hover:scale-105 transition duratio-75"
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

        <div>
            <button
          className="text-xl p-3 ml-6 bg-yellow-200/70 rounded-xl hover:scale-105 transition duratio-75"
          onClick={() => {
            const filteredRestaurent = restaurantsList.filter(
              (o) => o.info.avgRating > 4.5,
            );
            setFilterredRestaurent(filteredRestaurent);
          }}
        >
          Top rated restaurent
        </button>
        </div>
      </div>

      {restaurantsList.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap justify-center ">
          {filterredRestaurent.length === 0 ? (
            <div className="text-2xl">No Such Restaurent Found</div>
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
