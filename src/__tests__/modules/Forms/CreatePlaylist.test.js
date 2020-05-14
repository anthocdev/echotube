import React from "react";
import CreatePlaylist from "../../../modules/containers/Forms/PlaylistManagement/CreatePlaylist";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { create, act } from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

describe("Playlist Creation Module Test", () => {
  let root;

  it("Renders Without Crashing", async () => {
    act(() => {
      root = create(
        <Provider store={store}>
          <CreatePlaylist />
        </Provider>
      );
    });
  });

  test("Renders Matches Snapshot", async () => {
    act(() => {
      root = create(
        <BrowserRouter>
          <Provider store={store}>
            <CreatePlaylist />
          </Provider>
        </BrowserRouter>
      );
    });
    expect(root).toMatchSnapshot();
    console.log(root.toJSON());
  });
});
