import React from "react";
import img2 from "../images/iphone 1.jpg";

function About() {
  var myImg = img2;
  return (
    <div className="about-section-container" id="about">
      <div className="about-section-image-container">
        <img src={myImg} alt="About" />
      </div>
      <div className="about-section-text-container">
    <p className="primary-subheading">Apple</p>
        <h1 className="primary-heading">
          Best Phone In Your Hand
        </h1>
        <p className="primary-text">
          New iPhone has good chip, nice camera, and battery lasts long.
          Easy to use and fits good in your hand.
        </p>
        <p className="primary-text">
          Screen looks nice and phone works fast
          iPhone is the best phone you can get.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default About;
