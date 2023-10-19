import React from "react";
import css from "../css/Carousel.css";
import { SearchData } from "../data files/Places";
import { NavLink } from "react-router-dom";

const Carousel = () => {
  const limit = 14;

  return (
    <>
    <div className="home_carousel_heading_container">
    <h2 className="home_carousel_heading fw-bold">Enjoy Your <span>Holidays</span> <span className="exclamation">!</span></h2>
    </div>
    <div className="slider mx-4">
        <div className="slide-track">
          {SearchData.slice(0, limit).map((item) => (
            <NavLink to={item.url} className="slide" key={item.id}>
              <img
                src={item.bigimage}
                alt={item.name}
                height={200}
                width={300}
              />
            </NavLink>
          ))}
        </div>
        <NavLink to="/services">
          <button className="btn btn-outline-secondary fw-bold me-5">View All</button>
        </NavLink>
      </div>
    </>
  );
};

export default Carousel;