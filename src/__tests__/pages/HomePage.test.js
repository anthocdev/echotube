import React from "react";
import ReactDOM from "react-dom";
import HomePage from "../../modules/Home";
import { Provider } from "react-redux";
import store from "../../store/store";
import { BrowserRouter } from "react-router-dom";

describe("Home Page Tests", () => {
  beforeEach(() => {});

  it("Renders successfuly", () => {
    const div = document.createElement("div");

    ReactDOM.render(
      <BrowserRouter>
        <Provider store={store}>
          <HomePage />
        </Provider>
      </BrowserRouter>,
      div
    );
  });
});
