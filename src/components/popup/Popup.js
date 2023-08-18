import React, { useEffect } from "react";
import "./Popup.css";

const Popup = ({ popupState, formValidState, firstName, openState }) => {
  const isMobileScreen = window.innerWidth <= 970;
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
      }, 30000000);
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

  const closePopup = () => {
    document.querySelector(".popup").classList.remove("open");
    document.querySelector(".popup").classList.remove("mobile");
    document.querySelector(".popup").classList.remove("mobile-form");
  };

  return (
    <React.Fragment>
      <div>
        {popupState === "entry" && (
          <div className="popup" data-mobile>
            <h2>
              {popupState === "entry" && "Hi, Welcome to Intuits AI Books"}
            </h2>
            <i
              style={{ cursor: "pointer" }}
              onClick={closePopup}
              className="fa-solid fa-x fa-lg"
            ></i>
          </div>
        )}
        {popupState === "not-interested" && (
          <div className="popup" data-mobile>
            <h2>"Can't win 'em all, maybe next time!"</h2>
            <i
              style={{ cursor: "pointer" }}
              onClick={closePopup}
              className="fa-solid fa-x fa-lg"
            ></i>
          </div>
        )}

        {openState && !formValidState && (
          <div className="popup" data-mobile-form>
            <h2>Fill out your details and lets get started!</h2>
            <i
              style={{ cursor: "pointer" }}
              onClick={closePopup}
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
      </div>
    </React.Fragment>
  );
};

export default Popup;
