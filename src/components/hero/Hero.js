import React from "react";
import Form from "../form/Form";
import Popup from "../popup/Popup";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useDispatch } from "react-redux";
import { useActions } from "../../hooks/useActions";

import "./Hero.css";
import heroImg2 from "../../images/hero-img.png";
import dottedLine from "../../images/dotted-line.png";

const Hero = () => {
  const dispatch = useDispatch();
  const { formOpenState } = useAppSelector((state) => state.website);
  const { formOpenHandler, setPopupType } = useActions();
  // const formOpenState = useSelector((state) => state.website.formOpenState);

  return (
    <main className="main-container">
      <Popup />
      <img
        className={formOpenState ? "hidden" : "hero-line"}
        src={dottedLine}
        alt="hero line"
      />

      <img
        className={formOpenState ? "hidden" : "hero-img"}
        src={heroImg2}
        alt="AI user"
      />

      <div className={`content ${formOpenState ? "slide" : ""}`}>
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
              dispatch(formOpenHandler(true));
              dispatch(setPopupType("interested"));
            }}
            className="primary-button"
          >
            Tell me more!
          </button>
          <button
            onClick={() => {
              dispatch(formOpenHandler(false));
              dispatch(setPopupType("not-interested"));
            }}
            className="secondary-button"
          >
            Not interested
          </button>
        </div>
      </div>
      <Form />
    </main>
  );
};

export default Hero;
