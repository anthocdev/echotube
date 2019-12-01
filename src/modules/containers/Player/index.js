import React from "react";
import VideoItem from "./VideoItem";
import CardColumns from "react-bootstrap/Card";
import YoutubePlayer from "./YoutubePlayer";
import { togglePlayer } from "../../../actions/playback";
import { connect } from "react-redux";
import { Collapse } from "react-bootstrap";

class Player extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  state = {
    currentlyPlaying: null,
    playIndex: null
  };

  selectVideo = (index, videoLink) => {
    this.setState({
      currentlyPlaying: videoLink,
      playIndex: index
    });
  };

  togglePlayer() {
    this.setState({ showPlayer: !this.state.showPlayer });
  }

  render() {
    const playerVisible = this.props.player.isVisible;
    const mapVideos = (
      <div>
        {this.props.player.playbackItems.map((data, i) => (
          <CardColumns className="videoColumns">
            <VideoItem
              video={data}
              key={i}
              index={i}
              selectedVideo={this.selectVideo}
            />
          </CardColumns>
        ))}
      </div>
    );

    const playerContainer = (
      <div>
        {" "}
        <div className="left-container">
          <YoutubePlayer
            videoId={this.state.currentlyPlaying}
            selectedVideo={this.selectVideo}
          />
        </div>
        <div className="right-container">
          <div className="playlistColumn">{mapVideos}</div>
        </div>
      </div>
    );

    return (
      <div>
        <div className="playerMain">
          <button
            className="PlayerButton"
            onClick={() => this.props.dispatch(togglePlayer(playerVisible))}
          >
            {/*Change playerVisible property*/}
            Toggle Player
          </button>
          {playerVisible ? playerContainer : <div></div>}
          {/*Display player container based on playerVisible property*/}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    player: state.player
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: function(task) {
      dispatch(task);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
