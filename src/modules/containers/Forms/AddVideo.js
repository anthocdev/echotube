import React from "react";
import { connect } from "react-redux";
import { getVideoInfo } from "../../../actions/YoutubeApiActions";
//Input for reading video link

function AddVideo(props) {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <div className="form-group">
      <label htmlFor="videoId">Video ID</label>
      <input
        className="form-control"
        id="videoLink"
        name="videoLink"
        type="text"
        placeholder="Enter video ID"
        value={props.videoLink} // Prop: The email input data
        onChange={props.handleChange} // Prop: Puts data into state
      />
    </div>
  );
}

export default AddVideo;
