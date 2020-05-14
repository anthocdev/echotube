import React from "react";
import { Provider } from "react-redux";
import store from "../../store/store";
import { create, act } from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import RulesPage from "../../modules/Rules";

describe("Rules Page", () => {
  let root;

  it("Renders Without Crashing", async () => {
    act(() => {
      root = create(
        <BrowserRouter>
          <Provider store={store}>
            <RulesPage />
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
            <RulesPage />
          </Provider>
        </BrowserRouter>
      );
    });
    expect(root).toMatchSnapshot();
  });
});
