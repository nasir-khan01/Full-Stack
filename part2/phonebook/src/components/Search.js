import React from "react";
const Search = ({ searchValue, handleOnSearch }) => {
  return (
    <div>
      filter shown with
      <input value={searchValue} onChange={handleOnSearch} />
    </div>
  );
};
export default Search;
