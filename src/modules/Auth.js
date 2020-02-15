//Experimenting with Authentication Using Google OAUTH
import React from "react";
import { useState } from "react";
import GoogleLogin from "react-google-login";
import { connect } from "react-redux";
import { compose } from "redux";
import { GoogleLogout } from "react-google-login";

import * as actions from "../actions";

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.responseGoogle = this.responseGoogle.bind(this);
    this.LogoutSuccess = this.LogoutSuccess.bind(this);
  }
  async responseGoogle(response) {
    console.log("Google Response", response);
    await this.props.googleOauth(response.accessToken);
    if (!this.props.errorMessage) {
      await this.props.getProfileInfo();
    }
  }

  async LogoutSuccess() {
    console.log("Successfully Logged Out");
    this.props.signOut();
  }

  render() {
    return (
      <div>
        {/* Google Authentication Button using basic method */}
        <GoogleLogin
          clientId="253538920754-1qb2i7mgbmk0s2p7dhu1bg3g7hncpep1.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
        <GoogleLogout
          clientId="253538920754-1qb2i7mgbmk0s2p7dhu1bg3g7hncpep1.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={this.LogoutSuccess}
        />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    userData: store.user.userData
  };
};

export default compose(connect(null, actions))(Auth);
