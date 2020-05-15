import React from "react";
import { connect } from "react-redux";
import HeaderMain from "./header/headerBuild";
import * as actions from "../actions";

class Header extends React.Component {
  constructor(props) {
    super(props);
    //Binding google login and logout methods
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
    this.props.signOut(); //User signout prop from actions
  }

  render() {
    //Using functional header with states
    return (
      <HeaderMain
        isAuth={this.props.isAuth}
        responseGoogle={this.responseGoogle}
        logoutSuccess={this.LogoutSuccess}
      />
    );
  }
}

const mapStateToProps = (store) => {
  return {
    isAuth: store.auth.isAuth,
    userData: store.user.userData,
  };
};

export default connect(mapStateToProps, actions)(Header);
