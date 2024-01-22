import { useState, useEffect } from "react";
import { menu_URL } from "../Config/constants";

export const useRestaurantMenu = (id) => {
  const [restaurantsmenu, setRestaurantsmenu] = useState(new Map());

  useEffect(() => {
    getCategories();
  }, []);

  async function getCategories() {
    const data = await fetch(menu_URL + id);

    const jsondata = await data.json();

    console.log(jsondata);

    const temp =
      jsondata.data.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards.map(
        (unique) => {
          return unique.card.card.itemCards;
        }
      );

    // console.log(temp);
    const clean = temp.filter((rows) => {
      if (rows !== undefined) return rows;
    });
    // console.log(clean);
    let list = [];

    let map = new Map();

    for (let index = 0; index < clean.length; index++) {
      const element = clean[index];

      // console.log(element[0].card.info.category);

      for (let j = 0; j < element.length; j++) {
        const arr = element[j];
        let obj = arr.card.info;

        let key = arr.card.info.category;

        if (!map.has(key)) {
          let list = [];
          list.push(obj);
          map.set(key, list);
        } else {
          let tt = map.get(key);
          tt.push(obj);
          map.set(key, tt);
        }
      }

      setRestaurantsmenu(map);
    }
  }

  console.log(restaurantsmenu);

  return restaurantsmenu;
};

// const categories =
//   jsondata?.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
//     (c) =>
//       c.card?.card?.["@type"] ===
//       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
//   );
// console.log(categories);

// console.log(categ);

// setItems(map);
