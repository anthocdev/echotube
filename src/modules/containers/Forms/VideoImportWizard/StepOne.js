//Parse Video
import React from "react";
import { Button, TextField } from "@material-ui/core";
class StepOne extends React.Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values } = this.props;
    return (
      <form>
        <TextField
          id="standard-basic"
          label="Video ID"
          onChange={this.props.handleChange("videoLink")}
        />
        <Button onClick={this.saveAndContinue}>Add Video</Button>
      </form>
    );
  }
}

export default StepOne;
