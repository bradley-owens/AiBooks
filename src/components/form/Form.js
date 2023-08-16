import React, { useState } from "react";

const Form = () => {
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
    }
  };

  return (
    <div>
      <h1>Get More Details about AI-Books</h1>
      <p>
        Fill out the form below, and our team will provide you with
        comprehensive information about how AI-Books can transform your
        bookkeeping process.
      </p>
      <form onSubmit={submitFormHandler}>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
        />
        <input
          value={lastName}
          onChange={(e) => setLastname(e.target.value)}
          placeholder="Last Name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <button type="submit">Submit</button>
        {formError && <p style={{ color: "red" }}>{formError}</p>}
      </form>
    </div>
  );
};

export default Form;
