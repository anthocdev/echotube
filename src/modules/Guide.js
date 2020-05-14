import React from "react";
import { AddPlaybackItem } from "../actions/PlayerActions";
import GuideVideo from "../content/guide.json";
import VideoCard from "../modules/containers/Videos/VideoCard";
import Terms from "../modules/containers/terms";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Icon } from "@material-ui/core";
import "../style/guide.css";
/* Guide page place holder - Currently one of the routes for testing */
class GuidePage extends React.Component {
  onSubmit = (data) => {
    console.log(data);
  };
  render() {
    if (!this.props.auth) {
      return (
        <div className="guidePage">
          <div className="guideContent">
            If you have not yet, read our terms of service in the rules section
            below. <br />
            <Button
              component={Link}
              to="/rules"
              variant="contained"
              color="primary"
              style={{
                backgroundColor: "rgba(153, 50, 204, 0.6)",
                color: "white",
                margin: "20px",
              }}
            >
              Rules
            </Button>{" "}
            <br />
            <AccountCircle style={{ fontSize: "60px" }} />
            <div className="arrow_box">
              Please sign in by clicking the following icon at the top right
              hand side of the page. <br />
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="guidePage">
        <div className="guideContent">
          If you have not yet, read our rules first. This includes our Terms of
          Service. <br />
          <Button
            component={Link}
            to="/rules"
            variant="contained"
            color="primary"
            style={{
              backgroundColor: "rgba(153, 50, 204, 0.6)",
              color: "white",
              margin: "20px",
            }}
          >
            Rules
          </Button>
          <br />
          <VideoCard
            video={GuideVideo}
            dispatch={this.props.AddPlaybackItem}
            isGuide={true}
          />
          <div className="arrow_box" style={{ marginTop: 0 }}>
            First, lets add this video to your Playback Queue. <br />
          </div>
        </div>
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
