import React from "react";
import Videos from "./containers/Videos";
import { getPlaylistVideos } from "../actions/VideoActions";
import { AddPlaybackItem } from "../actions/PlayerActions";
import { connect } from "react-redux";
import ModalVideoForm from "./containers/Forms/VideoImportWizard/ModalWindow";
import { updatePlaybackQueue } from "../actions/playback";

/* Playlist video page class for displaying all videos within user playlist, with functionalities of adding items to player queue */
class PlaylistVideosPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  componentDidMount() {
    const { params } = this.props.match;
    //Pull Videos from specified playlist ID
    this.props.getPlaylistVideos(params._id);
  }

  addVideos() {
    {
      this.props.playlistVideosData.map((item, index) =>
        this.props.AddPlaybackItem(item)
      );
    }
  }
  render() {
    if (!this.props.playlistVideosData.length) {
      return <div>--No Videos--</div>;
    }

    return (
      <div>
        <h1> Viewing Playlist: {this.props.playlistName}</h1>
        <button
          className="btn btn-warning"
          onClick={() => this.addVideos()}
          style={{
            background: "rgba(153, 50, 204, 0.9)",
            color: "#ffffff",
            borderRadius: 8,
          }}
        >
          Add All Videos to Queue
        </button>
        <div style={{ paddingTop: 10 }}>
          <Videos
            videos={this.props.playlistVideosData}
            dispatch={this.props.AddPlaybackItem}
          />
        </div>
        <ModalVideoForm playlistId={this.props.match.params._id} />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  if (props.match.params._id) {
    return {
      playlistName: state.userPlaylistVideos.PlaylistName,
      playlistVideosData: state.userPlaylistVideos.Videos,
      player: state.player,
    };
  }
}

export default connect(mapStateToProps, { getPlaylistVideos, AddPlaybackItem })(
  PlaylistVideosPage
);
