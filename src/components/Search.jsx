import React from "react";

const Search = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        className="rounded-md border border-gray-300 p-2"
      />
      <button className="absolute right-2 top-2 text-gray-500">
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default Search;
