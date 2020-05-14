import React from "react";
import { Provider } from "react-redux";
import store from "../../store/store";
import { create, act } from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import PlaylistVideosPage from "../../modules/PlaylistVideosPage";

/* Playlist Listing tested with specific params id 1 */

describe("Playlist Videos Listing Page", () => {
  let root;

  it("Renders Without Crashing", async () => {
    act(() => {
      root = create(
        <BrowserRouter>
          <Provider store={store}>
            <PlaylistVideosPage match={{ params: { _id: 1 } }} />
          </Provider>
        </BrowserRouter>
      );
    });
  });

  test("Renders Matches Snapshot", async () => {
    act(() => {
      root = create(
        <BrowserRouter>
          <Provider store={store}>
            <PlaylistVideosPage match={{ params: { _id: 1 } }} />
          </Provider>
        </BrowserRouter>
      );
    });
    expect(root).toMatchSnapshot();
  });
});
