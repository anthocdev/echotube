import React from "react";
import { connect } from "react-redux";
import * as PlaylistActions from "../actions/PlaylistActions";
import Playlists from "./containers/UserPlaylists";
import CreatePlaylistDialog from "./containers/Forms/PlaylistManagement/CreatePlaylistDialog";

/* Page for displaying playlists of signed in user */
class UserPlaylistsPage extends React.Component {
  componentDidMount() {
    this.props.getUserPlaylists();
  }

  render() {
    if (!this.props.userPlaylist.Playlists.length) {
      return <div>--No Playlists--</div>;
    }
    return (
      <div>
        <h1> Playlists </h1>
        <Playlists playlists={this.props.userPlaylist.Playlists} />
        <CreatePlaylistDialog />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    userPlaylist: state.userPlaylist,
  };
}

export default connect(mapStateToProps, PlaylistActions)(UserPlaylistsPage);
