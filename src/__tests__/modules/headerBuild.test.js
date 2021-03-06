import React from "react";
import ReactDOM from "react-dom";
import HeaderBuild from "../../modules/header/headerBuild";
import { Provider } from "react-redux";
import store from "../../store/store";
import { BrowserRouter } from "react-router-dom";

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
