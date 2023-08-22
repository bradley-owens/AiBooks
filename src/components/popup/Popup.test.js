import React from "react";
import { render } from "@testing-library/react";
import { useSelector } from "react-redux";

import Popup from "./Popup";

jest.mock("react-redux");

describe("Popup Component", () => {
  it("renders the entry popup content", () => {
    useSelector.mockReturnValue({
      popupType: "entry",
      formSubmitted: false,
      firstName: "",
    });

    const { getByText } = render(<Popup />);
    const popupContent = getByText("Hi, Welcome to Intuits AI Books");
    expect(popupContent).toBeInTheDocument();
  });

  it("renders the not-interested popup content", () => {
    useSelector.mockReturnValue({
      popupType: "not-interested",
      formSubmitted: false,
      firstName: "",
    });

    const { getByText } = render(<Popup />);
    const popupContent = getByText("Can't win 'em all, maybe next time!");
    expect(popupContent).toBeInTheDocument();
  });

  it("renders the interested popup content", () => {
    useSelector.mockReturnValue({
      popupType: "interested",
      formSubmitted: false,
      firstName: "",
    });

    const { getByText } = render(<Popup />);
    const popupContent = getByText(
      "Fill out your details and lets get started!"
    );
    expect(popupContent).toBeInTheDocument();
  });

  it("renders the valid popup content", () => {
    useSelector.mockReturnValue({
      popupType: "valid",
      formSubmitted: true,
      firstName: "Isabelle",
    });

    const { getByText } = render(<Popup />);
    const popupContent = getByText("Great to have you onboard, Isabelle!");
    expect(popupContent).toBeInTheDocument();
  });

  it("renders the invalid popup content", () => {
    useSelector.mockReturnValue({
      popupType: "invalid",
      formSubmitted: true,
      firstName: "",
    });

    const { getByText } = render(<Popup />);
    const popupContent = getByText("Please put in a valid name and email");
    expect(popupContent).toBeInTheDocument();
  });
});
