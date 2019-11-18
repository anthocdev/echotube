import React from "react";
import { connect } from "react-redux";
import { fetchPlaylist } from "../../actions/YoutubeApiActions";
const API_KEY = `AIzaSyB2yKogm2aT-hE-wd-AYqUXezzXcHCCKXs`;
const GET_PLAYLIST = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLo54HDlG7fz1kQqxl2q2sp7JndjyziP8o&key=${API_KEY}`;

class Playlist extends React.Component {
  componentDidMount() {
    // fetch(GET_PLAYLIST)
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({ playlistData: data.items });
    //   })
    //   .catch(console.log);
  }

  render() {
    console.log(this.props);
    const { playlistData } = this.props;
    if (playlistData.length < 1) {
      return (
        <div>
          <button onClick={() => this.props.dispatch(fetchPlaylist())}>
            Get Playlist
          </button>
        </div>
      );
    }

    return (
      <div>
        {playlistData.items.map((data, i) => (
          <li key={i}>
            <img src={data.snippet.thumbnails.default.url} />
            <div>{data.snippet.title}</div>
          </li>
        ))}
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    playlistData: store.playlist.playlistData,
    isLogged: store.isLogged
  };
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch: function(task) {
      dispatch(task);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
