import React from "react";
import img1 from "../images/iphone 2.jpg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

function Home() {
  return (
    <div className="home-container" id="home">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-text-section">
    <h1 className="primary-heading">
            Get The New iPhone
          </h1>
          <p className="primary-text">
            Best iPhone with good features and nice design.
            Works fast and good for everything you need
          </p>
          <button className="secondary-button" style={{ marginTop: '1rem' }}>
            Shop Now <FiArrowRight />
          </button>
        </div>
        <div className="home-image-section">
          <img src={img1} alt="iPhone" />
        </div>
      </div>
    </div>
  );
}

export default Home;
