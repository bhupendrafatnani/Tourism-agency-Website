import React, { useState } from "react";
import css from "../css/style.css";
import { SearchData } from "../data files/Places";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import Slidebar from "../components/Slidebar";
import { NavLink } from "react-router-dom";

const uniqueList = [
  ...new Set(
    SearchData.map((curElem) => {
      return curElem.genre;
    })
  ),
];

const Services = () => {
  const [cardData, setcardData] = useState(SearchData);
  const [cardButton, setcardButton] = useState(["All", ...uniqueList]);
  const [searchInput, setSearchInput] = useState("");

  const filterButton = (genre) => {
    const filteredCards = SearchData.filter((card) => {
      if (genre === "All") {
        return true;
      }
      return card.genre === genre;
    });
  
    const filteredCardsByName = filteredCards.filter((card) => {
      const lowerCaseName = card.name.toLowerCase();
      return lowerCaseName.includes(searchInput.toLowerCase());
    });
  
    setcardData(filteredCardsByName);
  };

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
    filterButton("All");
  };

  return (
    <>
      <Header />
      <Navbar />
      <section className="container-fluid services-section">
        <div className="row services-conatiner">
          <Slidebar
            filterButton={filterButton}
            cardButton={cardButton}
            handleSearchInput={handleSearchInput}
          />
          <div className="col-10 border service-cards">
            <div className="row mx-3">
              <ServiceCard cardData={cardData} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;
