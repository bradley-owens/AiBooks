import React, { useState, useEffect } from "react";
import "./Form.css";
const Form = ({ openState }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState("");

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const validateName = (name) => {
    const namePattern = /^[A-Za-z]+$/;
    return namePattern.test(name);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    const validationRules = [
      {
        check: validateName(firstName),
        message: "First name must contain only letters.",
      },
      {
        check: validateName(lastName),
        message: "Last name must contain only letters.",
      },
      {
        check: validateEmail(email),
        message: "Please provide a valid email address.",
      },
    ];

    const errors = validationRules
      .filter((rule) => !rule.check)
      .map((rule) => rule.message);

    if (errors.length > 0) {
      setFormError(errors.join(" "));
    } else {
      setFormError("Succesfully Validated");
      setFirstName("");
      setLastname("");
      setEmail("");
    }
  };

  useEffect(() => {
    if (openState) {
      setTimeout(() => {
        document.querySelector(".container").classList.add("open");
      }, 100);
    }
  }, [openState]);

  return (
    <div className="container">
      <h1>Learn More about AI-Books</h1>
      <form onSubmit={submitFormHandler}>
        <label>First Name</label>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label>Last Name</label>
        <input value={lastName} onChange={(e) => setLastname(e.target.value)} />
        <label>Email Address</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <button type="submit">Submit</button>
        {formError && <p style={{ color: "red" }}>{formError}</p>}
      </form>
    </div>
  );
};

export default Form;
