import React from "react";
import Card from "react-bootstrap/Card";

export default function VideoItem({ index, video, selectedVideo }) {
  return (
    <div
      onClick={() => {
        selectedVideo(index, video.VideoLink);
      }}
    >
      <Card className="videoCard">
        <Card.Img
          variant="top"
          src={`https://i.ytimg.com/vi/${video.VideoLink}/hqdefault.jpg`}
        />
        <Card.ImgOverlay>
          <Card.Title>{video.Name}</Card.Title>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}
