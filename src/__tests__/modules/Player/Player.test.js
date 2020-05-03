import React from "react";
import ReactDOM from "react-dom";
import Player from "../../../modules/containers/Player";
import { Provider } from "react-redux";
import store from "../../../store/store";

describe("Overall Player Module Testing", () => {
  it("Renders Successfully", () => {
    const div = document.createElement("div");

    ReactDOM.render(
      <Provider store={store}>
        <Player />
      </Provider>,
      div
    );
  });
});
