import React from "react";

function Contact() {
  return (
    <div className="contact-page-wrapper" id="contact">
      <h1 className="primary-heading">Got Questions?</h1>
        <h1 className="primary-heading">We Can Help</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  );
}

export default Contact;
