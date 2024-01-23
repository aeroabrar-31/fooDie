import { useEffect, useState } from "react";

const useRestroUrl = () => {
  let [url, setUrl] = useState("");

  console.log("In the Restro-URl");

  function got(data) {
    console.log("got success");
    console.log(data);
    const temp =
      "https://api.allorigins.win/raw?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D" +
      data.coords.latitude +
      "%26lng%3D" +
      data.coords.longitude +
      "%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING";
    console.log(data.coords.latitude + "  " + data.coords.longitude);

    setUrl(temp);
    // getData();
  }

  function fail() {
    console.log("fail");
  }

  async function getlocation() {
    navigator.geolocation.getCurrentPosition(got, fail);
  }

  useEffect(() => {
    getlocation();
  }, []);

  return url;
};

export default useRestroUrl;
