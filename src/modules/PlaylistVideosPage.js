import React from "react";
import Videos from "./containers/Videos";
import { getPlaylistVideos } from "../actions/VideoActions";
import { AddPlaybackItem } from "../actions/PlayerActions";
import { connect } from "react-redux";
import AddVideoForm from "./containers/Forms/AddVideoForm";
import { updatePlaybackQueue } from "../actions/playback";

/* Playlist video page class for displaying all videos within user playlist, with functionalities of adding items to player queue */
class PlaylistVideosPage extends React.Component {
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
        <h1> Videos </h1>
        <button className="btn btn-warning" onClick={() => this.addVideos()}>
          Add All Videos to Queue
        </button>
        <div>
          <Videos
            videos={this.props.playlistVideosData}
            dispatch={this.props.AddPlaybackItem}
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
      playlistVideosData: state.userPlaylistVideos.Videos,
      player: state.player
    };
  }
}

export default connect(mapStateToProps, { getPlaylistVideos, AddPlaybackItem })(
  PlaylistVideosPage
);
