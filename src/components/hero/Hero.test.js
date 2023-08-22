import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import Hero from "./Hero";

describe("Hero Component", () => {
  it("opens the form when the primary button is clicked", () => {
    const initialState = {
      website: {
        formOpenState: false,
      },
    };

    const mockStore = configureMockStore();

    const store = mockStore(initialState);

    const { getByText } = render(
      <Provider store={store}>
        <Hero />
      </Provider>
    );

    const primaryButton = getByText("Tell me more!");
    fireEvent.click(primaryButton);

    const actions = store.getActions();
    const formOpenAction = actions.find(
      (action) => action.type === "website/formOpenHandler"
    );

    // expect(formOpenAction).toBeDefined();
    expect(formOpenAction.payload).toBe(true);
  });
});
