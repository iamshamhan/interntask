import React from "react";
import img2 from "../images/iphone 1.jpg";

function About() {
  var myImg = img2;
  return (
    <div className="about" id="about">
      <div className="about-img">
        <img src={myImg} alt="About" />
      </div>
      <div className="about-text">
    <p className="subtitle">Apple</p>
        <h1 className="title">
          Best Phone In Your Hand
        </h1>
        <p className="text">
          New iPhone has good chip, nice camera, and battery lasts long.
          Easy to use and fits good in your hand.
        </p>
        <p className="text">
          Screen looks nice and phone works fast
          iPhone is the best phone you can get.
        </p>
        <div className="about-btn">
          <button className="button">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default About;
