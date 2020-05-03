import React from "react";
import ReactDOM from "react-dom";
import HeaderBuild from "../../modules/header/headerBuild";
import { Provider } from "react-redux";
import store from "../../store/store";
import { BrowserRouter } from "react-router-dom";

/* @todo: set up basic video object for use in test */

describe("Header Module Testing", () => {
  it("Renders Successfully", () => {
    const div = document.createElement("div");

    ReactDOM.render(
      <BrowserRouter>
        <Provider store={store}>
          <HeaderBuild />
        </Provider>
      </BrowserRouter>,
      div
    );
  });
});
