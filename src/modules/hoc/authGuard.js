import React, { Component } from "react";
import { connect } from "react-redux";

export default OriginComponent => {
  class NewComponent extends Component {
    checkAuth() {
      if (this.props.isAuth && this.props.jwtToken) {
        console.log("User is authenticated");
      } else {
        console.log("User is not authenticated");
        this.props.history.push("/");
      }
    }

    componentDidMount() {
      //Is user auth?
      this.checkAuth();
    }

    componentDidUpdate() {
      //Is user auth?
      this.checkAuth();
    }
    render() {
      return <OriginComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return {
      isAuth: state.auth.isAuth,
      jwtToken: state.auth.token
    };
  }

  return connect(mapStateToProps)(OriginComponent);
};
