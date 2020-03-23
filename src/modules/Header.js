import React from "react";
import { connect } from "react-redux";
import HeaderMain from "./header/headerBuild";
import * as actions from "../actions";

class Header extends React.Component {
  render() {
    //Using functional header with states
    return <HeaderMain isAuth={this.props.isAuth} />;
  }
}

const mapStateToProps = store => {
  return {
    isAuth: store.auth.isAuth
  };
};

export default connect(mapStateToProps, actions)(Header);
