import React, { useState, useEffect } from "react";
import css from "../css/style.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Carousel from "../components/Carousel";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import HomeCover from "../Assets/img/Home Cover.jpg";
import BurjKhalifa from "../Assets/img/Places/Bruj-Khalifa.jpg";
import BurjAlArab from "../Assets/img/Places/The-Burj-Al-Arab2.jpg";
import FerrariWorld from "../Assets/img/Places/Ferrari-World2.jpg";
import ThePalm from "../Assets/img/Places/Atlantis-The-Palm2.jpg";
import Dolphinarium from "../Assets/img/Places/Dubai-Dolphinarium2.jpg";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="home_cover_container">
        <img src={HomeCover} alt="Home-Cover" className="home_cover" />
        <SearchBar />
        <div className="home_headings">
        <h1 className="home_cover_heading text-center fw-bold">
          <span className="home_cover_h1">
            Explore U.A.E.
            <br />
          </span>
          <span className="home_cover_h2">With CondingKit Tourism</span>
        </h1>
        <p className="home_cover_para">
          UAE : modern architecture, stunning beaches, iconic landmarks. Creek,
          fountain show, desert adventure. Luxury hotels, cuisine, hospitality.
          Unforgettable.
        </p>
        <div className="d-flex container justify-content-center text-center home_cover_scroll_fonts">
          <h1>Scroll Down</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-arrow-down-circle scroll_icon_home"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
            />
          </svg>
        </div>
        </div>
      </div>
      <Carousel/>
      <div className="container mt-4 popular_section_container">
        <div className="row text-center py-2"><h2>Popular <span className="Destinations_word">Destinations</span> <span><i className="bi bi-bar-chart-line-fill"></i></span></h2></div>
        <div className="row popular_section_rows">
          <div className="col-4 position-relative">
            <NavLink to="Burj-Khalifa.jsx"> 
            <div className="img-gradient overflow-hidden rounded-4"><img src={BurjKhalifa} className="img-fluid"/></div>
            <div className="px-4 row">
            <div className="col-6 popular_section_details position-absolute">
            <NavLink to="/Services">Dubai</NavLink>
            <h3>Burj Khalifa</h3>
            </div>
            <div className="col-4 offset-8 popular_section_details mt-2 position-absolute">
              <button className="popular_section_btns rounded-4 btn btn-success">28 Tours</button>
            </div>
            </div>
            </NavLink>
          </div>
          <div className="col-8 g-4">
          <div className="row gx-2">
          <div className="col position-relative">
            <NavLink to="Burj-Al-Arab.jsx">
            <div className="img-gradient overflow-hidden rounded-4"><img src={BurjAlArab} className="img-fluid"/></div>
            <div className="px-4 row">
            <div className="col-6 popular_section_details-2 position-absolute">
            <NavLink to="/Services">Dubai</NavLink>
            <h4>Burj Al Arab</h4>
            </div>
            <div className="col-4 offset-8 popular_section_details-2 mt-2 position-absolute">
              <button className="popular_section_btns rounded-4 btn btn-success">4 Tours</button>
            </div>
            </div>
            </NavLink>
            </div>
          <div className="col position-relative">
            <NavLink to="Ferrari-World.jsx">
          <div className="img-gradient overflow-hidden rounded-4"><img src={FerrariWorld} className="img-fluid"/></div>
          <div className="px-4 row">
            <div className="col-6 popular_section_details-2 position-absolute">
            <NavLink to="/Services">Abu Dubai</NavLink>
            <h4>Farrai World</h4>
            </div>
            <div className="col-4 offset-8 popular_section_details-2 mt-2 position-absolute">
              <button className="popular_section_btns rounded-4 btn btn-success">12 Tours</button>
            </div>
            </div>
          </NavLink>
          </div>
         </div>
         <div className="row g-2">
          <div className="col position-relative">
            <NavLink to="Sky-Views-Observatory.jsx">
          <div className="img-gradient overflow-hidden rounded-4"><img src={Dolphinarium} className="img-fluid"/></div>
          <div className="px-4 row">
            <div className="col-6 popular_section_details-2 position-absolute">
            <NavLink to="/Services">Dubai</NavLink>
            <h4>Dolphinarium</h4>
            </div>
            <div className="col-4 offset-8 popular_section_details-2 mt-2 position-absolute">
              <button className="popular_section_btns rounded-4 btn btn-success">4 Tours</button>
            </div>
            </div>
          </NavLink>
          </div>
          <div className="col pt-4 position-relative">
            <NavLink to="Atlantis-The-Palm.jsx">
          <div className="img-gradient overflow-hidden rounded-4"><img src={ThePalm} className="img-fluid"/></div>
          <div className="px-4 row">
            <div className="col-6 popular_section_details-2 position-absolute">
            <NavLink to="/Services">Dubai</NavLink>
            <h4>Atlantis, Palm</h4>
            </div>
            <div className="col-4 offset-8 popular_section_details-2 mt-2 position-absolute">
              <button className="popular_section_btns rounded-4 btn btn-success">4 Tours</button>
            </div>
            </div>
            </NavLink>
            </div>
         </div>
        </div>
        </div>
      </div>
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;
