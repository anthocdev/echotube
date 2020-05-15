import React from "react";
import { connect } from "react-redux";
import { fetchPlaylist } from "../actions/YoutubeApiActions";
import { getUserPlaylists } from "../actions/EchoApiActions";
/* Test Parsing youtube playlists using Actions & Reducers */
class Playlist extends React.Component {
  componentDidMount() {}

  render() {
    console.log(this.props);
    const {
      userPlaylistData,
      playlistData,
      isLogged,
      selectedUser,
    } = this.props;

    if (!isLogged) {
      return <div>Not logged in, select a user from navbar above.</div>;
    }

    const userPlaylistDataMap = (
      <div>
        {userPlaylistData.map((data, i) => (
          <li key={i}>
            <div>{data.Name}</div>
          </li>
        ))}
      </div>
    );

    if (playlistData.length < 1 && userPlaylistData.length < 1) {
      return (
        <div>
          <div>Core playlist for user {selectedUser.Nickname}</div>
          <button
            onClick={() =>
              this.props.dispatch(getUserPlaylists(selectedUser.UserID))
            }
          >
            Get User Playlist
          </button>
          <button
            onClick={() =>
              this.props.dispatch(
                fetchPlaylist("PLo54HDlG7fz1kQqxl2q2sp7JndjyziP8o")
              )
            }
          >
            Get Playlist
          </button>
        </div>
      );
    }

    return (
      <div>
        {/* {playlistData.items.map((data, i) => (
          <li key={i}>
            <img src={data.snippet.thumbnails.default.url} />
            <div>{data.snippet.title}</div>
          </li>
        ))} */}

        {userPlaylistDataMap}
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    playlistData: store.playlist.playlistData,
    userPlaylistData: store.userPlaylist.userPlaylistData,
    isLogged: store.user.loggedIn,
    selectedUser: store.user.selectedUser,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch: function (task) {
      dispatch(task);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
