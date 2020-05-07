import React from "react";
import { connect } from "react-redux";
import * as PlaylistActions from "../actions/PlaylistActions";
import Playlists from "./containers/UserPlaylists";
import CreatePlaylistDialog from "./containers/Forms/PlaylistManagement/CreatePlaylistDialog";
import "../style/playlists.css";
import { withRouter } from "react-router-dom";
import { Button } from "@material-ui/core";

/* Page for displaying playlists of signed in user */
class UserPlaylistsPage extends React.Component {
  componentDidMount() {
    this.props.getUserPlaylists();
  }

  render() {
    if (!this.props.userPlaylist.Playlists.length) {
      return (
        <div className="playlistheader">
          --No Playlists-- <CreatePlaylistDialog />
        </div>
      );
    }
    return (
      <div>
        <h1 className="playlistheader"> Available Playlists </h1>
        <Playlists playlists={this.props.userPlaylist.Playlists} />
        <div className="d-flex justify-content-center pt-4">
          <CreatePlaylistDialog />
        </div>
        <div>
          <pre>{this.context.history}</pre>
        </div>
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
