import React from "react";
import ReactDOM from "react-dom";
import CreatePlaylist from "../../../modules/containers/Forms/PlaylistManagement/CreatePlaylist";
import { Provider } from "react-redux";
import store from "../../../store/store";

describe("Create Playlist Module Testing", () => {
  it("Renders successfuly", () => {
    const div = document.createElement("div");

    ReactDOM.render(
      <Provider store={store}>
        <CreatePlaylist />
      </Provider>,
      div
    );
  });
});
