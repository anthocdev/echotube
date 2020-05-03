import React from "react";
import ReactDOM from "react-dom";
import RulesPage from "../../modules/Rules";
import { Provider } from "react-redux";
import store from "../../store/store";

describe("Rules Page Tests", () => {
  it("Renders successfuly", () => {
    const div = document.createElement("div");

    ReactDOM.render(
      <Provider store={store}>
        <RulesPage />
      </Provider>,
      div
    );
  });
});
