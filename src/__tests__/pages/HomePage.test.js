import React from "react";
import ReactDOM from "react-dom";
import HomePage from "../../modules/Home";
import { Provider } from "react-redux";
import store from "../../store/store";

describe("Home Page Tests", () => {
  beforeEach(() => {});

  it("Renders successfuly", () => {
    const div = document.createElement("div");

    ReactDOM.render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
      div
    );
  });
});
