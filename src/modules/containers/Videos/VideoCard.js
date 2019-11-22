import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function VideoCard({ video }) {
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
      </div>
    </div>
  );
}
