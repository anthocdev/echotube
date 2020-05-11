import React from "react";
import ReactDOM from "react-dom";
import ContactPage from "../../modules/ContactPage";
import { Provider } from "react-redux";
import store from "../../store/store";

describe("Contact Page Tests", () => {
  it("Renders successfuly", () => {
    const div = document.createElement("div");

    ReactDOM.render(
      <Provider store={store}>
        <ContactPage />
      </Provider>,
      div
    );
  });
});
