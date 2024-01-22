import { RestaurantCard } from "./RestaurantCard";
import { restaurantsList } from "../Config/constants";
import Shimmer from "./Shimmer";

// import ;

import { useEffect, useState } from "react";

import { filterData } from "../utils/helper";
import { useRestaurantHook } from "../utils/useRestaurants";
import Button from "@mui/material/Button";

export const Body = () => {
  let [searchinp, setSearchinp] = useState("");

  let [allrestaurants, setAllRestaurants] = useState([]);

  let [filterrestaurants, setFilterRestaurants] = useState([]);

  // console.log(allrestaurants.length + "  " + filterrestaurants.length);

  async function getData() {
    const data = await fetch(
      "https://api.allorigins.win/raw?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D15.8323892%26lng%3D78.0544946%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
    );
    const jsondata = await data.json();
    console.log(jsondata);
    const restros =
      jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setAllRestaurants(restros);
    setFilterRestaurants(restros);

    // const restros = restaurantsList;
    // setTimeout(() => {
    //   console.log("set time out");
    //   console.log(restros);

    // }, 2000);
  }

  useEffect(() => {
    console.log("use Effect call back fxn");
    getData();
  }, []);

  // console.log(allrestaurants.length + "  " + filterrestaurants.length);

  console.log("render");

  if (!allrestaurants)
    return (
      <div className="middle">
        <h1>No Restaurants Found !</h1>
      </div>
    );

  return allrestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="middle">
      <div className="search-div">
        <input
          type="text"
          placeholder=""
          value={searchinp}
          onChange={(e) => {
            // console.log(e.target.value);
            setSearchinp(e.target.value);
            console.log("Clicked - " + e.target.value);
            const data = filterData(e.target.value, allrestaurants);
            console.log(data.length);
            setFilterRestaurants(data);
          }}
        />

        {/* <h1>{searchClicked}</h1> */}
        <Button variant="contained" color="secondary">
          Search
        </Button>
      </div>

      <div className="restro-cards">
        {/* <RestaurantCard
          name={restaurantsList[0].info.name}
          cloudinaryImageId={restaurantsList[0].info.cloudinaryImageId}
          cuisines={restaurantsList[0].info.cuisines}
          avgRating={restaurantsList[0].info.avgRating}
        />
        <RestaurantCard
          name={restaurantsList[1].info.name}
          cloudinaryImageId={restaurantsList[1].info.cloudinaryImageId}
          cuisines={restaurantsList[1].info.cuisines}
          avgRating={restaurantsList[1].info.avgRating}
        />
        <RestaurantCard
          {...restaurantsList[2].info}
          key={restaurantsList[2].info.id}
        /> */}
        {
          // no key <<<< index key <<<<<<< unique key
        }

        {filterrestaurants.length === 0 ? (
          <h1>Oops! Can't find restaurant</h1>
        ) : (
          filterrestaurants.map((rest) => {
            return <RestaurantCard {...rest.info} key={rest.info.id} />;
          })
        )}
        {/* <RestaurantCard restaurant={restaurantsList[0].info} />  props
      <RestaurantCard restaurant={restaurantsList[1].info} />
      <RestaurantCard restaurant={restaurantsList[2].info} />
      <RestaurantCard restaurant={restaurantsList[3].info} /> */}
      </div>
    </div>
  );
};

// https://api.allorigins.win/raw?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D15.8323892%26lng%3D78.0544946%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING
