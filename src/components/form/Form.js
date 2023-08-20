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
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");

  const submitFormHandler = (event) => {
    event.preventDefault();
    dispatch(submitForm({ firstName, lastName, email }));
  };

  useEffect(() => {
    if (formOpenState) {
      setTimeout(() => {
        document.querySelector(".container").classList.add("open");
      }, 300);
    } else {
      setTimeout(() => {
        document.querySelector(".container").classList.remove("open");
      }, 10);
    }
  }, [formOpenState]);

  return (
    <div className={"container"}>
      <h1>Learn More about AI-Books</h1>
      <form onSubmit={submitFormHandler}>
        <label>First Name</label>
        <input
          className={firstNameError ? "error" : ""}
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label>Last Name</label>
        <input
          className={lastNameError ? "error" : ""}
          type="text"
          value={lastName}
          onChange={(e) => setLastname(e.target.value)}
        />
        <label>Email Address</label>
        <input
          className={emailError ? "error" : ""}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
