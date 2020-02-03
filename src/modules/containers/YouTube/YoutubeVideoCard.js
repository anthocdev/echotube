import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

//Video detail card for YouTube videos, uses json object structure as pulled from YouTube API v3
export default function YoutubeVideoCard({ youtubeVideo }) {
  const { title, description, channelTitle } = youtubeVideo.snippet;
  const { id } = youtubeVideo;

  return (
    <div className="card">
      <div className="card-img-top">
        <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} />
      </div>
      <div className="content">
        <Nav.Link href={`https://www.youtube.com/watch?v=${id}`}>
          {title}
        </Nav.Link>
        <div>Description: {description}</div>
        <div>Channel Name: {channelTitle}</div>
      </div>
    </div>
  );
}
