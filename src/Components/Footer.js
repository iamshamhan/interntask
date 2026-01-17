import React from "react";
import { FaTwitter  } from "react-icons/fa";
import { BsYoutube  } from "react-icons/bs";
import { FaFacebook  } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <div className="logo">
          <h2>Apple</h2>
        </div>
        <div className="icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><BsYoutube /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        </div>
      </div>
      <div className="footer-right">
        <div className="cols">
          <span>Help</span>
          <span>About</span>
          <span>Contact</span>
        </div>
        <div className="cols">
          <span>+94123456789</span>
          <span>support@iphone.com</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
