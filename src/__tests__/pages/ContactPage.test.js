import React from "react";
import ContactPage from "../../modules/ContactPage";
import { Provider } from "react-redux";
import store from "../../store/store";
import { create, act } from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

describe("Contact Page Tests", () => {
  let root;

  it("Renders Without Crashing", async () => {
    act(() => {
      root = create(
        <BrowserRouter>
          <Provider store={store}>
            <ContactPage />
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
            <ContactPage />
          </Provider>
        </BrowserRouter>
      );
    });
    expect(root).toMatchSnapshot();
  });
});
