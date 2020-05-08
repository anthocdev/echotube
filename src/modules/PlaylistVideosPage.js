import React from "react";
import Videos from "./containers/Videos";
import {
  getPlaylistVideos,
  removePlaylistVideo,
} from "../actions/VideoActions";
import { AddPlaybackItem } from "../actions/PlayerActions";
import { connect } from "react-redux";
import ModalVideoForm from "./containers/Forms/VideoImportWizard/ModalWindow";
import { Button, Divider } from "@material-ui/core";
import "../style/playlist.css";

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
      return (
        <div>
          --No Videos--
          <ModalVideoForm playlistId={this.props.match.params._id} />
        </div>
      );
    }

    return (
      <div className="playlist">
        <div className="bluroverlay" />
        <h1> Viewing Playlist: {this.props.playlistName}</h1>
        <Button
          style={{
            backgroundColor: "rgba(155, 57, 223,0.8)",
            color: "#FFFFFF",
          }}
          variant="contained"
          onClick={() => this.addVideos()}
        >
          Add All Videos to Queue
        </Button>
        <Divider />
        <div style={{ paddingTop: 10 }}>
          <Videos
            videos={this.props.playlistVideosData}
            dispatch={this.props.AddPlaybackItem}
            delDispatch={this.props.removePlaylistVideo}
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

export default connect(mapStateToProps, {
  getPlaylistVideos,
  removePlaylistVideo,
  AddPlaybackItem,
})(PlaylistVideosPage);
