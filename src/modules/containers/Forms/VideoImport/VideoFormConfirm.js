import React from "react";
import { reduxForm } from "redux-form";

const VideoFormConfirm = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div></div>
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Back
        </button>
        <button type="submit">Confirm</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "VideoForm",
  destroyOnUnmount: false
})(VideoFormConfirm);
