import React from "react";

import { FaHouseChimney } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TbPhoneFilled } from "react-icons/tb";

import logo from "../../assets/logo.jpg";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>

      <div className="nav-content">
        <div className="nav-contact">
          <div>
            <FaHouseChimney color="#146b30" />
            <p>616 S. Jackson Amarillo, TX 79101</p>
          </div>

          <p>|</p>

          <div>
            <MdEmail color="#146b30" />
            <p>info@kellywood.com</p>
          </div>
          <p>|</p>

          <div>
            <TbPhoneFilled color="#146b30" />
            <p>806.379.9696</p>
          </div>
        </div>

        <div className="nav-links">
          <button className="nav-button">Home</button>
          <button className="nav-button">About Us</button>
          <button className="nav-button">Services</button>
          <button className="nav-button">Employment</button>
          <button className="nav-button">Contact Us</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
