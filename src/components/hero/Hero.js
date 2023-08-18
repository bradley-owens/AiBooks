import React, { useState } from "react";
import Form from "../form/Form";
import "./Hero.css";
import Popup from "../popup/Popup";
import heroImg from "../../images/hero-img.png";
import heroBlob from "../../images/blob.png";
import dottedLine from "../../images/dotted-line.png";

const Hero = () => {
  const [openState, setOpenState] = useState(false);
  const [popupState, setPopupState] = useState("entry");
  const [formValidState, setFormValidState] = useState(false);
  const [firstName, setFirstName] = useState("");

  const popupHandler = (state, valid, firstName) => {
    setPopupState(state);
    setFormValidState(valid);
    setFirstName(firstName);
  };
  return (
    <main className="main-container">
      <Popup
        firstName={firstName}
        popupState={popupState}
        formValidState={formValidState}
        openState={openState}
      />

      {/* <img className="hero-blob" src={heroBlob} alt="hero blob" /> */}
      <img
        className={openState ? "hidden" : "hero-line"}
        src={dottedLine}
        alt="hero line"
      />

      <img
        className={openState ? "hidden" : "hero-img"}
        src={heroImg}
        alt="AI user"
      />

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
          <button
            onClick={() => {
              setOpenState(true);
              popupHandler(true);
            }}
            className="primary-button"
          >
            Tell me more!
          </button>
          <button
            onClick={() => {
              setOpenState(false);
              popupHandler("not-interested");
            }}
            className="secondary-button"
          >
            Not interested
          </button>
        </div>
      </div>
      <Form openState={openState} popupHandler={popupHandler} />
    </main>
  );
};

export default Hero;
