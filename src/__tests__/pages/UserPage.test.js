import React from "react";
import UserPage from "../../modules/UserPage";
import { Provider } from "react-redux";
import store from "../../store/store";
import { create, act } from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

describe("User Page Tests", () => {
  let root;

  it("Renders Without Crashing", async () => {
    act(() => {
      root = create(
        <Provider store={store}>
          <UserPage />
        </Provider>
      );
    });
  });

  test("Renders Matches Snapshot", async () => {
    act(() => {
      root = create(
        <BrowserRouter>
          <Provider store={store}>
            <UserPage />
          </Provider>
        </BrowserRouter>
      );
    });
    expect(root).toMatchSnapshot();
    console.log(root.toJSON());
  });
});
