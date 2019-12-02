import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { updatePlaybackQueue } from "../../../actions/playback";

/* Video card display function for video objects */
export default function VideoCard({ video, dispatch }) {
  return (
    <div className="card">
      <div className="card-img-top">
        <img src={`https://i.ytimg.com/vi/${video.VideoLink}/hqdefault.jpg`} />
      </div>
      <div className="content">
        <Nav.Link href={`https://www.youtube.com/watch?v=${video.VideoLink}`}>
          {video.Name}
        </Nav.Link>
        <div>Description: {video.Description}</div>
        <div>Channel Name: {video.ChannelName}</div>
        <button onClick={() => dispatch(updatePlaybackQueue(video))}>
          Add Video to Queue
        </button>
      </div>
    </div>
  );
}
