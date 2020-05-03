import React from "react";
import ReactDOM from "react-dom";
import UserPlaylistsPage from "../../modules/UserPlaylistsPage";
import { Provider } from "react-redux";
import store from "../../store/store";

describe("User Playlist Page Tests", () => {
  it("Renders successfuly", () => {
    const div = document.createElement("div");

    ReactDOM.render(
      <Provider store={store}>
        <UserPlaylistsPage />
      </Provider>,
      div
    );
  });
});
