import { useState } from "react";

export const SearchBar = () => {
  //   let searchText = "search..";

  let [searchinp, setSearchinp] = useState("kfc");

  const [searchClicked, setSearchClicked] = useState("false");

  return (
    <div className="search-div">
      <input
        type="text"
        placeholder=""
        value={searchinp}
        onChange={(e) => {
          console.log(e.target.value);
          setSearchinp(e.target.value);
        }}
      />

      <h1>{searchClicked}</h1>
      <button
        onClick={() => {
          if (searchClicked === "false") setSearchClicked("true");
          else setSearchClicked("false");
        }}
      >
        Search
      </button>
    </div>
  );
};
