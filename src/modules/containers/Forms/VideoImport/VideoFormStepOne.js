import React from "react";
import { Field, reduxForm } from "redux-form";

const VideoFormStepOne = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Video Link</label>
        <Field
          name="videoLink"
          type="text"
          component="input"
          label="Video Link"
        />
      </div>
      <div>
        <button type="submit" className="next">
          Next
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "VideoForm",
  destroyOnUnmount: false
})(VideoFormStepOne);
