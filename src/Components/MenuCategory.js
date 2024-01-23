import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuCard from "./MenuCard";
import Shimmer from "./Shimmer";
import Error from "./Error";

import { useRestaurantMenu } from "../utils/useRestarauntMenu";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import RestaurantDetails from "./RestaurantDetails";
import { useRestaurantDetail } from "../utils/useRestaurantDetail";
import { ExpandCircleDown } from "@mui/icons-material";

const MenuCategory = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const id = useParams().id;

  const item = useRestaurantMenu(id);

  const restro_detail = useRestaurantDetail(id);
  // console.log(restro_detail);
  // console.log("====================================");
  // console.log(restro_detail);
  // console.log("====================================");

  if (item.size === 0) return <h1>Loading...</h1>;

  let keys = [];
  let values = [];
  let result = [];

  return (
    <div className="accordions-div">
      <RestaurantDetails {...restro_detail} />
      {item.forEach(function tt(value, key) {
        keys.push(key);
        values.push(value);
      })}

      {values.map((arr, index) => {
        // console.log(arr);
        return (
          <div className="accordions" key={index}>
            <Accordion
              expanded={expanded === index}
              onChange={handleChange(index)}
            >
              <AccordionSummary expandIcon={<ExpandCircleDown />}>
                <Typography
                  align="center"
                  sx={{ width: "100%", fontSize: "25px" }}
                  className="accord"
                >
                  {keys[index]} ({arr.length})
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {arr.map((rr, index) => {
                  return (
                    <div key={index}>
                      <MenuCard props={rr}></MenuCard>
                    </div>
                  );
                })}
              </AccordionDetails>
            </Accordion>
            <br></br>
          </div>
        );
      })}
    </div>
  );
};
export default MenuCategory;

// {
//   (() => {
//     for (let i = 0; i < keys.length; i++) {
//       result.push(<h1>{keys[i]}</h1>);
//       result.push(
//         values[i].map((rr, index) => {
//           return (
//             <div>
//               {/* <Error /> */}
//               <MenuCard
//                 key={index}
//                 name={rr.name}
//                 price={rr.price}
//                 imgid={rr.imgid}
//               ></MenuCard>
//             </div>
//           );
//         })
//       );
//     }
//     console.log(result);
//   })();
// }

// {
//   values.map((arr, index) => {
//     return arr.map((rr, index) => {
//       return (
//         <div key={index}>
//           <MenuCard name={rr.name} price={rr.price} imgid={rr.imgid}></MenuCard>
//         </div>
//       );
//     });
//   });
// }
