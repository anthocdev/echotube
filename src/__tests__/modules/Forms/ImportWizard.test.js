import React from "react";
import ReactDOM from "react-dom";
import ImportWizard from "../../../modules/containers/Forms/VideoImportWizard/ModalWindow";

/* @todo: set up basic video object for use in test */

it("Successfully renders", () => {
  const div = document.createElement("div");

  ReactDOM.render(<ImportWizard playlistId={1}></ImportWizard>, div);
});
