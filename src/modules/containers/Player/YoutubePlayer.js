import React from "react";
import Youtube from "react-youtube";
import { connect } from "react-redux";
class YoutubePlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    //Defining options for YouTube player
    const opts = {
      height: 640,
      width: 1080,
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
    event.target.pauseVideo();
  }

  onEnd(event) {}
}

function mapStateToProps(state, props) {
  return {
    playlistVideosData: state.playlist.playlistVideoData,
    playlistLoaded: state.playlist.fetching
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
