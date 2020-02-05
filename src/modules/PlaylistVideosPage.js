import React from "react";
import Videos from "./containers/Videos";
import { connect } from "react-redux";
import { getPlaylistVideos } from "../actions/EchoApiActions";
import AddVideoForm from "./containers/Forms/AddVideoForm";
import { updatePlaybackQueue } from "../actions/playback";

/* Playlist video page class for displaying all videos within user playlist, with functionalities of adding items to player queue */
class PlaylistVideosPage extends React.Component {
  componentDidMount() {
    const { params } = this.props.match;
    this.props.dispatch(getPlaylistVideos(params._id)); //Fetch user playlists by their id
  }

  addVideos() {
    {
      this.props.playlistVideosData.map((item, index) =>
        this.props.dispatch(updatePlaybackQueue(item))
      );
    }
  }
  render() {
    return (
      <div>
        <h1> Videos </h1>
        <button className="btn btn-warning" onClick={() => this.addVideos()}>
          Add All Videos to Queue
        </button>
        <div>
          <Videos
            videos={this.props.playlistVideosData}
            dispatch={this.props.dispatch}
          />
        </div>
        <AddVideoForm pageId={this.props.match.params._id} />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  if (props.match.params._id) {
    return {
      playlistVideosData: state.userPlaylistVideos.playlistVideoData,
      player: state.player
    };
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: function(task) {
      dispatch(task);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistVideosPage);