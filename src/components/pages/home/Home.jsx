import React from "react";
import "./home.css";
import banner from "../../assets/illustration.svg";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">
        <span className="color">We make </span>apps, websites & brands
      </h1>
      <img className="home-banner" src={banner} alt="banner" />
    </div>
  );
};

export default Home;
