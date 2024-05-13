import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <div className="footer-links">
          <a href="/#">Home</a>
          •
          <a href="/#">About Us</a>
          •
          <a href="/#">Services</a>
          •
          <a href="/#">Employment</a>
          •
          <a href="/#">Contact Us</a>
        </div>
        <p style={{color: "rgb(68, 68, 68)"}}>Copyright © 2013.Kelly Wood Builder. All Right Reserved</p>
      </div>

      <p style={{color: "rgb(68, 68, 68)"}}>Dallas Website Design by Dallas Marketing Company Red Spot Design.</p>
    </footer>
  );
};

export default Footer;
