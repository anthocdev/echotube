import React from "react";
import ReactDOM from "react-dom";
import GuidePage from "../../modules/Guide";
import { Provider } from "react-redux";
import store from "../../store/store";
import { create, act } from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

describe("Guide Page Tests", () => {
  let root;

  it("Renders Without Crashing", async () => {
    act(() => {
      root = create(
        <BrowserRouter>
          <Provider store={store}>
            <GuidePage />
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
            <GuidePage />
          </Provider>
        </BrowserRouter>
      );
    });
    expect(root).toMatchSnapshot();
  });
});
