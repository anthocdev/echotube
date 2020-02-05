import React from "react";
import AddVideo from "./AddVideo";
import SubmitVideo from "./ConfirmVideo";
import { getVideoInfo } from "../../../actions/YoutubeApiActions";
import {
  postVideoToPlaylist,
  getPlaylistVideos
} from "../../../actions/EchoApiActions";
import { connect } from "react-redux";
//Overall form for adding new videos to a playlist

class AddVideoForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.postVid = this.postVid.bind(this);

    this.state = {
      currentStep: 1,
      videoLink: "",
      videoName: "",
      videoDescription: "",
      channelName: "",
      channelId: "",
      postData: []
    };
  }

  //Event handlers

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { videoLink, videoName } = this.state;
    alert(`Video Link: ${videoLink} \n videoName: ${videoName}`);
    //@ToDo -> Dispatch POST for video to store it in database (Linked with playlistID)
    this.props.dispatch(
      postVideoToPlaylist(this.props.pageId, this.state.postData)
    );
    if (this.props.postVideo.posted) {
      alert("Successfully Added Video - " + { videoName });
    }
  };

  postVid(video) {
    this.setState({
      postData: video
    });
  }
  //Subfrom navigation functions
  _next = () => {
    let currentStep = this.state.currentStep;
    let videoId = this.state.videoLink;
    //Do some video link validation here
    if (this.state.videoLink.length <= 0) {
      return;
    }
    //Dispatch video request after first step
    if (this.state.currentStep == 1) {
      if (this.state.videoLink.length > 0) {
        this.props.dispatch(getVideoInfo(videoId));
      }
    }

    currentStep = currentStep >= 1 ? 2 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  };

  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  };

  /*
   * Button functions
   */
  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary"
          type="button"
          onClick={this._prev}
        >
          Back
        </button>
      );
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button"
          onClick={this._next}
        >
          Next
        </button>
      );
    }
    return null;
  }

  render() {
    return (
      <React.Fragment>
        <h1 style={{ color: "purple" }}>Add Video</h1>
        <p>Step {this.state.currentStep}</p>

        <form onSubmit={this.handleSubmit}>
          <AddVideo
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            videoLink={this.state.videoLink}
          />
          <SubmitVideo
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            isFetching={this.props.isFetching}
            videoData={this.props.videoData}
            error={this.props.error}
            state={this.state}
            postVideo={this.postVid}
          />
          {this.previousButton()}
          {this.nextButton()}
        </form>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    videoData: state.video.videoData,
    isFetching: state.video.fetching,
    error: state.video.error,
    postVideo: state.postUserVideo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: function(task) {
      dispatch(task);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddVideoForm);
