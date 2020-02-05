import React from "react";
import UserVideoCard from "./VideoCard";
/* Function for displaying list of videos using video cards */
export default function Videos({ videos, dispatch }) {
  const noVideosMessage = <p>No videos found in this playlist.</p>;

  const playlistVideoList = (
    <div className="btn">
      {videos.map(video => (
        <UserVideoCard video={video} dispatch={dispatch} key={video.VideoID} />
      ))}
    </div>
  );

  return <div>{videos.length === 0 ? noVideosMessage : playlistVideoList}</div>;
}
