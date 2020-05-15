import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import UserPlaylistPage from "./UserPlaylistsPage";
import "../style/userpage.css";
/* Displays user after parsing profile info from the API. */
class UserPage extends React.Component {
  componentDidMount() {
    this.props.getProfileInfo();
  }

  render() {
    const Loaded = (
      <div className="container-fluid">
        <h1 className="header"> Profile Page</h1>
        <div className="profile">
          <h1> {this.props.userData.Nickname}</h1>
          <img
            className="profile-image"
            src={this.props.userData.ProfileImage}
            width="200px"
            height="200px"
          />
        </div>
        <UserPlaylistPage />
        <div className="bluroverlay" />
      </div>
    );
    {
      /* On loading state */
    }
    const Loading = (
      <div>
        <h1> Loading Profile...</h1>
      </div>
    );

    if (this.props.isFetching) {
      return Loading;
    }

    return Loaded;
  }
}

const mapStateToProps = (store) => {
  return {
    userData: store.user,
  };
};

export default connect(mapStateToProps, actions)(UserPage);
