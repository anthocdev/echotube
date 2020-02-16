import React from "react";
import Youtube from "react-youtube";
import { connect } from "react-redux";
import * as PlayerActions from "../../../actions/PlayerActions";
import { setPlayingIndex } from "../../../actions/playback";
import Player from ".";
import { Last } from "react-bootstrap/PageItem";

/* YouTube video player instance*/
class YoutubePlayer extends React.Component {
  constructor(props) {
    super(props);
    console.log("p[roasrsaarsarsp", this.props);
    this.state = {
      index: 0
    };
  }

  onReady = event => {
    event.target.playVideo();
    console.log(this.props.IsActive);
  };

  onEnd = event => {
    this.props.SetActiveItem(this.props.CurrentIndex + 1);
    event.target.playVideo();
    console.log(this.props.PlaybackQueue);
  };
  componentDidMount() {}

  render() {
    //Defining options for YouTube player
    const opts = {
      height: 620,
      width: 1040,
      playerVars: {
        autoplay: 1
      }
    };
    return (
      <div>
        <Youtube
          videoId={this.props.videoId} //Video ID
          opts={opts} //Options
          onReady={this.onReady} //When player is ready
          onEnd={this.onEnd} //When video ends
        />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    IsActive: state.player.IsActive,
    PlaybackQueue: state.player.PlaybackQueue,
    CurrentIndex: state.player.CurrentIndex,
    CurrentTime: state.player.CurrentTime,
    Volume: state.player.Volume
  };
}

export default connect(mapStateToProps, PlayerActions)(YoutubePlayer);
