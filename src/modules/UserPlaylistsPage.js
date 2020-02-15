import React from "react";
import { connect } from "react-redux";
import * as PlaylistActions from "../actions/PlaylistActions";
import Playlists from "./containers/UserPlaylists";

/* Page for displaying playlists of chosen user */
class UserPlaylistsPage extends React.Component {
  componentDidMount() {
    this.props.getPlaylistVideos();
  }

  render() {
    if (!this.props.userPlaylist.Playlists.length) {
      return <div>--No Playlists--</div>;
    }
    return (
      <div>
        <h1> Playlists </h1>
        <Playlists playlists={this.props.userPlaylist.Playlists} />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    userPlaylist: state.userPlaylist
  };
}

export default connect(mapStateToProps, PlaylistActions)(UserPlaylistsPage);
