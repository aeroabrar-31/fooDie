import { useEffect, useState } from "react";
import { menu_URL } from "../Config/constants";

export const useRestaurantDetail = (id) => {
  let [restrodetail, setRestroDetail] = useState({});

  useEffect(() => {
    getdetails();
  }, []);

  async function getdetails() {
    const data = await fetch(menu_URL + id);

    const jsondata = await data.json();

    console.log(jsondata);

    const temp = jsondata.data?.cards[0]?.card?.card?.info;

    setRestroDetail(temp);
  }

  return restrodetail;
};
