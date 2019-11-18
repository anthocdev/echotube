import axios from "axios";

export function fetchUsers() {
  return function(dispatch) {
    axios
      .get("USER LIST REQUEST HERE")
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
