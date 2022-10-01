import React from "react";
import "./search.css";

function Search({ className, placeholder, onChangeHandler }) {
  return (
    <div>
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default Search;
