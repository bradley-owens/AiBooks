import React, { useState, useEffect } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useDispatch } from "react-redux";
import { useActions } from "../../hooks/useActions";
import "./Form.css";

const Form = () => {
  const dispatch = useDispatch();
  const { formOpenState, firstNameError, lastNameError, emailError } =
    useAppSelector((state) => state.website);
  const { submitForm } = useActions();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const submitFormHandler = (event) => {
    event.preventDefault();
    dispatch(submitForm({ firstName, lastName, email }));
  };

  useEffect(() => {
    // Resets form inputs
    if (!firstNameError && !lastNameError && !emailError) {
      setFirstName("");
      setLastName("");
      setEmail("");
    }

    // Timeout to change class for smoother transition of opening and closing form
    if (formOpenState) {
      setTimeout(() => {
        document.querySelector(".container").classList.add("open");
      }, 300);
    } else {
      setTimeout(() => {
        document.querySelector(".container").classList.remove("open");
      }, 10);
    }
  }, [formOpenState, firstNameError, lastNameError, emailError]);

  return (
    <section className={"container"}>
      <h1>Register</h1>
      <form onSubmit={submitFormHandler}>
        <div className="input-container">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            className={firstNameError ? "error" : ""}
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            className={lastNameError ? "error" : ""}
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            className={emailError ? "error" : ""}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Form;
