//importing hook present in react
import { useState } from "react";
import RestaurentCard from "./RestaurentCard";
import { realTimeRestarantData } from "../utils/mockData";

const Body = () => {
  //By using Normal variable with 23 restaurent object
  let NormalvariableResataurentList = realTimeRestarantData;
  //Now By using State variable with same 23 restaurent object
  let [restaurantsList, setRestaurantsList] = useState(realTimeRestarantData);

  // *  State Variable - This is how we make our app interactive.
  // ? Why use State instead of a normal 'let' variable?
  // ? Because calling 'setRestarantsList' tells React to trigger its "Diff Algorithm" which  will
  // ? update the UI. A normal variable would update in memory but leave the UI unchanged.

  return (
    <div className="body">
      <div className="filter">
        {/* * Button to trigger our filter logic */}
        <button
          className="filter-btn"
          onClick={() => {
            // NormalvariableResataurentList =
            //   NormalvariableResataurentList.filter(
            //     (obj) => obj.info.avgRating > 4.5,
            //   );
            //   console.log("changed List : unchanged UI")
            // console.log(NormalvariableResataurentList); //list changed but UI won't,  as renderer will not be triggred by this
            //now list as 11 restaurent filtered from 23 restaurent in console but still UI is't chaned

            const filteredRestaurent = realTimeRestarantData.filter(
              (o) => o.info.avgRating > 4.5,
            );
             //! This call is what triggers the "Re-render" lifecycle!
            setRestaurantsList(filteredRestaurent); // this will change the list and also trigger render which will also change the UI
            console.log("changed List : changed UI")
            console.log(filteredRestaurent)
          }}
        >
          Top rated restaurent
        </button>
      </div>
      <div className="res-container">
        {/* Now even after filtering out it still had not changed still showing all cards  */}
        {/* {NormalvariableResataurentList.map((obj) => (
          <RestaurentCard resData={obj} key={obj.info.id} />
        ))} */}

         {/* * React always keeps the UI in sync with 'restarantsList' state */}
        {/* By using sate variable it will trigger render and only show filtered one */}
        {restaurantsList.map((obj) => (
          <RestaurentCard resData={obj} key={obj.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
