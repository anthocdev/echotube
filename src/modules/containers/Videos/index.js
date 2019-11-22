import React from "react";
import UserVideoCard from "./VideoCard";
export default function Videos({ videos }) {
  const noVideosMessage = <p>No videos found in this playlist.</p>;

  const playlistVideoList = (
    <div className="card">
      {videos.map(video => (
        <UserVideoCard video={video} key={video.VideoID} />
      ))}
    </div>
  );

  return <div>{videos.length === 0 ? noVideosMessage : playlistVideoList}</div>;
}
