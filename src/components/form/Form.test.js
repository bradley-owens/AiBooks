import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { websiteReducer } from "../../store/websiteSlice";
import Form from "./form";

const mockStore = configureStore({
  reducer: {
    website: websiteReducer,
  },
});

describe("Form Component", () => {
  it("renders the form with input fields and a submit button", () => {
    const { getByLabelText, getByText } = render(
      <Provider store={mockStore}>
        <Form />
      </Provider>
    );

    const firstNameInput = getByLabelText("First Name");
    const lastNameInput = getByLabelText("Last Name");
    const emailInput = getByLabelText("Email Address");
    const submitButton = getByText("Submit");

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("handles form submission with valid data", () => {
    const { getByText, getByLabelText } = render(
      <Provider store={mockStore}>
        <Form />
      </Provider>
    );

    const firstNameInput = getByLabelText("First Name");
    const lastNameInput = getByLabelText("Last Name");
    const emailInput = getByLabelText("Email Address");
    const submitButton = getByText("Submit");

    fireEvent.change(firstNameInput, { target: { value: "Isabelle" } });
    fireEvent.change(lastNameInput, { target: { value: "Osland" } });
    fireEvent.change(emailInput, { target: { value: "issy@hotmail.com" } });
    fireEvent.click(submitButton);

    const newState = mockStore.getState().website;
    expect(newState.formSubmitted).toBe(true);
    expect(newState.popupType).toBe("valid");
    expect(newState.firstNameError).toBe(false);
    expect(newState.lastNameError).toBe(false);
    expect(newState.emailError).toBe(false);
  });

  it("handles form submission with invalid data", () => {
    const { getByText, getByLabelText } = render(
      <Provider store={mockStore}>
        <Form />
      </Provider>
    );

    const firstNameInput = getByLabelText("First Name");
    const lastNameInput = getByLabelText("Last Name");
    const emailInput = getByLabelText("Email Address");
    const submitButton = getByText("Submit");

    fireEvent.change(firstNameInput, { target: { value: "Invalid123" } });
    fireEvent.change(lastNameInput, { target: { value: "123" } });
    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    fireEvent.click(submitButton);

    const newState = mockStore.getState().website;
    expect(newState.formSubmitted).toBe(true);
    expect(newState.popupType).toBe("invalid");
    expect(newState.firstNameError).toBe(true);
    expect(newState.lastNameError).toBe(true);
    expect(newState.emailError).toBe(true);
  });
});
