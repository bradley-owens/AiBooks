import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ThemeToggle from "./ThemeToggle";
import { useActions } from "../../hooks/useActions";

jest.mock("../../hooks/useActions");

const mockStore = configureStore([]);
const initialState = {
  website: {
    theme: "light",
  },
};

describe("ThemeToggle Component", () => {
  it("changes the theme state in Redux when clicked", () => {
    const store = mockStore(initialState);

    useActions.mockReturnValue({
      switchTheme: jest.fn(),
    });

    const { getByTestId } = render(
      <Provider store={store}>
        <ThemeToggle />
      </Provider>
    );

    const toggleButton = getByTestId("theme-toggle-button");
    fireEvent.click(toggleButton);

    expect(useActions().switchTheme).toHaveBeenCalled();
  });
});
