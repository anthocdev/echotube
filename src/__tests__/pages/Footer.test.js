import React from "react";
import Footer from "../../modules/Footer";
import { Provider } from "react-redux";
import store from "../../store/store";
import { create, act } from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

describe("Footer Module Tests", () => {
  let root;

  it("Renders Without Crashing", async () => {
    act(() => {
      root = create(
        <Provider store={store}>
          <Footer />
        </Provider>
      );
    });
  });

  test("Renders Matches Snapshot", async () => {
    act(() => {
      root = create(
        <BrowserRouter>
          <Provider store={store}>
            <Footer />
          </Provider>
        </BrowserRouter>
      );
    });
    expect(root).toMatchSnapshot();
    console.log(root.toJSON());
  });
});
