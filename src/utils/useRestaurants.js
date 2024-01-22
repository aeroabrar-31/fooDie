import { useState, useEffect } from "react";

export const useRestaurantHook = () => {
  const [allrestaurants, setAllRestaurants] = useState([]);

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

  return allrestaurants;
};
