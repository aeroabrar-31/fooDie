import { LocationCityRounded, LocationOnTwoTone } from "@mui/icons-material";
import { Card, CardContent, Divider, Typography } from "@mui/material";

const RestaurantDetails = ({
  name,
  avgRating,
  locality,
  sla,
  cuisines,
  orderabilityCommunication,
  aggregatedDiscountInfo,
}) => {
  // const { name, avgRating, locality } = { ...props };

  return (
    <div className="restro-details-div">
      <div className="restro-details">
        <div className="block1">
          <span>
            <h1> {name}</h1>

            <h4>
              📍 {locality}, {sla?.lastMileTravelString}
            </h4>
            <h4>🔖 {aggregatedDiscountInfo?.descriptionList[0]?.meta}</h4>
          </span>
        </div>

        <div className="block2">
          <Card>
            <CardContent>
              {/* <h3>⭐ {avgRating} </h3> */}
              <Typography variant="h5">⭐ {avgRating}</Typography>
              <Divider></Divider>
              <h3>🛵 {sla?.deliveryTime} mins</h3>
            </CardContent>
          </Card>
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default RestaurantDetails;
