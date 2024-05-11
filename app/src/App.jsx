import React from "react";

import Navbar from "./component/navbar/navbar";
import Footer from "./component/footer/footer";

import Header from "./assets/carousel.jpg";

import healthcareImg from "./assets/healtcare.jpg";
import generalImg from "./assets/general.jpg";
import retailImg from "./assets/retail.jpg";
import { IoPeopleSharp } from "react-icons/io5";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <div className="diagonal-lines"></div>
        <Navbar />
        <header>
          <img className="header-img" src={Header} alt="" />
        </header>

        <section className="home-section">
          <div className="home-content">
            <div className="cta-img">
              <img src={healthcareImg} alt="" />
              <img src={generalImg} alt="" />
              <img src={retailImg} alt="" />
            </div>
            <div className="home-section-desc">
              <h3>
                Welcome to{" "}
                <span className="span-colored">Kelly Wood Builder</span>
              </h3>
              <hr
                style={{
                  background: "black",
                  height: "2px",
                }}
              />
              <p>
                Kelly Wood Builder is a General Contractor founded in Amarillo,
                Texas and now with offices in McKinney, Texas. We operate
                throughout the Midwest region. Started in 1977, we have come to
                specialize in healthcare and retail construction, but remain
                very active in all types of projects. Our alliances with
                multiple architectural firms have paved the way to success in
                Design/Build, Construction Management, and Fast Track
                construction.
              </p>
              <a href="" className="span-colored">
                read more about us ▶
              </a>
            </div>
          </div>

          <div className="contact-us">
            <div className="contact-header">
              <IoPeopleSharp size={35} />
              <h2 className="span-colored">Contact Form</h2>
            </div>

            <input type="text" placeholder="Name:" />
            <input type="text" placeholder="Email:" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message:"
            ></textarea>
            <div className="form-button-container">
              <button className="form-button">SEND ▶</button>
            </div>
          </div>
        </section>

        <div className="diagonal-lines"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
