import React from "react";
import "./home.css";
import banner from "../../assets/illustration.svg";
import NavBar from "../../navbar/NavBar";
import Service from "../service/Service";
import About from "../about/About";

const Home = () => {
  return (
    <div className="container">
      <NavBar />
      <div className="home-container">
        <h1 className="home-title">
          <span className="color">We make </span>apps, websites & brands
        </h1>
        <img className="home-banner" src={banner} alt="banner" />
      </div>
      <Service />
      <About />
    </div>
  );
};

export default Home;
