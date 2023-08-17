import React, { useState } from "react";
import Form from "../form/Form";
import "./Hero.css";
import Popup from "../popup/Popup";

const Hero = () => {
  const [openState, setOpenState] = useState(false);
  const [popupState, setPopupState] = useState();
  const [formValidState, setFormValidState] = useState(false);
  const [firstName, setFirstName] = useState("test");

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
              popupHandler(false);
            }}
            className="primary-button"
          >
            Tell me more!
          </button>
          <button
            onClick={() => {
              setOpenState(false);
              popupHandler(true);
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
