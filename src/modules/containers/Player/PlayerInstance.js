import React from "react";
import VideoItem from "./VideoItem";
import CardColumns from "react-bootstrap/Card";
import * as PlayerActions from "../../../actions/PlayerActions";
import YoutubePlayer from "./YoutubePlayer";
import { connect } from "react-redux";
import "../../../style/player.css";
import { Link } from "react-router-dom";

/* Player overlay with YouTube iframe and custom video listing column */

class Player extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  state = {
    currentlyPlaying: null,
    playIndex: null,
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
      <div className="videoItems">
        {this.props.player.PlaybackQueue.map((data, i) => (
          <VideoItem
            video={data}
            key={i}
            index={i}
            selectedVideo={this.selectVideo}
            dispatchRemove={this.props.RemovePlaybackItem}
          />
        ))}
      </div>
    ); //Generate video list by mapping data from playbackItems state

    const playerContainer = (
      <div className="main">
        <div className="player-container">
          <YoutubePlayer videoId={this.UpdatePlayback()} />
        </div>
        <div className="queue-container">
          {this.props.player.PlaybackQueue.length > 0 ? (
            mapVideos
          ) : (
            <Link to="/user">
              <div
                className="novideos"
                onClick={() => this.props.closeWindow()}
              >
                No videos in queue, go add some!
              </div>
            </Link>
          )}
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
