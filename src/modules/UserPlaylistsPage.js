import React from "react";
import UserPlaylists from "./containers/UserPlaylists";
import { connect } from "react-redux";
import { getUserPlaylists } from "../actions/EchoApiActions";

class UserPlaylistsPage extends React.Component {
  componentDidMount() {
    const { params } = this.props.match;
    this.props.dispatch(getUserPlaylists(params._id)); //Fetch user playlists by their id
  }

  render() {
    return (
      <div>
        <h1> Playlists </h1>
        <UserPlaylists playlists={this.props.userPlaylistData} />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  if (props.match.params._id) {
    return {
      userPlaylistData: state.userPlaylist.userPlaylistData
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

export default connect(mapStateToProps, mapDispatchToProps)(UserPlaylistsPage);
