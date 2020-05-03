import React from "react";
import ReactDOM from "react-dom";
import YoutubePlayer from "../../../modules/containers/Player/YoutubePlayer";
import { Provider } from "react-redux";
import store from "../../../store/store";

/* @todo: set up basic video object for use in test */

describe("YouTube Player Module Testing", () => {
  it("Renders Successfully", () => {
    const div = document.createElement("div");

    ReactDOM.render(
      <Provider store={store}>
        <YoutubePlayer />
      </Provider>,
      div
    );
  });
});
