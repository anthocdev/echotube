import React from "react";
import { connect } from "react-redux";
import UserList from "./containers/User/UserList";
import { fetchUsers } from "../actions/UserActions";

class UserPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }

  render() {
    const Loaded = (
      <div>
        <h1> List of Users</h1>
        <UserList users={this.props.userData} />
      </div>
    );
    const Loading = (
      <div>
        <h1> Loading Users...</h1>
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
    userData: store.user.userData,
    isFetching: store.user.fetching
  };
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch: function(task) {
      dispatch(task);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
