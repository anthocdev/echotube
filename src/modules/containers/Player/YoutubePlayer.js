import React from "react";
import Youtube from "react-youtube";
import { connect } from "react-redux";
import { setPlayingIndex } from "../../../actions/playback";

/* YouTube video player instance*/
class YoutubePlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0
    };
  }

  componentDidMount() {}

  render() {
    //Defining options for YouTube player
    const opts = {
      height: 320,
      width: 540,
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

  onReady(event) {
    event.target.playVideo();
  }

  onEnd(event) {
    //To be implemented -> Play next video
  }
}

function mapStateToProps(state, props) {
  return {
    playbackItems: state.player.playbackItems,
    currentIndex: state.player.currentIndex
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: function(task) {
      dispatch(task);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(YoutubePlayer);
