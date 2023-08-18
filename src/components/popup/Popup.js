import React, { useEffect } from "react";
import "./Popup.css";

const Popup = ({ popupState, formValidState, firstName, openState }) => {
  const isMobileScreen = window.innerWidth <= 970;

  const closePopup = () => {
    document.querySelector(".popup").classList.remove("open");
    document.querySelector(".popup").classList.remove("mobile");
    document.querySelector(".popup").classList.remove("mobile-form");
  };
  useEffect(() => {
    let popupTimeout;
    const popupElement = document.querySelector(".popup");
    const mobilePopups = document.querySelectorAll("[data-mobile]");
    const mobileFormPopups = document.querySelectorAll("[data-mobile-form]");

    if (popupState || formValidState) {
      if (isMobileScreen) {
        mobilePopups.forEach((popup) => popup.classList.add("mobile"));
        mobileFormPopups.forEach((popup) => popup.classList.add("mobile-form"));
      } else {
        popupElement.classList.add("open");
      }

      popupTimeout = setTimeout(() => {
        closePopup();
      }, 3000);
    } else {
      mobilePopups.forEach((popup) => {
        popup.classList.remove("mobile");
        popup.classList.remove("open");
        mobileFormPopups.forEach((popup) => {
          popup.classList.remove("mobile-form");
          popup.classList.remove("open");
        });
      });
      popupElement.classList.remove("open");
    }

    return () => {
      clearTimeout(popupTimeout);
    };
  }, [popupState, formValidState, isMobileScreen]);

  return (
    <React.Fragment>
      {popupState === "entry" && (
        <div
          className="popup"
          data-mobile
          onClick={closePopup}
          style={{ cursor: "pointer" }}
        >
          <h2>Hi, Welcome to Intuits AI Books</h2>
          <span className="close-button">X</span>
        </div>
      )}

      {popupState === "not-interested" && (
        <div
          className="popup"
          data-mobile
          onClick={closePopup}
          style={{ cursor: "pointer" }}
        >
          <h2>Can't win 'em all, maybe next time!</h2>
          <span className="close-button">X</span>
        </div>
      )}

      {openState && !formValidState && (
        <div className="popup" data-mobile-form>
          <h2>Fill out your details and lets get started!</h2>
          <i
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              e.stopPropagation();
              closePopup();
            }}
            className="fa-solid fa-x fa-lg"
          ></i>
        </div>
      )}

      {formValidState && (
        <div className="popup" data-mobile-form>
          <h2>
            {`Great to have you onboard, ${
              firstName.charAt(0).toUpperCase() + firstName.slice(1)
            }!`}
          </h2>
          <i
            style={{ cursor: "pointer" }}
            onClick={closePopup}
            className="fa-solid fa-x fa-lg"
          ></i>
        </div>
      )}
    </React.Fragment>
  );
};

export default Popup;
