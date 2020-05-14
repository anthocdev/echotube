import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { Provider } from "react-redux";
import store from "../store/store";
import { BrowserRouter } from "react-router-dom";

describe("Core App Module Tests", () => {
  it("Renders Successfully", () => {
    const div = document.createElement("div");

    ReactDOM.render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>,
      div
    );
  });
});
