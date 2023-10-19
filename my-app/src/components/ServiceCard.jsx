import React from "react";
import css from "../css/ServiceCard.css";
import { NavLink } from "react-router-dom";

const ServiceCard = ({cardData}) => {
  return (
    <>
    {cardData.map((curElem) => {
      const {id, bigimage, name, description, avgprice, url} = curElem;

      return(
        <div className="card" key={id}>
        <div className="overflow-hidden card-img-gradient">
          <img src={bigimage} className="card-img-top" />
        </div>
        <div className="card-body">
          <h5 className="card-title fw-bold fs-5">{name}</h5>
          <p className="card-text">{description}</p>
          <hr />
          <div className="d-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-currency-rupee"
              viewBox="0 0 16 16"
            >
              <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
            </svg>
            <h3 className="fw-bolder fs-4 me-2 mt-1">{avgprice}</h3>
            <NavLink to={url}>
              <button className="btn btn-primary fw-medium">
                Book Package
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      );
    })}
    </>
  );
};

export default ServiceCard;
