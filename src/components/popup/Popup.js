import React, { useEffect } from "react";
import "./Popup.css";

const Popup = ({ popupState, formValidState, firstName }) => {
  useEffect(() => {
    if (popupState) {
      setTimeout(() => {
        document.querySelector(".popup").classList.add("open");
      }, 300);
    } else {
      setTimeout(() => {
        document.querySelector(".popup").classList.remove("open");
      }, 300);
    }
  }, [popupState]);

  const closePopup = () => {
    document.querySelector(".popup").classList.remove("open");
  };

  return (
    <div className="popup">
      <h2>
        {formValidState
          ? `Great to have you onboard, ${
              firstName.charAt(0).toUpperCase() + firstName.slice(1)
            }!`
          : "Can`t win `em all, maybe next time!"}
      </h2>
      <i
        style={{ cursor: "pointer" }}
        onClick={closePopup}
        class="fa-solid fa-x fa-lg"
      ></i>
    </div>
  );
};

export default Popup;
