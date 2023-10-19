import React, { useState } from "react";
import css from "../css/SearchBar.css";
import { SearchData } from "../data files/Places";
import { NavLink } from "react-router-dom";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearchQueryChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = SearchData.filter((item) => {
      const nameMatch = item.name.toLowerCase().includes(query);
      const ratingMatch = item.rating.toString().includes(query);
      const genreMatch = item.genre.toLowerCase().includes(query);

      return nameMatch || ratingMatch || genreMatch;
    });

    setFilteredResults(filtered);
  };
  
  return (
    <>
      <input
        type="text"
        placeholder="Search Your Destiny....."
        className="searchbar py-2 ps-4 w-50 fw-bold"
        value={searchQuery}
        onChange={handleSearchQueryChange}
      />
      <i className="bi bi-search search_icon"></i>
      {searchQuery && (
        <div className="search">
          {filteredResults.map((result) => (
            <NavLink
              key={result.name}
              to={result.url}
              className="card d-flex flex-row align-items-center"
            >
              <img src={result.poster} alt={result.name} />
              <div className="cont">
                <h3>{result.name}</h3>
                <p>
                  {result.genre}
                  <span>RATING</span>
                  <i className="bi bi-star-fill"></i> {result.rating}
                </p>
              </div>
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchBar;