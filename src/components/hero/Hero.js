import React, { useState } from "react";
import Form from "../form/Form";
import heroImg from "../../images/hero.jpg";
import "./Hero.css";

const Hero = () => {
  const [openState, setOpenState] = useState(false);

  const openFormHandler = () => {
    setOpenState(true);
  };
  return (
    <main className="main-container">
      <div className={`content ${openState ? "slide" : ""}`}>
        <h1>
          Unlock the <span>Power of AI</span>
        </h1>
        <p>
          Transform your bookkeeping journey with AI-Books! Seamlessly
          integrated into QuickBooks, it automates data entry, categorization,
          and report generation. Experience smarter bookkeeping and unlock vital
          business insights.
        </p>
        <div className="button-container">
          <button onClick={openFormHandler} className="primary-button">
            Tell me more!
          </button>
          <button className="secondary-button">Not interested</button>
        </div>
      </div>

      <Form openState={openState} />
      {/* <img
        style={{
          position: "absolute",
          top: 200,
          right: 90,
          width: "20rem",
          height: "20rem",
          borderRadius: "1000px",
        }}
        src={heroImg}
        alt="ai image"
      /> */}
    </main>
  );
};

export default Hero;
