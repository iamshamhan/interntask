import React from "react";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <h2>Apple</h2>
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Help</span>
          <span>About</span>
          <span>Contact</span>
        </div>
        <div className="footer-section-columns">
          <span>+94123456789</span>
          <span>support@iphone.com</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
