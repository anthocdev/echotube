import ImportWizard from "../../../modules/containers/Forms/VideoImportWizard/ModalWindow";
import React from "react";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { create, act } from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

describe("Import Wizard Module Test", () => {
  let root;

  it("Renders Without Crashing", async () => {
    act(() => {
      root = create(
        <Provider store={store}>
          <ImportWizard playlistId={1} />
        </Provider>
      );
    });
  });

  test("Renders Matches Snapshot", async () => {
    act(() => {
      root = create(
        <BrowserRouter>
          <Provider store={store}>
            <ImportWizard playlistId={1} />
          </Provider>
        </BrowserRouter>
      );
    });
    expect(root).toMatchSnapshot();
    console.log(root.toJSON());
  });
});
