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
  veg,
}) => {
  // const { name, avgRating, locality } = { ...props };

  return (
    <div className="restro-details-div">
      <div className="restro-details">
        <div className="block1">
          <span>
            <h2> {name}</h2>

            <h4>
              📍 {locality}, {sla?.lastMileTravelString}
            </h4>
            <h4>🔖 {aggregatedDiscountInfo?.descriptionList[0]?.meta}</h4>
          </span>
        </div>

        <div className="block2">
          <Card>
            <CardContent>
              <h4>⭐ {avgRating} </h4>
              {/* <Typography variant="h5">⭐ {avgRating}</Typography> */}
              <Divider></Divider>

              {/* {veg ? (
                <div>
                  <img
                    src={
                      "https://icon2.cleanpng.com/20180601/ae/kisspng-vegetarian-cuisine-biryani-indian-cuisine-vegetabl-vegetarian-5b11c2357677b7.0724399215278904854853.jpg"
                    }
                    width={30}
                    height={30}
                  ></img>{" "}
                  <h4>Veg</h4>
                </div>
              ) : (
                <div>
                  <img
                    width={30}
                    height={30}
                    src="https://www.pinclipart.com/picdir/middle/419-4194820_veg-icon-png-non-veg-logo-png-clipart.png"
                  ></img>
                  <h4>Non-veg</h4>
                </div>
              )} */}

              {/* <Divider></Divider> */}
              <h4>🛵 {sla?.deliveryTime} mins</h4>
            </CardContent>
          </Card>
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default RestaurantDetails;
