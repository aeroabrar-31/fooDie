import { imgURL } from "../Config/constants";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

export const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  id,
}) => {
  // console.log(props);

  return (
    <div className="card">
      <Link to={"/restaurant/" + id}>
        <img src={imgURL + cloudinaryImageId} />
      </Link>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>⭐ {avgRating} rating</h4>
    </div>
  );
};
