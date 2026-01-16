import React from "react";
import img3 from "../images/customize.png";
import img4 from "../images/choose model.jpg";
import img5 from "../images/delivery icon.jpg";

function Work() {
  var firstImg = img3;
  var secondImg = img4;
  var thirdImg = img5;
  return (
    <div className="work-section-wrapper" id="work">
      <div className="work-section-top">
        <p className="primary-subheading">Apple</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Getting new iPhone is easy. Just follow these steps and we send it to your home.
        </p>
      </div>
      <div className="work-section-bottom">
        <div className="work-section-info">
          <div>
            <img src={firstImg} alt=""/>
          </div>
          <h2>Pick Your iPhone</h2>
          <p>Choose which iPhone model you want. We have many options for you.</p>
        </div>
        <div className="work-section-info">
          <div>
            <img src={secondImg} alt=""/>
          </div>
            <h2>Choose Storage & Color</h2>
          <p>Pick how much storage you need and what color you like. Add cases or other things if you want.</p>
        </div>
        <div className="work-section-info">
          <div>
            <img src={thirdImg} alt=""/>
          </div>
          <h2>We Deliver Fast</h2>
          <p>We send your iPhone to you quick and safe. Free shipping and we help you set it up.</p>
        </div>
      </div>
    </div>
  );
}

export default Work;
