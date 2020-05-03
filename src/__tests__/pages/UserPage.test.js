import React from "react";
import ReactDOM from "react-dom";
import UserPage from "../../modules/UserPage";
import { Provider } from "react-redux";
import store from "../../store/store";

describe("User Page Tests", () => {
  beforeEach(() => {});

  it("Renders successfuly", () => {
    const div = document.createElement("div");

    ReactDOM.render(
      <Provider store={store}>
        <UserPage />
      </Provider>,
      div
    );
  });
});
