import React from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

class VideoForm extends React.Component {
  state = {
    step: 1,
    videoLink: "",
    videoData: "",
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (input) => (event) => {
    this.setState({ [input]: event.target.value });
  };

  render() {
    const { step } = this.state;
    const { videoLink, videoData } = this.state;
    const { playlistId } = this.props;
    const values = { videoLink, videoData, playlistId };

    switch (step) {
      case 1:
        {
          console.log("PLAYLIST ID IS" + playlistId);
        }
        return (
          <StepOne
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <StepTwo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
    }
  }
}

export default VideoForm;
