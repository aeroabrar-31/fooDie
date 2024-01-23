export function filterData(searchText, restaurants) {
  // console.log(restaurants[0].info.name + " " + searchText);
  const data = restaurants.filter((ele) => {
    // console.log(ele.info.name.includes(searchText));
    return (
      ele.info.name.toLowerCase().includes(searchText.toLowerCase()) ||
      ele.info.cuisines
        .join(" ")
        .toLowerCase()
        .includes(searchText.toLowerCase())
    );
  });
  console.log(data.length);
  return data;
}
