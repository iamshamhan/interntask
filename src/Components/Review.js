import React from "react";
import userImg from "../images/logo face icon.jpg";


function Review() {
  return (
    <div className="work" id="reviews">
      <div className="work-top">
    <p className="subtitle">Apple</p>
        <h1 className="title">What People Say</h1>
    <p className="text">
          See what other people say about iPhone. They are happy with it.
        </p>
      </div>
    <div className="review">
<img src={userImg} alt="Customer" />
        <p>
          "Best phone I ever had! Camera is really good, battery lasts whole day, and phone is very fast. I tell everyone to buy it!"
        </p>
    
        <h2>Ahamed</h2>
      </div>
    </div>
  );
}

export default Review;
