import React from "react";
import userImg from "../images/logo face icon.jpg";
import { AiFillStar } from "react-icons/ai";

function Review() {
  return (
    <div className="work-section-wrapper" id="reviews">
      <div className="work-section-top">
    <p className="primary-subheading">Apple</p>
        <h1 className="primary-heading">What People Say</h1>
    <p className="primary-text">
          See what other people say about iPhone. They are happy with it.
        </p>
      </div>
    <div className="review-section-bottom">
<img src={userImg} alt="Customer" />
        <p>
          "Best phone I ever had! Camera is really good, battery lasts whole day, and phone is very fast. I tell everyone to buy it!"
        </p>
        <div className="review-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Ahamed</h2>
      </div>
    </div>
  );
}

export default Review;
