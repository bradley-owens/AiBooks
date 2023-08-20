// import React, { useEffect, useRef } from "react";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { formActions } from "../form/FormSlice";
// import "./Popup.css";

// const Popup = () => {
//   const dispatch = useDispatch();

//   const formSubmitted = useSelector((state) => state.form.formSubmitted);
//   const firstName = useSelector((state) => state.form.firstName);
//   const popupType = useSelector((state) => state.form.popupType);
//   const formOpenState = useSelector((state) => state.form.formOpenState);
//   const isMobileScreen = window.innerWidth <= 970;

//   const closePopup = () => {
//     document.querySelector(".popup").classList.remove("open");
//     document.querySelector(".popup").classList.remove("mobile");
//     document.querySelector(".popup").classList.remove("mobile-form");
//   };

//   useEffect(() => {
//     let popupTimeout;
//     const popupElement = document.querySelector(".popup");
//     const mobilePopups = document.querySelectorAll("[data-mobile]");
//     const mobileFormPopups = document.querySelectorAll("[data-mobile-form]");

//     if (popupType || formSubmitted) {
//       if (isMobileScreen) {
//         mobilePopups.forEach((popup) => popup.classList.add("mobile"));
//         mobileFormPopups.forEach((popup) => popup.classList.add("mobile-form"));
//       } else {
//         popupElement.classList.add("open");
//       }

//       popupTimeout = setTimeout(() => {
//         closePopup();
//       }, 3000);

//       popupTimeout = setTimeout(() => {
//         dispatch(formActions.setPopupType(null));
//       }, 4000);
//     } else {
//       mobilePopups.forEach((popup) => {
//         popup.classList.remove("mobile");
//         popup.classList.remove("open");
//         mobileFormPopups.forEach((popup) => {
//           popup.classList.remove("mobile-form");
//           popup.classList.remove("open");
//         });
//       });
//       popupElement.classList.remove("open");
//     }

//     return () => {
//       clearTimeout(popupTimeout);
//     };
//   }, [popupType, formSubmitted, isMobileScreen, formOpenState]);

//   return (
//     <React.Fragment>
//       {popupType === "entry" && (
//         <div
//           className="popup"
//           data-mobile
//           onClick={closePopup}
//           style={{ cursor: "pointer" }}
//         >
//           <h2>Hi, Welcome to Intuits AI Books</h2>
//           <i
//             style={{ cursor: "pointer" }}
//             onClick={closePopup}
//             className="fa-solid fa-x fa-lg"
//           ></i>
//         </div>
//       )}

//       {popupType === "not-interested" && (
//         <div
//           className="popup"
//           data-mobile
//           onClick={closePopup}
//           style={{ cursor: "pointer" }}
//         >
//           <h2>Can't win 'em all, maybe next time!</h2>
//           <i
//             style={{ cursor: "pointer" }}
//             onClick={closePopup}
//             className="fa-solid fa-x fa-lg"
//           ></i>
//         </div>
//       )}

//       {popupType === "interested" && (
//         <div className="popup" data-mobile-form>
//           <h2>Fill out your details and lets get started!</h2>
//           <i
//             style={{ cursor: "pointer" }}
//             onClick={closePopup}
//             className="fa-solid fa-x fa-lg"
//           ></i>
//         </div>
//       )}

//       {popupType === "valid" && (
//         <div className="popup" data-mobile-form>
//           <h2>
//             {`Great to have you onboard, ${
//               firstName.charAt(0).toUpperCase() + firstName.slice(1)
//             }!`}
//           </h2>
//           <i
//             style={{ cursor: "pointer" }}
//             onClick={closePopup}
//             className="fa-solid fa-x fa-lg"
//           ></i>
//         </div>
//       )}

//       {popupType === "invalid" && (
//         <div className="popup" data-mobile-form>
//           <h2>Please put in a valid name and email</h2>
//           <i
//             style={{ cursor: "pointer" }}
//             onClick={closePopup}
//             className="fa-solid fa-x fa-lg"
//           ></i>
//         </div>
//       )}

//       {popupType === null && (
//         <div className="popup" data-mobile>
//           <h2></h2>
//         </div>
//       )}
//     </React.Fragment>
//   );
// };

// export default Popup;

import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useDispatch } from "react-redux";
import { useActions } from "../../hooks/useActions";
import "./Popup.css";

const Popup = () => {
  const dispatch = useDispatch();
  const { setPopupType } = useActions();
  const { formSubmitted, firstName, popupType } = useAppSelector(
    (state) => state.website
  );

  // const formSubmitted = useSelector((state) => state.website.formSubmitted);
  // const firstName = useSelector((state) => state.website.firstName);
  // const popupType = useSelector((state) => state.website.popupType);
  const isMobileScreen = window.innerWidth <= 970;

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    let popupTimeout;

    if (popupType || formSubmitted) {
      setShowPopup(true);

      popupTimeout = setTimeout(() => {
        setShowPopup(false);
        dispatch(setPopupType(null));
      }, 4000000);
    }

    return () => {
      clearTimeout(popupTimeout);
    };
  }, [popupType, formSubmitted, dispatch]);

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
          style={{ cursor: "pointer" }}
          onClick={() => setShowPopup(false)}
          className={`popup ${showPopup ? "open" : ""}`}
        >
          {showPopup && generatePopupContent()}
          {/* <h2 style={{ cursor: "pointer" }} onClick={() => setShowPopup(false)}>
            X
          </h2> */}
        </div>
      )}

      {isMobileScreen && (
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setShowPopup(false)}
          className={`popup ${
            showPopup
              ? popupType === "valid" ||
                popupType === "invalid" ||
                popupType === "interested"
                ? "mobile-form"
                : "mobile"
              : ""
          }`}
        >
          {showPopup && generatePopupContent()}
          {/* <h2 style={{ cursor: "pointer" }} onClick={() => setShowPopup(false)}>
            X
          </h2> */}
        </div>
      )}
    </React.Fragment>
  );
};

export default Popup;
