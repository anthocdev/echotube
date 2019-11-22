import axios from "axios";

export function fetchUsers() {
  const userList = "http://localhost:3001/api/users/";

  return function(dispatch) {
    dispatch({ type: "FETCH_USERS_START" });
    axios
      .get(userList)
      .then(response => {
        dispatch({
          type: "FETCH_USERS_SUCCESS",
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({ type: "FETCH_USERS_ERROR", payload: err });
      });
  };
}

export function selectUser(selectedUser) {
  return function(dispatch) {
    dispatch({
      type: "SELECT_USER_SUCCESS",
      payload: selectedUser
    });
  };
}
