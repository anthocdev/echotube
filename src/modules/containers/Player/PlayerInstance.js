import React from "react";
import VideoItem from "./VideoItem";
import CardColumns from "react-bootstrap/Card";
import * as PlayerActions from "../../../actions/PlayerActions";
import YoutubePlayer from "./YoutubePlayer";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";

/* Player overlay with YouTube iframe and custom video listing column */

class Player extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  state = {
    currentlyPlaying: null,
    playIndex: null,
  };

  removeFromQueue = (index) => {
    this.props.RemovePlaybackItem(index);
  };

  selectVideo = (index, videoLink) => {
    this.props.SetActiveItem(index);

    this.setState({
      currentlyPlaying: videoLink,
      playIndex: index,
    });
  };

  UpdatePlayback = () => {
    if (this.props.PlaybackQueue[this.props.CurrentIndex] != undefined) {
      return this.props.PlaybackQueue[this.props.CurrentIndex].VideoLink;
    } else {
      return null;
    }
  };

  render() {
    const mapVideos = (
      <div>
        {this.props.player.PlaybackQueue.map((data, i) => (
          <CardColumns className="videoColumns">
            <VideoItem
              video={data}
              key={i}
              index={i}
              selectedVideo={this.selectVideo}
            />
            <Button onClick={() => this.removeFromQueue(i)}>Remove</Button>
          </CardColumns>
        ))}
      </div>
    ); //Generate video list by mapping data from playbackItems state

    const playerContainer = (
      <div className="playerMain">
        <div className="left-container">
          <YoutubePlayer videoId={this.UpdatePlayback()} />
        </div>
        <div className="right-container">
          <div className="playlistColumn">
            {this.props.player.PlaybackQueue.length > 0 ? (
              mapVideos
            ) : (
              <div>No videos available</div>
            )}
          </div>
        </div>
      </div>
    );

    return (
      <div>
        <div className="Main">{playerContainer}</div>
      </div>
    );
  }
}

function mapStateToProps(store, props) {
  return {
    player: store.player,
    PlaybackQueue: store.player.PlaybackQueue,
    CurrentIndex: store.player.CurrentIndex,
  };
}

export default connect(mapStateToProps, PlayerActions)(Player);
