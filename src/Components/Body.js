import { RestaurantCard } from "./RestaurantCard";
import { restaurantsList } from "../Config/constants";
import Shimmer from "./Shimmer";

import { Divider, TextField } from "@mui/material";

// import ;

import { useEffect, useState } from "react";

import { filterData } from "../utils/helper";
import { useRestaurantHook } from "../utils/useRestaurants";
import Button from "@mui/material/Button";
import useRestroUrl from "../utils/useRestroUrl";

import { UseSelector, useSelector } from "react-redux";
import Carouselcomp from "./Carouselcomp";

export const Body = () => {
  let [searchinp, setSearchinp] = useState("");
  let bdcApi = "https://api.bigdatacloud.net/data/reverse-geocode-client";
  const Http = new XMLHttpRequest();
  const restro_url = localStorage.getItem("restro_url");

  let [allrestaurants, setAllRestaurants] = useState([]);

  let [city, setCity] = useState("kkkk");

  let [filterrestaurants, setFilterRestaurants] = useState([]);

  let [carouselData, setCarouselData] = useState([]);

  async function getData() {
    console.log(restro_url);
    const data = await fetch(restro_url);
    const jsondata = await data.json();
    console.log(jsondata);
    const restros =
      jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    const crsData =
      jsondata?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;

    console.log(crsData);

    setTimeout(() => {
      setAllRestaurants(restros);
      setFilterRestaurants(restros);
      setCarouselData(crsData);
    }, 4000);
  }

  function getApi(bdcApi) {
    Http.open("GET", bdcApi);
    Http.send();
    Http.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let tt = JSON.parse(this.responseText);
        console.log(tt);
        setCity(tt.city);
        // console.log(this.responseText);
      }
    };
  }

  useEffect(() => {
    console.log("use Effect call back fxn");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        bdcApi =
          bdcApi +
          "?latitude=" +
          localStorage.getItem("lat") +
          "&longitude=" +
          localStorage.getItem("long") +
          "&localityLanguage=en";
        getApi(bdcApi);
      },
      (err) => {
        getApi(bdcApi);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
    getData();
  }, []);

  // console.log(allrestaurants.length + "  " + filterrestaurants.length);

  console.log("render");

  if (!allrestaurants)
    return (
      <div className="middle">
        <h1>Sorry, No Restaurant is providing Online Delivery !!</h1>
      </div>
    );

  return allrestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-middle">
      <h2>So, what you want to eat today?</h2>
      <Carouselcomp props={carouselData} />
      <div className="middle">
        <Divider></Divider>
        <h2>Restaurants with online food delivery in {city}</h2>
        <div className="search-div">
          <input
            type="text"
            placeholder="Restaurants, food"
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
          <Button
            variant="contained"
            sx={{ padding: "7px", borderRadius: "7px", textTransform: "none" }}
            color="secondary"
          >
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
    </div>
  );
};

// https://api.allorigins.win/raw?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D15.8323892%26lng%3D78.0544946%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING
// const restros = restaurantsList;
// setTimeout(() => {
//   console.log("set time out");
//   console.log(restros);

// }, 2000);
