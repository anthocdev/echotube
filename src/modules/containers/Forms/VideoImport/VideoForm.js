import React, { Component } from "react";
import VideoFormStepOne from "./VideoFormStepOne";
import VideoFormConfirm from "./VideoFormConfirm";
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

class VideoForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      page: 1
    };
  }

  async handleSubmit(event) {
    alert(event);
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { page } = this.state;
    return (
      <div>
        {page === 1 && <VideoFormStepOne onSubmit={this.nextPage} />}
        {page === 2 && (
          <VideoFormConfirm
            onSubmit={this.handleSubmit}
            previousPage={this.previousPage}
          />
        )}
      </div>
    );
  }
}

export default VideoForm;
