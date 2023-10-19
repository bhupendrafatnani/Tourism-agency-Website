import React from "react";
import css from "../css/Slidebar.css";

const Slidebar = ({ filterButton, cardButton, handleSearchInput }) => {
  const handleFilterButton = (genre) => {
    filterButton(genre);
  };

  return (
    <>
      <div className="col-2 d-block slidebar">
        <div className="my-3 mx-3">
          <input
            type="text"
            placeholder="Search..."
            className="pe-5"
            onChange={handleSearchInput}
          />
          <i className="bi bi-search services-search-icon"></i>
        </div>
        <div className="d-flex flex-column slidebar-btns mt-4 pt-2">
          {cardButton.map((curElem) => {
            if (curElem === "All") {
              return (
                <button
                  key={curElem}
                  className="slidebar-btn mx-2"
                  onClick={() => handleFilterButton(curElem)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="currentColor"
                    className="bi bi-arrow-down-up me-2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
                    />
                  </svg>
                  All
                </button>
              );
            } else {
              return (
                <button
                  key={curElem}
                  className="slidebar-btn mx-2"
                  onClick={() => handleFilterButton(curElem)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="currentColor"
                    className="bi bi-geo-alt-fill me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                  {curElem}
                </button>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Slidebar;
