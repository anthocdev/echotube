//Confirm adding the video after -> submit
import React from "react";
import VideoCard from "../YouTube/YoutubeVideoCard";
function SubmitVideo(props) {
  if (props.currentStep !== 2) {
    return null;
  }

  //Check if video is still being fetched
  if (props.isFetching) {
    return <div> Loading Video... </div>;
  }
  if (props.error) {
    return <div>Error occured: {props.error.message}</div>;
  }
  if (props.videoData.pageInfo.totalResults == 0) {
    return <div>No results returned, maybe your link is invalid?</div>;
  }

  const video = props.videoData.items[0];
  var postVid = {
    videoName: video.snippet.title,
    videoDescription: video.snippet.description,
    channelName: video.snippet.channelTitle,
    channelId: "tba",
    videoLink: video.id
  };

  return (
    <div className="form-group">
      <VideoCard youtubeVideo={video} key={video.id} />
      <input
        type="submit"
        value="Submit"
        onClick={() => props.postVideo(postVid)}
      />
    </div>
  );
}

export default SubmitVideo;
