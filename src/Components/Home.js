import React from "react";
import img1 from "../images/iphone 2.jpg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

function Home() {
  return (
    <div className="home" id="home">
      <Navbar />
      <div className="hero">
        <div className="hero-text">
    <h1 className="title">
            Get The New iPhone
          </h1>
          <p className="text">
            Best iPhone with good features and nice design.
            Works fast and good for everything you need
          </p>
          <button className="button" style={{ marginTop: '1rem' }}>
            Shop Now <FiArrowRight />
          </button>
        </div>
        <div className="hero-img">
          <img src={img1} alt="iPhone" />
        </div>
      </div>
    </div>
  );
}

export default Home;
