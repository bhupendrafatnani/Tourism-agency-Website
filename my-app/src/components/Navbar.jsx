import React from "react";
import css from '../css/Navbar.css';
import Logo from "../Assets/img/Logo.png";
import { NavLink } from "react-router-dom"; 

/*=============mobile navbar menu==============*/
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach((e) => {
  e.addEventListener("click", () => {
    navCollapse.classList.remove("show");
  });
});

/*=====================================
=======================================*/

function Navbar() {
  return (
    <>
      {/*===================navbar================*/}
      <nav className="navbar navbar-expand-lg bg-body-tertiary container-fluid">
        <div className="container-fluid col-10">
          <NavLink className="navbar-brand" to="/">
            <img src={Logo} alt="Logo" className="pt-1" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav fw-bold">
              <NavLink className="nav-link me-3" aria-current="page" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link me-3" to="/services">
                Services
              </NavLink>
              <NavLink className="nav-link me-3" to="/About">
                About
              </NavLink>
              <NavLink className="nav-link me-3" to="/Contact">
                Contact
              </NavLink>
              <NavLink to="/SingnUp" className="SignUp-btn">
                <button
                  type="button"
                  className="btn SignUp-nav-link rounded py-2 px-3 mt-2 fw-bold"
                >
                  <i className="bi bi-person-circle w-75"></i>&nbsp;&nbsp;Login
                  / SignUp
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
