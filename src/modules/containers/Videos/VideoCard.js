import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { updatePlaybackQueue } from "../../../actions/playback";

/* Video card display function for video objects */
export default function VideoCard({ video, dispatch }) {
  return (
    <div className="card" style={{ width: "50rem" }}>
      <div className="card-img-top p-1">
        <img src={`https://i.ytimg.com/vi/${video.VideoLink}/hqdefault.jpg`} />
      </div>
      <div className="content">
        <Nav.Link
          className="VideoName"
          href={`https://www.youtube.com/watch?v=${video.VideoLink}`}
        >
          {video.Name}
        </Nav.Link>
        <div
          style={{
            backgroundColor: "rgba(136, 6, 187, 0.356)",
            color: "rgba(128, 11, 83, 0.959)"
          }}
        >
          <div>Description: {video.Description}</div>
        </div>
        <div className="ChannelName">Channel Name: {video.ChannelName}</div>

        <button
          className="btn btn-dark"
          style={{ margin: "4px" }}
          onClick={() => dispatch(updatePlaybackQueue(video))}
        >
          Add Video to Queue
        </button>
      </div>
    </div>
  );
}
