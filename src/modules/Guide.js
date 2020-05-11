import React from "react";
import { AddPlaybackItem } from "../actions/PlayerActions";
import GuideVideo from "../content/guide.json";
import VideoCard from "../modules/containers/Videos/VideoCard";
import Terms from "../modules/containers/terms";
import { connect } from "react-redux";
import "../style/guide.css";
/* Guide page place holder - Currently one of the routes for testing */
class GuidePage extends React.Component {
  onSubmit = (data) => {
    console.log(data);
  };
  render() {
    if (!this.props.auth) {
      return (
        <div className="guide">
          If you have not yet, read our terms of service below. <br /> <Terms />{" "}
          <br />
          Please sign in first, using top right profile panel.
        </div>
      );
    }
    return (
      <div className="guide">
        If you have not yet, read our terms of service below. <br /> <Terms />{" "}
        <br />
        <VideoCard
          video={GuideVideo}
          dispatch={this.props.AddPlaybackItem}
          isGuide={true}
        />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    player: state.player,
    auth: state.auth.isAuth,
  };
}

export default connect(mapStateToProps, {
  AddPlaybackItem,
})(GuidePage);
