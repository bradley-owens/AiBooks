import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./Popup.css";

const Popup = () => {
  const { formSubmitted, firstName, popupType } = useSelector(
    (state) => state.website
  );
  const [showPopup, setShowPopup] = useState(false);
  const isMobileScreen = window.innerWidth <= 970;

  useEffect(() => {
    // Timer to close popup after 3 seconds
    let popupTimeout;
    if (popupType || formSubmitted) {
      setShowPopup(true);

      popupTimeout = setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }

    return () => {
      clearTimeout(popupTimeout);
    };
  }, [popupType, formSubmitted]);

  const generatePopupContent = () => {
    switch (popupType) {
      case "entry":
        return <h2>Hi, Welcome to Intuits AI Books</h2>;
      case "not-interested":
        return <h2>Can't win 'em all, maybe next time!</h2>;
      case "interested":
        return <h2>Fill out your details and lets get started!</h2>;
      case "valid":
        return (
          <h2>
            {`Great to have you onboard, ${
              firstName.charAt(0).toUpperCase() + firstName.slice(1)
            }!`}
          </h2>
        );
      case "invalid":
        return <h2>Please put in a valid name and email</h2>;
      default:
        return null;
    }
  };

  return (
    <React.Fragment>
      {!isMobileScreen && (
        <div
          style={{ cursor: "pointer", zIndex: 50 }}
          onClick={() => setShowPopup(false)}
          className={`popup ${showPopup ? "open" : ""}`}
        >
          {generatePopupContent()}
          {popupType && (
            <i
              onClick={() => setShowPopup(false)}
              className="fa-solid fa-x fa-lg"
            ></i>
          )}
        </div>
      )}

      {isMobileScreen && (
        <div
          style={{ cursor: "pointer", zIndex: 50 }}
          onClick={() => setShowPopup(false)}
          className={`popup ${
            showPopup
              ? popupType === "invalid" || popupType === "interested"
                ? "mobile-form"
                : "mobile"
              : ""
          }`}
        >
          {generatePopupContent()}
          {popupType && (
            <i
              onClick={() => setShowPopup(false)}
              className="fa-solid fa-x fa-lg"
            ></i>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default Popup;
