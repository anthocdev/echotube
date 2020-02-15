import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import UserPlaylistPage from "./UserPlaylistsPage";
/* Page for displaying users stored in the server */
class UserPage extends React.Component {
  componentDidMount() {
    this.props.getProfileInfo();
  }

  render() {
    const Loaded = (
      <div>
        <h1> Profile Page</h1>
        <h1> {this.props.userData.Nickname}</h1>
        <img src={this.props.userData.ProfileImage} />
        <UserPlaylistPage />
      </div>
    );
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

const mapStateToProps = store => {
  return {
    userData: store.user
  };
};

export default connect(mapStateToProps, actions)(UserPage);
