import React from "react";
import Videos from "./containers/Videos";
import { connect } from "react-redux";
import { getPlaylistVideos } from "../actions/EchoApiActions";
import AddVideoForm from "./containers/Forms/AddVideoForm";

class PlaylistVideosPage extends React.Component {
  componentDidMount() {
    const { params } = this.props.match;
    this.props.dispatch(getPlaylistVideos(params._id)); //Fetch user playlists by their id
  }

  render() {
    return (
      <div>
        <h1> Videos </h1>
        <Videos videos={this.props.playlistVideosData} />
        <AddVideoForm pageId={this.props.match.params._id} />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  if (props.match.params._id) {
    return {
      playlistVideosData: state.userPlaylistVideos.playlistVideoData
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
