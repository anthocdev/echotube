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
  }
  async responseGoogle(response) {
    console.log("Google Response", response);
    await this.props.googleOauth(response.accessToken);
    if (!this.props.errorMessage) {
      this.props.history.push("/");
    }
  }

  render() {
    function LogoutSuccess() {
      console.log("Successfully Logged Out");
    }

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
          onLogoutSuccess={LogoutSuccess}
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

function mapDispatchToProps(dispatch) {
  return {
    dispatch: function(task) {
      dispatch(task);
    }
  };
}

export default compose(connect(null, actions))(Auth);
