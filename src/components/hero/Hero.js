import React from "react";
import Form from "../form/Form";
import Popup from "../popup/Popup";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useDispatch } from "react-redux";
import { useActions } from "../../hooks/useActions";
import heroImg from "../../images/hero-img.png";
import dottedLine from "../../images/dotted-line.png";
import "./Hero.css";

const Hero = () => {
  const dispatch = useDispatch();
  const { formOpenState } = useAppSelector((state) => state.website);
  const { formOpenHandler, setPopupType } = useActions();

  return (
    <main className="main-container">
      <Popup />
      <img
        className={formOpenState ? "hidden" : "hero-line"}
        src={dottedLine}
        alt="AI-Books comms line"
      />

      <img
        className={formOpenState ? "hidden" : "hero-img"}
        src={heroImg}
        alt="AI-Books Assistant"
      />

      <section className={`content ${formOpenState ? "slide" : ""}`}>
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
      </section>
      <Form />
    </main>
  );
};

export default Hero;
